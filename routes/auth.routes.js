const express = require('express');
const router = express.Router();
let passport = require('passport');

//Rutas para inicio de sesion de usuarios
router
	.route('/signin')
	.get((req, res) => {
		res.render('auth/signin');
	})
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
	.get((req, res) => {
		res.render('auth/signup');
	})
	.post(
		passport.authenticate('local-signup', {
			successRedirect: '/signin',
			failureRedirect: '/signup',
			failureFlash: true,
		})
	);

//Ruta para cerrar sesion
router.route('/logout').get((req, res) => {
	req.logOut();

	res.redirect('/signin');
});

module.exports = router;
