"use client";

import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import { Navigation } from "@/components/v3/Navigation";
import { Hero } from "@/components/v3/Hero";
import { Expertise } from "@/components/v3/Expertise";
import { About } from "@/components/v3/About";
import { FloatingInquiryForm } from "@/components/v3/FloatingInquiryForm";
import { StickyMobileBar } from "@/components/v3/StickyMobileBar";
import { FacebookPixelDebug } from "@/components/FacebookPixelDebug";
import { useEffect } from "react";
import dynamic from "next/dynamic";

// Lazy load below-the-fold components for better initial performance
const ObjectionHandlers = dynamic(() => import("@/components/v3/ObjectionHandlers").then(mod => ({ default: mod.ObjectionHandlers })), {
  ssr: true,
});
const Portfolio = dynamic(() => import("@/components/v3/Portfolio").then(mod => ({ default: mod.Portfolio })), {
  ssr: true,
});
const Testimonials = dynamic(() => import("@/components/v3/Testimonials").then(mod => ({ default: mod.Testimonials })), {
  ssr: true,
});
const AreasServed = dynamic(() => import("@/components/AreasServed").then(mod => ({ default: mod.AreasServed })), {
  ssr: true,
});
const Inquiry = dynamic(() => import("@/components/v3/Inquiry").then(mod => ({ default: mod.Inquiry })), {
  ssr: true,
});
const FAQ = dynamic(() => import("@/components/v3/FAQ").then(mod => ({ default: mod.FAQ })), {
  ssr: true,
});
const EmailSignup = dynamic(() => import("@/components/v3/EmailSignup").then(mod => ({ default: mod.EmailSignup })), {
  ssr: true,
});
const Footer = dynamic(() => import("@/components/v3/Footer").then(mod => ({ default: mod.Footer })), {
  ssr: true,
});

export function HomeClient() {
  const lenis = useLenis();

  useEffect(() => {
    // Handle hash navigation when coming from other pages
    if (typeof window !== "undefined") {
      const hash = window.location.hash;
      if (hash && lenis) {
        // Small delay to ensure page is fully loaded
        const timer = setTimeout(() => {
          const element = document.getElementById(hash.substring(1));
          if (element) {
            lenis.scrollTo(element, {
              offset: -80,
              duration: 1.5,
              easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
            });
          }
        }, 300);
        return () => clearTimeout(timer);
      }
    }
  }, [lenis]);

  return (
    <ReactLenis root>
      <main className="min-h-screen selection:bg-slate selection:text-bone pb-16 md:pb-0">
          <FacebookPixelDebug />
          <Navigation />
          <StickyMobileBar />
          <FloatingInquiryForm />

        <Hero />

        <Expertise />

        <About />

        <ObjectionHandlers />

        <Portfolio />

        <Testimonials />

        <AreasServed />

        <Inquiry />

        <section className="py-16 md:py-24 px-4 md:px-8 lg:px-16 bg-bone">
          <div className="max-w-4xl mx-auto">
            <EmailSignup />
          </div>
        </section>

        <FAQ />

        <Footer />
      </main>
    </ReactLenis>
  );
}
