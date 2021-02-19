const express = require('express');
const Receta = require('../models/receta');
const app = express();

//todas las recetas de un usuario
app.get('/receta/:id',(req,res)=>{
    Receta.find({usuario:req.params.id},(err,recetas)=>{
        if(err){
            return res.json({
                ok:false,
                err
            })
        }
        res.json({
            ok:true,
            recetas
        })
    })
})

//ver las recetas de todo el mundo
app.get('/receta',(req,res)=>{
    Receta.find()
    .exec((err,recetas)=>{
        if(err){
            return res.json({
                ok:false,
                err
            })
        }
        res.json({
            ok:true,
            recetas
        })
    })
})

//buscar un termino en especifico por nombre de receta
app.get('/recetaB/:termino',(req, res) => {
    let termino = req.params.termino;
    let regex = new RegExp(termino, 'i');

    Receta.find({ nombre: regex },(err, receta) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
                });
            }
            if (!receta) {
                return res.status(400).json({
                    ok: false,
                    err
                });
            }else
            res.status(200).json({
                ok: true,
                receta
            });
        
        });
});


//postear una receta
app.post('/receta/:id',(req,res)=>{
    let id=req.params.id;
    let body=req.body;
    let receta = new Receta({
        nombre:body.nombre,
        descripcion:body.descripcion,
        ingredientes:body.ingredientes,
        pasos:body.pasos,
        fecha:new Date(),
        usuario:id
    })

    receta.save((err,recetaSubida)=>{
        if(err){
            return res.json({
                ok:false,
                err
            })
        }
        res.json({
            ok:true,
            recetaSubida
        })
    })
})

app.delete('/receta/:id/:receta',(req,res)=>{
    Receta.findByIdAndRemove(req.params.receta,(err,recetaBorrada)=>{
        if(err){
            return res.json({
                ok:false,
                err
            })
        }
        res.json({
            ok:true,
            recetaBorrada
        })
    })
})


module.exports=app;