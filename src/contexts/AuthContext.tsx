"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';

interface User {
  name?: string | null;
  email?: string | null;
  image?: string | null;
  googleIdToken?: string | null;
  isAdmin?: boolean;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  isAdmin: boolean;
  signIn: () => void;
  signOut: () => void;
  handleGoogleAuthToken: (token: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const { data: session, status } = useSession();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for auth token from URL parameters (when coming from superadmin dashboard)
    const urlParams = new URLSearchParams(window.location.search);
    const authToken = urlParams.get('auth_token');
    const tokenExpiry = urlParams.get('token_expiry');

    if (authToken && tokenExpiry) {
      // Store the token for automatic authentication
      sessionStorage.setItem('googleAuthToken', authToken);
      sessionStorage.setItem('tokenExpiry', tokenExpiry);
      
      // Clear URL parameters for security
      const newUrl = new URL(window.location.href);
      newUrl.searchParams.delete('auth_token');
      newUrl.searchParams.delete('token_expiry');
      window.history.replaceState({}, '', newUrl.toString());
      
      console.log('🔐 Auth: Token received from superadmin dashboard');
    }

    setIsLoading(false);
  }, []);

  // Listen for auth events from the auth helper
  useEffect(() => {
    const handleAuthToken = (event: CustomEvent) => {
      const token = event.detail.token;
      handleGoogleAuthToken(token);
    };

    window.addEventListener('googleAuthToken', handleAuthToken as EventListener);

    return () => {
      window.removeEventListener('googleAuthToken', handleAuthToken as EventListener);
    };
  }, []);

  const handleGoogleAuthToken = (token: string) => {
    console.log('🔐 Auth: Processing Google auth token');
    // Here you can implement your authentication logic
    // For now, we'll just log it
    console.log('Token received:', token);
  };

  const handleSignIn = () => {
    signIn('google', { callbackUrl: '/' });
  };

  const handleSignOut = () => {
    signOut({ callbackUrl: '/' });
  };

  const value: AuthContextType = {
    user: session?.user || null,
    isLoading: status === 'loading' || isLoading,
    isAuthenticated: !!session?.user,
    isAdmin: !!session?.user?.isAdmin,
    signIn: handleSignIn,
    signOut: handleSignOut,
    handleGoogleAuthToken,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
