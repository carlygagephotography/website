import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, MapPin, Camera, Clock, Sun, TreesIcon, Users } from "lucide-react";
import { Navigation } from "@/components/v3/Navigation";
import { Footer } from "@/components/v3/Footer";

export const metadata: Metadata = {
  title: "Murrell Park Photography Guide | Best Spots & Tips for Family Photos",
  description: "Complete Murrell Park photography guide for Flower Mound families. Best photo spots, ideal timing, parking tips, and insider secrets from a local photographer.",
  alternates: {
    canonical: "/blog/murrell-park-photography-guide",
  },
  openGraph: {
    title: "Murrell Park Photography Guide | Flower Mound Family Photographer",
    description: "Discover the best photo spots at Murrell Park for stunning family portraits. A local photographer's complete guide to this Flower Mound gem.",
    url: "https://carlygage.com/blog/murrell-park-photography-guide",
    type: "article",
    publishedTime: "2026-02-05T00:00:00Z",
    images: [
      {
        url: "https://carlygage.com/images/blog/murrell-park-hero.jpg",
        width: 1200,
        height: 800,
        alt: "Golden hour family portrait at Murrell Park overlooking Grapevine Lake",
      },
    ],
  },
};

export default function MurrellParkGuidePost() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Murrell Park Photography Guide: Best Spots for Family Photos in Flower Mound",
    "description": "Complete guide to photographing families at Murrell Park in Flower Mound, Texas. Best spots, timing tips, and insider secrets from a local photographer.",
    "image": "https://carlygage.com/images/blog/murrell-park-hero.jpg",
    "datePublished": "2026-02-05T00:00:00Z",
    "dateModified": "2026-02-05T00:00:00Z",
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
      "@id": "https://carlygage.com/blog/murrell-park-photography-guide"
    },
    "articleSection": "Location Guides",
    "keywords": "Murrell Park photos, Murrell Park family photography, Flower Mound photo locations, Grapevine Lake photography, family portraits Flower Mound"
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Place",
    "name": "Murrell Park",
    "description": "A scenic park on the shores of Grapevine Lake in Flower Mound, Texas, popular for family photography and outdoor recreation.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2933 Simmons Rd",
      "addressLocality": "Flower Mound",
      "addressRegion": "TX",
      "postalCode": "75022",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 33.0165,
      "longitude": -97.0769
    }
  };

  const photoSpots = [
    {
      name: "The Tall Grass Meadow",
      location: "West side of main parking area",
      description: "This is THE spot that made Murrell Park famous among photographers. Tall native grasses that turn golden in late summer and early fall, with Grapevine Lake visible in the background. During golden hour, the sun backlights the grass creating that dreamy, magical glow.",
      bestFor: "Family portraits, maternity, seniors, couples",
      difficulty: "Easy - flat terrain, close to parking",
      timing: "1 hour before sunset for backlit magic",
      tip: "Position your back to the sun for that beautiful rim lighting effect. The grasses are tallest from August through October."
    },
    {
      name: "The Rocky Shoreline",
      location: "Down the main trail toward the lake",
      description: "Where the park meets Grapevine Lake, you'll find beautiful rocky outcrops and water views. The combination of natural stone, water, and sky creates dramatic, editorial-style portraits that feel like you're miles from the suburbs.",
      bestFor: "Adventurous families, engagement photos, creative portraits",
      difficulty: "Moderate - requires walking and some uneven terrain",
      timing: "Anytime during golden hour; stunning at sunrise too",
      tip: "Wear sturdy shoes and watch little ones near the water. Water levels vary by season."
    },
    {
      name: "The Oak Grove",
      location: "Eastern portion of the park",
      description: "A cluster of mature oak trees providing natural shade and dappled light. Perfect for hot summer days when direct sun would be too harsh, or for families with very young children who need frequent breaks.",
      bestFor: "Summer sessions, young families, relaxed lifestyle shots",
      difficulty: "Easy - shaded and accessible",
      timing: "Flexible - shade makes this work throughout the afternoon",
      tip: "Overcast days make this spot even better. The soft light is incredibly flattering."
    },
    {
      name: "The Hill Overlook",
      location: "Follow the trail north from main parking",
      description: "A gentle rise that offers panoramic views of the lake and surrounding landscape. The elevation change adds visual interest and gives that 'epic' feeling to family portraits.",
      bestFor: "Large family groups, dramatic compositions, anniversary sessions",
      difficulty: "Moderate - uphill walk required",
      timing: "Sunset for best light and dramatic skies",
      tip: "Position families with their backs to the view, then turn them around for a reveal shot with the landscape behind them."
    },
    {
      name: "The Hidden Cove",
      location: "Secluded area (I'll show you when you book!)",
      description: "My secret favorite spot that most park visitors never find. A quiet, intimate setting away from the crowds with beautiful natural framing. I save this one for clients who book full sessions.",
      bestFor: "Intimate family moments, maternity, couples",
      difficulty: "Moderate - requires knowing where to go",
      timing: "Golden hour",
      tip: "Book a session with me and I'll take you here!"
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
              Location Guides
            </span>
            <time className="flex items-center gap-2 text-[9px] uppercase tracking-[0.3em] text-slate/40 font-bold">
              <Calendar className="w-3 h-3" />
              February 5, 2026
            </time>
            <span className="flex items-center gap-2 text-[9px] uppercase tracking-[0.3em] text-slate/40 font-bold">
              <MapPin className="w-3 h-3" />
              Flower Mound, TX
            </span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-slate mb-6 leading-tight">
            Murrell Park Photography Guide: A Local Photographer's Deep Dive
          </h1>
          
          <p className="font-serif text-xl md:text-2xl text-slate/70 leading-relaxed">
            Everything you need to know about photographing at Flower Mound's most photogenic park—from the best spots to insider tips I've learned over hundreds of sessions.
          </p>
        </header>

        {/* Quick Info Box */}
        <div className="max-w-4xl mx-auto px-4 md:px-8 mb-12">
          <div className="bg-moss/10 rounded-sm p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <MapPin className="w-6 h-6 text-moss mx-auto mb-2" />
              <p className="text-xs uppercase tracking-wider text-slate/60 mb-1">Address</p>
              <p className="text-sm font-bold text-slate">2933 Simmons Rd<br/>Flower Mound, TX</p>
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

        {/* Featured Image */}
        <div className="max-w-6xl mx-auto px-4 md:px-8 mb-12">
          <div className="relative aspect-[16/9] rounded-sm overflow-hidden shadow-lg">
            <Image
              src="/images/blog/murrell-park-hero.jpg"
              alt="Family walking through tall grass field at Murrell Park in Flower Mound during golden hour"
              fill
              className="object-cover"
              priority
            />
          </div>
          <p className="text-center text-sm text-slate/50 mt-4 italic">
            The famous tall grass meadow at Murrell Park during golden hour
          </p>
        </div>

        {/* Article Content */}
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="font-serif text-slate/80 leading-relaxed space-y-6 text-base md:text-lg">
              <p className="text-xl md:text-2xl font-display text-slate leading-relaxed first-letter:text-5xl first-letter:font-display first-letter:text-moss first-letter:mr-1">
                Ask any <Link href="/" className="text-moss hover:text-moss/80 underline underline-offset-4 transition-colors">Flower Mound family photographer</Link> about their favorite location, and Murrell Park will almost certainly come up. Situated on the western shore of Grapevine Lake, this 48-acre park offers the kind of natural beauty that makes North Texas special—rolling prairies, native grasses, waterfront views, and that golden-hour glow that photographers dream about.
              </p>

              <p>
                I've photographed at Murrell Park literally hundreds of times over the past decade. I know which spots get crowded, which areas have the best light at different times of year, and where to find those hidden gems that give my clients unique, magazine-worthy images. Today, I'm sharing everything I've learned. If you're planning a pregnancy or growing-family session here, my <Link href="/flower-mound-maternity-photographer" className="text-moss hover:text-moss/80 underline underline-offset-4 transition-colors">Flower Mound maternity photographer</Link> page is a great next stop too.
              </p>

              {/* Why Murrell Park Section */}
              <h2 className="font-display text-3xl md:text-4xl text-slate mt-12 mb-6">
                Why Murrell Park Is My #1 Recommendation
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="bg-white p-6 rounded-sm border border-sand/50">
                  <TreesIcon className="w-8 h-8 text-moss mb-3" />
                  <h4 className="font-display text-lg text-slate mb-2">Variety in One Location</h4>
                  <p className="text-sm text-slate/70">Meadows, lake views, trees, rocky shores—we can get completely different looks without driving anywhere else.</p>
                </div>
                <div className="bg-white p-6 rounded-sm border border-sand/50">
                  <Sun className="w-8 h-8 text-moss mb-3" />
                  <h4 className="font-display text-lg text-slate mb-2">Exceptional Golden Hour Light</h4>
                  <p className="text-sm text-slate/70">The western exposure means the sun sets directly over the lake, creating stunning backlit portraits.</p>
                </div>
                <div className="bg-white p-6 rounded-sm border border-sand/50">
                  <Users className="w-8 h-8 text-moss mb-3" />
                  <h4 className="font-display text-lg text-slate mb-2">Space for Every Family Size</h4>
                  <p className="text-sm text-slate/70">Whether it's just the four of you or a multi-generational reunion, there's room to spread out.</p>
                </div>
                <div className="bg-white p-6 rounded-sm border border-sand/50">
                  <MapPin className="w-8 h-8 text-moss mb-3" />
                  <h4 className="font-display text-lg text-slate mb-2">Accessible but Not Overdone</h4>
                  <p className="text-sm text-slate/70">Easy parking and flat trails, but large enough that we can find private spots away from other visitors.</p>
                </div>
              </div>

              {/* Photo Spots Section */}
              <h2 className="font-display text-3xl md:text-4xl text-slate mt-12 mb-6">
                The 5 Best Photo Spots at Murrell Park
              </h2>

              {photoSpots.map((spot, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-sm p-8 my-8 shadow-sm border border-sand/50"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className="text-moss font-bold text-sm">Spot #{index + 1}</span>
                      <h3 className="font-display text-2xl text-slate">{spot.name}</h3>
                      <p className="text-sm text-slate/60">{spot.location}</p>
                    </div>
                    <span className={`text-[10px] uppercase tracking-wider px-3 py-1 rounded-full font-bold ${
                      spot.difficulty === 'Easy' ? 'bg-green-100 text-green-700' :
                      spot.difficulty.includes('Moderate') ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {spot.difficulty.split(' - ')[0]}
                    </span>
                  </div>
                  
                  <p className="mb-4">{spot.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 pt-6 border-t border-sand text-sm">
                    <div>
                      <h4 className="font-bold text-slate uppercase tracking-wider mb-1">Best For</h4>
                      <p className="text-slate/70">{spot.bestFor}</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate uppercase tracking-wider mb-1">Best Timing</h4>
                      <p className="text-slate/70">{spot.timing}</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate uppercase tracking-wider mb-1">Pro Tip</h4>
                      <p className="text-slate/70 italic">{spot.tip}</p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Practical Info Section */}
              <h2 className="font-display text-3xl md:text-4xl text-slate mt-12 mb-6">
                Practical Information for Your Visit
              </h2>

              <h3 className="font-display text-xl text-slate mt-8 mb-4">Parking</h3>
              <p>
                The main parking lot is located at 2933 Simmons Road. On weekday evenings, parking is usually easy. Weekend golden hour? Arrive 30-45 minutes early to secure a spot, especially in fall when the grasses are at their peak.
              </p>

              <h3 className="font-display text-xl text-slate mt-8 mb-4">What to Bring</h3>
              <ul className="space-y-2 list-none">
                <li className="flex items-start gap-3">
                  <span className="text-moss mt-1">✓</span>
                  <span><strong>Comfortable shoes</strong> – Some trails are unpaved and dusty</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-moss mt-1">✓</span>
                  <span><strong>Bug spray</strong> – Especially in summer months</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-moss mt-1">✓</span>
                  <span><strong>Water bottles</strong> – There are no water fountains</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-moss mt-1">✓</span>
                  <span><strong>Snacks for kids</strong> – I always recommend a pre-session snack</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-moss mt-1">✓</span>
                  <span><strong>A blanket</strong> – For sitting shots and keeping clean</span>
                </li>
              </ul>

              <h3 className="font-display text-xl text-slate mt-8 mb-4">Best Seasons</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
                <div className="bg-green-50 p-4 rounded-sm text-center">
                  <p className="font-bold text-green-700">Spring</p>
                  <p className="text-xs text-green-600">Wildflowers, fresh green</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-sm text-center">
                  <p className="font-bold text-yellow-700">Summer</p>
                  <p className="text-xs text-yellow-600">Hot! Early or late only</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-sm text-center border-2 border-orange-300">
                  <p className="font-bold text-orange-700">Fall ★</p>
                  <p className="text-xs text-orange-600">Golden grasses, best light</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-sm text-center">
                  <p className="font-bold text-blue-700">Winter</p>
                  <p className="text-xs text-blue-600">Dramatic skies, quiet</p>
                </div>
              </div>

              <h3 className="font-display text-xl text-slate mt-8 mb-4">Photography Permits</h3>
              <p>
                Good news: Murrell Park is a public park, and no permit is required for standard portrait photography. Commercial shoots with large crews may have different requirements—check with the Town of Flower Mound if you're planning something elaborate.
              </p>

              {/* Booking CTA */}
              <div className="bg-moss/10 rounded-sm p-8 my-12 text-center">
                <h2 className="font-display text-3xl text-slate mb-4">
                  Ready for Your Murrell Park Session?
                </h2>
                <p className="mb-6 text-slate/70">
                  Let me show you the best spots and capture stunning portraits of your family at my favorite Flower Mound location.
                </p>
                <Link 
                  href="/#contact"
                  className="inline-flex items-center gap-2 bg-moss text-bone px-8 py-4 rounded-sm text-[10px] uppercase tracking-[0.3em] hover:bg-moss/90 transition-all font-bold"
                >
                  Book Your Murrell Park Session
                </Link>
              </div>

              <div className="border-t border-sand pt-8 mt-12">
                <h3 className="font-display text-xl text-slate mb-4">About the Author</h3>
                <p className="text-sm">
                  <strong>Carly Gage</strong> is a <Link href="/" className="text-moss hover:text-moss/80 underline">Flower Mound family photographer</Link> who has photographed hundreds of sessions at Murrell Park over the past decade. Based in Flower Mound, she serves families throughout the Dallas-Fort Worth area including <Link href="/locations/dallas-family-photographer" className="text-moss hover:text-moss/80 underline">Dallas</Link>, <Link href="/locations/southlake-family-photographer" className="text-moss hover:text-moss/80 underline">Southlake</Link>, and <Link href="/locations/frisco-family-photographer" className="text-moss hover:text-moss/80 underline">Frisco</Link>.
                </p>
              </div>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-16 pt-8 border-t border-sand">
            <h3 className="font-display text-2xl text-slate mb-6">
              Related Guides
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link 
                href="/blog/best-photo-locations-flower-mound"
                className="group p-4 border border-sand rounded-sm hover:border-moss hover:bg-sand/20 transition-all"
              >
                <h4 className="font-display text-lg text-slate mb-2 group-hover:text-moss transition-colors">
                  All Flower Mound Locations
                </h4>
                <p className="text-sm text-slate/60">
                  Explore 8 more spots beyond Murrell Park
                </p>
              </Link>
              <Link 
                href="/blog/spring-family-portrait-tips-dfw"
                className="group p-4 border border-sand rounded-sm hover:border-moss hover:bg-sand/20 transition-all"
              >
                <h4 className="font-display text-lg text-slate mb-2 group-hover:text-moss transition-colors">
                  Spring Portrait Tips
                </h4>
                <p className="text-sm text-slate/60">
                  What to wear and when to book
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
                  Book your local session today
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
