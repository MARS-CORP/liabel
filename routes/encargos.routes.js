const express = require('express');
let router = express.Router();
let encargosController = require('../controllers/encargos.controller');
let helper = require('../helpers/isLogged');

//Mostrar todos los encargos
router.route('/encargos').get(helper.isLoggedIn, encargosController.index);

//Vista para agregar encargo
router.route('/encargos/add').get(helper.isLoggedIn, encargosController.addIndex);

module.exports = router;
