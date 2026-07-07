"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { MagneticButton } from "@/components/magnetic-button";
import { AsciiMesh } from "@/components/ascii-mesh";
import { StatRow } from "@/components/stat-row";
import { EASE_CINEMATIC } from "@/lib/motion";
import { HeroField } from "./hero-field";
import { EyebrowBadge } from "@/components/eyebrow-badge";

const container = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.3,
        },
    },
};

const lineReveal = {
    hidden: { y: "110%" },
    visible: {
        y: "0%",
        transition: { duration: 1.4, ease: EASE_CINEMATIC },
    },
};

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 1.2, ease: EASE_CINEMATIC },
    },
};

export function Hero() {
    return (
        <section className="relative flex h-screen w-full flex-col justify-end overflow-hidden bg-obsidian">
            <HeroField />
            <AsciiMesh />

            {/* Scrim for bottom text legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/50 to-transparent" />

            {/* Content */}
            <motion.div
                variants={container}
                initial="hidden"
                animate="visible"
                className="relative z-10 flex w-full flex-col gap-12 px-8 pb-16 md:px-16 md:pb-20"
            >
                <div>
                    <div className="overflow-hidden">
                        <motion.div variants={fadeUp}>
                            <EyebrowBadge />
                        </motion.div>
                    </div>

                    <h1 className="mt-4 flex flex-col font-serif text-[clamp(2.75rem,13vw,10rem)] leading-[0.9] italic md:text-[8vw]">
                        <span className="overflow-hidden">
                            <motion.span variants={lineReveal} className="block">
                                The Operating
                            </motion.span>
                        </span>
                        <span className="overflow-hidden">
                            <motion.span variants={lineReveal} className="block">
                                System for Thought
                            </motion.span>
                        </span>
                    </h1>
                </div>

                <div className="flex flex-col-reverse items-start justify-between gap-10 md:flex-row md:items-end">
                    <motion.div variants={fadeUp} className="relative inline-flex">
                        {/* Soft ambient glow behind the button, matching the brand gradient */}
                        <div
                            aria-hidden="true"
                            className="absolute -inset-6 rounded-full opacity-40 blur-2xl"
                            style={{
                                background:
                                    "linear-gradient(135deg, var(--color-sunset), var(--color-neon-pink), var(--color-violet))",
                            }}
                        />
                        <MagneticButton
                            strength={0.3}
                            className="group relative flex items-center gap-2 border border-ethereal/20 bg-obsidian/70 text-ethereal shadow-[inset_0_1px_0_0_rgba(248,248,248,0.1)] backdrop-blur-xl"
                        >
                            <span>Request early access</span>
                            <ArrowUpRight
                                size={18}
                                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                            />
                        </MagneticButton>
                    </motion.div>

                    <StatRow />
                </div>
            </motion.div>
        </section>
    );
}