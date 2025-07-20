// services
import {deleteProduct, getAllProducts, getProductById, saveProduct, updateProduct} from '../models/product.model.js'

const getProduct = async (id) => {
  return await getProductById(id);
};

const getAll = async () => {
  return await getAllProducts();
};

const createProduct = async (product) => {
  return await saveProduct(product);
};

const upProduct = async (id, updatedData) => {
  return await updateProduct(id, updatedData);
};

const delProduct = async (id) => {
  return await deleteProduct(id);
};

export default { getProduct, getAll, createProduct, upProduct, delProduct };
