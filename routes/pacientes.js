
const express = require('express');
const router = express.Router();
const pacientesController = require('../controllers/pacientesController');

// rutas Crud 

router.get('/', pacientesController.buscarPacientes);
router.post('/', pacientesController.agregarPacientes);
router.get('/:id', pacientesController.buscarPaciente);
router.delete('/:id', pacientesController.eliminarPacientes);
router.put('/:id', pacientesController.modificarPacientes); 


module.exports = router;
