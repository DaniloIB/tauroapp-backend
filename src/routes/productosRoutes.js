import express from "express";
import {productoController} from "../controllers/productosController.js";

const productoRouter = express.Router();

productoRouter.get('/modelo/', productoController.getByModelo)
productoRouter.get('/', productoController.getAll)
productoRouter.get('/:id', productoController.getById)

productoRouter.post('/crear-modelo', productoController.crearModelo)
productoRouter.post('/crear-talle', productoController.crearTalle)
productoRouter.post('/', productoController.crearProducto)

productoRouter.put('/:id', productoController.actualizarProducto)
productoRouter.delete('/:id', productoController.eliminarProducto)


export {productoRouter};