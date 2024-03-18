import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/" as unknown as never)({
  component: Index,
});

function Index() {
  return (
    <div className="p-2 text-center flex flex-col items-center">
      <h3 className="text-4xl font-medium">Autentication in React</h3>
    </div>
  );
}
