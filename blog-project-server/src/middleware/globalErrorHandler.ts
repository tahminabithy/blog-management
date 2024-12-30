import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { DuplicateError } from '../errorsTypes/DuplicateError';

const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  console.log(err);
  if (err.code === 11000) {
    DuplicateError(err, res);
  } else if (err instanceof Error) {
    res.status(StatusCodes.NOT_FOUND).json({
      success: false,
      message: err.message,
      // statuscode: StatusCodes.NOT_FOUND,
      error: err,
      stack: err.stack,
    });
  }
};

export default globalErrorHandler;
