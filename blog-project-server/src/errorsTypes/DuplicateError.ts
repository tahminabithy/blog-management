import { Response } from 'express';
import { stat } from 'fs';
import { StatusCodes } from 'http-status-codes';

export const DuplicateError = (err: any, res: Response) => {
  res.status(400).json({
    success: false,
    message: 'Duplicate key error',
    statuscode: StatusCodes.BAD_REQUEST,
    error: err,
    stack: err.stack,
  });
};
