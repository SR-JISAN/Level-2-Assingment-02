import  { type Request, type Response } from "express"
import { issuesService } from "./issues.service";


const postIssues = async(req: Request, res: Response) =>{
  try{
     const payload = {
       ...req.body,
       reporter_id: req.user.id
     };
        const results = await issuesService.postIssueFromDB(payload)
        res.status(201).json({
          success: true,
          message: "Issue created successfully",
          data: results,
        });
      }
      catch(error: any){
          res.status(500).json({
              success: false,
              message: "Error occurred while creating issue",
              error: error.message
          })
      }
}

export const issuesController = {
    postIssues
}