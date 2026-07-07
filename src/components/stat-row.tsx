"use client";

import { motion } from "framer-motion";
import { EASE_CINEMATIC } from "@/lib/motion";
import { useCountUp } from "@/hooks/use-count-up";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

interface Stat {
    target: number;
    suffix: string;
    label: string;
}

const STATS: Stat[] = [
    { target: 120, suffix: "K+", label: "Ambient Sessions" },
    { target: 98, suffix: "%", label: "Faster Response" },
    { target: 500, suffix: "+", label: "Teams Onboarded" },
];

function AnimatedStat({ stat, delay }: { stat: Stat; delay: number }) {
    const { ref, value, done } = useCountUp(stat.target, delay);
    const prefersReducedMotion = useReducedMotion();

    return (
        <motion.span
            ref={ref}
            className="gradient-mesh-text inline-block font-serif text-3xl italic tabular-nums md:text-4xl"
            animate={
                done && !prefersReducedMotion
                    ? { opacity: [1, 0.75, 1] }
                    : { opacity: 1 }
            }
            transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
        >
            {Math.round(value)}
            {stat.suffix}
        </motion.span>
    );
}



export function StatRow() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: EASE_CINEMATIC, delay: 1.1 }}
            className="flex divide-x divide-ethereal/10"
        >
            {STATS.map((stat, i) => (
                <div
                    key={stat.label}
                    className="flex flex-col gap-1 px-6 first:pl-0 md:px-8"
                >
                    <AnimatedStat stat={stat} delay={2.2 * i} />
                    <span className="text-xs tracking-[0.15em] text-ethereal/50 uppercase">
                        {stat.label}
                    </span>
                </div>
            ))}
        </motion.div>
    );
}