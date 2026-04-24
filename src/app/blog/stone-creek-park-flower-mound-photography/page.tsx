import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, MapPin, Camera, Clock, Sun } from "lucide-react";
import { Navigation } from "@/components/v3/Navigation";
import { Footer } from "@/components/v3/Footer";

export const metadata: Metadata = {
  title: "Stone Creek Park Photography Guide | Flower Mound, TX",
  description: "A complete guide to family photography at Stone Creek Park in Flower Mound, TX. Learn about the best spots along the rocky creek bed, lighting tips, and accessibility.",
  alternates: {
    canonical: "/blog/stone-creek-park-flower-mound-photography",
  },
  openGraph: {
    title: "Stone Creek Park Photography Guide | Flower Mound",
    description: "Discover why the rocky creek beds of Stone Creek Park make for stunning family portraits. A local photographer's guide.",
    url: "https://carlygage.com/blog/stone-creek-park-flower-mound-photography",
    type: "article",
    publishedTime: "2026-06-15T00:00:00Z",
    images: [
      {
        url: "https://carlygage.com/images/blog/flower-mound-locations-hero.jpg",
        width: 1200,
        height: 800,
        alt: "Family photography at Stone Creek Park in Flower Mound",
      },
    ],
  },
};

export default function StoneCreekParkGuidePost() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Stone Creek Park: Flower Mound's Hidden Photography Gem",
    "description": "Complete guide to photographing families at Stone Creek Park in Flower Mound, Texas. Best spots along the creek bed and timing tips.",
    "image": "https://carlygage.com/images/blog/flower-mound-locations-hero.jpg",
    "datePublished": "2026-06-15T00:00:00Z",
    "dateModified": "2026-06-15T00:00:00Z",
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
      "@id": "https://carlygage.com/blog/stone-creek-park-flower-mound-photography"
    },
    "articleSection": "Location Guides",
    "keywords": "stone creek park flower mound, flower mound family photographer, stone creek park photos, dfw photography locations, creek bed photos"
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Place",
    "name": "Stone Creek Park",
    "description": "A secluded park in Flower Mound known for its rocky creek bed and mature trees, offering a Hill Country aesthetic in DFW.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1400 Fuqua Dr",
      "addressLocality": "Flower Mound",
      "addressRegion": "TX",
      "postalCode": "75028",
      "addressCountry": "US"
    }
  };

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
            href="/blog/best-photo-locations-flower-mound"
            className="inline-flex items-center gap-2 text-[9px] uppercase tracking-[0.3em] text-slate/60 hover:text-slate transition-colors group"
          >
            <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
            Back to Location Guides
          </Link>
        </div>

        <header className="max-w-4xl mx-auto px-4 md:px-8 mb-12">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="inline-block bg-moss/10 text-moss text-[9px] uppercase tracking-[0.3em] px-3 py-1 rounded-full font-bold">
              Location Guides
            </span>
            <time className="flex items-center gap-2 text-[9px] uppercase tracking-[0.3em] text-slate/40 font-bold">
              <Calendar className="w-3 h-3" />
              June 15, 2026
            </time>
            <span className="flex items-center gap-2 text-[9px] uppercase tracking-[0.3em] text-slate/40 font-bold">
              <MapPin className="w-3 h-3" />
              Flower Mound, TX
            </span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-slate mb-6 leading-tight">
            Stone Creek Park: Flower Mound's Hidden Photography Gem
          </h1>
          
          <p className="font-serif text-xl md:text-2xl text-slate/70 leading-relaxed">
            Why this neighborhood park's rocky creek bed is one of the most unique backdrops for family portraits in all of North Texas.
          </p>
        </header>

        <div className="max-w-4xl mx-auto px-4 md:px-8 mb-12">
          <div className="bg-moss/10 rounded-sm p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <MapPin className="w-6 h-6 text-moss mx-auto mb-2" />
              <p className="text-xs uppercase tracking-wider text-slate/60 mb-1">Address</p>
              <p className="text-sm font-bold text-slate">1400 Fuqua Dr<br/>Flower Mound, TX</p>
            </div>
            <div className="text-center">
              <Clock className="w-6 h-6 text-moss mx-auto mb-2" />
              <p className="text-xs uppercase tracking-wider text-slate/60 mb-1">Vibe</p>
              <p className="text-sm font-bold text-slate">Intimate<br/>& Rocky</p>
            </div>
            <div className="text-center">
              <Sun className="w-6 h-6 text-moss mx-auto mb-2" />
              <p className="text-xs uppercase tracking-wider text-slate/60 mb-1">Best Light</p>
              <p className="text-sm font-bold text-slate">Late Afternoon<br/>(Canopy shading)</p>
            </div>
            <div className="text-center">
              <Camera className="w-6 h-6 text-moss mx-auto mb-2" />
              <p className="text-xs uppercase tracking-wider text-slate/60 mb-1">Accessibility</p>
              <p className="text-sm font-bold text-slate">Moderate<br/>(Uneven rocks)</p>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="font-serif text-slate/80 leading-relaxed space-y-6 text-base md:text-lg">
              <p className="text-xl md:text-2xl font-display text-slate leading-relaxed first-letter:text-5xl first-letter:font-display first-letter:text-moss first-letter:mr-1">
                If you were to drive past Stone Creek Park, you might dismiss it as just another small neighborhood playground in Flower Mound. But tucked behind the swingsets and the pavilion lies one of the most stunning, unique geographical features in the DFW metroplex: a sprawling, rocky creek bed that feels like a slice of the Texas Hill Country.
              </p>

              <h2 className="font-display text-3xl md:text-4xl text-slate mt-12 mb-6">The Magic of the Creek Bed</h2>
              <p>
                What makes Stone Creek Park so special for family photography is the texture. Instead of the typical tall grasses or manicured lawns, the creek bed is lined with massive, smooth stone slabs and surrounded by a dense canopy of mature trees. The way the light filters through those trees and bounces off the pale stones creates an incredibly flattering, diffused light that photographers dream about.
              </p>

              <h2 className="font-display text-3xl md:text-4xl text-slate mt-12 mb-6">Things to Consider Before Booking Here</h2>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-sm shadow-sm border border-sand/50">
                  <h3 className="font-display text-2xl text-slate mb-2">1. Accessibility & Safety</h3>
                  <p className="text-slate/70">
                    To get down into the creek bed, you do have to navigate some uneven, rocky steps. Because of this, I generally do not recommend this location for extended family sessions involving elderly grandparents, or for maternity sessions late in the third trimester where balance might be an issue.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-sm shadow-sm border border-sand/50">
                  <h3 className="font-display text-2xl text-slate mb-2">2. The Weather Factor</h3>
                  <p className="text-slate/70">
                    This is a true creek bed. If it has rained heavily in the days leading up to our session, the rocks will be slippery, the water level will be high, and the area will likely be too muddy to use effectively. We always need a backup location plan if we schedule a shoot here during the rainy spring season.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-sm shadow-sm border border-sand/50">
                  <h3 className="font-display text-2xl text-slate mb-2">3. Footwear is Key</h3>
                  <p className="text-slate/70">
                    Stilettos and heels are an absolute no-go at Stone Creek Park. I recommend wearing flat boots, sensible sandals, or bringing a comfortable pair of walking shoes for the journey down to the rocks, where you can then switch or even go barefoot for a more organic feel.
                  </p>
                </div>
              </div>

              <div className="bg-moss/10 p-8 rounded-sm my-12 text-center">
                <h3 className="font-display text-2xl text-slate mb-4">Want to explore more local spots?</h3>
                <p className="mb-6 text-slate/70 max-w-lg mx-auto">
                  Stone Creek Park is just one of many beautiful options in our area. Check out my comprehensive <Link href="/blog/best-photo-locations-flower-mound" className="text-moss underline">Flower Mound Photo Locations Guide</Link> to discover 8 other stunning spots for your family's next portrait session.
                </p>
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 bg-moss text-bone px-8 py-4 rounded-sm text-[10px] uppercase tracking-[0.3em] hover:bg-moss/90 transition-all font-bold"
                >
                  Book Your Session
                </Link>
              </div>

            </div>
          </div>
        </div>
      </article>
      <Footer />
    </>
  );
}
