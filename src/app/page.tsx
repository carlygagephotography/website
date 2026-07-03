import { Metadata } from "next";
import { HomeClient } from "@/components/v3/HomeClient";
import { homepageFaqs } from "@/data/homepage-faq";

export const metadata: Metadata = {
  title: "Flower Mound Family Photographer | Carly Gage Photography",
  description: "Carly Gage is a Flower Mound family photographer creating joyful, stress-free family & newborn portraits. Serving Southlake, Highland Park, Coppell & DFW.",
  alternates: {
    canonical: "/",
  },
};

// Homepage-scoped structured data. FAQPage is built from the SAME source as the
// visible <FAQ /> (src/data/homepage-faq.ts) so schema matches on-page content.
// Update dateModified when the homepage content meaningfully changes.
const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://carlygage.com/#webpage",
      "url": "https://carlygage.com/",
      "name": "Flower Mound Family Photographer | Carly Gage Photography",
      "datePublished": "2024-01-01T00:00:00+00:00",
      "dateModified": "2026-07-02T00:00:00+00:00",
      "publisher": { "@id": "https://carlygage.com" },
      "description": "Flower Mound family photographer creating joyful, stress-free family and newborn portraits for families across Flower Mound, Southlake, Highland Park, Coppell, and DFW."
    },
    {
      "@type": "FAQPage",
      "mainEntity": homepageFaqs.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer,
        },
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />
      <HomeClient />
    </>
  );
}
