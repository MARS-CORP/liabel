const express = require('express');
const router = express.Router();
let passport = require('passport');
let authController = require('../controllers/auth.controller');

//Rutas para inicio de sesion de usuarios
router
	.route('/signin')
	.get(authController.signin)
	.post(
		passport.authenticate('local-signin', {
			successRedirect: '/',
			failureRedirect: '/signin',
			failureFlash: true,
		})
	);

//Rutas para registro de usuarios
router
	.route('/signup')
	.get(authController.signup)
	.post(
		passport.authenticate('local-signup', {
			successRedirect: '/signin',
			failureRedirect: '/signup',
			failureFlash: true,
		})
	);

//Ruta para cerrar sesion
router.route('/logout').get(authController.logout);

module.exports = router;
