import { db } from '../index.js';

export const createReceipt = async (req, res) => {
  const { name, items } = req.body;

  try {
    const receipt = await db.execute({
      sql: 'INSERT INTO receipts (name) VALUES (?)',
      args: [name],
    });

    const receiptId = receipt.lastInsertRowid;

    for (let item of items) {
      await db.execute({
        sql: 'INSERT INTO receipt_items (name, price, quantity, receipt_id) VALUES (?, ?, ?, ?)',
        args: [item.name, item.price, item.quantity, receiptId],
      });
    }
    res.status(201).json({});
  } catch (e) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const readReceipts = async (req, res) => {
  try {
    const receipts = await db.execute('SELECT * FROM receipts');

    for (let row of receipts.rows) {
      const res = await db.execute({
        sql: 'SELECT SUM(price * quantity) as total FROM receipt_items WHERE receipt_id = ?',
        args: [row.id],
      });

      row.total = res.rows[0].total;
    }

    res.status(200).json({ receipts: receipts.rows });
  } catch (e) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const deleteReceipt = async (req, res) => {
  const { receiptId } = req.params;

  try {
    await db.execute({
      sql: 'DELETE FROM receipts WHERE id = ?',
      args: [receiptId],
    });
    res.status(204).json({});
  } catch (e) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const showReceipt = async (req, res) => {
  const { receiptId } = req.params;

  try {
    const receipts = await db.execute({
      sql: 'SELECT * FROM receipts WHERE receipts.id = ?',
      args: [receiptId],
    });

    for (let row of receipts.rows) {
      const res = await db.execute({
        sql: 'SELECT SUM(price * quantity) as total FROM receipt_items WHERE receipt_id = ?',
        args: [row.id],
      });

      row.total = res.rows[0].total;
    }

    const receiptItems = await db.execute({
      sql: 'SELECT id, name, quantity, price FROM receipt_items WHERE receipt_id = ?',
      args: [receiptId],
    });

    res.status(200).json({ ...receipts.rows[0], items: receiptItems.rows });
  } catch (e) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
