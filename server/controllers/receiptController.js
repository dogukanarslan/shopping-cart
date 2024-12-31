import { db } from '../index.js';

export const createReceipt = async (req, res) => {
  const { name } = req.body;

  try {
    await db.execute({
      sql: 'INSERT INTO receipts (name) VALUES (?)',
      args: [name],
    });
    res.status(201).json({});
  } catch (e) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const readReceipts = async (req, res) => {
  try {
    const receipts = await db.execute('SELECT * FROM receipts');
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
      sql: 'SELECT * FROM receipts WHERE id = ?',
      args: [receiptId],
    });
    res.status(200).json({ receipts: receipts.rows[0] });
  } catch (e) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
