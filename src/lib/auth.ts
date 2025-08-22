import axios from 'axios';

export async function fetchAdminStatus(email: string, idToken?: string): Promise<boolean> {
  try {
    console.log('📡 Auth lib - Making request to admin-status API for:', email);
    
    // Use full URL for server-side requests
    const baseUrl = process.env.NEXTAUTH_URL || 'http://localhost:3000';
    const requestBody = idToken ? { idToken } : { email };
    console.log('📡 Auth lib - Request body:', requestBody);
    
    const response = await axios.post(`${baseUrl}/api/auth/admin-status`, requestBody);
    
    console.log('📡 Auth lib - API response received:', response.data);
    return response.data.isAdmin;
  } catch (error) {
    console.error('❌ Auth lib - Error fetching admin status:', error);
    return false;
  }
}
