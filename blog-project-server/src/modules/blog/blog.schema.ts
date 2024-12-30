import { Schema } from 'mongoose';
import Iblog from './blog.interface';

const blogSchema = new Schema<Iblog>(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
    },
    content: {
      type: String,
      required: [true, 'Content is required'],
      trim: true,
      maxlength: [500, 'Content should not exceed 500 characters'],
      // minlength: [50, "Content should have at least 50 characters"],
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
    isPublished: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true },
);
export default blogSchema;
