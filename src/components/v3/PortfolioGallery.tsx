"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { ArrowLeft, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { FloatingInquiryForm } from "./FloatingInquiryForm";
import { StickyMobileBar } from "./StickyMobileBar";
import { ReactLenis } from "@studio-freight/react-lenis";
import { trackViewContent } from "@/lib/facebook-pixel";

interface PortfolioGalleryProps {
  title: string;
  subtitle: string;
  description: string;
  images: Array<{ src: string; alt: string }>;
  category: string;
  relatedSessions: Array<{
    href: string;
    title: string;
    image: string;
    alt: string;
  }>;
  /** Optional long-form content (prose, venues, FAQ, testimonial) rendered
      below the gallery. Passed from the page as a server-rendered slot. */
  content?: React.ReactNode;
}

export function PortfolioGallery({
  title,
  subtitle,
  description,
  images,
  category,
  relatedSessions,
  content
}: PortfolioGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number | null>(null);
  const [showAllImages, setShowAllImages] = useState(false);
  const INITIAL_IMAGE_COUNT = 12;
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Minimum swipe distance (px)
  const minSwipeDistance = 50;

  // Track ViewContent event when page loads
  useEffect(() => {
    trackViewContent('Portfolio', category);
  }, [category]);

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
              <span className="text-[8px] md:text-[10px] uppercase tracking-[0.5em] md:tracking-[0.6em] text-slate/40 block">{subtitle}</span>
              <h1 className="text-3xl sm:text-4xl md:text-7xl font-serif leading-[0.9] tracking-tighter text-slate">
                {title.split(' ').map((word, i) => i === title.split(' ').length - 1 ? (
                  <span key={i} className="block"><span className="italic font-light opacity-50 text-moss">{word}.</span></span>
                ) : word + ' ')}
              </h1>
              <p className="text-sm md:text-xl text-slate/60 font-sans font-light leading-relaxed max-w-2xl text-left">
                {description}
              </p>
            </div>
          </div>
        </section>

        {/* Curated Gallery Grid */}
        <section className="px-4 md:px-16 pb-8 md:pb-20">
          <div className="max-w-[1800px] mx-auto">
            {/* Mobile View */}
            <div className="md:hidden">
              <div className="grid grid-cols-2 gap-2">
                {(() => {
                  const displayedImages = images.slice(0, showAllImages ? images.length : INITIAL_IMAGE_COUNT);
                  return displayedImages.map((image, i) => {
                    if (i === 0) {
                      return (
                        <div
                          key={image.src}
                          className="relative overflow-hidden rounded-sm bg-fog group cursor-pointer col-span-2"
                          onClick={() => {
                            setSelectedImage(image.src);
                            setCurrentImageIndex(i);
                          }}
                        >
                          <Image
                            src={image.src}
                            alt={image.alt}
                            width={1200}
                            height={1800}
                            className="w-full h-auto object-contain"
                            priority
                          />
                        </div>
                      );
                    }

                    if (i === 7 && !showAllImages) {
                      return (
                        <div key="cta" className="col-span-2 py-6 px-4 bg-bone rounded-sm border border-sand/30 my-2">
                          <p className="text-sm font-serif text-slate text-center mb-4 italic">
                            Love this shoot? Let's create something beautiful for your family.
                          </p>
                          <Link
                            href="/#contact"
                            className="block w-full bg-slate text-bone text-center py-3 rounded-sm text-[9px] uppercase tracking-[0.35em] font-bold"
                          >
                            Reach Out
                          </Link>
                        </div>
                      );
                    }

                    return (
                      <div
                        key={image.src}
                        className="relative overflow-hidden rounded-sm bg-fog group cursor-pointer aspect-[3/4]"
                        onClick={() => {
                          setSelectedImage(image.src);
                          setCurrentImageIndex(i);
                        }}
                      >
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-cover"
                          sizes="50vw"
                        />
                      </div>
                    );
                  });
                })()}
              </div>
            </div>

            {/* Desktop View */}
            <div className="hidden md:block">
              <div className="columns-2 lg:columns-3 gap-4">
                {images.slice(0, showAllImages ? images.length : INITIAL_IMAGE_COUNT).map((image, i) => {
                  if (i === 8 && !showAllImages) {
                    return (
                      <div key="cta-desktop" className="break-inside-avoid mb-4">
                        <div className="bg-bone p-8 rounded-sm border border-sand/30 text-center">
                          <p className="text-base font-serif text-slate mb-4 italic">
                            Love this shoot? Let's create something beautiful for your family.
                          </p>
                          <Link
                            href="/#contact"
                            className="block w-full bg-slate text-bone py-4 rounded-sm text-[10px] uppercase tracking-[0.4em] font-bold"
                          >
                            Reach Out
                          </Link>
                        </div>
                      </div>
                    );
                  }

                  return (
                    <div
                      key={image.src}
                      className="relative overflow-hidden rounded-sm bg-fog group cursor-pointer break-inside-avoid mb-4"
                      onClick={() => {
                        setSelectedImage(image.src);
                        setCurrentImageIndex(i);
                      }}
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={1200}
                        height={1800}
                        className="w-full h-auto object-contain transition-transform group-hover:scale-[1.01]"
                        priority={i < 6}
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            {!showAllImages && images.length > INITIAL_IMAGE_COUNT && (
              <div className="text-center mt-8">
                <button
                  onClick={() => setShowAllImages(true)}
                  className="bg-white border border-slate text-slate px-8 py-4 rounded-sm text-[10px] uppercase tracking-[0.4em] font-bold"
                >
                  Load More Photos
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Lightbox */}
        {selectedImage && currentImageIndex !== null && (
          <div
            className="fixed inset-0 z-[9999] bg-slate/95 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center" onClick={e => e.stopPropagation()}>
              <button onClick={() => setSelectedImage(null)} className="absolute top-4 right-4 z-10 text-white"><X /></button>
              
              {currentImageIndex > 0 && (
                <button
                  className="absolute left-4 z-10 text-white"
                  onClick={() => {
                    const idx = currentImageIndex - 1;
                    setCurrentImageIndex(idx);
                    setSelectedImage(images[idx].src);
                  }}
                >
                  <ChevronLeft size={48} />
                </button>
              )}

              {currentImageIndex < (showAllImages ? images.length : INITIAL_IMAGE_COUNT) - 1 && (
                <button
                  className="absolute right-4 z-10 text-white"
                  onClick={() => {
                    const idx = currentImageIndex + 1;
                    setCurrentImageIndex(idx);
                    setSelectedImage(images[idx].src);
                  }}
                >
                  <ChevronRight size={48} />
                </button>
              )}

              <Image src={selectedImage} alt="Gallery" width={2000} height={3000} className="max-w-full max-h-full object-contain" />
            </div>
          </div>
        )}

        {/* Long-form content slot (SEO prose, venues, FAQ, testimonial) */}
        {content}

        {/* Related Sessions */}
        <section className="py-12 md:py-24 px-4 md:px-16 bg-white border-t border-sand">
          <div className="max-w-[1800px] mx-auto">
            <h2 className="text-2xl md:text-4xl font-serif text-slate text-center mb-12">
              Explore Other <span className="italic opacity-60">Sessions</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {relatedSessions.map((session) => (
                <Link key={session.href} href={session.href} className="group relative aspect-[3/4] overflow-hidden rounded-sm">
                  <Image src={session.image} alt={session.alt} fill className="object-cover transition-transform group-hover:scale-105" />
                  <div className="absolute inset-0 bg-slate/40 flex items-end p-6">
                    <h3 className="text-white font-serif text-xl">{session.title}</h3>
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
