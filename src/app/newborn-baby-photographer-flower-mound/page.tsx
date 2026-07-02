import { Metadata } from "next";
import { PortfolioGallery } from "@/components/v3/PortfolioGallery";

export const metadata: Metadata = {
  title: "Newborn & Baby Photographer Flower Mound | Carly Gage Photography",
  description: "Flower Mound newborn and baby photographer specializing in natural light, in-home lifestyle newborn photography, fresh 48, and cake smash sessions across DFW.",
  alternates: {
    canonical: "/newborn-baby-photographer-flower-mound",
  },
  openGraph: {
    title: "Newborn & Baby Photographer Flower Mound | Carly Gage Photography",
    description: "In-home lifestyle newborn photography, fresh 48 sessions, and baby milestones in Flower Mound and across DFW.",
    url: "https://carlygage.com/newborn-baby-photographer-flower-mound",
    images: [
      {
        url: "/images/bento-4.jpg",
        width: 1200,
        height: 800,
        alt: "In-home lifestyle newborn photography in Flower Mound",
      },
    ],
  },
};

const images = [
  { src: "/images/bento-4.jpg", alt: "In-home lifestyle newborn photographer Flower Mound" },
  { src: "/images/bento-5.jpg", alt: "Generational family and baby photography near me" },
  { src: "/images/portfolio/haley-trent-baby-announcement/Haley-and-Trent-Baby-Announcement003.jpg", alt: "Baby announcement photographer Flower Mound" },
  { src: "/images/portfolio/haley-trent-baby-announcement/Haley-and-Trent-Baby-Announcement009.jpg", alt: "Lifestyle baby photographer near me" },
  { src: "/images/portfolio/haley-trent-baby-announcement/Haley-and-Trent-Baby-Announcement016.jpg", alt: "Natural light baby photography Flower Mound" },
  { src: "/images/portfolio/haley-trent-baby-announcement/Haley-and-Trent-Baby-Announcement021.jpg", alt: "First birthday photographer Flower Mound ideas" },
  { src: "/images/portfolio/haley-trent-baby-announcement/Haley-and-Trent-Baby-Announcement006.jpg", alt: "Cake smash photographer DFW inspiration" },
  { src: "/images/portfolio/haley-trent-baby-announcement/Haley-and-Trent-Baby-Announcement010.jpg", alt: "Fresh 48 photographer DFW" },
  { src: "/images/portfolio/haley-trent-baby-announcement/Haley-and-Trent-Baby-Announcement018.jpg", alt: "Mini newborn session photographer" }
];

const relatedSessions = [
  {
    href: "/flower-mound-maternity-photographer",
    title: "Maternity Sessions",
    image: "/images/portfolio/davion-maternity/Davion-Maternity-033.jpg",
    alt: "Maternity photography portfolio"
  },
  {
    href: "/",
    title: "Flower Mound Family",
    image: "/images/portfolio/dallas-family-session/Sidney-and-Sam-Family052.jpg",
    alt: "Flower Mound family photographer homepage"
  },
  {
    href: "/flower-mound-baby-announcement-photographer",
    title: "Baby Announcements",
    image: "/images/portfolio/haley-trent-baby-announcement/Haley-and-Trent-Baby-Announcement016.jpg",
    alt: "Flower Mound baby announcement photographer page"
  },
  {
    href: "/flower-mound-mini-sessions",
    title: "Mini Sessions",
    image: "/images/portfolio/shawna-eric-mini-session/Shawna-and-Eric-mini013.jpg",
    alt: "Flower Mound mini sessions"
  },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Newborn Photography",
  "name": "Flower Mound Newborn & Baby Photographer",
  "url": "https://carlygage.com/newborn-baby-photographer-flower-mound",
  "provider": { "@id": "https://carlygage.com" },
  "areaServed": {
    "@type": "GeoCircle",
    "geoMidpoint": { "@type": "GeoCoordinates", "latitude": 33.0146, "longitude": -97.097 },
    "geoRadius": "64373",
  },
};

export default function NewbornBabyPhotographerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
    <PortfolioGallery
      title="Flower Mound Newborn & Baby Photographer"
      subtitle="Serving Flower Mound & DFW"
      description="From the quiet, intimate moments of an in-home lifestyle newborn or Fresh 48 session to the joyful chaos of a first birthday cake smash, I specialize in documenting your baby's earliest milestones. Based in Flower Mound and serving the entire DFW metroplex, my approach to newborn and baby photography is unposed, organic, and driven by natural light, allowing your family's authentic connection to shine through."
      images={images}
      category="Flower Mound Newborn Photographer"
      relatedSessions={relatedSessions}
    />
    </>
  );
}
