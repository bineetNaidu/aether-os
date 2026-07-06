import { Zap, ShieldCheck, Layers, Radio } from "lucide-react";
import { BentoCard } from "@/components/bento-card";
import { OrbitVisual } from "@/components/orbit-visual";

export function Features() {
    return (
        <section className="relative bg-obsidian px-8 py-32 md:px-16">
            <div className="mx-auto mb-20 max-w-2xl text-center">
                <span className="text-sm tracking-[0.3em] text-ethereal/50 uppercase">
                    Capabilities
                </span>
                <h2 className="mt-6 font-serif text-5xl italic md:text-6xl">
                    Built for ambient intelligence
                </h2>
            </div>

            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3 md:grid-rows-2">
                <BentoCard
                    title="Ambient Core Engine"
                    description="A continuously adapting inference layer that learns your rhythms without ever asking you to configure it."
                    className="md:col-span-2 md:row-span-2"
                    glow
                    delay={0}
                >
                    <OrbitVisual />
                </BentoCard>

                <BentoCard
                    icon={<Zap size={18} />}
                    title="Instant Response"
                    description="Sub-40ms latency across every connected surface, edge-inferred and locally cached."
                    delay={0.1}
                />

                <BentoCard
                    icon={<ShieldCheck size={18} />}
                    title="Private by Design"
                    description="On-device processing by default. Nothing leaves your ecosystem unless you explicitly allow it."
                    delay={0.15}
                />

                <BentoCard
                    icon={<Layers size={18} />}
                    title="Layered Modules"
                    description="Compose exactly the capabilities you need — nothing bloated, nothing you didn't ask for."
                    className="md:col-span-2"
                    delay={0.2}
                />

                <BentoCard
                    icon={<Radio size={18} />}
                    title="Cross-Device Sync"
                    description="One ambient state, mirrored instantly across every screen you own."
                    delay={0.25}
                />
            </div>
        </section>
    );
}