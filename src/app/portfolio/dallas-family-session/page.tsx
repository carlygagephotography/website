"use client";

import { ReactLenis } from "@studio-freight/react-lenis";
import { Navigation } from "@/components/v3/Navigation";
import { Footer } from "@/components/v3/Footer";
import { StickyMobileBar } from "@/components/v3/StickyMobileBar";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { ArrowRight, ArrowLeft, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { FloatingInquiryForm } from "@/components/v3/FloatingInquiryForm";

// Images sorted in shooting order
const imageNumbers = [
  "004", "005", "007", "008", "012", "013", "016", "020", "024", "028",
  "030", "037", "039", "041", "043", "045", "049", "051", "052", "058",
  "059", "060", "062", "065", "066", "068", "070", "071", "079", "083",
  "085", "086", "093", "095", "098", "099", "100"
];

const images = imageNumbers.map(num => ({
  src: `/images/portfolio/dallas-family-session/Sidney-and-Sam-Family${num}.jpg`,
  alt: `Dallas family photography session showcasing beautiful family portraits in natural light - Image ${num}`
}));

// Related sessions for navigation
const relatedSessions = [
  {
    title: "Maternity Session",
    link: "/portfolio/dallas-maternity-session",
    image: "/images/portfolio/davion-maternity/Davion-Maternity-033.jpg",
    category: "Maternity"
  },
  {
    title: "Baby Announcement",
    link: "/portfolio/dallas-baby-announcement",
    image: "/images/portfolio/haley-trent-baby-announcement/Haley-and-Trent-Baby-Announcement016.jpg",
    category: "Announcements"
  }
];

export default function WellsFamilySessionPage() {
  const { scrollToSection } = useSmoothScroll();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [visibleCount, setVisibleCount] = useState(12);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const handleImageClick = (src: string, index: number) => {
    setSelectedImage(src);
    setSelectedIndex(index);
  };

  const handleNext = () => {
    if (selectedIndex < images.length - 1) {
      const nextIndex = selectedIndex + 1;
      setSelectedIndex(nextIndex);
      setSelectedImage(images[nextIndex].src);
    }
  };

  const handlePrevious = () => {
    if (selectedIndex > 0) {
      const prevIndex = selectedIndex - 1;
      setSelectedIndex(prevIndex);
      setSelectedImage(images[prevIndex].src);
    }
  };

  // Swipe handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      handleNext();
    }
    if (isRightSwipe) {
      handlePrevious();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage) {
        if (e.key === 'ArrowRight') handleNext();
        if (e.key === 'ArrowLeft') handlePrevious();
        if (e.key === 'Escape') setSelectedImage(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, selectedIndex]);

  const visibleImages = images.slice(0, visibleCount);
  const hasMore = visibleCount < images.length;

  return (
    <ReactLenis root>
      <main className="min-h-screen selection:bg-slate selection:text-bone bg-bone pb-16 md:pb-0">
        <Navigation />
        <StickyMobileBar />
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
              <span className="text-[9px] md:text-[10px] uppercase tracking-[0.5em] md:tracking-[0.6em] text-slate/40 block">Family Session</span>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif leading-[0.9] tracking-tighter text-slate">
                Dallas Family <br />
                <span className="italic font-light opacity-50 text-moss">Photography.</span>
              </h1>
              <p className="text-lg md:text-xl text-slate/60 font-sans font-light leading-relaxed max-w-2xl">
                A beautiful family session capturing authentic moments and connections. Celebrating the joy, laughter, and love that makes each family uniquely theirs in the Dallas-Fort Worth area.
              </p>
            </div>
          </div>
        </section>

        {/* Mobile: 2-Column Masonry Grid, Desktop: 3-Column */}
        <section className="px-4 md:px-16 pb-12 md:pb-20">
          <div className="max-w-[1800px] mx-auto">
            {/* Mobile: 2-Column Grid (First image full-width) */}
            <div className="md:hidden">
              <div className="grid grid-cols-2 gap-2">
                {visibleImages.map((image, i) => (
                  <div
                    key={image.src}
                    className={`relative overflow-hidden rounded-sm bg-fog group cursor-pointer ${
                      i === 0 ? 'col-span-2' : ''
                    }`}
                    onClick={() => handleImageClick(image.src, i)}
                  >
                    <div className="relative w-full">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={1200}
                        height={1800}
                        className="w-full h-auto object-cover transition-all duration-500 group-active:scale-[1.02]"
                        sizes={i === 0 ? "100vw" : "(max-width: 768px) 50vw, 33vw"}
                        loading="eager"
                        priority={i < 6}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate/10 via-transparent to-transparent opacity-0 group-active:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    </div>
                  </div>
                ))}
                
                {/* Mid-Gallery Interruption after 6th image */}
                {visibleCount >= 6 && visibleImages.length >= 6 && (
                  <div className="col-span-2 bg-bone border border-sand/30 rounded-sm p-5 my-3 text-center space-y-3">
                    <p className="text-xs font-serif text-slate/70 italic">
                      Love this location? We shoot here in the Spring and Fall.
                    </p>
                    <Link
                      href="/#contact"
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.href = "/#contact";
                      }}
                      className="inline-block bg-slate text-bone px-5 py-2 rounded-sm text-[9px] uppercase tracking-[0.25em] font-bold hover:bg-slate/90 transition-all active:scale-95"
                    >
                      Inquire Now
                    </Link>
                  </div>
                )}

                {/* Load More Button */}
                {hasMore && visibleCount >= 12 && (
                  <div className="col-span-2 text-center py-6">
                    <button
                      onClick={() => setVisibleCount(prev => Math.min(prev + 12, images.length))}
                      className="border border-slate text-slate px-8 py-3 rounded-sm text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-slate hover:text-bone transition-all active:scale-95"
                    >
                      Load More Photos
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Desktop: 3-Column Masonry */}
            <div className="hidden md:block">
              <div className="columns-1 md:columns-2 lg:columns-3 gap-3 md:gap-4">
                {visibleImages.map((image, i) => (
                  <div
                    key={image.src}
                    className="relative overflow-hidden rounded-sm bg-fog group cursor-pointer break-inside-avoid mb-4"
                    onClick={() => handleImageClick(image.src, i)}
                  >
                    <div className="relative w-full">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={1200}
                        height={1800}
                        className="w-full h-auto object-contain transition-all duration-500 group-hover:scale-[1.01]"
                        sizes="(max-width: 1200px) 50vw, 33vw"
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

              {/* Load More Button - Desktop */}
              {hasMore && (
                <div className="text-center py-8">
                  <button
                    onClick={() => setVisibleCount(prev => Math.min(prev + 12, images.length))}
                    className="border border-slate text-slate px-12 py-4 rounded-sm text-[11px] uppercase tracking-[0.4em] font-bold hover:bg-slate hover:text-bone transition-all"
                  >
                    View Full Gallery
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Lightbox Modal with Swipe Support */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9999] bg-slate/95 backdrop-blur-md flex items-center justify-center p-4 md:p-6 cursor-pointer"
              onClick={() => setSelectedImage(null)}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all flex items-center justify-center text-white shadow-xl active:scale-90"
                  aria-label="Close"
                >
                  <X className="w-5 h-5 md:w-6 md:h-6" />
                </button>

                {/* Previous Button */}
                {selectedIndex > 0 && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePrevious();
                    }}
                    className="absolute left-2 md:left-4 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all flex items-center justify-center text-white shadow-xl active:scale-90"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
                  </button>
                )}

                {/* Next Button */}
                {selectedIndex < images.length - 1 && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNext();
                    }}
                    className="absolute right-2 md:right-4 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all flex items-center justify-center text-white shadow-xl active:scale-90"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
                  </button>
                )}

                {/* Image Counter */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-white text-xs md:text-sm font-sans">
                  {selectedIndex + 1} / {images.length}
                </div>

                {/* Image */}
                <Image
                  src={selectedImage}
                  alt="Dallas family photography"
                  width={2000}
                  height={3000}
                  className="max-w-full max-h-[90vh] w-auto h-auto object-contain rounded-sm shadow-2xl"
                  priority
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA Section */}
        <section className="py-16 md:py-32 px-6 md:px-16 bg-white border-t border-sand">
          <div className="max-w-[1200px] mx-auto text-center space-y-8 md:space-y-12">
            <div className="space-y-4 md:space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-slate tracking-tight">
                Ready to Capture <br />
                <span className="italic opacity-60">Your Family's Joy?</span>
              </h2>
              <p className="text-base md:text-lg text-slate/60 font-sans font-light max-w-xl mx-auto text-left md:text-center">
                Let's create beautiful memories of your family. Fill out the form below and I'll get back to you within 24 hours to discuss your session.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 items-center justify-center pt-4 md:pt-8">
              <Link
                href="/#contact"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "/#contact";
                }}
                className="group relative bg-slate text-bone px-10 md:px-12 py-5 md:py-6 rounded-sm text-[10px] md:text-[11px] uppercase tracking-[0.4em] md:tracking-[0.5em] overflow-hidden transition-all hover:pr-14 md:hover:pr-16 inline-flex items-center gap-3 md:gap-4 active:scale-95"
              >
                <span className="relative z-10">Inquire About Your Session</span>
                <ArrowRight className="w-4 h-4 relative z-10 transition-transform group-hover:translate-x-1" />
                <div className="absolute inset-0 bg-moss transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
              </Link>
            </div>
          </div>
        </section>

        {/* Related Sessions Navigation */}
        <section className="py-12 md:py-16 px-4 md:px-16 bg-bone border-t border-sand/30">
          <div className="max-w-[1800px] mx-auto">
            <div className="space-y-6 md:space-y-8">
              <h3 className="text-2xl md:text-3xl font-serif text-slate tracking-tight text-center">
                Related <span className="italic opacity-60">Sessions</span>
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto">
                {relatedSessions.map((session, i) => (
                  <Link
                    key={session.link}
                    href={session.link}
                    className="group relative overflow-hidden rounded-sm bg-fog aspect-[4/5]"
                  >
                    <Image
                      src={session.image}
                      alt={session.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate/80 via-slate/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                      <span className="text-[8px] md:text-[9px] uppercase tracking-[0.3em] text-white/80 block mb-1">
                        {session.category}
                      </span>
                      <h4 className="text-lg md:text-xl font-serif text-white font-bold">
                        {session.title}
                      </h4>
                      <div className="flex items-center gap-2 mt-2 text-white/90 text-xs md:text-sm">
                        <span>View Gallery</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </ReactLenis>
  );
}

