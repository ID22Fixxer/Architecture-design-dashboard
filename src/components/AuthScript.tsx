"use client";

import { useEffect } from 'react';

export const AuthScript = () => {
  useEffect(() => {
    // Load the auth helper script
    const script = document.createElement('script');
    script.src = '/auth-helper.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return null;
};
