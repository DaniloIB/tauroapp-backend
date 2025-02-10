import { DataTypes } from "sequelize";
import app from "./app.js";
import { sequelize } from "./database/database.js";
import "./models/categoria.js"
import "./models/proveedor.js"
import "./models/talle.js"


async function main(){
try {
    await sequelize.sync()
    console.log("Connection has been established sucessfully")
    
    app.listen(3000, ()=>{
        console.log("Listening in port 3000")
    })
} catch (error) {
    console.log("Error: ", error)
}
}

main()



