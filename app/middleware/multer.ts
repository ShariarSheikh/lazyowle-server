import multer from 'multer'
import path from 'path'

export const fileUploadFolderPath = './tmp/'

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
  dest: fileUploadFolderPath,
  limits: {
    fileSize: 5 * 1024 * 1024 // 5 MB
  },
  fileFilter: (req, file, cb) => {
    const allowedFileExtensions = ['.png', '.jpeg', '.webp', '.jpg', '.avif']

    const fileExtension = path.extname(file.originalname).toLowerCase()
    if (allowedFileExtensions.includes(fileExtension)) {
      cb(null, true)
    } else {
      cb(new Error('Only .png, .jpeg, .webp, .avif, and .jpg files are allowed.'))
    }
  }
})

export default upload
