
const express = require('express');
let router = express.Router();

router.route('/encargos').get((req, res) => {
	res.render('servicios/encargo');
});

module.exports = router;
