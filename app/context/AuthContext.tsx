'use client'
import { ChildrenType } from "@/types";
import { SessionProvider } from "next-auth/react";
import React from "react";

const AuthContext = ({ children }: ChildrenType) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthContext;
