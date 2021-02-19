const express = require('express');
const bcrypt = require('bcrypt');
const Usuario = require('../models/usuario');
const app = express();

app.get('/login/:id',(req,res)=>{
    let id = req.params.id;
  Usuario.findOne({_id:req.params.id},(err,usuarioLogueado)=>{
    if(err){
        return res.json({
            ok:false,
            err
        })
    }

    if(!usuarioLogueado){
        return res.json({
            ok:false,
            err:{
                message:`No se ha logueado el usuario con id ${id}`
            }
        })
    }

    res.status(200).json({
        ok:true,
        usuarioLogueado,
        message:'usuario logueado encontrado'
    })

  })
})

app.post('/login',(req,res)=>{
let body = req.body;
  Usuario.findOne({email:body.email},(err,usuario)=>{
    if(err){
        return res.json({
            ok:false,
            err
        })
    }

    if(!usuario){
        return res.json({
            ok:false,
            err:{
                message:'(Usuario) o contraseña incorrecto'
            }
        })
    }

    if(body.password!==usuario.password){
        return res.json({
            ok:false,
            err:{
                message:'Usuario o (contraseña) incorrecto'
            }        
        })
    }

    res.status(200).json({
        ok:true,
        usuario,
        message:'usuario logueado'
    })

  })
})

module.exports = app;