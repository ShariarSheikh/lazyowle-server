import ApiKeyModel from '../models/ApiKey.Model'

class ApiKeyController {
  public async find() {
    return await ApiKeyModel.find()
  }

  public async findByKey(key: string) {
    return await ApiKeyModel.findOne({ key })
  }

  public async create(key: string) {
    return await ApiKeyModel.create({ key })
  }
}

export default new ApiKeyController()
