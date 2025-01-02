import { model, Schema } from 'mongoose';
import { userSchema } from './user.schema';
import bcrypt from 'bcrypt';
import config from '../../config';
import { Iuser } from './user.interface';

userSchema.pre('save', async function (next) {
  const user = this;
  console.log(config.saltRounds);
  user.password = await bcrypt.hash(
    user.password,
    Number(config.saltRounds as string),
  );
  next();
});
userSchema.post('save', async function (doc, next) {
  doc.password = '';
  next();
});
export const userModel = model<Iuser>('user', userSchema);
