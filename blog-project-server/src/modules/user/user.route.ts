import { Router } from "express";
import { userController } from "./user.controller";

export const userRouter = Router();

userRouter.post("/auth/register", userController.createUser);
userRouter.post("/auth/login", userController.login);
