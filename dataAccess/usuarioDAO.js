const { Usuario }  = require('../models');

class UsuarioDAO {
    constructor(){}

    static async crearUsuario(nombre, correo, contraseña){
        try {
            const [result] = await sequelize.query('Call SP_CrearUsuario(?, ?, ?)', {replacements: [nombre, correo, contraseña]});
            return result;
        } catch (error) {
            console.error('Error al crear usuario', error);
            throw error;
        }        
    }
    static async eliminarUsuario(){
        try {
            const [result] = await sequelize.query('Call SP_EliminarUsuario');
            return result;
        } catch (error) {
            console.error('Error al crear usuario', error);
            throw error;
        }
    }
    static async actualizarUsuario(id,nombre, correo, contraseña){
        try {
            const [result] = await sequelize.query('Call SP_ModificarUsuario(?,?,?,?)', {replacements: [id, correo, contraseña]});
            return result;
        } catch (error) {
            console.error('Error al crear usuario', error);
            throw error;
        }
    }
    static async consultarUsuario(){
        try {
            const [result] = await sequelize.query('Call SP_ConsultarUsuario');
            return result;
        } catch (error) {
            console.error('Error al crear usuario', error);
            throw error;
        }
    }
}
