//Model
import Producto from '../modelos/producto.js';

export const getAll =  async (req, res) => {
    try {
        const data = await Producto.find();
        res.json(data);
    } catch (err) {
        console.error(err)
    }
}

export const getOne =  async (req, res) => {
    try {
        const { id } = req.params;
        const producto = await Producto.findById(id);
        res.status(200).json(producto);
    } catch (err) {
        console.error(err)
    }
}

export const postProducto=  async (req, res) => {
    try {
        const { nombre, tipo} = req.body;
        const nuevoProducto = await new Producto({
            nombre,
            tipo
        })
        await nuevoProducto.save();
        res.status(200).json(nuevoProducto);
    } catch (err) {
        console.error(err);
    }
}

export const updateProducto = async(req,res)=>{
    try{
        const {id} = req.params;
        const {nombre,tipo} = req.body;
        const productoEdit = await Producto.findByIdAndUpdate(id,{
            nombre,
            tipo
        },{ new: true })
        res.status(200).json(productoEdit)
    }catch(err){
        console.error(err);
    }
}

export const deleteProducto = async(req,res)=>{
    try{
        const {id} = req.params;
        const data = await Producto.findByIdAndDelete(id);
        res.status(200).json(data);
    }catch(err){
        console.error(err);
    }
}