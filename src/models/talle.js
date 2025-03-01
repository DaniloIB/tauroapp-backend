import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Producto } from "./productos.js";

export const Talle = sequelize.define('talles', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    valor: {
        type: DataTypes.STRING,
        unique: true
    }
}, 
{
    timestamps: false,
})


//Relacion con tabla Modelo
Talle.hasMany(Producto, {
    foreignKey: "talle_id",
    sourceKey: 'id'
})

Producto.belongsTo(Talle,{
    foreignKey: "talle_id",
    targetKey: 'id'
})



























// export const Talle = sequelize.define("talles", {
//     id: {
//         type: DataTypes.INTEGER,
//         primaryKey: true,
//         autoIncrement: true
//     },
//     valor: {
//         type: DataTypes.STRING,
//         unique: true
//     }
// })


// //Relacion con tabla PRODUCTOS
// Talle.hasMany(Producto, {
//     foreignKey: 'talle_id',
//     sourceKey: 'id'
// })

// Producto.belongsTo(Talle,{
//     foreignKey: 'talle_id',
//     targetId: 'id'
// })