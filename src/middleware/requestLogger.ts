/**
 * Middleware function for logging timestamp, HTTP method, and requested URL.
 * @param req - The Express Request object.
 * @param res - The Express Response object.
 * @param next - The next middleware function.
 */
import { Request, Response, NextFunction } from 'express';

const requestLogger = (req: Request, res: Response, next: NextFunction) => {
  const timestamp: string = new Date().toISOString();
  const method: string = req.method;
  const url: string = req.url;

  console.log(`${timestamp} - ${method} request to ${url}`);
  next();
};

export default requestLogger;
