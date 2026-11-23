import mongoose from "mongoose";
import { adapters } from "../Backend/src/config/adapters.js";
import { loadEnv } from "../Backend/src/config/env.js";
import { createApp } from "../Backend/src/app.js";

const config = loadEnv();
const app = createApp({ config, ...adapters() });
let databaseConnection;

const connectDatabase = () => {
    if (mongoose.connection.readyState === 1) {
        return Promise.resolve();
    }

    if (!databaseConnection) {
        databaseConnection = mongoose.connect(config.mongoUri).catch((error) => {
            databaseConnection = null;
            throw error;
        });
    }

    return databaseConnection;
};

export default async function handler(req, res) {
    try {
        await connectDatabase();
        return app(req, res);
    } catch (error) {
        console.error("Vercel API database connection failed.", error);
        return res.status(503).json({ error: "Service unavailable" });
    }
}
