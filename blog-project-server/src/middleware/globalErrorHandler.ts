import { NextFunction, Request, Response } from "express";
import { stat } from "fs";
import { STATUS_CODES } from "http";
import { StatusCodes } from "http-status-codes";
import { DuplicateError } from "../errorsTypes/DuplicateError";

const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(err);
  if (err.code === 11000) {
    DuplicateError(err, res);
  } else if (err instanceof Error) {
    res.status(StatusCodes.NOT_FOUND).json({
      status: false,
      message: err.message,
      statuscode: StatusCodes.NOT_FOUND,
      error: err.message,
      stack: err.stack,
    });
  }
};

export default globalErrorHandler;
