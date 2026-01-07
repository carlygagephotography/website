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

// Images sorted in shooting order
const imageNumbers = [
  "001", "002", "003", "004", "005", "006", "007", "008", "009", "010",
  "011", "012", "013", "014", "015", "016", "017", "018", "019", "020",
  "021", "022", "023", "024"
];

const images = imageNumbers.map(num => ({
  src: `/images/portfolio/haley-trent-baby-announcement/Haley-and-Trent-Baby-Announcement${num}.jpg`,
  alt: `Dallas baby announcement photography showcasing beautiful pregnancy reveal portraits - Image ${num}`
}));

export default function DallasBabyAnnouncementPage() {
  const { scrollToSection } = useSmoothScroll();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <ReactLenis root>
      <main className="min-h-screen selection:bg-slate selection:text-bone bg-bone">
        <Navigation />
        <FloatingInquiryForm />

        {/* Hero Section */}
        <section className="pt-24 md:pt-32 pb-12 md:pb-20 px-4 md:px-16">
          <div className="max-w-[1800px] mx-auto">
            <Link
              href="/#portfolios"
              className="inline-flex items-center gap-3 md:gap-4 text-slate/60 hover:text-slate transition-colors mb-8 md:mb-12 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="text-[9px] md:text-[10px] uppercase tracking-[0.3em]">Back to Portfolio</span>
            </Link>

            <div className="space-y-6 md:space-y-8 mb-12 md:mb-16">
              <span className="text-[9px] md:text-[10px] uppercase tracking-[0.5em] md:tracking-[0.6em] text-slate/40 block">Baby Announcement</span>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif leading-[0.9] tracking-tighter text-slate">
                Dallas Baby <br />
                <span className="italic font-light opacity-50 text-moss">Announcements.</span>
              </h1>
              <p className="text-lg md:text-xl text-slate/60 font-sans font-light leading-relaxed max-w-2xl">
                Perfect for sharing your exciting news with style. A creative session that captures the joy and anticipation of your growing family, ideal for social media announcements and keepsakes.
              </p>
            </div>
          </div>
        </section>

        {/* Tight Editorial Masonry Grid */}
        <section className="px-4 md:px-16 pb-12 md:pb-20">
          <div className="max-w-[1800px] mx-auto">
            <div className="columns-1 md:columns-2 lg:columns-3 gap-3 md:gap-4">
              {images.map((image, i) => (
                <div
                  key={image.src}
                  className="relative overflow-hidden rounded-sm bg-fog group cursor-pointer break-inside-avoid mb-4"
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

                    {/* Hover indicator */}
                    <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center shadow-md">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate" />
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
            className="fixed inset-0 z-[9999] bg-slate/95 backdrop-blur-md flex items-center justify-center p-6 cursor-pointer"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all flex items-center justify-center text-white shadow-xl"
              >
                <X className="w-6 h-6" />
              </button>
              <Image
                src={selectedImage}
                alt="Dallas baby announcement photography"
                width={2000}
                height={3000}
                className="max-w-full max-h-[90vh] w-auto h-auto object-contain rounded-sm shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}

        {/* CTA Section */}
        <section className="py-32 px-6 md:px-16 bg-white border-t border-sand">
          <div className="max-w-[1200px] mx-auto text-center space-y-12">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-serif text-slate tracking-tight">
                Ready to Share <br />
                <span className="italic opacity-60">Your Big News?</span>
              </h2>
              <p className="text-lg text-slate/60 font-sans font-light max-w-xl mx-auto">
                Perfect for announcing your pregnancy with style. Fill out the form below and I'll get back to you within 24 hours to discuss your baby announcement session.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 items-center justify-center pt-8">
              <Link
                href="/#contact"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "/#contact";
                }}
                className="group relative bg-slate text-bone px-12 py-6 rounded-sm text-[11px] uppercase tracking-[0.5em] overflow-hidden transition-all hover:pr-16 inline-flex items-center gap-4"
              >
                <span className="relative z-10">Inquire About Your Session</span>
                <ArrowRight className="w-4 h-4 relative z-10 transition-transform group-hover:translate-x-1" />
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

