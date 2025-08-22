// Google Auth Helper for Indecimal Websites
// Include this script in your target websites to automatically use the auth token

(function() {
  'use strict';
  
  // Flag to prevent multiple authentication attempts
  let hasAttemptedAuth = false;
  
  // Check if we're on a trusted domain
  const isTrustedDomain = window.location.hostname.includes('indecimal.com') || 
                         window.location.hostname.includes('localhost') ||
                         window.location.hostname.includes('127.0.0.1');
  
  if (!isTrustedDomain) {
    console.warn('Auth helper: Not on a trusted domain, skipping auth check');
    return;
  }
  
  // Check if sessionStorage is available
  try {
    sessionStorage.setItem('test', 'test');
    sessionStorage.removeItem('test');
  } catch (error) {
    return;
  }
  
  // Function to get the auth token from URL parameters or sessionStorage
  function getAuthToken() {
    // First check URL parameters (for cross-tab communication)
    const urlParams = new URLSearchParams(window.location.search);
    const urlToken = urlParams.get('auth_token');
    const urlExpiry = urlParams.get('token_expiry');
    
    if (urlToken && urlExpiry) {
      // Check if token has expired
      if (Date.now() > parseInt(urlExpiry)) {
        // Clear URL parameters if expired
        const newUrl = new URL(window.location);
        newUrl.searchParams.delete('auth_token');
        newUrl.searchParams.delete('token_expiry');
        window.history.replaceState({}, '', newUrl.toString());
        return null;
      }
      
      try {
        // Store in sessionStorage for future use and clear URL parameters
        sessionStorage.setItem('googleAuthToken', urlToken);
        sessionStorage.setItem('tokenExpiry', urlExpiry);
        
        // Verify the storage worked
        const storedToken = sessionStorage.getItem('googleAuthToken');
        const storedExpiry = sessionStorage.getItem('tokenExpiry');
        
        if (!storedToken || !storedExpiry) {
          return null;
        }
        
        // Clear URL parameters for security
        const newUrl = new URL(window.location);
        newUrl.searchParams.delete('auth_token');
        newUrl.searchParams.delete('token_expiry');
        window.history.replaceState({}, '', newUrl.toString());
        
        return urlToken;
        
      } catch (error) {
        return null;
      }
    }
    
    // Fallback to sessionStorage
    const token = sessionStorage.getItem('googleAuthToken');
    const expiry = sessionStorage.getItem('tokenExpiry');
    
    if (!token || !expiry) {
      return null;
    }
    
    // Check if token has expired
    if (Date.now() > parseInt(expiry)) {
      sessionStorage.removeItem('googleAuthToken');
      sessionStorage.removeItem('tokenExpiry');
      return null;
    }
    
    return token;
  }
  
  // Function to clear the auth token
  function clearAuthToken() {
    sessionStorage.removeItem('googleAuthToken');
    sessionStorage.removeItem('tokenExpiry');
    
    // Also clear URL parameters if they exist
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('auth_token') || urlParams.has('token_expiry')) {
      const newUrl = new URL(window.location);
      newUrl.searchParams.delete('auth_token');
      newUrl.searchParams.delete('token_expiry');
      window.history.replaceState({}, '', newUrl.toString());
    }
  }
  
  // Function to automatically authenticate if token is available
  function autoAuthenticate() {
    // Prevent multiple authentication attempts
    if (hasAttemptedAuth) {
      return false;
    }
    
    const token = getAuthToken();
    
    if (token) {
      hasAttemptedAuth = true;
      
      // Dispatch a custom event that your website can listen for
      const authEvent = new CustomEvent('googleAuthToken', {
        detail: { token: token }
      });
      
      window.dispatchEvent(authEvent);
      
      // Also try to call a global function if it exists
      if (typeof window.handleGoogleAuthToken === 'function') {
        window.handleGoogleAuthToken(token);
      } else {
        // Wait for the global function to be available
        let attempts = 0;
        const maxAttempts = 50; // 5 seconds max wait
        
        const waitForFunction = () => {
          attempts++;
          if (typeof window.handleGoogleAuthToken === 'function') {
            window.handleGoogleAuthToken(token);
          } else if (attempts < maxAttempts) {
            setTimeout(waitForFunction, 100);
          }
        };
        
        setTimeout(waitForFunction, 100);
      }
      
      // Clear the token after a short delay to allow the authentication to complete
      setTimeout(() => {
        clearAuthToken();
      }, 2000); // 2 second delay
      
      return true;
    }
    
    return false;
  }
  
  // Expose functions globally
  window.IndecimalAuth = {
    getAuthToken,
    clearAuthToken,
    autoAuthenticate
  };
  
  // Auto-authenticate on page load with a small delay to ensure URL is processed
  function delayedAutoAuthenticate() {
    setTimeout(() => {
      console.log('🔍 Auth helper: Running delayed auto-authenticate');
      autoAuthenticate();
    }, 100); // 100ms delay
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', delayedAutoAuthenticate);
  } else {
    delayedAutoAuthenticate();
  }
  
  // Also try on window load
  window.addEventListener('load', delayedAutoAuthenticate);
  

})();
