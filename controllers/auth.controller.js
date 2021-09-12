module.exports = {
	signup: (req, res) => {
		res.render('auth/signup');
	},
	signin: (req, res) => {
		res.render('auth/signin');
	},
	logout: (req, res) => {
		req.logout();

		res.redirect('/signin');
	},
};
