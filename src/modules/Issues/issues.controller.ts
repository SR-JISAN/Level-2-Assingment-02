import  { type Request, type Response } from "express"
import { issuesService } from "./issues.service";


const getAllIssues = async(req: Request, res: Response) =>{
  try{
    const results = await issuesService.getAllIssuesFromDB()
    res.status(200).json({
      success: true,
      message: "Issues retrieved successfully",
      data: results.rows,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Error occurred while retrieving issues",
      error: error.message
    });
  }
};

const getIssue = async(req: Request, res: Response) =>{
  try{
    const { id } = req.params;   
   const results = await issuesService.getIssuesFromDB(id as string)
   if (results.rows.length === 0) {
     res.status(404).json({
       success: false,
       message: "Issue not found",
       data: {},
     });
   }
   res.status(200).json({
     success: true,
     message: "Issue found successfully",
     data: results.rows[0],
   });
  
  }
  catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Error occurred while retrieving issue",
      error: error.message
    });
  }
}

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
          data: results.rows[0],
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

const updateIssue = async(req: Request, res: Response) =>{
    try{
        const { id } = req.params;
        const payload = req.body;

       const result = await issuesService.updateIssueFromDB(Number(id), payload);


    res.status(200).json({
    success: true,
    message: "Issue updated successfully",
    data: result.rows[0],
  });
    }
    catch(error: any){
        res.status(500).json({
            success: false,
            message: "Error occurred while updating issue",
            error: error.message
        })
    }
} 

export const issuesController = {
    postIssues,
    getAllIssues,
    updateIssue,
    getIssue
    
}