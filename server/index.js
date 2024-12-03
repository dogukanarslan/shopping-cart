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

const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
