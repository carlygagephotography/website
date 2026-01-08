"use client";

import { ReactLenis } from "@studio-freight/react-lenis";
import { Navigation } from "@/components/v3/Navigation";
import { Footer } from "@/components/v3/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, ArrowLeft, X } from "lucide-react";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { FloatingInquiryForm } from "@/components/v3/FloatingInquiryForm";
import { StickyMobileBar } from "@/components/v3/StickyMobileBar";

// Get actual images from the folder - sorted in shooting order (numerical)
const imageNumbers = [
  "002", "003", "004", "009", "010", "011", "012", "013", "020", "021",
  "022", "023", "024", "025", "027", "028", "029", "030", "031", "032",
  "033", "035", "036", "038", "039", "040", "042", "045", "046", "047",
  "048", "049", "050", "051", "052", "054"
].sort((a, b) => parseInt(a) - parseInt(b)); // Ensure numerical order

const images = imageNumbers.map(num => ({
  src: `/images/portfolio/davion-maternity/Davion-Maternity-${num}.jpg`,
  alt: `Dallas maternity photography session showcasing beautiful pregnancy portraits in natural light - Image ${num}`
}));

export default function DallasMaternitySessionPage() {
  const { scrollToSection } = useSmoothScroll();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <ReactLenis root>
      <main className="min-h-screen selection:bg-slate selection:text-bone bg-bone pb-16 md:pb-0">
        <Navigation />
        <StickyMobileBar />
        <FloatingInquiryForm />

        {/* Hero Section */}
        <section className="pt-20 md:pt-32 pb-8 md:pb-20 px-4 md:px-16">
          <div className="max-w-[1800px] mx-auto">
            <Link 
              href="/#portfolios"
              className="inline-flex items-center gap-2 md:gap-4 text-slate/60 hover:text-slate transition-colors mb-6 md:mb-12 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="text-[8px] md:text-[10px] uppercase tracking-[0.3em]">Back to Portfolio</span>
            </Link>

            <div className="space-y-4 md:space-y-8 mb-8 md:mb-16">
              <span className="text-[8px] md:text-[10px] uppercase tracking-[0.5em] md:tracking-[0.6em] text-slate/40 block">Maternity Session</span>
              <h1 className="text-3xl sm:text-4xl md:text-7xl font-serif leading-[0.9] tracking-tighter text-slate">
                Dallas Maternity <br />
                <span className="italic font-light opacity-50 text-moss">Photography.</span>
              </h1>
              <p className="text-sm md:text-xl text-slate/60 font-sans font-light leading-relaxed max-w-2xl text-left">
                A beautiful maternity session celebrating the journey of expecting. Capturing the glow, the anticipation, and the love that comes with growing a family in the Dallas-Fort Worth area.
              </p>
            </div>
          </div>
        </section>

        {/* Tight Editorial Masonry Grid */}
        <section className="px-4 md:px-16 pb-8 md:pb-20">
          <div className="max-w-[1800px] mx-auto">
            <div className="columns-1 md:columns-2 lg:columns-3 gap-2 md:gap-4">
              {images.map((image, i) => (
                <div
                  key={image.src}
                  className="relative overflow-hidden rounded-sm bg-fog group cursor-pointer break-inside-avoid mb-2 md:mb-4"
                  onClick={() => setSelectedImage(image.src)}
                >
                  <div className="relative w-full">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={1200}
                      height={1800}
                      className="w-full h-auto object-contain transition-all duration-500 group-hover:scale-[1.01]"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      loading="eager"
                      priority={i < 6}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    {/* Hover indicator - Hidden on mobile, shown on desktop */}
                    <div className="absolute top-2 right-2 md:top-3 md:right-3 w-6 h-6 md:w-8 md:h-8 rounded-full bg-white/90 backdrop-blur-sm opacity-0 md:group-hover:opacity-100 transition-all duration-300 flex items-center justify-center shadow-md">
                      <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-slate" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox Modal */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-slate/95 backdrop-blur-md flex items-center justify-center p-3 md:p-6 cursor-pointer"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-7xl max-h-[95vh] md:max-h-[90vh] w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-2 right-2 md:top-4 md:right-4 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 active:bg-white/40 transition-all flex items-center justify-center text-white shadow-xl touch-manipulation"
              >
                <X className="w-5 h-5 md:w-6 md:h-6" />
              </button>
              <Image
                src={selectedImage}
                alt="Dallas maternity photography"
                width={2000}
                height={3000}
                className="max-w-full max-h-[95vh] md:max-h-[90vh] w-auto h-auto object-contain rounded-sm shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}

        {/* CTA Section */}
        <section className="py-12 md:py-32 px-4 md:px-16 bg-white border-t border-sand">
          <div className="max-w-[1200px] mx-auto text-center space-y-6 md:space-y-12">
            <div className="space-y-4 md:space-y-6">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-serif text-slate tracking-tight">
                Ready to Capture <br />
                <span className="italic opacity-60">Your Maternity Journey?</span>
              </h2>
              <p className="text-sm md:text-lg text-slate/60 font-sans font-light max-w-xl mx-auto text-left md:text-center">
                Let's create beautiful memories of this special time. Fill out the form below and I'll get back to you within 24 hours to discuss your session.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 items-center justify-center pt-4 md:pt-8">
              <Link
                href="/#contact"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "/#contact";
                }}
                className="group relative bg-slate text-bone px-8 py-4 md:px-12 md:py-6 rounded-sm text-[9px] md:text-[11px] uppercase tracking-[0.4em] md:tracking-[0.5em] overflow-hidden transition-all hover:pr-12 md:hover:pr-16 inline-flex items-center gap-3 md:gap-4 active:scale-[0.98] w-full sm:w-auto justify-center"
              >
                <span className="relative z-10">Inquire About Your Session</span>
                <ArrowRight className="w-3 h-3 md:w-4 md:h-4 relative z-10 transition-transform group-hover:translate-x-1" />
                <div className="absolute inset-0 bg-moss transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </ReactLenis>
  );
}
