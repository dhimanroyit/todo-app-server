import CustomError from '../../../utils/error/customError.js';

class BaseService {
  #repository;
  constructor(repository, modelName) {
    this.#repository = repository;
    this.modelName = modelName;
  }
  async insertOne(item) {
    const data = this.#repository.insertOne(item);
    return data;
  }

  async findAll(query, option) {
    const data = await this.#repository.findAll(query, option);
    return data;
  }

  async findById(id, option) {
    const data = await this.#repository.findById(id, option);
    if (!data) throw new CustomError(`${this.modelName} not found by id`, 404);
    return data;
  }

  async findOne(query, option) {
    const data = await this.#repository.findOne(query, option);
    if (!data) throw new CustomError(`${this.modelName} not found`, 404);
    return data;
  }

  async updateById(id, item) {
    const data = await this.#repository.updateById(id, item);
    if (!data) throw new CustomError(`${this.modelName} not found by id`, 404);
    return data;
  }

  async updateOne(query, item) {
    const data = await this.#repository.updateOne(query, item);
    if (!data) throw new CustomError(`${this.modelName} not found`, 404);
  }

  async deleteById(id) {
    const data = await this.#repository.deleteById(id);
    if (!data) throw new CustomError(`${this.modelName} not found by id`, 404);
    return data;
  }

  async deleteOne(id) {
    const data = await this.#repository.deleteOne(id);
    if (!data) throw new CustomError(`${this.modelName} not found`, 404);
    return data;
  }
}

export default BaseService;
