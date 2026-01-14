"use client";

import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

const works = [
  { 
    id: 1, 
    src: "/images/portfolio/dallas-family-session/Sidney-and-Sam-Family052.jpg", 
    size: "lg", 
    pos: "50% 25%", 
    title: "Fun in the Field", 
    cat: "Family",
    desc: "Golden hour moments with a growing family in the North Texas countryside.",
    alt: "Family photography session at Flower Mound park with kids playing and laughing",
    link: "/portfolio/dallas-family-session"
  },
  { 
    id: 2, 
    src: "/images/portfolio/davion-maternity/Davion-Maternity-033.jpg", 
    size: "sm", 
    pos: "50% 20%", 
    title: "Waiting for Baby", 
    cat: "Maternity",
    desc: "Expecting joy in Frisco.",
    alt: "Maternity photography session in Frisco Texas",
    link: "/portfolio/dallas-maternity-session"
  },
  { 
    id: 4, 
    src: "/images/portfolio/haley-trent-baby-announcement/Haley-and-Trent-Baby-Announcement016.jpg", 
    size: "lg", 
    pos: "50% 40%", 
    title: "The Big News", 
    cat: "Announcements",
    desc: "Sharing the surprise with style.",
    alt: "Baby announcement photography session",
    link: "/portfolio/dallas-baby-announcement"
  },
  {
    id: 6,
    src: "/images/portfolio/shawna-eric-mini-session/Shawna-and-Eric-mini021.jpg",
    size: "sm",
    pos: "50% 20%",
    title: "Seasonal Minis",
    cat: "Minis",
    desc: "Quick updates, timeless memories.",
    alt: "Fall mini session family photography Dallas",
    link: "/portfolio/dallas-mini-session"
  },
];

