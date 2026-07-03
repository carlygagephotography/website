import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, MapPin, Camera, Clock, Sun } from "lucide-react";
import { Navigation } from "@/components/v3/Navigation";
import { Footer } from "@/components/v3/Footer";

export const metadata: Metadata = {
  title: "Fall Mini Sessions DFW | Family Photographer Guide",
  description: "Everything you need to know about booking Fall mini photo sessions in the Dallas-Fort Worth metroplex. Tips, outfit ideas, and location insights from a DFW family photographer.",
  alternates: {
    canonical: "/blog/fall-mini-sessions-dfw",
  },
  openGraph: {
    title: "Fall Mini Sessions DFW | Carly Gage Photography",
    description: "The ultimate guide to Fall mini sessions in DFW. What to expect, when to book, and how to get the most out of your 20-minute session.",
    url: "https://carlygage.com/blog/fall-mini-sessions-dfw",
    type: "article",
    publishedTime: "2026-04-24T00:00:00Z",
    images: [
      {
        url: "/images/portfolio/shawna-eric-mini-session/Shawna-and-Eric-mini013.jpg",
        width: 1200,
        height: 800,
        alt: "Family during a fall mini session in DFW",
      },
    ],
  },
};

export default function FallMiniSessionsDfwPost() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Fall Mini Sessions DFW: The Ultimate Family Guide",
    "description": "Everything you need to know about booking Fall mini photo sessions in Dallas-Fort Worth. Outfit ideas, tips, and location insights.",
    "image": "https://carlygage.com/images/portfolio/shawna-eric-mini-session/Shawna-and-Eric-mini013.jpg",
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
      "@id": "https://carlygage.com/blog/fall-mini-sessions-dfw"
    },
    "articleSection": "Family Photography Tips",
    "keywords": "fall mini sessions dfw, fall minis near me, family mini sessions near me, dallas mini sessions, flower mound mini sessions"
  };

  const tips = [
    {
      title: "Book Early",
      description: "Fall is the busiest season for family photographers in DFW. I typically open my fall mini session dates in late summer, and they often sell out within days. Joining an email list is the best way to get first access."
    },
    {
      title: "Embrace Texas 'Fall'",
      description: "Let's be honest, October in Texas can still be 85 degrees. When planning outfits, think about layers that can easily be added or removed. Focus on rich, autumnal colors (mustard, deep greens, plum, terracotta) rather than heavy fabrics like wool or thick corduroy."
    },
    {
      title: "Prep the Kids",
      description: "Mini sessions move fast (usually 15-20 minutes). Prep your kids beforehand by telling them you're going to 'play' with a friend. Make sure they are well-fed and rested before the session."
    },
    {
      title: "Arrive Early",
      description: "Because mini sessions are scheduled back-to-back, arriving 10-15 minutes early is crucial. This gives you time to fix hair, wipe faces, and let everyone acclimate to the location before your time slot begins."
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
              Session Guides
            </span>
            <time className="flex items-center gap-2 text-[9px] uppercase tracking-[0.3em] text-slate/40 font-bold">
              <Calendar className="w-3 h-3" />
              April 24, 2026
            </time>
            <span className="flex items-center gap-2 text-[9px] uppercase tracking-[0.3em] text-slate/40 font-bold">
              <MapPin className="w-3 h-3" />
              DFW Metroplex
            </span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-slate mb-6 leading-tight">
            Fall Mini Sessions in DFW: The Ultimate Guide
          </h1>
          
          <p className="font-serif text-xl md:text-2xl text-slate/70 leading-relaxed">
            Everything you need to know to survive—and thrive—during the busy Texas fall photography season.
          </p>
        </header>

        <div className="max-w-6xl mx-auto px-4 md:px-8 mb-12">
          <div className="relative aspect-[16/9] rounded-sm overflow-hidden shadow-lg">
            <Image
              src="/images/portfolio/shawna-eric-mini-session/Shawna-and-Eric-mini013.jpg"
              alt="Family laughing together during a fall mini session in DFW"
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
                It's the most wonderful—and chaotic—time of the year for families across the Dallas-Fort Worth metroplex. Fall mini sessions are incredibly popular for a reason: they are quick, efficient, and provide the perfect photos for your holiday cards. But getting those perfect shots in just 20 minutes requires a little bit of strategy.
              </p>

              <h2 className="font-display text-3xl md:text-4xl text-slate mt-12 mb-6">What is a Mini Session?</h2>
              <p>
                Unlike a standard one-hour custom family session, mini sessions are exactly what they sound like—miniature. They are typically 15 to 20 minutes long, held at a single pre-determined location on a specific date, with families scheduled back-to-back. You receive a smaller gallery of images, making it a great, cost-effective way to get an updated family photo without the commitment of a full session.
              </p>

              <h2 className="font-display text-3xl md:text-4xl text-slate mt-12 mb-6">Top 4 Tips for a Successful Mini Session</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
                {tips.map((tip, index) => (
                  <div key={index} className="bg-sand/10 p-8 rounded-sm border border-sand/30">
                    <h3 className="font-display text-2xl text-slate mb-3">{index + 1}. {tip.title}</h3>
                    <p className="text-slate/70 text-base">{tip.description}</p>
                  </div>
                ))}
              </div>

              <h2 className="font-display text-3xl md:text-4xl text-slate mt-12 mb-6">Full Session vs. Mini Session</h2>
              <p>
                Mini sessions are perfect for a quick seasonal update, but they aren't for everyone. If you have an exceptionally shy toddler who takes 30 minutes to warm up to strangers, or if you want extended family photos with grandparents, or if you want an in-home lifestyle feel, you'll be much better served by booking a full custom session. Check out my <Link href="/" className="text-moss underline">Flower Mound family photographer</Link> services if you think a full session is right for you.
              </p>

              <div className="bg-moss/10 p-8 rounded-sm my-12 text-center">
                <h3 className="font-display text-2xl text-slate mb-4">Looking for Fall Minis Near Me?</h3>
                <p className="mb-6 text-slate/70 max-w-lg mx-auto">
                  I offer select mini session dates in the Spring and Fall at some of my favorite locations across DFW. Explore the <Link href="/flower-mound-mini-sessions" className="text-moss underline">Flower Mound Mini Sessions</Link> page to see my work, or join my mailing list below to be the first to know when dates are released!
                </p>
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 bg-moss text-bone px-8 py-4 rounded-sm text-[10px] uppercase tracking-[0.3em] hover:bg-moss/90 transition-all font-bold"
                >
                  Join the Waitlist
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
