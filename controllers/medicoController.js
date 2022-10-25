const Medicos = require('../models/Medicos');

exports.buscarMedicos = async (req, res) => {
try{
    const medico = await Medicos.find();
    res.json(medico);

}catch (error) {
console.log(error)
res.status(500).send('Hay un error al cargar los datos');
}
};

//Agregar medicos
exports.agregarMedicos = async (req, res) => {
try{
    let medico;
    medico= new Medicos(req.body);
    await medico.save();
    res.send(medico);
    
}catch (error) {
    console.log(error)
    res.status(500).send('Hay un error al cargar los datos');
    }
    };

//Buscar un medico (Registro)

exports.buscarMedico = async (req, res) => {
    try{
        let medico =  await Medicos.findById(req.params.id);
        if(!medico){
            res.status(404).json({msg: 'No existe el Registro'});
        }
        res.json(medico);

    }catch (error) {
        console.log(error)
        res.status(500).send('Hay un error al cargar los datos');
        }
     }

// Eliminar medicos
exports.eliminarMedico = async (req, res) => {
    try{

        let medico = await Medicos.findById(req.params.id);
        if(!medico){
            res.status(404).json({msg: 'No existe el Registro'})
        }
        await Medicos.findByIdAndRemove({_id: req.params.id});
        res.json({msg: 'Medico Eliminado'});

    }catch (error) {
        console.log(error);
        res.status(500).send('Hay un error al cargar los datos');
        }
     }

// Actualizar o Modificar medicos (Registros)
exports.modificarMedico = async (req, res) => {
    try{
        const {nombre, identificacion, especialidad, telefono, correo, consultorio } = req.body;
        let medico = await Medicos.findById(req.params.id);

        if(!medico){
            res.status(404).json({msg: 'No existe el registro'})
        }
    medico.nombre = nombre;
    medico.identificacion = identificacion;
    medico.especialidad = especialidad;
    medico.telefono = telefono;
    medico.correo = correo;
    medico.consultorio = consultorio

    producto = await Medicos.findByIdAndUpdate({_id:req.params.id}, medico, {new:true});
    res.json(medico);

    }catch (error) {
        console.log(error);
        res.status(500).send('Hay un error al cargar los datos');
        }
}


