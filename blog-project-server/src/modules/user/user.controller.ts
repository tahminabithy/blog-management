import { Request, RequestHandler, Response } from "express";
import { userService } from "./user.service";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";

const createUser = catchAsync(async (req, res) => {
  const result = await userService.createUserInDb(req.body);
  const responseData = {
    status: true,
    message: "User created successfully",
    data: result,
  };
  sendResponse(res, responseData);
});
const login = catchAsync(async (req, res, next) => {
  const result = await userService.loginUser(req.body);
  const responseData = {
    status: true,
    message: "User logged in successfully",
    data: result,
  };
  sendResponse(res, responseData);
});

export const userController = {
  createUser,
  login,
};