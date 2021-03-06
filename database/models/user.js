'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class User extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			User.hasMany(models.Products, {
				foreignKey: 'userId',
			});
		}
	}
	User.init(
		{
			nombre: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					isAlpha: true,
					notEmpty: true,
					len: [2, 30],
				},
			},
			apellido: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					isAlpha: true,
					notEmpty: true,
					len: [2, 30],
				},
			},
			email: {
				type: DataTypes.STRING,
				allowNull: true,
				validate: {
					isEmail: true,
					len: [11, 50],
				},
			},
			telefono: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					isNumeric: true,
					notEmpty: true,
					len: [8, 11],
				},
			},
			direccion: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					len: [10, 256],
				},
			},
			username: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true,
				validate: {
					isAlphanumeric: true,
					notEmpty: true,
					len: [4, 30],
				},
			},
			password: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					isAlphanumeric: true,
					notEmpty: true,
					len: [8, 16],
				},
			},
		},
		{
			sequelize,
			modelName: 'User',
		}
	);
	return User;
};
