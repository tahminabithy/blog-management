import { Router } from 'express';
import { userController } from './user.controller';
import verifyToken from '../../middleware/verifyToken';

export const userRouter = Router();

userRouter.post('/auth/register', userController.createUser);
userRouter.post('/auth/login', userController.login);
userRouter.put(
  '/admin/users/:userId/block',
  verifyToken(),
  userController.blockUser,
);
