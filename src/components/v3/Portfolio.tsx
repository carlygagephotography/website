"use client";

import { motion } from "framer-motion";
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
  
  return (
    <section id="portfolios" className="py-16 md:py-24 lg:py-40 bg-bone overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-4 md:px-16 space-y-12 md:space-y-20 lg:space-y-32">
        
        {/* Editorial Header */}
        <div className="max-w-4xl space-y-6 md:space-y-8">
          <span className="text-[9px] md:text-[10px] uppercase tracking-[0.5em] md:tracking-[0.6em] text-slate/40 block">The Portfolio</span>
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-[8vw] font-serif leading-[0.85] md:leading-[0.8] text-slate tracking-tighter">
            Galleries Full <br />
            <span className="italic font-light opacity-50 text-moss">of Life.</span>
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-slate/60 font-sans font-light leading-relaxed max-w-2xl">
            Real families, real moments, real joy. Every session is a celebration of what makes your family uniquely yours.
          </p>
        </div>

        {/* Artistic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-12 gap-y-16 md:gap-y-32">
           {works.map((work, i) => (
             <motion.div
                key={work.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true, margin: "-100px" }}
                className={cn(
                  "relative group flex flex-col space-y-8",
                  i % 2 !== 0 ? "md:mt-32" : "" // Staggered masonry effect
                )}
             >
                {work.link ? (
                  <Link href={work.link} className="cursor-pointer">
                    <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-fog shadow-editorial">
                       <Image 
                          src={work.src} 
                          alt={work.alt || work.title} 
                          fill 
                          className="object-cover transition-transform duration-[2s] group-hover:scale-105"
                          style={{ objectPosition: work.pos }}
                          sizes="(max-width: 768px) 100vw, 50vw"
                       />
                       
                       <div className="absolute inset-0 bg-slate/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                       
                       <div className="absolute top-10 right-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white opacity-0 transition-all duration-700 group-hover:opacity-100 group-hover:rotate-45 border border-white/20">
                          <ArrowUpRight className="h-5 w-5" />
                       </div>
                    </div>
                  </Link>
                ) : (
                  <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-fog shadow-editorial">
                     <Image 
                        src={work.src} 
                        alt={work.alt || work.title} 
                        fill 
                        className="object-cover transition-transform duration-[2s] group-hover:scale-105"
                        style={{ objectPosition: work.pos }}
                        sizes="(max-width: 768px) 100vw, 50vw"
                     />
                     
                     <div className="absolute inset-0 bg-slate/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                     
                     <div className="absolute top-10 right-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white opacity-0 transition-all duration-700 group-hover:opacity-100 group-hover:rotate-45 border border-white/20">
                        <ArrowUpRight className="h-5 w-5" />
                     </div>
                  </div>
                )}
                
                <div className="space-y-4">
                   <div className="flex justify-between items-baseline">
                      {work.link ? (
                        <Link href={work.link}>
                          <h3 className="text-3xl font-serif text-slate tracking-tight hover:text-moss transition-colors">{work.title}</h3>
                        </Link>
                      ) : (
                        <h3 className="text-3xl font-serif text-slate tracking-tight">{work.title}</h3>
                      )}
                      <span className="text-[10px] uppercase tracking-[0.3em] text-slate/40">{work.cat}</span>
                   </div>
                   <p className="text-sm text-slate/50 font-sans font-light leading-relaxed max-w-sm">
                      {work.desc}
                   </p>
                </div>
             </motion.div>
           ))}
        </div>

        {/* Lead Gen Callout */}
        <div className="pt-20 text-center flex flex-col items-center space-y-12">
           <div className="h-[1px] w-40 bg-sand" />
           
           <div className="space-y-8">
              <h3 className="text-4xl font-serif text-slate tracking-tight max-w-xl mx-auto">
                Ready to Preserve Your <span className="italic opacity-60">Family History?</span>
              </h3>
              
              <div className="flex flex-col sm:flex-row gap-8 items-center justify-center">
                <a 
                  href="#contact"
                  onClick={(e) => handleAnchorClick(e, "#contact")}
                  className="bg-slate text-bone px-12 py-6 rounded-sm text-[11px] uppercase tracking-[0.5em] hover:bg-moss transition-all duration-500"
                >
                  Book Your Session
                </a>
                
                <button className="group text-[12px] uppercase tracking-[0.6em] text-slate/60 hover:text-slate transition-all duration-500 flex items-center gap-4">
                  Explore All Stories
                  <span className="h-[1px] w-0 bg-slate transition-all duration-500 group-hover:w-12" />
                </button>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
}
