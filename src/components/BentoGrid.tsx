"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

const items = [
  {
    id: 1,
    title: "The Golden Hour",
    category: "Family",
    src: "/images/bento-1.jpg", // Kellee Family
    aspect: "aspect-[4/5]", // Portrait
    position: "50% 30%", // Face focus
  },
  {
    id: 2,
    title: "Quiet Moments",
    category: "Maternity",
    src: "/images/bento-2.jpg",
    aspect: "aspect-[3/2]", // Landscape
    position: "50% 20%",
  },
  {
    id: 3,
    title: "Holiday Traditions",
    category: "Seasonal",
    src: "/images/bento-3.jpg",
    aspect: "aspect-[3/4]",
    position: "50% 25%",
  },
  {
    id: 5,
    title: "Generations",
    category: "Extended Family",
    src: "/images/bento-5.jpg",
    aspect: "aspect-square",
    position: "50% 20%",
  },
  {
    id: 4,
    title: "New Beginnings",
    category: "Newborn",
    src: "/images/bento-4.jpg",
    aspect: "aspect-[4/5]",
    position: "50% 40%", // Baby is usually lower
  },
   {
    id: 7,
    title: "Candid Joy",
    category: "Lifestyle",
    src: "/images/bento-7.jpg",
    aspect: "aspect-[3/2]",
    position: "50% 20%",
  },
];

export function BentoGrid() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={containerRef} className="py-32 px-4 md:px-8 bg-charcoal text-cream overflow-hidden">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div>
            <h2 className="text-[10vw] md:text-8xl font-serif leading-[0.8]">Curated</h2>
            <h2 className="text-[10vw] md:text-8xl font-serif italic text-white/50 leading-[0.8] ml-12">Stories</h2>
          </div>
          <p className="text-stone-400 font-sans max-w-sm text-lg leading-relaxed">
            Every session is a unique narrative, woven together with light, laughter, and genuine connection.
          </p>
        </div>

        {/* Masonry-style Layout (CSS Columns for true flow) */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="break-inside-avoid relative group mb-8"
            >
              <div className={cn("relative w-full overflow-hidden rounded-sm", item.aspect)}>
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0 grayscale-[20%]"
                  style={{ objectPosition: item.position }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
                {/* Minimal Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
              </div>

              <div className="flex justify-between items-start mt-4 opacity-70 group-hover:opacity-100 transition-opacity">
                <span className="text-xs uppercase tracking-widest">{item.title}</span>
                <span className="text-xs font-serif italic text-stone-400">{item.category}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
