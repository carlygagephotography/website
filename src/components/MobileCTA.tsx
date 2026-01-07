"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar } from "lucide-react";

export function MobileCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 20% of the viewport height
      const threshold = window.innerHeight * 0.2;
      setIsVisible(window.scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToBooking = () => {
    const bookingSection = document.getElementById("booking-section");
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: "smooth" });
    } else {
      // Fallback if ID not found (e.g. at top of page)
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-6 left-4 right-4 z-50 md:hidden"
        >
          <button
            onClick={scrollToBooking}
            className="w-full flex items-center justify-between bg-charcoal text-cream px-6 py-4 rounded-full shadow-xl shadow-charcoal/20 active:scale-95 transition-transform"
          >
            <span className="font-serif text-lg tracking-wide">Book Your Session</span>
            <div className="bg-white/10 p-2 rounded-full">
               <Calendar className="w-5 h-5" />
            </div>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

