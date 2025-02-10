import { Sequelize } from "sequelize";


export const sequelize = new Sequelize('taurocuer_app', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    port: 1234
})