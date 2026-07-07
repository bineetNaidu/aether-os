"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function HeroField() {
    const prefersReducedMotion = useReducedMotion();

    return (
        <div className="absolute inset-0 overflow-hidden">
            {/* Vertical wash in our palette — warm top, violet mid, obsidian bottom */}
            <div
                className="absolute inset-0"
                style={{
                    background:
                        "linear-gradient(180deg, var(--color-sunset) 0%, var(--color-neon-pink) 32%, var(--color-violet) 60%, var(--color-obsidian) 92%)",
                }}
            />

            {/* Slow-drifting blobs, anchored high, for organic depth rather than a flat gradient */}
            <motion.div
                className="absolute -top-1/3 left-1/4 h-2/3 w-2/3 rounded-full bg-neon-pink/70 blur-[100px]"
                animate={
                    prefersReducedMotion ? {} : { x: [0, 60, -30, 0], y: [0, 30, 60, 0] }
                }
                transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute -top-1/4 right-0 h-1/2 w-1/2 rounded-full bg-sunset/60 blur-[100px]"
                animate={
                    prefersReducedMotion ? {} : { x: [0, -40, 20, 0], y: [0, 40, -20, 0] }
                }
                transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
            />
        </div>
    );
}