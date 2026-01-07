"use client";

import { motion } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    question: "Do you serve areas outside of Flower Mound?",
    answer: "Yes! While we are based in Flower Mound, we serve families throughout the DFW metroplex including Frisco, Southlake, Highland Park, Plano, and surrounding areas. Sessions are available in these locations."
  },
  {
    question: "When is the best time to book our family session?",
    answer: "We recommend booking at least 2-3 months in advance, especially for weekend sunset sessions. Our calendar fills up quickly, and this lead time allows us to properly consult on styling and location selection for your custom portrait experience."
  },
  {
    question: "What should we wear to our family photoshoot?",
    answer: "We recommend 'Earthy Luxury' tones—deep moss greens, warm sands, terracottas, and soft creams. Avoid neon colors or large logos. Upon booking, you will receive a curated styling guide and access to our client wardrobe for moms and babies."
  },
  {
    question: "Do you offer digital files or printed albums?",
    answer: "Our focus is on heirlooms. Every signature session includes a set of high-resolution digital files, but we specialize in designing custom fine-art albums and gallery walls for your home. You shouldn't have to worry about printing your own photos."
  }
];

export function FAQSection() {
  return (
    <section className="py-24 px-4 bg-sand border-t border-stone-200">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-charcoal mb-4">Common Questions</h2>
          <p className="text-stone-600 font-sans">Everything you need to know about your session.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group border border-stone-300 rounded-2xl bg-white/50 overflow-hidden hover:border-moss/50 transition-colors"
            >
              <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-charcoal">
                  <h3 className="text-lg font-serif font-medium group-hover:text-moss transition-colors">
                    {faq.question}
                  </h3>
                  <div className="relative h-5 w-5 shrink-0">
                     <Plus className="absolute inset-0 h-5 w-5 opacity-100 transition duration-300 group-open:rotate-45 text-moss" />
                  </div>
                </summary>
                <div className="px-6 pb-6 text-stone-600 font-sans leading-relaxed">
                  <p>{faq.answer}</p>
                </div>
              </details>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

