import express, { NextFunction, Request, Response } from 'express'
import ApiResponse from '../../core/ApiResponse'
import asyncHandler from '../../helpers/asyncHandler'
// import validator from '../../helpers/validator'
import upload from '../../middleware/multer'
import fs from 'fs'
import getImageDimension from '../../helpers/getImageDimensions'
import sharp from 'sharp'

const imgSizeReducer = express.Router()

imgSizeReducer.post(
  '/size-reduce',
  upload.single('imgData'),
  // validator(imageSchema),
  asyncHandler(async (req: Request, res: Response, _next: NextFunction) => {
    const response = new ApiResponse(res)

    if (!req.file?.path) return response.badRequest('Please upload a valid image file')

    const imgFilePath = `./${req.file.path}`
    const imgFileBuffer = fs.readFileSync(imgFilePath) // Read the image file

    const imgDimension = await getImageDimension(imgFileBuffer)
    const imgBuffer = await sharp(imgFileBuffer)
      .resize({ width: imgDimension.width, height: imgDimension.height })
      .jpeg({ quality: 80 })
      .toBuffer()

    // const imageFile = new File([Buffer.from(imgFileBuffer)], req.file.originalname, {
    //   type: req.file.mimetype,
    //   lastModified: Date.now()
    // })

    // delete file
    fs.unlinkSync(imgFilePath)

    const imgEditedFile = `data:${req.file.mimetype};base64,${imgBuffer.toString('base64')}`
    return response.success({ file: imgEditedFile })
  })
)

export default imgSizeReducer
