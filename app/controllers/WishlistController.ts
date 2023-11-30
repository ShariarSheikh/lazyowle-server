import mongoose from 'mongoose'
import WishlistModel, { IWishlist } from '../models/Wishlist.model'

class WishlistController {
  public async allWishlistByProductId(id: mongoose.Schema.Types.ObjectId) {
    return await WishlistModel.find({ product: id })
      .populate({
        path: 'user',
        select: '_id'
      })
      .populate({
        path: 'product',
        select: '_id'
      })
      .lean()
      .exec()
  }

  public async create(review: IWishlist) {
    return await WishlistModel.create(review)
  }

  public async findWishlistByUserAndProductId(
    productId: mongoose.Schema.Types.ObjectId,
    id: mongoose.Schema.Types.ObjectId
  ) {
    return await WishlistModel.findOne({ user: id, product: productId })
  }

  public async findWishlistById(id: mongoose.Schema.Types.ObjectId) {
    return await WishlistModel.findById(id)
  }

  public async getUserAllWishlist(id: mongoose.Schema.Types.ObjectId) {
    return await WishlistModel.find({ user: id })
      .limit(10)
      .populate({
        path: 'product',
        select: '_id title images price'
      })
      .lean()
      .exec()
  }

  public async delete(wishlistId: mongoose.Schema.Types.ObjectId) {
    return await WishlistModel.findByIdAndDelete(wishlistId)
  }

  public async deleteAllWishlistByUserId(userId: mongoose.Schema.Types.ObjectId) {
    return await WishlistModel.deleteMany({ user: userId })
  }
}

export default new WishlistController()
