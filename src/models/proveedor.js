import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Modelo } from "./modelo.js";

export const Proveedor = sequelize.define('proveedores', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        unique: true
    }
}, 
{
    timestamps: false,
}) 


//Relacion con tabla Modelo
Proveedor.hasMany(Modelo, {
    foreignKey: "proveedor_id",
    sourceKey: 'id'
})

Modelo.belongsTo(Proveedor,{
    foreignKey: "proveedor_id",
    targetKey: 'id'
})