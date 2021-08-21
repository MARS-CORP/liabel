const express = require('express');
let router = express.Router();

//Mostrar todos los encargos
router.route('/encargos').get((req, res) => {
	res.render('encargos/index');
});

//Vista para agregar encargo
router.route('/encargos/add').get((req, res) => {
	res.render('encargos/add');
});

module.exports = router;
