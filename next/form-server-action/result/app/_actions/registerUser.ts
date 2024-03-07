"use server";
import { userFormSchema } from "../_utils/userFormSchema";

export type FormState = {
  status: "fulfilled" | "rejected" | "pending";
  message?: string | null;
  issues?: string[];
  fields?: Record<string, string>;
};

export async function registerUser(
  _prevState: FormState,
  data: FormData
): Promise<FormState> {
  const formData = Object.fromEntries(data);
  const validationResult = userFormSchema.safeParse(formData);
  if (!validationResult.success) {
    const fields = {} as Record<string, string>;
    for (const field of Object.keys(formData)) {
      fields[field] = formData[field].toString();
    }
    return {
      status: "rejected",
      message: "Form submission failed",
      issues: validationResult.error.issues.map((issue) => issue.message),
      fields,
    };
  }
  if (validationResult.data.email.includes("example.com")) {
    return {
      status: "rejected",
      message: "Form submission failed",
      issues: ["Email cannot be example.com"],
      fields: validationResult.data,
    };
  }
  return {
    status: "fulfilled",
    message: "Form submitted successfully",
    issues: [],
  };
}
