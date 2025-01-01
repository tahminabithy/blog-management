import config from '../../config';
import { authUser, Iuser } from './user.interface';
import { userModel } from './user.model';
import jwt from 'jsonwebtoken';
const createUserInDb = async (payload: Iuser): Promise<Iuser> => {
  const result = await userModel.create(payload);
  if (!result) {
    throw new Error('User not created');
  }
  return result;
};
const loginUser = async (payload: authUser) => {
  const result = await userModel.findOne({ email: payload.email });
  console.log('user', result);
  if (!result) {
    throw new Error('Invalid Credentials');
  }
  const token = jwt.sign(
    { email: result.email, role: result.role, userId: result._id },
    config.tokenSecret as string,
    { expiresIn: '1d' },
  );
  const user = {
    userId: result._id,
    token: token,
  };
  return {
    user,
  };
};
const blockUserFromDb = async (id: string) => {
  const result = await userModel.findByIdAndUpdate(
    id,
    { isBlocked: true },
    { new: true, runValidators: true },
  );
  return result;
};

export const userService = {
  createUserInDb,
  loginUser,
  blockUserFromDb,
};
