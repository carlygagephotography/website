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
        solutionNarrative: "Wardrobe stress is the primary reason many moms delay booking, which is why I provide personalized wardrobe advice for every family I work with. From color palette recommendations to specific 'what to avoid' tips, I'll walk you through exactly how to coordinate your family's look so it feels cohesive and timeless. You don't need a professional stylist; you just need some direct guidance to help everyone feel confident and look their best in the Texas light."
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
  },
  {
    id: "texas-heat-worrier",
    name: "The Texas Heat Worrier",
    target: "Moms concerned about summer sessions and keeping kids comfortable.",
    objections: [
      {
        objection: "It's way too hot in Texas for outdoor photos. My kids will be miserable and sweaty.",
        solutionNarrative: "I've lived in North Texas long enough to respect the heat, which is why I strategically plan sessions around shaded locations and optimal timing. During the summer months, we prioritize early morning sessions or parks with mature tree canopies that provide natural relief from the sun. I also keep sessions moving efficiently and build in water breaks for little ones, ensuring everyone stays comfortable while we capture those golden hour moments when the light is perfect and the temperature finally drops."
      },
      {
        objection: "What happens if the weather is terrible on our session day?",
        solutionNarrative: "Texas weather is notoriously unpredictable, and I monitor forecasts closely leading up to your session. If we're facing extreme heat, storms, or wind that will make the experience unpleasant, I'll proactively reach out to reschedule at no additional charge. Your family's comfort and the quality of your images are my top priorities, and I'd rather wait for ideal conditions than push through a session where everyone is miserable or squinting into harsh light."
      }
    ],
    keywords: ["summer family photos Texas", "outdoor photography Dallas heat", "shaded locations family photos"]
  },
  {
    id: "pinterest-perfectionist",
    name: "The Pinterest Perfectionist",
    target: "Moms who have a specific vision but fear it won't translate to real life.",
    objections: [
      {
        objection: "I have this Pinterest board full of gorgeous photos, but I'm worried ours won't look like that.",
        solutionNarrative: "I love when clients bring inspiration boards because it helps me understand your aesthetic preferences and the emotional tone you're drawn to. However, the best sessions happen when we use those images as a starting point rather than a rigid template. I'll incorporate the elements you love—whether it's specific lighting, color palettes, or composition styles—but adapt them to your family's unique dynamic and the natural flow of the day. The result is always something that feels authentically yours rather than a recreation of someone else's moment."
      }
    ],
    keywords: ["Pinterest-worthy family photos", "styled family portraits Dallas", "magazine quality family photography"]
  },
  {
    id: "toddler-meltdown-mom",
    name: "The Toddler Meltdown Mom",
    target: "Moms with young children who fear behavioral disasters during the session.",
    objections: [
      {
        objection: "My toddler is in a phase where they say 'no' to everything. I'm terrified of a public meltdown.",
        solutionNarrative: "Toddler resistance is not only normal, it's something I plan for and even welcome in my sessions. Instead of fighting against your child's natural impulses, I work with them by turning the session into an adventure rather than a series of instructions. We'll follow their lead, let them explore, and capture the genuine curiosity and personality that makes this age so magical. Some of the most treasured images from my portfolio are the ones where toddlers are doing exactly what toddlers do—investigating bugs, picking flowers, or running in the opposite direction—because those moments are what you'll want to remember years from now."
      }
    ],
    keywords: ["toddler photography Dallas", "terrible twos photo session", "family photos with difficult toddlers"]
  }
];

