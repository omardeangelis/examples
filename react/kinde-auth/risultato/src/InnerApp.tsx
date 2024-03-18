import { RouterProvider, createRouter } from "@tanstack/react-router";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

// Import the generated route tree
import { routeTree } from "./routeTree.gen";

// Create a new router instance
const router = createRouter({ routeTree, context: { kindeAuth: undefined! } });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export function InnerApp() {
  const authContext = useKindeAuth();
  return (
    <RouterProvider
      router={router}
      context={{
        kindeAuth: {
          isAuthenticated: authContext.isAuthenticated,
          isLoading: authContext.isLoading,
        },
      }}
    />
  );
}
