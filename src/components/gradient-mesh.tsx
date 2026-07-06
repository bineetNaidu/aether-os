"use client";

import { motion } from "framer-motion";

export function GradientMesh() {
    return (
        <div className="absolute inset-0 overflow-hidden rounded-[inherit]">
            <motion.div
                className="absolute -top-1/4 -left-1/4 h-3/4 w-3/4 rounded-full bg-sunset opacity-60 blur-[80px]"
                animate={{
                    x: [0, 60, -20, 0],
                    y: [0, 40, 80, 0],
                    scale: [1, 1.15, 0.95, 1],
                }}
                transition={{
                    duration: 14,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            <motion.div
                className="absolute top-1/4 -right-1/4 h-3/4 w-3/4 rounded-full bg-violet opacity-60 blur-[80px]"
                animate={{
                    x: [0, -50, 30, 0],
                    y: [0, 60, -30, 0],
                    scale: [1, 0.9, 1.2, 1],
                }}
                transition={{
                    duration: 16,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            <motion.div
                className="absolute -bottom-1/4 left-1/4 h-3/4 w-3/4 rounded-full bg-neon-pink opacity-50 blur-[80px]"
                animate={{
                    x: [0, 30, -60, 0],
                    y: [0, -40, 20, 0],
                    scale: [1, 1.1, 0.9, 1],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            {/* Glass sheen layer so it reads as glassmorphism, not just a lava lamp */}
            <div className="absolute inset-0 bg-obsidian/40 backdrop-blur-3xl" />
        </div>
    );
}