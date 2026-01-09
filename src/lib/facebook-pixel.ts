// Facebook Pixel TypeScript declarations and utility functions

declare global {
  interface Window {
    fbq: (
      action: 'track' | 'trackCustom' | 'init',
      eventName: string,
      params?: Record<string, any>
    ) => void;
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
  if (typeof window !== 'undefined') {
    // Wait for fbq to be available (with timeout)
    if (window.fbq) {
      try {
        window.fbq('track', eventName, params);
        console.log(`Facebook Pixel: Tracked ${eventName}`, params);
      } catch (error) {
        console.error(`Facebook Pixel: Error tracking ${eventName}`, error);
      }
    } else {
      // Retry after a short delay if fbq isn't loaded yet
      setTimeout(() => {
        if (window.fbq) {
          try {
            window.fbq('track', eventName, params);
            console.log(`Facebook Pixel: Tracked ${eventName} (delayed)`, params);
          } catch (error) {
            console.error(`Facebook Pixel: Error tracking ${eventName}`, error);
          }
        } else {
          console.warn(`Facebook Pixel: fbq not available for ${eventName}`);
        }
      }, 500);
    }
  }
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
  // Format sessionType for better readability
  const formattedSessionType = sessionType 
    ? sessionType.charAt(0).toUpperCase() + sessionType.slice(1).replace(/-/g, ' ')
    : 'General';
  
  // Build parameters object with standard Facebook Pixel parameters
  const params: Record<string, any> = {
    content_name: 'Session Inquiry Form',
    content_category: formattedSessionType,
  };
  
  // Add location as a custom parameter (Facebook allows custom parameters)
  // Using a simple key without underscores to avoid issues
  if (location) {
    params.location = location;
  }
  
  trackFacebookEvent('Lead', params);
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

