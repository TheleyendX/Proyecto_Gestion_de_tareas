"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Definir las relaciones de usuarios.
      //Relacion uno a muchos de usuario a tarea
      Usuario.hasMany(models.Tarea, { foreignKey: 'id_usuario'});
      models.Tarea.belongsTo(Usuario, { foreignKey: 'id_usuario'});
      //Relacion uno a muchos de usuario a lista
      Usuario.hasMany(models.Lista, { foreignKey: 'id_usuario'});
      models.Lista.belongsTo(Usuario, { foreignKey: 'id_usuario'});
      //Relación uno a uno de usuario a calendario
      Usuario.hasOne(models.Calendario, { foreignKey: 'id_usuario'});
      models.Calendario.belongsTo(Usuario, { foreignKey: 'id_Usuario'});
      //Relación muchos a uno de usuario a reconocimiento
      Usuario.hasMany(models.Reconocimiento, { foreignKey: 'id_usuario'});
      models.Reconocimiento.belongsTo(Usuario, {foreignKey: 'id_usuario'});
    }
  }
  Usuario.init(
    {
      nombre: DataTypes.STRING,
      correo: DataTypes.STRING,
      contraseña: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Usuario",
    }
  );
  return Usuario;
};
