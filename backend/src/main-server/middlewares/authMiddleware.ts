import { NextFunction, Request, Response } from "express";

export const sessionChecker = (req: any, res: Response, next: NextFunction) => {
  if (req.session.userId) {
    next();
  } else {
    res.status(401).send("로그인 필요");
  }
};
