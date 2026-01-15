import { Metadata } from "next";
import { PortfolioGallery } from "@/components/v3/PortfolioGallery";

export const metadata: Metadata = {
  title: "Dallas Family Photographer | Authentic Family Portraits",
  description: "Capturing authentic family moments and connections in the Dallas-Fort Worth area. Stress-free sessions that celebrate your family's unique story.",
  alternates: {
    canonical: "/portfolio/dallas-family-session",
  },
  openGraph: {
    title: "Dallas Family Photography Portfolio | Carly Gage Photography",
    description: "Real families, real moments, real joy. View authentic family portraits captured in the Dallas-Fort Worth area.",
    url: "https://carlygage.com/portfolio/dallas-family-session",
    images: [
      {
        url: "/images/portfolio/dallas-family-session/Sidney-and-Sam-Family052.jpg",
        width: 1200,
        height: 800,
        alt: "Dallas family photography session",
      },
    ],
  },
};

const imageNumbers = [
  "004", "005", "007", "008", "012", "013", "016", "020", "024", "028",
  "030", "037", "039", "041", "043", "045", "049", "051", "052", "058",
  "059", "060", "062", "065", "066", "068", "070", "071", "079", "083",
  "085", "086", "093", "095", "098", "099", "100"
];

const images = imageNumbers.map(num => ({
  src: `/images/portfolio/dallas-family-session/Sidney-and-Sam-Family${num}.jpg`,
  alt: `Dallas family photography session showcasing beautiful family portraits in natural light - Image ${num}`
}));

const relatedSessions = [
  { 
    href: "/portfolio/dallas-maternity-session", 
    title: "Maternity", 
    image: "/images/portfolio/davion-maternity/Davion-Maternity-033.jpg",
    alt: "Dallas maternity photography session"
  },
  { 
    href: "/portfolio/dallas-mini-session", 
    title: "Mini Sessions", 
    image: "/images/portfolio/shawna-eric-mini-session/Shawna-and-Eric-mini021.jpg",
    alt: "Dallas mini session photography"
  },
  { 
    href: "/portfolio/dallas-baby-announcement", 
    title: "Baby Announcements", 
    image: "/images/portfolio/haley-trent-baby-announcement/Haley-and-Trent-Baby-Announcement016.jpg",
    alt: "Dallas baby announcement photography"
  },
  { 
    href: "/#portfolios", 
    title: "View All", 
    image: "/images/portfolio/dallas-family-session/Sidney-and-Sam-Family052.jpg",
    alt: "View all portfolio galleries"
  },
];

export default function WellsFamilySessionPage() {
  return (
    <PortfolioGallery
      title="Dallas Family Photography"
      subtitle="Family Session"
      description="A beautiful family session capturing authentic moments and connections. Celebrating the joy, laughter, and love that makes each family uniquely theirs in the Dallas-Fort Worth area."
      images={images}
      category="Dallas Family Session"
      relatedSessions={relatedSessions}
    />
  );
}
