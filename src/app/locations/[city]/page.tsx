import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Navigation } from "@/components/v3/Navigation";
import { Footer } from "@/components/v3/Footer";
import { ArrowRight, Camera, Clock, MapPin, Users, Heart, Sparkles, ShieldCheck } from "lucide-react";
import { CITY_VIBES, ICP_CONTENT } from "@/data/icp-content";
import { ContextualCTA } from "@/components/v3/ContextualCTA";

type Props = {
  params: Promise<{ city: string }>;
};

// City-specific data (Legacy structure preserved but enhanced with Vibe Narrative)
const cityData: Record<string, {
  name: string;
  displayName: string;
  description: string;
  locations: Array<{ name: string; description: string }>;
  faqs: Array<{ q: string; a: string }>;
}> = {
  "flower-mound": {
    name: "Flower Mound",
    displayName: "Flower Mound",
    description: "As a local photographer in Flower Mound TX, I love capturing families in our beautiful local parks and natural spaces. From native grasses and oak groves to serene lake settings near Grapevine Lake, Flower Mound offers beautiful backdrops for authentic family moments.",
    locations: [
      { name: "Grapevine Lake Parks", description: "Beautiful waterfront settings with tall grasses and natural light perfect for golden hour sessions." },
      { name: "Murrell Park", description: "Spacious park with open fields, trees, and trails ideal for active families and children." },
      { name: "Heritage Park", description: "Charming community park with mature trees and open spaces great for intimate family portraits." },
      { name: "Cross Timbers Trail Areas", description: "Natural wooded areas with trails providing authentic North Texas scenery." },
    ],
    faqs: [
      { q: "Do you shoot in Flower Mound year-round?", a: "Yes! I'm based in Flower Mound and shoot here throughout all seasons. Fall and spring offer beautiful colors, while summer provides lush greenery." },
      { q: "What's the best time for photos in Flower Mound?", a: "Golden hour (the hour before sunset) is ideal. For summer sessions, early morning or locations with ample shade work best to keep everyone comfortable." },
      { q: "Do you have favorite spots in Flower Mound?", a: "I love working with local families to find locations that match their style—from natural parks to more urban settings. I'll discuss the best spots for your family's vibe during our consultation." },
    ],
  },
  "frisco": {
    name: "Frisco",
    displayName: "Frisco",
    description: "Serving Frisco families with stress-free photography sessions that capture genuine smiles and real connections. Frisco's beautiful parks and natural areas provide perfect backdrops for family portraits.",
    locations: [
      { name: "Frisco Commons Park", description: "Large community park with open fields, playground areas, and natural settings ideal for families with kids." },
      { name: "Central Park", description: "Well-maintained park with walking trails, trees, and open spaces perfect for outdoor sessions." },
      { name: "Stonebriar Area Parks", description: "Modern Frisco neighborhoods with beautiful landscaping and natural light for contemporary family photos." },
      { name: "Frisco Athletic Center Area", description: "Clean, modern settings with good natural light and less crowded spaces." },
    ],
    faqs: [
      { q: "How far in advance should we book a session in Frisco?", a: "I recommend booking 4-6 weeks in advance, especially for fall sessions when schedules fill up quickly. Spring and summer availability is generally more flexible." },
      { q: "What should we bring to our Frisco session?", a: "Just your family and a change of clothes if you'd like variety. I'll handle the rest! Water bottles and snacks for kids are always welcome." },
      { q: "Do you shoot at Frisco's sports fields or indoor locations?", a: "I specialize in natural light outdoor sessions, but I can discuss indoor options if you have a specific vision in mind." },
    ],
  },
  "southlake": {
    name: "Southlake",
    displayName: "Southlake",
    description: "Serving Southlake families with authentic, joyful photography sessions. Southlake's beautiful community spaces and natural areas create the perfect setting for capturing your family's real moments.",
    locations: [
      { name: "Bicentennial Park", description: "Spacious park with walking trails, open fields, and mature trees perfect for natural family portraits." },
      { name: "Bob Jones Nature Center", description: "Natural wooded areas with trails offering authentic North Texas scenery and wildlife." },
      { name: "Southlake Town Square Area", description: "Modern urban settings with good architecture and natural light for contemporary family photos." },
      { name: "Local Neighborhood Parks", description: "Quieter community spaces with less foot traffic, ideal for intimate family sessions." },
    ],
    faqs: [
      { q: "What makes Southlake sessions special?", a: "Southlake offers beautiful, well-maintained parks and natural areas that provide stunning backdrops. Plus, the community feel makes sessions relaxed and authentic." },
      { q: "How long do sessions typically last in Southlake?", a: "Family and maternity sessions run about one hour, while mini sessions are 20 minutes. I take my time to get those genuine moments." },
      { q: "Can we include pets in our Southlake session?", a: "Absolutely! Pets are family too. Just let me know ahead of time so I can plan the best locations and timing." },
    ],
  },
  "plano": {
    name: "Plano",
    displayName: "Plano",
    description: "Serving Plano families with warm, patient photography that captures real connections. Plano's diverse parks and natural spaces offer something for every family's style.",
    locations: [
      { name: "Oak Point Park & Nature Preserve", description: "Large natural area with trails, open fields, and beautiful trees perfect for authentic family moments." },
      { name: "Windhaven Meadows Park", description: "Spacious park with playgrounds and open areas great for families with active kids." },
      { name: "Bob Woodruff Park", description: "Natural park setting with trails and water features providing beautiful backdrops." },
      { name: "Plano's Historic Downtown Areas", description: "Urban settings with character and good natural light for a different vibe." },
    ],
    faqs: [
      { q: "What's the best season for photos in Plano?", a: "Fall and spring are beautiful, but I can shoot year-round! Each season offers its own charm—lush summers and even mild winter days can work great." },
      { q: "How do we choose a location in Plano?", a: "During our consultation, I'll discuss your family's style and what you're looking for. I'll recommend Plano locations that match your vision." },
      { q: "Do you offer weekday sessions in Plano?", a: "Yes! Weekday sessions are often available and sometimes work better for busy families. Let's find what works for your schedule." },
    ],
  },
  "mckinney": {
    name: "McKinney",
    displayName: "McKinney",
    description: "Serving McKinney families with authentic photography sessions that celebrate what makes your family uniquely yours. McKinney's historic charm and natural beauty create memorable backdrops.",
    locations: [
      { name: "Towne Lake Recreation Area", description: "Beautiful lake setting with trails, bridges, and natural areas perfect for scenic family portraits." },
      { name: "Bonner Park", description: "Community park with open spaces, trees, and good natural light for outdoor sessions." },
      { name: "Historic Downtown McKinney", description: "Charming brick buildings and character-rich settings for unique family photos." },
      { name: "Erwin Park", description: "Natural area with trails and wooded sections offering authentic North Texas scenery." },
    ],
    faqs: [
      { q: "What's special about McKinney photography sessions?", a: "McKinney offers a unique blend of historic charm and natural beauty. I can capture both classic family moments and authentic, playful interactions." },
      { q: "Can we do sessions in McKinney's historic downtown?", a: "Absolutely! Downtown McKinney offers beautiful architectural backdrops. I'll plan timing to avoid crowds and get the best light." },
      { q: "What if weather doesn't cooperate in McKinney?", a: "I'll reschedule if needed. I keep an eye on the forecast and will communicate with you about any changes well in advance." },
    ],
  },
  "grapevine": {
    name: "Grapevine",
    displayName: "Grapevine",
    description: "Serving Grapevine families with relaxed, fun photography sessions, including dedicated newborn photography. Grapevine's beautiful lake settings and charming community spaces provide perfect backdrops for family memories.",
    locations: [
      { name: "Grapevine Lake Parks", description: "Stunning waterfront locations with tall grasses, natural light, and beautiful sunsets perfect for golden hour sessions." },
      { name: "Grapevine Botanical Gardens", description: "Well-maintained gardens with diverse backdrops and seasonal beauty for elegant family portraits." },
      { name: "Historic Main Street Grapevine", description: "Charming downtown area with character and good lighting for unique family photos." },
      { name: "Oak Grove Park", description: "Community park with mature trees, open spaces, and playgrounds ideal for families with kids." },
    ],
    faqs: [
      { q: "What makes Grapevine lake sessions special?", a: "Grapevine Lake offers beautiful waterfront settings that are perfect for golden hour photography. The natural light reflecting off the water creates stunning backdrops." },
      { q: "Are lake sessions safe for kids?", a: "Absolutely! I choose safe, accessible locations with plenty of space away from the water's edge. Safety is always my top priority." },
      { q: "Do you offer newborn photography in Grapevine?", a: "Yes! I offer dedicated newborn sessions for Grapevine families. You can learn more about my approach on my <a href=\"/newborn-baby-photographer-flower-mound\" class=\"underline hover:text-moss\">newborn photography page</a>." },
      { q: "Can we do sessions near Grapevine's wineries or historic areas?", a: "I can discuss specific locations that match your vision. Let's talk about what makes your family unique during our consultation." },
    ],
  },
  "coppell": {
    name: "Coppell",
    displayName: "Coppell",
    description: "Serving Coppell families with authentic, stress-free photography that captures real smiles and genuine moments. Coppell's community parks and natural areas provide beautiful settings.",
    locations: [
      { name: "Andy Brown Park East", description: "Large community park with open fields, walking trails, and natural areas perfect for family sessions." },
      { name: "Coppell Nature Park", description: "Natural preserve with trails and wooded areas offering authentic North Texas scenery." },
      { name: "Grapevine Springs Park", description: "Beautiful park with mature trees and open spaces ideal for natural family portraits." },
      { name: "Coppell's Community Parks", description: "Well-maintained neighborhood parks with less foot traffic, great for intimate sessions." },
    ],
    faqs: [
      { q: "What's the best time to schedule a Coppell session?", a: "Golden hour (the hour before sunset) is ideal for beautiful natural light. Early morning sessions also work great, especially during summer months." },
      { q: "How do we prepare for our Coppell session?", a: "I'll send you helpful tips after booking, but the main thing is to come relaxed and ready to have fun! I'll guide you through everything else." },
      { q: "Do you have favorite Coppell locations?", a: "I love exploring Coppell with families to find spots that match their style. I'll discuss options during our consultation to find the perfect fit." },
    ],
  },
  "colleyville": {
    name: "Colleyville",
    displayName: "Colleyville",
    description: "Serving Colleyville families with warm, patient photography that celebrates your family's unique story. Colleyville's beautiful neighborhoods and natural spaces create perfect backdrops.",
    locations: [
      { name: "Bedford Roadside Park", description: "Natural park area with trails and wooded sections perfect for authentic family moments." },
      { name: "Colleyville City Park", description: "Community park with open spaces and mature trees ideal for relaxed family sessions." },
      { name: "Grapevine Creek Greenbelt", description: "Natural area with trails and creek settings providing beautiful, organic backdrops." },
      { name: "Local Neighborhood Settings", description: "Quieter community spaces with less traffic, great for intimate family portraits." },
    ],
    faqs: [
      { q: "What makes Colleyville photography sessions unique?", a: "Colleyville offers a mix of natural spaces and beautiful neighborhoods. I can create sessions that feel both authentic and polished, depending on your family's style." },
      { q: "How far in advance should we book?", a: "I recommend booking 4-6 weeks in advance, especially for popular times like fall. That said, I sometimes have last-minute availability, so it never hurts to ask!" },
      { q: "What if my kids are nervous about photos?", a: "No worries! I'm patient and playful with kids. I'll let them lead, play games, and take breaks. The best photos often happen when kids are just being themselves." },
    ],
  },
  "highland-park": {
    name: "Highland Park",
    displayName: "Highland Park",
    description: "Serving Highland Park and University Park families with authentic, joyful photography sessions. The area's beautiful neighborhoods and parks provide elegant settings for family portraits.",
    locations: [
      { name: "Highland Park Residential Areas", description: "Beautiful neighborhoods with mature trees, architectural details, and good natural light for sophisticated family photos." },
      { name: "Katy Trail Access Points", description: "Urban trail settings with good lighting and modern backdrops perfect for active families." },
      { name: "Local Park Spaces", description: "Well-maintained community spaces with less foot traffic, ideal for intimate family sessions." },
      { name: "SMU Area Settings", description: "Campus and surrounding areas with good architecture and natural settings." },
    ],
    faqs: [
      { q: "What's the photography style for Highland Park sessions?", a: "I adapt to each family's style—from elegant and polished to more relaxed and candid. During our consultation, I'll discuss what feels authentic to your family." },
      { q: "Can we do sessions in specific Highland Park locations?", a: "Absolutely! If you have a meaningful location in mind, I can make it work. Let's discuss your vision during our consultation." },
      { q: "How long until we see our photos?", a: "I typically deliver your edited gallery within 2-3 weeks. You'll receive an online gallery where you can download your images and share with family." },
    ],
  },
  "prosper": {
    name: "Prosper",
    displayName: "Prosper",
    description: "Serving Prosper families with relaxed, fun photography that captures your family's authentic moments. Prosper's growing community offers beautiful parks and natural spaces perfect for family sessions.",
    locations: [
      { name: "Frontier Park", description: "Large community park with open fields, playgrounds, and walking trails perfect for families with kids." },
      { name: "Prosper's Natural Areas", description: "Growing community with new parks and natural spaces offering fresh, modern backdrops." },
      { name: "Local Neighborhood Parks", description: "Community spaces with less crowds, ideal for intimate family sessions." },
      { name: "Open Field Areas", description: "Spacious natural areas perfect for active families and golden hour photography." },
    ],
    faqs: [
      { q: "What's special about Prosper photography sessions?", a: "Prosper offers beautiful, newer parks and natural spaces that provide clean, modern backdrops. Plus, the community feel makes sessions relaxed and authentic." },
      { q: "Can we do sessions at Prosper's sports fields or community centers?", a: "I specialize in natural light outdoor sessions, but I can discuss specific locations that are meaningful to your family during our consultation." },
      { q: "How do we prepare for our Prosper session?", a: "I'll send you helpful preparation tips after booking, including outfit suggestions and what to expect. The main thing is to come ready to relax and have fun!" },
    ],
  },
  "dallas": {
    name: "Dallas",
    displayName: "Dallas",
    description: "Serving Dallas families with authentic, joyful photography that captures your family's unique story. From the iconic skyline to lush parks like Turtle Creek and White Rock Lake, Dallas offers stunning backdrops for editorial-quality family portraits.",
    locations: [
      { name: "Turtle Creek Park", description: "Lush, manicured lawns with mature trees and elegant landscaping perfect for sophisticated family portraits." },
      { name: "White Rock Lake", description: "Scenic lakeside trails with stunning water views and natural beauty ideal for golden hour sessions." },
      { name: "Dallas Arts District", description: "Modern architecture and sleek urban lines for families who want an editorial, magazine-worthy feel." },
      { name: "Klyde Warren Park", description: "Vibrant urban park bridging Uptown and Downtown, offering diverse backdrops from green lawns to city views." },
      { name: "Trinity Groves Area", description: "Industrial-chic settings with skyline views for a unique, contemporary family session." },
      { name: "Highland Park/University Park", description: "Tree-lined streets and elegant architecture for a classic, timeless aesthetic." },
    ],
    faqs: [
      { q: "What makes Dallas photography sessions unique?", a: "Dallas offers an incredible range of backdrops—from iconic skyline views to serene lakeside settings. Whether you want editorial sophistication or natural park vibes, we can find the perfect location for your family's style." },
      { q: "Which Dallas location is best for families with young kids?", a: "White Rock Lake and Turtle Creek are both great for active families. They have open spaces where kids can run and explore, plus beautiful natural light for stunning portraits." },
      { q: "Do you photograph in downtown Dallas?", a: "Absolutely! The Arts District and Klyde Warren Park offer beautiful urban backdrops. I recommend weekday sessions for fewer crowds and better parking access." },
      { q: "How far in advance should we book a Dallas session?", a: "I recommend booking 4-6 weeks in advance, especially during fall when schedules fill up quickly. Weekend golden hour slots in popular Dallas locations go fast!" },
    ],
  },
  "highland-village": {
    name: "Highland Village",
    displayName: "Highland Village",
    description: "Serving Highland Village families with authentic, joyful photography that captures your family's unique story. Highland Village's quiet lakeside parks and nature trails offer peaceful backdrops for beautiful portraits.",
    locations: [
      { name: "Highland Village City Park", description: "Spacious community park with natural areas and open fields perfect for active families." },
      { name: "Doubletree Ranch Park", description: "Beautiful park featuring walking trails, natural landscapes, and great open spaces." },
      { name: "The Shops at Highland Village", description: "More urban, architectural backdrops perfect for a polished family session." },
      { name: "Lewisville Lake Shoreline", description: "Waterfront access offering beautiful golden hour light and natural beach-like settings." }
    ],
    faqs: [
      { q: "What is the best time for photos at Lewisville Lake?", a: "Golden hour, the hour just before sunset, provides the best natural lighting over the water." },
      { q: "Do you shoot in Highland Village year-round?", a: "Yes! Every season brings something special to Highland Village's natural spaces." },
      { q: "What if my kids are wild during the session?", a: "That's exactly what I'm hoping for. I specialize in capturing the real energy of your family without stiff posing." }
    ]
  },
  "trophy-club": {
    name: "Trophy Club",
    displayName: "Trophy Club",
    description: "Serving Trophy Club families with relaxed, fun photography sessions. Trophy Club's expansive green spaces and close-knit community feel make it a wonderful location for intimate family portraits.",
    locations: [
      { name: "Trophy Club Park", description: "Expansive green spaces and natural trails perfect for letting kids run and play." },
      { name: "Indian Creek Area", description: "Beautiful, mature trees and natural light offering a quiet setting for family photos." },
      { name: "Trophy Club Trails", description: "Wooded trails providing a rustic, authentic North Texas feel." },
      { name: "Neighborhood Parks", description: "Intimate and quiet spaces, perfect for keeping young children focused." }
    ],
    faqs: [
      { q: "How long does a session in Trophy Club usually take?", a: "A standard family session usually takes about an hour, keeping it efficient and fun for the kids." },
      { q: "Can we bring our dogs to Trophy Club Park?", a: "Absolutely. I love incorporating furry family members into the photos." },
      { q: "What should we wear for outdoor Trophy Club photos?", a: "I provide all my clients with a detailed style guide once they book, helping coordinate the perfect outfits for the setting." }
    ]
  },
  "argyle": {
    name: "Argyle",
    displayName: "Argyle",
    description: "As a maternity photographer serving Argyle TX, I offer stunning, natural light maternity and family photography. Argyle's wide-open pastures, rustic fences, and rural charm provide breathtaking, earthy backdrops.",
    locations: [
      { name: "Argyle Pastures", description: "Wide open fields that catch the golden hour light perfectly for maternity and family sessions." },
      { name: "Harvest Community Areas", description: "Beautifully landscaped community areas that offer a mix of natural and modern rustic backdrops." },
      { name: "Rustic Fence Lines", description: "Classic Texas backdrops that add character and texture to your portraits." },
      { name: "Private Argyle Land", description: "I can also come to your property if you have land in Argyle for a truly personalized session." }
    ],
    faqs: [
      { q: "Is Argyle a good location for maternity photos?", a: "Yes! The wide open fields and golden light in Argyle make for absolutely stunning, dramatic maternity portraits." },
      { q: "Do you offer wardrobe guidance for maternity sessions?", a: "I provide styling advice to ensure you feel beautiful, comfortable, and coordinated with your family." },
      { q: "Can we take photos at our own ranch in Argyle?", a: "I love shooting on private property! It adds a deeply personal touch to your family's story." }
    ]
  },
  "copper-canyon": {
    name: "Copper Canyon",
    displayName: "Copper Canyon",
    description: "Serving Copper Canyon families with relaxed, natural photography set against some of the most beautiful rural scenery in the area. Copper Canyon's open pastures and golden-hour light make it a favorite for maternity and family sessions just north of Flower Mound.",
    locations: [
      { name: "Open Pastures & Fields", description: "Wide, rural fields and split-rail fences that glow at sunset—a stunning, uncrowded backdrop, especially for maternity sessions." },
      { name: "Tree-Lined Country Roads", description: "Quiet lanes framed by mature trees offering natural shade and a timeless, pastoral feel." },
      { name: "Nearby Bartonville & Argyle", description: "Just minutes away, more open ranch-style settings for that classic Texas golden-hour look." },
      { name: "At-Home Sessions", description: "Relaxed lifestyle sessions in your own Copper Canyon home and yard, perfect for newborns and young families." }
    ],
    faqs: [
      { q: "Do you photograph maternity sessions in Copper Canyon?", a: "Yes—Copper Canyon's open, golden fields are some of my favorite maternity backdrops in the whole area. It's a beautiful, private setting just north of Flower Mound." },
      { q: "What's the best time of day for photos in Copper Canyon?", a: "Golden hour, the hour before sunset, is magical here—the low light across the open fields is exactly what makes Copper Canyon so special. In summer, early morning is a comfortable alternative." },
      { q: "How far is Copper Canyon from your Flower Mound base?", a: "Copper Canyon is just north of Flower Mound, so I photograph there regularly and it's well within my core service area." }
    ]
  },
  "lewisville": {
    name: "Lewisville",
    displayName: "Lewisville",
    description: "Serving Lewisville families with authentic, stress-free photography. From the shoreline of Lewisville Lake to the trails of the LLELA nature preserve and the charm of Old Town, Lewisville offers a wonderful range of natural backdrops for family, maternity, and newborn sessions.",
    locations: [
      { name: "Lewisville Lake Shoreline", description: "Wide-open water views and tall grasses that catch beautiful golden-hour light." },
      { name: "LLELA Nature Preserve", description: "Wooded trails and bottomland forest for organic, earthy family portraits." },
      { name: "Old Town Lewisville", description: "Charming historic streets and textured backdrops for a more urban, editorial feel." },
      { name: "Central & Neighborhood Parks", description: "Well-kept community green spaces ideal for relaxed sessions with young kids." }
    ],
    faqs: [
      { q: "Where do you like to photograph in Lewisville?", a: "Lewisville Lake and the LLELA nature preserve are gorgeous for natural sessions, while Old Town offers a fun, textured backdrop. I'll help you pick the spot that fits your family's style." },
      { q: "Do you offer newborn sessions in Lewisville?", a: "Yes—I offer in-home lifestyle newborn sessions throughout Lewisville and the surrounding area, plus outdoor family, maternity, and mini sessions." },
      { q: "How far in advance should I book a Lewisville session?", a: "Four to six weeks is ideal, especially for fall. Lewisville is right next to my Flower Mound base, so availability is generally good year-round." }
    ]
  },
  "lantana": {
    name: "Lantana",
    displayName: "Lantana",
    description: "Serving Lantana families with warm, relaxed photography close to home. Lantana's peaceful greenbelts and tree-lined streets—plus the open fields of neighboring Argyle and Copper Canyon—make for beautiful, comfortable family sessions just minutes from Flower Mound.",
    locations: [
      { name: "Lantana Greenbelts & Parks", description: "Tidy neighborhood green spaces and trails perfect for easy, close-to-home family sessions." },
      { name: "Nearby Argyle Fields", description: "Open, golden pastures just minutes away for that wide-open, sun-drenched look." },
      { name: "Copper Canyon Countryside", description: "Rural, pastoral backdrops nearby, especially beautiful for maternity and golden-hour sessions." },
      { name: "At-Home Sessions", description: "Comfortable lifestyle sessions in your own Lantana home, ideal for newborns and busy families." }
    ],
    faqs: [
      { q: "Do you serve the Lantana community?", a: "Absolutely—Lantana is just minutes from my Flower Mound base, so I photograph families there regularly within my core service area." },
      { q: "Where are the best photo spots near Lantana?", a: "Lantana's own greenbelts are lovely, and the open fields of Argyle and Copper Canyon nearby are stunning at golden hour, especially for maternity sessions." },
      { q: "What types of sessions do you offer in Lantana?", a: "Family, maternity, newborn, baby announcement, and seasonal mini sessions—all available throughout Lantana and the surrounding area." }
    ]
  }
};

