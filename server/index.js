import { dirname } from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import dotenv from 'dotenv';
import { createClient } from '@libsql/client';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { productRoutes } from './routes/productRoutes.js';
import cors from 'cors';

const __dirname = dirname(fileURLToPath(import.meta.url));
const path = __dirname + '/.env';
dotenv.config({ path });

export const db = createClient({
  url: process.env.TURSO_URL,
  authToken: process.env.TURSO_AUTHTOKEN,
});

const PORT = process.env.PORT || 3000;

const authenticationMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    res.json({ error: 'Token not found' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (error, token) => {
    if (error) {
      res.json({ error: 'Invalid token' });
    } else {
      req.username = token.username;
      next();
    }
  });
};

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/products', productRoutes);

app.post('/api/register', async (req, res) => {
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

app.post('/api/login', async (req, res) => {
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

app.get('/api/users', authenticationMiddleware, async (req, res) => {
  const users = await db.execute('SELECT * FROM users');
  res.json({ data: users.rows });
});

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});

export default app;
