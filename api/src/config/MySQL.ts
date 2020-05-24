import { Sequelize } from "sequelize";
import dotEnv from 'dotenv';

const PRODUCTION = process.env.PRODUCTION_SERVER || 'no';
if(PRODUCTION === 'no'){
  dotEnv.config();
}

const MYSQL_DATABASE = process.env.MYSQL_DATABASE;
const MYSQL_USER = process.env.MYSQL_USER;
const MYSQL_PASSWORD = process.env.MYSQL_PASSWORD;
const MYSQL_HOST = process.env.MYSQL_HOST;

export const mySqlDatabase = new Sequelize(MYSQL_DATABASE, MYSQL_USER, MYSQL_PASSWORD, {
    host: MYSQL_HOST,
    dialect: 'mysql'
});