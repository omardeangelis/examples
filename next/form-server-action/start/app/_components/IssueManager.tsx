"use client";

import React from "react";
import { FormState } from "../_actions/registerUser";
import { Button } from "@/components/ui/button";

type IssueManagerProps = Pick<FormState, "issues">;

export const IssueManager = ({ issues }: IssueManagerProps) => {
  return (
    <ul className="fixed bottom-4 right-4 space-y-2">
      {issues!.map((issue) => (
        <TimedIssue key={issue.trim()} issue={issue} />
      ))}
    </ul>
  );
};

const TimedIssue = ({ issue }: { issue: string }) => {
  const [show, setShow] = React.useState(true);
  const intervalRef = React.useRef<NodeJS.Timeout | null>(null);
  React.useEffect(() => {
    intervalRef.current = setTimeout(() => {
      setShow(false);
    }, 5000);
    return () => clearTimeout(intervalRef.current ?? undefined);
  }, []);

  const handleDismiss = React.useCallback(() => {
    setShow(false);
    clearTimeout(intervalRef.current ?? undefined);
  }, []);

  return show ? (
    <li className="p-4 bg-red-400 rounded-md shadow-md flex gap-2 items-center">
      <span className="text-white">{issue}</span>
      <Button
        variant="ghost"
        className="text-white hover:text-black"
        onClick={handleDismiss}
      >
        <span className="text-inherit">Dismiss</span>
      </Button>
    </li>
  ) : null;
};
