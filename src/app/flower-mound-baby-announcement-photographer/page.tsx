import { Metadata } from "next";
import { PortfolioGallery } from "@/components/v3/PortfolioGallery";

export const metadata: Metadata = {
  title: "Flower Mound Baby Announcement Photographer | Carly Gage Photography",
  description: "Flower Mound baby announcement photographer Carly Gage creates natural, joyful growing-family portraits for families in Flower Mound, Southlake, Highland Park, Coppell, and across DFW.",
  alternates: {
    canonical: "/flower-mound-baby-announcement-photographer",
  },
  openGraph: {
    title: "Flower Mound Baby Announcement Photographer | Carly Gage Photography",
    description: "Natural, heartfelt baby announcement portraits in Flower Mound and across DFW for growing families who want this season documented beautifully.",
    url: "https://carlygage.com/flower-mound-baby-announcement-photographer",
    images: [
      {
        url: "/images/portfolio/haley-trent-baby-announcement/Haley-and-Trent-Baby-Announcement016.jpg",
        width: 1200,
        height: 800,
        alt: "Flower Mound baby announcement photographer session",
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
  alt: `Flower Mound baby announcement photographer session featuring joyful growing-family portraits - Image ${num}`
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
    alt: "Flower Mound maternity photographer page"
  },
  {
    href: "/portfolio/dallas-baby-announcement",
    title: "Announcement Portfolio",
    image: "/images/portfolio/haley-trent-baby-announcement/Haley-and-Trent-Baby-Announcement016.jpg",
    alt: "Baby announcement photography portfolio"
  },
  {
    href: "/locations/highland-park-family-photographer",
    title: "Highland Park Sessions",
    image: "/images/optimized/bento-2.webp",
    alt: "Highland Park family photographer sessions"
  },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Baby Announcement Photography",
  "name": "Flower Mound Baby Announcement Photographer",
  "url": "https://carlygage.com/flower-mound-baby-announcement-photographer",
  "provider": { "@id": "https://carlygage.com" },
  "areaServed": {
    "@type": "GeoCircle",
    "geoMidpoint": { "@type": "GeoCoordinates", "latitude": 33.0146, "longitude": -97.097 },
    "geoRadius": "64373",
  },
};

export default function FlowerMoundBabyAnnouncementPhotographerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
    <PortfolioGallery
      title="Flower Mound Baby Announcement Photography"
      subtitle="Flower Mound Baby Announcement Photographer"
      description="Natural, connection-focused baby announcement portraits for Flower Mound families and nearby DFW communities. These sessions are designed to feel calm and personal, documenting the anticipation, excitement, and early joy that come with a growing family."
      images={images}
      category="Flower Mound Baby Announcement Photographer"
      relatedSessions={relatedSessions}
    />
    </>
  );
}
