import { NextFunction, Request, Response } from 'express';
import AppError from '../erros/appError';

async function handleErrorMiddleware(
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  console.log("handleErrorMiddleware")


  if (error instanceof AppError) {
    if (!error.statusCode) {
      error.statusCode = 400;
    }

    return res.status(error.statusCode).json({ message: error.message });
  }

  return res
    .status(500)
    .send(
      `<h1> Service Unavailable</h1> <p>The server return an internal error.</p>`,
      );
  }
  
  export default handleErrorMiddleware;