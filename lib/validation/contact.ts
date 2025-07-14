import { z } from 'zod';

export const contactSchema = z.object({
  fullName: z.string().min(2, "At least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
