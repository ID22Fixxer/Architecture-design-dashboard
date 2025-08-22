import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(request: NextRequest) {
  try {
    const { email, idToken } = await request.json();

    if (!email && !idToken) {
      return NextResponse.json({ error: 'Email or idToken is required' }, { status: 400 });
    }

    console.log('🔍 Checking admin status for:', email || 'ID token provided');
    console.log('🌐 AWS API URL:', `${process.env.NEXT_PUBLIC_BASE_URL}/authGoogleLogin`);
    console.log('🔑 API Key present:', !!process.env.NEXT_PUBLIC_API_KEY);

    // Use the ID token if available, otherwise fall back to email
    const requestBody = idToken ? { idToken } : { email };
    console.log('📤 Request body being sent:', requestBody);
    
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/authGoogleLogin`,
      requestBody,
      {
        headers: {
          "x-api-key": process.env.NEXT_PUBLIC_API_KEY || "",
          "Content-Type": "application/json",
        },
      }
    );

    const isAdmin = response.data.isAdmin || response.data.admin || false;
    
    console.log('📊 AWS API Response:', response.data);
    console.log('👑 Admin Status:', isAdmin ? 'TRUE (Admin)' : 'FALSE (Not Admin)');

    return NextResponse.json({ isAdmin });
  } catch (error) {
    console.error('❌ Error fetching admin status:', error);
    return NextResponse.json({ error: 'Failed to fetch admin status' }, { status: 500 });
  }
}
