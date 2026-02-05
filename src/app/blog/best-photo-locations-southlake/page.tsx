import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, MapPin, Camera } from "lucide-react";
import { Navigation } from "@/components/v3/Navigation";
import { Footer } from "@/components/v3/Footer";

export const metadata: Metadata = {
  title: "Best Photo Locations in Southlake, TX | Family Portrait Guide",
  description: "Discover the best photo locations in Southlake, Texas for family portraits. A local photographer's guide to Southlake Town Square, Bicentennial Park, Bob Jones Park and more.",
  alternates: {
    canonical: "/blog/best-photo-locations-southlake",
  },
  openGraph: {
    title: "Best Photo Locations in Southlake, TX for Family Portraits",
    description: "A Southlake family photographer's guide to the best locations for family portraits, senior pictures, and engagement photos.",
    url: "https://carlygage.com/blog/best-photo-locations-southlake",
    type: "article",
    publishedTime: "2026-02-05T00:00:00Z",
  },
};

export default function SouthlakeLocationsPost() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Best Photo Locations in Southlake, TX for Family Portraits",
    "description": "Discover the best photo locations in Southlake for stunning family portraits.",
    "datePublished": "2026-02-05T00:00:00Z",
    "author": {
      "@type": "Person",
      "name": "Carly Gage",
      "url": "https://carlygage.com"
    }
  };

  const locations = [
    {
      name: "Southlake Town Square",
      address: "1256 Main St, Southlake, TX 76092",
      vibe: "Upscale & Polished",
      bestFor: "Holiday photos, Lifestyle sessions, Seniors",
      description: "The crown jewel of Southlake, this beautifully designed town center offers European-inspired architecture, manicured landscaping, and that quintessential Southlake elegance. The fountain, clock tower, and tree-lined streets provide classic backdrops that never go out of style. During the holidays, the lights and decorations create pure magic.",
      tip: "Early morning before the shops open means empty streets and beautiful soft light. The Liberty Plaza fountain is iconic."
    },
    {
      name: "Bob Jones Park",
      address: "3901 N White Chapel Blvd, Southlake, TX 76092",
      vibe: "Natural & Spacious",
      bestFor: "Family sessions, Large groups, Active families",
      description: "Southlake's largest park offers everything from open meadows to wooded trails to scenic overlooks. The diverse landscapes mean we can capture completely different vibes within one session. It's also less manicured than Town Square, giving photos a more organic, natural feel.",
      tip: "The butterfly garden is a hidden gem for spring sessions. The trails near the disc golf course offer beautiful canopy coverage."
    },
    {
      name: "Bicentennial Park",
      address: "450 W Southlake Blvd, Southlake, TX 76092",
      vibe: "Classic Community",
      bestFor: "Families with young kids, Casual portraits",
      description: "A beloved neighborhood park with mature trees, open lawns, and a charming gazebo. The playground nearby means kids can burn energy before we start, and the shaded areas keep everyone comfortable during warmer months. It has that warm, community feel that Southlake is known for.",
      tip: "The gazebo works beautifully for posed family portraits. Weekday afternoons are quieter."
    },
    {
      name: "Lonesome Dove Park",
      address: "2660 E Dove Rd, Southlake, TX 76092",
      vibe: "Rustic Texas",
      bestFor: "Outdoor enthusiasts, Natural light lovers",
      description: "Named after the famous Texas novel, this park has a more rugged, authentically Texan feel. The combination of prairie grasses, wildflowers (in season), and mature trees creates backgrounds that feel wild and beautiful. It's perfect for families who want something less curated.",
      tip: "Spring brings wildflowers that add gorgeous pops of color. The eastern side has the best sunset views."
    },
    {
      name: "Chesapeake Park",
      address: "2827 E Continental Blvd, Southlake, TX 76092",
      vibe: "Corporate Chic",
      bestFor: "Professional headshots, Modern families",
      description: "The corporate campus park might sound unusual, but the landscaping here is immaculate—water features, manicured lawns, and clean architectural lines. It offers a polished, contemporary backdrop that works especially well for professional families who want a refined look.",
      tip: "The reflection pools create stunning mirror effects. Best photographed on weekends when the office buildings are quiet."
    },
    {
      name: "Southlake Trails",
      address: "Various trailheads throughout Southlake",
      vibe: "Adventure & Nature",
      bestFor: "Active families, Candid sessions",
      description: "Southlake's extensive trail system connects parks and neighborhoods throughout the city. These paths offer beautiful tree canopies, creek crossings, and that authentic 'family walk' feel that's perfect for lifestyle photography. We can walk, play, and let moments unfold naturally.",
      tip: "The trails connecting Bob Jones Park to Bicentennial offer some of my favorite hidden spots."
    },
    {
      name: "Private Estates & Ranches",
      address: "By arrangement",
      vibe: "Exclusive & Stunning",
      bestFor: "Clients wanting something truly unique",
      description: "Southlake is home to beautiful private properties with manicured grounds, horse farms, and estate gardens. I have connections to several property owners who allow photography access. These exclusive locations provide backdrops you won't see anywhere else.",
      tip: "Ask about private location access when booking. Availability varies by season."
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
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
              February 5, 2026
            </time>
            <span className="flex items-center gap-2 text-[9px] uppercase tracking-[0.3em] text-slate/40 font-bold">
              <MapPin className="w-3 h-3" />
              Southlake, Texas
            </span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-slate mb-6 leading-tight">
            Best Photo Locations in Southlake, TX: Where Elegance Meets Nature
          </h1>
          
          <p className="font-serif text-xl md:text-2xl text-slate/70 leading-relaxed">
            Southlake offers a unique blend of upscale town center charm and beautiful natural spaces. Here are my favorite spots for capturing families in this stunning community.
          </p>
        </header>

        <div className="max-w-6xl mx-auto px-4 md:px-8 mb-12">
          <div className="relative aspect-[16/9] rounded-sm overflow-hidden shadow-lg">
            <Image
              src="/images/blog/southlake-locations-hero.jpg"
              alt="Family portrait at park in Southlake Texas - dad lifting laughing baby while mom looks on"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="font-serif text-slate/80 leading-relaxed space-y-6 text-base md:text-lg">
              <p className="text-xl md:text-2xl font-display text-slate leading-relaxed first-letter:text-5xl first-letter:font-display first-letter:text-moss first-letter:mr-1">
                Southlake is one of the most photogenic cities in the DFW metroplex. As a <Link href="/locations/southlake-family-photographer" className="text-moss hover:text-moss/80 underline underline-offset-4 transition-colors">Southlake family photographer</Link>, I'm constantly impressed by how this community balances refined elegance with genuine natural beauty. Whether you want the polished perfection of Town Square or the rugged charm of Bob Jones Park, Southlake delivers.
              </p>

              <div className="bg-sand/20 rounded-sm p-6 my-8 border-l-4 border-moss">
                <h3 className="font-display text-xl text-slate mb-2">Why Southlake?</h3>
                <p className="text-sm m-0">
                  Southlake consistently ranks as one of the wealthiest and most desirable cities in Texas. The community's investment in public spaces, landscaping, and infrastructure shows in every corner of the city—making it a photographer's dream.
                </p>
              </div>

              {locations.map((location, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-sm p-8 my-8 shadow-sm border border-sand/50"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className="text-moss font-bold text-sm">#{index + 1}</span>
                      <h2 className="font-display text-2xl md:text-3xl text-slate">{location.name}</h2>
                    </div>
                    <span className="bg-moss/10 text-moss text-[10px] uppercase tracking-wider px-3 py-1 rounded-full font-bold">
                      {location.vibe}
                    </span>
                  </div>
                  
                  {location.address !== "By arrangement" && (
                    <p className="text-sm text-slate/60 mb-4 flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {location.address}
                    </p>
                  )}
                  
                  <p className="mb-4">{location.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 pt-6 border-t border-sand">
                    <div>
                      <h4 className="font-bold text-slate text-sm uppercase tracking-wider mb-2">Best For</h4>
                      <p className="text-sm text-slate/70">{location.bestFor}</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate text-sm uppercase tracking-wider mb-2">Pro Tip</h4>
                      <p className="text-sm text-slate/70 italic">{location.tip}</p>
                    </div>
                  </div>
                </div>
              ))}

              <h2 className="font-display text-3xl md:text-4xl text-slate mt-12 mb-6">
                Choosing the Right Southlake Location
              </h2>

              <ul className="space-y-3 my-6 list-none">
                <li className="flex items-start gap-3">
                  <span className="text-moss mt-1">→</span>
                  <span><strong>Want polished and elegant?</strong> Southlake Town Square, especially early morning</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-moss mt-1">→</span>
                  <span><strong>Large family reunion?</strong> Bob Jones Park has the space and variety</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-moss mt-1">→</span>
                  <span><strong>Toddlers who need to run?</strong> Bicentennial Park with its playground nearby</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-moss mt-1">→</span>
                  <span><strong>Something unique and private?</strong> Ask about estate access</span>
                </li>
              </ul>

              <div className="bg-moss/10 rounded-sm p-8 my-12 text-center">
                <h2 className="font-display text-3xl text-slate mb-4">
                  Ready for Your Southlake Session?
                </h2>
                <p className="mb-6 text-slate/70">
                  Let me help you choose the perfect Southlake location that matches your family's style and personality.
                </p>
                <Link 
                  href="/#contact"
                  className="inline-flex items-center gap-2 bg-moss text-bone px-8 py-4 rounded-sm text-[10px] uppercase tracking-[0.3em] hover:bg-moss/90 transition-all font-bold"
                >
                  Book Your Southlake Session
                </Link>
              </div>

              <div className="border-t border-sand pt-8 mt-12">
                <h3 className="font-display text-xl text-slate mb-4">About the Author</h3>
                <p className="text-sm">
                  <strong>Carly Gage</strong> is a <Link href="/locations/southlake-family-photographer" className="text-moss hover:text-moss/80 underline">Southlake family photographer</Link> based in nearby Flower Mound. She serves families throughout the DFW metroplex including <Link href="/locations/dallas-family-photographer" className="text-moss hover:text-moss/80 underline">Dallas</Link>, <Link href="/locations/frisco-family-photographer" className="text-moss hover:text-moss/80 underline">Frisco</Link>, and <Link href="/locations/flower-mound-family-photographer" className="text-moss hover:text-moss/80 underline">Flower Mound</Link>.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-sand">
            <h3 className="font-display text-2xl text-slate mb-6">
              More Location Guides
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link 
                href="/blog/best-photo-locations-flower-mound"
                className="group p-4 border border-sand rounded-sm hover:border-moss hover:bg-sand/20 transition-all"
              >
                <h4 className="font-display text-lg text-slate mb-2 group-hover:text-moss transition-colors">
                  Flower Mound Locations
                </h4>
                <p className="text-sm text-slate/60">
                  8 stunning spots in my home base
                </p>
              </Link>
              <Link 
                href="/blog/best-photo-locations-dallas"
                className="group p-4 border border-sand rounded-sm hover:border-moss hover:bg-sand/20 transition-all"
              >
                <h4 className="font-display text-lg text-slate mb-2 group-hover:text-moss transition-colors">
                  Dallas Locations
                </h4>
                <p className="text-sm text-slate/60">
                  10 iconic spots in the city
                </p>
              </Link>
              <Link 
                href="/blog/murrell-park-photography-guide"
                className="group p-4 border border-sand rounded-sm hover:border-moss hover:bg-sand/20 transition-all"
              >
                <h4 className="font-display text-lg text-slate mb-2 group-hover:text-moss transition-colors">
                  Murrell Park Deep Dive
                </h4>
                <p className="text-sm text-slate/60">
                  Complete guide to FM's best park
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
