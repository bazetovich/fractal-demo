import { Request, Response, NextFunction } from 'express';
import httpErrors from 'http-errors';

// Simple auth immitation

const USER_ID_FROM_TOKEN = 'fcd1ed0a-8fcd-41a9-b84e-875d73687616';

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('Authorization');

  if (!token) {
    throw new httpErrors.Unauthorized();
  }

  // Some verification logic wil be here, let's pretend we parse and obtain userId here

  res.locals.userId = USER_ID_FROM_TOKEN;
  next();
};
