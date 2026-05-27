import type { NextFunction, Request, Response } from "express";


const maintainerAccess = async (req: Request, res: Response, next: NextFunction)=>{
    try {
        const user =req.user;
       if(user.role === "maintainer"){
        return next()
       }

       return res.status(403).json({
         success: false,
         message: "Access denied. Maintainer only.",
       });

    } catch (error: any) {
          res.status(500).json({
           success: false,
           message: "Authorization failed",
           error: error.message,
         });
    }
}

export default maintainerAccess;