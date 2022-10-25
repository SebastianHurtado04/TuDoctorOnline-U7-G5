const mongoose = require('mongoose');

const usuariosSchema = mongoose.Schema({
    nombre: {
        type:String,
        required : true
    },
    correo: {
        type:String,
        required : true
    },
    password: {
        type:String,
        required : true
    }

},{ versionKey: false });


module.exports = mongoose.model('Usuarios', usuariosSchema);