import { z } from 'zod';

const userValidation = z.object({
  name: z.string().trim().max(100).min(3),
  email: z.string().email(),
  password: z.string().min(8),
  role: z.enum(['Admin', 'User']),
  isBlocked: z.boolean().default(false),
});

export const zodValidationUser = {
  userValidation,
};
