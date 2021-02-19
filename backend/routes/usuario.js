const express = require('express');
const Usuario = require('../models/usuario');
const bcrypt = require('bcrypt');
const app = express();

app.get('/usuario',(req,res)=>{
    Usuario.find()
         .exec((err,usuarios)=>{
             if(err){
                 return res.json({
                     ok:false,
                     err:err+'No se pudo llamar los usuarios logueados'
                 })
             }

             res.json({
                 ok:true,
                 usuarios
             })
         })
});

app.get('/usuario/:id',(req,res)=>{
    Usuario.findById(req.params.id)
         .exec((err,usuarios)=>{
             if(err){
                 return res.json({
                     ok:false,
                     err:err+'No se pudo llamar los usuarios logueados'
                 })
             }

             res.json({
                 ok:true,
                 usuarios
             })
         })
});

app.post('/usuario',(req,res)=>{
    const body = req.body;
    let usuario = new Usuario({
        nombre:body.nombre,
        apellido:body.apellido,
        email:body.email,
        password:body.password,
        fecha:new Date()
    });

   usuario.save((err,usuario)=>{
        if(err){
            return res.json({
                ok:false,
                err
            })
        }
        res.json({
            ok:true,
            usuario
        })
    })


});


app.put('/usuario/:id',(req,res)=>{
    let id=req.params.id;
    let body=req.body;
    Usuario.findByIdAndUpdate(id,body,(err,usuarioActualizado)=>{
        if(err){
            return res.json({
                ok:false,
                err
            })
        }
        res.json({
            ok:true,
            usuarioActualizado
        })
    })
})


app.put('/usuarioP/:id',(req,res)=>{
   
    let newpassword=req.body.password;
    let newpasswordConfirm=req.body.passwordConfirm;

    if(newpasswordConfirm!==newpassword){
        return res.json({
            ok:false,
            err:"Contraseña no coinciden"
        })
    }

    Usuario.findOneAndUpdate({_id:req.params.id},{password:newpassword},(err,usuario)=>{
        if(err){
            return res.json({
                ok:false,
                    err
                    })
                }
        
                res.json({
                    ok:true,
                    message:'Contraseña actualizada exitosamente',
                    usuario
                })
    })
     
    // Usuario.findByIdAndUpdate(id,{password:newpassword},(err,usuario)=>{
    //     if(err){
    //         return res.json({
    //             ok:false,
    //             err
    //         })
    //     }

    //    if(!usuario){
    //     return res.json({
    //         ok:false,
    //         err:"No existe este usuario"
    //     })
    //    }

    //     res.json({
    //         ok:true,
    //         usuario,
    //         trypassword,
    //         newpassword
    //     })
     
    // })
})



module.exports = app;