import { Response } from 'express';
import { StatusCodes } from 'http-status-codes';

type response<T> = {
  status: boolean;
  message: string;
  statusCode?: number;
  data: T;
};

export const sendResponse = <T>(res: Response, data: response<T>) => {
  res.status(data.statusCode as number).json({
    success: data.status,
    statusCode: data.statusCode,
    message: data.message,
    data: data.data,
  });
};
