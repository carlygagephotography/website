import { Metadata } from "next";
import { PortfolioGallery } from "@/components/v3/PortfolioGallery";

export const metadata: Metadata = {
  title: "Dallas Baby Announcement Photographer | Share Your Joy",
  description: "Capture the excitement of your growing family with a creative baby announcement session in Dallas. Perfect for social media and timeless keepsakes.",
  alternates: {
    canonical: "/portfolio/dallas-baby-announcement",
  },
  openGraph: {
    title: "Baby Announcement Photography Portfolio | Carly Gage Photography",
    description: "Share your exciting news! Creative baby announcement sessions captured in Dallas-Fort Worth.",
    url: "https://carlygage.com/portfolio/dallas-baby-announcement",
    images: [
      {
        url: "/images/portfolio/haley-trent-baby-announcement/Haley-and-Trent-Baby-Announcement016.jpg",
        width: 1200,
        height: 800,
        alt: "Dallas baby announcement photography session",
      },
    ],
  },
};

const imageNumbers = [
  "001", "002", "003", "004", "005", "006", "007", "008", "009", "010",
  "011", "012", "013", "014", "015", "016", "017", "018", "019", "020",
  "021", "022", "023", "024"
];

const images = imageNumbers.map(num => ({
  src: `/images/portfolio/haley-trent-baby-announcement/Haley-and-Trent-Baby-Announcement${num}.jpg`,
  alt: `Dallas baby announcement photography showcasing beautiful pregnancy reveal portraits - Image ${num}`
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
    href: "/portfolio/dallas-mini-session", 
    title: "Mini Sessions", 
    image: "/images/portfolio/shawna-eric-mini-session/Shawna-and-Eric-mini021.jpg",
    alt: "Dallas mini session photography"
  },
  { 
    href: "/#portfolios", 
    title: "View All", 
    image: "/images/portfolio/haley-trent-baby-announcement/Haley-and-Trent-Baby-Announcement016.jpg",
    alt: "View all portfolio galleries"
  },
];

export default function DallasBabyAnnouncementPage() {
  return (
    <PortfolioGallery
      title="Dallas Baby Announcements"
      subtitle="Baby Announcement"
      description="Perfect for sharing your exciting news with style. A creative session that captures the joy and anticipation of your growing family, ideal for social media announcements and keepsakes."
      images={images}
      category="Dallas Baby Announcement"
      relatedSessions={relatedSessions}
    />
  );
}
