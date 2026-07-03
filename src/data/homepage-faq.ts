import { ICP_CONTENT } from "@/data/icp-content";

// Single source of truth for the homepage FAQ.
// Both the visible <FAQ /> component AND the homepage FAQPage JSON-LD are built
// from this array, so the structured data always matches what users see
// (Google requires FAQPage schema to reflect on-page content).

export type HomepageFaq = { question: string; answer: string };

const icpFaqs: HomepageFaq[] = ICP_CONTENT.flatMap((persona) =>
  persona.objections.map((obj) => ({
    question: obj.objection,
    answer: obj.solutionNarrative,
  }))
);

const logisticsFaqs: HomepageFaq[] = [
  {
    question: "Do you offer Mini Sessions year-round?",
    answer:
      "I offer Mini Sessions on specific dates each season, typically in Spring and Fall when the Texas weather and natural light are at their most beautiful. These limited sessions fill up quickly, so I recommend reaching out as soon as dates are announced to secure your preferred time slot.",
  },
  {
    question: "Do you serve other areas like Frisco, Southlake, or Highland Park?",
    answer:
      "Yes! While I'm based in Flower Mound, I serve the entire DFW metroplex including Southlake, Frisco, Plano, Highland Park, McKinney, Prosper, Coppell, Colleyville, and Grapevine. I carefully select locations in each area that provide the best backdrops for your family's unique style and vision.",
  },
];

// First 5 ICP objections + logistics — must stay in sync with the render order.
export const homepageFaqs: HomepageFaq[] = [
  ...icpFaqs.slice(0, 5),
  ...logisticsFaqs,
];
