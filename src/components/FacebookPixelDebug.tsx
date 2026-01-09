"use client";

import { useEffect } from "react";

/**
 * Debug component to verify Facebook Pixel is loaded
 * This can be removed in production if not needed
 */
export function FacebookPixelDebug() {
  useEffect(() => {
    // Check if Pixel is loaded after component mounts
    const checkPixel = () => {
      if (typeof window !== 'undefined') {
        console.log('🔍 Facebook Pixel Debug Check:');
        console.log('- fbq exists:', typeof window.fbq === 'function');
        console.log('- fbq object:', window.fbq);
        console.log('- _fbq exists:', typeof window._fbq !== 'undefined');
        
        if (window.fbq && typeof window.fbq === 'function') {
          console.log('✅ Facebook Pixel is loaded and ready');
          
          // Try to get Pixel ID from the page
          try {
            // This won't work directly, but we can at least confirm fbq is callable
            console.log('✅ fbq is callable');
          } catch (error) {
            console.error('❌ Error checking fbq:', error);
          }
        } else {
          console.warn('⚠️ Facebook Pixel (fbq) is not loaded yet');
        }
      }
    };

    // Check immediately
    checkPixel();

    // Check again after a delay to see if it loads
    const timeout = setTimeout(() => {
      checkPixel();
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return null; // This component doesn't render anything
}

