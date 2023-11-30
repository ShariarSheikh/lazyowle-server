import mongoose from 'mongoose'
import ReviewModel, { IReview } from '../models/Review.Model'

class ReviewController {
  public async allReviewByProductId(id: mongoose.Schema.Types.ObjectId) {
    return await ReviewModel.find({ product: id })
      .limit(10)
      .populate({
        path: 'user',
        select: 'firstName lastName imgUrl _id'
      })
      .populate({
        path: 'product',
        select: '_id'
      })
      .lean()
      .exec()
  }

  public async create(review: IReview) {
    return await ReviewModel.create(review)
  }

  public async findReviewByUserAndProductId(
    productId: mongoose.Schema.Types.ObjectId,
    id: mongoose.Schema.Types.ObjectId
  ) {
    return await ReviewModel.findOne({ 'user._id': id, productId })
  }

  public async findReviewById(id: mongoose.Schema.Types.ObjectId) {
    return await ReviewModel.findById(id)
  }

  public async getUserAllReviews(id: mongoose.Schema.Types.ObjectId) {
    return await ReviewModel.find({ user: id })
      .limit(10)
      .populate({
        path: 'product',
        select: '_id title images'
      })
      .lean()
      .exec()
  }
  // public async update({ id, product }: { id: mongoose.Schema.Types.ObjectId; product: IReview }) {
  //   return await ReviewModel.findByIdAndUpdate(id, product, { new: true })
  // }

  public async delete(deleteId: mongoose.Schema.Types.ObjectId) {
    return await ReviewModel.findByIdAndDelete(deleteId).populate({
      path: 'product',
      select: '_id'
    })
  }

  public async deleteAllReviewsByUserId(userId: mongoose.Schema.Types.ObjectId) {
    return await ReviewModel.deleteMany({ user: userId })
  }

  public async deleteAllReviewsByProductId(productId: mongoose.Schema.Types.ObjectId) {
    return await ReviewModel.deleteMany({ _id: productId })
  }
}

export default new ReviewController()
