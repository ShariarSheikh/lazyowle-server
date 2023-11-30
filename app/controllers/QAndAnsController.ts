import mongoose from 'mongoose'
import QAndAnsModel, { IQAndAns } from '../models/QAndAns.Model'

class QAndAnsController {
  public async allQAndAnsByProductId(id: mongoose.Schema.Types.ObjectId) {
    return await QAndAnsModel.find({ product: id })
      .limit(10)
      .populate({
        path: 'user',
        select: 'firstName lastName imgUrl _id'
      })
      .limit(10)
      .populate({
        path: 'product',
        select: '_id title images'
      })
      .lean()
      .exec()
  }

  public async create(qAndAns: IQAndAns) {
    return await QAndAnsModel.create(qAndAns)
  }

  public async findQAndAnsByUserAndProductId(
    productId: mongoose.Schema.Types.ObjectId,
    userId: mongoose.Schema.Types.ObjectId
  ) {
    return await QAndAnsModel.findOne({ user: userId, product: productId })
  }

  public async findQAndAnsById(id: mongoose.Schema.Types.ObjectId) {
    return await QAndAnsModel.findById(id)
  }

  public async getUserAllQAndAns(userId: mongoose.Schema.Types.ObjectId) {
    return await QAndAnsModel.find({ user: userId })
      .limit(10)
      .populate({
        path: 'user',
        select: 'firstName lastName imgUrl _id'
      })
      .populate({
        path: 'product',
        select: '_id title images'
      })
      .lean()
      .exec()
  }

  public async updateQAndAns({ id, qAndAns }: { id: mongoose.Schema.Types.ObjectId; qAndAns: IQAndAns }) {
    return await QAndAnsModel.findByIdAndUpdate(id, qAndAns, { new: true })
  }

  public async deleteQAndAns(deleteId: mongoose.Schema.Types.ObjectId) {
    return await QAndAnsModel.findByIdAndDelete(deleteId)
  }

  public async deleteAllQAndAnsByUserId(userId: mongoose.Schema.Types.ObjectId) {
    return await QAndAnsModel.deleteMany({ user: userId })
  }

  public async deleteAllQAndAnsByProductId(productId: mongoose.Schema.Types.ObjectId) {
    return await QAndAnsModel.deleteMany({ product: productId })
  }
}

export default new QAndAnsController()
