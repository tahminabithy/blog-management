import { NextFunction, Request, Response } from "express";
import { blogService } from "./blog.service";
import { sendResponse } from "../../utils/sendResponse";
import { catchAsync } from "../../utils/catchAsync";

const createBlog = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await blogService.createBlogInDb(req.body);
    const responseData = {
      status: true,
      message: "Blog created successfully",
      data: result,
    };
    sendResponse(res, responseData);
  }
);
export const blogController = {
  createBlog,
};
