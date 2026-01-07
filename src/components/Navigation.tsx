"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-6 py-4 md:px-12",
        scrolled ? "bg-white/80 backdrop-blur-md py-3 shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-[1800px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group">
          <span className="font-serif text-xl md:text-2xl tracking-tight block leading-none">
            Carly Gage
          </span>
          <span className="text-[10px] uppercase tracking-[0.4em] text-stone-400 block mt-1 group-hover:text-charcoal transition-colors">
            Photography
          </span>
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-12">
          {["Experience", "Services", "Portfolio", "Journal"].map((item) => (
            <Link 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-xs uppercase tracking-[0.2em] font-sans hover:text-stone-400 transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <button className="bg-charcoal text-cream px-6 py-3 rounded-full text-[10px] uppercase tracking-[0.2em] hover:bg-stone-800 transition-all active:scale-95">
          Reserve Your Date
        </button>
      </div>
    </motion.nav>
  );
}

