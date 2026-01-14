"use client";

import { ReactLenis } from "@studio-freight/react-lenis";
import { Navigation } from "@/components/v3/Navigation";
import { StickyMobileBar } from "@/components/v3/StickyMobileBar";
import { ContestHero } from "@/components/v3/ContestHero";
import { ContestForm } from "@/components/v3/ContestForm";
import { Testimonials } from "@/components/v3/Testimonials";
import { Footer } from "@/components/v3/Footer";
import { FAQ } from "@/components/v3/FAQ";
import { Camera, Heart, Sparkles } from "lucide-react";

export default function ContestPage() {
  return (
    <ReactLenis root>
      <main className="min-h-screen bg-bone">
        <Navigation />
        <StickyMobileBar />
        
        <ContestHero />

        {/* Value Proposition / Contest Details */}
        <section className="py-24 px-6 md:px-16 bg-white overflow-hidden">
          <div className="max-w-[1800px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
              <div className="lg:col-span-5 space-y-12">
                <div className="space-y-6">
                  <span className="text-[10px] uppercase tracking-[0.6em] text-slate/40">The Prize</span>
                  <h2 className="text-5xl md:text-6xl font-serif leading-tight text-slate tracking-tighter">
                    What's Included <br />
                    <span className="italic font-light opacity-50 text-moss">In the Session.</span>
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="w-10 h-10 bg-bone rounded-full flex items-center justify-center text-moss">
                      <Camera className="w-5 h-5" />
                    </div>
                    <h4 className="font-serif text-xl text-slate">One Hour Session</h4>
                    <p className="text-sm text-slate/60 font-sans leading-relaxed">A full hour of shooting at a beautiful DFW location.</p>
                  </div>
                  <div className="space-y-4">
                    <div className="w-10 h-10 bg-bone rounded-full flex items-center justify-center text-moss">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <h4 className="font-serif text-xl text-slate">Full Gallery</h4>
                    <p className="text-sm text-slate/60 font-sans leading-relaxed">High-resolution, professionally edited digital images.</p>
                  </div>
                  <div className="space-y-4">
                    <div className="w-10 h-10 bg-bone rounded-full flex items-center justify-center text-moss">
                      <Heart className="w-5 h-5" />
                    </div>
                    <h4 className="font-serif text-xl text-slate">Styling Tips</h4>
                    <p className="text-sm text-slate/60 font-sans leading-relaxed">Personalized tips to help you choose the perfect outfits.</p>
                  </div>
                </div>
              </div>

              {/* Entry Form Anchor */}
              <div id="enter" className="lg:col-span-7 scroll-mt-24">
                <ContestForm />
              </div>
            </div>
          </div>
        </section>

        <Testimonials />
        
        <FAQ />

        <Footer />
      </main>
    </ReactLenis>
  );
}