export function Portfolio() {
  const { handleAnchorClick } = useSmoothScroll();
  const carouselRef = useRef<HTMLDivElement>(null);
  
  const { scrollXProgress } = useScroll({
    container: carouselRef,
  });
  
  return (
    <section id="portfolios" className="py-16 md:py-24 lg:py-40 bg-slate overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-4 md:px-16 space-y-12 md:space-y-20 lg:space-y-32">
        
        {/* Editorial Header */}
        <div className="max-w-4xl space-y-6 md:space-y-8">
          <span className="text-[9px] md:text-[10px] uppercase tracking-[0.5em] md:tracking-[0.6em] text-bone/40 block">The Portfolio</span>
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-[8vw] font-serif leading-[0.85] md:leading-[0.8] text-bone tracking-tighter">
            Galleries Full <br />
            <span className="italic font-light opacity-50 text-moss">of Life.</span>
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-bone/60 font-sans font-light leading-relaxed max-w-2xl text-left">
            Real families, real moments, real joy. Every session is a celebration of what makes your family uniquely yours.
          </p>
        </div>

        {/* Mobile: Horizontal Carousel */}
        <div className="md:hidden mb-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-moss/40" />
            <span className="text-[9px] uppercase tracking-[0.4em] text-bone/40">Swipe to explore</span>
          </div>

          <div className="overflow-hidden relative">
            <div 
              ref={carouselRef}
              className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 -mx-4 px-4"
            >
              {works.map((work, i) => (
                <div
                  key={work.id}
                  className="flex-shrink-0 w-[85vw] snap-center"
                >
                  <Link href={work.link || "#"} className="block group">
                    <div className="relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden aspect-[16/10] flex">
                      {/* Left Side: Content */}
                      <div className="flex-1 p-6 flex flex-col justify-between z-10">
                        <div className="space-y-3">
                          <span className="text-[8px] font-bold tracking-[0.2em] text-moss/80 uppercase">{work.cat}</span>
                          <div className="space-y-0.5">
                            <h4 className="text-xl font-bold tracking-tight text-bone uppercase leading-none">{work.title.split(' ')[0]}</h4>
                            <h4 className="text-2xl font-bold tracking-tighter text-bone uppercase leading-none">{work.title.split(' ').slice(1).join(' ')}</h4>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2 text-moss">
                          <span className="text-[9px] font-bold uppercase tracking-widest">View Gallery</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </div>
                      </div>

                      {/* Right Side: Framed Image */}
                      <div className="w-[45%] relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-slate via-transparent to-transparent z-10" />
                        <Image
                          src={work.src}
                          alt={work.alt || work.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                          style={{ objectPosition: work.pos }}
                          sizes="40vw"
                        />
                        <div className="absolute inset-0 bg-slate/20 mix-blend-multiply" />
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>

            {/* Scroll Progress Indicator */}
            <div className="mt-8 flex items-center gap-4">
              <div className="flex-1 h-[1px] bg-white/10 relative overflow-hidden">
                <motion.div 
                  style={{ 
                    scaleX: scrollXProgress,
                    transformOrigin: "left"
                  }}
                  className="absolute inset-0 bg-moss"
                />
              </div>
              <div className="flex gap-1.5 items-center">
                 <span className="text-[9px] uppercase tracking-[0.4em] text-bone/40">01</span>
                 <div className="w-4 h-[1px] bg-white/10" />
                 <span className="text-[9px] uppercase tracking-[0.4em] text-bone/40">0{works.length}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop: Player Card Grid */}
        <div className="hidden md:grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
           {works.map((work, i) => (
             <motion.div
                key={work.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group"
             >
                <Link href={work.link || "#"} className="block relative bg-white/5 border border-white/10 rounded-3xl overflow-hidden aspect-[16/10] flex hover:border-moss/30 transition-all duration-500 hover:shadow-2xl hover:shadow-moss/5">
                  {/* Left Side: Content */}
                  <div className="flex-1 p-8 lg:p-10 flex flex-col justify-between z-10">
                    <div className="space-y-4">
                      <span className="text-[10px] font-bold tracking-[0.3em] text-moss/80 uppercase">{work.cat}</span>
                      <div className="space-y-1">
                        <h4 className="text-2xl lg:text-3xl font-bold tracking-tight text-bone uppercase leading-none">{work.title.split(' ')[0]}</h4>
                        <h4 className="text-4xl lg:text-5xl font-bold tracking-tighter text-bone uppercase leading-none">{work.title.split(' ').slice(1).join(' ')}</h4>
                      </div>
                      <p className="text-sm text-bone/40 font-sans font-light leading-relaxed max-w-[180px]">
                        {work.desc}
                      </p>
                    </div>
                    
                    <div className="flex items-center gap-3 text-moss group-hover:gap-5 transition-all duration-500">
                      <span className="text-[10px] font-bold uppercase tracking-[0.3em]">View Story</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Right Side: Framed Image */}
                  <div className="w-[45%] relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-slate via-transparent to-transparent z-10" />
                    <Image
                      src={work.src}
                      alt={work.alt || work.title}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                      style={{ objectPosition: work.pos }}
                      sizes="40vw"
                    />
                    <div className="absolute inset-0 bg-slate/20 mix-blend-multiply" />
                  </div>

                  {/* Top Right Label (Like Player Status) */}
                  <div className="absolute top-8 right-8 z-20">
                    <div className="h-2 w-2 rounded-full bg-moss shadow-[0_0_10px_rgba(134,151,121,0.8)] animate-pulse" />
                  </div>
                </Link>
             </motion.div>
           ))}
        </div>

        {/* Lead Gen Callout */}
        <div className="pt-6 md:pt-20 text-center flex flex-col items-center space-y-4 md:space-y-12">
           <div className="h-[1px] w-40 bg-white/10" />
           
           <div className="space-y-4 md:space-y-8">
              <h3 className="text-3xl md:text-4xl font-serif text-bone tracking-tight max-w-xl mx-auto">
                Ready to Preserve Your <span className="italic opacity-60">Family History?</span>
              </h3>
              
              <div className="flex flex-col sm:flex-row gap-6 md:gap-8 items-center justify-center">
                <a 
                  href="#contact"
                  onClick={(e) => handleAnchorClick(e, "#contact")}
                  className="bg-bone text-slate px-10 py-5 md:px-12 md:py-6 rounded-sm text-[10px] md:text-[11px] uppercase tracking-[0.4em] md:tracking-[0.5em] hover:bg-moss hover:text-bone transition-all duration-500 active:scale-[0.98]"
                >
                  Book Your Session
                </a>
                
                <button className="group text-[11px] md:text-[12px] uppercase tracking-[0.5em] md:tracking-[0.6em] text-bone/40 hover:text-moss transition-all duration-500 flex items-center gap-4">
                  Explore All Stories
                  <span className="h-[1px] w-0 bg-moss transition-all duration-500 group-hover:w-12" />
                </button>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
}
