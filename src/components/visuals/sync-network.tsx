"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const NODES = [
    { x: 70, y: 15 },
    { x: 15, y: 55 },
    { x: 125, y: 55 },
    { x: 70, y: 95 },
];
const CENTER = { x: 70, y: 55 };

export function SyncNetwork() {
    const prefersReducedMotion = useReducedMotion();

    return (
        <div className="flex h-full w-full items-center justify-center">
            <svg viewBox="0 0 140 110" className="h-full max-h-40 w-full max-w-[180px]">
                {NODES.map((node, i) => (
                    <line
                        key={i}
                        x1={CENTER.x}
                        y1={CENTER.y}
                        x2={node.x}
                        y2={node.y}
                        stroke="var(--color-violet)"
                        strokeOpacity={0.25}
                        strokeWidth={1}
                    />
                ))}

                {NODES.map((node, i) => (
                    <circle key={i} cx={node.x} cy={node.y} r={3} fill="var(--color-violet)" />
                ))}

                {!prefersReducedMotion &&
                    NODES.map((node, i) => (
                        <motion.circle
                            key={`pulse-${i}`}
                            r={2.5}
                            fill="var(--color-neon-pink)"
                            initial={{ cx: CENTER.x, cy: CENTER.y, opacity: 0 }}
                            animate={{
                                cx: [CENTER.x, node.x],
                                cy: [CENTER.y, node.y],
                                opacity: [0, 1, 0],
                            }}
                            transition={{
                                duration: 1.8,
                                delay: i * 0.4,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />
                    ))}

                <circle cx={CENTER.x} cy={CENTER.y} r={6} fill="var(--color-obsidian)" stroke="var(--color-violet)" strokeWidth={1.5} />
            </svg>
        </div>
    );
}