// Facebook Pixel TypeScript declarations and utility functions

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
    _fbq?: any;
  }
}

/**
 * Helper function to ensure fbq is loaded before tracking
 * Silently queues events if fbq isn't ready yet
 */
function ensureFbqLoaded(callback: () => void, maxAttempts = 20, attempt = 0) {
  if (typeof window === 'undefined') {
    return; // Silent fail on server
  }

  // Initialize fbq queue if it doesn't exist
  if (!window._fbq) {
    window._fbq = [];
  }

  // Check if fbq exists and is a function
  if (window.fbq && typeof window.fbq === 'function') {
    try {
      callback();
    } catch (error) {
      console.error('Facebook Pixel: Error in callback', error);
    }
  } else if (attempt < maxAttempts) {
    // Silently wait - only log after several attempts
    if (attempt === 0) {
      // Queue the callback for when fbq loads
      if (window._fbq && Array.isArray(window._fbq)) {
        window._fbq.push(callback);
      }
    }
    // Wait longer on first few attempts, then shorter intervals
    const delay = attempt < 5 ? 300 : 150;
    setTimeout(() => {
      ensureFbqLoaded(callback, maxAttempts, attempt + 1);
    }, delay);
  } else {
    // Only log error in development or if we've exhausted retries
    if (process.env.NODE_ENV === 'development') {
      console.warn('Facebook Pixel: fbq not loaded after retries (this is normal with lazyOnload)');
    }
  }
}

/**
 * Track a Facebook Pixel standard event
 * @param eventName - Standard event name (e.g., 'Lead', 'ViewContent', 'CompleteRegistration')
 * @param params - Optional parameters object
 */
export function trackFacebookEvent(
  eventName: string,
  params?: Record<string, any>
) {
  ensureFbqLoaded(() => {
    try {
      if (window.fbq) {
        // Call fbq with proper arguments
        if (params && Object.keys(params).length > 0) {
          window.fbq('track', eventName, params);
        } else {
          window.fbq('track', eventName);
        }
        console.log(`✅ Facebook Pixel: Tracked ${eventName}`, params || {});
      }
    } catch (error) {
      console.error(`❌ Facebook Pixel: Error tracking ${eventName}`, error);
    }
  });
}

/**
 * Track a Facebook Pixel custom event
 * @param eventName - Custom event name (max 50 characters)
 * @param params - Optional parameters object
 */
export function trackFacebookCustomEvent(
  eventName: string,
  params?: Record<string, any>
) {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('trackCustom', eventName, params);
  }
}

/**
 * Track a Lead conversion event (form submission)
 * 
 * NOTE: After implementing, you must activate Lead as a conversion event in Facebook Events Manager:
 * 1. Go to https://business.facebook.com/events_manager2
 * 2. Select your Pixel
 * 3. Go to "Aggregated Event Measurement" or "Events" → "Conversions"
 * 4. Activate "Lead" as a conversion event
 * 5. Once active, you can use it in ad campaigns as an optimization event
 * 
 * @param sessionType - Type of session selected (e.g., 'family', 'maternity', 'mini')
 * @param location - Location selected (e.g., 'Flower Mound', 'Frisco')
 */
export function trackLead(sessionType?: string, location?: string) {
  console.log('🎯 trackLead called with:', { sessionType, location });
  console.log('🔍 Checking window.fbq:', typeof window !== 'undefined' ? typeof (window as any).fbq : 'window undefined');
  
  // Format sessionType for better readability
  const formattedSessionType = sessionType 
    ? sessionType.charAt(0).toUpperCase() + sessionType.slice(1).replace(/-/g, ' ')
    : 'General';
  
  // Build parameters object - using minimal standard parameters for Lead event
  const params: Record<string, any> = {
    content_name: 'Session Inquiry Form',
    content_category: formattedSessionType,
  };
  
  // Add location as additional data (Facebook allows custom parameters)
  if (location) {
    params.location = location;
  }
  
  console.log('📤 Attempting to track Lead event with params:', params);
  
  // Try direct call first if fbq is immediately available
  if (typeof window !== 'undefined' && (window as any).fbq && typeof (window as any).fbq === 'function') {
    try {
      console.log('✅ fbq is available, calling directly');
      (window as any).fbq('track', 'Lead', params);
      console.log('✅ Lead event tracked successfully');
      return;
    } catch (error) {
      console.error('❌ Error in direct fbq call:', error);
    }
  }
  
  // Fallback to the helper function
  console.log('⏳ fbq not immediately available, using helper function');
  trackFacebookEvent('Lead', params);
}

/**
 * Test function to verify Facebook Pixel is loaded
 * Call this in browser console: window.testFacebookPixel()
 */
if (typeof window !== 'undefined') {
  (window as any).testFacebookPixel = () => {
    console.log('Testing Facebook Pixel...');
    console.log('fbq available:', typeof window.fbq === 'function');
    console.log('fbq object:', window.fbq);
    if (window.fbq) {
      try {
        window.fbq('track', 'PageView');
        console.log('✅ Facebook Pixel test successful - PageView tracked');
      } catch (error) {
        console.error('❌ Facebook Pixel test failed:', error);
      }
    }
  };
}

/**
 * Track a ViewContent event (portfolio page view)
 * @param contentType - Type of content (e.g., 'Portfolio', 'Family Session')
 * @param contentName - Name of the content
 */
export function trackViewContent(contentType: string, contentName: string) {
  trackFacebookEvent('ViewContent', {
    content_type: contentType,
    content_name: contentName,
  });
}

/**
 * Track a Contact event (alternative to Lead for form submissions)
 */
export function trackContact(sessionType?: string, location?: string) {
  trackFacebookEvent('Contact', {
    content_name: 'Session Inquiry',
    content_category: sessionType || 'General',
    location: location || 'Unknown',
  });
}

