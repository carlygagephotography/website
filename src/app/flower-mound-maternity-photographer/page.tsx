import { Metadata } from "next";
import { PortfolioGallery } from "@/components/v3/PortfolioGallery";
import { ServiceContent, ServiceContentData } from "@/components/v3/ServiceContent";

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
  alt: "Flower Mound & DFW maternity portrait session — natural, joyful pregnancy photography"
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

const content: ServiceContentData = {
  intro: [
    "As a Flower Mound maternity photographer, I create relaxed, natural portraits that celebrate this season exactly as it feels — full of anticipation, connection, and quiet joy. There's no stiff posing or pressure to hold an uncomfortable position. Instead, we spend a golden-hour hour walking, laughing, and being close, so the images look and feel like you.",
    "Sessions are built around movement and light rather than rigid direction, and your partner and older children are always welcome to join. Whether you picture soft outdoor fields, lush garden greenery, or a calm at-home session, I'll guide you the whole way — and when your baby arrives, we can continue the journey with an in-home lifestyle newborn session.",
  ],
  whatToExpect: [
    {
      heading: "The best time to book",
      body: "Most maternity sessions are loveliest between about 28 and 34 weeks, when your bump is beautifully round and you're still comfortable moving around. Reach out earlier in your pregnancy and we'll hold a date that works for your due date and the season's light.",
    },
    {
      heading: "What to wear",
      body: "Flowing, form-skimming dresses in soft, solid tones photograph beautifully, and I'm happy to share specific guidance for your coloring and location. Many mamas love a maternity gown for that editorial feel — just ask and I'll point you in the right direction.",
    },
    {
      heading: "A calm, connected session",
      body: "We'll keep things unhurried and natural — a hand on your bump, a quiet moment with your partner, a giggle with your toddler. Two outfit changes are welcome, and partners and kids are always part of the story.",
    },
    {
      heading: "Your gallery",
      body: "You'll receive a private online gallery of warm, naturally edited portraits, ready to print and share as you announce and prepare for your new arrival.",
    },
  ],
  venuesHeading: "Where we'll photograph your maternity session",
  venues: [
    "For that golden, sun-drenched look, the rural fields and open pastures of Argyle and Copper Canyon just north of Flower Mound are hard to beat — wide, pastoral, and glowing at sunset, they're some of my very favorite maternity backdrops in the area. Closer in, the tree canopies and shoreline near Grapevine Lake at Murrell Park offer softer, shaded light.",
    "If you love greenery and blooms, the Grapevine Botanical Gardens make a gorgeous, romantic setting for maternity portraits through much of the year. Prefer to stay home? An at-home maternity session in your own light-filled space is a beautifully intimate option, and I'm glad to travel throughout Flower Mound, Highland Village, Lewisville, Southlake, Colleyville, Argyle, Copper Canyon, and the wider DFW area.",
  ],
  faqs: [
    {
      q: "When should I schedule my maternity session?",
      a: "Between roughly 28 and 34 weeks is ideal for most mamas — your bump is nicely rounded and you're still comfortable moving. If you're expecting multiples or want to be safe, a little earlier is perfectly fine. Reach out during your second trimester and we'll plan around your due date and the season.",
    },
    {
      q: "What should I wear, and do you have gowns?",
      a: "Flowing dresses in soft, solid colors are always flattering, and I'll send personalized guidance based on your location and coloring. Many clients love the editorial look of a maternity gown — just ask and I'll help you find the right fit for your session.",
    },
    {
      q: "Can my partner and other kids be in the photos?",
      a: "Absolutely — partners and children are always welcome, and some of the sweetest images come from those family moments. We'll capture both the quiet portraits of you and your bump and the joyful, connected ones with your whole family.",
    },
    {
      q: "Do you photograph maternity sessions in Copper Canyon and Argyle?",
      a: "Yes! The open, golden fields of Copper Canyon and Argyle are some of the most beautiful maternity locations in the area, and I photograph there regularly for families in Flower Mound and the surrounding communities.",
    },
    {
      q: "Do you also offer newborn photography after the baby arrives?",
      a: "I do. Many maternity clients continue with an in-home lifestyle newborn session in those first weeks. It's a lovely way to document the whole journey, from bump to baby.",
    },
  ],
  testimonial: {
    quote:
      "Carly is not only one of the kindest people I've ever worked with — she's just so fun. I love her, the kids love her, and even the husbands end up loving what she creates. 10/10 recommend.",
    name: "Allison V.",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    <PortfolioGallery
      title="Flower Mound & DFW Maternity Photography"
      subtitle="Flower Mound Maternity Photographer"
      description="Relaxed, natural motherhood and maternity portraits for growing families in Flower Mound, Argyle, and across DFW. These sessions are designed to feel calm, beautiful, and easy—capturing the anticipation, connection, and quiet joy of this season without stiff posing or pressure. When your little one arrives, we continue the journey with in-home lifestyle newborn photography to document those fleeting early days."
      images={images}
      category="Flower Mound Maternity Photographer"
      relatedSessions={relatedSessions}
      content={<ServiceContent {...content} />}
    />
    </>
  );
}
