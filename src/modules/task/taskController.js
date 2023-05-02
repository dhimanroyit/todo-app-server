import catchErrors from '../../middlewares/errorHandler/catchErrors.js';
import taskService from './taskService.js';
import responseHandler from '../../../utils/responsHandler.js';

class TaskController {
  createTask = catchErrors(async (req, res, next) => {
    const reqBody = {
      body: req.body,
      user: req.user,
    };
    const task = await taskService.insertOne(reqBody);
    const resDoc = responseHandler(201, 'task create successfully', task);
    res.status(resDoc.statusCode).json(resDoc);
  });

  getAllTask = catchErrors(async (req, res, next) => {
    const userId = req.user._id;
    const tasks = await taskService.findAll({ userId: userId });
    const resDoc = responseHandler(200, 'task get successfully', tasks);
    res.status(resDoc.statusCode).json(resDoc);
  });

  getSigleTask = catchErrors(async (req, res, next) => {
    const { id } = req.params;
    const user = await taskService.findById(id);
    const resDoc = responseHandler(200, 'task get successfully', user);
    res.status(resDoc.statusCode).json(resDoc);
  });

  updateTask = catchErrors(async (req, res, next) => {
    const {
      params: { id },
      body,
    } = req;
    const user = await taskService.updateById(id, body);
    const resDoc = responseHandler(200, 'task update successfully', user);
    res.status(resDoc.statusCode).json(resDoc);
  });

  deleteTask = catchErrors(async (req, res, next) => {
    const { id } = req.params;
    await taskService.deleteById(id);
    const resDoc = responseHandler(200, 'task delete successfully');
    res.status(resDoc.statusCode).json(resDoc);
  });
}

const taskController = new TaskController();
export default taskController;
