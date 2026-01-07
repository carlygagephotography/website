import type { Metadata } from "next";
import { Geist, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
  "@type": "ProfessionalService",
  "name": "Carly Gage Photography",
  "image": "https://carlygagephotography.com/images/dallas-family-photographer-hero.jpg",
  "@id": "https://carlygagephotography.com",
  "url": "https://carlygagephotography.com",
  "telephone": "+1-555-555-5555",
  "priceRange": "$$",
  "description": "Friendly and talented Dallas family photographer based in Flower Mound. Specializing in authentic family sessions, maternity photos, and seasonal mini sessions. Serving all families in Southlake, Frisco, and DFW.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Flower Mound",
    "addressRegion": "TX",
    "postalCode": "75028",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 33.0146,
    "longitude": -97.0970
  },
  "areaServed": [
    { "@type": "City", "name": "Flower Mound", "sameAs": "https://en.wikipedia.org/wiki/Flower_Mound,_Texas" },
    { "@type": "City", "name": "Southlake", "sameAs": "https://en.wikipedia.org/wiki/Southlake,_Texas" },
    { "@type": "City", "name": "Highland Park", "sameAs": "https://en.wikipedia.org/wiki/Highland_Park,_Texas" },
    { "@type": "City", "name": "Frisco", "sameAs": "https://en.wikipedia.org/wiki/Frisco,_Texas" },
    { "@type": "City", "name": "Prosper", "sameAs": "https://en.wikipedia.org/wiki/Prosper,_Texas" },
    { "@type": "City", "name": "Plano", "sameAs": "https://en.wikipedia.org/wiki/Plano,_Texas" },
    { "@type": "City", "name": "Coppell", "sameAs": "https://en.wikipedia.org/wiki/Coppell,_Texas" },
    { "@type": "City", "name": "Colleyville", "sameAs": "https://en.wikipedia.org/wiki/Colleyville,_Texas" }
  ],
  "sameAs": [
    "https://www.instagram.com/carlygagephotography",
    "https://www.facebook.com/carlygagephotography"
  ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What can we expect from our family portrait session?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Expect a relaxed, organic experience focused on genuine connection. We move beyond stiff posing to capture the natural interactions that define your family's unique story."
          }
        },
        {
          "@type": "Question",
          "name": "Which areas of North Texas do you serve?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We primarily serve the premier communities of DFW, including Southlake, Highland Park, Frisco, Flower Mound, Prosper, Colleyville, Grapevine, McKinney, Coppell, and Plano."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide styling for the whole family?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Our boutique experience includes full styling consultation and access to our curated client wardrobe, featuring high-end pieces for mothers and children."
          }
        }
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://carlygagephotography.com/#webpage",
      "url": "https://carlygagephotography.com/",
      "name": "Dallas Family Photographer | Carly Gage Photography",
      "datePublished": "2024-01-01T00:00:00+00:00",
      "dateModified": new Date().toISOString(),
      "publisher": { "@id": "https://carlygagephotography.com" },
      "description": "Premier Dallas family photographer capturing organic, timeless moments in DFW. Serving Southlake, Highland Park, Frisco & more."
    }
  ]
};

export const metadata: Metadata = {
  title: "Dallas Family Photographer | Candid, Fun & Timeless Portraits",
  description: "Carly Gage is a Dallas family photographer based in Flower Mound. We specialize in stress-free family sessions, maternity photos, and mini sessions that capture your family's real joy. Serving Frisco, Southlake, and all of DFW.",
  icons: {
    icon: [
      { url: "/icon.svg?v=2", type: "image/svg+xml" },
    ],
    shortcut: ["/icon.svg?v=2"],
    apple: ["/icon.svg?v=2"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${playfair.variable} antialiased bg-grain`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
