import express, { Express, Request, Response, NextFunction } from 'express';
import { HttpError } from 'http-errors';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import apiRoutes from './routes/routes';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

app.get('/', (_req: Request, res: Response) => {
  res.send('OK');
});

app.use('/api', apiRoutes);
app.use((err: any, _req: Request, res: Response, next: NextFunction) => {
  if (err instanceof HttpError) {
    return res.status(err.status).send(err.message);
  }

  next(err);
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

mongoose.connect(process.env.DB_CONNECT as string, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
  console.log('Connected to DB');
});
