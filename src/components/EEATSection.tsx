"use client";

import { motion } from "framer-motion";
import { Award, Camera, Heart, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Family Artistry",
    description: "Extensive background in capturing family dynamics, ensuring every interaction is documented with master-level care."
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Editorial Excellence",
    description: "Published and recognized for a timeless, natural aesthetic that prioritizes genuine connection over stiff posing."
  },
  {
    icon: <Camera className="w-6 h-6" />,
    title: "High-End Equipment",
    description: "Utilizing top-tier medium-format digital gear to ensure every print is a sharp, museum-quality heirloom."
  }
];

export function EEATSection() {
  return (
    <section id="experience" className="py-32 px-6 md:px-12 bg-white">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        
        <div className="space-y-12">
          <div className="space-y-6">
            <h2 className="text-5xl md:text-6xl font-serif text-charcoal leading-tight">
              A Legacy of <br />
              <span className="italic text-stone-400">Mastery</span> and Care.
            </h2>
            <p className="text-lg text-stone-500 font-sans font-light leading-relaxed max-w-xl">
              Carly Gage isn't just a photographer; she is a curator of family stories. With over a decade of experience in the DFW metroplex, her approach combines technical perfection with a deep empathy for the family journey.
            </p>
          </div>

          <div className="space-y-10">
            {features.map((feature, i) => (
              <motion.div 
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-6 items-start"
              >
                <div className="p-4 bg-stone-50 rounded-2xl text-charcoal border border-stone-100">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-serif text-xl mb-2">{feature.title}</h3>
                  <p className="text-sm text-stone-400 font-sans leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-float">
            <img 
              src="/images/bento-4.jpg" 
              alt="Professional Family Photography"
              className="w-full h-full object-cover"
              style={{ objectPosition: "50% 40%" }}
            />
          </div>
          {/* Accent block */}
          <div className="absolute -z-10 -bottom-10 -right-10 w-full h-full border border-stone-200 rounded-[3rem]" />
        </div>

      </div>
    </section>
  );
}

