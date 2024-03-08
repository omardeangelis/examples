import z from "zod";

export const userFormSchema = z.object({
  feedback: z.string().min(3).max(255),
});

export type UserFormValues = z.infer<typeof userFormSchema>;
