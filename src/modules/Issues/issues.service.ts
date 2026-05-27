import type { IIssues } from "./issue.interface"
import { pool } from "../../dataBase";

const getAllIssuesFromDB = async()=>{
   const result = await pool.query(`
   SELECT 
    i.id,
    i.title,
    i.description,
    i.type,
    i.status,
    i.created_at,
    i.updated_at,

    json_build_object(
      'id', u.id,
      'name', u.name,
      'role', u.role
    ) AS reporter

  FROM issues i
  JOIN users u ON i.reporter_id = u.id
  `);

  return result;
}

const  getIssuesFromDB = async(payload: string)=>{
    const id = payload;
    const result = await pool.query(`
        SELECT * FROM issues WHERE id =$1 `,[id])
        return result
}

const postIssueFromDB = async (payload: IIssues)=>{
   const { title, description,type, reporter_id } = payload;
   const result = await pool.query(`
    INSERT INTO issues (title, description, type, reporter_id)
    VALUES ($1, $2, $3, $4)
    RETURNING *
   `,[title, description, type, reporter_id]
    );
    return result;
}

const updateIssueFromDB = async (id: number, payload: IIssues)=>{
    const { title, description, type, status } = payload;
    const result = await pool.query(`
        UPDATE issues SET
        
        title = COALESCE($1, title),
        description = COALESCE($2, description),
        type = COALESCE($3, type),
        status = COALESCE($4, status),
        updated_at = NOW()
        WHERE id = $5
        RETURNING *
    `,[title, description, type, status, id]
    );
    return result;

}

const deleteIssueFromDB = async (id : string)=>{
    const result = await pool.query(`
          DELETE FROM issues WHERE id=$1
        `,[id])
        return result
}


export const issuesService = {
    getAllIssuesFromDB,
    postIssueFromDB,
    updateIssueFromDB,
    getIssuesFromDB,
    deleteIssueFromDB
}