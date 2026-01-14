"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown } from "lucide-react";

export function ContestHero() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center bg-bone overflow-hidden">
      {/* Mobile Background */}
      <div className="md:hidden absolute inset-0">
        <Image
          src="/images/hero-stephanie-new.jpg"
          alt="Dallas family photography giveaway"
          fill
          className="object-cover"
          style={{ objectPosition: "50% 25%" }}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate/80 via-slate/40 to-transparent" />
      </div>

      <div className="max-w-[1800px] mx-auto w-full px-6 md:px-16 grid grid-cols-1 md:grid-cols-12 gap-12 relative z-10 py-20">
        <div className="md:col-span-7 space-y-8 md:space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4 text-white md:text-slate/40">
              <span className="text-[10px] uppercase tracking-[0.6em]">SPRING 2026 GIVEAWAY</span>
              <div className="h-[1px] w-12 bg-sand hidden md:block" />
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-[7vw] font-serif leading-[0.9] text-white md:text-slate tracking-tighter">
              Win a One-Hour <br />
              <span className="italic font-light opacity-60 text-moss md:text-moss">Family Session.</span>
            </h1>

            <p className="text-lg md:text-xl text-white/90 md:text-slate/60 font-sans font-light max-w-lg leading-relaxed">
              To celebrate the opening of my 2026 Spring Calendar, I’m giving away one full photography session to a DFW family. Enter below for your chance to capture beautiful, real memories.
            </p>

            <div className="pt-8 flex flex-col sm:flex-row gap-8 items-center">
              <a 
                href="#enter"
                className="bg-white md:bg-slate text-slate md:text-bone px-12 py-6 rounded-sm text-[11px] uppercase tracking-[0.5em] transition-all hover:bg-moss hover:text-bone flex items-center gap-4 w-full sm:w-auto justify-center"
              >
                Tap to Enter
                <ArrowDown className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Desktop Image */}
        <div className="hidden md:block md:col-span-5 relative h-[70vh] rounded-[1rem] overflow-hidden shadow-2xl">
          <Image
            src="/images/hero-stephanie-new.jpg"
            alt="Carly Gage Photography"
            fill
            className="object-cover"
            style={{ objectPosition: "50% 25%" }}
            priority
          />
          <div className="absolute inset-0 bg-slate/5 mix-blend-multiply opacity-20" />
        </div>
      </div>
    </section>
  );
}
