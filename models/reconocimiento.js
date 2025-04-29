'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reconocimiento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Reconocimiento.init({
    id_usuario: DataTypes.INTEGER,
    fecha: DataTypes.DATE,
    tipo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Reconocimiento',
  });
  return Reconocimiento;
};