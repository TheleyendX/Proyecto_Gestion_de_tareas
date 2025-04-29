import 'dotenv/config';
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(
    variables.env.DB_NAME,
    variables.env.DB_USER,
    variables.env.DB_PASSWORD,
    {
        host: variables.env.DB_HOST,
        dialect: variables.env.DB_DIALECT,
    }
);
export default sequelize;