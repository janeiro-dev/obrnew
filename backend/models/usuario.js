const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
let Schema = mongoose.Schema;

let usuarioSchema = new Schema({
    nombre:{type:String,required:[true,'Es necesario escribir un nombre']},
    apellido:{type:String,required:[true,'Es necesario escribir un apellido']},
    email:{type:String,required:[true,'Es necesario escribir un email'],unique:true},
    password:{type:String,required:[true,'Es necesario escribir una contraseña']},
    trypassword:{type:String},
    passwordConfirm:{type:String},
    img:{type:String},
    fecha:{type:String}

})



usuarioSchema.plugin(uniqueValidator, { message: 'Este {PATH} ya existe, intente con otro correo' });


module.exports = mongoose.model('Usuario',usuarioSchema);