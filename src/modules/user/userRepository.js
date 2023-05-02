import { userModel } from '../../models/index.js';
import BaseRepository from '../base/baseRepository.js';

class UserRepository extends BaseRepository {
  constructor(model) {
    super(model);
  }
}

export default new UserRepository(userModel);
