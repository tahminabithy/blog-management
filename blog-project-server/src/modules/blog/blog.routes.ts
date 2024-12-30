import { Router } from 'express';
import { blogController } from './blog.controller';
import verifyToken from '../../middleware/verifyToken';

export const blogRouter = Router();

blogRouter.post('/blogs', verifyToken(), blogController.createBlog);
blogRouter.put('/blogs/:id', verifyToken(), blogController.updateBlog);
blogRouter.delete('/blogs/:id', verifyToken(), blogController.deleteBlog);
blogRouter.get('/blogs', blogController.getAllBlogs);
