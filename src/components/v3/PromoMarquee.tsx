"use client";

import { promoBanner } from "@/config/promo-banner";

function Track() {
  return (
    <div className="flex shrink-0 items-center" aria-hidden="true">
      {Array.from({ length: 4 }).map((_, i) => (
        <span key={i} className="promo-unit flex items-center whitespace-nowrap">
          <span className="font-serif italic text-[13px] md:text-[15px] tracking-wide">
            {promoBanner.message}
          </span>
          <span className="mx-3 md:mx-4 text-[10px] opacity-60">&#10022;</span>
          <span className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] opacity-80">
            {promoBanner.cta}
          </span>
          <span className="mx-3 md:mx-4 text-[10px] opacity-60">&#10022;</span>
        </span>
      ))}
    </div>
  );
}

export function PromoMarquee() {
  if (!promoBanner.enabled) return null;

  return (
    <a
      href={promoBanner.href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => {
        window.gtag?.("event", "promo_banner_click", {
          link_url: promoBanner.href,
        });
      }}
      // Sits above the fixed nav (z-1000); the nav is offset by --promo-h.
      className="promo-marquee fixed top-0 left-0 z-[1100] flex h-[var(--promo-h)] w-full items-center overflow-hidden bg-slate text-bone no-underline"
      aria-label={`${promoBanner.message} — ${promoBanner.cta}`}
    >
      <div className="promo-marquee__rail flex w-max">
        <Track />
        <Track />
      </div>
      {/* Static, centered fallback when the visitor prefers reduced motion. */}
      <span className="promo-marquee__static hidden w-full items-center justify-center gap-3 px-4">
        <span className="font-serif italic text-[13px] md:text-[15px] tracking-wide">
          {promoBanner.message}
        </span>
        <span className="text-[10px] opacity-60">&#10022;</span>
        <span className="truncate text-[9px] md:text-[10px] uppercase tracking-[0.3em] opacity-80">
          {promoBanner.cta}
        </span>
      </span>
    </a>
  );
}
