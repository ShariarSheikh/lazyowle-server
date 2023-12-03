import { Router } from 'express'
import apiKey from '../auth/apiKey'
import sizeReducer from './img-size-reducer'

const router = Router()

router.get('/api/health', (_req, res) => {
  res.status(200).json({
    Author: {
      name: 'Shariar Sheikh',
      Headline: 'Software Engineer',
      picture: 'https://www.linkedin.com/in/sheikhshariar/'
    }
  })
})

//-------------------------------------------
router.use(apiKey)
//-------------------------------------------

// Auth
router.use('/api/image', sizeReducer)

export default router
