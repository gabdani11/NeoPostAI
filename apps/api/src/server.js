import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import connectToDb from './db/mongo.js';
import cookieParser from 'cookie-parser';
import authRouter from './modules/auth/auth.routes.js';

const app = express();

/**
 * Middleware
 */
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
  credentials: true,
}));
app.use(express.json());
app.use(cookieParser());

/**
 * Routes
 */
app.use('/api/auth', authRouter);
/**
 * Start the server and connect to the database
 */
const startServer = async ()=>{
  await connectToDb();
  const PORT = process.env.PORT || 3000;
  const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

// Graceful shutdown
const shutdown = async (signal) => {
  console.log(`Received ${signal}. Shutting down gracefully...`);
  server.close(async () =>{
    await mongoose.connection.close()
    console.log('MongoDB connection closed');
    process.exit(0);
  })
};
process.on('SIGINT', () => shutdown('SIGINT'));
process.on('SIGTERM', () => shutdown('SIGTERM'));
}

/**
 * Global error handling 
 */
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err.message);
  process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  process.exit(1);
});

startServer();