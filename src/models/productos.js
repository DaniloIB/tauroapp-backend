import { sequelize } from "../database/database.js"
import { DataTypes } from "sequelize"

export const Producto = sequelize.define("productos", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    stock: {
        type: DataTypes.INTEGER
    }
})


