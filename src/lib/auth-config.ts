import GoogleProvider from "next-auth/providers/google";
import type { AuthOptions } from "next-auth";
import { fetchAdminStatus } from "@/lib/auth";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      // Only allow users from indecimal.com domain
      if (profile?.email?.endsWith('@indecimal.com')) {
        return true;
      }
      return false;
    },
    async jwt({ token, user, account }) {
      if (account && user) {
        token.email = user.email;
        token.name = user.name;
        token.picture = user.image;
        
        // Store the Google ID token if available
        if (account.id_token) {
          token.googleIdToken = account.id_token;
          console.log('🔐 NextAuth - Google ID token captured for:', user.email);
        }
        
        // Fetch admin status from AWS Cognito using ID token
        if (user.email && account.id_token) {
          console.log('🔐 NextAuth - Checking admin status for:', user.email);
          try {
            const isAdmin = await fetchAdminStatus(user.email, account.id_token);
            token.isAdmin = isAdmin;
            console.log('✅ NextAuth - Admin status set to:', isAdmin ? 'TRUE' : 'FALSE');
          } catch (error) {
            console.error('❌ NextAuth - Error fetching admin status:', error);
            // Set admin status to false if API fails to prevent unauthorized access
            token.isAdmin = false;
            console.log('🔄 NextAuth - API failed, admin status set to FALSE for security');
          }
        } else {
          // Set admin status to false if no email or ID token
          token.isAdmin = false;
          console.log('⚠️ NextAuth - No email or ID token found, admin status set to FALSE');
        }
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.email = token.email;
        session.user.name = token.name;
        session.user.image = token.picture;
        // Ensure isAdmin is always a boolean value
        session.user.isAdmin = Boolean(token.isAdmin);
        session.user.googleIdToken = token.googleIdToken;
      }
      return session;
    },
  },
  pages: {
    signIn: '/auth/signin',
    error: '/auth/error',
  },
} satisfies AuthOptions;
