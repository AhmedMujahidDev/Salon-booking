import express from "express";
import cors from "cors";
import { routes } from "./routes/index.js";
import { errors, rateLimit } from "./middleware/errors.js";
export function createApp(dependencies) {
  const app = express();
  app.disable("x-powered-by");
  app.use(
    cors({
      origin(origin, callback) {
        if (!origin || dependencies.config.frontendOrigins.includes(origin)) {
          callback(null, true);
          return;
        }
        callback(new Error("Origin is not allowed by CORS"));
      },
      credentials: true,
    }),
  );
  app.use(rateLimit({ max: 300 }));
  app.use(express.json({ limit: "32kb" }));
  app.get("/health", (req, res) => res.json({ status: "OK", uptime: process.uptime() }));
  app.use("/api/v1", routes(dependencies));
  app.use((req, res) => res.status(404).json({ error: "Route not found" }));
  app.use(errors);
  return app;
}