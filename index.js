const UsuarioDAO = require('./dataAccess/usuarioDAO');
const { sequelize } = require('./models');

//Funcion asincrona para ejecutar las operaciones
 async function ejecutarTransación() {
    //Realiza la sincronización de los modelos con la BD
    await sequelize.sync();
    
      
    //Cierra la conexion a la BD cuando termine todas las operaciones
    await sequelize.close();
 }

 //Realiza las operaciones
ejecutarTransación();