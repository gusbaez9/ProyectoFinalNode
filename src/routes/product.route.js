//router
import { Router } from "express";
import productController from '../controllers/product.controller.js'

const router = Router()

router.get('/:id',productController.getProductById);
router.get('/',productController.getProduct);
router.post('/',productController.createProduct);
router.put('/:id',productController.updateProduct);
router.delete('/:id',productController.deleteProduct);





export default router
