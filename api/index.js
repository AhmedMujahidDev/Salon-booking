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
    const requestUrl = new URL(req.url, `http://${req.headers.host || "localhost"}`);
    const apiPath = requestUrl.searchParams.get("__api_path");

    if (apiPath) {
        requestUrl.searchParams.delete("__api_path");
        requestUrl.pathname = `/api/v1/${apiPath}`;
        req.url = `${requestUrl.pathname}${requestUrl.search}`;
    }

    try {
        await connectDatabase();
        return app(req, res);
    } catch (error) {
        console.error("Vercel API database connection failed.", error);
        return res.status(503).json({ error: "Service unavailable" });
    }
}
