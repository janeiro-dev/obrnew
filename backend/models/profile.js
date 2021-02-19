const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let profileSchema = new Schema({
    category:{type:[String],required:[true,'es obligatoria aunque sea una categoria']},
    place:{type:String},
    usuario: { type: Schema.Types.ObjectId, ref: 'Usuario' }
})

module.exports = mongoose.model('Profile',profileSchema);
