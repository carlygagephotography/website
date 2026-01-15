"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Heart, ShieldCheck, Sun, PenTool, SmilePlus, ChevronLeft, ArrowRight } from "lucide-react";
import { ICP_CONTENT } from "@/data/icp-content";
import { useRef } from "react";

const iconMap: Record<string, any> = {
  "overwhelmed-mom": Heart,
  "reluctant-dad": ShieldCheck,
  "texas-heat-worrier": Sun,
  "pinterest-perfectionist": PenTool,
  "toddler-meltdown-mom": SmilePlus
};

export function ObjectionHandlers() {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  // Flatten all objections into a single list
  const allObjections = ICP_CONTENT.flatMap(persona => 
    persona.objections.map(obj => ({
      ...obj,
      personaId: persona.id,
      personaName: persona.name
    }))
  );

  return (
    <section id="approach" className="py-12 md:py-20 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-4 md:px-16">
        
        {/* Header with Navigation */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16 gap-8">
          <div className="space-y-4 md:space-y-6 max-w-2xl">
            <span className="text-[9px] md:text-[10px] uppercase tracking-[0.5em] md:tracking-[0.6em] text-slate/40 block">Your Experience</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-slate leading-[0.9] tracking-tighter">
              The Concerns I Hear Most <br />
              <span className="italic font-light opacity-50 text-moss">(And My Solutions)</span>
            </h2>
          </div>
          
          {/* Navigation Arrows - Desktop Only */}
          <div className="hidden md:flex gap-4 mb-2">
            <button 
              onClick={scrollLeft}
              className="w-12 h-12 rounded-full border border-sand/50 flex items-center justify-center hover:border-moss hover:text-moss transition-all"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={scrollRight}
              className="w-12 h-12 rounded-full border border-sand/50 flex items-center justify-center hover:border-moss hover:text-moss transition-all"
              aria-label="Next"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative -mx-4 md:-mx-16 px-4 md:px-16">
          <div 
            ref={containerRef}
            className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory gap-6 md:gap-8 pb-8"
          >
            {allObjections.map((item, i) => {
              const Icon = iconMap[item.personaId] || Heart;
              return (
                <motion.article
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="flex-shrink-0 w-[85vw] md:w-[450px] snap-start group relative p-8 md:p-12 bg-bone/30 border border-sand/30 rounded-sm hover:border-moss/30 transition-all duration-500 flex flex-col justify-between"
                >
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-white border border-sand/30 flex items-center justify-center group-hover:border-moss/50 transition-colors duration-500">
                        <Icon className="w-4 h-4 text-moss" />
                      </div>
                      <span className="text-[10px] uppercase tracking-widest text-slate/40">{item.personaName}</span>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-xl md:text-2xl font-serif text-slate/90 italic leading-snug">
                        "{item.objection}"
                      </h3>
                      <div className="w-12 h-[1px] bg-sand" />
                      <p className="text-sm md:text-base text-slate/60 font-sans font-light leading-relaxed">
                        {item.solutionNarrative}
                      </p>
                    </div>
                  </div>

                  {/* Aesthetic Accent */}
                  <div className="mt-8 pt-8 border-t border-sand/20 flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-widest text-slate/20 font-bold">0{i + 1}</span>
                    <div className="w-2 h-2 rounded-full bg-sand/30" />
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* Mobile Indicator */}
        <div className="flex justify-center items-center gap-3 mt-8 md:hidden">
          <div className="w-16 h-[1px] bg-sand" />
          <span className="text-[8px] uppercase tracking-[0.4em] text-slate/30">Drag to explore</span>
          <div className="w-16 h-[1px] bg-sand" />
        </div>

      </div>
    </section>
  );
}
