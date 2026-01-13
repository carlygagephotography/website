"use client";

import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Image from "next/image";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

const testimonials = [
  {
    quote: "I was worried my toddler wouldn't cooperate, but Carly was magic! She played games with him and got the best smiles. We are obsessed with these photos.",
    author: "Sarah J.",
    location: "Flower Mound",
    image: "/images/Jordan-Bryce-and-Jenson021_websize.jpg"
  },
  {
    quote: "We do the Mini Sessions every fall. It's quick, easy, and the photos are always stunning. Highly recommend for busy families!",
    author: "The Davis Family",
    location: "Frisco",
    image: "/images/marquee-2.jpg"
  },
  {
    quote: "Relaxed, professional, and so kind. We felt comfortable immediately.",
    author: "Mike & Jessica",
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
    <section className="py-16 md:py-24 lg:py-40 bg-white overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-4 md:px-16">
        <div className="flex flex-col md:flex-row justify-between items-start gap-6 md:gap-8 lg:gap-12 mb-12 md:mb-16 lg:mb-24">
          <div className="space-y-4 md:space-y-6">
            <span className="text-[9px] md:text-[10px] uppercase tracking-[0.5em] md:tracking-[0.6em] text-slate/40">Client Voices</span>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-serif leading-[0.9] tracking-tighter text-slate">
              What DFW Families <br />
              <span className="italic font-light opacity-50 text-moss">Are Saying.</span>
            </h2>
          </div>
          <div className="h-[1px] w-24 bg-sand hidden md:block mt-20" />
        </div>

        {/* Mobile: Horizontal Carousel */}
        <div className="md:hidden">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-moss/40" />
            <span className="text-[9px] uppercase tracking-[0.4em] text-slate/40">Swipe to hear more</span>
          </div>

          <div className="overflow-hidden relative">
            <div 
              ref={carouselRef}
              className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 -mx-4 px-4"
            >
              {testimonials.map((t, i) => (
                <div
                  key={t.author}
                  className="flex-shrink-0 w-[82vw] snap-center"
                >
                  <div className="flex flex-col space-y-6 group">
                    <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-bone">
                      <Image
                        src={t.image}
                        alt={`${t.author} - ${t.location} family photography testimonial`}
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                        style={{ objectPosition: "50% 20%" }}
                        sizes="82vw"
                      />
                      <div className="absolute inset-0 bg-slate/5 mix-blend-multiply opacity-20" />
                    </div>
                    <div className="space-y-4">
                      <p className="font-serif text-lg leading-relaxed text-slate/80 italic text-left">
                        "{t.quote}"
                      </p>
                      <div className="pt-3 border-t border-sand">
                        <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate text-left">{t.author}</p>
                        <p className="text-[9px] uppercase tracking-[0.2em] text-slate/40 mt-1 text-left">{t.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Scroll Progress Indicator */}
            <div className="mt-8 flex items-center gap-4">
              <div className="flex-1 h-[1px] bg-sand relative overflow-hidden">
                <motion.div 
                  style={{ 
                    scaleX: scrollXProgress,
                    transformOrigin: "left"
                  }}
                  className="absolute inset-0 bg-moss"
                />
              </div>
              <div className="flex gap-1.5 items-center">
                 <span className="text-[9px] uppercase tracking-[0.4em] text-slate/40">01</span>
                 <div className="w-4 h-[1px] bg-sand" />
                 <span className="text-[9px] uppercase tracking-[0.4em] text-slate/40">0{testimonials.length}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop: Grid Layout */}
        <div className="hidden md:grid grid-cols-1 lg:grid-cols-3 gap-12 md:gap-16 lg:gap-24">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 1 }}
              viewport={{ once: true }}
              className="flex flex-col space-y-10 group"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-bone">
                <Image
                  src={t.image}
                  alt={`${t.author} - ${t.location} family photography testimonial`}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  style={{ objectPosition: "50% 20%" }}
                />
                <div className="absolute inset-0 bg-slate/5 mix-blend-multiply opacity-20" />
              </div>
              <div className="space-y-6">
                <p className="font-serif text-2xl leading-relaxed text-slate/80 italic text-left">
                  "{t.quote}"
                </p>
                <div className="pt-4 border-t border-sand">
                  <p className="text-[11px] uppercase tracking-[0.3em] font-bold text-slate text-left">{t.author}</p>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-slate/40 mt-1 text-left">{t.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dynamic CTA */}
        <div className="mt-6 md:mt-32 pt-6 md:pt-24 border-t border-sand/30 text-center space-y-4 md:space-y-12">
           <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif text-slate tracking-tight">
             Ready to Capture <span className="italic opacity-60">Your Family's Joy?</span>
           </h3>
           <a 
              href="#contact"
              onClick={(e) => handleAnchorClick(e, "#contact")}
              className="inline-block border border-slate text-slate px-10 py-5 md:px-16 md:py-8 rounded-sm text-[10px] md:text-[11px] uppercase tracking-[0.4em] md:tracking-[0.5em] hover:bg-slate hover:text-bone transition-all duration-700 active:scale-[0.98]"
            >
              Start the Conversation
            </a>
        </div>
      </div>
    </section>
  );
}

