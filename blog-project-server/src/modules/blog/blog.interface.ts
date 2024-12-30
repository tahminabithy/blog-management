import { ObjectId } from 'mongoose';

interface Iblog {
  title: string;
  content: string;
  author: ObjectId;
  isPublished: boolean;
  createdAt: Date;
  updatedAt: Date;
}
export default Iblog;
