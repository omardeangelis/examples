"use server";

import { FeedbackDetails } from "@/types";

export async function createFeedback(
  values: FormData
): Promise<FeedbackDetails> {
  const message = values.get("feedback") as string;
  const response = {
    id: Math.random().toString(36).substring(2, 9),
    feedback: message,
    vote: 0,
  };
  await new Promise((res) => setTimeout(res, 1000));

  return response;
}
