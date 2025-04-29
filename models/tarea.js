'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tarea extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //Definir relaciones de tarea
      //Relacion uno a uno de tarea con lista
      Tarea.hasOne(models.Lista, { foreignKey: 'id_usuario'});
      //Relacion uno a uno de tarea a recordatorio
      Tarea.hasOne(models.Recordatorio, {foreignKey: 'id_usuario'});
      //Relacion usuario - tarea muchos a uno
      Tarea.belongsTo(models.Usuario, {foreignKey: 'id_usuario'});
    }
  }
  Tarea.init({
    titulo: DataTypes.STRING,
    descripcion: DataTypes.TEXT,
    fecha: DataTypes.DATE,
    estado: DataTypes.ENUM,
    categoria: DataTypes.ENUM,
    id_lista: DataTypes.INTEGER,
    id_usuario: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Tarea',
  });
  return Tarea;
};