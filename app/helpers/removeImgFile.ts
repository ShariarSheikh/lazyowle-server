import fs from 'fs'
export default async function removeImgFile(path: string) {
  fs.unlinkSync(path)
}
