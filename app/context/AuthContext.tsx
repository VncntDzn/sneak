"use client";
import { ChildrenType } from "@/types";
import { SessionProvider } from "next-auth/react";
import { createContext } from "react";

interface AuthContextTypes {
  loading: boolean;
  number: Number;
}
const defaultState = {
  loading: true,
  number: 1,
};

export const AuthContext = createContext<AuthContextTypes>(defaultState);

const AuthProvider = ({ children }: ChildrenType) => {
  return (
    <SessionProvider>
      <AuthContext.Provider value={{ loading: true, number: 1 }}>
        {children}
      </AuthContext.Provider>
    </SessionProvider>
  );
};

export default AuthProvider;
