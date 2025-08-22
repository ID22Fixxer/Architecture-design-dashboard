import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      name?: string | null;
      email?: string | null;
      image?: string | null;
      isAdmin?: boolean;
      googleIdToken?: string | null;
    };
  }

  interface User {
    name?: string | null;
    email?: string | null;
    image?: string | null;
    isAdmin?: boolean;
    googleIdToken?: string | null;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    email?: string | null;
    name?: string | null;
    picture?: string | null;
    isAdmin?: boolean;
    googleIdToken?: string | null;
  }
}
