"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import { ICP_CONTENT } from "@/data/icp-content";

// Convert ICP objections to FAQ format + add logistics questions
const icpFaqs = ICP_CONTENT.flatMap(persona => 
  persona.objections.map(obj => ({
    question: obj.objection,
    answer: obj.solutionNarrative
  }))
);

const logisticsFaqs = [
  {
    question: "Do you offer Mini Sessions year-round?",
    answer: "I offer Mini Sessions on specific dates each season, typically in Spring and Fall when the Texas weather and natural light are at their most beautiful. These limited sessions fill up quickly, so I recommend reaching out as soon as dates are announced to secure your preferred time slot."
  },
  {
    question: "Do you serve other areas like Frisco, Southlake, or Highland Park?",
    answer: "Yes! While I'm based in Flower Mound, I serve the entire DFW metroplex including Southlake, Frisco, Plano, Highland Park, McKinney, Prosper, Coppell, Colleyville, and Grapevine. I carefully select locations in each area that provide the best backdrops for your family's unique style and vision."
  }
];

// Combine ICP-driven FAQs with logistics, prioritizing the most common objections
const faqs = [
  ...icpFaqs.slice(0, 5), // First 5 ICP objections
  ...logisticsFaqs
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-12 md:py-20 lg:py-32 px-4 md:px-16 bg-bone overflow-hidden">
      <div className="max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
        
        {/* FAQ Header - Smaller and tighter */}
        <div className="lg:col-span-4 space-y-4 lg:sticky lg:top-32 h-fit">
          <span className="text-[9px] md:text-[10px] uppercase tracking-[0.5em] md:tracking-[0.6em] text-slate/40 block">The Specifics</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif leading-[0.9] tracking-tighter text-slate">
            Common <br />
            <span className="italic font-light opacity-50 text-clay">Questions.</span>
          </h2>
          <p className="text-sm md:text-base text-slate/60 font-sans font-light leading-relaxed max-w-xs text-left">
            Everything you need to know about your portrait experience.
          </p>
        </div>

        {/* FAQ Items - Tighter Accordion */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.8 }}
                viewport={{ once: true }}
                className="border-b border-sand/20 h-fit"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 py-5 md:py-6 text-left group"
                >
                  <div className="flex items-start gap-3 flex-1">
                    <span className="text-xs font-serif italic text-sand mt-1 flex-shrink-0">0{i + 1}</span>
                    <h3 className="text-sm md:text-base font-serif text-slate/80 group-hover:text-clay transition-colors duration-500 text-left flex-1">
                      {faq.question}
                    </h3>
                  </div>
                  <div className="flex-shrink-0 p-1">
                    <div className={`w-5 h-5 flex items-center justify-center border border-sand/50 rounded-full group-hover:border-clay/50 transition-all duration-500 ${isOpen ? 'bg-clay border-clay rotate-180' : ''}`}>
                      {isOpen ? (
                        <Minus className="w-3 h-3 text-white" />
                      ) : (
                        <Plus className="w-3 h-3 text-slate/40" />
                      )}
                    </div>
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pl-7 pb-6">
                        <p className="text-xs md:text-sm text-slate/50 font-sans font-light leading-relaxed text-left">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </div>

      </div>
    </section>
  );
}

