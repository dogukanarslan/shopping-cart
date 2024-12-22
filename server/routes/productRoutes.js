import { Router } from 'express';
import { authenticationMiddleware } from '../middlewares.js';
import {
  createProduct,
  deleteProduct,
  readProducts,
  showProduct,
} from '../controllers/productController.js';

const router = Router();

router.get('/', authenticationMiddleware, readProducts);
router.post('/', authenticationMiddleware, createProduct);
router.delete('/:productId', authenticationMiddleware, deleteProduct);
router.get('/:productId', authenticationMiddleware, showProduct);

export { router as productRoutes };
