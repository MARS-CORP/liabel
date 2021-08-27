const express = require('express');
const router = express.Router();

//Rutas para inicio de sesion de usuarios
router.route('/signin').get((req, res) => {
	res.render('auth/signin');
});

//Rutas para registro de usuarios
router.route('/signup').get((req, res) => {
	res.render('auth/signup');
});

module.exports = router;