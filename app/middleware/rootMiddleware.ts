import cors from 'cors'
import Express from 'express'
import { environment } from '../config/variables.config'

const jsonParser = Express.json()
const urlencoded = Express.urlencoded({ extended: true })

const allowOrigin = environment === 'development' ? 'http://localhost:3000' : 'https://lazyowle.vercel.app'
const corsUrl = cors({ origin: allowOrigin })

export default { jsonParser, urlencoded, corsUrl }
