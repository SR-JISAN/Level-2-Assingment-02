import config from "../config";
import { Pool } from "pg";

export const pool = new Pool({
  connectionString: config.CONNECTION_STRING,
});

export const initDB = async () => {
  try {
    // await pool.query(`
    //          CREATE TABLE IF NOT EXISTS users(
    //          id SERIAL PRIMARY KEY,
    //          name VARCHAR(20),
    //          email VARCHAR(20) UNIQUE NOT NULL,
    //          password TEXT NOT NULL,
    //          is_active BOOLEAN DEFAULT true,
    //          age INT,
    //          create_at TIMESTAMP DEFAULT NOW(),
    //          update_at TIMESTAMP DEFAULT NOW()

    //          )
    //         `);

    // await pool.query(`
    //    CREATE TABLE IF NOT EXISTS profile(
    //      id SERIAL PRIMARY KEY,
    //      users_id INT UNIQUE REFERENCES users(id) ON DELETE CASCADE,

    //      bio TEXT,
    //      address TEXT,
    //      phone VARCHAR(15),
    //      gender VARCHAR(11),
    //      create_at TIMESTAMP DEFAULT NOW(),
    //      update_at TIMESTAMP DEFAULT NOW()
    //    )
    //   `);
    console.log("Database initialized successfully");
  } catch (error) {
    console.error(error);
  }
};