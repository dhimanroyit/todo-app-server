import bcrypt from 'bcrypt';
import jwt from '../../../utils/jwt.js';
import BaseService from '../base/baseService.js';
import userRepository from './userRepository.js';
import CustomError from '../../../utils/error/customError.js';

class UserService extends BaseService {
  #repository;
  constructor(repository) {
    super(repository, 'user');
    this.#repository = repository;
  }

  async signUpUser(item) {
    const { password, email } = item;
    const query = {
      email: email,
    };
    const isEmail = await this.#repository.findOne(query);

    if (isEmail) {
      throw new CustomError('email are already use', 409);
    }

    const hashPassword = await bcrypt.hash(password, 10);
    const userObj = { ...item, password: hashPassword };

    const user = await super.insertOne(userObj);
    const userData = { fullName: user.fullName, email: user.email };
    return userData;
  }
  async signInUser(item) {
    const { password } = item;
    const query = {
      email: item.email,
    };
    const user = await super.findOne(query);

    const isPassMatch = await bcrypt.compare(password, user.password);
    if (!isPassMatch) throw new CustomError('password incurrect', 401);
    const token = jwt.tokenGenerate(user);
    const resUser = { ...user };
    delete resUser['password'];
    const response = {
      token,
      user: resUser,
    };
    return response;
  }

  async findAll(query) {
    return await super.findAll(query, { select: '-password' });
  }

  async findById(id) {
    return await super.findById(id, { select: '-password' });
  }

  async updateById(id, item) {
    const user = { ...item };

    if (item?.password) {
      user.password = await bcrypt.hash(item.password, 10);
    }

    const data = await super.updateById(id, user);
    delete data.password;
    return data;
  }
}

const userServiceInstance = new UserService(userRepository);

export default userServiceInstance;
