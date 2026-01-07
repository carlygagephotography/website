"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

const cities = ["Southlake", "Highland Park", "Frisco", "Prosper", "Flower Mound", "Colleyville"];

export function Hero() {
  const { scrollY } = useScroll();
  const { handleAnchorClick } = useSmoothScroll();
  const yImage = useTransform(scrollY, [0, 1000], [0, 200]);
  const yText = useTransform(scrollY, [0, 1000], [0, -100]);
  const opacityText = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section className="relative w-full min-h-[100vh] md:h-[110vh] overflow-hidden bg-bone flex items-center pt-20 md:pt-24 lg:pt-20 pb-16 md:pb-20 lg:pb-0">
      <div className="max-w-[1800px] mx-auto w-full px-4 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-12 lg:gap-16 relative z-10">
        
        {/* Left Content - Lead Focused */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-5 md:space-y-8 lg:space-y-12 relative z-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-3 md:space-y-4 lg:space-y-6"
          >
            <div className="flex items-center gap-2 md:gap-4 text-slate/40">
              <span className="text-[7px] sm:text-[8px] md:text-[10px] uppercase tracking-[0.3em] sm:tracking-[0.4em] md:tracking-[0.6em]">DFW FAMILY & MATERNITY PHOTOGRAPHY</span>
              <div className="h-[1px] w-6 md:w-8 lg:w-12 bg-sand" />
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[6.5vw] font-serif leading-[0.9] md:leading-[0.85] text-slate tracking-tighter">
              Real Moments. <br />
              <span className="italic font-light opacity-60 text-moss">Beautifully Kept.</span>
            </h1>

            {/* GEO/AI Direct Answer Block */}
            <div className="sr-only lg:not-sr-only text-sm text-slate/40 font-sans max-w-lg leading-relaxed border-l border-sand pl-4 italic">
              Carly Gage Photography provides authentic, joyful family and maternity photography in Dallas-Fort Worth. Specializing in stress-free sessions that capture real connections, we serve Flower Mound, Frisco, Southlake, and all DFW families with a warm, patient approach.
            </div>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate/60 font-sans font-light max-w-lg leading-relaxed">
              Authentic, joyful photography that captures your family's real moments. Based in Flower Mound, serving families across the entire Dallas-Fort Worth metroplex.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="flex flex-col sm:flex-row gap-4 md:gap-6 lg:gap-8 items-start sm:items-center"
          >
            <a 
              href="#portfolios"
              onClick={(e) => handleAnchorClick(e, "#portfolios")}
              className="group relative bg-slate text-bone px-6 py-3.5 md:px-8 md:py-4 lg:px-12 lg:py-6 rounded-sm text-[9px] sm:text-[10px] md:text-[11px] uppercase tracking-[0.3em] sm:tracking-[0.4em] md:tracking-[0.5em] overflow-hidden transition-all hover:pr-10 md:hover:pr-12 lg:hover:pr-16 inline-block w-full sm:w-auto text-center sm:text-left active:scale-[0.98]"
            >
              <span className="relative z-10 flex items-center gap-4">
                See My Work
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-moss transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
            </a>
            
            <div className="flex flex-col">
              <span className="text-[9px] uppercase tracking-[0.4em] text-slate/40 mb-2">Now Booking</span>
              <span className="text-xs font-serif italic text-slate border-b border-sand pb-1">2026 Sessions</span>
            </div>
          </motion.div>
        </div>

        {/* Right - Hero Image (Editorial) */}
        <div className="lg:col-span-5 relative h-[45vh] sm:h-[50vh] md:h-[60vh] lg:h-[85vh] w-full mt-6 md:mt-8 lg:mt-0">
          <motion.div 
            style={{ y: yImage }}
            className="relative w-full h-full rounded-[1rem] overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/hero-stephanie-new.jpg"
              alt="Dallas family photographer capturing heirloom portraits in natural light, showcasing timeless editorial photography style for DFW families."
              fill
              className="object-cover"
              style={{ objectPosition: "50% 25%" }}
              priority
              quality={100}
            />
            {/* Subtle Texture/Filter Overlay */}
            <div className="absolute inset-0 bg-slate/5 mix-blend-multiply opacity-20" />
          </motion.div>

          {/* Floating Testimonial Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 1.5 }}
            className="absolute -bottom-10 -left-10 bg-white/90 backdrop-blur-md p-10 rounded-sm shadow-xl border border-sand hidden xl:block w-[550px]"
          >
            <div className="space-y-4">
               <span className="text-[9px] uppercase tracking-[0.5em] text-slate/40 block mb-2">What Families Say</span>
               <p className="text-sm text-slate/70 font-sans font-light leading-relaxed italic">
                 "Carly made our session so easy and fun. The photos captured our family perfectly—real smiles and genuine moments we'll treasure forever."
               </p>
               <div className="pt-2 border-t border-sand/30">
                 <span className="text-[10px] uppercase tracking-wider text-slate/60">The Johnson Family</span>
                 <span className="text-[10px] text-slate/40 block mt-1">Flower Mound</span>
               </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute bottom-0 right-0 w-[50vw] h-[50vh] bg-sand/20 -z-10 blur-[120px] opacity-50 rounded-full" />
    </section>
  );
}

