import 'dotenv/config';
import express from 'express';
import router from './routes';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import cors from 'cors';
import { errorMiddleware } from './middlewares/error';
import { apiLimiter } from './middlewares/rateLimit';

const app = express();

app.use(express.json());
app.use(apiLimiter);
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);
app.use(errorMiddleware);
app.use(helmet());

export default app;