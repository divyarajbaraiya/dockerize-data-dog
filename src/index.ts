import express, { Request, Response, Application } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import { rootHandler, sendLogHandler } from './handlers';

const app: Application = express();

// middleware
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 8005;

app.get('/', rootHandler);
app.post('/send-log', sendLogHandler);

app.listen(PORT, (): void => {
    console.log(`Server Running here 👉 https://localhost:${PORT}`);
});