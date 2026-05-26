import express, { type Application, type Request, type Response } from "express";
import { usersRoute } from "./modules/users/users.router";

const app : Application = express();
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));

app.get("/",(req: Request, res: Response) => {
  res.send("Hello, World!");
});

app.use("/api/users", usersRoute);

app.use("/api/auth/signup", usersRoute);



export default app;