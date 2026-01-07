"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "The Signature Milestone",
    description: "In-home or studio sessions focusing on the first delicate year or significant milestones. Includes full access to my curated wardrobe.",
    price: "From $850",
    image: "/images/hero-2.jpg"
  },
  {
    title: "Family Heirloom Session",
    description: "Sunset field sessions designed for laughter, movement, and genuine family connection. Best for Southlake and Frisco outdoor light.",
    price: "From $700",
    image: "/images/bento-1.jpg"
  },
  {
    title: "Maternity Story",
    description: "Celebrating the divine strength of motherhood. A dedicated session capturing the beauty of your pregnancy journey.",
    price: "From $650",
    image: "/images/bento-2.jpg"
  }
];

export function ServiceLeadGen() {
  return (
    <section id="services" className="py-32 px-6 md:px-12 bg-charcoal text-cream overflow-hidden">
      <div className="max-w-[1800px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12">
          <div className="space-y-6">
            <span className="text-[10px] uppercase tracking-[0.4em] text-gold font-bold">Offerings</span>
            <h2 className="text-6xl md:text-8xl font-serif">Tailored <br /><span className="italic text-white/40">Experiences.</span></h2>
          </div>
          <p className="max-w-md text-stone-400 font-sans text-lg font-light leading-relaxed">
            Investment in high-end photography is an investment in your family's future legacy. Every session is fully curated from styling to print.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl mb-8">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  style={{ objectPosition: "50% 20%" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-8 left-8 right-8 flex justify-between items-center transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="text-white text-xs uppercase tracking-[0.2em]">View Package</span>
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-charcoal">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-serif mb-4 flex items-center justify-between group-hover:text-gold transition-colors">
                {service.title}
                <span className="text-sm font-sans font-light text-stone-500 uppercase tracking-widest">{service.price}</span>
              </h3>
              <p className="text-stone-500 font-sans font-light text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

