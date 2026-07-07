"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const BARS = Array.from({ length: 16 }, (_, i) => i);

export function CoreVisual() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="relative flex w-full flex-1 flex-col justify-end gap-8 pt-4">
      {/* Radar / pulse core */}
      <div className="relative flex flex-1 items-center justify-center">
        <div className="absolute h-48 w-48 rounded-full border border-ethereal/10" />
        <div className="absolute h-32 w-32 rounded-full border border-ethereal/10" />

        {/* Rotating radar sweep, masked to a thin wedge */}
        <motion.div
          className="absolute h-48 w-48 rounded-full"
          style={{
            background:
              "conic-gradient(from 0deg, var(--color-neon-pink) 0deg, transparent 40deg)",
            opacity: 0.5,
          }}
          animate={prefersReducedMotion ? {} : { rotate: 360 }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        />

        {/* Breathing gradient core */}
        <motion.div
          className="absolute h-20 w-20 rounded-full blur-md"
          style={{
            background:
              "radial-gradient(circle, var(--color-sunset), var(--color-neon-pink) 55%, var(--color-violet) 100%)",
          }}
          animate={
            prefersReducedMotion
              ? {}
              : { scale: [1, 1.15, 1], opacity: [0.8, 1, 0.8] }
          }
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative h-14 w-14 rounded-full border border-ethereal/20 bg-obsidian/60 backdrop-blur-md" />
      </div>

      {/* Activity bars */}
      <div className="flex h-14 items-end gap-1.5">
        {BARS.map((i) => (
          <motion.div
            key={i}
            className="flex-1 rounded-full bg-linear-to-t from-violet/60 to-neon-pink/60"
            animate={
              prefersReducedMotion
                ? { height: "30%" }
                : { height: ["20%", "90%", "40%", "70%", "20%"] }
            }
            transition={{
              duration: 2.4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.08,
            }}
          />
        ))}
      </div>
    </div>
  );
}