import { NextFunction, Request, Response, Router } from 'express'
import { API_KEY } from '../config/variables.config'
import ApiResponse from '../core/ApiResponse'
import asyncHandler from '../helpers/asyncHandler'
import validator, { ValidationSource } from '../helpers/validator'
import schema from './schema'

const apiKey = Router()

apiKey.use(
  validator(schema.apiKey, ValidationSource.HEADER),
  asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const response = new ApiResponse(res)
    const apiKeyHeader = req.headers['x-api-key']

    if (API_KEY !== apiKeyHeader) return response.unauthorized('Please provide a valid api key')

    return next()
  })
)

export default apiKey
