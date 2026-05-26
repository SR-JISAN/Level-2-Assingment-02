import { pool } from "../../dataBase";
import type { IUsers } from "./users.interface";
import bcrypt from "bcryptjs";


const getAllUsersFromDB = async ()=>{
   const results = await pool.query(` SELECT * FROM users`);
   return results;
}

const createUsersInDB = async (payload : IUsers)=>{
    const { name, email, password, role } = payload;
    const hashedPassword = await bcrypt.hash(password, 10);
    const results = await pool.query(
      `INSERT INTO users ( name, email, password,role) VALUES ($1, $2, $3,COALESCE($4, 'contributor'))
    RETURNING *
    `,
      [name, email, hashedPassword, role],
    );
    delete results.rows[0].password;
    return results;
}

export const usersService = {
   getAllUsersFromDB,
   createUsersInDB

}