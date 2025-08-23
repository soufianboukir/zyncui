import express from "express";
import authRoutes from "./routes/auth.ts";

const app = express();

app.use(express.json());

app.use("/api/auth", authRoutes);
// app.use("/api/products", )

export default app;
