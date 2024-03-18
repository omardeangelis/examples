import { Link, Outlet } from "@tanstack/react-router";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { NavigationUserInfo } from "@/components/custom/NavigationUserInfo";

export default function RootLayout() {
  const { isAuthenticated, user } = useKindeAuth();
  return (
    <div className="bg-zinc-200 min-h-screen flex">
      <div className="flex-[1] flex flex-col justify-between bg-zinc-900 text-white/80">
        <ul className="w-full flex flex-col items-center pt-5 gap-2">
          <li className="w-[90%] h-[48px] block rounded text-center">
            <Link
              to="/"
              className={`w-full h-full block leading-[48px] [&.active]:font-bold [&.active]:bg-zinc-800`}
            >
              Home
            </Link>
          </li>
          {isAuthenticated ? (
            <li className="w-[90%] h-[48px] block rounded text-center">
              <Link
                to="/dashboard"
                className={`w-full h-full block leading-[48px] [&.active]:font-bold [&.active]:bg-zinc-800`}
              >
                Dashboard
              </Link>
            </li>
          ) : null}
        </ul>
        {isAuthenticated && user ? (
          <div className="mt-auto mb-4">
            <NavigationUserInfo {...user} />
          </div>
        ) : null}
      </div>
      <main className="flex-[3] flex flex-col pt-10 items-center">
        <Outlet />
      </main>
    </div>
  );
}
