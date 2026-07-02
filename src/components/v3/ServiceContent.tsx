import Link from "next/link";
import { ArrowRight } from "lucide-react";

export interface ServiceContentData {
  /** Opening paragraphs (the substantive intro). */
  intro: string[];
  /** "What to expect" steps. */
  whatToExpect: Array<{ heading: string; body: string }>;
  /** Heading for the local-venues block. */
  venuesHeading: string;
  /** Paragraphs describing real local shoot locations. */
  venues: string[];
  /** Visible FAQ — must match the page's FAQPage JSON-LD. */
  faqs: Array<{ q: string; a: string }>;
  /** A real, attributed testimonial. */
  testimonial?: { quote: string; name: string; location: string };
}

const PHONE_DISPLAY = "(214) 422-8050";
const PHONE_HREF = "tel:+12144228050";

export function ServiceContent({
  intro,
  whatToExpect,
  venuesHeading,
  venues,
  faqs,
  testimonial,
}: ServiceContentData) {
  return (
    <section className="px-4 md:px-16 py-12 md:py-24 bg-bone border-t border-sand/40">
      <div className="max-w-[1100px] mx-auto space-y-16 md:space-y-24">
        {/* Intro prose */}
        <div className="max-w-3xl space-y-5 md:space-y-6">
          {intro.map((p, i) => (
            <p
              key={i}
              className="text-base md:text-lg text-slate/70 font-sans font-light leading-relaxed"
            >
              {p}
            </p>
          ))}
        </div>

        {/* What to expect */}
        <div className="space-y-8 md:space-y-12">
          <div className="space-y-3">
            <span className="text-[9px] md:text-[10px] uppercase tracking-[0.5em] text-slate/40 block">
              The Experience
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-slate leading-[0.95]">
              What to <span className="italic font-light text-moss opacity-70">Expect.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {whatToExpect.map((step, i) => (
              <div key={i} className="space-y-3 border-t border-sand pt-5">
                <span className="text-lg font-serif italic text-sand">0{i + 1}</span>
                <h3 className="text-xl md:text-2xl font-serif text-slate">{step.heading}</h3>
                <p className="text-sm md:text-base text-slate/60 font-sans font-light leading-relaxed">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Local venues */}
        <div className="space-y-6 md:space-y-8 max-w-3xl">
          <h2 className="text-2xl md:text-4xl font-serif text-slate leading-[0.95]">
            {venuesHeading}
          </h2>
          {venues.map((p, i) => (
            <p
              key={i}
              className="text-base md:text-lg text-slate/70 font-sans font-light leading-relaxed"
            >
              {p}
            </p>
          ))}
        </div>

        {/* Testimonial */}
        {testimonial && (
          <figure className="max-w-3xl border-l-2 border-moss/40 pl-6 md:pl-10 py-2 space-y-4">
            <blockquote className="text-lg md:text-2xl font-serif text-slate/80 italic leading-relaxed">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>
            <figcaption className="text-[10px] uppercase tracking-[0.3em] text-slate/50">
              {testimonial.name}
              <span className="text-slate/30"> · {testimonial.location}</span>
            </figcaption>
          </figure>
        )}

        {/* FAQ */}
        <div className="space-y-6 md:space-y-8">
          <h2 className="text-2xl md:text-4xl font-serif text-slate">
            Common <span className="italic font-light text-clay opacity-60">Questions.</span>
          </h2>
          <div className="space-y-1 max-w-3xl">
            {faqs.map((faq, i) => (
              <details key={i} className="group border-b border-sand/40 py-4">
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none">
                  <h3 className="text-base md:text-xl font-serif text-slate group-hover:text-moss transition-colors">
                    {faq.q}
                  </h3>
                  <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center border border-sand/50 rounded-full group-open:rotate-45 transition-transform text-slate/40">
                    +
                  </div>
                </summary>
                <div className="pt-3 pb-1">
                  <p className="text-sm md:text-base text-slate/60 font-sans font-light leading-relaxed max-w-2xl">
                    {faq.a}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>

        {/* CTA + visible phone */}
        <div className="bg-white border border-sand rounded-sm p-8 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-serif text-slate">Ready to book?</h2>
            <p className="text-sm md:text-base text-slate/60 font-sans font-light">
              Tell me a little about your family and I&rsquo;ll reply within 24 hours. Prefer to
              talk? Call or text{" "}
              <a href={PHONE_HREF} className="text-moss hover:text-moss/80 underline">
                {PHONE_DISPLAY}
              </a>
              .
            </p>
          </div>
          <Link
            href="/#contact"
            className="group inline-flex items-center justify-center gap-3 bg-slate text-bone px-8 py-4 rounded-sm text-[10px] uppercase tracking-[0.3em] hover:bg-slate/90 transition-all whitespace-nowrap"
          >
            Check Availability
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
