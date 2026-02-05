import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Navigation } from "@/components/v3/Navigation";
import { Footer } from "@/components/v3/Footer";

export const metadata: Metadata = {
  title: "Photography Tips & Updates | Carly Gage Photography Blog",
  description: "Photography tips, session updates, and behind-the-scenes stories from a Dallas family photographer. Learn about capturing authentic family moments and booking information.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog | Carly Gage Photography",
    description: "Photography tips, session updates, and behind-the-scenes stories from a Dallas family photographer.",
    url: "https://carlygage.com/blog",
  },
};

const blogPosts = [
  {
    slug: "best-photo-locations-southlake",
    title: "Best Photo Locations in Southlake, TX: Where Elegance Meets Nature",
    excerpt: "Southlake offers a unique blend of upscale town center charm and beautiful natural spaces. Here are my favorite spots for capturing families.",
    date: "February 5, 2026",
    image: "/images/blog/southlake-locations-hero.jpg",
    category: "Location Guides"
  },
  {
    slug: "best-photo-locations-dallas",
    title: "Best Photo Locations in Dallas for Family Portraits",
    excerpt: "From White Rock Lake to Deep Ellum murals, here are my favorite spots for capturing Dallas families in their element.",
    date: "February 5, 2026",
    image: "/images/blog/dallas-locations-hero.jpg",
    category: "Location Guides"
  },
  {
    slug: "murrell-park-photography-guide",
    title: "Murrell Park Photography Guide: A Local Photographer's Deep Dive",
    excerpt: "Everything you need to know about photographing at Flower Mound's most photogenic park—from the best spots to insider tips I've learned over hundreds of sessions.",
    date: "February 5, 2026",
    image: "/images/blog/murrell-park-guide-hero.jpg",
    category: "Location Guides"
  },
  {
    slug: "spring-family-portrait-tips-dfw",
    title: "Spring Family Portrait Tips for DFW: Your Complete Guide",
    excerpt: "From what to wear to when to book, here's everything you need to know about capturing gorgeous spring family photos in North Texas.",
    date: "February 5, 2026",
    image: "/images/blog/spring-tips-hero.jpg",
    category: "Photography Tips"
  },
  {
    slug: "best-photo-locations-flower-mound",
    title: "Best Photo Locations in Flower Mound, TX: A Local Photographer's Guide",
    excerpt: "After 10+ years photographing families in Flower Mound, these are my favorite spots for capturing authentic moments against stunning North Texas backdrops.",
    date: "February 5, 2026",
    image: "/images/blog/flower-mound-locations-hero.jpg",
    category: "Location Guides"
  },
  {
    slug: "spring-2026-booking-announcement",
    title: "Spring 2026 Booking Season Now Open for Flower Mound and Dallas Families",
    excerpt: "Spring 2026 booking calendar is now open! Discover our updated 'Stress-Free' session guides and capture authentic family moments this season.",
    date: "January 23, 2026",
    image: "/images/blog/spring-2026-hero.jpg",
    category: "Studio Updates"
  }
];

export default function BlogPage() {
  return (
    <>
      <Navigation />
      
      <main className="min-h-screen bg-bone pt-32 pb-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 md:mb-24">
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-slate mb-6">
              Blog & Updates
            </h1>
            <p className="font-serif text-slate/60 text-lg md:text-xl max-w-2xl mx-auto">
              Photography tips, session updates, and stories from behind the lens
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group cursor-pointer"
              >
                <article className="bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
                  {/* Featured Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-block bg-moss/90 backdrop-blur-sm text-bone text-[9px] uppercase tracking-[0.3em] px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8">
                    <time className="text-[9px] uppercase tracking-[0.3em] text-slate/40 font-bold">
                      {post.date}
                    </time>
                    <h2 className="font-display text-2xl md:text-3xl text-slate mt-3 mb-4 group-hover:text-moss transition-colors">
                      {post.title}
                    </h2>
                    <p className="font-serif text-slate/60 text-sm md:text-base leading-relaxed mb-6">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-[9px] uppercase tracking-[0.3em] text-moss font-bold group-hover:gap-3 transition-all">
                      Read More
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
