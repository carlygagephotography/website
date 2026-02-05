import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, MapPin, Sun, Camera, Shirt, Clock } from "lucide-react";
import { Navigation } from "@/components/v3/Navigation";
import { Footer } from "@/components/v3/Footer";

export const metadata: Metadata = {
  title: "Spring Family Portrait Tips for DFW | What to Wear & When to Book",
  description: "Expert tips for spring family photos in Dallas-Fort Worth. Learn what to wear, when to book, best locations, and how to prepare your kids for a stress-free portrait session.",
  alternates: {
    canonical: "/blog/spring-family-portrait-tips-dfw",
  },
  openGraph: {
    title: "Spring Family Portrait Tips for DFW Families | Carly Gage Photography",
    description: "Everything you need to know about spring family photos in Dallas-Fort Worth: wardrobe, timing, locations, and kid-wrangling tips from a local photographer.",
    url: "https://carlygage.com/blog/spring-family-portrait-tips-dfw",
    type: "article",
    publishedTime: "2026-02-05T00:00:00Z",
    images: [
      {
        url: "https://carlygage.com/images/blog/spring-tips-hero.jpg",
        width: 1200,
        height: 800,
        alt: "Family playing in a field of Texas wildflowers during spring portrait session",
      },
    ],
  },
};

export default function SpringTipsPost() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Spring Family Portrait Tips for Dallas-Fort Worth Families",
    "description": "Expert tips for spring family photos in Dallas-Fort Worth including wardrobe advice, timing, and how to prepare kids for a stress-free session.",
    "image": "https://carlygage.com/images/blog/spring-tips-hero.jpg",
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
      "@id": "https://carlygage.com/blog/spring-family-portrait-tips-dfw"
    },
    "articleSection": "Photography Tips",
    "keywords": "spring family photos Dallas, what to wear family portraits, DFW family photographer tips, family photo session prep, Texas wildflower photos"
  };

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
              Photography Tips
            </span>
            <time className="flex items-center gap-2 text-[9px] uppercase tracking-[0.3em] text-slate/40 font-bold">
              <Calendar className="w-3 h-3" />
              February 5, 2026
            </time>
            <span className="flex items-center gap-2 text-[9px] uppercase tracking-[0.3em] text-slate/40 font-bold">
              <MapPin className="w-3 h-3" />
              Dallas-Fort Worth
            </span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-slate mb-6 leading-tight">
            Spring Family Portrait Tips for DFW: Your Complete Guide
          </h1>
          
          <p className="font-serif text-xl md:text-2xl text-slate/70 leading-relaxed">
            From what to wear to when to book, here's everything you need to know about capturing gorgeous spring family photos in North Texas.
          </p>
        </header>

        {/* Featured Image */}
        <div className="max-w-6xl mx-auto px-4 md:px-8 mb-12">
          <div className="relative aspect-[16/9] rounded-sm overflow-hidden shadow-lg">
            <Image
              src="/images/blog/spring-tips-hero.jpg"
              alt="Two siblings lying on blanket sharing a candid laugh - authentic family portrait moment"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Article Content */}
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="font-serif text-slate/80 leading-relaxed space-y-6 text-base md:text-lg">
              <p className="text-xl md:text-2xl font-display text-slate leading-relaxed first-letter:text-5xl first-letter:font-display first-letter:text-moss first-letter:mr-1">
                Spring in Dallas-Fort Worth is magical—bluebonnets blooming, perfect temperatures, and that gorgeous golden light that makes everything look like a magazine cover. It's also the busiest season for family photography, which means you need to plan ahead. As a <Link href="/locations/flower-mound-family-photographer" className="text-moss hover:text-moss/80 underline underline-offset-4 transition-colors">Flower Mound family photographer</Link> who's shot hundreds of spring sessions, I'm sharing my insider tips to help you nail your family portraits this year.
              </p>

              {/* When to Book Section */}
              <div className="bg-white rounded-sm p-8 my-12 shadow-sm border border-sand/50">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-8 h-8 text-moss" />
                  <h2 className="font-display text-2xl md:text-3xl text-slate m-0">When to Book Your Spring Session</h2>
                </div>
                
                <p>
                  <strong>The short answer:</strong> Book in January or February for the best selection of dates.
                </p>

                <p>
                  <strong>The detailed breakdown:</strong>
                </p>

                <ul className="space-y-3 my-6 list-none">
                  <li className="flex items-start gap-3">
                    <span className="text-moss mt-1 font-bold">March</span>
                    <span>Early wildflowers, unpredictable weather. Great for adventurous families who don't mind rescheduling if a storm rolls through.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-moss mt-1 font-bold">April</span>
                    <span>Peak bluebonnet season (usually first two weeks). The most requested month—book early or miss out.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-moss mt-1 font-bold">May</span>
                    <span>Warm but not hot yet. Lush green everywhere. My personal favorite for family sessions.</span>
                  </li>
                </ul>

                <div className="bg-moss/10 p-4 rounded-sm">
                  <p className="text-sm m-0">
                    <strong>Pro tip:</strong> If you want bluebonnet photos specifically, I recommend booking a mini session in early April AND a full family session in May. The minis are quick and affordable, and you'll have options.
                  </p>
                </div>
              </div>

              {/* What to Wear Section */}
              <div className="bg-white rounded-sm p-8 my-12 shadow-sm border border-sand/50">
                <div className="flex items-center gap-3 mb-4">
                  <Shirt className="w-8 h-8 text-moss" />
                  <h2 className="font-display text-2xl md:text-3xl text-slate m-0">What to Wear: Spring Edition</h2>
                </div>

                <p>
                  Wardrobe is the #1 source of stress for moms booking family photos. Here's my no-fail spring formula:
                </p>

                <h3 className="font-display text-xl text-slate mt-8 mb-4">Colors That Work Beautifully</h3>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full mx-auto mb-2" style={{backgroundColor: '#C4A484'}}></div>
                    <span className="text-sm">Warm neutrals</span>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full mx-auto mb-2" style={{backgroundColor: '#E8D5C4'}}></div>
                    <span className="text-sm">Soft cream</span>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full mx-auto mb-2" style={{backgroundColor: '#D4A5A5'}}></div>
                    <span className="text-sm">Dusty rose</span>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full mx-auto mb-2" style={{backgroundColor: '#87A878'}}></div>
                    <span className="text-sm">Sage green</span>
                  </div>
                </div>

                <h3 className="font-display text-xl text-slate mt-8 mb-4">The Golden Rules</h3>

                <ul className="space-y-3 my-6 list-none">
                  <li className="flex items-start gap-3">
                    <span className="text-moss mt-1">✓</span>
                    <span><strong>Coordinate, don't match.</strong> Nobody needs to wear the same color. Pick 3-4 complementary tones and let each person choose within that palette.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-moss mt-1">✓</span>
                    <span><strong>Add texture.</strong> Linen, cotton, light knits—texture photographs beautifully and adds visual interest.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-moss mt-1">✓</span>
                    <span><strong>Dress for comfort.</strong> If your toddler hates bow ties, skip it. A happy kid in a simple outfit beats a miserable kid in a fancy one.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-moss mt-1">✓</span>
                    <span><strong>Mind the patterns.</strong> One patterned item per family is plenty. Small patterns photograph better than large ones.</span>
                  </li>
                </ul>

                <h3 className="font-display text-xl text-slate mt-8 mb-4">What to Avoid</h3>

                <ul className="space-y-3 my-6 list-none">
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">✗</span>
                    <span><strong>Neon colors</strong> – They cast unflattering reflections on skin</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">✗</span>
                    <span><strong>All black everything</strong> – Loses detail in outdoor light</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">✗</span>
                    <span><strong>Large logos or graphics</strong> – Distracting and dates photos quickly</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">✗</span>
                    <span><strong>Brand new shoes</strong> – Especially for kids. Blisters = meltdowns</span>
                  </li>
                </ul>
              </div>

              {/* Kids Prep Section */}
              <h2 className="font-display text-3xl md:text-4xl text-slate mt-12 mb-6">
                Preparing Your Kids (Without Them Knowing)
              </h2>

              <p>
                Here's a secret: the less you talk about the photo session, the better it usually goes. Kids don't need to "practice smiling" or hear warnings about behaving. That just creates anxiety.
              </p>

              <div className="bg-sand/20 rounded-sm p-6 my-8 border-l-4 border-moss">
                <h4 className="font-display text-lg text-slate mb-2">My Pre-Session Ritual</h4>
                <ol className="list-decimal list-inside space-y-2 text-sm">
                  <li>Make sure they're well-rested (no skipped naps!)</li>
                  <li>Give them a snack about 30 minutes before</li>
                  <li>Tell them you're going to a fun park to play</li>
                  <li>Pack their favorite small toy as a backup</li>
                  <li>Bring snacks and water for the session</li>
                </ol>
              </div>

              <p>
                During the session, I handle the rest. My approach is play-based—we explore, we run, we look for bugs. The camera just happens to be there. Kids forget it exists within five minutes.
              </p>

              {/* Location Section */}
              <h2 className="font-display text-3xl md:text-4xl text-slate mt-12 mb-6">
                Best Spring Locations in DFW
              </h2>

              <p>
                Spring opens up location options that aren't available year-round. Here are my top picks:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="bg-white p-6 rounded-sm border border-sand/50">
                  <h4 className="font-display text-lg text-slate mb-2">Wildflower Fields</h4>
                  <p className="text-sm text-slate/70">Various locations across Denton and Tarrant counties. Best in early-mid April. I scout new spots each year.</p>
                </div>
                <div className="bg-white p-6 rounded-sm border border-sand/50">
                  <h4 className="font-display text-lg text-slate mb-2">Murrell Park</h4>
                  <p className="text-sm text-slate/70">Tall grasses turn golden-green in spring. Grapevine Lake as backdrop. My <Link href="/blog/best-photo-locations-flower-mound" className="text-moss hover:text-moss/80 underline">top Flower Mound location</Link>.</p>
                </div>
                <div className="bg-white p-6 rounded-sm border border-sand/50">
                  <h4 className="font-display text-lg text-slate mb-2">Arbor Hills Nature Preserve</h4>
                  <p className="text-sm text-slate/70">Lush greenery, wildflowers, and those gorgeous overlook points. Located in Plano.</p>
                </div>
                <div className="bg-white p-6 rounded-sm border border-sand/50">
                  <h4 className="font-display text-lg text-slate mb-2">White Rock Lake</h4>
                  <p className="text-sm text-slate/70">Dallas's beloved urban oasis. Waterfront + wildflowers = magic.</p>
                </div>
              </div>

              {/* Weather Section */}
              <h2 className="font-display text-3xl md:text-4xl text-slate mt-12 mb-6">
                Texas Weather: Expect the Unexpected
              </h2>

              <p>
                If you've lived in Texas for more than a week, you know our weather has a mind of its own. Spring is especially unpredictable—we might have a gorgeous 75° day followed by a thunderstorm, followed by a cold front.
              </p>

              <p>
                <strong>My weather policy:</strong> I monitor forecasts obsessively and will proactively reach out to reschedule if conditions aren't ideal. Your comfort and the quality of your images matter more than sticking to a date. Rescheduling is always free.
              </p>

              {/* Booking CTA */}
              <div className="bg-moss/10 rounded-sm p-8 my-12 text-center">
                <h2 className="font-display text-3xl text-slate mb-4">
                  Ready to Book Your Spring Session?
                </h2>
                <p className="mb-6 text-slate/70">
                  Spring dates fill quickly, especially for April bluebonnet sessions. Let's chat about your vision and find the perfect time for your family.
                </p>
                <Link 
                  href="/#contact"
                  className="inline-flex items-center gap-2 bg-moss text-bone px-8 py-4 rounded-sm text-[10px] uppercase tracking-[0.3em] hover:bg-moss/90 transition-all font-bold"
                >
                  Reserve Your Spring Date
                </Link>
              </div>

              {/* FAQ Section */}
              <h2 className="font-display text-3xl md:text-4xl text-slate mt-12 mb-6">
                Quick FAQs
              </h2>

              <div className="space-y-6">
                <div>
                  <h4 className="font-display text-lg text-slate mb-2">How far in advance should I book?</h4>
                  <p className="text-sm text-slate/70">2-4 weeks minimum for spring sessions. For specific April weekend dates, 4-6 weeks is safer.</p>
                </div>
                <div>
                  <h4 className="font-display text-lg text-slate mb-2">What time of day is best?</h4>
                  <p className="text-sm text-slate/70">Golden hour (1-2 hours before sunset) is ideal. For spring, that's roughly 6:30-7:30 PM in March, later as we approach summer.</p>
                </div>
                <div>
                  <h4 className="font-display text-lg text-slate mb-2">Can we do bluebonnets AND a regular session?</h4>
                  <p className="text-sm text-slate/70">Absolutely! Many families book a quick mini session for bluebonnets and a full session later in spring at a different location.</p>
                </div>
                <div>
                  <h4 className="font-display text-lg text-slate mb-2">What if my kids don't cooperate?</h4>
                  <p className="text-sm text-slate/70">That's literally my specialty. <Link href="/locations/flower-mound-family-photographer" className="text-moss hover:text-moss/80 underline">Read about my approach</Link> to working with kids of all ages (and temperaments).</p>
                </div>
              </div>

              <div className="border-t border-sand pt-8 mt-12">
                <h3 className="font-display text-xl text-slate mb-4">About the Author</h3>
                <p className="text-sm">
                  <strong>Carly Gage</strong> is a <Link href="/locations/dallas-family-photographer" className="text-moss hover:text-moss/80 underline">Dallas family photographer</Link> based in Flower Mound, specializing in authentic, unposed portraits. With over 10 years of experience, she's photographed hundreds of DFW families across every season. Her work has been featured in various publications, and she brings the same artistic eye from her wedding photography with <a href="https://www.anomadiclove.com" className="text-moss hover:text-moss/80 underline" target="_blank" rel="noopener noreferrer">A Nomadic Love</a> to every family session.
                </p>
              </div>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-16 pt-8 border-t border-sand">
            <h3 className="font-display text-2xl text-slate mb-6">
              Related Articles
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link 
                href="/blog/best-photo-locations-flower-mound"
                className="group p-4 border border-sand rounded-sm hover:border-moss hover:bg-sand/20 transition-all"
              >
                <h4 className="font-display text-lg text-slate mb-2 group-hover:text-moss transition-colors">
                  Best Photo Locations in Flower Mound
                </h4>
                <p className="text-sm text-slate/60">
                  A local photographer's guide to the top spots
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
                  Learn about my local session offerings
                </p>
              </Link>
              <Link 
                href="/#contact"
                className="group p-4 border border-sand rounded-sm hover:border-moss hover:bg-sand/20 transition-all"
              >
                <h4 className="font-display text-lg text-slate mb-2 group-hover:text-moss transition-colors">
                  Book a Session
                </h4>
                <p className="text-sm text-slate/60">
                  Let's create something beautiful
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
