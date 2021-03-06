'use strict';
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('Users', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			nombre: {
				allowNull: false,
				type: Sequelize.STRING,
			},
			apellido: {
				allowNull: false,
				type: Sequelize.STRING,
			},
			email: {
				allowNull: true,
				type: Sequelize.STRING,
			},
			telefono: {
				allowNull: false,
				type: Sequelize.STRING,
			},
			direccion: {
				allowNull: false,
				type: Sequelize.STRING,
			},
			username: {
				allowNull: false,
				type: Sequelize.STRING,
			},
			password: {
				allowNull: false,
				type: Sequelize.STRING,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable('Users');
	},
};
