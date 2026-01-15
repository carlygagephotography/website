"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Heart, ShieldCheck, Sun, PenTool, SmilePlus, ChevronLeft, ArrowRight } from "lucide-react";
import { ICP_CONTENT } from "@/data/icp-content";
import { useState, useRef, useEffect } from "react";

const iconMap: Record<string, any> = {
  "overwhelmed-mom": Heart,
  "reluctant-dad": ShieldCheck,
  "texas-heat-worrier": Sun,
  "pinterest-perfectionist": PenTool,
  "toddler-meltdown-mom": SmilePlus
};

// Flatten all objections into a single list for the carousel
const allConcerns = ICP_CONTENT.flatMap(persona => 
  persona.objections.map(obj => ({
    ...obj,
    personaId: persona.id,
    personaName: persona.name
  }))
);

export function ObjectionHandlers() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const itemWidth = container.offsetWidth;
    container.scrollTo({
      left: index * itemWidth,
      behavior: "smooth"
    });
    setActiveIndex(index);
  };

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const index = Math.round(container.scrollLeft / container.offsetWidth);
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  return (
    <section id="approach" className="py-12 md:py-24 lg:py-32 px-4 md:px-16 bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          
          {/* Header Block - Left Side */}
          <div className="lg:col-span-5 space-y-6 md:space-y-8">
            <div className="space-y-4">
              <span className="text-[9px] md:text-[10px] uppercase tracking-[0.5em] md:tracking-[0.6em] text-slate/40 block">Your Peace of Mind</span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-slate leading-[0.9]">
                Concerns, <br />
                <span className="italic font-light opacity-50 text-moss">Addressed.</span>
              </h2>
            </div>
            <p className="text-base md:text-lg text-slate/60 font-sans font-light leading-relaxed max-w-sm">
              I've heard every worry. Here is how I handle the most common objections to ensure your session is effortless.
            </p>

            {/* Navigation Controls */}
            <div className="flex items-center gap-6 pt-4">
              <div className="flex gap-2">
                <button 
                  onClick={() => scrollToIndex(Math.max(0, activeIndex - 1))}
                  disabled={activeIndex === 0}
                  className="w-10 h-10 rounded-full border border-sand flex items-center justify-center text-slate/40 hover:text-moss hover:border-moss transition-all disabled:opacity-20 disabled:hover:border-sand disabled:hover:text-slate/40"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => scrollToIndex(Math.min(allConcerns.length - 1, activeIndex + 1))}
                  disabled={activeIndex === allConcerns.length - 1}
                  className="w-10 h-10 rounded-full border border-sand flex items-center justify-center text-slate/40 hover:text-moss hover:border-moss transition-all disabled:opacity-20 disabled:hover:border-sand disabled:hover:text-slate/40"
                >
                  <ArrowRight className="w-5 h-5 rotate-0" />
                </button>
              </div>
              <div className="flex-1 h-[1px] bg-sand/30 relative">
                <motion.div 
                  className="absolute top-0 left-0 h-full bg-moss"
                  initial={false}
                  animate={{ width: `${((activeIndex + 1) / allConcerns.length) * 100}%` }}
                />
              </div>
              <span className="text-[10px] font-sans text-slate/30 tracking-widest uppercase">
                {activeIndex + 1} / {allConcerns.length}
              </span>
            </div>
          </div>

          {/* Carousel Block - Right Side */}
          <div className="lg:col-span-7 relative">
            <div 
              ref={scrollRef}
              onScroll={handleScroll}
              className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory -mx-4 px-4 md:mx-0 md:px-0"
            >
              {allConcerns.map((concern, i) => {
                const Icon = iconMap[concern.personaId] || Heart;
                return (
                  <div key={i} className="flex-shrink-0 w-full snap-center md:pr-8">
                    <motion.article 
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8 }}
                      viewport={{ once: true }}
                      className="bg-bone/40 border border-sand/30 p-8 md:p-12 rounded-sm relative min-h-[320px] flex flex-col justify-center"
                    >
                      <div className="absolute top-8 left-8 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-white border border-sand/30 flex items-center justify-center">
                          <Icon className="w-4 h-4 text-moss" />
                        </div>
                        <span className="text-[9px] uppercase tracking-[0.3em] text-slate/40">{concern.personaName}</span>
                      </div>

                      <div className="space-y-6 pt-8">
                        <h3 className="text-xl md:text-2xl font-serif text-slate leading-tight italic">
                          "{concern.objection}"
                        </h3>
                        <p className="text-sm md:text-base text-slate/60 font-sans font-light leading-relaxed">
                          {concern.solutionNarrative}
                        </p>
                      </div>
                    </motion.article>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
