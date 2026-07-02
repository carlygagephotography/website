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

// Sitewide business entity only. Homepage-scoped nodes (WebPage, FAQPage) live
// on the homepage (src/app/page.tsx) so they don't get emitted on every page.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "PhotographyBusiness",
  "name": "Carly Gage Photography",
  "image": "https://carlygage.com/images/hero-stephanie-new.webp",
  "@id": "https://carlygage.com",
  "url": "https://carlygage.com",
  "telephone": "+1-214-422-8050",
  "priceRange": "$$",
  "description": "Flower Mound family photographer creating joyful, stress-free family and newborn portraits for families in Flower Mound, Southlake, Highland Park, Coppell, and across DFW.",
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
  // Verified same-entity profiles (Google Business Profile, Yelp, Instagram).
  // Facebook omitted until a verified business page URL is confirmed.
  "sameAs": [
    "https://www.google.com/maps?cid=1566287165136920608",
    "https://www.yelp.com/biz/carly-gage-photography-flower-mound",
    "https://www.instagram.com/carlygage"
  ]
};

export const metadata: Metadata = {
  metadataBase: new URL("https://carlygage.com"),
  title: "Flower Mound Family Photographer | Carly Gage Photography",
  description: "Carly Gage is a Flower Mound family photographer creating joyful, stress-free family & newborn portraits. Serving Southlake, Highland Park, Coppell & DFW.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://carlygage.com",
    siteName: "Carly Gage Photography",
    title: "Flower Mound Family Photographer | Carly Gage Photography",
    description: "Joyful, stress-free family and newborn portraits from a Flower Mound family photographer serving Southlake, Highland Park, Coppell, and DFW.",
    images: [
      {
        url: "/images/hero-stephanie-new.webp",
        width: 1200,
        height: 630,
        alt: "Flower Mound family photographer capturing joyful family moments",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Flower Mound Family Photographer | Carly Gage Photography",
    description: "Joyful, stress-free family and newborn portraits from a Flower Mound family photographer serving Southlake, Highland Park, Coppell, and DFW.",
    images: ["/images/hero-stephanie-new.webp"],
  },
  icons: {
    icon: [
      { url: "/icon.svg?v=7", type: "image/svg+xml" },
    ],
    shortcut: ["/icon.svg?v=7"],
    apple: [
      { url: "/icon.svg?v=7", sizes: "180x180", type: "image/svg+xml" },
    ],
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
