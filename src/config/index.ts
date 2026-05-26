import dotenv from "dotenv";
import path from "path";

dotenv.config({
    path: path.join(process.cwd(),".env")
});

function getEnv(key: string): string {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Missing environment variable: ${key}`);
  }
  return value;
}

const config = {
  PORT: getEnv("PORT"),
  CONNECTION_STRING: getEnv("CONNECTION_STRING"),
  JWT_SECRET_KEY: getEnv("JWT_SECRET_KEY"),
};


export default config;