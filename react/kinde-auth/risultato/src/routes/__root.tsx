import RootLayout from "@/layout/RootLayout";
import { createRootRouteWithContext } from "@tanstack/react-router";

import { MyRouterContext } from "@/lib/types";

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: RootLayout,
});
