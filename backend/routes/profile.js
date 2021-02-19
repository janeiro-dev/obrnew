const express = require('express');
const Profile = require('../models/profile');
const app = express();

app.get('/profile/:id',(req,res)=>{
    
    Profile.find({usuario:req.params.id},(err,perfil)=>{
        if(err){
            return res.json({
                ok:false,
                err
            })
        }
        res.json({
            ok:true,
            perfil
        })
        
    })
           
           
})

app.get('/profiles/:id',(req,res)=>{
    let id=req.params.id;
    Profile.findById(id)
    .exec((err,profile)=>{
        if(err){
            return res.json({
                ok:false,
                err
            })
        }
        res.json({
            ok:true,
            profile
        })    
 })
})

app.post('/profile/:id',(req,res)=>{
  let body = req.body;
  let id = req.params.id;
    
        let profiler = new Profile({
            category:body.category,
            place:body.place,
            usuario:id

          });
        
          profiler.save((err,profile)=>{
              if(err){
                  return res.json({
                      ok:false,
                      err
                  })
              }
              res.json({
                  ok:true,
                  profile
              })
            })
  })
         

  app.put('/profile/:id',(req,res)=>{
    let body = req.body;
    let id = req.params.id;
      
           Profile.findOneAndUpdate({usuario:id},{place:body.place,category:body.category},(err,profile)=>{
                if(err){
                    return res.json({
                        ok:false,
                        err
                    })
                }
                res.json({
                    ok:true,
                    profile
                })
              })
    })

      
           
module.exports = app;