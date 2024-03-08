import { FeedbackDetails } from "@/types";
import React from "react";

export const Feedback = ({ id, feedback, vote }: FeedbackDetails) => {
  return (
    <article className="flex items-center justify-between max-w-md w-full space-x-4 bg-neutral-100 p-4 rounded-r-md">
      <p className="text-lg font-medium text-neutral-800">{feedback}</p>
      <form className="flex items-center space-x-2">
        <button className="text-neutral-800 bg-slate-200 rounded-full p-2 w-10 h-10 flex items-center justify-center hover:bg-slate-100 transition-colors duration-100 ease-in-out">
          👍🏻
        </button>
        <span className="text-neutral-800 text-sm ">{vote}</span>
      </form>
    </article>
  );
};
