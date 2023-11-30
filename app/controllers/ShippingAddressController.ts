import mongoose from 'mongoose'
import ShippingAddressModel, { IShippingAddress } from '../models/ShippingAddress.Model'

class ShippingAddressController {
  public async create(shippingAddress: IShippingAddress) {
    return await ShippingAddressModel.create(shippingAddress)
  }

  public async delete(deleteId: mongoose.Schema.Types.ObjectId) {
    return await ShippingAddressModel.findByIdAndDelete(deleteId)
  }

  public async update(id: mongoose.Schema.Types.ObjectId, updatedShippingAddress: IShippingAddress) {
    return await ShippingAddressModel.findByIdAndUpdate(id, updatedShippingAddress, { new: true })
  }

  public async findShippingAddressById(shippingAddressId: mongoose.Schema.Types.ObjectId) {
    return await ShippingAddressModel.findById(shippingAddressId)
  }

  public async getAllByUserId(userId: mongoose.Schema.Types.ObjectId) {
    return await ShippingAddressModel.find({ user: userId })
      .populate({
        path: 'user',
        select: '_id'
      })
      .lean()
      .exec()
  }

  public async deleteAllByUserId(userId: mongoose.Schema.Types.ObjectId) {
    return await ShippingAddressModel.deleteMany({ user: userId })
  }
}

export default new ShippingAddressController()
