import { Response } from "express";

type response<T> = {
  status: boolean;
  message: string;
  data: T;
};

export const sendResponse = <T>(res: Response, data: response<T>) => {
  res.status(200).json({
    status: data.status,
    message: data.message,
    data: data.data,
  });
};
