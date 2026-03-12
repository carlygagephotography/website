import { Metadata } from "next";
import { HomeClient } from "@/components/v3/HomeClient";

export const metadata: Metadata = {
  title: "Flower Mound Family Photographer | Carly Gage Photography",
  description: "Carly Gage is a Flower Mound family photographer creating joyful, stress-free family & newborn portraits. Serving Southlake, Highland Park, Coppell & DFW.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return <HomeClient />;
}

