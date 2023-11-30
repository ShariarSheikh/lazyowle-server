import { Router } from 'express';
import apiKey from '../auth/apiKey';
import imgBgRemove from './img-bg-remove';


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
router.use('/api/image', imgBgRemove)


export default router
