import { dirname } from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import dotenv from 'dotenv';
import { createClient } from '@libsql/client';
import { productRoutes } from './routes/productRoutes.js';
import { receiptRoutes } from './routes/receiptRoutes.js';
import { authRoutes } from './routes/authRoutes.js';
import cors from 'cors';

const __dirname = dirname(fileURLToPath(import.meta.url));
const path = __dirname + '/.env';
dotenv.config({ path });

export const db = createClient({
  url: process.env.TURSO_URL,
  authToken: process.env.TURSO_AUTHTOKEN,
});

const PORT = process.env.PORT || 3000;

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.use('/api', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/receipts', receiptRoutes);

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});

export default app;
