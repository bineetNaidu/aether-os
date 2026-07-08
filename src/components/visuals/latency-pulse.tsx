"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const RINGS = [0, 0.6, 1.2];

export function LatencyPulse() {
    const prefersReducedMotion = useReducedMotion();

    return (
        <div className="relative flex h-full w-full items-center justify-center">
            {RINGS.map((delay, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full border border-sunset/50"
                    initial={{ width: 16, height: 16, opacity: 0.8 }}
                    animate={
                        prefersReducedMotion
                            ? { width: 70, height: 70, opacity: 0.15 }
                            : { width: [16, 110], height: [16, 110], opacity: [0.8, 0] }
                    }
                    transition={{
                        duration: 2.4,
                        delay,
                        repeat: prefersReducedMotion ? 0 : Infinity,
                        ease: "easeOut",
                    }}
                />
            ))}
            <div className="absolute h-2.5 w-2.5 rounded-full bg-sunset shadow-[0_0_16px_4px_rgba(255,77,77,0.7)]" />

            {/* HUD-style readout, gives the frame something composed rather than empty */}
            <div className="absolute bottom-3 left-3 rounded-lg border border-sunset/20 bg-obsidian/60 px-2.5 py-1 backdrop-blur-sm">
                <span className="font-mono text-[10px] text-sunset">38ms</span>
            </div>
        </div>
    );
}