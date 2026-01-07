"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { Logo } from "./Logo";

const cities = ["Southlake", "Highland Park", "Frisco", "Prosper", "Flower Mound", "Colleyville", "Grapevine", "McKinney", "Coppell", "Plano"];

export function Footer() {
  const { handleAnchorClick, scrollToSection } = useSmoothScroll();
  
  return (
    <footer className="bg-white border-t border-sand py-24 px-6 md:px-16 overflow-hidden">
      <div className="max-w-[1800px] mx-auto">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-24 mb-20">
          
          {/* Brand Column */}
          <div className="space-y-8">
            <Link href="/" className="group block">
              <Logo variant="dark" align="left" className="scale-110 origin-left" />
            </Link>
            <p className="text-slate/50 font-sans font-light max-w-md text-base leading-relaxed">
              Friendly Dallas family photographer capturing real moments and genuine joy. Based in Flower Mound, serving families across the entire DFW metroplex.
            </p>
            <div className="flex gap-8 pt-4">
               {["Instagram", "Pinterest", "Facebook"].map(social => (
                 <a key={social} href="#" className="text-[10px] uppercase tracking-[0.3em] text-slate/40 hover:text-slate transition-colors border-b border-transparent hover:border-slate/20 pb-1">
                    {social}
                 </a>
               ))}
            </div>
          </div>

          {/* Contact & Inquiry */}
          <div className="space-y-8">
             <span className="text-[10px] uppercase tracking-[0.5em] text-slate/30 font-bold block">Inquiries</span>
             <div className="space-y-3">
               <a href="mailto:carlygagephotography@gmail.com" className="font-serif text-2xl md:text-3xl text-slate hover:text-moss transition-colors duration-500 block">
                 carlygagephotography@gmail.com
               </a>
               <p className="font-sans text-slate/40 font-light text-sm">Flower Mound, Texas • Serving DFW</p>
             </div>
             
             <button 
               onClick={() => scrollToSection('#contact')}
               className="w-full md:w-auto bg-slate text-bone px-10 py-5 rounded-sm text-[10px] uppercase tracking-[0.4em] hover:bg-slate/90 transition-all shadow-lg shadow-slate/5 cursor-pointer mt-6"
             >
                Send an Inquiry
             </button>
          </div>

        </div>

        {/* SEO Location Bar */}
        <div className="py-12 border-t border-sand/50">
           <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
              <span className="text-[10px] uppercase tracking-[0.6em] text-slate/30 font-bold min-w-fit">Serving North Texas</span>
              <div className="flex flex-wrap gap-x-8 gap-y-3">
                 {cities.map(city => (
                   <span key={city} className="text-[11px] font-serif italic text-slate/50 hover:text-slate transition-colors cursor-default">
                      {city}
                   </span>
                 ))}
              </div>
           </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-sand/30">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-8">
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              {[
                { label: "Experience", href: "#services" },
                { label: "Services", href: "#services" },
                { label: "Portfolios", href: "#portfolios" },
                { label: "Contact", href: "#contact" }
              ].map(item => (
                <Link 
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleAnchorClick(e, item.href)}
                  className="text-[10px] uppercase tracking-[0.3em] text-slate/50 hover:text-slate transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="flex gap-8 text-[9px] uppercase tracking-[0.4em] text-slate/40">
              <span className="hover:text-slate cursor-pointer transition-colors">Privacy</span>
              <span className="hover:text-slate cursor-pointer transition-colors">Terms</span>
              <span className="hover:text-slate cursor-pointer transition-colors">Sitemap</span>
            </div>
          </div>
          <div className="pt-6 border-t border-sand/20">
            <p className="text-[9px] uppercase tracking-[0.4em] text-slate/30 text-center md:text-left">
              © 2026 Carly Gage Photography. Capturing families in Flower Mound, Dallas, and beyond.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}
