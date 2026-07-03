import { Metadata } from "next";
import { PortfolioGallery } from "@/components/v3/PortfolioGallery";
import { ServiceContent, ServiceContentData } from "@/components/v3/ServiceContent";

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
  { src: "/images/bento-4.jpg", alt: "In-home lifestyle newborn session in Flower Mound" },
  { src: "/images/bento-5.jpg", alt: "Generational family and baby portrait" },
  { src: "/images/portfolio/haley-trent-baby-announcement/Haley-and-Trent-Baby-Announcement003.jpg", alt: "Newborn baby announcement portrait" },
  { src: "/images/portfolio/haley-trent-baby-announcement/Haley-and-Trent-Baby-Announcement009.jpg", alt: "Parents holding their newborn baby" },
  { src: "/images/portfolio/haley-trent-baby-announcement/Haley-and-Trent-Baby-Announcement016.jpg", alt: "Natural light newborn photography" },
  { src: "/images/portfolio/haley-trent-baby-announcement/Haley-and-Trent-Baby-Announcement021.jpg", alt: "Baby milestone portrait session" },
  { src: "/images/portfolio/haley-trent-baby-announcement/Haley-and-Trent-Baby-Announcement006.jpg", alt: "Family welcoming their new baby" },
  { src: "/images/portfolio/haley-trent-baby-announcement/Haley-and-Trent-Baby-Announcement010.jpg", alt: "Lifestyle newborn photo at home" },
  { src: "/images/portfolio/haley-trent-baby-announcement/Haley-and-Trent-Baby-Announcement018.jpg", alt: "Newborn and sibling portrait" }
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

const content: ServiceContentData = {
  intro: [
    "As a Flower Mound newborn and baby photographer, I document those fleeting early days the way you'll actually remember them — soft, quiet, and full of real connection. My style is unposed and lifestyle-driven: instead of elaborate props and rigid poses, I use natural window light and your family's own space to capture your baby exactly as they are right now, from tiny curled fingers to those first sleepy yawns.",
    "Whether you want an in-home lifestyle newborn session in the first few weeks, a Fresh 48 to remember the very beginning, or a first-birthday cake smash further down the road, I photograph every stage of babyhood across Flower Mound and the wider DFW metroplex. Sessions are calm, baby-led, and completely unhurried — because newborns keep their own schedule, and the best images happen when we let them.",
  ],
  whatToExpect: [
    {
      heading: "Planning your timing",
      body: "For sleepy, curled-up newborn images, in-home sessions are usually loveliest in the first two to three weeks, but there's no hard deadline — lifestyle newborn photography works beautifully at any age. We'll plan your date around your due date and adjust once your baby arrives.",
    },
    {
      heading: "A relaxed, baby-led session",
      body: "We move at your baby's pace. Feeding breaks, diaper changes, and soothing are all part of it, and never rushed. Your only job is to hold, feed, and love on your little one — I'll direct the gentle details and capture the connection as it happens.",
    },
    {
      heading: "Simple styling guidance",
      body: "You don't need to buy anything special. I'll send simple guidance on soft, neutral tones and a tidy, light-filled corner of your home, so everything feels cohesive and timeless rather than staged.",
    },
    {
      heading: "Your gallery",
      body: "After your session, you'll receive a private online gallery of warm, naturally edited images that are easy to share, print, and treasure for years.",
    },
  ],
  venuesHeading: "In-home sessions & local baby milestones",
  venues: [
    "Most newborn sessions happen right in your home, where the light is familiar and your baby is most comfortable. A single bright room — a nursery, a bed near a large window, a cozy living room — is all we need. If you're outside Flower Mound in Highland Village, Lewisville, Grapevine, Coppell, or elsewhere in DFW, I'm happy to come to you.",
    "As your baby grows, we can take milestone and cake-smash sessions outdoors at some of the area's prettiest natural spots — the shaded trails of Murrell Park on Grapevine Lake or the rocky creek beds of Stone Creek Park here in Flower Mound. These are the same locations I recommend to families for first-birthday and sitter sessions when the weather cooperates.",
  ],
  faqs: [
    {
      q: "When should we schedule our newborn session?",
      a: "For classic sleepy newborn images, in-home lifestyle sessions are loveliest in the first two to three weeks. That said, babies change fast and every stage is worth documenting — if your little one is already a few weeks or months old, a lifestyle session still captures beautiful, authentic moments. Reach out during pregnancy and we'll pencil in a tentative date around your due date.",
    },
    {
      q: "Do you do posed studio newborn photography or lifestyle?",
      a: "My focus is natural-light, lifestyle newborn photography in your home rather than heavily posed studio setups. It's a gentler experience for your baby and results in warm, timeless images that feel like your real life — not a catalog.",
    },
    {
      q: "What happens if the baby cries or needs to eat during the session?",
      a: "That's completely expected and totally fine. Newborn sessions are unhurried by design, with plenty of time for feeding, soothing, and changes. Those in-between moments — a parent comforting their baby — often become some of the most treasured images.",
    },
    {
      q: "Do you offer Fresh 48 sessions?",
      a: "Yes. A Fresh 48 captures your baby's very first hours, typically at the hospital or birth center within a day or two of delivery. It's a beautiful way to remember the beginning if you'd prefer not to wait for an in-home session.",
    },
    {
      q: "Which areas do you serve for newborn and baby photography?",
      a: "I'm based in Flower Mound and serve families throughout the surrounding DFW metroplex, including Highland Village, Lewisville, Grapevine, Coppell, Southlake, Colleyville, Argyle, and beyond. In-home newborn sessions are available across this area.",
    },
  ],
  testimonial: {
    quote:
      "She's amazing with kids and pets. She keeps everything easy and stress-free, and somehow captures the real moments — not those awkward, forced smiles.",
    name: "Tiffany T.",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <PortfolioGallery
        title="Flower Mound Newborn & Baby Photographer"
        subtitle="Serving Flower Mound & DFW"
        description="From the quiet, intimate moments of an in-home lifestyle newborn or Fresh 48 session to the joyful chaos of a first birthday cake smash, I specialize in documenting your baby's earliest milestones. Based in Flower Mound and serving the entire DFW metroplex, my approach to newborn and baby photography is unposed, organic, and driven by natural light, allowing your family's authentic connection to shine through."
        images={images}
        category="Flower Mound Newborn Photographer"
        relatedSessions={relatedSessions}
        content={<ServiceContent {...content} />}
      />
    </>
  );
}
