'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Calendario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Calendario.init({
    tipo_vista: DataTypes.ENUM,
    id_usuario: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Calendario',
  });
  return Calendario;
};