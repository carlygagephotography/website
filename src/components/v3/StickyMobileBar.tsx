"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { usePathname } from "next/navigation";

export function StickyMobileBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { handleAnchorClick } = useSmoothScroll();
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const isPortfolioPage = pathname?.startsWith("/portfolio");

  return (
    <>
      {/* Sticky Bottom Bar - Mobile Only */}
      <div className="fixed bottom-0 left-0 right-0 z-[1001] md:hidden">
        <div className="bg-white/95 backdrop-blur-xl border-t border-sand shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
          <div className="flex items-center justify-between px-4 py-3">
            {/* Menu Button */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="p-2 text-slate hover:text-moss transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>

            {/* Book Now Button */}
            <Link
              href={isHomePage ? "#contact" : "/#contact"}
              onClick={(e) => {
                if (isHomePage) {
                  handleAnchorClick(e, "#contact");
                } else {
                  window.location.href = "/#contact";
                }
              }}
              className="bg-slate text-bone px-4 md:px-6 py-2.5 rounded-sm text-[9px] md:text-[10px] uppercase tracking-[0.25em] md:tracking-[0.3em] font-bold hover:bg-slate/90 transition-all active:scale-95 flex-shrink-0 whitespace-nowrap"
            >
              {isPortfolioPage ? "Book a Session Like This" : "Book Now"}
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-slate/60 backdrop-blur-sm z-[1002] md:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
          
          {/* Menu Panel */}
          <div className="fixed top-0 left-0 bottom-0 w-[280px] bg-bone shadow-2xl z-[1003] md:hidden overflow-y-auto">
            <div className="p-6 space-y-8">
              {/* Close Button */}
              <div className="flex justify-end">
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 text-slate hover:text-moss transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="space-y-6">
                {[
                  { label: "Services", href: "#services" },
                  { label: "About", href: "#about" },
                  { label: "Portfolio", href: "#portfolios" },
                  { label: "Contact", href: "#contact" },
                ].map((item) => (
                  <Link
                    key={item.label}
                    href={isHomePage ? item.href : `/${item.href}`}
                    onClick={(e) => {
                      setIsMenuOpen(false);
                      if (isHomePage) {
                        handleAnchorClick(e, item.href);
                      } else {
                        window.location.href = `/${item.href}`;
                      }
                    }}
                    className="block text-lg font-serif text-slate hover:text-moss transition-colors py-2 border-b border-sand/20"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              {/* CTA Button in Menu */}
              <Link
                href={isHomePage ? "#contact" : "/#contact"}
                onClick={(e) => {
                  setIsMenuOpen(false);
                  if (isHomePage) {
                    handleAnchorClick(e, "#contact");
                  } else {
                    window.location.href = "/#contact";
                  }
                }}
                className="block w-full bg-slate text-bone text-center py-4 rounded-sm text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-slate/90 transition-all"
              >
                Book Your Session
              </Link>
            </div>
          </div>
        </>
      )}

    </>
  );
}

