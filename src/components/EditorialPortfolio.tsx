"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  { src: "/images/bento-5.jpg", size: "col-span-12 md:col-span-8", pos: "50% 20%" },
  { src: "/images/bento-3.jpg", size: "col-span-12 md:col-span-4", pos: "50% 25%" },
  { src: "/images/marquee-3.jpg", size: "col-span-12 md:col-span-4", pos: "50% 15%" },
  { src: "/images/bento-7.jpg", size: "col-span-12 md:col-span-8", pos: "50% 20%" },
];

export function EditorialPortfolio() {
  return (
    <section id="portfolio" className="py-32 px-6 md:px-12 bg-cream">
      <div className="max-w-[1800px] mx-auto space-y-24">
        
        <div className="text-center space-y-4">
          <span className="text-[10px] uppercase tracking-[0.4em] text-stone-400 block">The Gallery</span>
          <h2 className="text-6xl md:text-8xl font-serif text-charcoal tracking-tight">Recent <span className="italic font-light">Stories.</span></h2>
        </div>

        <div className="grid grid-cols-12 gap-8 md:gap-12">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className={`${img.size} relative aspect-[16/10] md:aspect-auto md:h-[70vh] rounded-[2.5rem] overflow-hidden group shadow-editorial`}
            >
              <Image 
                src={img.src} 
                alt="Portfolio" 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                style={{ objectPosition: img.pos }}
              />
              <div className="absolute inset-0 bg-black/5 mix-blend-multiply opacity-20" />
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center pt-12">
           <button className="px-12 py-6 border border-stone-200 rounded-full text-xs uppercase tracking-[0.3em] text-charcoal hover:bg-charcoal hover:text-cream transition-all duration-500">
              Explore Full Portfolio
           </button>
        </div>
      </div>
    </section>
  );
}

