import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, MapPin } from "lucide-react";
import { Navigation } from "@/components/v3/Navigation";
import { Footer } from "@/components/v3/Footer";

export const metadata: Metadata = {
  title: "Spring 2026 Booking Now Open | Flower Mound & Dallas Family Photographer",
  description: "CarlyGage.com announces Spring 2026 booking season with updated Stress-Free session guides. Book your authentic family photography session in Flower Mound or Dallas today.",
  alternates: {
    canonical: "/blog/spring-2026-booking-announcement",
  },
  openGraph: {
    title: "Spring 2026 Booking Season Now Open | Carly Gage Photography",
    description: "Spring 2026 booking calendar is now open for Flower Mound and Dallas families seeking authentic, unposed family photography.",
    url: "https://carlygage.com/blog/spring-2026-booking-announcement",
    type: "article",
    publishedTime: "2026-01-23T00:00:00Z",
    images: [
      {
        url: "https://carlygage.com/images/bento-1.jpg",
        width: 1200,
        height: 800,
        alt: "Flower Mound family photographer capturing authentic moments",
      },
    ],
  },
};

export default function Spring2026BookingPost() {
  // JSON-LD Schema for Article
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Spring 2026 Booking Season Now Open for Flower Mound and Dallas Families",
    "description": "CarlyGage.com announces Spring 2026 booking season with updated Stress-Free session guides for authentic family photography across North Texas.",
    "image": "https://carlygage.com/images/bento-1.jpg",
    "datePublished": "2026-01-23T00:00:00Z",
    "dateModified": "2026-01-23T00:00:00Z",
    "author": {
      "@type": "Person",
      "name": "Carly Gage",
      "url": "https://carlygage.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Carly Gage Photography",
      "logo": {
        "@type": "ImageObject",
        "url": "https://carlygage.com/icon.svg"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://carlygage.com/blog/spring-2026-booking-announcement"
    },
    "articleSection": "Studio Updates",
    "keywords": "Flower Mound family photographer, Dallas family photographer, family photography, spring sessions 2026, authentic family portraits"
  };

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      
      <Navigation />
      
      <article className="min-h-screen bg-bone pt-32 pb-20">
        {/* Back Button */}
        <div className="max-w-4xl mx-auto px-4 md:px-8 mb-8">
          <Link 
            href="/blog"
            className="inline-flex items-center gap-2 text-[9px] uppercase tracking-[0.3em] text-slate/60 hover:text-slate transition-colors group"
          >
            <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>
        </div>

        {/* Article Header */}
        <header className="max-w-4xl mx-auto px-4 md:px-8 mb-12">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="inline-block bg-moss/10 text-moss text-[9px] uppercase tracking-[0.3em] px-3 py-1 rounded-full font-bold">
              Studio Updates
            </span>
            <time className="flex items-center gap-2 text-[9px] uppercase tracking-[0.3em] text-slate/40 font-bold">
              <Calendar className="w-3 h-3" />
              January 23, 2026
            </time>
            <span className="flex items-center gap-2 text-[9px] uppercase tracking-[0.3em] text-slate/40 font-bold">
              <MapPin className="w-3 h-3" />
              Flower Mound, Texas
            </span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-slate mb-6 leading-tight">
            Spring 2026 Booking Season Now Open for Flower Mound and Dallas Families
          </h1>
          
          <p className="font-serif text-xl md:text-2xl text-slate/70 leading-relaxed">
            CarlyGage.com announces updated "Stress-Free" session guides and expanded availability for authentic family photography across North Texas.
          </p>
        </header>

        {/* Featured Image */}
        <div className="max-w-6xl mx-auto px-4 md:px-8 mb-12">
          <div className="relative aspect-[16/9] rounded-sm overflow-hidden shadow-lg">
            <Image
              src="/images/bento-1.jpg"
              alt="Authentic family moment captured by Flower Mound family photographer Carly Gage"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Article Content */}
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <div className="font-serif text-slate/80 leading-relaxed space-y-6 text-base md:text-lg">
              <p className="text-xl md:text-2xl font-display text-slate leading-relaxed first-letter:text-5xl first-letter:font-display first-letter:text-moss first-letter:mr-1">
                CarlyGage.com, a boutique portrait studio specializing in emotive and lifestyle imagery, is pleased to announce the official opening of its Spring 2026 booking calendar. As the demand for authentic, unposed photography continues to rise across North Texas, the studio is expanding availability to better serve clients seeking a <Link href="/locations/flower-mound-family-photographer" className="text-moss hover:text-moss/80 underline underline-offset-4 transition-colors">Flower Mound family photographer</Link> or sessions within the greater Dallas metroplex.
              </p>

              <h2 className="font-display text-3xl md:text-4xl text-slate mt-12 mb-6">
                Introducing Updated "Stress-Free" Session Guides
              </h2>

              <p>
                This season, Carly Gage is introducing updated "Stress-Free" session guides that highlight the natural beauty of the region. These guides offer families unique backdrop options, ranging from the urban texture of downtown Dallas to the wildflower fields characteristic of Flower Mound.
              </p>

              <blockquote className="border-l-4 border-moss pl-6 my-8 italic text-slate/70">
                <p className="text-xl md:text-2xl mb-4">
                  "The Spring 2026 season is about capturing connection over perfection."
                </p>
                <footer className="text-sm not-italic text-slate/60 uppercase tracking-[0.2em]">
                  — Carly Gage, Owner & Lead Creative
                </footer>
              </blockquote>

              <p>
                "Families are moving away from stiff, traditional posing," continues Gage. "Whether I am working as a <Link href="/locations/dallas-family-photographer" className="text-moss hover:text-moss/80 underline underline-offset-4 transition-colors">Dallas family photographer</Link> in the city or capturing a sunset session near Grapevine Lake, the goal is always to freeze genuine moments of joy and interaction."
              </p>

              <h2 className="font-display text-3xl md:text-4xl text-slate mt-12 mb-6">
                What's Available This Spring
              </h2>

              <p>
                The studio's new schedule includes options for:
              </p>

              <ul className="space-y-3 my-6 list-none">
                <li className="flex items-start gap-3">
                  <span className="text-moss mt-1">✓</span>
                  <span><strong>Full family sessions</strong> – Celebrating every member of your crew</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-moss mt-1">✓</span>
                  <span><strong>Maternity portraits</strong> – Honoring the beauty of this fleeting chapter</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-moss mt-1">✓</span>
                  <span><strong>Baby announcement lifestyle photography</strong> – Capturing the excitement of growing families</span>
                </li>
              </ul>

              <p>
                By focusing on a relaxed, play-based client experience, Carly Gage aims to remove the anxiety often associated with family portraits, allowing parents to simply be present with their children.
              </p>

              <div className="bg-sand/20 rounded-sm p-8 my-12 border-l-4 border-moss">
                <h3 className="font-display text-2xl text-slate mb-4">
                  Ready to Book Your Spring Session?
                </h3>
                <p className="mb-6">
                  Spring dates are filling quickly. Reach out today to reserve your preferred time slot and receive your complimentary session guide.
                </p>
                <Link 
                  href="/#contact"
                  className="inline-flex items-center gap-2 bg-moss text-bone px-6 py-3 rounded-sm text-[10px] uppercase tracking-[0.3em] hover:bg-moss/90 transition-all font-bold"
                >
                  Book Your Session
                </Link>
              </div>

              <h2 className="font-display text-3xl md:text-4xl text-slate mt-12 mb-6">
                About Carly Gage Photography
              </h2>

              <p>
                Based in Flower Mound, Texas, Carly Gage specializes in authentic family photography that captures real connection and joy. Serving families throughout the Dallas-Fort Worth metroplex, including Frisco, Southlake, Grapevine, and surrounding areas.
              </p>

              <div className="border-t border-sand pt-8 mt-12">
                <h3 className="font-display text-xl text-slate mb-4">Media Contact</h3>
                <p className="text-sm">
                  <strong>Carly Gage</strong><br />
                  Email: <a href="mailto:carlygagephotography@gmail.com" className="text-moss hover:text-moss/80 underline">carlygagephotography@gmail.com</a><br />
                  Website: <a href="https://carlygage.com" className="text-moss hover:text-moss/80 underline">https://carlygage.com</a>
                </p>
              </div>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-16 pt-8 border-t border-sand">
            <h3 className="font-display text-2xl text-slate mb-6">
              Explore More
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link 
                href="/#portfolios"
                className="group p-4 border border-sand rounded-sm hover:border-moss hover:bg-sand/20 transition-all"
              >
                <h4 className="font-display text-lg text-slate mb-2 group-hover:text-moss transition-colors">
                  View Portfolio
                </h4>
                <p className="text-sm text-slate/60">
                  See authentic family moments we've captured
                </p>
              </Link>
              <Link 
                href="/locations/flower-mound-family-photographer"
                className="group p-4 border border-sand rounded-sm hover:border-moss hover:bg-sand/20 transition-all"
              >
                <h4 className="font-display text-lg text-slate mb-2 group-hover:text-moss transition-colors">
                  Flower Mound Sessions
                </h4>
                <p className="text-sm text-slate/60">
                  Learn about local session locations
                </p>
              </Link>
              <Link 
                href="/#contact"
                className="group p-4 border border-sand rounded-sm hover:border-moss hover:bg-sand/20 transition-all"
              >
                <h4 className="font-display text-lg text-slate mb-2 group-hover:text-moss transition-colors">
                  Get In Touch
                </h4>
                <p className="text-sm text-slate/60">
                  Let's chat about your family session
                </p>
              </Link>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </>
  );
}
