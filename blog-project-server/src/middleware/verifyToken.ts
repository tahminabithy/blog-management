import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../utils/catchAsync";

const verifyToken = () => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    console.log(req.headers.authorization);
    const bearerToken = req.headers.authorization;
    if (bearerToken) {
      const token = bearerToken.split(" ")[1];
      // req.token = token;
      next();
    }
  });
};

export default verifyToken;
// return (req: Request, res: Response, next: NextFunction) => {
//     const bearerHeader = req.headers["authorization"];
//     if (typeof bearerHeader !== "undefined") {
//       const bearer = bearerHeader.split(" ");
//       const bearerToken = bearer[1];
//       req.token = bearerToken;
//       next();
//     } else {
//       res.sendStatus(403);
//     }
//   };
