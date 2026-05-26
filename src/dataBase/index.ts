import config from "../config";
import { Pool } from "pg";

export const pool = new Pool({
  connectionString: config.CONNECTION_STRING,
});

export const initDB = async () => {
  try {
    await pool.query(`
        CREATE TABLE IF NOT EXISTS users(
        id SERIAL PRIMARY KEY,
        name VARCHAR(50) NOT NULL,
        email VARCHAR(50) UNIQUE NOT NULL,
        password TEXT NOT NULL,
         role VARCHAR(20)
         NOT NULL
         DEFAULT 'contributor'
          CHECK (role IN ('contributor', 'maintainer')),
        create_at TIMESTAMP DEFAULT NOW(),
        update_at TIMESTAMP DEFAULT NOW()
      )
      `);

    
    console.log("Database initialized successfully");
  } catch (error) {
    console.error(error);
  }
};