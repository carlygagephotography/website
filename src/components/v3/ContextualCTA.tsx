import Link from "next/link";
import { ArrowRight } from "lucide-react";

export type CTAIntent = "wardrobe" | "pricing" | "booking" | "portfolio" | "general";

interface ContextualCTAProps {
  intent: CTAIntent;
  cityName?: string;
  className?: string;
}

export const ContextualCTA = ({ intent, cityName, className = "" }: ContextualCTAProps) => {
  const getCTAConfig = () => {
    switch (intent) {
      case "wardrobe":
        return {
          text: "View Styling Tips",
          // No dedicated /#wardrobe section exists; the homepage FAQ covers
          // what-to-wear guidance, so send styling intent there.
          href: "/#faq",
          subtext: "Personalized wardrobe advice for your family"
        };
      case "pricing":
        return {
          text: "View Investment Guide",
          // No public pricing page; route to the inquiry form.
          href: "/#contact",
          subtext: "Transparent pricing for family memories"
        };
      case "portfolio":
        return {
          text: `See More ${cityName || "Family"} Sessions`,
          href: "/portfolio/dallas-family-session",
          subtext: "Real moments, genuine connection"
        };
      case "booking":
        return {
          text: "Check Availability",
          href: "/#contact",
          subtext: "Let's plan your perfect session"
        };
      default:
        return {
          text: "Book Your Session",
          href: "/#contact",
          subtext: `Authentic family photography in ${cityName || "DFW"}`
        };
    }
  };

  const config = getCTAConfig();

  return (
    <div className={`flex flex-col items-center gap-4 ${className}`}>
      <Link
        href={config.href}
        className="group relative inline-flex items-center justify-center bg-slate text-bone px-8 py-4 rounded-sm text-[10px] uppercase tracking-[0.3em] hover:bg-slate/90 transition-all overflow-hidden"
      >
        <span className="relative z-10 flex items-center gap-2">
          {config.text}
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </span>
      </Link>
      <span className="text-xs text-slate/40 font-sans italic">
        {config.subtext}
      </span>
    </div>
  );
};
