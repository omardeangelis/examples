import { createLazyFileRoute } from "@tanstack/react-router";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { Button } from "@/components/ui/button";

export const Route = createLazyFileRoute("/" as unknown as never)({
  component: Index,
});

function Index() {
  const { login, register, logout, user } = useKindeAuth();
  console.log(user);
  return (
    <div className="p-2 text-center flex flex-col items-center">
      <h3 className="text-4xl font-medium">Autentication in React</h3>
      <div className="flex gap-2 mt-6">
        <Button onClick={() => login()}>Login</Button>
        <Button onClick={() => register()}>Register</Button>
        <Button onClick={() => logout()}>Logout</Button>
      </div>
    </div>
  );
}
