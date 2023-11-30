import express, { NextFunction, Request, Response } from 'express'
import ApiResponse from '../../core/ApiResponse'
import asyncHandler from '../../helpers/asyncHandler'
import validator from '../../helpers/validator'
import upload from '../../middleware/multer'
import { imageSchema } from './schema'

const imgBgRemove = express.Router()

imgBgRemove.post(
  '/bg-remove',
  validator(imageSchema),
  upload.single("imgData"),
  asyncHandler(async (req: Request, res: Response, _next: NextFunction) => {
    const response = new ApiResponse(res)


    return response.success({file:req.file})
  })
)



export default imgBgRemove
