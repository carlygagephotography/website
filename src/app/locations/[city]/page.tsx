import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navigation } from "@/components/v3/Navigation";
import { Footer } from "@/components/v3/Footer";
import { ArrowRight, Camera, Clock, MapPin, Users } from "lucide-react";

type Props = {
  params: Promise<{ city: string }>;
};

// City-specific data
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
    description: "Based right here in Flower Mound, I love capturing families in our beautiful local parks and natural spaces. From the rolling hills of the Cross Timbers to serene lake settings, Flower Mound offers stunning backdrops for authentic family moments.",
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
    description: "Serving Grapevine families with relaxed, fun photography sessions. Grapevine's beautiful lake settings and charming community spaces provide perfect backdrops for family memories.",
    locations: [
      { name: "Grapevine Lake Parks", description: "Stunning waterfront locations with tall grasses, natural light, and beautiful sunsets perfect for golden hour sessions." },
      { name: "Grapevine Botanical Gardens", description: "Well-maintained gardens with diverse backdrops and seasonal beauty for elegant family portraits." },
      { name: "Historic Main Street Grapevine", description: "Charming downtown area with character and good lighting for unique family photos." },
      { name: "Oak Grove Park", description: "Community park with mature trees, open spaces, and playgrounds ideal for families with kids." },
    ],
    faqs: [
      { q: "What makes Grapevine lake sessions special?", a: "Grapevine Lake offers beautiful waterfront settings that are perfect for golden hour photography. The natural light reflecting off the water creates stunning backdrops." },
      { q: "Are lake sessions safe for kids?", a: "Absolutely! I choose safe, accessible locations with plenty of space away from the water's edge. Safety is always my top priority." },
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
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params;
  const citySlug = city.replace(/-family-photographer$/, "");
  const cityInfo = cityData[citySlug];
  
  if (!cityInfo) {
    return {
      title: `Family Photographer | Carly Gage Photography`,
      description: `Dallas family photographer serving families throughout the DFW metroplex.`,
    };
  }

  const cityName = cityInfo.displayName;

  return {
    title: `${cityName} Family Photographer | Candid, Fun & Timeless Portraits`,
    description: `Carly Gage is a ${cityName} family photographer based in Flower Mound. Stress-free family sessions, maternity photos, and mini sessions that capture your family's real joy. Serving ${cityName} and all of DFW.`,
    openGraph: {
      title: `${cityName} Family Photographer | Carly Gage Photography`,
      description: `Authentic, joyful family photography in ${cityName}, Texas. Capturing real moments and genuine connections.`,
    },
  };
}

export default async function LocationPage({ params }: Props) {
  const { city } = await params;
  const citySlug = city.replace(/-family-photographer$/, "");
  const cityInfo = cityData[citySlug];

  if (!cityInfo) {
    return (
      <main className="min-h-screen bg-bone">
        <Navigation />
        <div className="pt-32 pb-20 px-4 md:px-16">
          <div className="max-w-[1200px] mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-serif text-slate mb-4">Location Not Found</h1>
            <p className="text-lg text-slate/60 mb-8">I couldn't find information for this location.</p>
            <Link href="/" className="text-slate hover:text-moss underline">Return Home</Link>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  const cityName = cityInfo.displayName;

  // JSON-LD Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `https://carlygage.com/locations/${city}`,
    "url": `https://carlygage.com/locations/${city}`,
    "name": `${cityName} Family Photographer | Carly Gage Photography`,
    "description": cityInfo.description,
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
            <div className="space-y-6 md:space-y-8 mb-12 md:mb-16">
              <span className="text-[9px] md:text-[10px] uppercase tracking-[0.5em] md:tracking-[0.6em] text-slate/40 block">Serving {cityName}</span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif leading-[0.9] tracking-tighter text-slate">
                {cityName} Family <br />
                <span className="italic font-light opacity-50 text-moss">Photographer.</span>
              </h1>
              <p className="text-lg md:text-xl text-slate/60 font-sans font-light leading-relaxed max-w-3xl">
                {cityInfo.description}
              </p>
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
                  <div key={i} className="space-y-2 p-6 border border-sand/30 rounded-sm bg-bone/30">
                    <h3 className="font-serif text-xl text-slate">{location.name}</h3>
                    <p className="text-slate/60 font-sans font-light leading-relaxed">{location.description}</p>
                  </div>
                ))}
              </div>
            </div>
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

                <Link href="/portfolio/dallas-maternity-session" className="group p-8 bg-white border border-sand/30 rounded-sm hover:border-moss transition-colors">
                  <Camera className="w-8 h-8 text-moss mb-4" />
                  <h3 className="text-2xl font-serif text-slate mb-3 group-hover:text-moss transition-colors">Maternity Sessions</h3>
                  <p className="text-slate/60 font-sans font-light leading-relaxed mb-4">
                    Celebrate your journey with a relaxed one-hour session. Two outfit changes allowed to showcase your glow. Partners are always welcome.
                  </p>
                  <span className="text-sm text-moss flex items-center gap-2 group-hover:gap-4 transition-all">
                    View Gallery <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>

                <Link href="/portfolio/dallas-baby-announcement" className="group p-8 bg-white border border-sand/30 rounded-sm hover:border-moss transition-colors">
                  <Camera className="w-8 h-8 text-moss mb-4" />
                  <h3 className="text-2xl font-serif text-slate mb-3 group-hover:text-moss transition-colors">Baby Announcement</h3>
                  <p className="text-slate/60 font-sans font-light leading-relaxed mb-4">
                    Share your big news! A one-hour creative session to capture the excitement of your growing family. Perfect for social media and keepsakes.
                  </p>
                  <span className="text-sm text-moss flex items-center gap-2 group-hover:gap-4 transition-all">
                    View Gallery <ArrowRight className="w-4 h-4" />
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

        {/* FAQ Section */}
        <section className="py-12 md:py-20 px-4 md:px-16 bg-white">
          <div className="max-w-[1200px] mx-auto">
            <div className="space-y-8 md:space-y-12">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-serif text-slate">Common Questions About {cityName} Sessions</h2>
                <p className="text-lg text-slate/60 font-sans font-light max-w-2xl">
                  Everything you need to know about booking a family photography session in {cityName}.
                </p>
              </div>

              <div className="space-y-6 md:space-y-8">
                {cityInfo.faqs.map((faq, i) => (
                  <div key={i} className="space-y-3 pb-6 border-b border-sand/30 last:border-0">
                    <h3 className="text-xl md:text-2xl font-serif text-slate">{faq.q}</h3>
                    <p className="text-slate/60 font-sans font-light leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
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
            <Link
              href="/#contact"
              className="inline-block bg-slate text-bone px-10 py-5 rounded-sm text-[10px] uppercase tracking-[0.4em] hover:bg-slate/90 transition-all shadow-lg shadow-slate/5"
            >
              Book Your Session
            </Link>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
