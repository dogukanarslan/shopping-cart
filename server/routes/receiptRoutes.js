import { Router } from 'express';
import { authenticationMiddleware } from '../middlewares.js';
import {
  createReceipt,
  readReceipts,
  deleteReceipt,
  showReceipt,
} from '../controllers/receiptController.js';

const router = Router();

router.use(authenticationMiddleware);

router.get('/', readReceipts);
router.post('/', createReceipt);
router.delete('/:receiptId', deleteReceipt);
router.get('/:receiptId', showReceipt);

export { router as receiptRoutes };