export const CITY_VIBES: Record<string, {
  vibe: string;
  narrative: string;
  wikipedia: string;
  wikidata: string;
  heroImage: string;
}> = {
  "southlake": {
    vibe: "Upscale & Manicured",
    narrative: "Southlake provides a sophisticated backdrop that perfectly complements an elegant, polished family aesthetic. From the pristine greenery of Bicentennial Park to the refined architectural details of Town Square, the city offers a manicured 'North Texas luxury' feel. It's the ideal setting for families who want their portraits to feel both timeless and impeccably styled, with every leaf and stone in its perfect place.",
    wikipedia: "https://en.wikipedia.org/wiki/Southlake,_Texas",
    wikidata: "https://www.wikidata.org/wiki/Q984440",
    heroImage: "/images/blog/southlake-locations-hero.jpg"
  },
  "flower-mound": {
    vibe: "Wild & Natural",
    narrative: "As my home base, Flower Mound holds a special place in my heart for its rugged, organic beauty. The golden-hour glow across native grasses, oak groves, and the shoreline near Grapevine Lake gives this area a rustic, unfiltered Texas vibe. It's the perfect choice for families who want to embrace a more adventurous spirit, where open fields, wildflowers, and lakeside trails provide a canvas for raw, authentic connection.",
    wikipedia: "https://en.wikipedia.org/wiki/Flower_Mound,_Texas",
    wikidata: "https://www.wikidata.org/wiki/Q949437",
    heroImage: "/images/blog/flower-mound-locations-hero.jpg"
  },
  "frisco": {
    vibe: "Modern & Vibrant",
    narrative: "Frisco represents the energy of the modern Texas family, blending expansive, well-maintained parks with a clean, contemporary atmosphere. The city's growth has created diverse spaces—from the open fields of Frisco Commons to vibrant community hubs—that feel fresh and optimistic. It's a fantastic backdrop for families who want a clean, bright, and energetic look to their portraits that mirrors their own fast-paced, joyful lives.",
    wikipedia: "https://en.wikipedia.org/wiki/Frisco,_Texas",
    wikidata: "https://www.wikidata.org/wiki/Q540515",
    heroImage: "/images/hero-1.jpg"
  },
  "plano": {
    vibe: "Diverse & Established",
    narrative: "Plano offers a remarkable variety of textures, from the sprawling, ancient oaks of Oak Point Park to the charming, historic character of its downtown corridors. This city allows for a 'chameleon' approach to photography, where we can find a secluded natural escape or a textured urban setting within the same ten-mile radius. It's perfect for families who appreciate depth and history in their surroundings while still wanting a polished finish.",
    wikipedia: "https://en.wikipedia.org/wiki/Plano,_Texas",
    wikidata: "https://www.wikidata.org/wiki/Q492552",
    heroImage: "/images/optimized/hero-2.webp"
  },
  "dallas": {
    vibe: "Iconic & Editorial",
    narrative: "Shooting in Dallas is about embracing the iconic skyline and the editorial flair of the big city. Whether we're using the sleek lines of the Arts District or the lush, manicured lawns of Turtle Creek, a Dallas session feels grand and intentional. It's the go-to for families who want their photos to feel like they belong in a high-end magazine, blending urban sophistication with timeless family warmth.",
    wikipedia: "https://en.wikipedia.org/wiki/Dallas",
    wikidata: "https://www.wikidata.org/wiki/Q16557",
    heroImage: "/images/portfolio/dallas-family-session/Sidney-and-Sam-Family005.jpg"
  },
  "mckinney": {
    vibe: "Historic & Charming",
    narrative: "McKinney is where Texas history meets small-town warmth, offering a photographer's dream of character-rich backdrops. The brick-lined streets and vintage storefronts of downtown McKinney create an intimate, nostalgic atmosphere, while Towne Lake's bridges and natural trails provide serene waterfront moments. It's ideal for families who want their portraits to tell a story that feels rooted in place and tradition, with a touch of Southern charm that never goes out of style.",
    wikipedia: "https://en.wikipedia.org/wiki/McKinney,_Texas",
    wikidata: "https://www.wikidata.org/wiki/Q51885",
    heroImage: "/images/optimized/bento-3.webp"
  },
  "grapevine": {
    vibe: "Lakeside & Romantic",
    narrative: "Grapevine is synonymous with golden hour magic, thanks to its stunning lake settings where tall grasses sway and the sun melts into the water. The combination of waterfront access and the historic Main Street district creates a duality—rustic romance meets Texan hospitality. For families who want that dreamy, sun-kissed glow in their portraits, Grapevine delivers a cinematic quality that feels both relaxed and elevated, perfect for capturing those fleeting moments of childhood against nature's canvas.",
    wikipedia: "https://en.wikipedia.org/wiki/Grapevine,_Texas",
    wikidata: "https://www.wikidata.org/wiki/Q128268",
    heroImage: "/images/blog/murrell-park-hero.jpg"
  },
  "coppell": {
    vibe: "Community & Approachable",
    narrative: "Coppell embodies the heart of suburban family life, with its sprawling community parks and tree-lined trails that feel welcoming and unpretentious. Andy Brown Park and the nature preserves offer wide-open spaces where kids can run freely, creating the kind of candid, joyful moments that define authentic family photography. It's the perfect setting for families who value connection over perfection, where the focus is on laughter, movement, and the real personalities of your children shining through in every frame.",
    wikipedia: "https://en.wikipedia.org/wiki/Coppell,_Texas",
    wikidata: "https://www.wikidata.org/wiki/Q128269",
    heroImage: "/images/optimized/bento-1.webp"
  },
  "colleyville": {
    vibe: "Tranquil & Intimate",
    narrative: "Colleyville offers a quieter, more secluded alternative to the busier DFW suburbs, with hidden greenbelts and neighborhood parks that provide peaceful, uninterrupted backdrops. The natural creek settings and wooded trails create an organic, earthy aesthetic that feels private and intentional. For families seeking a more low-key session without sacrificing beauty, Colleyville delivers an intimate experience where we can focus entirely on your family's dynamics without the distraction of crowds or overly staged environments.",
    wikipedia: "https://en.wikipedia.org/wiki/Colleyville,_Texas",
    wikidata: "https://www.wikidata.org/wiki/Q975320",
    heroImage: "/images/optimized/bento-4.webp"
  },
  "highland-park": {
    vibe: "Elegant & Prestigious",
    narrative: "Highland Park represents the pinnacle of Dallas elegance, with its tree-canopied streets, architectural masterpieces, and the iconic Katy Trail weaving through the neighborhood. This is where old-money sophistication meets modern family life, creating a refined aesthetic that feels both timeless and aspirational. For families who want their portraits to reflect a polished, magazine-worthy lifestyle while still capturing genuine warmth, Highland Park provides a backdrop that speaks to achievement, taste, and the beauty of a well-curated life.",
    wikipedia: "https://en.wikipedia.org/wiki/Highland_Park,_Texas",
    wikidata: "https://www.wikidata.org/wiki/Q128267",
    heroImage: "/images/optimized/bento-2.webp"
  },
  "prosper": {
    vibe: "Open & Optimistic",
    narrative: "Prosper captures the spirit of the new Texas frontier, with its wide-open fields, modern parks, and that unmistakable feeling of possibility that comes with rapid growth. The clean lines and spacious community areas like Frontier Park offer a contemporary, uncluttered aesthetic that feels fresh and forward-looking. It's perfect for young, growing families who want their portraits to reflect their own optimism and energy, with plenty of room for kids to explore and be themselves against expansive, sun-drenched backdrops.",
    wikipedia: "https://en.wikipedia.org/wiki/Prosper,_Texas",
    wikidata: "https://www.wikidata.org/wiki/Q975319",
    heroImage: "/images/marquee-2.jpg"
  }
};
