import { z } from 'zod';

const blogValidation = z.object({
  title: z.string().min(5).max(50),
  content: z.string().max(500),
  author: z.string().uuid(),
  isPublished: z.boolean().default(true),
});
export const zodValidationBlog = {
  blogValidation,
};
