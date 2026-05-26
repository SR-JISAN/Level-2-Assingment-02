import Router from "express"
import { usersController } from "./users.controller";

const router =Router()

router.get("/",usersController.getUsersAll)

router.post("/", usersController.createUsers)


export const usersRoute = router;