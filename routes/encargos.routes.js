import express from 'express';
let router = express.Router();

router.route('/').get((req, res) => {
	res.render('servicios/encargo');
});

module.exports = router;
