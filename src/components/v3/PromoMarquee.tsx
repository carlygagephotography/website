"use client";

import { usePathname } from "next/navigation";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { promoBanner } from "@/config/promo-banner";

// An absolute URL leaves the site and opens in a new tab; anything else is an
// in-site destination handled in the current tab.
const isExternal = /^https?:\/\//i.test(promoBanner.href);

// "/#contact" -> "#contact", so the homepage can smooth-scroll instead of
// doing a full navigation. null for any other kind of link.
const sectionHash = promoBanner.href.startsWith("/#")
  ? promoBanner.href.slice(1)
  : null;

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
  const pathname = usePathname();
  const { handleAnchorClick } = useSmoothScroll();

  if (!promoBanner.enabled) return null;

  // Already on the page that holds the section: scroll to it in place, the way
  // the nav and sticky mobile bar do. Otherwise follow the full path.
  const scrollsInPage = !isExternal && sectionHash !== null && pathname === "/";
  const href = scrollsInPage ? sectionHash : promoBanner.href;

  return (
    <a
      href={href}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      onClick={(e) => {
        window.gtag?.("event", "promo_banner_click", {
          link_url: promoBanner.href,
        });
        if (scrollsInPage) {
          handleAnchorClick(e, sectionHash);
        }
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
