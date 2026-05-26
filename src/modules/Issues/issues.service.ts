import type { IIssues } from "./issue.interface"
import { pool } from "../../dataBase";

const postIssueFromDB = async (payload: IIssues)=>{
   const { title, description, type,reporter_id } = payload;
   const result = await pool.query(`
    INSERT INTO issues (title, description, type, reporter_id)
    VALUES ($1, $2, $3, $4)
    RETURNING *
   `,[title, description, type, reporter_id]
    );
    return result;
}


export const issuesService = {
    postIssueFromDB
}