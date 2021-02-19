const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let recetaSchema = new Schema({
    nombre:{type:String,required:[true,'Es necesario escribir un nombre']},
    descripcion:{type:String},
    ingredientes:{type:[String]},
    pasos:{type:[String]},
    img1:{type:String},
    img2:{type:String},
    img3:{type:String},
    fecha:{type:String},
    usuario: { type: Schema.Types.ObjectId, ref: 'Usuario' }
})


module.exports = mongoose.model('Receta',recetaSchema);