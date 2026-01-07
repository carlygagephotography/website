"use client";

import { ReactLenis } from "@studio-freight/react-lenis";
import { Navigation } from "@/components/v3/Navigation";
import { Hero } from "@/components/v3/Hero";
import { Expertise } from "@/components/v3/Expertise";
import { Portfolio } from "@/components/v3/Portfolio";
import { Inquiry } from "@/components/v3/Inquiry";
import { Testimonials } from "@/components/v3/Testimonials";
import { FAQ } from "@/components/v3/FAQ";
import { Footer } from "@/components/v3/Footer";
import { AreasServed } from "@/components/AreasServed";
import { About } from "@/components/v3/About";
import { FloatingInquiryForm } from "@/components/v3/FloatingInquiryForm";
import { useEffect } from "react";
import { useLenis } from "@studio-freight/react-lenis";

export default function Home() {
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
      <main className="min-h-screen selection:bg-slate selection:text-bone">
          
          <Navigation />
          <FloatingInquiryForm />

        <Hero />

        <Expertise />

        <About />

        <Portfolio />

        <Testimonials />

        <AreasServed />

        <Inquiry />

        <FAQ />

        <Footer />

      </main>
    </ReactLenis>
  );
}
