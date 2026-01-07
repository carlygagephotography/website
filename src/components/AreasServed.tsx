import Link from "next/link";

const suburbs = [
  "Flower Mound",
  "Grapevine",
  "Frisco",
  "McKinney",
  "Coppell",
  "Colleyville",
  "Southlake",
  "Highland Park",
  "Prosper",
  "Plano"
];

export function AreasServed() {
  return (
    <section className="py-24 bg-bone border-t border-sand/30">
      <div className="max-w-[1800px] mx-auto px-6 md:px-16">
        <div className="space-y-12">
          <div className="space-y-4">
            <span className="text-[10px] uppercase tracking-[0.6em] text-slate/40 block">Local Relevance</span>
            <h2 className="text-4xl md:text-5xl font-serif text-slate">
              Serving Our Neighbors in <span className="italic text-moss opacity-60">North Texas</span>
            </h2>
            <p className="text-slate/60 font-sans font-light max-w-xl">
              We are based in Flower Mound and love traveling to meet families all over the metroplex.
            </p>
          </div>

          <ul className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {suburbs.map((suburb) => {
              const slug = suburb.toLowerCase().replace(/\s+/g, "-");
              return (
                <li key={suburb}>
                  <Link 
                    href={`/locations/${slug}-family-photographer`}
                    className="text-[11px] uppercase tracking-[0.3em] text-slate/60 hover:text-moss transition-colors duration-300 block py-2 border-b border-sand/20 hover:border-moss/40"
                  >
                    {suburb}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