// Only the known city slugs are valid. dynamicParams=false makes any other
// /locations/<x>-family-photographer URL return a real 404 instead of a
// soft-404 (HTTP 200 "Location Not Found" shell that Google can index).
export const dynamicParams = false;

export async function generateStaticParams() {
  return Object.keys(cityData).map((slug) => ({
    city: `${slug}-family-photographer`,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params;
  const citySlug = city.replace(/-family-photographer$/, "");
  const cityInfo = cityData[citySlug];

  if (!cityInfo) {
    // Unknown slugs are blocked by dynamicParams=false; this is a safety net.
    return {
      title: `Family Photographer | Carly Gage Photography`,
      robots: { index: false, follow: false },
    };
  }

  const cityName = cityInfo.displayName;
  const nearbyBase = citySlug === "dallas" ? "Based in Flower Mound, serving Dallas families" : `Based in nearby Flower Mound, serving ${cityName} families`;

  return {
    title: `${cityName} Family Photographer | Carly Gage Photography`,
    description: `${nearbyBase} with joyful, stress-free family portraits, maternity sessions, and natural storytelling photography.`,
    alternates: {
      canonical: `/locations/${citySlug}-family-photographer`,
    },
    openGraph: {
      title: `${cityName} Family Photographer | Carly Gage Photography`,
      description: `${nearbyBase} with authentic, joyful family photography and a relaxed session experience.`,
      url: `https://carlygage.com/locations/${citySlug}-family-photographer`,
    },
    other: {
      "geo.region": "US-TX",
      "geo.placename": cityName,
    }
  };
}

export default async function LocationPage({ params }: Props) {
  const { city } = await params;
  const citySlug = city.replace(/-family-photographer$/, "");
  const cityInfo = cityData[citySlug];
  const vibeInfo = CITY_VIBES[citySlug];

  if (!cityInfo) {
    // Blocked by dynamicParams=false; safety net returns a real 404.
    notFound();
  }

  const cityName = cityInfo.displayName;
  const homepageLabel = citySlug === "flower-mound" ? "homepage" : "Flower Mound family photographer homepage";

  // JSON-LD Schema 2.0
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `https://carlygage.com/locations/${city}`,
    "url": `https://carlygage.com/locations/${city}`,
    "name": `${cityName} Family Photographer | Carly Gage Photography`,
    "description": cityInfo.description,
    "mentions": [
      {
        "@type": "City",
        "name": cityName,
        "sameAs": vibeInfo?.wikipedia || `https://en.wikipedia.org/wiki/${cityName.replace(" ", "_")},_Texas`
      }
    ],
    "knowsAbout": [
      "Family Photography",
      "Maternity Photography",
      "Toddler Photography",
      "Golden Hour Lighting",
      "Stress-Free Family Sessions",
      "Candid Portraits"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Photography Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Full Family Session"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Maternity Session"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mini Sessions"
          }
        }
      ]
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://carlygage.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Locations",
          "item": "https://carlygage.com/#locations"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": `${cityName} Family Photographer`,
          "item": `https://carlygage.com/locations/${city}`
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-bone">
        <Navigation />

        {/* Hero Section */}
        <section className="pt-24 md:pt-32 pb-12 md:pb-20 px-4 md:px-16">
          <div className="max-w-[1200px] mx-auto">
            <div className="space-y-6 md:space-y-8 mb-12 md:mb-16 text-center md:text-left">
              <span className="text-[9px] md:text-[10px] uppercase tracking-[0.5em] md:tracking-[0.6em] text-slate/40 block">Serving {cityName}</span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif leading-[0.9] tracking-tighter text-slate">
                {cityName} Family <br />
                <span className="italic font-light opacity-50 text-moss">Photographer.</span>
              </h1>
              <p className="text-lg md:text-xl text-slate/60 font-sans font-light leading-relaxed max-w-3xl mx-auto md:mx-0">
                {cityInfo.description}
              </p>
              <p className="text-sm md:text-base text-slate/45 font-sans font-light leading-relaxed max-w-2xl mx-auto md:mx-0">
                Based in Flower Mound, I photograph families throughout {cityName} and surrounding DFW communities with a relaxed, connection-first approach.
              </p>
            </div>
          </div>
        </section>

        {/* Narrative Vibe Section - PHASE 2 CRITICAL */}
        {vibeInfo && (
          <section className="py-12 md:py-24 px-4 md:px-16 bg-white overflow-hidden">
            <div className="max-w-[1200px] mx-auto">
              <article className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <div className="space-y-4">
                    <h2 className="text-sm uppercase tracking-[0.3em] text-moss font-semibold">The {cityName} Vibe</h2>
                    <p className="text-3xl md:text-4xl font-serif text-slate leading-tight">
                      Capturing your family against the {vibeInfo.vibe.toLowerCase()} backdrop of {cityName}.
                    </p>
                  </div>
                  <p className="text-lg text-slate/70 font-sans font-light leading-relaxed">
                    {vibeInfo.narrative}
                  </p>
                  <div className="pt-4 space-y-3">
                    <ContextualCTA intent="portfolio" cityName={cityName} />
                    <p className="text-sm text-slate/50 font-sans leading-relaxed">
                      Want to see how this fits into the bigger picture? Visit the <Link href="/" className="text-moss hover:text-moss/80 underline underline-offset-4">{homepageLabel}</Link> for Carly's Flower Mound-based approach and availability.
                    </p>
                  </div>
                </div>
                <div className="relative aspect-[4/5] bg-sand/20 rounded-sm overflow-hidden group">
                  {vibeInfo.heroImage && (
                    <Image 
                      src={vibeInfo.heroImage} 
                      alt={`${cityName} Photography Vibe`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  )}
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
                  
                  {/* Decorative element */}
                  <div className="absolute bottom-8 left-8 right-8 p-8 bg-white/90 backdrop-blur-sm border border-sand/30 space-y-4">
                    <Sparkles className="w-5 h-5 text-moss" />
                    <p className="text-sm text-slate/60 font-sans leading-relaxed">
                      Every city has a unique rhythm. In {cityName}, we lean into the {vibeInfo.vibe.toLowerCase()} energy to create portraits that feel like home.
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </section>
        )}

        {/* ICP Objection Handlers - Narrative Style */}
        <section className="py-12 md:py-24 px-4 md:px-16 bg-bone">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl md:text-5xl font-serif text-slate">A Stress-Free Experience</h2>
              <p className="text-lg text-slate/60 font-sans font-light max-w-2xl mx-auto">
                I understand the anxiety that comes with family photos. Here is how I handle the most common concerns.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {ICP_CONTENT.map((persona) => (
                <div key={persona.id} className="space-y-8 bg-white p-8 md:p-12 border border-sand/30 rounded-sm shadow-sm">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-moss/10 flex items-center justify-center">
                      {persona.id === 'overwhelmed-mom' ? <Heart className="w-6 h-6 text-moss" /> : <ShieldCheck className="w-6 h-6 text-moss" />}
                    </div>
                    <h3 className="text-xl font-serif text-slate">{persona.name}</h3>
                  </div>
                  
                  <div className="space-y-8">
                    {persona.objections.map((obj, i) => (
                      <article key={i} className="space-y-3">
                        <h4 className="text-sm uppercase tracking-widest text-slate/40 font-semibold italic">"{obj.objection}"</h4>
                        <p className="text-slate/70 font-sans font-light leading-relaxed">
                          {obj.solutionNarrative}
                        </p>
                      </article>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Best Photo Locations */}
        <section className="py-12 md:py-20 px-4 md:px-16 bg-white">
          <div className="max-w-[1200px] mx-auto">
            <div className="space-y-8 md:space-y-12">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <MapPin className="w-5 h-5 text-moss" />
                  <h2 className="text-3xl md:text-4xl font-serif text-slate">Best Photo Locations in {cityName}</h2>
                </div>
                <p className="text-lg text-slate/60 font-sans font-light max-w-2xl">
                  {cityName} offers beautiful parks and natural spaces perfect for family photography. Here are some of my favorite spots:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {cityInfo.locations.map((location, i) => (
                  <div key={i} className="space-y-4 p-6 border border-sand/30 rounded-sm bg-bone/30 hover:border-moss transition-colors group">
                    <div className="relative aspect-video rounded-sm overflow-hidden mb-4">
                      <Image
                        src={`/images/bento-${(i % 7) + 1}.jpg`}
                        alt={`Family photography by Carly Gage in ${cityName}`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <h3 className="font-serif text-xl text-slate group-hover:text-moss transition-colors">{location.name}</h3>
                    <p className="text-slate/60 font-sans font-light leading-relaxed">{location.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Wardrobe/CTA Break */}
        <section className="py-20 px-4 md:px-16 bg-slate text-bone text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-serif leading-tight">Nothing to wear? No problem.</h2>
            <p className="text-lg text-bone/60 font-sans font-light">
              Stop stressing about coordinating outfits. Every session includes my personalized wardrobe advice, full of professional tips to help you choose the perfect textures and tones for your {cityName} session.
            </p>
            <ContextualCTA intent="wardrobe" cityName={cityName} className="!text-bone" />
          </div>
        </section>

        {/* Services Section */}
        <section className="py-12 md:py-20 px-4 md:px-16 bg-bone">
          <div className="max-w-[1200px] mx-auto">
            <div className="space-y-8 md:space-y-12">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-serif text-slate">Sessions Available in {cityName}</h2>
                <p className="text-lg text-slate/60 font-sans font-light max-w-2xl">
                  I offer a variety of session types to fit your family's needs and schedule.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <Link href="/portfolio/dallas-family-session" className="group p-8 bg-white border border-sand/30 rounded-sm hover:border-moss transition-colors">
                  <Users className="w-8 h-8 text-moss mb-4" />
                  <h3 className="text-2xl font-serif text-slate mb-3 group-hover:text-moss transition-colors">Family Sessions</h3>
                  <p className="text-slate/60 font-sans font-light leading-relaxed mb-4">
                    One hour of fun at a beautiful location. I focus on play, laughter, and connection to get those genuine smiles. 40 edited images included.
                  </p>
                  <span className="text-sm text-moss flex items-center gap-2 group-hover:gap-4 transition-all">
                    View Gallery <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>

                <Link href="/flower-mound-maternity-photographer" className="group p-8 bg-white border border-sand/30 rounded-sm hover:border-moss transition-colors">
                  <Camera className="w-8 h-8 text-moss mb-4" />
                  <h3 className="text-2xl font-serif text-slate mb-3 group-hover:text-moss transition-colors">Maternity Sessions</h3>
                  <p className="text-slate/60 font-sans font-light leading-relaxed mb-4">
                    Celebrate your journey with a relaxed one-hour session. Two outfit changes allowed to showcase your glow. Partners are always welcome.
                  </p>
                  <span className="text-sm text-moss flex items-center gap-2 group-hover:gap-4 transition-all">
                    See Flower Mound Maternity <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>

                <Link href="/flower-mound-baby-announcement-photographer" className="group p-8 bg-white border border-sand/30 rounded-sm hover:border-moss transition-colors">
                  <Camera className="w-8 h-8 text-moss mb-4" />
                  <h3 className="text-2xl font-serif text-slate mb-3 group-hover:text-moss transition-colors">Baby Announcements</h3>
                  <p className="text-slate/60 font-sans font-light leading-relaxed mb-4">
                    Celebrate your growing family with a relaxed session that documents the anticipation, excitement, and early joy of sharing the news.
                  </p>
                  <span className="text-sm text-moss flex items-center gap-2 group-hover:gap-4 transition-all">
                    See Flower Mound Baby Announcement <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>

                <Link href="/portfolio/dallas-mini-session" className="group p-8 bg-white border border-sand/30 rounded-sm hover:border-moss transition-colors">
                  <Clock className="w-8 h-8 text-moss mb-4" />
                  <h3 className="text-2xl font-serif text-slate mb-3 group-hover:text-moss transition-colors">Mini Sessions</h3>
                  <p className="text-slate/60 font-sans font-light leading-relaxed mb-4">
                    Short, sweet, and simple. A 20-minute session at a set location delivering 10 beautiful images. Perfect for milestones and busy families.
                  </p>
                  <span className="text-sm text-moss flex items-center gap-2 group-hover:gap-4 transition-all">
                    View Gallery <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Narrative FAQ Section - PHASE 2 CRITICAL */}
        <section className="py-12 md:py-24 px-4 md:px-16 bg-white">
          <div className="max-w-[800px] mx-auto">
            <div className="space-y-4 text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif text-slate">Your {cityName} Session Questions, Answered.</h2>
              <p className="text-lg text-slate/60 font-sans font-light">
                Everything you need to know about capturing beautiful memories in {cityName}.
              </p>
            </div>

            <div className="space-y-4">
              {cityInfo.faqs.map((faq, i) => (
                <details key={i} className="group border-b border-sand/30 pb-4">
                  <summary className="flex items-center justify-between cursor-pointer list-none py-4">
                    <h3 className="text-xl font-serif text-slate group-hover:text-moss transition-colors pr-8">{faq.q}</h3>
                    <div className="w-6 h-6 flex items-center justify-center border border-sand/50 rounded-full group-open:rotate-180 transition-transform">
                      <ArrowRight className="w-3 h-3 text-slate rotate-90" />
                    </div>
                  </summary>
                  <div className="pt-2 pb-6 px-1">
                    {/* Answers are hardcoded, trusted content and may contain a
                        single inline link (e.g. Grapevine -> newborn page). */}
                    <p
                      className="text-slate/60 font-sans font-light leading-relaxed [&_a]:underline [&_a]:text-moss"
                      dangerouslySetInnerHTML={{ __html: faq.a }}
                    />
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 px-4 md:px-16 bg-bone">
          <div className="max-w-[1200px] mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif text-slate">
              Ready to Capture Your Family's Joy in {cityName}?
            </h2>
            <p className="text-xl text-slate/60 font-sans font-light max-w-2xl mx-auto">
              Let's chat about your vision and find the perfect {cityName} location for your family session.
            </p>
            <ContextualCTA intent="booking" cityName={cityName} />
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
