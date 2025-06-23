import express from 'express';
import { connectDB } from './lib/db.js';
import dotenv from 'dotenv';
import authRoute from './routes/auth.route.js';
import cartRoute from './routes/cart.route.js';
import cookieParser from 'cookie-parser';
import productRoute from './routes/product.routes.js';
import cors from 'cors';

dotenv.config(); 
const app = express();
app.use(express.json({ limit: '50mb' }));
app.use(cookieParser());

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}));

app.use("/api/auth", authRoute);
app.use("/api/product", productRoute);
app.use("/api/cart", cartRoute);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
  connectDB();
});