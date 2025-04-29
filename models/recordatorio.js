'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Recordatorio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Recordatorio.init({
    id_tarea: DataTypes.INTEGER,
    fecha_hora: DataTypes.DATE,
    mensaje: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Recordatorio',
  });
  return Recordatorio;
};