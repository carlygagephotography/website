"use client";

import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Image from "next/image";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

const testimonials = [
  {
    quote: "I was worried my toddler wouldn't cooperate, but Carly was magic! She played games with him and got the best smiles. We are obsessed with these photos.",
    author: "Jordan J.",
    location: "Flower Mound",
    image: "/images/Jordan-Bryce-and-Jenson021_websize.jpg"
  },
  {
    quote: "We do the Mini Sessions every fall. It's quick, easy, and the photos are always stunning. Highly recommend for busy families!",
    author: "Shawna B.",
    location: "Frisco",
    image: "/images/portfolio/shawna-eric-mini-session/Shawna-and-Eric-mini010.jpg"
  },
  {
    quote: "Relaxed, professional, and so kind. We felt comfortable immediately.",
    author: "Tiffany T.",
    location: "Southlake",
    image: "/images/tiff-holiday-photos017.jpg"
  }
];

export function Testimonials() {
  const { handleAnchorClick } = useSmoothScroll();
  const carouselRef = useRef<HTMLDivElement>(null);
  
  const { scrollXProgress } = useScroll({
    container: carouselRef,
  });
  
  return (
    <section className="py-16 md:py-24 lg:py-40 bg-slate overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-4 md:px-16">
        <div className="flex flex-col md:flex-row justify-between items-start gap-6 md:gap-8 lg:gap-12 mb-12 md:mb-16 lg:mb-24">
          <div className="space-y-4 md:space-y-6">
            <span className="text-[9px] md:text-[10px] uppercase tracking-[0.5em] md:tracking-[0.6em] text-bone/40">Client Voices</span>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-serif leading-[0.9] tracking-tighter text-bone">
              What DFW Families <br />
              <span className="italic font-light opacity-50 text-moss">Are Saying.</span>
            </h2>
          </div>
          <div className="h-[1px] w-24 bg-moss/30 hidden md:block mt-20" />
        </div>

        {/* Mobile: Horizontal Carousel */}
        <div className="md:hidden">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-moss/40" />
            <span className="text-[9px] uppercase tracking-[0.4em] text-bone/40">Swipe to hear more</span>
          </div>

          <div className="overflow-hidden relative">
            <div 
              ref={carouselRef}
              className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 -mx-4 px-4"
            >
              {testimonials.map((t, i) => (
                <div
                  key={t.author}
                  className="flex-shrink-0 w-[85vw] snap-center"
                >
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden aspect-[16/10] flex group"
                  >
                    {/* Left Side: Content */}
                    <div className="flex-1 p-6 flex flex-col justify-between z-10">
                      <div className="space-y-3">
                        <span className="text-[8px] font-bold tracking-[0.2em] text-moss/80 uppercase">Real Client</span>
                        <div className="space-y-0.5">
                          <h4 className="text-xl font-bold tracking-tight text-bone uppercase leading-none">{t.author.split(' ')[0]}</h4>
                          <h4 className="text-2xl font-bold tracking-tighter text-bone uppercase leading-none">{t.author.split(' ')[1] || ""}</h4>
                        </div>
                        <p className="text-[9px] font-medium tracking-widest text-bone/40 uppercase">{t.location} • DFW</p>
                      </div>
                      
                      <div className="relative">
                        <div className="absolute -left-2 -top-2 text-moss/20 text-4xl font-serif">"</div>
                        <p className="text-[11px] leading-relaxed text-bone/70 font-sans italic relative z-10 pr-2 line-clamp-4">
                          {t.quote}
                        </p>
                      </div>
                    </div>

                    {/* Right Side: Framed Image */}
                    <div className="w-[45%] relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-slate via-transparent to-transparent z-10" />
                      <Image
                        src={t.image}
                        alt={`${t.author} testimonial`}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        style={{ objectPosition: "50% 20%" }}
                        sizes="40vw"
                      />
                      <div className="absolute inset-0 bg-slate/20 mix-blend-multiply" />
                    </div>
                  </motion.div>
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
                 <span className="text-[9px] uppercase tracking-[0.4em] text-bone/40">0{testimonials.length}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop: Grid Layout */}
        <div className="hidden md:grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="relative bg-white/5 border border-white/10 rounded-3xl overflow-hidden aspect-[16/10] flex group hover:border-moss/30 transition-colors duration-500"
            >
              {/* Left Side: Content */}
              <div className="flex-1 p-8 lg:p-10 flex flex-col justify-between z-10">
                <div className="space-y-4">
                  <span className="text-[10px] font-bold tracking-[0.3em] text-moss/80 uppercase">Real Client</span>
                  <div className="space-y-1">
                    <h4 className="text-2xl lg:text-3xl font-bold tracking-tight text-bone uppercase leading-none">{t.author.split(' ')[0]}</h4>
                    <h4 className="text-4xl lg:text-5xl font-bold tracking-tighter text-bone uppercase leading-none">{t.author.split(' ')[1] || ""}</h4>
                  </div>
                  <p className="text-[11px] font-medium tracking-widest text-bone/40 uppercase">{t.location} • DFW</p>
                </div>
                
                <div className="relative pt-6">
                  <div className="absolute -left-4 -top-0 text-moss/20 text-6xl font-serif">"</div>
                  <p className="text-sm lg:text-base leading-relaxed text-bone/70 font-sans italic relative z-10 pr-4">
                    {t.quote}
                  </p>
                </div>
              </div>

              {/* Right Side: Framed Image */}
              <div className="w-[45%] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-slate via-transparent to-transparent z-10" />
                <Image
                  src={t.image}
                  alt={`${t.author} testimonial`}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  style={{ objectPosition: "50% 20%" }}
                />
                <div className="absolute inset-0 bg-slate/20 mix-blend-multiply" />
              </div>

              {/* Decorative Value Badge (Like "Trade Value") */}
              <div className="absolute bottom-6 right-6 z-20 bg-moss/90 text-bone text-[9px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                Client Fav
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dynamic CTA */}
        <div className="mt-6 md:mt-32 pt-6 md:pt-24 border-t border-white/10 text-center space-y-4 md:space-y-12">
           <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif text-bone tracking-tight">
             Ready to Capture <span className="italic opacity-60">Your Family's Joy?</span>
           </h3>
           <a 
              href="#contact"
              onClick={(e) => handleAnchorClick(e, "#contact")}
              className="inline-block bg-bone text-slate px-10 py-5 md:px-16 md:py-8 rounded-sm text-[10px] md:text-[11px] uppercase tracking-[0.4em] md:tracking-[0.5em] hover:bg-moss hover:text-bone transition-all duration-700 active:scale-[0.98]"
            >
              Start the Conversation
            </a>
        </div>
      </div>
    </section>
  );
}

