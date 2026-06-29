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
    .max(150, "Company name is too long")
    .optional()
    .default(""),
  phone: z
    .string()
    .trim()
    .regex(/^[+]?[\d\s-]{8,15}$/, "Please enter a valid phone number"),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email")
    .optional()
    .or(z.literal(""))
    .default(""),
  message: z
    .string()
    .trim()
    .max(1000, "Message is too long")
    .optional()
    .default(""),
  // Honeypot field — must remain empty. Bots fill it, humans don't see it.
  website: z.string().max(0, "Spam detected").optional().default(""),
  source: z.string().optional().default(""),
  resumeBase64: z.string().optional().default(""),
  resumeFilename: z.string().optional().default(""),
  resumeMimeType: z.string().optional().default(""),
}).refine(
  (data) => !data.resumeBase64 || data.resumeBase64.length < 5_600_000,
  { message: "Resume file is too large", path: ["resumeBase64"] }
);

export type ContactFormValues = z.infer<typeof contactFormSchema>;
