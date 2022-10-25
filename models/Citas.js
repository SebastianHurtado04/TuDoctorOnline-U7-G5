const mongoose = require('mongoose');

const citasSchema = mongoose.Schema({
    nombre: {
        type:String,
        required : true
    },
    tipocita: {
        type:String,
        required : true
    },
    medico: {
        type:String,
        required : true
    },
    consultorio: {
        type:Number,
        required : true
    },
    fecha: {
        type:String,
        required : true
    },
    hora: {
        type:String,
        required : true
    }

},{ versionKey: false });


module.exports = mongoose.model('Citas', citasSchema);
