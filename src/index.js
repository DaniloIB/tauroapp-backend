import app from "./app.js";
import { sequelize } from "./database/database.js";
import "./models/categoria.js"
import "./models/talle.js"
import "./models/proveedor.js"
import "./models/productos.js"



async function main(){
try {
    await sequelize.sync()    
    app.listen(3000, ()=>{
        console.log("Listening in port 3000")
    })
} catch (error) {
    console.log("Error: ", error) 
}
}

main()



