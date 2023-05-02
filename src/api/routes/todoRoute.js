import { Router } from 'express';
import authProtect from '../../middlewares/authentication/auth.js';
import controller from '../../modules/task/taskController.js';

const router = Router();

router.use('', authProtect);

router.get('', controller.getAllTask);
router.post('', controller.createTask);
router
  .route('/:id')
  .get(controller.getSigleTask)
  .put(controller.updateTask)
  .delete(controller.deleteTask);

export default router;
