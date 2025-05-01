const UsuarioDAO = require('./dataAccess/usuarioDAO');
const { sequelize } = require('./models');

//Funcion asincrona para ejecutar las operaciones
 async function ejecutarTransación() {
   try {
      //Realiza la sincronización de los modelos con la BD
      await sequelize.sync();
      
      /*const usuario = await UsuarioDAO.crearUsuario('Pepito', 'pepito@gmail.com', 'pepito1123');
      console.log('El usuario es: ', usuario.toJSON());*/
      //Eliminar un usuario
      await UsuarioDAO.eliminarUsuario(1);
      console.log('usuario eliminado');
      
   } catch (error) {
      console.error('Error en las operaciones', error);
   } finally{
      //Cierra la conexion a la BD cuando termine todas las operaciones
      await sequelize.close(); 
   }

 }

 //Realiza las operaciones
ejecutarTransación();