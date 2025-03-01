import express from 'express'
import {productoRouter} from './routes/productosRoutes.js'

const app = express()

//middlewares
app.use(express.json());

app.use("/productos", productoRouter)

export default app

