import express from 'express';
import router from './api/routes/index.js';
import config from './config/index.js';
import dbConnect from './db/dbConnect.js';
import cors from 'cors';
import globalErrorHandler from './middlewares/errorHandler/globalErrorHandler.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// database connection
dbConnect();

app.use(router);

app.use(globalErrorHandler);

app.listen(config.port, () => {
  console.log(`server running on port ${config.port}`);
});
