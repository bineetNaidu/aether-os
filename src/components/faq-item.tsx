"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { EASE_CINEMATIC } from "@/lib/motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

interface FaqItemProps {
  question: string;
  answer: string;
  index: number;
}

export function FaqItem({ question, answer, index }: FaqItemProps) {
  const [open, setOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const label = String(index + 1).padStart(2, "0");

  return (
    <div className="border-b border-ethereal/10">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center gap-6 py-7 text-left"
        aria-expanded={open}
      >
        {/* Orbit indicator: core dot + satellite that only orbits while open */}
        <div className="relative flex h-9 w-9 shrink-0 items-center justify-center">
          <div
            className={`absolute h-9 w-9 rounded-full border transition-colors duration-500 ${open ? "border-neon-pink/40" : "border-ethereal/15"}`}
          />
          <motion.div
            className="absolute h-9 w-9"
            animate={open && !prefersReducedMotion ? { rotate: 360 } : { rotate: 0 }}
            transition={{ duration: 4, repeat: open ? Infinity : 0, ease: "linear" }}
          >
            <span
              className={`absolute top-0 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full transition-colors duration-500 ${open ? "bg-neon-pink shadow-[0_0_10px_2px_rgba(255,0,128,0.6)]" : "bg-ethereal/20"}`}
            />
          </motion.div>
          <span
            className={`text-xs transition-colors duration-500 ${open ? "text-ethereal" : "text-ethereal/40"}`}
          >
            {label}
          </span>
        </div>

        <span className="flex-1 font-serif text-xl italic text-ethereal md:text-2xl">
          {question}
        </span>

        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.4, ease: EASE_CINEMATIC }}
          className="shrink-0 text-ethereal/60"
        >
          <Plus size={20} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: EASE_CINEMATIC }}
            className="overflow-hidden"
          >
            <p className="max-w-2xl pb-8 pl-[3.75rem] text-sm leading-relaxed font-light text-ethereal/60">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}