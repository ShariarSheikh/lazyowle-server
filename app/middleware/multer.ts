import fs from 'fs'
import multer from 'multer'

export const fileUploadFolderPath = '/tmp/'

if (!fs.existsSync(fileUploadFolderPath)) {
  fs.mkdirSync(fileUploadFolderPath)
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, fileUploadFolderPath)
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '--' + file.originalname)
  }
})

const upload = multer({
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024 // 5 MB
  },
  fileFilter: (req, file, cb) => {
    const allowedFileExtensions = ['.png', '.jpeg', '.webp', '.jpg', '.avif']

    const fileExtension = '.' + file.originalname.split('.').pop()
    if (allowedFileExtensions.includes(fileExtension)) {
      cb(null, true)
    } else {
      cb(new Error('Only .png, .jpeg, .webp, .avif, and .jpg files are allowed.'))
    }
  }
})

export default upload
