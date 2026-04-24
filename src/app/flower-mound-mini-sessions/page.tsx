import { Metadata } from "next";
import { PortfolioGallery } from "@/components/v3/PortfolioGallery";

export const metadata: Metadata = {
  title: "Flower Mound Mini Sessions | Carly Gage Photography",
  description: "Book your seasonal Flower Mound mini photo sessions. Quick, 20-minute photography sessions perfect for busy families, seasonal updates, and milestones.",
  alternates: {
    canonical: "/flower-mound-mini-sessions",
  },
  openGraph: {
    title: "Flower Mound Mini Sessions | Carly Gage Photography",
    description: "Book your seasonal Flower Mound mini photo sessions. Quick, 20-minute photography sessions perfect for busy families, seasonal updates, and milestones.",
    url: "https://carlygage.com/flower-mound-mini-sessions",
    images: [
      {
        url: "/images/portfolio/shawna-eric-mini-session/Shawna-and-Eric-mini013.jpg",
        width: 1200,
        height: 800,
        alt: "Family mini session in Flower Mound",
      },
    ],
  },
};

const imageNumbers = [
  "003", "006", "007", "010", "012", "013", "014", "017", "019", "021"
];

const images = imageNumbers.map(num => ({
  src: `/images/portfolio/shawna-eric-mini-session/Shawna-and-Eric-mini${num}.jpg`,
  alt: `Flower Mound mini session family photography - Image ${num}`
}));

const relatedSessions = [
  {
    href: "/",
    title: "Flower Mound Family",
    image: "/images/portfolio/dallas-family-session/Sidney-and-Sam-Family052.jpg",
    alt: "Flower Mound family photographer homepage"
  },
  {
    href: "/flower-mound-maternity-photographer",
    title: "Maternity Sessions",
    image: "/images/portfolio/davion-maternity/Davion-Maternity-033.jpg",
    alt: "Maternity photography portfolio"
  },
  {
    href: "/newborn-baby-photographer-flower-mound",
    title: "Newborn & Baby",
    image: "/images/bento-4.jpg",
    alt: "Flower Mound newborn and baby photographer sessions"
  },
  {
    href: "/locations/southlake-family-photographer",
    title: "Southlake Sessions",
    image: "/images/blog/southlake-locations-hero.jpg",
    alt: "Southlake family photographer sessions"
  },
];

export default function FlowerMoundMiniSessionsPage() {
  return (
    <PortfolioGallery
      title="Flower Mound Mini Sessions"
      subtitle="Seasonal & Milestone Photographer"
      description="Mini photo sessions are the perfect solution for busy families who want beautiful, professional portraits without the time commitment of a full session. Offered seasonally in Spring and Fall at carefully selected DFW locations, these 20-minute sessions are fast-paced, fun, and designed to capture your family's current season of life."
      images={images}
      category="Flower Mound Mini Sessions"
      relatedSessions={relatedSessions}
    />
  );
}
