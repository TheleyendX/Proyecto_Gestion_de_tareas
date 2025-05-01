const { Usuario }  = require('../models');

class UsuarioDAO {
    constructor(){}

    //Con sequelize
    async crearUsuario(nombre, correo, contrasena) {
        try {
            const usuario = await Usuario.create({nombre, correo, contrasena});
            return usuario;
        } catch (error) {
            console.error("Error al registrar un Usuario", error);
        }    
    }
    //Con sequelize
    async eliminarUsuario(){
        try {
            const usuario = await sequelize.findByPK(id);
            if (!usuario) {
                throw new Error('El usuario no fue encontrado');
            }
            await usuario.destroy();
            return 'Usuario eliminado con éxito';
        } catch (error) {
            throw error('Error al eliminar usuario', error);
        }        
    }
    //Con sequelize
    async actualizarUsuario(id, name, email, password){
        try {
            await Usuario.update({name, email, password}, {where: {id}});
            const usuarioActualizado = await Usuario.findByPK(id);
            return usuarioActualizado;
        } catch (error) {
            console.error('Error al actualizar el usuario', error);
        }
    }
    //Con sequelize
    async obtenerUsuarios(){
        try {
            const usuarios = await Usuario.findAll();
            return usuarios;
        } catch (error) {
            console.error('Error al consultar todos los usuarios', error);
        }
    }
    //Con sequelize
    async obtenerUsuarioPorID(id){
        try {
            const usuario = await Usuario.findByPK(id);
            if (!usuario) {
                throw new Error('Usuario no encontrado');
            }
            return usuario;
        } catch (error) {
            console.error('Error al buscar el usuario', error);
        }
    }
}
module.exports = new UsuarioDAO();
