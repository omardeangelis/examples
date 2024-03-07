"use server";
import { userFormSchema } from "../_utils/userFormSchema";

export async function registerUser(data: FormData) {
  const formData = Object.fromEntries(data);
  const validationResult = userFormSchema.safeParse(formData);
  if (!validationResult.success) {
    return {
      status: "rejected",
      message: "Form submission failed",
    };
  }
  if (validationResult.data.email.includes("example.com")) {
    return {
      status: "rejected",
      message: "Form submission failed",
    };
  }
  return {
    status: "fulfilled",
    message: "Form submitted successfully",
  };
}
