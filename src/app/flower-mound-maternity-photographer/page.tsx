import { Metadata } from "next";
import { PortfolioGallery } from "@/components/v3/PortfolioGallery";

export const metadata: Metadata = {
  title: "Flower Mound Maternity Photographer | Carly Gage Photography",
  description: "Flower Mound maternity photographer Carly Gage creates relaxed, natural maternity portraits for growing families in Flower Mound, Southlake, Highland Park, Coppell, and across DFW.",
  alternates: {
    canonical: "/flower-mound-maternity-photographer",
  },
  openGraph: {
    title: "Flower Mound Maternity Photographer | Carly Gage Photography",
    description: "Relaxed, natural maternity portraits in Flower Mound and across DFW. Thoughtful sessions for growing families who want timeless, joyful images.",
    url: "https://carlygage.com/flower-mound-maternity-photographer",
    images: [
      {
        url: "/images/portfolio/davion-maternity/Davion-Maternity-033.jpg",
        width: 1200,
        height: 800,
        alt: "Flower Mound maternity photographer session",
      },
    ],
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
  alt: `Flower Mound maternity photographer session with natural, joyful pregnancy portraits - Image ${num}`
}));

const relatedSessions = [
  {
    href: "/",
    title: "Flower Mound Family",
    image: "/images/portfolio/dallas-family-session/Sidney-and-Sam-Family052.jpg",
    alt: "Flower Mound family photographer homepage"
  },
  {
    href: "/portfolio/dallas-maternity-session",
    title: "Maternity Portfolio",
    image: "/images/portfolio/davion-maternity/Davion-Maternity-033.jpg",
    alt: "Maternity photography portfolio"
  },
  {
    href: "/locations/southlake-family-photographer",
    title: "Southlake Sessions",
    image: "/images/blog/southlake-locations-hero.jpg",
    alt: "Southlake family photographer sessions"
  },
  {
    href: "/flower-mound-baby-announcement-photographer",
    title: "Baby Announcements",
    image: "/images/portfolio/haley-trent-baby-announcement/Haley-and-Trent-Baby-Announcement016.jpg",
    alt: "Flower Mound baby announcement photographer page"
  },
];

export default function FlowerMoundMaternityPhotographerPage() {
  return (
    <PortfolioGallery
      title="Flower Mound Maternity Photography"
      subtitle="Flower Mound Maternity Photographer"
      description="Relaxed, natural maternity portraits for growing families in Flower Mound and across DFW. These sessions are designed to feel calm, beautiful, and easy—capturing the anticipation, connection, and quiet joy of this season without stiff posing or pressure."
      images={images}
      category="Flower Mound Maternity Photographer"
      relatedSessions={relatedSessions}
    />
  );
}
