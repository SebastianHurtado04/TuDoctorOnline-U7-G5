const Citas = require ('../models/Citas');

exports.buscarCitas = async (req,res) => {
 try{

    const citas = await Citas.find();
    res.json(citas);

 }catch (error) {
 console.log(error);
 res.status(500).send('hay un error al cargar los datos');
 }

}

exports.agregarCitas = async (req,res) => {
   try{
      let citas;
      citas = new Citas (req.body);
      await citas.save();
      res.send(citas);


   }catch (error) {
      console.log(error);
      res.status(500).send('hay un error al cargar los datos');
      }
}

// mostrar citas por id

exports.buscarCita = async (req,res) => {
   try{
      let cita = await Citas.findById(req.params.id);

      if (!cita){
         res.status(404).json({msg: ' no existe la cita'});
      }
      res.json(cita);


   }catch (error) {
      console.log(error);
      res.status(500).send('hay un error al cargar los datos');
      }
}

// eliminar cita por id 

exports.eliminarCitas =  async(req,res) => {
   try{
      let citas = await Citas.findById(req.params.id);

      if (!citas){
         res.status(404).json({msg: ' no existe la cita'});
      }
      await Citas.findByIdAndRemove({_id: req.params.id});
      res.json({msg: 'Registro eliminado'});


   }catch (error) {
      console.log(error);
      res.status(500).send('hay un error al cargar los datos');
      }
}


exports.modificarCitas =  async(req,res) => {
   try{
         const{nombre, tipocita, medico, consultorio, fecha,hora} = req.body;
         let citas = await Citas.findById(req.params.id);

         if(!citas){
            res.status(404).json({msg: 'No existe la cita'});
         }

         citas.nombre=nombre;
         citas.tipocita=tipocita;
         citas.medico=medico;
         citas.consultorio=consultorio;
         citas.fecha=fecha;
         citas.hora=hora;

         citas = await Citas.findOneAndUpdate({_id:req.params.id}, citas, {new:true});
         res.json(citas);

   }catch (error) {
      console.log(error);
      res.status(500).send('hay un error al cargar los datos');
      }
}
