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
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, params);
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
 * @param sessionType - Type of session selected
 * @param location - Location selected
 */
export function trackLead(sessionType?: string, location?: string) {
  trackFacebookEvent('Lead', {
    content_name: 'Session Inquiry',
    content_category: sessionType || 'General',
    location: location || 'Unknown',
  });
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

