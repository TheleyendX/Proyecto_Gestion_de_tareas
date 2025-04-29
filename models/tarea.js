"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Tarea extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //Definir las relaciones de tarea
      //Relacion uno a uno de tarea con lista
      Tarea.hasOne(models.Lista, { foreignKey: 'id_usuario'});
      models.Lista.belongsTo(Tarea, {foreignKey: 'id_usuario'});
      kjdhaksdjhakdj;

    }
  }
  Tarea.init(
    {
      titulo: {
        type: DataTypes.STRING,
        allowNull: false
      }, 
      descripcion: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      fecha: {
        type: DataTypes.DATE,
        allowNull: false
      },
      estado: {
        type: DataTypes.ENUM('Pendiente', 'En progreso', 'Completada'),
        allowNull: false,
        defaultValue: 'Pendiente'
      },
      categoria: {
        type: DataTypes.ENUM('Escuela', 'Hogar', 'Trabajo', 'Hobby'),
        allowNull: false
      },
      id_lista: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      id_usuario: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
    },
    {
      sequelize,
      modelName: "Tarea",
    }
  );
  return Tarea;
};
