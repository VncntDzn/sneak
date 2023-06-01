"use client";
import { ChildrenType } from "@/types";
import { SessionProvider } from "next-auth/react";
import { createContext } from "react";

interface AuthContextTypes {
  loading: boolean;
}
const defaultState = {
  loading: true,
};

export const AuthContext = createContext<AuthContextTypes>(defaultState);

const AuthProvider = ({ children }: ChildrenType) => {
  return (
    <SessionProvider>
      <AuthContext.Provider value={{ loading: true }}>
        {children}
      </AuthContext.Provider>
    </SessionProvider>
  );
};

export default AuthProvider;
