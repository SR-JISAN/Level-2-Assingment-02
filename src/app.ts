import express, { type Application, type Request, type Response } from "express";
import { usersRoute } from "./modules/users/users.router";
import { authRoute } from "./modules/auth/auth.route";
import {issuesRoute} from "./modules/Issues/issues.route";

const app : Application = express();
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));

app.get("/",(req: Request, res: Response) => {
  res.send("Hello, World!");
});

app.use("/api/users", usersRoute);

app.use("/api/auth/signup", usersRoute);

app.use("/api/auth",authRoute);

app.use("/api/issues", issuesRoute)





export default app;