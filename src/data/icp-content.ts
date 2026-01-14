export interface ICPPersona {
  id: string;
  name: string;
  target: string;
  objections: Array<{
    objection: string;
    solutionNarrative: string;
  }>;
  keywords: string[];
}

export const ICP_CONTENT: ICPPersona[] = [
  {
    id: "overwhelmed-mom",
    name: "The Overwhelmed Mom",
    target: "Affluent DFW moms who want perfect memories but fear the process.",
    objections: [
      {
        objection: "My kids are wild and won't sit still for photos.",
        solutionNarrative: "I don't expect your children to perform for the camera; in fact, I prefer when they don't. My play-based approach leans into the chaos, capturing the genuine belly laughs and curious expressions that happen when kids are simply allowed to be themselves. We'll spend our time exploring the location and playing games, resulting in authentic portraits that actually look like the children you know and love."
      },
      {
        objection: "I have no idea what we should all wear.",
        solutionNarrative: "Wardrobe stress is the primary reason many moms delay booking, which is why I've removed that hurdle entirely with my curated client closet. You'll have access to a collection of high-end, photographer-approved dresses and children's pieces designed to photograph beautifully in the Texas light. We'll work together to coordinate your family's look, ensuring everyone feels confident and cohesive without a single trip to the mall."
      }
    ],
    keywords: ["relaxed family photos Dallas", "candid photographer for toddlers", "stress-free family portraits DFW"]
  },
  {
    id: "reluctant-dad",
    name: "The Reluctant Dad",
    target: "Husbands who view photo sessions as a chore to be endured.",
    objections: [
      {
        objection: "This is going to take forever and be incredibly awkward.",
        solutionNarrative: "I pride myself on efficiency and a relaxed vibe that feels more like a family walk than a formal production. There's no forced posing or endless 'look at the camera' commands; instead, I'll guide you through natural interactions that keep the energy moving and the session under an hour. Most dads leave my sessions surprised by how painless—and even occasionally fun—the experience actually was."
      }
    ],
    keywords: ["efficient family photographer Dallas", "natural posing for families", "painless family photo session"]
  }
];

export const CITY_VIBES: Record<string, {
  vibe: string;
  narrative: string;
  wikipedia: string;
  wikidata: string;
}> = {
  "southlake": {
    vibe: "Upscale & Manicured",
    narrative: "Southlake provides a sophisticated backdrop that perfectly complements an elegant, polished family aesthetic. From the pristine greenery of Bicentennial Park to the refined architectural details of Town Square, the city offers a manicured 'North Texas luxury' feel. It's the ideal setting for families who want their portraits to feel both timeless and impeccably styled, with every leaf and stone in its perfect place.",
    wikipedia: "https://en.wikipedia.org/wiki/Southlake,_Texas",
    wikidata: "https://www.wikidata.org/wiki/Q984440"
  },
  "flower-mound": {
    vibe: "Wild & Natural",
    narrative: "As my home base, Flower Mound holds a special place in my heart for its rugged, organic beauty. The rolling hills of the Cross Timbers and the golden-hour glow across the tall grasses near Grapevine Lake offer a rustic, 'unfiltered' Texas vibe. It's the perfect choice for families who want to embrace a more adventurous spirit, where wildflowers and lakeside trails provide a canvas for raw, authentic connection.",
    wikipedia: "https://en.wikipedia.org/wiki/Flower_Mound,_Texas",
    wikidata: "https://www.wikidata.org/wiki/Q949437"
  },
  "frisco": {
    vibe: "Modern & Vibrant",
    narrative: "Frisco represents the energy of the modern Texas family, blending expansive, well-maintained parks with a clean, contemporary atmosphere. The city's growth has created diverse spaces—from the open fields of Frisco Commons to vibrant community hubs—that feel fresh and optimistic. It's a fantastic backdrop for families who want a clean, bright, and energetic look to their portraits that mirrors their own fast-paced, joyful lives.",
    wikipedia: "https://en.wikipedia.org/wiki/Frisco,_Texas",
    wikidata: "https://www.wikidata.org/wiki/Q540515"
  },
  "plano": {
    vibe: "Diverse & Established",
    narrative: "Plano offers a remarkable variety of textures, from the sprawling, ancient oaks of Oak Point Park to the charming, historic character of its downtown corridors. This city allows for a 'chameleon' approach to photography, where we can find a secluded natural escape or a textured urban setting within the same ten-mile radius. It's perfect for families who appreciate depth and history in their surroundings while still wanting a polished finish.",
    wikipedia: "https://en.wikipedia.org/wiki/Plano,_Texas",
    wikidata: "https://www.wikidata.org/wiki/Q492552"
  },
  "dallas": {
    vibe: "Iconic & Editorial",
    narrative: "Shooting in Dallas is about embracing the iconic skyline and the editorial flair of the big city. Whether we're using the sleek lines of the Arts District or the lush, manicured lawns of Turtle Creek, a Dallas session feels grand and intentional. It's the go-to for families who want their photos to feel like they belong in a high-end magazine, blending urban sophistication with timeless family warmth.",
    wikipedia: "https://en.wikipedia.org/wiki/Dallas",
    wikidata: "https://www.wikidata.org/wiki/Q16557"
  }
};
