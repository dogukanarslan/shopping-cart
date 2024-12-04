import { dirname } from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import dotenv from 'dotenv';
import { createClient } from '@libsql/client';

const __dirname = dirname(fileURLToPath(import.meta.url));
const path = __dirname + '/.env';
dotenv.config({ path });

const db = createClient({
  url: process.env.TURSO_URL,
  authToken: process.env.TURSO_AUTHTOKEN,
});

const PORT = process.env.PORT || 3000;

const app = express();

// Middlewares
app.use(express.json());

// Routes
app.post('/api/register', async (req, res) => {
  const { username, password } = req.body;

  await db.execute({
    sql: 'INSERT INTO users (username, password) VALUES (?, ?)',
    args: [username, password],
  });

  res.status(201).json({});
});


app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
