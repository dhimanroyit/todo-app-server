import BaseRpository from '../base/baseRepository.js';
import { taskModel } from '../../models/index.js';

class TaskRepository extends BaseRpository {
  constructor(model) {
    super(model);
  }
}

export default new TaskRepository(taskModel);
