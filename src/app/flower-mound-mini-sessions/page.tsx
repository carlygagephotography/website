import { Metadata } from "next";
import { PortfolioGallery } from "@/components/v3/PortfolioGallery";
import { ServiceContent, ServiceContentData } from "@/components/v3/ServiceContent";

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
  alt: "Flower Mound family mini session — seasonal outdoor family photography"
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

const content: ServiceContentData = {
  intro: [
    "Flower Mound mini sessions are the easiest way for busy families to get beautiful, professional portraits without committing to a full session. On mini days I set up at one carefully chosen location and photograph families back-to-back in short, pre-scheduled time slots — you arrive, we have fun for twenty minutes, and you're on your way with fresh images for your holiday cards, announcements, or seasonal updates.",
    "I offer minis seasonally, typically in Spring and Fall when the North Texas light and weather are at their best. They're fast-paced, playful, and a favorite for families who just want a current, joyful snapshot of this season of life. Because slots are limited and fill quickly, it's worth reaching out as soon as dates are announced.",
  ],
  whatToExpect: [
    {
      heading: "How mini sessions work",
      body: "I choose one beautiful seasonal location and open a set of short time slots on a single day. You book the slot that fits your schedule, show up, and we make the most of a focused, playful twenty minutes together.",
    },
    {
      heading: "What's included",
      body: "Each mini session runs about 20 minutes and delivers 10 professionally edited images in a private online gallery — perfect for holiday cards, birth announcements, and quick seasonal updates.",
    },
    {
      heading: "When they're offered",
      body: "Minis are seasonal, usually Spring and Fall. Fall minis are especially popular for holiday cards, so they tend to book up fast once dates go live — join my list or reach out early to grab your preferred time.",
    },
    {
      heading: "Simple styling",
      body: "I'll share quick guidance on coordinating your family's outfits for the season and location so everything looks cohesive. No stress, no shopping required — just a few tips to help everyone look and feel their best.",
    },
  ],
  venuesHeading: "Seasonal mini session locations",
  venues: [
    "Each season I select a single, gorgeous backdrop for minis — think glowing fields and warm tones in the Fall, or fresh greenery and blooms in the Spring. Recent favorites sit close to home in the Flower Mound and Grapevine area, where mature trees and open spaces give that classic, sun-kissed North Texas look.",
    "Because minis are set at one location on one day, the exact spot is announced with each round of dates. If you'd like a specific location or a longer, more relaxed shoot, a full family session is always available year-round throughout Flower Mound and the surrounding DFW communities.",
  ],
  faqs: [
    {
      q: "What's included in a mini session?",
      a: "A mini session is about 20 minutes and includes 10 professionally edited images delivered in a private online gallery. It's designed to be quick, fun, and budget-friendly — ideal for holiday cards and seasonal family updates.",
    },
    {
      q: "When do you offer mini sessions?",
      a: "I offer minis seasonally, typically in Spring and Fall when the Texas light and weather are at their most beautiful. Specific dates are announced each season and tend to fill quickly.",
    },
    {
      q: "How is a mini session different from a full session?",
      a: "Minis are shorter (about 20 minutes vs. a full hour), take place at one preset location on a set day, and include fewer images. Full sessions give you more time, your choice of location, more images, and a more relaxed pace — perfect when you want extra variety or have younger children.",
    },
    {
      q: "Are Fall mini sessions available for holiday cards?",
      a: "Yes — Fall minis are my most popular round of the year precisely because they're perfect for holiday cards. They book up fast, so I recommend reaching out as soon as dates are announced to secure your slot.",
    },
    {
      q: "Where are mini sessions held?",
      a: "Each season I select one beautiful location in the Flower Mound / Grapevine area, announced with the dates. If you'd prefer a specific spot or more time, a full family session is available year-round across DFW.",
    },
  ],
  testimonial: {
    quote:
      "We have used Carly Gage Photography for our family photos for years and LOVE the outcome. She is so easy to work with and, as a mom of three boys, she helps take the stress out of it.",
    name: "Hilary K.",
    location: "Google review",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: content.faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Mini Session Photography",
  "name": "Flower Mound Mini Sessions",
  "url": "https://carlygage.com/flower-mound-mini-sessions",
  "provider": { "@id": "https://carlygage.com" },
  "areaServed": {
    "@type": "GeoCircle",
    "geoMidpoint": { "@type": "GeoCoordinates", "latitude": 33.0146, "longitude": -97.097 },
    "geoRadius": "64373",
  },
};

export default function FlowerMoundMiniSessionsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    <PortfolioGallery
      title="Flower Mound Mini Sessions"
      subtitle="Seasonal & Milestone Photographer"
      description="Mini photo sessions are the perfect solution for busy families who want beautiful, professional portraits without the time commitment of a full session. Offered seasonally in Spring and Fall at carefully selected DFW locations, these 20-minute sessions are fast-paced, fun, and designed to capture your family's current season of life."
      images={images}
      category="Flower Mound Mini Sessions"
      relatedSessions={relatedSessions}
      content={<ServiceContent {...content} />}
    />
    </>
  );
}
