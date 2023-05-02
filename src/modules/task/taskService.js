import BaseService from '../base/baseService.js';
import taskRepository from './taskRepository.js';

class TaskService extends BaseService {
  constructor(repository) {
    super(repository, 'task');
  }

  async insertOne(task) {
    const body = {
      title: task.body.title,
      description: task.body.description,
      userId: task.user._id,
    };
    return await super.insertOne(body);
  }
  async findAll(query) {
    const task = await super.findAll(query, {
      populate: { path: 'user', select: '_id fullName email' },
    });
    return task;
  }
}

export default new TaskService(taskRepository);
