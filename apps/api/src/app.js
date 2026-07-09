import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRouter from "./modules/auth/auth.routes.js";
import ingestionRouter from "./modules/ingestion/ingestion.routes.js";
const app = express();
/**
 * Middleware
 */
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    credentials: true,
  }),
);
app.use(express.json());
app.use(cookieParser());

/**
 * Routes
 */
app.use("/api/auth", authRouter);
app.use("/api/ingestion", ingestionRouter);

export default app;
