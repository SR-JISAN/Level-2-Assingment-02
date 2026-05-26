import type { Request, Response } from "express"
import { usersService } from "./users.service"
import bcrypt from "bcryptjs"


const getUsersAll = async(req: Request, res : Response) =>{
  try{
    const results = await usersService.getAllUsersFromDB()
    res.status(200).json({
        success: true,
        message: "Users retrieved successfully",
        data: results.rows
    })
  }
  catch(error: any){
    res.status(500).json({
        success: false,
        message: "Error occurred while retrieving users",
        error: error.message
    })
  }
}

const createUsers = async (req:Request, res :Response)=>{
    try{
        const results = await usersService.createUsersInDB(req.body)
      res.status(201).json({
        success: true,
        message: "User created successfully",
        data: results.rows[0]
      })
    }
    catch(error: any){
        res.status(500).json({
            success: false,
            message: "Error occurred while creating user",
            error: error.message
        })
    }
}

export const usersController = {
    getUsersAll,
    createUsers
}

