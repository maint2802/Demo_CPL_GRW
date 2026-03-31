import { createContext } from "react";
import type { AuthContextType, AuthUser } from "../types/types";
import useFetch from "../customHooks/useFetch";
import { getAuthUser } from "../services/auth";

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);

type AuthProviderProps = {
  children: React.ReactNode;
};

const AuthProvider = ({ children }: AuthProviderProps) => {
  const { data: authUser, setData: setAuthUser } =
    useFetch<AuthUser>(getAuthUser);

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

// contextAPI: auth (currentUser, token), theme color, dark/light mode, language,...
// lib: zustand
