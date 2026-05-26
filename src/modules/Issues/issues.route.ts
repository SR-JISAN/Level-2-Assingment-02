import Route from "express"
import { issuesController } from "./issues.controller"
import auth from "../middleware/auth.middleware"

const route =Route()

route.post("/",auth,issuesController.postIssues)


export const issuesRoute = route


