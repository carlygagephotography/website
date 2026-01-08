"use client";

import { ReactLenis } from "@studio-freight/react-lenis";
import { Navigation } from "@/components/v3/Navigation";
import { Footer } from "@/components/v3/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { ArrowRight, ArrowLeft, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { FloatingInquiryForm } from "@/components/v3/FloatingInquiryForm";
import { StickyMobileBar } from "@/components/v3/StickyMobileBar";

// Images sorted in shooting order
const imageNumbers = [
  "003", "006", "007", "010", "012", "013", "014", "017", "019", "021"
];

const images = imageNumbers.map(num => ({
  src: `/images/portfolio/shawna-eric-mini-session/Shawna-and-Eric-mini${num}.jpg`,
  alt: `Dallas mini session photography showcasing beautiful family portraits - Image ${num}`
}));

export default function DallasMiniSessionPage() {
  const { scrollToSection } = useSmoothScroll();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number | null>(null);
  const [showAllImages, setShowAllImages] = useState(false);
  const INITIAL_IMAGE_COUNT = Math.min(12, images.length); // Show all if less than 12
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Minimum swipe distance (px)
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    touchEndX.current = null;
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current || currentImageIndex === null) return;
    
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    const displayedImages = showAllImages ? images : images.slice(0, INITIAL_IMAGE_COUNT);
    const maxIndex = displayedImages.length - 1;
    
    if (isLeftSwipe && currentImageIndex < maxIndex) {
      const nextIndex = currentImageIndex + 1;
      setCurrentImageIndex(nextIndex);
      setSelectedImage(displayedImages[nextIndex].src);
    } else if (isRightSwipe && currentImageIndex > 0) {
      const prevIndex = currentImageIndex - 1;
      setCurrentImageIndex(prevIndex);
      setSelectedImage(displayedImages[prevIndex].src);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    if (currentImageIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      const displayedImages = showAllImages ? images : images.slice(0, INITIAL_IMAGE_COUNT);
      const maxIndex = displayedImages.length - 1;
      
      if (e.key === 'ArrowLeft' && currentImageIndex > 0) {
        const prevIndex = currentImageIndex - 1;
        setCurrentImageIndex(prevIndex);
        setSelectedImage(displayedImages[prevIndex].src);
      } else if (e.key === 'ArrowRight' && currentImageIndex < maxIndex) {
        const nextIndex = currentImageIndex + 1;
        setCurrentImageIndex(nextIndex);
        setSelectedImage(displayedImages[nextIndex].src);
      } else if (e.key === 'Escape') {
        setSelectedImage(null);
        setCurrentImageIndex(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentImageIndex, images, showAllImages]);

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
              <span className="text-[8px] md:text-[10px] uppercase tracking-[0.5em] md:tracking-[0.6em] text-slate/40 block">Mini Session</span>
              <h1 className="text-3xl sm:text-4xl md:text-7xl font-serif leading-[0.9] tracking-tighter text-slate">
                Dallas Mini <br />
                <span className="italic font-light opacity-50 text-moss">Sessions.</span>
              </h1>
              <p className="text-sm md:text-xl text-slate/60 font-sans font-light leading-relaxed max-w-2xl text-left">
                Perfect for busy families who want beautiful photos without the time commitment. A quick, focused session that captures your family's authentic moments in just 20 minutes.
              </p>
            </div>
          </div>
        </section>

        {/* Curated Gallery Grid - Mobile: 2-column, Desktop: 3-column */}
        <section className="px-4 md:px-16 pb-8 md:pb-20">
          <div className="max-w-[1800px] mx-auto">
            {/* Mobile: 2-Column Grid with First Image Full-Width */}
            <div className="md:hidden">
              <div className="grid grid-cols-2 gap-2">
                {(() => {
                  const displayedImages = images.slice(0, showAllImages ? images.length : INITIAL_IMAGE_COUNT);
                  return displayedImages.map((image, i) => {
                    const actualIndex = i;
                    
                    // First image full-width (spans 2 columns)
                    if (i === 0) {
                      return (
                        <div
                          key={image.src}
                          className="relative overflow-hidden rounded-sm bg-fog group cursor-pointer col-span-2"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedImage(image.src);
                            setCurrentImageIndex(actualIndex);
                          }}
                        >
                          <div className="relative w-full">
                            <Image
                              src={image.src}
                              alt={image.alt}
                              width={1200}
                              height={1800}
                              className="w-full h-auto object-contain transition-all duration-500"
                              sizes="100vw"
                              loading="eager"
                              priority
                            />
                          </div>
                        </div>
                      );
                    }

                    // Mid-gallery CTA after 6th image (index 7) - only if we have enough images
                    if (i === 7 && !showAllImages && displayedImages.length > 8) {
                      return (
                        <div key={`cta-${i}`} className="col-span-2 py-6 px-4 bg-bone rounded-sm border border-sand/30 my-2">
                          <p className="text-sm font-serif text-slate text-center mb-4 italic">
                            Love this shoot? Let's create something beautiful for your family.
                          </p>
                          <Link
                            href="/#contact"
                            onClick={(e) => {
                              e.preventDefault();
                              window.location.href = "/#contact";
                            }}
                            className="block w-full bg-slate text-bone text-center py-3 rounded-sm text-[9px] uppercase tracking-[0.35em] font-bold hover:bg-slate/90 transition-all active:scale-[0.98]"
                          >
                            Inquire Now
                          </Link>
                        </div>
                      );
                    }

                    // Rest in 2-column grid
                    return (
                      <div
                        key={image.src}
                        className="relative overflow-hidden rounded-sm bg-fog group cursor-pointer"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedImage(image.src);
                          setCurrentImageIndex(actualIndex);
                        }}
                      >
                        <div className="relative w-full aspect-[3/4]">
                          <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            className="object-cover transition-all duration-500"
                            sizes="(max-width: 768px) 50vw, 33vw"
                            loading={i < 12 ? "eager" : "lazy"}
                          />
                        </div>
                      </div>
                    );
                  });
                })()}
              </div>
            </div>

            {/* Desktop: 3-Column Masonry */}
            <div className="hidden md:block">
              <div className="columns-2 lg:columns-3 gap-4">
                {(() => {
                  const displayedImages = images.slice(0, showAllImages ? images.length : INITIAL_IMAGE_COUNT);
                  return displayedImages.map((image, i) => {
                    // Mid-gallery CTA after 6th image (desktop) - only if we have enough images
                    if (i === 6 && !showAllImages && displayedImages.length > 8) {
                      return (
                        <div key={`cta-${i}`} className="break-inside-avoid mb-4">
                          <div className="bg-bone p-8 rounded-sm border border-sand/30">
                            <p className="text-base font-serif text-slate text-center mb-4 italic">
                              Love this shoot? Let's create something beautiful for your family.
                            </p>
                            <Link
                              href="/#contact"
                              onClick={(e) => {
                                e.preventDefault();
                                window.location.href = "/#contact";
                              }}
                              className="block w-full bg-slate text-bone text-center py-4 rounded-sm text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-slate/90 transition-all"
                            >
                              Inquire Now
                            </Link>
                          </div>
                        </div>
                      );
                    }

                    return (
                      <div
                        key={image.src}
                        className="relative overflow-hidden rounded-sm bg-fog group cursor-pointer break-inside-avoid mb-4"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedImage(image.src);
                          setCurrentImageIndex(i);
                        }}
                      >
                        <div className="relative w-full">
                          <Image
                            src={image.src}
                            alt={image.alt}
                            width={1200}
                            height={1800}
                            className="w-full h-auto object-contain transition-all duration-500 group-hover:scale-[1.01]"
                            sizes="(max-width: 1200px) 50vw, 33vw"
                            loading={i < 12 ? "eager" : "lazy"}
                            priority={i < 6}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                          <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center shadow-md">
                            <div className="w-1.5 h-1.5 rounded-full bg-slate" />
                          </div>
                        </div>
                      </div>
                    );
                  });
                })()}
              </div>
            </div>

            {/* Load More Button - Only show if there are more than INITIAL_IMAGE_COUNT */}
            {!showAllImages && images.length > INITIAL_IMAGE_COUNT && (
              <div className="text-center mt-8">
                <button
                  onClick={() => setShowAllImages(true)}
                  className="bg-white border border-slate text-slate px-8 py-4 rounded-sm text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-slate hover:text-bone transition-all active:scale-[0.98]"
                >
                  Load More Photos
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Lightbox Modal with Swipe Navigation */}
        {selectedImage && currentImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-slate/95 backdrop-blur-md flex items-center justify-center p-3 md:p-6 cursor-pointer"
            onClick={() => {
              setSelectedImage(null);
              setCurrentImageIndex(null);
            }}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-7xl max-h-[95vh] md:max-h-[90vh] w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              <button
                onClick={() => {
                  setSelectedImage(null);
                  setCurrentImageIndex(null);
                }}
                className="absolute top-2 right-2 md:top-4 md:right-4 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 active:bg-white/40 transition-all flex items-center justify-center text-white shadow-xl touch-manipulation"
              >
                <X className="w-5 h-5 md:w-6 md:h-6" />
              </button>

              {/* Previous Button */}
              {currentImageIndex > 0 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    const displayedImages = showAllImages ? images : images.slice(0, INITIAL_IMAGE_COUNT);
                    const prevIndex = currentImageIndex - 1;
                    setCurrentImageIndex(prevIndex);
                    setSelectedImage(displayedImages[prevIndex].src);
                  }}
                  className="absolute left-2 md:left-4 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 active:bg-white/40 transition-all flex items-center justify-center text-white shadow-xl touch-manipulation"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
              )}

              {/* Next Button */}
              {(() => {
                const displayedImages = showAllImages ? images : images.slice(0, INITIAL_IMAGE_COUNT);
                const maxIndex = displayedImages.length - 1;
                return currentImageIndex < maxIndex && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      const nextIndex = currentImageIndex + 1;
                      setCurrentImageIndex(nextIndex);
                      setSelectedImage(displayedImages[nextIndex].src);
                    }}
                    className="absolute right-2 md:right-4 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 active:bg-white/40 transition-all flex items-center justify-center text-white shadow-xl touch-manipulation"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                );
              })()}

              <Image
                src={selectedImage}
                alt="Dallas mini session photography"
                width={2000}
                height={3000}
                className="max-w-full max-h-[95vh] md:max-h-[90vh] w-auto h-auto object-contain rounded-sm shadow-2xl"
              />

              {/* Image Counter */}
              {(() => {
                const displayedImages = showAllImages ? images : images.slice(0, INITIAL_IMAGE_COUNT);
                return (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-white text-sm font-serif">
                    {currentImageIndex + 1} / {displayedImages.length}
                  </div>
                );
              })()}
            </motion.div>
          </motion.div>
        )}

        {/* Visual Navigation - Related Portfolio Pages */}
        <section className="py-12 md:py-24 px-4 md:px-16 bg-white border-t border-sand">
          <div className="max-w-[1800px] mx-auto">
            <div className="mb-8 md:mb-12 text-center">
              <h2 className="text-2xl md:text-4xl font-serif text-slate tracking-tight mb-4">
                Explore Other <span className="italic opacity-60">Sessions</span>
              </h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {[
                { 
                  href: "/portfolio/dallas-family-session", 
                  title: "Family Sessions", 
                  image: "/images/portfolio/dallas-family-session/Sidney-and-Sam-Family052.jpg",
                  alt: "Dallas family photography session"
                },
                { 
                  href: "/portfolio/dallas-maternity-session", 
                  title: "Maternity", 
                  image: "/images/portfolio/davion-maternity/Davion-Maternity-033.jpg",
                  alt: "Dallas maternity photography session"
                },
                { 
                  href: "/portfolio/dallas-baby-announcement", 
                  title: "Baby Announcements", 
                  image: "/images/portfolio/haley-trent-baby-announcement/Haley-and-Trent-Baby-Announcement016.jpg",
                  alt: "Dallas baby announcement photography"
                },
                { 
                  href: "/#portfolios", 
                  title: "View All", 
                  image: "/images/portfolio/shawna-eric-mini-session/Shawna-and-Eric-mini021.jpg",
                  alt: "View all portfolio galleries"
                },
              ].map((item, i) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group relative overflow-hidden rounded-sm bg-fog aspect-[3/4] cursor-pointer"
                >
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-slate/40 group-hover:bg-slate/50 transition-colors duration-300 flex items-end">
                    <div className="w-full p-4 md:p-6">
                      <h3 className="text-white font-serif text-lg md:text-xl tracking-tight">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </ReactLenis>
  );
}
