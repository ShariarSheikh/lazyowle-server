import Express from 'express'
import { GlobalErrorHandler, NotFoundRouteErrorHandler } from './core/ErrorHandler'
import rootMiddleware from './middleware/rootMiddleware'
import router from './routes'

const app = Express()

//Middleware
app.use(rootMiddleware.jsonParser, rootMiddleware.urlencoded, rootMiddleware.corsUrl)
//ROUTER
app.use(router)

//Error handler
app.all('*', NotFoundRouteErrorHandler)
app.use(GlobalErrorHandler)

export default app
