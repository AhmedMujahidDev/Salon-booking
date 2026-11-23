import express from "express";
import cors from "cors";
import { routes } from "./routes/index.js";
import { errors, rateLimit } from "./middleware/errors.js";
export function createApp(dependencies) {
  const app = express();
  app.disable("x-powered-by");
  app.use((req, res, next) => {
    const origin = req.get("origin");
    const requestHost =
      req.get("x-forwarded-host")?.split(",")[0].trim() || req.get("host");
    const requestProtocol =
      req.get("x-forwarded-proto")?.split(",")[0].trim() || req.protocol;
    const sameOrigin = origin === `${requestProtocol}://${requestHost}`;

    return cors({
      origin(requestOrigin, callback) {
        if (
          !requestOrigin ||
          sameOrigin ||
          dependencies.config.frontendOrigins.includes(requestOrigin)
        ) {
          callback(null, true);
          return;
        }
        callback(new Error("Origin is not allowed by CORS"));
      },
      credentials: true,
    })(req, res, next);
  });
  app.use(rateLimit({ max: 300 }));
  app.use(express.json({ limit: "32kb" }));
  app.get("/health", (req, res) => res.json({ status: "OK", uptime: process.uptime() }));
  app.use("/api/v1", routes(dependencies));
  app.use((req, res) => res.status(404).json({ error: "Route not found" }));
  app.use(errors);
  return app;
}