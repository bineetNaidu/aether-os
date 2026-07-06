"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { MagneticButton } from "@/components/magnetic-button";
import { EASE_CINEMATIC } from "@/lib/motion";

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
        <section className="relative flex h-screen w-full items-end overflow-hidden bg-obsidian">
            {/* Background image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/assets/aether-os-bg.jpg')" }}
            />

            {/* Scrim gradient for text legibility */}
            <div className="absolute inset-0 bg-linear-to-t from-obsidian via-obsidian/40 to-transparent" />
            <div className="absolute inset-0 bg-linear-to-b from-obsidian/60 via-transparent to-transparent" />

            {/* Content */}
            <motion.div
                variants={container}
                initial="hidden"
                animate="visible"
                className="relative z-10 flex w-full flex-col gap-8 px-8 pb-20 md:px-16 md:pb-28"
            >
                <div className="overflow-hidden">
                    <motion.span
                        variants={fadeUp}
                        className="block text-sm tracking-[0.3em] text-ethereal/60 uppercase"
                    >
                        Introducing AetherOS
                    </motion.span>
                </div>

                <h1 className="flex flex-col font-serif text-[13vw] leading-[0.9] italic md:text-[8vw]">
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

                <motion.div
                    variants={fadeUp}
                    className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end"
                >
                    <p className="max-w-md text-base font-light text-ethereal/70 md:text-lg">
                        An ambient computing layer that dissolves the boundary between
                        intention and interface. Available for early access.
                    </p>

                    <MagneticButton className="group flex items-center gap-2 border border-ethereal/20 bg-ethereal/5 backdrop-blur-md text-ethereal">
                        <span>Request Access</span>
                        <ArrowUpRight
                            size={18}
                            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                        />
                    </MagneticButton>
                </motion.div>
            </motion.div>
        </section>
    );
}