import { Metadata } from "next";
import { PortfolioGallery } from "@/components/v3/PortfolioGallery";

export const metadata: Metadata = {
  title: "Dallas Maternity Photographer | Timeless Pregnancy Portraits",
  description: "Celebrate your journey with a beautiful maternity session in Dallas. Capturing the glow and anticipation of your growing family in natural light.",
  alternates: {
    canonical: "/portfolio/dallas-maternity-session",
  },
};

const imageNumbers = [
  "002", "003", "004", "009", "010", "011", "012", "013", "020", "021",
  "022", "023", "024", "025", "027", "028", "029", "030", "031", "032",
  "033", "035", "036", "038", "039", "040", "042", "045", "046", "047",
  "048", "049", "050", "051", "052", "054"
].sort((a, b) => parseInt(a) - parseInt(b));

const images = imageNumbers.map(num => ({
  src: `/images/portfolio/davion-maternity/Davion-Maternity-${num}.jpg`,
  alt: `Dallas maternity photography session showcasing beautiful pregnancy portraits in natural light - Image ${num}`
}));

const relatedSessions = [
  { 
    href: "/portfolio/dallas-family-session", 
    title: "Family Sessions", 
    image: "/images/portfolio/dallas-family-session/Sidney-and-Sam-Family052.jpg",
    alt: "Dallas family photography session"
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
    image: "/images/portfolio/davion-maternity/Davion-Maternity-033.jpg",
    alt: "View all portfolio galleries"
  },
];

export default function DallasMaternitySessionPage() {
  return (
    <PortfolioGallery
      title="Dallas Maternity Photography"
      subtitle="Maternity Session"
      description="A beautiful maternity session celebrating the journey of expecting. Capturing the glow, the anticipation, and the love that comes with growing a family in the Dallas-Fort Worth area."
      images={images}
      category="Dallas Maternity Session"
      relatedSessions={relatedSessions}
    />
  );
}
