import { Zap, ShieldCheck, Layers, Radio } from "lucide-react";
import { BentoCard } from "@/components/bento-card";
import { CoreVisual } from "@/components/core-visual";
import { LatencyPulse } from "./visuals/latency-pulse";
import { ModuleStack } from "./visuals/module-stack";
import { PrivacyAura } from "./visuals/privacy-aura";
import { SyncNetwork } from "./visuals/sync-network";

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
                    accent="pink"
                    dominant
                    delay={0}
                    visual={<CoreVisual />}
                >
                    {/* <CoreVisual /> */}
                </BentoCard>

                <BentoCard
                    icon={<Zap size={18} />}
                    title="Instant Response"
                    description="Sub-40ms latency across every connected surface, edge-inferred and locally cached."
                    accent="sunset"
                    delay={0.1}
                    visual={<LatencyPulse />}
                />

                <BentoCard
                    icon={<ShieldCheck size={18} />}
                    title="Private by Design"
                    description="On-device processing by default. Nothing leaves your ecosystem unless you explicitly allow it."
                    accent="violet"
                    delay={0.15}
                    visual={<PrivacyAura />}
                />

                <BentoCard
                    icon={<Layers size={18} />}
                    title="Layered Modules"
                    description="Compose exactly the capabilities you need — nothing bloated, nothing you didn't ask for."
                    className="md:col-span-2"
                    accent="pink"
                    delay={0.2}
                    visual={<ModuleStack />}
                />

                <BentoCard
                    icon={<Radio size={18} />}
                    title="Cross-Device Sync"
                    description="One ambient state, mirrored instantly across every screen you own."
                    accent="violet"
                    delay={0.25}
                    visual={<SyncNetwork />}
                />
            </div>
        </section>
    );
}