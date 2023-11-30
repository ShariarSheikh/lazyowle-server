import { NextFunction, Request, Response } from 'express'
import ApiResponse from '../core/ApiResponse'

//------------------------------------------------

//------------------------------------------------
export const GlobalErrorHandler = async (error: any, _req: Request, res: Response, _next: NextFunction) => {
  const response = new ApiResponse(res)

  if (error.statusCode === 500) return response.internalServerError()
  return response.badRequest(error.message)
}

//------------------------------------------------
export const NotFoundRouteErrorHandler = async (req: Request, res: Response) => {
  const response = new ApiResponse(res)
  return response.notFound(`Not found this ${req.originalUrl} url `)
}
