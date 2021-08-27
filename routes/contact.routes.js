const express = require('express');
let router = express.Router();

//Mostrar todos los encargos
router.route('/contacto').get((req, res) => {
	res.render('contacto/index');
});

module.exports = router;
