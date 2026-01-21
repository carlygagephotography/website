import { Metadata } from "next";
import { HomeClient } from "@/components/v3/HomeClient";

export const metadata: Metadata = {
  title: "Dallas Family Photographer | Candid, Fun & Timeless Portraits",
  description: "Carly Gage is a Dallas family photographer based in Flower Mound. I specialize in stress-free family sessions, maternity photos, and mini sessions that capture your family's real joy. Serving Frisco, Southlake, and all of DFW.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return <HomeClient />;
}
