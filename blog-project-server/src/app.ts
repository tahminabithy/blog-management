import express from 'express';
import cors from 'cors';
import { userRouter } from './modules/user/user.route';
import globalErrorHandler from './middleware/globalErrorHandler';
import { blogRouter } from './modules/blog/blog.routes';
const app = express();
app.use(express.json());
app.use(cors());

// ------------routes------------
app.use('/api', userRouter);
app.use('/api', blogRouter);

// app.use("*", (req, res) => {
//   res.status(404).json({ message: "Route not found" });
// });

app.use(globalErrorHandler);
app.get('/', (req, res) => {
  res.send('Blog management system is running');
});
export default app;
