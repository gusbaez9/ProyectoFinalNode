// controller
import productService from '../services/product.service.js'

export const getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await productService.getProduct(id);
        res.status(200).json({ message: "Producto encontrado", payload: product });
    } catch (error) {
        res.status(404).json({ message: "Producto no encontrado", error: error.message });
    }
};

const getProduct = async (req, res) => {
    try {
        const products = await productService.getAll();
        res.status(200).json({ message: "Listado de productos", payload: products });
    } catch (error) {
        res.status(500).json({ message: "Error interno del servidor", error: error.message });
    }
};

const createProduct = async (req, res) => {
    try {
        const { nombre, precio, disponible } = req.body
        const newProduct = { nombre, precio: +precio, disponible: disponible || false };

        await productService.createProduct(newProduct);
        res.status(200).json({ message: "Producto agregado", payload: newProduct });
    } catch (error) {
        res.status(500).json({ message: "Error interno del servidor", error: error.message });
    }
};

export const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedData = req.body;

        await productService.upProduct(id, updatedData);
        res.status(200).json({ message: "Producto actualizado" });
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar el producto", error: error.message });
    }
};

export const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        await productService.delProduct(id);
        res.status(200).json({ message: "Producto eliminado" });
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar el producto", error: error.message });
    }
};

export default { getProductById, getProduct, createProduct, updateProduct, deleteProduct };
