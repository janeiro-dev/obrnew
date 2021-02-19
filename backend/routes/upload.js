const express = require('express');
const fileUpload = require('express-fileupload');
const { indexOf } = require('underscore');
const fs = require('fs');
const path = require('path');
const app = express();

app.use(fileUpload());

const Usuario = require('../models/usuario');

app.put('/upload/:id', (req, res) => {
    let id = req.params.id;
    if (!req.files) {
        return res.status(400).json({
            ok: false,
            err: {
                message: 'No se ha seleccionado ningun archivo'
            }
        });
    }

    let archivo = req.files.archivo;
    let nombreCortado = archivo.name.split('.');
    let extension = nombreCortado[nombreCortado.length - 1];
    //Extensiones permitidas
    let extensionesValidas = ['png', 'jpg', 'gif', 'jpeg'];

    if (extensionesValidas.indexOf(extension) < 0) {
        res.status(400).json({
            ok: false,
            err: {
                message: 'Las extensiones permitidas son: ' + extensionesValidas.join(', '),
                ext: extension
            }
        });
    }

    //cambiar el nombre del archivo
    let nombreArchivo = `${id}-${new Date().getMilliseconds()}.${extension}`

    //subir o no
    archivo.mv(__dirname + '/../../uploads/usuarios/' +nombreArchivo, (err) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err:err+"error 1"
            });
        }

            imagenUsuario(id, res, nombreArchivo);

    });
});


function imagenUsuario(id, res, nombreArchivo) {
    Usuario.findById(id, (err, usuarioDB) => {
        if (err) {
            borraArchivo(nombreArchivo);
            return res.status(500).json({
                ok: false,
                err:err+'error al subir 2'
            });
        }
        if (!usuarioDB) {
            borraArchivo(nombreArchivo);
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'Usuario no existente'
                }
            });
        }

        borraArchivo(usuarioDB.img);

        usuarioDB.img = nombreArchivo;
        usuarioDB.save((err, usuarioGuardado) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
                });
            }
            res.status(200).json({
                ok: true,
                usuarioGuardado,
                img: nombreArchivo
            })
        });
    })
}

function borraArchivo(nombreImagen) {
    let pathImagen = path.resolve(__dirname,`../../uploads/usuarios/${nombreImagen}`)
    if (fs.existsSync(pathImagen)) {
        fs.unlinkSync(pathImagen);
    }
}

module.exports = app;