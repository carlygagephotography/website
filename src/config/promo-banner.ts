/**
 * Temporary sitewide promo marquee (mini sessions, seasonal offers).
 *
 * Set `enabled: false` to remove it — the banner stops rendering and the
 * layout returns to exactly what it was, with no leftover spacing.
 */
export const promoBanner = {
  enabled: true,

  /**
   * Where the banner sends people.
   *
   * An in-site link ("/#contact") scrolls to the inquiry form in the same tab.
   * An absolute URL (e.g. a usesession booking page) opens in a new tab
   * automatically — no component change needed to switch back.
   */
  href: "/#contact",

  /** Repeated across the scrolling track. Keep it short. */
  message: "Mini Sessions Now Booking",

  /** Nudge shown between each message. */
  cta: "Tap to reserve your spot",
} as const;
