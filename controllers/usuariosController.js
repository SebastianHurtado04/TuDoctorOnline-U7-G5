const Usuarios = require ('../models/Usuarios');

exports.buscarUsuarios = async (req,res) => {
 try{

    const usuarios = await Usuarios.find();
    res.json(usuarios);

 }catch (error) {
 console.log(error);
 res.status(500).send('hay un error al cargar los datos');
 }

}

exports.agregarUsuarios = async (req,res) => {
   try{
      let usuarios;
      usuarios = new Usuarios (req.body);
      await usuarios.save();
      res.send(usuarios);


   }catch (error) {
      console.log(error);
      res.status(500).send('hay un error al cargar los datos');
      }
}

// mostrar Usuarios por id

exports.buscarUsuario = async (req,res) => {
   try{
      let usuarios = await Usuarios.findById(req.params.id);

      if (!usuarios){
         res.status(404).json({msg: ' no existe el usuario'});
      }
      res.json(usuarios);


   }catch (error) {
      console.log(error);
      res.status(500).send('hay un error al cargar los datos');
      }
}

// eliminar Usuario por id 

exports.eliminarUsuarios =  async(req,res) => {
   try{
      let usuarios = await Usuarios.findById(req.params.id);

      if (!usuarios){
         res.status(404).json({msg: ' no existe el usuario'});
      }
      await Usuarios.findByIdAndRemove({_id: req.params.id});
      res.json({msg: 'Usuario eliminado'});


   }catch (error) {
      console.log(error);
      res.status(500).send('hay un error al cargar los datos');
      }
}


exports.modificarUsuarios =  async(req,res) => {
   try{
         const{nombre,correo,password} = req.body;
         let usuarios = await Usuarios.findById(req.params.id);

         if(!usuarios){
            res.status(404).json({msg: 'No existe el usuario'});
         }

         usuarios.nombre=nombre;
         usuarios.correo=correo;
         usuarios.password=password;
        

         usuarios = await Usuarios.findOneAndUpdate({_id:req.params.id}, usuarios, {new:true});
         res.json(usuarios);

   }catch (error) {
      console.log(error);
      res.status(500).send('hay un error al cargar los datos');
      }
}
