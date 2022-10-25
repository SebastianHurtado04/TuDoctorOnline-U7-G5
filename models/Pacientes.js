const mongoose = require('mongoose');

const pacientesSchema = mongoose.Schema({

    nombre_paciente: {
        type:String,
        required : true
    },
    cedula: {
        type:String,
        required : true
    },
    telefono: {
        type:String,
        required : true
    },
    correo: {
        type:String,
        required : true
    },
    eps: {
        type:String,
        required : true
    }


},{ versionKey: false });


module.exports = mongoose.model('Pacientes', pacientesSchema);
