const express = require('express');
let router = express.Router();
let encargosController = require('../controllers/encargos.controller');

//Mostrar todos los encargos
router.route('/encargos').get(encargosController.index);

//Vista para agregar encargo
router.route('/encargos/add').get(encargosController.addIndex);

module.exports = router;
