import { sequelize } from "../database/database.js";
import { DataTypes } from "sequelize";
import { Producto } from "./productos.js";


export const Modelo = sequelize.define("modelos",{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        unique: true
    }
})


//Relacion con tabla PRODUCTOS
Modelo.hasMany(Producto, {
    foreignKey: "modelo_id",
    sourceKey: 'id'
})

Producto.belongsTo(Modelo,{
    foreignKey: "modelo_id",
    targetId: 'id'
})
