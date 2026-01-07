"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

import { Logo } from "./Logo";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const { handleAnchorClick } = useSmoothScroll();
  
  // Transition background and padding on scroll
  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
    });
    return () => unsubscribe();
  }, [scrollY]);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        "fixed top-0 left-0 w-full z-[1000] transition-all duration-700 px-6 md:px-16",
        isScrolled ? "py-4 bg-bone/80 backdrop-blur-xl border-b border-sand" : "py-10 bg-transparent"
      )}
    >
      <div className="max-w-[1800px] mx-auto flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="group">
          <Logo variant="dark" />
        </Link>

        {/* Menu - Hidden on mobile, minimal on desktop */}
        <div className="hidden lg:flex items-center gap-16">
          {[
            { label: "Experience", href: "#services" },
            { label: "Services", href: "#services" },
            { label: "Portfolios", href: "#portfolios" },
            { label: "Contact", href: "#contact" }
          ].map((item) => (
            <Link 
              key={item.label} 
              href={item.href}
              onClick={(e) => handleAnchorClick(e, item.href)}
              className="text-[10px] uppercase tracking-[0.3em] font-sans text-slate/60 hover:text-slate transition-colors relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-slate transition-all duration-500 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Action */}
        <div className="flex items-center gap-8">
           <Link
             href="#contact"
             onClick={(e) => handleAnchorClick(e, "#contact")}
             className="bg-slate text-bone px-8 py-4 rounded-sm text-[10px] uppercase tracking-[0.4em] hover:bg-slate/90 transition-all shadow-lg shadow-slate/5 active:scale-95 inline-block"
           >
             Book Your Session
           </Link>
        </div>
      </div>
    </motion.nav>
  );
}

