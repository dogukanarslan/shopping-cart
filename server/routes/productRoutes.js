import { Router } from 'express';
import { db } from '../index.js';
const router = Router();

router.get('/', async (req, res) => {
  try {
    const products = await db.execute('SELECT * FROM products');
    res.status(200).json({ products: products.rows });
  } catch (e) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/', async (req, res) => {
  const { name, price } = req.body;

  try {
    await db.execute({
      sql: 'INSERT INTO products (product_name, price) VALUES (?, ?)',
      args: [name, price],
    });
    res.status(201).json({});
  } catch (e) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.delete('/:productId', async (req, res) => {
  const { productId } = req.params;

  try {
    await db.execute({
      sql: 'DELETE FROM products WHERE product_id = ?',
      args: [productId],
    });
    res.status(204).json({});
  } catch (e) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/:productId', async (req, res) => {
  const { productId } = req.params;

  try {
    const products = await db.execute({
      sql: 'SELECT * FROM products WHERE product_id = ?',
      args: [productId],
    });
    res.status(200).json({ product: products.rows[0] });
  } catch (e) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

export { router as productRoutes };
