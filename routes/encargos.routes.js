
const express = require('express');
let router = express.Router();

router.route('/encargos').get((req, res) => {
	res.render('encargos/index');
});

module.exports = router;
