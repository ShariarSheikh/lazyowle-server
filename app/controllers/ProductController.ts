/* eslint-disable @typescript-eslint/ban-ts-comment */
import mongoose from 'mongoose'
import ProductModel, { IProject } from '../models/Product.Model'
import { ProductListQueryType } from '../routes/product/utils'

class ProductController {
  public async listWithQuery(query: ProductListQueryType) {
    const pageLength = query.pageLength ?? 1
    const limit = query.limit
    const skip = (pageLength - 1) * limit

    //@ts-expect-error
    delete query.limit
    delete query.pageLength

    // aggregation pipeline
    const pipeline = [{ $match: query }, { $skip: skip }, { $sample: { size: limit } }, { $limit: limit }]

    const products = await ProductModel.aggregate(pipeline)
    const productsLength = await ProductModel.countDocuments(query)

    return {
      products,
      productsLength
    }
  }

  public async getSponsorItem() {
    return await ProductModel.aggregate([{ $sample: { size: 1 } }]).limit(1)
  }

  public async listBySellerId(query: { sellerId: mongoose.Schema.Types.ObjectId; limit: number }) {
    const { sellerId, limit } = query

    return await ProductModel.find({ sellerId: sellerId }).limit(limit)
  }

  public async detailsByProductId(id: mongoose.Schema.Types.ObjectId) {
    return await ProductModel.findById(id)
  }

  public async create(project: IProject) {
    return await ProductModel.create(project)
  }

  public async update({ id, product }: { id: mongoose.Schema.Types.ObjectId; product: IProject }) {
    return await ProductModel.findByIdAndUpdate(id, product, { new: true })
  }

  public async delete(deleteId: string) {
    return await ProductModel.findByIdAndDelete(deleteId)
  }

  public async deleteAllProductByUserId(sellerId: mongoose.Schema.Types.ObjectId) {
    return await ProductModel.deleteMany({ sellerId: sellerId })
  }
}

export default new ProductController()
