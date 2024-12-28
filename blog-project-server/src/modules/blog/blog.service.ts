import { sendResponse } from "../../utils/sendResponse";
import { userModel } from "../user/user.model";
import Iblog from "./blog.interface";
import { blogModel } from "./blog.model";

const createBlogInDb = async (blog: Iblog) => {
  const isUserExist = await userModel.findById(blog.author);
  if (isUserExist === null) {
    throw new Error("Author does not exist");
  }
  const result = await blogModel.create(blog);
  if (!result) {
    throw new Error("Blog not created");
  }
  return result;
};

export const blogService = {
  createBlogInDb,
};
