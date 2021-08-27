'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlpha,
        notEmpty: true,
        len: [2, 30],
      }
    },
    apellido: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlpha,
        notEmpty: true,
        len: [2, 30],
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isEmail: true,
        len: [11, 50],
      }
    },
    telefono: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isNumeric,
        notEmpty: true,
        len: [8, 11],
      }
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlphanumeric,
        notEmpty: true,
        len: [4, 30],
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlphanumeric,
        notEmpty: true,
        len: [8, 16],
      }
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};