import z from "zod";

export const userFormSchema = z
  .object({
    name: z.string().min(2, {
        message: "Name must be at least 2 characters long",
    }),
    email: z.string().email().trim(),
    username: z.string().min(2, {
        message: "Username must be at least 2 characters long",
    })
  })
 

export type UserFormValues = z.infer<typeof userFormSchema>;
