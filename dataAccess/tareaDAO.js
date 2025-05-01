const { Tarea } = require('../models');


class tareaDAO {
    constructor(){}

    static async creartarea(titulo, descripcion, fecha, estado, categoria){
        try {
            const [result] = await sequelize.query('Call SP_CrearTarea(?, ?, ?, ?, ?)', {replacements: [titulo, descripcion, fecha, estado, categoria]});
            return result;
        } catch (error) {
            console.error('Error al crear tarea', error);
            throw error;
        }        
    }
    static async eliminartarea(){
        try {
            const [result] = await sequelize.query('Call SP_EliminarTarea');
            return result;
        } catch (error) {
            console.error('Error al eliminar tarea', error);
            throw error;
        }
    }
    static async actualizarUsuario(id, titulo,descripcion, fecha, estado, categoria){
        try {
            const [result] = await sequelize.query('Call SP_ModificarTarea(?,?,?,?)', {replacements: [id,titulo, descripcion, fecha, estado, categoria]});
            return result;
        } catch (error) {
            console.error('Error al crear usuario', error);
            throw error;
        }
    }
    static async consultartarea(){
        try {
            const [result] = await sequelize.query('Call SP_ConsultarTareas');
            return result;
        } catch (error) {
            console.error('Error al consultar tarea', error);
            throw error;
        }
    }
}
