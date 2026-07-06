"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { MagneticButton } from "@/components/magnetic-button";
import { GradientMesh } from "@/components/gradient-mesh";
import { EASE_CINEMATIC } from "@/lib/motion";

interface PricingCardProps {
    tier: string;
    price: string;
    cadence: string;
    description: string;
    features: string[];
    ctaLabel: string;
    featured?: boolean;
    delay?: number;
}

const cardReveal = {
    hidden: { opacity: 0, y: 40 },
    visible: (delay: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 1.2, ease: EASE_CINEMATIC, delay },
    }),
};

export function PricingCard({
    tier,
    price,
    cadence,
    description,
    features,
    ctaLabel,
    featured = false,
    delay = 0,
}: PricingCardProps) {
    return (
        <motion.div
            custom={delay}
            variants={cardReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className={`relative flex flex-col justify-between rounded-3xl p-10 ${featured ? "border border-ethereal/10 text-ethereal" : "border border-obsidian/10 bg-ethereal text-obsidian"}`}
        >
            {featured && <GradientMesh />}

            <div className="relative z-10 flex flex-col gap-6">
                <div className="flex items-center justify-between">
                    <span
                        className={`text-sm tracking-[0.2em] uppercase ${featured ? "text-ethereal/60" : "text-obsidian/50"}`}
                    >
                        {tier}
                    </span>
                    {featured && (
                        <span className="rounded-full bg-ethereal/10 px-3 py-1 text-xs tracking-wide text-ethereal/80 backdrop-blur-sm">
                            Most Popular
                        </span>
                    )}
                </div>

                <div className="flex items-baseline gap-2">
                    <span className="font-serif text-6xl italic">{price}</span>
                    <span
                        className={`text-sm ${featured ? "text-ethereal/50" : "text-obsidian/50"}`}
                    >
                        {cadence}
                    </span>
                </div>

                <p
                    className={`text-sm leading-relaxed font-light ${featured ? "text-ethereal/70" : "text-obsidian/60"}`}
                >
                    {description}
                </p>

                <ul className="flex flex-col gap-3 pt-4">
                    {features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3 text-sm">
                            <Check
                                size={16}
                                className={featured ? "text-ethereal/80" : "text-obsidian/70"}
                            />
                            <span className={featured ? "text-ethereal/80" : "text-obsidian/70"}>
                                {feature}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>

            <MagneticButton
                strength={0.25}
                className={`relative z-10 mt-10 w-full ${featured ? "bg-ethereal text-obsidian" : "bg-obsidian text-ethereal hover:bg-obsidian/90"}`}
            >
                {ctaLabel}
            </MagneticButton>
        </motion.div>
    );
}