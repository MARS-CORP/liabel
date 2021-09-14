'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Products extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			Products.belongsTo(models.User);
		}
	}
	Products.init(
		{
			link: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					isUrl: true,
					isNull: false,
					notEmpty: true,
				},
			},
			size: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					isAlphanumeric: true,
					notEmpty: true,
				},
			},
			quantity: {
				type: DataTypes.INTEGER,
				allowNull: false,
				validate: {
					isNumeric: true,
					notEmpty: true,
				},
			},
			userId: {
				type: DataTypes.INTEGER,
				validate: {
					notEmpty: true,
				},
			},
		},
		{
			sequelize,
			modelName: 'Products',
		}
	);
	return Products;
};
