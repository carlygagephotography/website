"use client";

import { motion } from "framer-motion";
import { Heart, ShieldCheck, Sun, PenTool, SmilePlus } from "lucide-react";
import { ICP_CONTENT } from "@/data/icp-content";

const iconMap: Record<string, any> = {
  "overwhelmed-mom": Heart,
  "reluctant-dad": ShieldCheck,
  "texas-heat-worrier": Sun,
  "pinterest-perfectionist": PenTool,
  "toddler-meltdown-mom": SmilePlus
};

export function ObjectionHandlers() {
  return (
    <section id="approach" className="py-16 md:py-24 lg:py-40 px-4 md:px-16 bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-20 space-y-4 md:space-y-6">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-[9px] md:text-[10px] uppercase tracking-[0.5em] md:tracking-[0.6em] text-slate/40 block"
          >
            How I Work
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl lg:text-6xl font-serif text-slate leading-tight"
          >
            The Concerns I Hear Most <br />
            <span className="italic font-light opacity-50 text-moss">(And How I Handle Them)</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-base md:text-lg text-slate/60 font-sans font-light max-w-2xl mx-auto leading-relaxed"
          >
            I've heard every worry and objection. Here's how I address the most common ones so your session is stress-free from start to finish.
          </motion.p>
        </div>

        {/* Objection Cards - Horizontal Scroll */}
        <div className="relative">
          <div className="flex overflow-x-auto pb-12 snap-x snap-mandatory hide-scrollbar gap-6 md:gap-8 px-4 md:px-0 -mx-4 md:mx-0">
            {ICP_CONTENT.map((persona, personaIndex) => {
              const Icon = iconMap[persona.id] || Heart;
              return persona.objections.map((objection, objIndex) => (
                <motion.article
                  key={`${persona.id}-${objIndex}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: (personaIndex + objIndex) * 0.05 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="flex-shrink-0 w-[85vw] md:w-[450px] snap-center group relative p-8 md:p-10 bg-bone/50 border border-sand/30 rounded-sm hover:border-moss/30 transition-all duration-500 hover:shadow-lg flex flex-col justify-between"
                >
                  {/* Icon */}
                  <div className="absolute -top-4 left-8 w-12 h-12 bg-white border border-sand/30 rounded-full flex items-center justify-center group-hover:border-moss/50 transition-colors duration-500">
                    <Icon className="w-5 h-5 text-moss" />
                  </div>

                  {/* Content */}
                  <div className="pt-6 space-y-4 md:space-y-5">
                    <h3 className="text-lg md:text-xl font-serif text-slate/90 italic leading-snug">
                      "{objection.objection}"
                    </h3>
                    <div className="w-12 h-[1px] bg-sand" />
                    <p className="text-sm md:text-base text-slate/70 font-sans font-light leading-relaxed">
                      {objection.solutionNarrative}
                    </p>
                  </div>

                  {/* Decorative Corner */}
                  <div className="absolute bottom-0 right-0 w-16 h-16 border-r border-b border-sand/20 rounded-br-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.article>
              ));
            })}
          </div>
          
          {/* Scroll Hint */}
          <div className="flex justify-center gap-2 mt-4 lg:hidden">
            <div className="w-12 h-[2px] bg-sand relative overflow-hidden">
              <motion.div 
                animate={{ x: [-48, 48] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-moss w-full"
              />
            </div>
            <span className="text-[8px] uppercase tracking-widest text-slate/30">Swipe to view all concerns</span>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16 md:mt-20 space-y-6"
        >
          <p className="text-sm md:text-base text-slate/50 font-sans font-light italic max-w-xl mx-auto">
            Have a different concern? Let's talk about it during your consultation. I'm here to make this experience as easy and enjoyable as possible.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
