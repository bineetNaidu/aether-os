"use client";

import { useReducedMotion as useFramerReducedMotion } from "framer-motion";

/**
 * Thin wrapper around Framer Motion's built-in hook, kept as our own
 * hook so call sites read as app-level intent, not a framer implementation detail.
 */
export function useReducedMotion() {
    return useFramerReducedMotion();
}