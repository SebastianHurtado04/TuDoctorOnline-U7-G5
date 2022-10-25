const mongoose = require("mongoose");

const medicoSchema = mongoose.Schema ({

    nombre: {
        type: String,
        required : true
    
    },
    identificacion: {
        type: String,
        required : true
    
    },
    especialidad: {
        type: String,
        required : true
    
    },
    telefono: {
        type: String,
        required : true
    
    },
    correo: {
        type: String,
        required : true
    
    },
    consultorio: {
        type: Number,
        required : true
    },

},{ versionKey: false });


module.exports = mongoose.model('medicos', medicoSchema);



