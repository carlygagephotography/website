import { Metadata } from "next";

type Props = {
  params: Promise<{ city: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params;
  const cityName = city.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  
  return {
    title: `Family Photographer ${cityName} | Carly Gage Photography`,
    description: `Premium family photography sessions in ${cityName}, Texas. Heirloom portraits for families in ${cityName} and surrounding DFW areas.`,
  };
}

export default async function LocationPage({ params }: Props) {
  const { city } = await params;
  const cityName = city.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 bg-sand">
      <h1 className="text-4xl md:text-6xl font-serif text-moss mb-4 text-center">
        Family Photography in {cityName}
      </h1>
      <p className="text-lg text-charcoal/80 max-w-2xl text-center font-sans">
        Serving families in {cityName} with organic, timeless portraiture.
      </p>
    </main>
  );
}

