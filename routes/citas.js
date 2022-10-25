
const express = require('express');
const router = express.Router();
const citaController = require('../controllers/citasController');

// rutas Crud 

router.get('/', citaController.buscarCitas);
router.post('/', citaController.agregarCitas);
router.get('/:id', citaController.buscarCita);
router.delete('/:id', citaController.eliminarCitas);
router.put('/:id', citaController.modificarCitas); 


module.exports = router;
