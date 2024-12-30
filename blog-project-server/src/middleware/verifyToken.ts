import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../utils/catchAsync";
import jwt, { JwtPayload } from "jsonwebtoken";
import config from "../config";
const verifyToken = () => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const bearerToken = req.headers.authorization;
    if (bearerToken) {
      const token = bearerToken.split(" ")[1];
      const decoded = jwt.verify(token, config.tokenSecret as string)
      req.user=decoded as JwtPayload;
      next();
    }
  });
};

export default verifyToken;

