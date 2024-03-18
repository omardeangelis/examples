export type KindeUser = {
    given_name: string | null;
    id: string | null;
    family_name: string | null;
    email: string | null;
    picture: string | null;
}

export interface MyRouterContext {
  // The ReturnType of your useAuth hook or the value of your AuthContext
  kindeAuth: {
    isLoading: boolean;
    isAuthenticated: boolean;
  }
}