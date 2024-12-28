import { Router } from "express";
import { blogController } from "./blog.controller";
import verifyToken from "../../middleware/verifyToken";

export const blogRouter = Router();

blogRouter.post("/blogs", verifyToken(), blogController.createBlog);
