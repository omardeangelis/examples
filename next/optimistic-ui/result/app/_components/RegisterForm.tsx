"use client";
import React, { useOptimistic, useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { createFeedback } from "../_actions/createFeedback";
import { FeedbackDetails } from "@/types";
import { Feedback } from "./Feedback";

const defaultState = [] as FeedbackDetails[];

export const UserForm = () => {
  const [feedbacks, setFeedbacks] = useState<FeedbackDetails[]>(defaultState);
  const [optimisticFeedbacks, setOptimisticFeedbacks] = useOptimistic(
    feedbacks,
    (feedback, newFeedback: FeedbackDetails) => {
      return [...feedback, newFeedback];
    }
  );

  const formRef = useRef<null | HTMLFormElement>(null);

  async function updateFeedbacks(feedback: FormData) {
    const newFeedback = await createFeedback(feedback);
    setFeedbacks([...feedbacks, newFeedback]);
  }

  async function onSubmit(formData: FormData) {
    setOptimisticFeedbacks({
      id: Math.random().toString(36).substring(2, 9),
      feedback: formData.get("feedback") as string,
      vote: 0,
      loading: true,
    });
    formRef.current?.reset();
    await updateFeedbacks(formData);
  }

  return (
    <div className="flex flex-col items-center space-y-8 w-full">
      <form
        ref={formRef}
        action={onSubmit}
        className="space-y-8 w-full max-w-[468px]"
      >
        <Input
          name="feedback"
          className="w-full"
          placeholder="Hai qualche suggerimento ?"
        />
        <Button type="submit">Submit</Button>
      </form>
      {optimisticFeedbacks.map((feedback) => {
        return (
          <>
            <Feedback key={feedback.id} {...feedback} />
            {feedback?.loading && <p>Eeeee invece sto caricando...</p>}
          </>
        );
      })}
    </div>
  );
};
