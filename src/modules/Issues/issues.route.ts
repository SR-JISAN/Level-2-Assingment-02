import Route from "express"
import { issuesController } from "./issues.controller"
import auth from "../middleware/auth.middleware"
import issuesAccess from "../middleware/issues.middleware"

const route =Route()

route.get("/",issuesController.getAllIssues)
route.get("/:id",issuesController.getIssue)

route.post("/",auth,issuesController.postIssues)

route.put("/:id", auth, issuesAccess, issuesController.updateIssue);

route.delete("/:id",issuesController);


export const issuesRoute = route


