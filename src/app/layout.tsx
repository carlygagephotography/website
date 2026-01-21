import type { Metadata } from "next";
import { Geist, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
  "@type": "PhotographyBusiness",
  "name": "Carly Gage Photography",
  "image": "https://carlygage.com/images/dallas-family-photographer-hero.jpg",
  "@id": "https://carlygage.com",
  "url": "https://carlygage.com",
  "telephone": "+1-555-555-5555",
  "priceRange": "$$",
  "description": "Friendly and talented Dallas family photographer based in Flower Mound. Specializing in authentic family sessions, maternity photos, and seasonal mini sessions. Serving all families in Southlake, Frisco, and DFW.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "",
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
            "text": "Expect a relaxed, organic experience focused on genuine connection. I move beyond stiff posing to capture the natural interactions that define your family's unique story."
          }
        },
        {
          "@type": "Question",
          "name": "Which areas of North Texas do you serve?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "I primarily serve the premier communities of DFW, including Southlake, Highland Park, Frisco, Flower Mound, Prosper, Colleyville, Grapevine, McKinney, Coppell, and Plano."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide styling for the whole family?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Every session includes a personalized styling consultation where I provide professional wardrobe tips and expert advice to help you coordinate colors and textures that photograph beautifully."
          }
        }
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://carlygage.com/#webpage",
      "url": "https://carlygage.com/",
      "name": "Dallas Family Photographer | Carly Gage Photography",
      "datePublished": "2024-01-01T00:00:00+00:00",
      "dateModified": new Date().toISOString(),
      "publisher": { "@id": "https://carlygage.com" },
      "description": "Premier Dallas family photographer capturing organic, timeless moments in DFW. Serving Southlake, Highland Park, Frisco & more."
    }
  ]
};

export const metadata: Metadata = {
  metadataBase: new URL("https://carlygage.com"),
  title: "Dallas Family Photographer | Candid, Fun & Timeless Portraits",
  description: "Carly Gage is a Dallas family photographer based in Flower Mound. I specialize in stress-free family sessions, maternity photos, and mini sessions that capture your family's real joy. Serving Frisco, Southlake, and all of DFW.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://carlygage.com",
    siteName: "Carly Gage Photography",
    title: "Dallas Family Photographer | Candid, Fun & Timeless Portraits",
    description: "Authentic, joyful family photography in Dallas-Fort Worth. Stress-free sessions that capture your family's real joy. Based in Flower Mound, serving all of DFW.",
    images: [
      {
        url: "/images/hero-stephanie-new.webp",
        width: 1200,
        height: 630,
        alt: "Dallas family photographer capturing joyful family moments",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dallas Family Photographer | Carly Gage Photography",
    description: "Authentic, joyful family photography in Dallas-Fort Worth. Stress-free sessions that capture your family's real joy.",
    images: ["/images/hero-stephanie-new.webp"],
  },
  icons: {
    icon: [
      { url: "/icon.svg?v=4", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: ["/icon.svg?v=4"],
    apple: ["/icon.svg?v=4"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to third-party domains for faster loading */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://connect.facebook.net" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://connect.facebook.net" />
        {/* Note: Image preload is handled automatically by Next.js Image component with priority prop */}
      </head>
      <body
        className={`${geistSans.variable} ${playfair.variable} antialiased bg-grain`}
      >
        {/* Google Analytics - Deferred to not block rendering */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-4E5F8C8H7E"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4E5F8C8H7E');
          `}
        </Script>
        
        {/* Meta Pixel - Deferred to not block rendering */}
        <Script id="meta-pixel" strategy="lazyOnload">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1832786967436414');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img 
            height="1" 
            width="1" 
            style={{display: 'none'}}
            src="https://www.facebook.com/tr?id=1832786967436414&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
