import mongoose from 'mongoose'
import OrderModel, { IOrder } from '../models/Order.model'

class OrderController {
  public async create(order: IOrder) {
    return await OrderModel.create(order)
  }

  public async delete(orderId: mongoose.Schema.Types.ObjectId) {
    return await OrderModel.findByIdAndDelete(orderId)
  }

  public async findOrderById(orderId: mongoose.Schema.Types.ObjectId) {
    return await OrderModel.findById(orderId)
  }

  public async findByOrderId(orderId: string) {
    return await OrderModel.findOne({ orderId: orderId })
  }

  public async getAllByUserId(userId: mongoose.Schema.Types.ObjectId) {
    return await OrderModel.find({ user: userId }).lean().exec()
  }

  public async deleteAllByUserId(userId: mongoose.Schema.Types.ObjectId) {
    return await OrderModel.deleteMany({ user: userId })
  }
}

export default new OrderController()
