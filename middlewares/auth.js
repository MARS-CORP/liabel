let bcrypt = require('bcrypt');

module.exports = (passport, user) => {
	let User = user;
	let LocalStrategy = require('passport-local').Strategy;

	passport.use(
		'local-signup',
		new LocalStrategy(
			{
				usernameField: 'username',
				passwordField: 'password',
				passReqToCallback: true,
				session: true,
			},
			(req, username, passport, done) => {
				User.beforeCreate((user, option) => {
					return new Promise((resolve, reject) => {
						if (user.password) {
							bcrypt.hash(user.password, 10, (err, hash) => {
								user.password = hash;

								resolve();
							});
						} else {
							return reject(
								new Error('Error al hashear el password')
							);
						}
					});
				});

				User.findOne({
					where: {
						username,
					},
				}).then((user) => {
					if (user)
						return done(null, false, {
							message: req.flash(
								'failure',
								'Este usuario ya existe. Intente con otro nombre de usuario'
							),
						});

					let newUser = {
						nombre: req.body.nombre,
						apellido: req.body.apellido,
						email: req.body.email,
						telefono: req.body.telefono,
						username: req.body.username,
						password: req.body.password,
					};

					User.create(newUser)
						.then((user) => {
							if (!user)
								return done(null, false, {
									message: req.flash(
										'failure',
										'No se ha podido crear el usuario, por favor intente de nuevo'
									),
								});

							return done(null, user, {
								message: req.flash(
									'success',
									'El usuario ' +
										user.username +
										' ha sido creado correctamente'
								),
							});
						})
						.catch((err) => {
							console.log(err);
							return done(err);
						});
				});
			}
		)
	);

	passport.use(
		'local-signin',
		new LocalStrategy(
			{
				usernameField: 'username',
				passwordField: 'password',
				passReqToCallback: true,
				session: true,
			},
			(req, username, password, done) => {
				let isValidPassword = (userPassword, password) => {
					return new Promise((resolve, reject) => {
						bcrypt.compare(
							password,
							userPassword,
							(err, result) => {
								if (err) return reject(err);

								resolve(result);
							}
						);
					});
				};

				User.findOne({
					where: {
						username,
					},
				}).then((user) => {
					if (!user)
						return done(null, false, {
							message: req.flash(
								'failure',
								'Nombre de usuario incorrecto'
							),
						});

					isValidPassword(user.password, password)
						.then((userValid) => {
							if (!userValid)
								return done(null, false, {
									message: req.flash(
										'failure',
										'L a constrase&ntilde;a es incorrecta'
									),
								});

							return done(null, user, {
								message: req.flash(
									'success',
									'Bienvenido ' + username
								),
							});
						})
						.catch((err) => {
							console.log(err);
							return done(
								new Error(
									'Ha ocurrido un error en la autenticacion'
								)
							);
						})
						.catch((err) => {
							console.log(err);
							return done(err);
						});
				});
			}
		)
	);

	passport.serializeUser((user, done) => {
		done(null, user.id);
	});

	passport.deserializeUser((id, done) => {
		User.findByPk(id)
			.then((user) => {
				if (user) return done(null, user);

				return done(null, false);
			})
			.catch((err) => {
				console.log(err);
				return done(err);
			});
	});
};