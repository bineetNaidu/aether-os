"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const WIDTHS = ["56%", "70%", "84%"];

export function ModuleStack() {
    const prefersReducedMotion = useReducedMotion();

    return (
        <div className="flex h-full w-full flex-col items-center justify-center">
            {WIDTHS.map((width, i) => (
                <motion.div
                    key={i}
                    className={`h-11 rounded-xl border border-neon-pink/20 bg-linear-to-r from-neon-pink/25 to-neon-pink/5 backdrop-blur-sm ${i > 0 ? "-mt-4" : ""
                        }`}
                    style={{ width }}
                    animate={prefersReducedMotion ? {} : { y: [0, -5, 0] }}
                    transition={{
                        duration: 3.5,
                        delay: i * 0.25,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </div>
    );
}