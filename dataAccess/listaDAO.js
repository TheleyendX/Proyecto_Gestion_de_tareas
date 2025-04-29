const { Usuario} = require('../models');
const sequelize = require('../config/dbConnect');

class listaDAO {
    constructor(){}

    static async crearLista(nombre, descripcion){
        try {
            const [result] = await sequelize.query('Call SP_CrearLista(?, ?)', {replacements: [nombre, descripcion]});
            return result;
        } catch (error) {
            console.error('Error al crear usuario', error);
            throw error;
        }        
    }
    static async eliminarLista(){
        try {
            const [result] = await sequelize.query('Call SP_EliminarLista');
            return result;
        } catch (error) {
            console.error('Error al crear usuario', error);
            throw error;
        }
    }
    static async actualizarLista(id,nombre, descripcion){
        try {
            const [result] = await sequelize.query('Call SP_ModificarLista(?,?,?)', {replacements: [id, nombre,descripcion]});
            return result;
        } catch (error) {
            console.error('Error al crear usuario', error);
            throw error;
        }
    }
    static async consultarLista(){
        try {
            const [result] = await sequelize.query('Call SP_ConsultarListas');
            return result;
        } catch (error) {
            console.error('Error al crear usuario', error);
            throw error;
        }
    }
}
