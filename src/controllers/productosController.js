import { Producto } from "../models/productos.js"
import { Modelo } from "../models/modelo.js"
import { Talle } from "../models/talle.js"



export class productoController {
    static async getAll(req, res) {
        try {
            const listaProductos = await Producto.findAll({
                attributes: {
                    exclude: ['modelo_id']
                },
                include: {
                    model: Modelo,
                    attributes: ['nombre']
                }
            })
            res.json(listaProductos)
        } catch (error) {
            
        }
    }

    static async getById(req, res) {

        try {
            const { id } = req.params
        const productoSeleccionado = await Producto.findByPk(id, {
            attributes: {
                exclude: ['modelo_id']
            },
            include: {
                model: Modelo,
                attributes: ['nombre']
            }
        })

        res.json(productoSeleccionado)
        } catch (error) {
            res.status(500).json({Mensaje: error.message})
        }
    }

    static async getByModelo(req, res) {
try {
    const { nombre } = req.query
    const listaProductos = await Producto.findAll({
        include: [{
            model: Modelo,
            attributes: ['nombre'],
            where: { nombre }
        },
        {
            model: Talle,
            attributes: ['valor']
        }],
        attributes: {
            exclude: ['modelo_id', 'talle_id']
        }
    })

    if (listaProductos < 1)
        console.log("Not Found models")
    res.json(listaProductos)
} catch (error) {
    res.status(500).json({Mensaje: error.message})
}
    }

    static async crearProducto(req, res) {
try {
    
} catch (error) {
    res.status(500).json({Mensaje: error.message})
}
    }

    static async crearModelo(req, res) {
try {
    const { nombre, proveedorId, subcategoriaId } = req.body

    const nuevoModelo = await Modelo.create({
        nombre,
        subcategoria_id: subcategoriaId,
        proveedor_id: proveedorId
    })
    res.status(201).json(nuevoModelo)
} catch (error) {
    res.status(500).json({Mensaje: error.message})
}
    }

    static async crearTalle(req, res) {
        try {
            const { valor } = req.body
            const nuevoTalle = await Talle.create({
                valor
            })
            res.status(201).json(nuevoTalle)
        } catch (error) {
            res.status(500).json({mensaje: error.message})
        }
    }

    static async eliminarProducto(req, res) {
        try {
            const { id } = req.params

            await Producto.destroy({
                where: {
                    id
                }
            })
            res.status(204).json({ "mensaje": "Producto eliminado" })
        } catch (error) {
            res.status(500).json({mensaje: error.message})
        }
    }

    static async actualizarProducto(req, res) {
        try {
            const { id } = req.params
            const { stock, modeloId, talleId } = req.body

            const productoSeleccionado = await Producto.findByPk(id)
            productoSeleccionado.stock = stock
            productoSeleccionado.modelo_id = modeloId
            productoSeleccionado.talle_id = talleId
            productoSeleccionado.save()
            res.status(200).json(productoSeleccionado)
        } catch (error) {
            res.status(500).json({ mensaje: error.message })
        }

    }


}