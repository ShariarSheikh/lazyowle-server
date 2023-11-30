import mongoose from 'mongoose'
import AuthModel, { IAuth } from '../models/Auth.Model'

class AuthController {
  public async findUserWithEmail(email: string) {
    return await AuthModel.findOne({ email })
  }
  public async findUserWithId(id: mongoose.Schema.Types.ObjectId) {
    return await AuthModel.findById(id)
  }
  public async findUserWithIdAndUpdate(id: mongoose.Schema.Types.ObjectId, profile: IAuth) {
    return await AuthModel.findByIdAndUpdate(id, profile, { new: true })
  }

  public async createUser(user: IAuth) {
    return await AuthModel.create(user)
  }
  public async deleteUser(id: mongoose.Schema.Types.ObjectId) {
    return await AuthModel.findByIdAndDelete(id)
  }
}

export default new AuthController()
