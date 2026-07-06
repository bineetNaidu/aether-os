import { Features } from "@/components/features";
import { Hero } from "@/components/hero";
import { Pricing } from "@/components/pricing";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <Features />
      <Pricing />
    </main>
  );
}