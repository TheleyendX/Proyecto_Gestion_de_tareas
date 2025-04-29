const { Usuario} = require('../models');
const sequelize = require('../config/dbConnect');

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
}
