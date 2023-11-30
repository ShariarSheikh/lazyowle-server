import CategoriesModel, { ICategory } from '../models/Categories.model'

class CategoryController {
  public async get() {
    return await CategoriesModel.find()
  }

  public async create(category: ICategory) {
    return await CategoriesModel.create(category)
  }

  public async getById(id: string) {
    return await CategoriesModel.findById(id)
  }

  public async getByCategoryName(name: string) {
    return await CategoriesModel.findOne({ name: name })
  }

  public async updateById({ id, category }: { id: string; category: ICategory }) {
    return await CategoriesModel.findByIdAndUpdate(id, category, { new: true })
  }
}

export default new CategoryController()
