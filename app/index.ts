import 'dotenv/config'
import app from './app'
import { PORT } from './config/variables.config'
import logger from './core/Logger'

app.listen(PORT, () => {
  logger.info(`Server listening on PORT ${PORT}`)
})
