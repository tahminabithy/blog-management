import { model } from 'mongoose';
import blogSchema from './blog.schema';
import Iblog from './blog.interface';

export const blogModel = model<Iblog>('Blog', blogSchema);
