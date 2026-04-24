import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, MapPin, Camera, Clock, Sun, TreesIcon, Users } from "lucide-react";
import { Navigation } from "@/components/v3/Navigation";
import { Footer } from "@/components/v3/Footer";

export const metadata: Metadata = {
  title: "Grapevine Botanical Gardens Maternity Guide | Best Photo Spots",
  description: "Complete maternity photography guide to Grapevine Botanical Gardens. Best photo spots, ideal timing, what to wear, and insider tips from a local DFW photographer.",
  alternates: {
    canonical: "/blog/grapevine-botanical-gardens-maternity-guide",
  },
  openGraph: {
    title: "Grapevine Botanical Gardens Maternity Guide | Carly Gage Photography",
    description: "Discover the best photo spots for maternity sessions at Grapevine Botanical Gardens. A local photographer's complete guide.",
    url: "https://carlygage.com/blog/grapevine-botanical-gardens-maternity-guide",
    type: "article",
    publishedTime: "2026-04-24T00:00:00Z",
    images: [
      {
        url: "https://carlygage.com/images/blog/murrell-park-hero.jpg",
        width: 1200,
        height: 800,
        alt: "Beautiful maternity portrait at Grapevine Botanical Gardens",
      },
    ],
  },
};

export default function GrapevineBotanicalGardensMaternityGuidePost() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Grapevine Botanical Gardens Maternity Guide: Best Photo Spots",
    "description": "Complete guide to maternity photography at Grapevine Botanical Gardens. Best spots, timing tips, and what to wear.",
    "image": "https://carlygage.com/images/blog/murrell-park-hero.jpg",
    "datePublished": "2026-04-24T00:00:00Z",
    "dateModified": "2026-04-24T00:00:00Z",
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
      "@id": "https://carlygage.com/blog/grapevine-botanical-gardens-maternity-guide"
    },
    "articleSection": "Location Guides",
    "keywords": "grapevine botanical gardens maternity photos, maternity photographer grapevine tx, DFW maternity photography locations, best places for maternity photos Dallas"
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Place",
    "name": "Grapevine Botanical Gardens at Heritage Park",
    "description": "A beautiful botanical garden in Grapevine, Texas, featuring walking trails, ponds, and diverse plant life perfect for photography.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "411 Ball St",
      "addressLocality": "Grapevine",
      "addressRegion": "TX",
      "postalCode": "76051",
      "addressCountry": "US"
    }
  };

  const photoSpots = [
    {
      name: "The Koi Pond Bridge",
      location: "Center of the gardens",
      description: "A picturesque wooden bridge crossing over a tranquil koi pond. The reflections in the water and lush greenery surrounding the bridge make it an incredibly romantic spot for maternity portraits.",
      bestFor: "Couple maternity shots, romantic framing",
      difficulty: "Easy - accessible and flat",
      timing: "Mid-afternoon when light filters through the trees",
      tip: "Wait for a quiet moment as this is a popular spot for visitors."
    },
    {
      name: "The Butterfly Garden",
      location: "South end of the park",
      description: "Filled with seasonal blooms and winding pathways, this area offers incredible color and texture. The variety of plants provides a vibrant, life-affirming backdrop perfect for celebrating new life.",
      bestFor: "Individual maternity portraits, colorful backdrops",
      difficulty: "Easy - paved pathways",
      timing: "Spring and summer months are peak blooming seasons",
      tip: "Wear soft, neutral colors here to let the bright floral background pop without clashing."
    },
    {
      name: "The Great Lawn",
      location: "North side",
      description: "A wide, open expanse of meticulously maintained green grass bordered by mature trees. It's the perfect spot for walking shots and sweeping, wide-angle environmental portraits.",
      bestFor: "Walking shots, wide compositions, family maternity with toddlers",
      difficulty: "Easy",
      timing: "Golden hour when the sun dips behind the trees",
      tip: "Bring a blanket for some relaxed, seated shots on the lawn."
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      
      <Navigation />
      
      <article className="min-h-screen bg-bone pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 md:px-8 mb-8">
          <Link 
            href="/blog"
            className="inline-flex items-center gap-2 text-[9px] uppercase tracking-[0.3em] text-slate/60 hover:text-slate transition-colors group"
          >
            <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>
        </div>

        <header className="max-w-4xl mx-auto px-4 md:px-8 mb-12">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="inline-block bg-moss/10 text-moss text-[9px] uppercase tracking-[0.3em] px-3 py-1 rounded-full font-bold">
              Location Guides
            </span>
            <time className="flex items-center gap-2 text-[9px] uppercase tracking-[0.3em] text-slate/40 font-bold">
              <Calendar className="w-3 h-3" />
              April 24, 2026
            </time>
            <span className="flex items-center gap-2 text-[9px] uppercase tracking-[0.3em] text-slate/40 font-bold">
              <MapPin className="w-3 h-3" />
              Grapevine, TX
            </span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-slate mb-6 leading-tight">
            Grapevine Botanical Gardens: The Ultimate Maternity Photography Guide
          </h1>
          
          <p className="font-serif text-xl md:text-2xl text-slate/70 leading-relaxed">
            Why the Grapevine Botanical Gardens at Heritage Park is one of my absolute favorite DFW locations for elegant, lush maternity portraits.
          </p>
        </header>

        <div className="max-w-4xl mx-auto px-4 md:px-8 mb-12">
          <div className="bg-moss/10 rounded-sm p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <MapPin className="w-6 h-6 text-moss mx-auto mb-2" />
              <p className="text-xs uppercase tracking-wider text-slate/60 mb-1">Address</p>
              <p className="text-sm font-bold text-slate">411 Ball St<br/>Grapevine, TX</p>
            </div>
            <div className="text-center">
              <Clock className="w-6 h-6 text-moss mx-auto mb-2" />
              <p className="text-xs uppercase tracking-wider text-slate/60 mb-1">Hours</p>
              <p className="text-sm font-bold text-slate">Dawn to Dusk<br/>Year-round</p>
            </div>
            <div className="text-center">
              <Sun className="w-6 h-6 text-moss mx-auto mb-2" />
              <p className="text-xs uppercase tracking-wider text-slate/60 mb-1">Best Light</p>
              <p className="text-sm font-bold text-slate">1-2 hours<br/>before sunset</p>
            </div>
            <div className="text-center">
              <Camera className="w-6 h-6 text-moss mx-auto mb-2" />
              <p className="text-xs uppercase tracking-wider text-slate/60 mb-1">Photo Permit</p>
              <p className="text-sm font-bold text-slate">Not required<br/>for personal use</p>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="font-serif text-slate/80 leading-relaxed space-y-6 text-base md:text-lg">
              <p className="text-xl md:text-2xl font-display text-slate leading-relaxed first-letter:text-5xl first-letter:font-display first-letter:text-moss first-letter:mr-1">
                When expecting mothers ask me for location recommendations that feel lush, elegant, and romantic, Grapevine Botanical Gardens is always at the top of my list. Located right in the heart of historic Grapevine, this manicured oasis offers an incredible variety of backdrops within a very short walking distance—which is a huge plus when you're 32 weeks pregnant!
              </p>

              <h2 className="font-display text-3xl md:text-4xl text-slate mt-12 mb-6">Why It's Perfect for Maternity Sessions</h2>
              <p>
                Unlike massive nature preserves where we have to hike to find the best light, the Botanical Gardens condense incredible beauty into an accessible space. The paved pathways are easy to navigate, there are plenty of benches if you need a quick rest, and the mature tree canopy provides gorgeous, flattering, diffused light even earlier in the afternoon.
              </p>

              <h2 className="font-display text-3xl md:text-4xl text-slate mt-12 mb-6">Best Photo Spots in the Gardens</h2>
              
              <div className="space-y-12">
                {photoSpots.map((spot, index) => (
                  <div key={index} className="bg-white rounded-sm p-8 shadow-sm border border-sand/50">
                    <h3 className="font-display text-2xl text-slate mb-2">{spot.name}</h3>
                    <p className="text-sm text-slate/50 font-sans uppercase tracking-widest mb-4">{spot.location}</p>
                    <p className="mb-6">{spot.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-sans">
                      <div>
                        <strong className="block text-slate mb-1">Best For:</strong>
                        <span className="text-slate/70">{spot.bestFor}</span>
                      </div>
                      <div>
                        <strong className="block text-slate mb-1">Best Time:</strong>
                        <span className="text-slate/70">{spot.timing}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <h2 className="font-display text-3xl md:text-4xl text-slate mt-12 mb-6">What to Wear</h2>
              <p>
                The gardens provide a very colorful, textured background. Because of this, I highly recommend sticking to solid, muted colors or very subtle patterns. Flowing maxi dresses in cream, sage green, dusty rose, or slate blue look absolutely incredible here. The movement of the fabric contrasts beautifully with the structured gardens.
              </p>

              <div className="bg-sand/20 p-8 rounded-sm my-12 text-center">
                <h3 className="font-display text-2xl text-slate mb-4">Ready to capture your maternity journey?</h3>
                <p className="mb-6 text-slate/70 max-w-lg mx-auto">
                  I'd love to help you document this incredible season of motherhood. Explore my <Link href="/flower-mound-maternity-photographer" className="text-moss underline">maternity portfolio</Link> or reach out below to start planning your session at the Grapevine Botanical Gardens.
                </p>
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 bg-moss text-bone px-8 py-4 rounded-sm text-[10px] uppercase tracking-[0.3em] hover:bg-moss/90 transition-all font-bold"
                >
                  Book Your Session
                </Link>
              </div>

              <div className="border-t border-sand pt-8 mt-12">
                <h3 className="font-display text-xl text-slate mb-4">About the Author</h3>
                <p className="text-sm">
                  <strong>Carly Gage</strong> is a DFW family and maternity photographer with over 10 years of experience. Based in Flower Mound, she serves <Link href="/locations/grapevine-family-photographer" className="text-moss hover:text-moss/80 underline">Grapevine</Link>, Southlake, and the broader metroplex. Her work has been featured in numerous publications, and alongside her wedding photography at <a href="https://www.anomadiclove.com" className="text-moss hover:text-moss/80 underline" target="_blank" rel="noopener noreferrer">A Nomadic Love</a>, she is known for her timeless, natural light approach. Check out her <Link href="/blog/best-photo-locations-flower-mound" className="text-moss underline">Flower Mound location guide</Link> for more beautiful spot recommendations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>
      <Footer />
    </>
  );
}
