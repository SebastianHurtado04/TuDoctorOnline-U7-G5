// Rutas para medicos

const express = require('express');
const router = express.Router();
const medicoController = require('../controllers/medicoController');

//rutas Crud

router.get('/', medicoController.buscarMedicos);
router.post('/', medicoController.agregarMedicos);
router.get('/:id', medicoController.buscarMedico);
router.delete('/:id', medicoController.eliminarMedico);
router.put('/:id', medicoController.modificarMedico);

module.exports = router;