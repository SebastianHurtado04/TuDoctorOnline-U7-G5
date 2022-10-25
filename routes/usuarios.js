const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController');

// rutas Crud 

router.get('/', usuariosController.buscarUsuarios);
router.post('/', usuariosController.agregarUsuarios);
router.get('/:id', usuariosController.buscarUsuario);
router.delete('/:id', usuariosController.eliminarUsuarios);
router.put('/:id', usuariosController.modificarUsuarios); 


module.exports = router;