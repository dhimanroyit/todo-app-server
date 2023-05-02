import catchErrors from '../../middlewares/errorHandler/catchErrors.js';
import userService from './userService.js';
import responseHandler from '../../../utils/responsHandler.js';

class UserController {
  signUpUser = catchErrors(async (req, res, next) => {
    const data = await userService.signUpUser(req.body);
    const resDoc = responseHandler(201, 'user signup successfully', data);
    res.status(resDoc.statusCode).json(resDoc);
  });

  signInUser = catchErrors(async (req, res, next) => {
    const data = await userService.signInUser(req.body);
    const resDoc = responseHandler(200, 'user signin successfully', data);
    res.status(resDoc.statusCode).json(resDoc);
  });

  getAllUser = catchErrors(async (req, res, next) => {
    const users = await userService.findAll();
    const resDoc = responseHandler(200, 'user get successfully', users);
    res.status(resDoc.statusCode).json(resDoc);
  });

  getSigleUser = catchErrors(async (req, res, next) => {
    const { id } = req.params;
    const user = await userService.findById(id);
    const resDoc = responseHandler(200, 'user get successfully', user);
    res.status(resDoc.statusCode).json(resDoc);
  });

  updateUser = catchErrors(async (req, res, next) => {
    const {
      params: { id },
      body,
    } = req;
    const user = await userService.updateById(id, body);
    const resDoc = responseHandler(200, 'user update successfully', user);
    res.status(resDoc.statusCode).json(resDoc);
  });

  deleteUser = catchErrors(async (req, res, next) => {
    const { id } = req.params;
    await userService.deleteById(id);
    const resDoc = responseHandler(200, 'user delete successfully');
    res.status(resDoc.statusCode).json(resDoc);
  });
}

const userController = new UserController();
export default userController;
