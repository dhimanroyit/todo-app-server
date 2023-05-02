import { Router } from 'express';
import todoRoute from './todoRoute.js';
import userRoute from './userRoute.js';

const router = Router();

router.use('/tasks', todoRoute);
router.use('/users', userRoute);

export default router;
