import { Router } from 'express';
import authProtect from '../../middlewares/authentication/auth.js';
import controller from '../../modules/user/userController.js';

const router = Router();

router.post('/signup', controller.signUpUser);
router.post('/signin', controller.signInUser);
router.use('', authProtect);
router.get('', controller.getAllUser);
router
  .route('/:id')
  .get(controller.getSigleUser)
  .put(controller.updateUser)
  .delete(controller.deleteUser);

export default router;
