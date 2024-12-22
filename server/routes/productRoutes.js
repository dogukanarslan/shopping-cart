import { Router } from 'express';
import { authenticationMiddleware } from '../middlewares.js';
import {
  createProduct,
  deleteProduct,
  readProducts,
  showProduct,
} from '../controllers/productController.js';

const router = Router();

router.use(authenticationMiddleware);

router.get('/', readProducts);
router.post('/', createProduct);
router.delete('/:productId', deleteProduct);
router.get('/:productId', showProduct);

export { router as productRoutes };
