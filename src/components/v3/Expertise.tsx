"use client";

import { motion } from "framer-motion";
import { Users, Heart, Baby, Timer } from "lucide-react";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

import Link from "next/link";

const pillars = [
  {
    id: "01",
    title: "Family Sessions",
    titleLink: "/portfolio/dallas-family-session",
    description: "One hour of fun at a beautiful location. We focus on play, laughter, and connection to get those genuine smiles. 40 edited images included.",
    icon: <Users className="w-5 h-5" />,
  },
  {
    id: "02",
    title: "Maternity",
    titleLink: "/portfolio/dallas-maternity-session",
    description: "Celebrate your journey with a relaxed one-hour session. Two outfit changes allowed to showcase your glow. Partners are always welcome.",
    icon: <Heart className="w-5 h-5" />,
  },
  {
    id: "03",
    title: "Baby Announcement",
    titleLink: "/portfolio/dallas-baby-announcement",
    description: "Share your big news! A one-hour creative session to capture the excitement of your growing family. Perfect for social media and keepsakes.",
    icon: <Baby className="w-5 h-5" />,
  },
  {
    id: "04",
    title: "Mini Sessions",
    titleLink: "/portfolio/dallas-mini-session",
    description: "Short, sweet, and simple. A 20-minute session at a set location delivering 10 beautiful images. Perfect for milestones and busy families.",
    icon: <Timer className="w-5 h-5" />,
  }
];

export function Expertise() {
  const { handleAnchorClick } = useSmoothScroll();
  
  return (
    <section id="services" className="py-12 md:py-20 lg:py-32 px-4 md:px-16 bg-white overflow-hidden">
      <div className="max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 lg:gap-24 items-start">
        
        {/* Title Block */}
        <div className="lg:col-span-4 space-y-4 md:space-y-6 lg:space-y-8 lg:sticky lg:top-32 mb-8 md:mb-0">
          <div className="space-y-2 md:space-y-3 lg:space-y-4">
            <span className="text-[9px] md:text-[10px] uppercase tracking-[0.5em] md:tracking-[0.6em] text-slate/40">Services</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-serif leading-[0.9] tracking-tighter text-slate">
            Sessions for <br />
            <span className="italic font-light opacity-50 text-moss">Every Season.</span>
          </h2>
        </div>
          <p className="text-sm md:text-base lg:text-lg text-slate/60 font-sans font-light leading-relaxed max-w-sm">
            Whether you want a full hour to explore a beautiful park or just a quick 20-minute update for your holiday cards, we have a session that fits your family's needs. My goal is to make this the easiest photo session you've ever had.
          </p>
          <div className="pt-4 md:pt-6 lg:pt-8">
             <a 
               href="#contact" 
               onClick={(e) => handleAnchorClick(e, "#contact")}
               className="group flex items-center gap-3 md:gap-4 text-[10px] md:text-[11px] uppercase tracking-[0.3em] md:tracking-[0.4em] text-slate hover:text-moss transition-colors duration-500"
             >
               View the Experience
               <div className="w-6 md:w-8 h-[1px] bg-sand transition-all duration-500 group-hover:w-12 md:group-hover:w-16 group-hover:bg-moss" />
             </a>
          </div>
        </div>

        {/* Pillars Grid */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-12 gap-y-10 md:gap-y-16 lg:gap-y-20">
          {pillars.map((pillar, i) => (
            <motion.div 
              key={pillar.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-3 md:space-y-4 lg:space-y-6"
            >
              <div className="flex items-baseline justify-between border-b border-sand pb-3 md:pb-4">
                <span className="text-xl md:text-2xl font-serif italic text-sand">{pillar.id}</span>
                <div className="p-1.5 md:p-2 bg-bone rounded-full text-slate/40">
                  <div className="w-4 h-4 md:w-5 md:h-5">{pillar.icon}</div>
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-serif text-slate uppercase tracking-tight">
                {pillar.titleLink ? (
                  <Link href={pillar.titleLink} className="hover:text-moss transition-colors">
                    {pillar.title}
                  </Link>
                ) : (
                  pillar.title
                )}
              </h3>
              <p className="text-slate/50 font-sans text-sm font-light leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

