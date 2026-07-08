"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const BARS = Array.from({ length: 12 }, (_, i) => i);

export function CoreVisual() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="flex h-full w-full flex-col items-center justify-between p-5">
      <div className="relative flex flex-1 items-center justify-center">
        <div className="absolute h-28 w-28 rounded-full border border-ethereal/10" />
        <div className="absolute h-16 w-16 rounded-full border border-ethereal/10" />

        {/* Soft rotating arc — fades in and out across the sweep, no hard wedge edge */}
        <motion.div
          className="absolute h-28 w-28 rounded-full"
          style={{
            background:
              "conic-gradient(from 0deg, transparent 0deg, var(--color-neon-pink) 90deg, transparent 180deg)",
            opacity: 0.55,
          }}
          animate={prefersReducedMotion ? {} : { rotate: 360 }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        />

        <motion.div
          className="absolute h-12 w-12 rounded-full blur-md"
          style={{
            background:
              "radial-gradient(circle, var(--color-sunset), var(--color-neon-pink) 60%, transparent 100%)",
          }}
          animate={
            prefersReducedMotion
              ? {}
              : { scale: [1, 1.15, 1], opacity: [0.8, 1, 0.8] }
          }
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative h-7 w-7 rounded-full border border-ethereal/20 bg-obsidian/70 backdrop-blur-md" />
      </div>

      <div className="flex h-9 w-full items-end gap-1">
        {BARS.map((i) => (
          <motion.div
            key={i}
            className="flex-1 rounded-full bg-linear-to-t from-violet/50 to-neon-pink/70"
            animate={
              prefersReducedMotion
                ? { height: "30%" }
                : { height: ["20%", "85%", "40%", "70%", "20%"] }
            }
            transition={{
              duration: 2.4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.1,
            }}
          />
        ))}
      </div>
    </div>
  );
}