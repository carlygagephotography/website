"use client";

import { motion } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    question: "My kids are super energetic/shy. Is that okay?",
    answer: "Absolutely! I have years of experience working with all personality types. We follow their lead, play games, and take breaks. The best photos often happen when kids are just being themselves."
  },
  {
    question: "Do you offer Mini Sessions year-round?",
    answer: "We offer Mini Sessions on specific dates each season (Spring and Fall). Contact us to grab a spot before they sell out!"
  },
  {
    question: "What should we wear?",
    answer: "I recommend comfortable, coordinating outfits that make you feel like your best self. We can discuss styling options during your consultation."
  },
  {
    question: "Do you serve other areas like Frisco or Southlake?",
    answer: "Yes! While we are based in Flower Mound, we serve the entire DFW metroplex including Southlake, Plano, Highland Park, and McKinney. Sessions are available throughout these areas."
  }
];

export function FAQ() {
  return (
    <section id="faq" className="py-16 md:py-24 lg:py-40 px-4 md:px-16 bg-bone overflow-hidden">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-24">
        
        {/* FAQ Header */}
        <div className="lg:col-span-5 space-y-4 md:space-y-6 lg:space-y-8 lg:sticky lg:top-40 h-fit">
          <span className="text-[9px] md:text-[10px] uppercase tracking-[0.5em] md:tracking-[0.6em] text-slate/40 block">The Specifics</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-serif leading-[0.9] tracking-tighter text-slate">
            Common <br />
            <span className="italic font-light opacity-50 text-clay">Questions.</span>
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-slate/60 font-sans font-light leading-relaxed max-w-sm">
            Everything you need to know about preparing for your legacy portrait session.
          </p>
        </div>

        {/* FAQ Items - Not an accordion, more like an editorial list */}
        <div className="lg:col-span-7 space-y-8 md:space-y-12 lg:space-y-20">
          {faqs.map((faq, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1, duration: 1 }}
              viewport={{ once: true }}
              className="space-y-4 md:space-y-6 group"
            >
              <div className="flex items-start gap-4 md:gap-6 lg:gap-8">
                <span className="text-xs md:text-sm font-serif italic text-sand mt-1 flex-shrink-0">0{i + 1}</span>
                <div className="space-y-3 md:space-y-4">
                  <h3 className="text-xl md:text-2xl font-serif text-slate group-hover:text-clay transition-colors duration-500">
                    {faq.question}
                  </h3>
                  <p className="text-sm md:text-base text-slate/60 font-sans font-light leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}

