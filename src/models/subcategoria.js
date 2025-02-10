import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Modelo } from "./modelo.js";


export const Subcategoria = sequelize.define('subcategorias', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        unique: true
    }
})


//Relacion con tabla Modelo
Subcategoria.hasMany(Modelo, {
    foreignKey: "modelo_id",
    sourceKey: 'id'
})

Modelo.belongsTo(Subcategoria,{
    foreignKey: "subcategoria_id",
    targetId: 'id'
})
