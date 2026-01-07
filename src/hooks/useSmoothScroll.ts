"use client";

import { useLenis } from "@studio-freight/react-lenis";
import { useCallback } from "react";

export function useSmoothScroll() {
  const lenis = useLenis();

  const scrollToSection = useCallback((href: string) => {
    if (href.startsWith('#')) {
      const targetId = href.substring(1);
      const element = document.getElementById(targetId);
      if (element && lenis) {
        lenis.scrollTo(element, {
          offset: -80, // Account for fixed header
          duration: 1.5,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
        });
      }
    }
  }, [lenis]);

  const handleAnchorClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      scrollToSection(href);
    }
  }, [scrollToSection]);

  return { scrollToSection, handleAnchorClick };
}

