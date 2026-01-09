// Facebook Pixel TypeScript declarations and utility functions

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
    _fbq?: any;
  }
}

/**
 * Helper function to ensure fbq is loaded before tracking
 */
function ensureFbqLoaded(callback: () => void, maxAttempts = 20, attempt = 0) {
  if (typeof window === 'undefined') {
    console.warn('Facebook Pixel: Window is not available');
    return;
  }

  // Check if fbq exists and is a function
  if (window.fbq && typeof window.fbq === 'function') {
    // Double check that fbq is actually initialized (not just defined)
    try {
      // Try a test call to see if it's actually working
      callback();
    } catch (error) {
      console.error('Facebook Pixel: Error in callback', error);
    }
  } else if (attempt < maxAttempts) {
    // Wait longer on first few attempts, then shorter intervals
    const delay = attempt < 5 ? 300 : 200;
    setTimeout(() => {
      ensureFbqLoaded(callback, maxAttempts, attempt + 1);
    }, delay);
  } else {
    console.error('Facebook Pixel: fbq failed to load after multiple attempts');
    console.error('Current window.fbq:', window.fbq);
    console.error('Attempted to track event but Pixel not loaded');
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

