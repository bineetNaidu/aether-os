import { PricingCard } from "@/components/pricing-card";

export function Pricing() {
    return (
        <section className="relative bg-obsidian px-8 py-32 md:px-16">
            <div className="mx-auto mb-20 max-w-2xl text-center">
                <span className="text-sm tracking-[0.3em] text-ethereal/50 uppercase">
                    Pricing
                </span>
                <h2 className="mt-6 font-serif text-5xl italic md:text-6xl">
                    Choose your layer of ambient intelligence
                </h2>
            </div>

            <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
                <PricingCard
                    tier="Standard"
                    price="$29"
                    cadence="/ month"
                    description="Core ambient computing for individuals getting started with AetherOS."
                    features={[
                        "Single-device sync",
                        "Standard response latency",
                        "Community support",
                        "Core gesture library",
                    ]}
                    ctaLabel="Get Started"
                    delay={0}
                />
                <PricingCard
                    tier="Aether Pro"
                    price="$89"
                    cadence="/ month"
                    description="Full ambient presence across every surface you own, with priority everything."
                    features={[
                        "Unlimited device sync",
                        "Priority low-latency inference",
                        "Dedicated concierge support",
                        "Full gesture + voice library",
                        "Early access to new modules",
                    ]}
                    ctaLabel="Go Premium"
                    featured
                    delay={0.15}
                />
            </div>
        </section>
    );
}