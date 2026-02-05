import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, MapPin, Camera } from "lucide-react";
import { Navigation } from "@/components/v3/Navigation";
import { Footer } from "@/components/v3/Footer";

export const metadata: Metadata = {
  title: "Best Photo Locations in Flower Mound, TX | Local Photographer's Guide 2026",
  description: "Discover the top 8 photo locations in Flower Mound, Texas for stunning family portraits. A local photographer's insider guide to Murrell Park, Grapevine Lake, Heritage Park, and hidden gems.",
  alternates: {
    canonical: "/blog/best-photo-locations-flower-mound",
  },
  openGraph: {
    title: "Best Photo Locations in Flower Mound, TX | Local Photographer's Guide",
    description: "A Flower Mound photographer's insider guide to the 8 best locations for family portraits, engagement photos, and senior pictures.",
    url: "https://carlygage.com/blog/best-photo-locations-flower-mound",
    type: "article",
    publishedTime: "2026-02-05T00:00:00Z",
    images: [
      {
        url: "https://carlygage.com/images/blog/flower-mound-locations-hero.jpg",
        width: 1200,
        height: 800,
        alt: "Golden hour family portrait at Murrell Park in Flower Mound, Texas",
      },
    ],
  },
};

export default function FlowerMoundLocationsPost() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Best Photo Locations in Flower Mound, TX: A Local Photographer's Guide",
    "description": "Discover the top 8 photo locations in Flower Mound, Texas for stunning family portraits, engagement photos, and senior pictures.",
    "image": "https://carlygage.com/images/blog/flower-mound-locations-hero.jpg",
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
      "@id": "https://carlygage.com/blog/best-photo-locations-flower-mound"
    },
    "articleSection": "Location Guides",
    "keywords": "Flower Mound photo locations, Murrell Park photography, Grapevine Lake photos, Flower Mound family photographer, best places for photos Flower Mound"
  };

  const locations = [
    {
      name: "Murrell Park",
      address: "2933 Simmons Rd, Flower Mound, TX 75022",
      vibe: "Rustic Lakeside",
      bestFor: "Families, Seniors, Engagements",
      bestTime: "Golden hour (1-2 hours before sunset)",
      description: "My absolute favorite location in Flower Mound. Murrell Park sits on the shores of Grapevine Lake, offering tall native grasses, open meadows, and stunning water views. The golden hour light here is unmatched—it creates that dreamy, sun-kissed glow that makes every portrait magical.",
      tips: "Arrive early to secure parking on busy weekends. The trails near the water offer the best backdrops. Wear shoes you don't mind getting a little dusty.",
      mapUrl: "https://maps.google.com/?q=Murrell+Park+Flower+Mound+TX"
    },
    {
      name: "Grapevine Lake Shoreline",
      address: "Multiple access points along FM 2499",
      vibe: "Natural & Wild",
      bestFor: "Adventurous families, Maternity, Couples",
      bestTime: "Sunset for dramatic skies",
      description: "The undeveloped stretches along Grapevine Lake offer that raw, untamed Texas beauty. Tall grasses swaying in the wind, wildflowers in spring, and dramatic storm clouds rolling in—this is where magic happens for families who want something different.",
      tips: "I have several secret spots along the lake that most people don't know about. These are perfect for clients who want privacy and unique backdrops.",
      mapUrl: "https://maps.google.com/?q=Grapevine+Lake+Flower+Mound"
    },
    {
      name: "Heritage Park",
      address: "600 Spinks Rd, Flower Mound, TX 75028",
      vibe: "Classic & Shaded",
      bestFor: "Families with young children, Mini sessions",
      bestTime: "Late afternoon (shaded areas work all day)",
      description: "Heritage Park is Flower Mound's charming community gathering spot with mature trees, open lawns, and classic Texas architecture. The covered pavilions and mature oak trees provide natural shade, making it perfect for summer sessions when keeping kids comfortable is priority one.",
      tips: "The playground is nearby, so it's easy to let kids burn energy before we start. Great for families worried about toddler meltdowns.",
      mapUrl: "https://maps.google.com/?q=Heritage+Park+Flower+Mound+TX"
    },
    {
      name: "The Cross Timbers Trail",
      address: "Various trailheads throughout Flower Mound",
      vibe: "Wooded & Intimate",
      bestFor: "Lifestyle sessions, Maternity, Intimate portraits",
      bestTime: "Overcast days or filtered afternoon light",
      description: "The Cross Timbers region gives Flower Mound its unique character—rolling hills covered in native post oak and blackjack oak trees. These trails offer dappled light, textured bark backgrounds, and an earthy, organic feel that's distinctly North Texas.",
      tips: "Overcast days are actually ideal here—the cloud cover acts like a giant softbox, eliminating harsh shadows.",
      mapUrl: "https://maps.google.com/?q=Cross+Timbers+Trail+Flower+Mound"
    },
    {
      name: "Bakersfield Park",
      address: "1201 Duncan Ln, Flower Mound, TX 75028",
      vibe: "Open & Airy",
      bestFor: "Large family groups, Extended family sessions",
      bestTime: "Golden hour",
      description: "When you've got grandparents, aunts, uncles, and a dozen cousins to photograph, you need space. Bakersfield Park offers wide open fields that can accommodate large groups while still providing beautiful, natural backdrops.",
      tips: "The rolling terrain adds visual interest to group shots. I love positioning families on the gentle slopes for dynamic compositions.",
      mapUrl: "https://maps.google.com/?q=Bakersfield+Park+Flower+Mound+TX"
    },
    {
      name: "Twin Coves Park",
      address: "204 W Lakeview Dr, Flower Mound, TX 75022",
      vibe: "Waterfront Resort",
      bestFor: "Beach-style photos, Playful family sessions",
      bestTime: "Early morning or golden hour",
      description: "For families who want that beach vacation feel without leaving Texas, Twin Coves delivers. Sandy shorelines, crystal-clear water views, and that relaxed lakeside atmosphere make this perfect for playful, candid family moments.",
      tips: "Kids can splash in the shallows during our session—some of my favorite shots are of little ones discovering the water!",
      mapUrl: "https://maps.google.com/?q=Twin+Coves+Park+Flower+Mound+TX"
    },
    {
      name: "Rheudasil Park",
      address: "2101 Rheudasil Dr, Flower Mound, TX 75028",
      vibe: "Neighborhood Charm",
      bestFor: "Quick mini sessions, Casual family photos",
      bestTime: "Late afternoon",
      description: "This hidden neighborhood gem offers mature trees, walking paths, and a quieter atmosphere than the larger parks. It's perfect for families who want beautiful photos without trekking across a massive park with little ones.",
      tips: "Less crowded than Murrell or Heritage, so we'll likely have the space to ourselves.",
      mapUrl: "https://maps.google.com/?q=Rheudasil+Park+Flower+Mound+TX"
    },
    {
      name: "Private Fields & Ranches",
      address: "Various locations (by arrangement)",
      vibe: "Exclusive & Stunning",
      bestFor: "Clients wanting something truly unique",
      bestTime: "Golden hour or sunrise",
      description: "I've cultivated relationships with local property owners who allow me to use their land for photo sessions. Rolling pastures, rustic fences, wildflower fields—these private locations offer backdrops you won't see anywhere else on Instagram.",
      tips: "Ask about private location access when booking. Availability varies by season.",
      mapUrl: null
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
              Flower Mound, Texas
            </span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-slate mb-6 leading-tight">
            Best Photo Locations in Flower Mound, TX: A Local Photographer's Guide
          </h1>
          
          <p className="font-serif text-xl md:text-2xl text-slate/70 leading-relaxed">
            After 10+ years photographing families in Flower Mound, these are my favorite spots for capturing authentic moments against stunning North Texas backdrops.
          </p>
        </header>

        {/* Featured Image */}
        <div className="max-w-6xl mx-auto px-4 md:px-8 mb-12">
          <div className="relative aspect-[16/9] rounded-sm overflow-hidden shadow-lg bg-sand/20">
            <div className="absolute inset-0 flex items-center justify-center text-slate/40">
              <Camera className="w-16 h-16" />
            </div>
          </div>
          <p className="text-center text-sm text-slate/50 mt-4 italic">
            Golden hour at Murrell Park—my most-requested location in Flower Mound
          </p>
        </div>

        {/* Article Content */}
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="font-serif text-slate/80 leading-relaxed space-y-6 text-base md:text-lg">
              <p className="text-xl md:text-2xl font-display text-slate leading-relaxed first-letter:text-5xl first-letter:font-display first-letter:text-moss first-letter:mr-1">
                If you're searching for a <Link href="/locations/flower-mound-family-photographer" className="text-moss hover:text-moss/80 underline underline-offset-4 transition-colors">Flower Mound family photographer</Link>, you're probably also wondering: where should we take our photos? After photographing hundreds of families across Flower Mound over the past decade, I've developed a deep appreciation for this town's natural beauty—and some strong opinions about the best spots.
              </p>

              <p>
                Flower Mound is uniquely positioned in the Cross Timbers region of Texas, giving us access to rolling hills, native prairies, and stunning Grapevine Lake shoreline—all within a few miles of each other. It's a photographer's paradise, and I want to share my insider knowledge with you.
              </p>

              <div className="bg-sand/20 rounded-sm p-6 my-8 border-l-4 border-moss">
                <h3 className="font-display text-xl text-slate mb-2">Quick Navigation</h3>
                <ul className="text-sm space-y-1 list-none pl-0">
                  {locations.map((loc, i) => (
                    <li key={i}>
                      <a href={`#${loc.name.toLowerCase().replace(/\s+/g, '-')}`} className="text-moss hover:text-moss/80">
                        {i + 1}. {loc.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Location Cards */}
              {locations.map((location, index) => (
                <div 
                  key={index} 
                  id={location.name.toLowerCase().replace(/\s+/g, '-')}
                  className="bg-white rounded-sm p-8 my-12 shadow-sm border border-sand/50"
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
                  
                  {location.address && (
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
                      <h4 className="font-bold text-slate text-sm uppercase tracking-wider mb-2">Best Time</h4>
                      <p className="text-sm text-slate/70">{location.bestTime}</p>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-sand">
                    <h4 className="font-bold text-slate text-sm uppercase tracking-wider mb-2">Photographer's Tip</h4>
                    <p className="text-sm text-slate/70 italic">{location.tips}</p>
                  </div>

                  {location.mapUrl && (
                    <a 
                      href={location.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-4 text-moss hover:text-moss/80 text-sm font-bold"
                    >
                      <MapPin className="w-4 h-4" />
                      View on Google Maps →
                    </a>
                  )}
                </div>
              ))}

              {/* Booking CTA */}
              <div className="bg-moss/10 rounded-sm p-8 my-12 text-center">
                <h2 className="font-display text-3xl text-slate mb-4">
                  Ready to Explore These Locations Together?
                </h2>
                <p className="mb-6 text-slate/70">
                  Let's find the perfect Flower Mound backdrop that matches your family's personality. I'll help you choose the ideal spot and time for stunning portraits.
                </p>
                <Link 
                  href="/#contact"
                  className="inline-flex items-center gap-2 bg-moss text-bone px-8 py-4 rounded-sm text-[10px] uppercase tracking-[0.3em] hover:bg-moss/90 transition-all font-bold"
                >
                  Book Your Flower Mound Session
                </Link>
              </div>

              <h2 className="font-display text-3xl md:text-4xl text-slate mt-12 mb-6">
                Choosing the Right Location for Your Family
              </h2>

              <p>
                Every family is different, and the "best" location depends on your unique needs. Here's my quick guide:
              </p>

              <ul className="space-y-3 my-6 list-none">
                <li className="flex items-start gap-3">
                  <span className="text-moss mt-1">→</span>
                  <span><strong>Have a toddler?</strong> Heritage Park or Rheudasil—shade and playground access are lifesavers</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-moss mt-1">→</span>
                  <span><strong>Want that "wow" backdrop?</strong> Murrell Park at golden hour, every time</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-moss mt-1">→</span>
                  <span><strong>Large extended family?</strong> Bakersfield Park has the space you need</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-moss mt-1">→</span>
                  <span><strong>Something unique?</strong> Ask about my private location access</span>
                </li>
              </ul>

              <p>
                Not sure which location is right for you? That's what our consultation is for! I love helping families discover spots they never knew existed in their own backyard.
              </p>

              <div className="border-t border-sand pt-8 mt-12">
                <h3 className="font-display text-xl text-slate mb-4">About the Author</h3>
                <p className="text-sm">
                  <strong>Carly Gage</strong> is a <Link href="/locations/flower-mound-family-photographer" className="text-moss hover:text-moss/80 underline">Flower Mound family photographer</Link> specializing in authentic, unposed portraits. Based in Flower Mound since 2015, she photographs families throughout the Dallas-Fort Worth metroplex including <Link href="/locations/dallas-family-photographer" className="text-moss hover:text-moss/80 underline">Dallas</Link>, <Link href="/locations/frisco-family-photographer" className="text-moss hover:text-moss/80 underline">Frisco</Link>, and <Link href="/locations/southlake-family-photographer" className="text-moss hover:text-moss/80 underline">Southlake</Link>.
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
                href="/locations/flower-mound-family-photographer"
                className="group p-4 border border-sand rounded-sm hover:border-moss hover:bg-sand/20 transition-all"
              >
                <h4 className="font-display text-lg text-slate mb-2 group-hover:text-moss transition-colors">
                  Flower Mound Sessions
                </h4>
                <p className="text-sm text-slate/60">
                  Learn about my approach to local sessions
                </p>
              </Link>
              <Link 
                href="/#portfolios"
                className="group p-4 border border-sand rounded-sm hover:border-moss hover:bg-sand/20 transition-all"
              >
                <h4 className="font-display text-lg text-slate mb-2 group-hover:text-moss transition-colors">
                  View Portfolio
                </h4>
                <p className="text-sm text-slate/60">
                  See families at these locations
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
                  Let's plan your session
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
