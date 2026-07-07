"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const CHARS = "AETHER0S+#=~°".split("");
const COLS = 64;
const ROWS = 30;
const FLICKER_INTERVAL_MS = 140;
const FLICKER_RATIO = 0.02; // ~2% of cells swap glyph per tick

function mulberry32(seed: number) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

interface Cell {
  char: string;
  opacity: number;
}

function buildInitialCells(): Cell[] {
  const rand = mulberry32(42);
  return Array.from({ length: COLS * ROWS }, (_, i) => {
    const row = Math.floor(i / COLS);
    const fade = 1 - row / ROWS;
    const r = rand();
    return {
      char: CHARS[Math.floor(rand() * CHARS.length)],
      opacity: Math.max(0.04, Math.min(0.9, r * fade * 1.3)),
    };
  });
}

export function AsciiMesh() {
  const prefersReducedMotion = useReducedMotion();
  // Deterministic initial build — identical on server and client, no hydration mismatch
  const [cells, setCells] = useState<Cell[]>(buildInitialCells);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const rand = mulberry32(Date.now());
    const swapsPerTick = Math.floor(COLS * ROWS * FLICKER_RATIO);

    const id = setInterval(() => {
      setCells((prev) => {
        const next = prev.slice();
        for (let s = 0; s < swapsPerTick; s++) {
          const idx = Math.floor(rand() * next.length);
          next[idx] = { ...next[idx], char: CHARS[Math.floor(rand() * CHARS.length)] };
        }
        return next;
      });
    }, FLICKER_INTERVAL_MS);

    return () => clearInterval(id);
  }, [prefersReducedMotion]);

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(to bottom, transparent 0%, black 14%, black 55%, transparent 90%)",
        WebkitMaskImage:
          "linear-gradient(to bottom, transparent 0%, black 14%, black 55%, transparent 90%)",
      }}
    >
      <div
        className="grid h-full w-full gap-x-2 gap-y-1.5 pt-24 font-mono text-[10px] leading-none tracking-tighter text-ethereal select-none md:pt-28 md:text-xs"
        style={{ gridTemplateColumns: `repeat(${COLS}, minmax(0, 1fr))` }}
      >
        {cells.map((cell, i) => (
          <span key={i} style={{ opacity: cell.opacity }}>
            {cell.char}
          </span>
        ))}
      </div>
    </div>
  );
}