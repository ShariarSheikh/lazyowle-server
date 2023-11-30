import { Request } from 'express'
import { IAuth } from '../models/Auth.Model'

declare interface ProtectedRequest extends Request {
  user: IAuth
}
