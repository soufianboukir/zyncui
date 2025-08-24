import app from "./app.ts";
import config from "./config/config.ts";

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});

// this configuration is commented until I deploy it within vercel

// import express from "express";
// import serverless from "serverless-http";
// import authRoutes from "./routes/auth";

// const app = express();

// app.use(express.json());
// app.use("/api/auth", authRoutes);

// // --- serverless export ---
// export const handler = serverless(app);

// // --- optional local dev ---
// if (process.env.NODE_ENV !== "production") {
//   const PORT = 3000;
//   app.listen(PORT, () => {
//     console.log(`Dev server listening on http://localhost:${PORT}`);
//   });
// }
