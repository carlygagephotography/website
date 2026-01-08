"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "My kids are super energetic/shy. Is that okay?",
    answer: "Absolutely! I have years of experience working with all personality types. I follow their lead, play games, and take breaks. The best photos often happen when kids are just being themselves."
  },
  {
    question: "Do you offer Mini Sessions year-round?",
    answer: "I offer Mini Sessions on specific dates each season (Spring and Fall). Contact me to grab a spot before they sell out!"
  },
  {
    question: "What should we wear?",
    answer: "I recommend comfortable, coordinating outfits that make you feel like your best self. I can discuss styling options during your consultation."
  },
  {
    question: "Do you serve other areas like Frisco or Southlake?",
    answer: "Yes! While I'm based in Flower Mound, I serve the entire DFW metroplex including Southlake, Plano, Highland Park, and McKinney. Sessions are available throughout these areas."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-16 md:py-24 lg:py-40 px-4 md:px-16 bg-bone overflow-hidden pb-24 md:pb-16 lg:pb-40">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-24">
        
        {/* FAQ Header */}
        <div className="lg:col-span-5 space-y-4 md:space-y-6 lg:space-y-8 lg:sticky lg:top-40 h-fit">
          <span className="text-[9px] md:text-[10px] uppercase tracking-[0.5em] md:tracking-[0.6em] text-slate/40 block">The Specifics</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-serif leading-[0.9] tracking-tighter text-slate">
            Common <br />
            <span className="italic font-light opacity-50 text-clay">Questions.</span>
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-slate/60 font-sans font-light leading-relaxed max-w-sm text-left">
            Everything you need to know about preparing for your legacy portrait session.
          </p>
        </div>

        {/* FAQ Items - Accordion on mobile, expanded on desktop */}
        <div className="lg:col-span-7 space-y-3 md:space-y-8 lg:space-y-12 lg:space-y-20">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.article
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1, duration: 1 }}
                viewport={{ once: true }}
                className="border-b border-sand/30 md:border-0 pb-4 md:pb-0"
              >
                {/* Mobile: Accordion */}
                <div className="md:hidden">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 py-4 text-left group"
                  >
                    <div className="flex items-start gap-3 flex-1">
                      <span className="text-lg font-serif italic text-sand mt-1 flex-shrink-0">0{i + 1}</span>
                      <h3 className="text-lg font-serif text-slate group-hover:text-clay transition-colors duration-500 text-left flex-1">
                        {faq.question}
                      </h3>
                    </div>
                    <div className="flex-shrink-0 p-1">
                      {isOpen ? (
                        <Minus className="w-5 h-5 text-slate/40" />
                      ) : (
                        <Plus className="w-5 h-5 text-slate/40" />
                      )}
                    </div>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="text-sm text-slate/60 font-sans font-light leading-relaxed pl-8 pb-4 text-left">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Desktop: Expanded List */}
                <div className="hidden md:block space-y-4 md:space-y-6 group">
                  <div className="flex items-start gap-4 md:gap-6 lg:gap-8">
                    <span className="text-xs md:text-sm font-serif italic text-sand mt-1 flex-shrink-0">0{i + 1}</span>
                    <div className="space-y-3 md:space-y-4">
                      <h3 className="text-xl md:text-2xl font-serif text-slate group-hover:text-clay transition-colors duration-500 text-left">
                        {faq.question}
                      </h3>
                      <p className="text-sm md:text-base text-slate/60 font-sans font-light leading-relaxed text-left">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

      </div>
    </section>
  );
}

