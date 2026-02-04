import { Request, Response, NextFunction } from "express";
import AppError from "../utils/error/appError";

export function errorMiddleware(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.error(err); // log para debug

  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: "error",
      message: err.message,
    });
  }

  // Erros não tratados
  return res.status(500).json({
    status: "error",
    message: "Internal Server Error",
  });
}

export default errorMiddleware;