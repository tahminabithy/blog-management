import QueryBuilder from '../../builder/QueryBuilder';
import { userModel } from '../user/user.model';
import Iblog from './blog.interface';
import { blogModel } from './blog.model';

const createBlogInDb = async (
  blog: Omit<Iblog, 'isPublished' | 'createdAt' | 'updatedAt'>,
) => {
  console.log(blog);
  const isUserExist = await userModel.findById(blog.author);
  if (isUserExist === null) {
    throw new Error('Author does not exist');
  }
  const result = (await blogModel.create(blog)).populate('author');
  if (!result) {
    throw new Error('Blog not created');
  }
  return result;
};
const updateBlogInDb = async (
  id: string,
  blog: Omit<Iblog, 'isPublished' | 'createdAt' | 'updatedAt'>,
) => {
  console.log(id);
  const result = await blogModel
    .findByIdAndUpdate(id, { $set: blog }, { new: true, runValidators: true })
    .populate('author');
  if (!result) {
    throw new Error('Blog not found');
  }
  return result;
};
const deleteBlogInDb = async (id: string) => {
  const result = await blogModel.deleteOne({ _id: id });
  if (result.deletedCount === 0) {
    throw new Error('blogs is not found to delete !');
  }
  return result;
};

const getAllBlogsFromDb = async (query: Record<string, unknown>) => {
  const blogs = new QueryBuilder(blogModel.find(), query);
  blogs.doSearch(['title', 'content']);
  blogs.doSort();
  blogs.doLimit();
  blogs.doFilter();
  const result = await blogs.modelQuery.populate('author');
  return result;
};

export const blogService = {
  createBlogInDb,
  updateBlogInDb,
  deleteBlogInDb,
  getAllBlogsFromDb,
};
