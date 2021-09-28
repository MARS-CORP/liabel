const Product = require('../database/models').Product;
const User = require('../database/models').User;

module.exports = {
	index: (req, res) => {
		// Product.findAll({
		// 	where: {
		// 		id: req.user.id,
		// 	},
		// 	includes: User,
		// }).then((products) => {
		// 	res.render('encargos/index', {
		// 		products,
		// 	});
		// });
		res.render('encargos/index');
	},
	new: (req, res) => {
		res.render('encargos/add');
	},
	add: (req, res) => {
		User.create({
			link: req.body.link,
			size: req.body.size,
			quantity: req.body.quantity,
			userId: req.user.id,
		})
			.then((result) => {
				res.json(result);
			})
			.catch((err) => {
				console.log(err);
				res.json(err);
			});
	},
	delete: (req, res) => {
		User.delete({
			where: {
				id: req.params.id,
			},
		})
			.then((result) => {
				res.json(result);
			})
			.catch((err) => {
				console.log(err);
				res.json(err);
			});
	},
};
