import type { NextFunction, Request, Response } from "express";
import { pool } from "../../dataBase";


const issuesAccess = async (req: Request, res: Response, next: NextFunction) =>{
    try {
      const issueId = req.params.id;
      const user = req.user;
      const result = await pool.query(
        `
         SELECT * FROM issues WHERE id =$1
        `,
        [issueId],
      );

      if (result.rows.length === 0) {
        return res.status(404).json({
          success: false,
          message: "Issue not found",
        });
      }

      const issue = result.rows[0];

      if(user.role === "maintainer"){
        return next();
      }
      if (
        Number(issue.reporter_id) === Number (user.id) &&
        user.role === "contributor" &&
        issue.status === "open"
      ) {
        return next();
      }
       return res.status(403).json({
         success: false,
         message: "Forbidden access",
       });
       
       
    }
     catch (error: any) {
      res.status(500).json({
        success: false,
        message: "Error occurred while checking access",
        error: error.message,
      });
    }
}

export default issuesAccess;
    
