"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 200]); // Subtler parallax
  const textY = useTransform(scrollY, [0, 500], [0, 100]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "/images/hero-3.jpg", // The holiday/warm one usually has good composition
    "/images/hero-1.jpg", 
    "/images/hero-2.jpg", 
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div ref={containerRef} className="relative w-full h-[95vh] overflow-hidden bg-stone-900">
      
      {/* Background Images */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }} // Crossfade
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={images[currentIndex]}
              alt="Carly Gage Photography"
              fill
              className="object-cover"
              // CRITICAL FIX: Focus on the top-center 25% mark where faces usually are
              style={{ objectPosition: "50% 25%" }}
              priority
              quality={90}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Editorial Layout: Bottom Aligned */}
      <div className="absolute inset-0 z-10 flex flex-col justify-end pb-20 px-6 md:px-12 max-w-[1400px] mx-auto w-full pointer-events-none">
        <motion.div 
          style={{ y: textY, opacity }}
          className="space-y-4"
        >
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="inline-flex items-center gap-3 mb-4"
          >
            <div className="h-[1px] w-12 bg-white/60" />
            <span className="text-white/80 uppercase tracking-[0.3em] text-xs font-sans">Est. 2024 • Dallas, TX</span>
          </motion.div>

          {/* Headline - Big & Bold */}
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
            className="text-[12vw] leading-[0.85] font-serif text-cream mix-blend-overlay opacity-90 tracking-tighter"
          >
            Heirlooms
          </motion.h1>
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8, ease: "easeOut" }}
            className="text-[12vw] leading-[0.85] font-serif text-white tracking-tighter ml-[10vw]"
          >
            <span className="italic font-light opacity-90">Not JPEGs</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="text-white/80 font-sans max-w-md ml-[10vw] mt-8 text-lg md:text-xl font-light leading-relaxed"
          >
            Capturing the honest, messy, beautiful chaos of family life. <br />
            Serving Southlake, Highland Park, and beyond.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}
