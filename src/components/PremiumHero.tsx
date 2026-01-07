"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function PremiumHero() {
  return (
    <section className="relative min-h-screen flex flex-col pt-32 pb-20 px-6 md:px-12 bg-cream overflow-hidden">
      <div className="max-w-[1800px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center flex-1">
        
        {/* Text Content */}
        <div className="lg:col-span-5 z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-4 text-stone-400">
              <span className="text-[10px] uppercase tracking-[0.4em]">A Luxury Family Experience</span>
              <div className="h-[1px] w-12 bg-stone-300" />
            </div>

            <h1 className="text-[14vw] lg:text-8xl font-serif leading-[0.9] tracking-tighter text-charcoal">
              Preserving <br />
              <span className="italic font-light text-stone-400">Honest</span> <br />
              Legacy.
            </h1>

            <p className="text-xl text-stone-500 font-sans max-w-md font-light leading-relaxed">
              DFW's premier family photographer specializing in heirloom portraiture that feels as warm as the memories they hold.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <button className="group flex items-center gap-4 bg-charcoal text-cream px-10 py-6 rounded-full hover:bg-stone-800 transition-all shadow-xl shadow-charcoal/10">
                <span className="text-xs uppercase tracking-[0.2em]">View the Experience</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="flex items-center gap-4 border border-stone-200 px-10 py-6 rounded-full hover:bg-stone-50 transition-all">
                <span className="text-xs uppercase tracking-[0.2em] text-charcoal">Book 2025/2026</span>
              </button>
            </div>
          </motion.div>
        </div>

        {/* Visual Content - Editorial Image */}
        <div className="lg:col-span-7 relative h-[60vh] lg:h-[85vh] w-full">
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="relative h-full w-full rounded-[2rem] overflow-hidden shadow-editorial"
          >
            <Image
              src="/images/hero-1.jpg" // Aubree and Joe family
              alt="Carly Gage Photography Portfolio"
              fill
              className="object-cover"
              style={{ objectPosition: "50% 25%" }} // Fixed face focus
              priority
            />
            {/* Soft Grainy Overlay inside the image container */}
            <div className="absolute inset-0 bg-black/5 mix-blend-multiply opacity-20" />
          </motion.div>

          {/* Floating EEAT Signal Badge */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="absolute -bottom-10 -left-10 hidden xl:flex bg-white p-8 rounded-3xl shadow-float border border-stone-100 items-center gap-6"
          >
            <div className="w-16 h-16 rounded-full bg-moss/10 flex items-center justify-center font-serif text-2xl text-moss">
              10+
            </div>
            <div>
              <p className="font-serif text-lg leading-none">Years of Experience</p>
              <p className="text-[10px] uppercase tracking-[0.1em] text-stone-400 mt-2">Serving North Texas Families</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Trust Bar (EEAT & Lead Gen) */}
      <div className="mt-20 border-t border-stone-100 pt-10 flex flex-wrap justify-between items-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
        {["Southlake", "Frisco", "Flower Mound", "Highland Park", "Plano"].map((city) => (
          <span key={city} className="text-[10px] uppercase tracking-[0.5em] font-sans">
            {city}
          </span>
        ))}
      </div>
    </section>
  );
}

