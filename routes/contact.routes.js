const express = require('express');
let router = express.Router();
let contactController = require('../controllers/contact.controller');

//Mostrar todos los encargos
router.route('/contacto').get(contactController.index);

module.exports = router;
