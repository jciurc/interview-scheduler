import fs from 'fs';
import path from 'path';

// get env variables
import dotenv from 'dotenv';
const ENV = process.env.NODE_ENV || 'development';
const PATH = path.resolve(__dirname, './.env.' + ENV);
dotenv.config({ path: PATH });

// modules
import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import db from './db';

// routes
import days from './routes/days';
import appointments from './routes/appointments';
import interviewers from './routes/interviewers';

// config
const PORT = process.env.PORT || 8001;
const app: Express = express();


app.use(cors());
app.use(helmet());
app.use(express.json())

app.get('/', (req: Request, res: Response) => {
  res.send('Hi?');
});

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT} in ${ENV} mode.`);
});