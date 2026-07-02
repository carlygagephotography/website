import { Metadata } from "next";
import { PortfolioGallery } from "@/components/v3/PortfolioGallery";
import { ServiceContent, ServiceContentData } from "@/components/v3/ServiceContent";

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
  alt: "Flower Mound baby announcement session — joyful growing-family portraits"
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

const content: ServiceContentData = {
  intro: [
    "A baby announcement session is all about sharing your happy news in a way that feels like you. As a Flower Mound baby announcement photographer, I create natural, connection-focused portraits that document the anticipation and early joy of a growing family — whether you're revealing a pregnancy, welcoming a new sibling, or celebrating a long-awaited arrival.",
    "These sessions are relaxed and personal, with plenty of room for real laughter and genuine moments. If you'd like to fold in a fun reveal — a sign, a pair of tiny shoes, an older sibling's reaction — we'll make it feel authentic rather than staged, so your announcement images are unmistakably yours.",
  ],
  whatToExpect: [
    {
      heading: "Planning your announcement",
      body: "We'll chat ahead of time about how you want to share your news and any ideas you have in mind. I'm happy to suggest simple, timeless ways to make the reveal clear without it feeling forced.",
    },
    {
      heading: "A relaxed hour together",
      body: "Your session runs about an hour at a location we choose together. There's no rigid posing — just gentle direction, connection, and space for your family's real personality to come through.",
    },
    {
      heading: "Signs & props, if you'd like",
      body: "Announcement signs, chalkboards, sonogram photos, or a sibling's 'big brother' shirt are all welcome, but never required. The focus stays on your family; the details are just a bonus.",
    },
    {
      heading: "Your gallery",
      body: "You'll receive a private online gallery of naturally edited images — perfect for social media, printed announcements, and keepsakes to remember exactly how this chapter began.",
    },
  ],
  venuesHeading: "Where we'll photograph your announcement",
  venues: [
    "Announcement sessions look beautiful outdoors at the area's prettiest natural spots — the shaded trails and shoreline of Murrell Park on Grapevine Lake, or the rocky creek beds of Stone Creek Park right here in Flower Mound. Golden hour in an open Argyle or Copper Canyon field is another gorgeous option for that warm, glowing look.",
    "Prefer something cozier? An at-home announcement session in your own space is a lovely, intimate choice, especially when older siblings are part of the reveal. I photograph throughout Flower Mound, Highland Village, Lewisville, Grapevine, Coppell, Southlake, Colleyville, and the wider DFW metroplex.",
  ],
  faqs: [
    {
      q: "What is a baby announcement session?",
      a: "It's a relaxed portrait session focused on sharing your news — a pregnancy reveal, a new sibling, or a growing family. The images are designed for social media, printed announcements, and keepsakes, capturing the excitement of this chapter in a natural, joyful way.",
    },
    {
      q: "How long is the session and what's included?",
      a: "Baby announcement sessions run about an hour and include a private online gallery of professionally edited images you can share and print. We'll choose a location together and keep the pace relaxed and fun.",
    },
    {
      q: "Should we bring signs or props?",
      a: "Only if you'd like to! Announcement signs, sonogram photos, tiny shoes, or a sibling's special shirt can be a sweet touch, but they're completely optional. The heart of the session is your family and your connection.",
    },
    {
      q: "When should we book our announcement session?",
      a: "Whenever the timing feels right for your news — early in a pregnancy for a reveal, or after a new arrival to introduce your growing family. Reach out and we'll find a date that fits your announcement plans and the season.",
    },
    {
      q: "Which areas do you serve for baby announcement photography?",
      a: "I'm based in Flower Mound and photograph throughout the surrounding DFW metroplex, including Highland Village, Lewisville, Grapevine, Coppell, Southlake, Colleyville, Argyle, and Copper Canyon. At-home sessions are available across this area.",
    },
  ],
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    <PortfolioGallery
      title="Flower Mound Baby Announcement Photography"
      subtitle="Flower Mound Baby Announcement Photographer"
      description="Natural, connection-focused baby announcement portraits for Flower Mound families and nearby DFW communities. These sessions are designed to feel calm and personal, documenting the anticipation, excitement, and early joy that come with a growing family."
      images={images}
      category="Flower Mound Baby Announcement Photographer"
      relatedSessions={relatedSessions}
      content={<ServiceContent {...content} />}
    />
    </>
  );
}
