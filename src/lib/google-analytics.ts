// Google Analytics (GA4) TypeScript declarations and utility functions

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

/**
 * Helper function to ensure gtag is loaded before tracking
 */
function ensureGtagLoaded(callback: () => void, maxAttempts = 20, attempt = 0) {
  if (typeof window === 'undefined') {
    console.warn('Google Analytics: Window is not available');
    return;
  }

  // Check if gtag exists and is a function
  if (window.gtag && typeof window.gtag === 'function') {
    try {
      callback();
    } catch (error) {
      console.error('Google Analytics: Error in callback', error);
    }
  } else if (attempt < maxAttempts) {
    // Wait longer on first few attempts, then shorter intervals
    const delay = attempt < 5 ? 300 : 200;
    setTimeout(() => {
      ensureGtagLoaded(callback, maxAttempts, attempt + 1);
    }, delay);
  } else {
    console.error('Google Analytics: gtag failed to load after multiple attempts');
    console.error('Current window.gtag:', window.gtag);
    console.error('Attempted to track event but GA not loaded');
  }
}

/**
 * Track a Google Analytics 4 event
 * @param eventName - Event name (e.g., 'form_submission', 'button_click', 'scroll')
 * @param eventParams - Optional parameters object
 * 
 * GA4 Events Reference:
 * - form_submission: When a form is submitted (custom event)
 * - generate_lead: Standard GA4 event for lead generation
 * - view_item: When a user views an item
 * - add_to_cart: When an item is added to cart
 * - begin_checkout: When checkout begins
 * - purchase: When a purchase is completed
 */
export function trackGAEvent(
  eventName: string,
  eventParams?: Record<string, any>
) {
  ensureGtagLoaded(() => {
    try {
      if (window.gtag) {
        window.gtag('event', eventName, eventParams || {});
        console.log(`✅ Google Analytics: Tracked ${eventName}`, eventParams || {});
      }
    } catch (error) {
      console.error(`❌ Google Analytics: Error tracking ${eventName}`, error);
    }
  });
}

/**
 * Track a form submission event
 * This sends both a custom 'form_submission' event and the standard 'generate_lead' event
 * 
 * NOTE: In Google Analytics 4:
 * 1. Go to Admin → Events
 * 2. Mark 'generate_lead' as a conversion event (if not already marked)
 * 3. You can also mark 'form_submission' as a conversion event for custom tracking
 * 
 * @param formName - Name of the form (e.g., 'inquiry_form', 'contest_form', 'floating_inquiry')
 * @param formData - Form data including sessionType, location, etc.
 */
export function trackFormSubmission(
  formName: string,
  formData?: {
    sessionType?: string;
    location?: string;
    [key: string]: any;
  }
) {
  const params: Record<string, any> = {
    form_id: formName,
    form_name: formName,
    ...(formData?.sessionType && { session_type: formData.sessionType }),
    ...(formData?.location && { location: formData.location }),
  };

  // Track both custom event and standard GA4 lead event
  trackGAEvent('form_submission', params);
  trackGAEvent('generate_lead', {
    currency: 'USD',
    value: 0, // You can set actual lead value if you have pricing tiers
    lead_type: formData?.sessionType || 'general',
    ...params,
  });
}

/**
 * Track a contest/giveaway entry
 * @param location - User's location
 */
export function trackContestEntry(location?: string) {
  trackGAEvent('form_submission', {
    form_id: 'contest_form',
    form_name: 'Spring 2026 Giveaway',
    location: location || 'unknown',
  });
  
  trackGAEvent('generate_lead', {
    currency: 'USD',
    value: 0,
    lead_type: 'giveaway_entry',
    location: location || 'unknown',
  });
}

/**
 * Track button clicks (CTA buttons, navigation, etc.)
 * @param buttonName - Name/identifier of the button
 * @param buttonLocation - Where the button is located (e.g., 'hero', 'portfolio', 'about')
 */
export function trackButtonClick(buttonName: string, buttonLocation?: string) {
  trackGAEvent('button_click', {
    button_name: buttonName,
    button_location: buttonLocation || 'unknown',
  });
}

/**
 * Track scroll depth events
 * Call this when user scrolls past certain thresholds
 * @param depth - Scroll depth percentage (e.g., 25, 50, 75, 100)
 */
export function trackScrollDepth(depth: number) {
  trackGAEvent('scroll', {
    scroll_depth: depth,
  });
}

/**
 * Track page view for specific sections
 * @param sectionName - Name of the section (e.g., 'portfolio', 'testimonials', 'faq')
 */
export function trackSectionView(sectionName: string) {
  trackGAEvent('section_view', {
    section_name: sectionName,
  });
}

/**
 * Track outbound link clicks
 * @param url - The URL being clicked
 * @param linkText - Text of the link
 */
export function trackOutboundLink(url: string, linkText?: string) {
  trackGAEvent('click', {
    event_category: 'outbound',
    event_label: url,
    link_url: url,
    link_text: linkText || 'unknown',
  });
}

/**
 * Test function to verify Google Analytics is loaded
 * Call this in browser console: window.testGoogleAnalytics()
 */
if (typeof window !== 'undefined') {
  (window as any).testGoogleAnalytics = () => {
    console.log('Testing Google Analytics...');
    console.log('gtag available:', typeof window.gtag === 'function');
    console.log('dataLayer:', window.dataLayer);
    if (window.gtag) {
      try {
        window.gtag('event', 'test_event', {
          event_category: 'test',
          event_label: 'Analytics test',
        });
        console.log('✅ Google Analytics test successful - test_event tracked');
      } catch (error) {
        console.error('❌ Google Analytics test failed:', error);
      }
    }
  };
}
