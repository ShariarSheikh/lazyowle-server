import { NextFunction, Request, Response } from 'express'
import Joi from 'joi'
import ApiResponse from '../core/ApiResponse'
import logger from '../core/Logger'

export enum ValidationSource {
  BODY = 'body',
  HEADER = 'headers',
  QUERY = 'query',
  PARAM = 'params'
}

export default (schema: Joi.AnySchema, source: ValidationSource = ValidationSource.BODY) =>
  (req: Request, res: Response, next: NextFunction) => {
    const response = new ApiResponse(res)

    try {
      const { error } = schema.validate(req[source])
      if (!error) return next()

      const { details } = error
      const message = details.map((i) => i.message.replace(/['"]+/g, '')).join(',')

      logger.error(message)

      return response.badRequest(message)
    } catch (error) {
      next(error)
    }
  }
