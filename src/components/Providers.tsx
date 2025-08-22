"use client";

import React from "react";
import { SessionProvider } from "next-auth/react";
import { AuthProvider } from "../contexts/AuthContext";
import { AuthScript } from "./AuthScript";

interface ProvidersProps {
  children: React.ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <SessionProvider>
      <AuthProvider>
        <AuthScript />
        {children}
      </AuthProvider>
    </SessionProvider>
  );
};
