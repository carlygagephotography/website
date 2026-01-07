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

export default function Home() {
  return (
    <ReactLenis root>
      <main className="min-h-screen selection:bg-slate selection:text-bone">
        
        <Navigation />

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
