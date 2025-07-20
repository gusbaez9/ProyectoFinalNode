// model
import { db } from '../config/db.js'
import { collection, doc, getDoc, getDocs, addDoc, updateDoc, deleteDoc } from 'firebase/firestore'

const productCollection = collection(db, 'productos')

export const getProductById = async (id) => {
    try {
        const docRef = doc(productCollection, id);
        const docSnap = await getDoc(docRef);
        if (!docSnap.exists()) {
            throw new Error(`No existe un producto con el ID: ${id}`);
        }

        return { id: docSnap.id, ...docSnap.data() };
    } catch (error) {
        throw new Error(`Error al obtener el producto: ${error.message}`);
    }
};

export const getAllProducts = async () => {
    try {
        const productList = await getDocs(productCollection);
        const products = [];
        productList.forEach(doc => products.push({ id: doc.id, ...doc.data() }));

        return products;
    } catch (error) {
        throw new Error("Error", error.message)
    }
};

export const saveProduct = async (product)=>{
    try {
        const newProduct = await addDoc(productCollection,product);
        return newProduct;
    } catch (error) {
        throw new Error("Error", error.message)
    }
};

export const updateProduct = async (id, updatedData) => {
    try {
        const docRef = doc(productCollection, id);
        await updateDoc(docRef, updatedData);
        return true;
    } catch (error) {
        throw new Error(`Error al actualizar el producto: ${error.message}`);
    }
};

export const deleteProduct = async (id) => {
    try {
        const docRef = doc(productCollection, id);
        await deleteDoc(docRef);
        return true;
    } catch (error) {
        throw new Error(`Error al eliminar el producto: ${error.message}`);
    }
};