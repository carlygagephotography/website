import { Metadata } from "next";
import { PortfolioGallery } from "@/components/v3/PortfolioGallery";

export const metadata: Metadata = {
  title: "Dallas Mini Session Photographer | Quick & Beautiful Family Photos",
  description: "Perfect for busy families. Beautiful 20-minute photography sessions in Dallas that capture authentic smiles and connections.",
  alternates: {
    canonical: "/portfolio/dallas-mini-session",
  },
  openGraph: {
    title: "Mini Session Photography Portfolio | Carly Gage Photography",
    description: "Quick, beautiful 20-minute family sessions. Perfect for busy families in Dallas-Fort Worth.",
    url: "https://carlygage.com/portfolio/dallas-mini-session",
    images: [
      {
        url: "/images/portfolio/shawna-eric-mini-session/Shawna-and-Eric-mini021.jpg",
        width: 1200,
        height: 800,
        alt: "Dallas mini session photography",
      },
    ],
  },
};

const imageNumbers = [
  "003", "006", "007", "010", "012", "013", "014", "017", "019", "021"
];

const images = imageNumbers.map(num => ({
  src: `/images/portfolio/shawna-eric-mini-session/Shawna-and-Eric-mini${num}.jpg`,
  alt: `Dallas mini session photography showcasing beautiful family portraits - Image ${num}`
}));

const relatedSessions = [
  { 
    href: "/portfolio/dallas-family-session", 
    title: "Family Sessions", 
    image: "/images/portfolio/dallas-family-session/Sidney-and-Sam-Family052.jpg",
    alt: "Dallas family photography session"
  },
  { 
    href: "/portfolio/dallas-maternity-session", 
    title: "Maternity", 
    image: "/images/portfolio/davion-maternity/Davion-Maternity-033.jpg",
    alt: "Dallas maternity photography session"
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
    image: "/images/portfolio/shawna-eric-mini-session/Shawna-and-Eric-mini021.jpg",
    alt: "View all portfolio galleries"
  },
];

export default function DallasMiniSessionPage() {
  return (
    <PortfolioGallery
      title="Dallas Mini Sessions"
      subtitle="Mini Session"
      description="Perfect for busy families who want beautiful photos without the time commitment. A quick, focused session that captures your family's authentic moments in just 20 minutes."
      images={images}
      category="Dallas Mini Session"
      relatedSessions={relatedSessions}
    />
  );
}
