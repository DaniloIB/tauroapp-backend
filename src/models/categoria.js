import { sequelize } from "../database/database.js";
import { DataTypes } from "sequelize";
import { Subcategoria } from "./subcategoria.js";

export const Categoria = sequelize.define("categorias",{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        unique: true,        
    },
    
}, 
{
    timestamps: false,
})

//Relacion con tabla Subcategoria
Categoria.hasMany(Subcategoria, {
    foreignKey: "categoria_id",
    sourceKey: 'id'
})

Subcategoria.belongsTo(Categoria,{
    foreignKey: "categoria_id",
    targetKey: 'id'
})

