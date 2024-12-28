import config from "../../config";
import { Iuser, authUser } from "./user.interface";
import { userModel } from "./user.model";
import jwt from "jsonwebtoken";
const createUserInDb = async (payload: Iuser): Promise<Iuser> => {
  const result = await userModel.create(payload);

  return result;
};
const loginUser = async (payload: authUser) => {
  const result = await userModel.findOne({ email: payload.email });
  if (!result) {
    throw new Error("Invalid Credentials");
  }
  const token = jwt.sign(
    { email: result.email, role: result.role },
    config.tokenSecret as string,
    { expiresIn: "1d" }
  );
  const user = {
    name: result.name,
    email: result.email,
    role: result.role,
    token: token,
  };
  return {
    user,
  };
};

export const userService = {
  createUserInDb,
  loginUser,
};
