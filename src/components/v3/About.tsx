"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

export function About() {
  const { handleAnchorClick } = useSmoothScroll();
  
  return (
    <section id="about" className="py-12 md:py-20 lg:py-40 bg-bone overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-4 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-10 lg:gap-24 items-center">
          
          {/* Portrait Column */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="relative aspect-[3/4] md:aspect-[4/5] rounded-sm overflow-hidden shadow-editorial group max-w-sm mx-auto md:max-w-none"
            >
              <Image
                src="/images/planetblue038.jpg"
                alt="Carly Gage - Flower Mound based Dallas family photographer specializing in heirloom portraiture"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                style={{ objectPosition: "50% 20%" }}
              />
              <div className="absolute inset-0 bg-slate/5 mix-blend-multiply opacity-20" />
            </motion.div>
            
            {/* Artistic Accent */}
            <div className="absolute -bottom-8 -right-8 w-64 h-64 border border-sand -z-10 hidden xl:block" />
          </div>

          {/* Text Column */}
          <div className="lg:col-span-7 space-y-5 md:space-y-8 lg:space-y-12">
            <div className="space-y-2 md:space-y-4 lg:space-y-6">
              <span className="text-[9px] md:text-[10px] uppercase tracking-[0.5em] md:tracking-[0.6em] text-slate/40 block">The Artist</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-serif leading-[0.9] tracking-tighter text-slate">
              Meet <br />
              <span className="italic font-light opacity-50 text-moss">Carly.</span>
            </h2>
            </div>

            <div className="space-y-4 md:space-y-6 lg:space-y-8 max-w-2xl">
              <p className="text-base md:text-lg lg:text-xl text-slate/60 font-sans font-light leading-relaxed">
                I know that getting the whole family ready for photos can feel like a lot of work—but I promise, once you arrive, I take care of the rest. For over 10 years, I've been helping DFW families relax, laugh, and actually enjoy their session.
              </p>
              
              <p className="text-sm md:text-base text-slate/50 font-sans font-light leading-relaxed">
                I don't expect your kids to be perfect; I expect them to be kids! Whether we are in Flower Mound, Frisco, or Southlake, my approach is patient and playful. I'm here to capture the chaos, the cuddles, and the love that makes your family yours.
              </p>

              <div className="pt-4 md:pt-6 lg:pt-8 flex flex-col gap-4 md:gap-6 lg:gap-8">
                <a 
                  href="#contact"
                  onClick={(e) => handleAnchorClick(e, "#contact")}
                  className="group relative bg-slate text-bone px-8 py-4 md:px-10 md:py-5 lg:px-12 lg:py-6 rounded-sm text-[10px] md:text-[11px] uppercase tracking-[0.4em] md:tracking-[0.5em] overflow-hidden transition-all inline-flex items-center gap-3 md:gap-4 w-full sm:w-auto justify-center sm:justify-start active:scale-[0.98]"
                >
                  <span className="relative z-10">Meet Your Photographer</span>
                  <ArrowRight className="w-4 h-4 relative z-10 transition-transform group-hover:translate-x-1" />
                  <div className="absolute inset-0 bg-moss transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                </a>
                
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-8 md:w-10 h-[1px] bg-sand" />
                  <span className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-slate/40 italic">Master of Photography | Based in Flower Mound</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
