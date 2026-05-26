import type { Request, Response } from "express"
import { authService } from "./auth.service";

const loginUser =async (req : Request, res: Response)=>{
     try{
         const results = await authService.loginUser(req.body)
              res.status(200).json({
                success: true,
                message: "Login successful",
                data: results
                
              });
     }
     catch(error: any){
       res.status(500).json({
         success: false,
         message: "Error occurred while logging in",
         error: error.message,
       });
     }
}

export const authController = {
  loginUser
}