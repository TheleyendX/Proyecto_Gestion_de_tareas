import 'dotenv/config';
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(
    var.env.DB_NAME,
    var.env.DB_USER,
    var.env.DB_PASSWORD,
    {
        host: var.env.DB_HOST,
        dialect: var.env.DB_DIALECT,
    }
);
export default dbconfig;