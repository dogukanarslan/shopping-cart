import { Router } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { db } from '../index.js';

const router = Router();

router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    await db.execute({
      sql: 'INSERT INTO users (username, password) VALUES (?, ?)',
      args: [username, hashedPassword],
    });

    res.status(201).json({});
  } catch (e) {
    console.log(e);
    res.status(500).send('Internal server error');
  }
});

router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const users = await db.execute({
      sql: 'SELECT * FROM users WHERE username = ?',
      args: [username],
    });

    const user = users.rows[0];
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign({ username: user.username }, process.env.JWT_SECRET);
    res.status(200).json({ token });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export { router as authRoutes };
