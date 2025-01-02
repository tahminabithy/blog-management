import { NextFunction, Request, Response } from 'express';
import { blogService } from './blog.service';
import { sendResponse } from '../../utils/sendResponse';
import { catchAsync } from '../../utils/catchAsync';
import { get } from 'http';

const createBlog = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    console.log(req.user);
    const data = {
      title: req.body.title,
      content: req.body.content,
      author: req.user?.userId,
    };

    const result = await blogService.createBlogInDb(data);
    const responseData = {
      status: true,
      message: 'Blog created successfully',
      statusCode: 201,
      data: result,
    };
    sendResponse(res, responseData);
  },
);
const updateBlog = catchAsync(async (req, res, next) => {
  const id = req.params.id;
  if (req.user.role === 'Admin') {
    throw new Error('You are not authorized to update this blog');
  }
  const result = await blogService.updateBlogInDb(id, req.body);
  sendResponse(res, {
    status: true,
    message: 'Blog updated successfully',
    data: result,
  });
});
const deleteBlog = catchAsync(async (req, res, next) => {
  const result = await blogService.deleteBlogInDb(req.params.id);
  sendResponse(res, {
    status: true,
    message: 'Blog deleted successfully',
    statusCode: 200,
    data: result,
  });
});
const getAllBlogs = catchAsync(async (req, res, next) => {
  const result = await blogService.getAllBlogsFromDb(req.query);
  sendResponse(res, {
    status: true,
    message: 'Blogs fetched successfully',
    statusCode: 200,
    data: result,
  });
});

export const blogController = {
  createBlog,
  updateBlog,
  deleteBlog,
  getAllBlogs,
};
