import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard")({
  beforeLoad({ context }) {
    console.log("context", context);
    if (!context.kindeAuth.isAuthenticated) {
      throw redirect({
        to: "/",
      });
    }
  },
  component: Dashboard,
});

function Dashboard() {
  return (
    <div className="p-2">
      <h3>Welcome Dashboard!</h3>
    </div>
  );
}
