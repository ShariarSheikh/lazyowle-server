import { Response } from 'express'

export default class ApiResponse {
  private res: Response
  constructor(res: Response) {
    this.res = res
  }

  public success(data?: any, message?: string): Response {
    return this.res.status(200).json({
      success: true,
      data,
      message
    })
  }

  public created(data?: any, message?: string): Response {
    return this.res.status(201).json({
      success: true,
      data,
      message
    })
  }

  public badRequest(message?: string): Response {
    return this.res.status(400).json({
      success: false,
      message: message || 'Bad Request'
    })
  }

  public unauthorized(message?: string): Response {
    return this.res.status(401).json({
      success: false,
      message: message || 'Unauthorized'
    })
  }

  public forbidden(message?: string): Response {
    return this.res.status(403).json({
      success: false,
      message: message || 'Forbidden'
    })
  }

  public notFound(message?: string): Response {
    return this.res.status(404).json({
      success: false,
      message: message || 'Not Found'
    })
  }

  public internalServerError(message?: string): Response {
    return this.res.status(500).json({
      success: false,
      message: message || 'Internal Server Error'
    })
  }
}
