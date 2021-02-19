const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();



app.get('/imagen/:img', (req, res) => {
    let img = req.params.img;

    let pathImagen = path.resolve(__dirname, `../../uploads/usuarios/${img}`)

    //si la imagen existe en esta ruta muestrala sino muestra la imagen no found
    if (fs.existsSync(pathImagen)) {
        res.sendFile(pathImagen);
    } else {
        let noImagePath = path.resolve(__dirname, '../assets/no-image.jpg');
        res.sendFile(noImagePath);
    }



});

module.exports = app;