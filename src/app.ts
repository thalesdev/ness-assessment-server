import express from 'express';
import 'reflect-metadata';
import './database';
import cors from 'cors';

import routes from './routes';

const app = express();


app.use(cors());
app.use(express.json());
app.use(routes);

export default app;
