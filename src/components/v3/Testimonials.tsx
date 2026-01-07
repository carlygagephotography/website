"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

const testimonials = [
  {
    quote: "I was worried my toddler wouldn't cooperate, but Carly was magic! She played games with him and got the best smiles. We are obsessed with these photos.",
    author: "Sarah J.",
    location: "Flower Mound",
    image: "/images/marquee-1.jpg"
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
    image: "/images/marquee-4.jpg"
  }
];

export function Testimonials() {
  const { handleAnchorClick } = useSmoothScroll();
  
  return (
    <section className="py-40 bg-white overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-6 md:px-16">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-24">
          <div className="space-y-6">
            <span className="text-[10px] uppercase tracking-[0.6em] text-slate/40">Client Voices</span>
            <h2 className="text-5xl md:text-7xl font-serif leading-[0.9] tracking-tighter text-slate">
              What DFW Families <br />
              <span className="italic font-light opacity-50 text-moss">Are Saying.</span>
            </h2>
          </div>
          <div className="h-[1px] w-24 bg-sand hidden md:block mt-20" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 md:gap-24">
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
                <p className="font-serif text-2xl leading-relaxed text-slate/80 italic">
                  "{t.quote}"
                </p>
                <div className="pt-4 border-t border-sand">
                  <p className="text-[11px] uppercase tracking-[0.3em] font-bold text-slate">{t.author}</p>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-slate/40 mt-1">{t.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dynamic CTA */}
        <div className="mt-32 pt-24 border-t border-sand/30 text-center space-y-12">
           <h3 className="text-4xl md:text-5xl font-serif text-slate tracking-tight">
             Ready to Capture <span className="italic opacity-60">Your Family's Joy?</span>
           </h3>
           <a 
              href="#contact"
              onClick={(e) => handleAnchorClick(e, "#contact")}
              className="inline-block border border-slate text-slate px-16 py-8 rounded-sm text-[11px] uppercase tracking-[0.5em] hover:bg-slate hover:text-bone transition-all duration-700"
            >
              Start the Conversation
            </a>
        </div>
      </div>
    </section>
  );
}

