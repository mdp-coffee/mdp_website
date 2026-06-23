import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name")
    .max(100, "Name is too long"),
  company: z
    .string()
    .trim()
    .min(2, "Please enter your company name")
    .max(150, "Company name is too long"),
  phone: z
    .string()
    .trim()
    .regex(/^[+]?[\d\s-]{8,15}$/, "Please enter a valid phone number"),
  message: z
    .string()
    .trim()
    .max(1000, "Message is too long")
    .optional()
    .default(""),
  // Honeypot field — must remain empty. Bots fill it, humans don't see it.
  website: z.string().max(0, "Spam detected").optional().default(""),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
