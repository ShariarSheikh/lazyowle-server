import sharp from 'sharp'

export default function getImageDimensions(fileBuffer: Buffer): Promise<{ width: number; height: number }> {
  return new Promise((resolve, reject) => {
    sharp(fileBuffer)
      .metadata()
      .then((metadata) => {
        resolve({
          width: metadata.width || 1000,
          height: metadata.height || 600
        })
      })
      .catch((error) => {
        reject(error)
      })
  })
}
