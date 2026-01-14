"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown } from "lucide-react";

export function ContestHero() {
  return (
    <section className="relative w-full min-h-[100vh] overflow-hidden bg-bone">
      {/* Mobile: Image First Layout */}
      <div className="md:hidden w-full pt-20 pb-16">
        <div className="relative h-[70vh] w-full overflow-hidden">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative w-full h-full"
          >
            <Image
              src="/images/hero-stephanie-new.jpg"
              alt="Dallas family photography giveaway"
              fill
              className="object-cover"
              style={{ objectPosition: "50% 25%" }}
              priority
            />
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate/80 via-slate/30 to-transparent" />
          </motion.div>
          {/* Text Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 pb-8 text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="space-y-3"
            >
              <div className="flex items-center gap-2 text-white/90 mb-2">
                <span className="text-[8px] uppercase tracking-[0.4em]">SPRING 2026 GIVEAWAY</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-serif leading-[0.9] text-white tracking-tighter drop-shadow-lg">
                Win a <br />
                <span className="italic font-light opacity-90">Photo Session.</span>
              </h1>
              <p className="text-sm text-white/90 font-sans font-light leading-relaxed max-w-md pt-2">
                Whether you want to capture your <strong>Family</strong>, <strong>Maternity</strong>, or a <strong>Baby Announcement</strong>, enter for your chance to win.
              </p>
            </motion.div>
          </div>
        </div>
        
        {/* Content below image on mobile */}
        <div className="px-4 py-8 space-y-6">
          <div className="space-y-4">
            <a 
              href="#enter"
              className="group relative bg-slate text-bone px-8 py-4 rounded-sm text-[10px] uppercase tracking-[0.4em] overflow-hidden transition-all inline-flex items-center gap-3 w-full justify-center active:scale-[0.98]"
            >
              <span className="relative z-10">Tap to Enter</span>
              <ArrowDown className="w-4 h-4 relative z-10" />
              <div className="absolute inset-0 bg-moss transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
            </a>
            
            <div className="text-center">
              <span className="text-[9px] uppercase tracking-[0.4em] text-slate/40 block mb-1">Open to DFW Families</span>
              <span className="text-xs font-serif italic text-slate border-b border-sand pb-1">Spring 2026 Calendar</span>
            </div>
          </div>
          
          <p className="text-sm text-slate/60 font-sans font-light leading-relaxed text-left">
            To celebrate the opening of my 2026 Spring Calendar, I’m giving away one photography session to a DFW family.
          </p>
        </div>
      </div>

      {/* Desktop: Original Layout */}
      <div className="hidden md:flex md:items-center min-h-screen pt-20 pb-20">
        <div className="max-w-[1800px] mx-auto w-full px-8 lg:px-16 grid grid-cols-12 gap-12 lg:gap-16 relative z-10">
        
        {/* Left Content */}
        <div className="col-span-12 md:col-span-7 flex flex-col justify-center space-y-8 lg:space-y-12 relative z-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4 text-slate/40">
              <span className="text-[10px] uppercase tracking-[0.6em]">SPRING 2026 GIVEAWAY</span>
              <div className="h-[1px] w-12 bg-sand" />
            </div>

            <h1 className="text-6xl lg:text-7xl xl:text-[6.5vw] font-serif leading-[0.9] lg:leading-[0.85] text-slate tracking-tighter">
              Win a <br />
              <span className="italic font-light opacity-60 text-moss">Photo Session.</span>
            </h1>

            <p className="text-lg lg:text-xl text-slate/60 font-sans font-light max-w-lg leading-relaxed">
              To celebrate the opening of my 2026 Spring Calendar, I’m giving away one photography session to a DFW family. Whether you want to capture your <strong>Family</strong>, your <strong>Maternity</strong> journey, or a <strong>Baby Announcement</strong>, enter below for your chance to win!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="flex flex-row gap-8 items-center"
          >
            <a 
              href="#enter"
              className="group relative bg-slate text-bone px-12 py-6 rounded-sm text-[11px] uppercase tracking-[0.5em] overflow-hidden transition-all inline-flex items-center gap-4 active:scale-[0.98]"
            >
              <span className="relative z-10 flex items-center gap-4">
                Tap to Enter
                <ArrowDown className="w-4 h-4" />
              </span>
              <div className="absolute inset-0 bg-moss transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
            </a>
            
            <div className="flex flex-col">
              <span className="text-[9px] uppercase tracking-[0.4em] text-slate/40 mb-2">Open to DFW Families</span>
              <span className="text-xs font-serif italic text-slate border-b border-sand pb-1">Spring 2026 Calendar</span>
            </div>
          </motion.div>
        </div>

        {/* Right - Image */}
        <div className="col-span-12 md:col-span-5 relative h-[50vh] md:h-[70vh] lg:h-[85vh] w-full">
          <motion.div 
            className="relative w-full h-full rounded-[1rem] overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/hero-stephanie-new.jpg"
              alt="Carly Gage Photography giveaway"
              fill
              className="object-cover"
              style={{ objectPosition: "50% 25%" }}
              priority
            />
            <div className="absolute inset-0 bg-slate/5 mix-blend-multiply opacity-20" />
          </motion.div>
        </div>
        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute bottom-0 right-0 w-[50vw] h-[50vh] bg-sand/20 -z-10 blur-[120px] opacity-50 rounded-full" />
    </section>
  );
}
