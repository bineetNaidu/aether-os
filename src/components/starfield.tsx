"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

function mulberry32(seed: number) {
    return function () {
        seed |= 0;
        seed = (seed + 0x6d2b79f5) | 0;
        let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
        t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
}

const STAR_COUNT = 60;

export function Starfield() {
    const prefersReducedMotion = useReducedMotion();

    const stars = useMemo(() => {
        const rand = mulberry32(7);
        return Array.from({ length: STAR_COUNT }, () => ({
            top: rand() * 100,
            left: rand() * 100,
            size: rand() * 2 + 1,
            delay: rand() * 4,
            duration: rand() * 3 + 2,
        }));
    }, []);

    return (
        <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
            {/* Faint nebula glows, echoing the Hero's palette */}
            <div className="absolute top-1/4 left-1/4 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet/10 blur-[120px]" />
            <div className="absolute right-1/4 bottom-1/4 h-80 w-80 translate-x-1/2 translate-y-1/2 rounded-full bg-neon-pink/10 blur-[120px]" />

            {stars.map((star, i) => (
                <motion.span
                    key={i}
                    className="absolute rounded-full bg-ethereal"
                    style={{
                        top: `${star.top}%`,
                        left: `${star.left}%`,
                        width: star.size,
                        height: star.size,
                    }}
                    animate={
                        prefersReducedMotion
                            ? { opacity: 0.4 }
                            : { opacity: [0.15, 0.9, 0.15] }
                    }
                    transition={{
                        duration: star.duration,
                        delay: star.delay,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </div>
    );
}