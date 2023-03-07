import express from 'express';
import data from './data.js';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import startRoutes from './routes/startRoutes.js';
import productRouter from './routes/productRouters.js';

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('coonect to db');
  })
  .catch((err) => {
    console.log(err.message);
  });

const app = express();

app.use(cors());

app.use('/api/start', startRoutes);

app.use('/api/products', productRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log('serve at http://localhost:' + port);
});
