import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar, MapPin, Camera } from "lucide-react";
import { Navigation } from "@/components/v3/Navigation";
import { Footer } from "@/components/v3/Footer";

export const metadata: Metadata = {
  title: "Best Photo Locations in Dallas for Family Portraits | Photographer's Guide",
  description: "Discover the top 10 photo locations in Dallas for stunning family portraits. A professional photographer's guide to White Rock Lake, Dallas Arboretum, Turtle Creek, and more.",
  alternates: {
    canonical: "/blog/best-photo-locations-dallas",
  },
  openGraph: {
    title: "Best Photo Locations in Dallas for Family Portraits",
    description: "A Dallas family photographer's insider guide to the 10 best locations for family portraits, engagement photos, and senior pictures.",
    url: "https://carlygage.com/blog/best-photo-locations-dallas",
    type: "article",
    publishedTime: "2026-02-05T00:00:00Z",
  },
};

export default function DallasLocationsPost() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Best Photo Locations in Dallas for Family Portraits",
    "description": "Discover the top 10 photo locations in Dallas for stunning family portraits.",
    "datePublished": "2026-02-05T00:00:00Z",
    "author": {
      "@type": "Person",
      "name": "Carly Gage",
      "url": "https://carlygage.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Carly Gage Photography"
    }
  };

  const locations = [
    {
      name: "White Rock Lake",
      address: "8300 E Lawther Dr, Dallas, TX 75218",
      vibe: "Urban Oasis",
      bestFor: "Families, Engagements, Seniors",
      description: "Dallas's beloved urban lake offers 9 miles of shoreline with stunning water views, mature trees, and that classic Dallas skyline in the distance. The sunset views from the east side are spectacular, and the variety of backdrops—from rocky shores to grassy meadows—means we can get completely different looks in one session.",
      tip: "The Sunset Bay area and Bath House Cultural Center provide the most dramatic backgrounds."
    },
    {
      name: "Dallas Arboretum",
      address: "8525 Garland Rd, Dallas, TX 75218",
      vibe: "Manicured Gardens",
      bestFor: "Spring sessions, Formal portraits, Maternity",
      description: "66 acres of manicured gardens overlooking White Rock Lake. The seasonal flower displays are world-renowned—tulips in spring, pumpkins in fall, and the 12 Days of Christmas in winter. It's the most 'polished' location in Dallas, perfect for families who want magazine-worthy perfection.",
      tip: "Requires admission fee and photography permit for professional sessions. Book weekdays to avoid crowds."
    },
    {
      name: "Turtle Creek Park",
      address: "3601 Turtle Creek Blvd, Dallas, TX 75219",
      vibe: "Uptown Elegance",
      bestFor: "Couples, Upscale families, Engagement",
      description: "A gorgeous linear park winding through one of Dallas's most affluent neighborhoods. The combination of the creek, mature trees, and glimpses of stunning architecture creates an editorial, sophisticated feel. This is where old Dallas money meets modern luxury.",
      tip: "The Robert E. Lee Park section (now called Turtle Creek Park) has the best tree canopy coverage."
    },
    {
      name: "Trinity Groves / Margaret Hunt Hill Bridge",
      address: "400 Singleton Blvd, Dallas, TX 75212",
      vibe: "Modern Urban",
      bestFor: "Edgy families, Urban portraits, Seniors",
      description: "The iconic white bridge has become a symbol of modern Dallas. The geometric lines, city skyline views, and industrial-chic Trinity Groves area offer something completely different from the natural settings. Perfect for families who want an urban, contemporary aesthetic.",
      tip: "Sunset from the west side of the bridge is phenomenal. The Continental Avenue Bridge nearby offers similar vibes with less foot traffic."
    },
    {
      name: "Klyde Warren Park",
      address: "2012 Woodall Rodgers Fwy, Dallas, TX 75201",
      vibe: "Urban Playground",
      bestFor: "Lifestyle sessions, Playful families",
      description: "This 5.2-acre park built over a freeway is the heart of downtown Dallas. Food trucks, games, and a relaxed atmosphere make it perfect for candid, playful family sessions. Kids can be kids while I capture genuine moments of joy.",
      tip: "The reading room and butterfly garden provide quieter corners away from the crowds."
    },
    {
      name: "Deep Ellum Murals",
      address: "2700 Main St, Dallas, TX 75226",
      vibe: "Artistic & Edgy",
      bestFor: "Creative families, Seniors, Couples",
      description: "Dallas's arts district is covered in stunning street art that changes regularly. The colorful murals provide bold, artistic backdrops that make portraits pop. This is for families who want something unique and full of personality.",
      tip: "Early morning sessions avoid the bar crowds. The 42 Murals project has maps of the best walls."
    },
    {
      name: "Reverchon Park",
      address: "3505 Maple Ave, Dallas, TX 75219",
      vibe: "Hidden Classic",
      bestFor: "Intimate family sessions, Toddlers",
      description: "One of Dallas's oldest parks, offering mature trees, open lawns, and a charming creek. Less crowded than White Rock, it feels like a secret garden in the middle of the city. The historic baseball field and creek areas provide beautiful natural settings.",
      tip: "The north end near the creek has the most photogenic spots."
    },
    {
      name: "Bishop Arts District",
      address: "400 W Davis St, Dallas, TX 75208",
      vibe: "Charming & Colorful",
      bestFor: "Lifestyle sessions, Colorful families",
      description: "Oak Cliff's beloved arts district offers colorful storefronts, vintage vibes, and a walkable neighborhood feel. The eclectic mix of murals, boutiques, and cafes creates a warm, inviting backdrop that feels authentically Dallas.",
      tip: "Sunday mornings are quieter. The streets themselves become beautiful backdrops."
    },
    {
      name: "The Cedars / Southside",
      address: "1709 S Lamar St, Dallas, TX 75215",
      vibe: "Industrial Chic",
      bestFor: "Modern families, Creative portraits",
      description: "Dallas's emerging neighborhood offers industrial buildings, new murals, and urban grit that's being reclaimed by artists and young families. The juxtaposition of old warehouses and new development creates interesting visual tension.",
      tip: "The Cedars Social area has great walls and fewer people than Deep Ellum."
    },
    {
      name: "Dallas Heritage Village",
      address: "1515 S Harwood St, Dallas, TX 75215",
      vibe: "Historic & Rustic",
      bestFor: "Holiday sessions, Vintage aesthetic",
      description: "A collection of preserved historic buildings from the 1840s-1910s creates an old-world backdrop unlike anywhere else in Dallas. The wooden structures, front porches, and rustic details are perfect for families who love a vintage, timeless look.",
      tip: "The Candlelight Christmas event makes for magical holiday portraits (permit required)."
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
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-slate mb-6 leading-tight">
            Best Photo Locations in Dallas for Family Portraits
          </h1>
          
          <p className="font-serif text-xl md:text-2xl text-slate/70 leading-relaxed">
            From White Rock Lake to Deep Ellum murals, here are my favorite spots for capturing Dallas families in their element.
          </p>
        </header>

        <div className="max-w-6xl mx-auto px-4 md:px-8 mb-12">
          <div className="relative aspect-[16/9] rounded-sm overflow-hidden shadow-lg bg-sand/20">
            <div className="absolute inset-0 flex items-center justify-center text-slate/40">
              <Camera className="w-16 h-16" />
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="font-serif text-slate/80 leading-relaxed space-y-6 text-base md:text-lg">
              <p className="text-xl md:text-2xl font-display text-slate leading-relaxed first-letter:text-5xl first-letter:font-display first-letter:text-moss first-letter:mr-1">
                Dallas offers an incredible diversity of photo locations—from serene lakesides to gritty urban murals, historic villages to modern architectural icons. As a <Link href="/locations/dallas-family-photographer" className="text-moss hover:text-moss/80 underline underline-offset-4 transition-colors">Dallas family photographer</Link>, I've explored every corner of this city to find the perfect backdrops for my clients. Here are my top 10 picks.
              </p>

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
                  
                  <p className="text-sm text-slate/60 mb-4 flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {location.address}
                  </p>
                  
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

              <div className="bg-moss/10 rounded-sm p-8 my-12 text-center">
                <h2 className="font-display text-3xl text-slate mb-4">
                  Ready to Explore Dallas Together?
                </h2>
                <p className="mb-6 text-slate/70">
                  Let me guide you to the perfect Dallas backdrop that matches your family's style.
                </p>
                <Link 
                  href="/#contact"
                  className="inline-flex items-center gap-2 bg-moss text-bone px-8 py-4 rounded-sm text-[10px] uppercase tracking-[0.3em] hover:bg-moss/90 transition-all font-bold"
                >
                  Book Your Dallas Session
                </Link>
              </div>

              <div className="border-t border-sand pt-8 mt-12">
                <h3 className="font-display text-xl text-slate mb-4">About the Author</h3>
                <p className="text-sm">
                  <strong>Carly Gage</strong> is a <Link href="/locations/dallas-family-photographer" className="text-moss hover:text-moss/80 underline">Dallas family photographer</Link> based in Flower Mound, serving families throughout the DFW metroplex. See more location guides for <Link href="/blog/best-photo-locations-flower-mound" className="text-moss hover:text-moss/80 underline">Flower Mound</Link> and <Link href="/blog/murrell-park-photography-guide" className="text-moss hover:text-moss/80 underline">Murrell Park</Link>.
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
