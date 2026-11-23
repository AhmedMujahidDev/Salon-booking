import dotenv from "dotenv";
import { fileURLToPath } from "node:url";
import mongoose from "mongoose";
import { loadEnv } from "./config/env.js";
import { adapters } from "./config/adapters.js";
import { createApp } from "./app.js";

dotenv.config({ path: fileURLToPath(new URL("../.env", import.meta.url)) });

const config = loadEnv();
await mongoose.connect(config.mongoUri);
const server = createApp({ config, ...adapters() }).listen(config.port, () =>
  console.log(`Saloon App listening on ${config.port}`),
);
for (const signal of ["SIGINT", "SIGTERM"])
  process.once(signal, () => {
    server.close(async () => {
      await mongoose.disconnect();
      process.exit(0);
    });
    setTimeout(() => process.exit(1), 10000).unref();
  });