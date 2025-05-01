const { Usuario }  = require('../models');

class UsuarioDAO {
    constructor(){}
    //Con script sql y stored procedures
    static async crearUsuario2(nombre, correo, contraseña){
        try {
            const [result] = await sequelize.query('Call SP_CrearUsuario(?, ?, ?)', {replacements: [nombre, correo, contraseña]});
            return result;
        } catch (error) {
            console.error('Error al crear usuario', error);
            throw error;
        }        
    }
    //Con sequelize
    async crearUsuario(name, email, password) {
        try {
            const usuario = await Usuario.create({name, email, password});
            return usuario;
        } catch (error) {
            console.error("Error al registrar un Usuario");
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
