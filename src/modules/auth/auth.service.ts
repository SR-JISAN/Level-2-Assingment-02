import { pool } from "../../dataBase";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import config from "../../config";


const loginUser = async (payload: {email: string, password : string})=>{
    const {email,password}= payload;
    const userData = await pool.query(`
          SELECT * FROM users WHERE email =$1
        `,[email])
        if(userData.rows.length === 0){
            throw new Error("Invalid email or password");
        };
        const user = userData.rows[0];
        const matchPassword = await bcrypt.compare(password,user.password)
        if(!matchPassword){
            throw new Error("Invalid email or password");
        }
        const jwtPayload = {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role
        };
        const token = jwt.sign(jwtPayload, config.JWT_SECRET_KEY, {
          expiresIn: "1d",
        });
       return {
         token,
         user: {
           id: user.id,
           name: user.name,
           email: user.email,
           role: user.role,
           created_at: user.create_at,
           updated_at: user.update_at,
         },
       };
}


export const authService = {
    loginUser
}