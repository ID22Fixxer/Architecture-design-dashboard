# Google Auth Setup for Architect Dashboard

This guide explains how to set up Google Authentication for the Architect Dashboard.

## Prerequisites

1. Google Cloud Console access
2. Next.js project with NextAuth.js installed
3. AWS API Gateway access (for admin status checking)

## Setup Steps

### 1. Google Cloud Console Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Google+ API
4. Go to "Credentials" → "Create Credentials" → "OAuth 2.0 Client IDs"
5. Configure the OAuth consent screen:
   - User Type: External
   - App name: Architect Dashboard
   - User support email: your-email@indecimal.com
   - Developer contact information: your-email@indecimal.com
6. Create OAuth 2.0 Client ID:
   - Application type: Web application
   - Name: Architect Dashboard
   - Authorized JavaScript origins: `http://localhost:3000`
   - Authorized redirect URIs: `http://localhost:3000/api/auth/callback/google`

### 2. Environment Variables

Create a `.env.local` file in the root directory with:

```env
# Google OAuth Configuration
GOOGLE_CLIENT_ID=your_google_client_id_here
GOOGLE_CLIENT_SECRET=your_google_client_secret_here

# NextAuth Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret_here

# AWS API Configuration (for admin status checking)
NEXT_PUBLIC_BASE_URL=https://your-aws-api-gateway-url.amazonaws.com
NEXT_PUBLIC_API_KEY=your_aws_api_key_here
```

### 3. Generate NextAuth Secret

Run this command to generate a secure secret:

```bash
openssl rand -base64 32
```

### 4. Domain Restrictions

The authentication is configured to only allow users with `@indecimal.com` email addresses. This is set in `src/lib/auth-config.ts`.

## How It Works

### 1. Manual Sign In
- Users can sign in directly using the "Sign In" button
- Only @indecimal.com users are allowed
- Google ID tokens are captured and stored in the session
- Admin status is checked via AWS API

### 2. Automatic Sign In from Superadmin Dashboard
- When users click "Visit" from the superadmin dashboard
- The superadmin dashboard passes the Google ID token via URL parameters
- The architect dashboard automatically authenticates the user
- No manual sign-in required

### 3. Admin Status Checking
- When a user signs in, their admin status is checked via AWS API
- Uses the Google ID token for secure authentication
- Admin status is displayed in the header with a crown icon
- Falls back to non-admin if API fails (security-first approach)

### 4. Token Flow
1. Superadmin dashboard retrieves Google ID token
2. Token is passed to architect dashboard via URL parameters
3. Auth helper script processes the token
4. User is automatically authenticated
5. Admin status is checked and displayed
6. Token is cleared for security

## Security Features

- ✅ Domain validation (only @indecimal.com emails)
- ✅ Token expiry (5 minutes)
- ✅ Automatic token cleanup
- ✅ Secure storage in sessionStorage
- ✅ URL parameter cleanup
- ✅ Trusted domain validation
- ✅ Admin status verification via AWS API
- ✅ Security-first fallback (non-admin if API fails)

## API Endpoints

### `/api/auth/admin-status`
- **Method**: POST
- **Purpose**: Check user admin status via AWS API
- **Request Body**: `{ email: string }` or `{ idToken: string }`
- **Response**: `{ isAdmin: boolean }`

### `/api/auth/[...nextauth]`
- **Purpose**: NextAuth.js API routes
- **Handles**: Sign in, sign out, session management

## Testing

1. Start the development server: `npm run dev`
2. Visit `http://localhost:3000`
3. You should see the sign-in page
4. Sign in with your @indecimal.com Google account
5. You should be redirected to the dashboard
6. Check if admin status is displayed in the header

## Integration with Superadmin Dashboard

To test the automatic authentication:

1. Sign in to the superadmin dashboard
2. Click "Visit" on the Architect Dashboard card
3. You should be automatically signed in to the architect dashboard
4. Admin status should be displayed if you have admin privileges

## Troubleshooting

### Common Issues:

1. **"Not authenticated" error**: Check if you're using an @indecimal.com email
2. **"Invalid client" error**: Verify your Google OAuth credentials
3. **"Redirect URI mismatch"**: Check your authorized redirect URIs in Google Cloud Console
4. **Token not working**: Ensure the superadmin dashboard is properly configured
5. **Admin status not showing**: Check AWS API configuration and credentials

### Debug Steps:

1. Check browser console for auth messages
2. Verify environment variables are set correctly
3. Check Google Cloud Console for OAuth configuration
4. Ensure you're using the correct domain (@indecimal.com)
5. Check AWS API Gateway logs for admin status requests

## Production Deployment

For production:

1. Update `NEXTAUTH_URL` to your production domain
2. Add production domain to Google OAuth authorized origins
3. Update `NEXTAUTH_SECRET` with a production secret
4. Ensure HTTPS is enabled
5. Update allowed domains in auth helper script
6. Configure production AWS API Gateway endpoints

## Files Modified

- `src/lib/auth-config.ts` - NextAuth configuration with admin status
- `src/lib/auth.ts` - Admin status fetching function
- `src/app/api/auth/[...nextauth]/route.ts` - NextAuth API route
- `src/app/api/auth/admin-status/route.ts` - Admin status API endpoint
- `src/contexts/AuthContext.tsx` - Authentication context with admin status
- `src/components/layout/Header.tsx` - Updated with admin status display
- `src/components/ProtectedRoute.tsx` - Route protection
- `src/components/AuthScript.tsx` - Auth helper script loader
- `src/components/Providers.tsx` - Client-side providers wrapper
- `src/app/layout.tsx` - Added auth providers
- `src/types/next-auth.d.ts` - TypeScript type definitions
- `public/auth-helper.js` - Auth helper script
