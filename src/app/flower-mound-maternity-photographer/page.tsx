import { Metadata } from "next";
import { PortfolioGallery } from "@/components/v3/PortfolioGallery";

export const metadata: Metadata = {
  title: "Flower Mound Maternity Photographer | Carly Gage Photography",
  description: "Flower Mound maternity photographer Carly Gage creates relaxed, natural maternity portraits for growing families in Flower Mound, Southlake, Highland Park, Coppell, Argyle, and across DFW.",
  alternates: {
    canonical: "/flower-mound-maternity-photographer",
  },
  openGraph: {
    title: "Flower Mound Maternity Photographer | Carly Gage Photography",
    description: "Relaxed, natural motherhood and maternity portraits in Flower Mound and across DFW. Thoughtful sessions for growing families who want timeless, joyful images.",
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
    href: "/newborn-baby-photographer-flower-mound",
    title: "Newborn & Baby",
    image: "/images/bento-4.jpg",
    alt: "Flower Mound newborn and baby photographer sessions"
  },
  {
    href: "/flower-mound-baby-announcement-photographer",
    title: "Baby Announcements",
    image: "/images/portfolio/haley-trent-baby-announcement/Haley-and-Trent-Baby-Announcement016.jpg",
    alt: "Flower Mound baby announcement photographer page"
  },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Maternity Photography",
  "name": "Flower Mound Maternity Photographer",
  "url": "https://carlygage.com/flower-mound-maternity-photographer",
  "provider": { "@id": "https://carlygage.com" },
  "areaServed": {
    "@type": "GeoCircle",
    "geoMidpoint": { "@type": "GeoCoordinates", "latitude": 33.0146, "longitude": -97.097 },
    "geoRadius": "64373",
  },
};

export default function FlowerMoundMaternityPhotographerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
    <PortfolioGallery
      title="Flower Mound & DFW Maternity Photography"
      subtitle="Flower Mound Maternity Photographer"
      description="Relaxed, natural motherhood and maternity portraits for growing families in Flower Mound, Argyle, and across DFW. These sessions are designed to feel calm, beautiful, and easy—capturing the anticipation, connection, and quiet joy of this season without stiff posing or pressure. When your little one arrives, we continue the journey with in-home lifestyle newborn photography to document those fleeting early days."
      images={images}
      category="Flower Mound Maternity Photographer"
      relatedSessions={relatedSessions}
    />
    </>
  );
}
