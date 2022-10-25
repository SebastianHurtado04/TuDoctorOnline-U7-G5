const Pacientes = require ('../models/Pacientes');

exports.buscarPacientes = async (req,res) => {
 try{
    const pacientes = await Pacientes.find();
    res.json(pacientes);

 }catch (error) {
 console.log(error);
 res.status(500).send('hay un error al cargar los datos');
 }
}

exports.agregarPacientes = async (req,res) => {
   try{
      let pacientes;
      pacientes = new Pacientes (req.body);
      await pacientes.save();
      res.send(pacientes);


   }catch (error) {
      console.log(error);
      res.status(500).send('hay un error al cargar los datos');
      }
}

// mostrar paciente por id

exports.buscarPaciente = async (req,res) => {
   try{
      let pacientes = await Pacientes.findById(req.params.id);

      if (!pacientes){
         res.status(404).json({msg: ' no existe el paciente'});
      }
      res.json(pacientes);


   }catch (error) {
      console.log(error);
      res.status(500).send('hay un error al cargar los datos');
      }
}

// eliminar paciente por id 

exports.eliminarPacientes =  async(req,res) => {
   try{
      let pacientes = await Pacientes.findById(req.params.id);

      if (!pacientes){
         res.status(404).json({msg: ' no existe el paciente'});
      }
      await Pacientes.findByIdAndRemove({_id: req.params.id});
      res.json({msg: 'Paciente eliminado'});


   }catch (error) {
      console.log(error);
      res.status(500).send('hay un error al cargar los datos');
      }
}


exports.modificarPacientes =  async(req,res) => {
   try{
         const{nombre_paciente, cedula, telefono, correo, eps} = req.body;
         let pacientes = await Pacientes.findById(req.params.id);

         if(!pacientes){
            res.status(404).json({msg: 'No existe el paciente'});
         }

         pacientes.nombre_paciente = nombre_paciente;
         pacientes.cedula = cedula;
         pacientes.telefono = telefono;
         pacientes.correo =  correo;
         pacientes.eps = eps;

         pacientes = await Pacientes.findOneAndUpdate({_id:req.params.id}, pacientes, {new:true});
         res.json(pacientes);

   }catch (error) {
      console.log(error);
      res.status(500).send('hay un error al cargar los datos');
      }
}
