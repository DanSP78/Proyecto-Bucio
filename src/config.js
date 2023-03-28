import { config } from "dotenv";

config();

export const MONGODB_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1/escuela";
export const PUERTO = process.env.PUERTO || 4200;
export const MONGODB_ATLAS = process.env.MONGODB_ATLAS || process.env.MONGODB_ATLAS;