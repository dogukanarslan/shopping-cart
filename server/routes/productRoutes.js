import { Router } from 'express';
import {
  createProduct,
  deleteProduct,
  readProducts,
  showProduct,
} from '../controllers/productController.js';

const router = Router();

router.get('/', readProducts);
router.post('/', createProduct);
router.delete('/:productId', deleteProduct);
router.get('/:productId', showProduct);

export { router as productRoutes };
