import TokenModel from '../models/Tokens.Model'
import mongoose from 'mongoose'

class AuthController {
  public async findByUserId(id: mongoose.Schema.Types.ObjectId) {
    return await TokenModel.findOne({ userId: id })
  }

  public async findByToken(token: string) {
    return await TokenModel.findOne({ token: token })
  }

  public async create(token: string, userId: mongoose.Schema.Types.ObjectId) {
    return await TokenModel.create({ token, userId })
  }

  public async deleteByUserId(userId: mongoose.Schema.Types.ObjectId) {
    return await TokenModel.deleteMany({ userId: userId })
  }
}

export default new AuthController()
