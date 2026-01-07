"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const reviews = [
  {
    text: "Carly has a gift for capturing the chaos of family life and making it look like art. I cried when I saw our gallery.",
    author: "Sarah M.",
    location: "Southlake, TX"
  },
  {
    text: "Absolutely stunning work. The session felt so natural, and the photos are hanging all over our home now.",
    author: "Emily R.",
    location: "Frisco, TX"
  },
  {
    text: "Worth every penny. We've done three sessions with her and each one gets better.",
    author: "Jessica T.",
    location: "Flower Mound, TX"
  },
  {
    text: "The styling advice was a game changer. I never know what to wear, but she made it so easy.",
    author: "Amanda K.",
    location: "Highland Park, TX"
  },
];

const images = [
  "/images/marquee-1.jpg",
  "/images/marquee-2.jpg",
  "/images/marquee-3.jpg",
  "/images/marquee-4.jpg",
  "/images/marquee-5.jpg",
];

export function ProofSection() {
  return (
    <section className="py-24 bg-warm-sand overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-12 text-center">
        <h2 className="text-3xl md:text-5xl font-serif text-charcoal mb-4">
          Loved by DFW Families
        </h2>
        <div className="h-1 w-20 bg-moss mx-auto rounded-full" />
      </div>

      {/* Marquee Container */}
      <div className="relative flex w-full overflow-hidden mask-linear-fade">
         <motion.div
            className="flex gap-8 items-center whitespace-nowrap"
            animate={{ x: [0, -1000] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 25, 
            }}
          >
            {/* Repeated Content Block to ensure seamless loop */}
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-8 items-center">
                {images.map((src, imgIndex) => (
                  <div key={`img-${i}-${imgIndex}`} className="relative w-[300px] h-[400px] flex-shrink-0 rounded-lg overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
                     <Image
                      src={src}
                      alt="Family Portfolio"
                      fill
                      className="object-cover"
                      sizes="300px"
                    />
                  </div>
                ))}
                {reviews.map((review, revIndex) => (
                   <div key={`rev-${i}-${revIndex}`} className="w-[300px] h-[300px] flex-shrink-0 flex flex-col justify-center p-8 bg-white border border-stone-200 rounded-lg whitespace-normal">
                      <p className="font-serif text-xl text-charcoal italic mb-4">"{review.text}"</p>
                      <div className="mt-auto">
                        <p className="font-sans font-bold text-sm uppercase tracking-wide text-moss">{review.author}</p>
                        <p className="font-sans text-xs text-stone-400">{review.location}</p>
                      </div>
                   </div>
                ))}
              </div>
            ))}
          </motion.div>
      </div>
    </section>
  );
}

