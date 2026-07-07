"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, animate } from "framer-motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function useCountUp(target: number, delay = 0) {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.6 });
    const prefersReducedMotion = useReducedMotion();
    const [value, setValue] = useState(0);

    useEffect(() => {
        if (!isInView) return;

        if (prefersReducedMotion) {
            setValue(target);
            return;
        }

        const controls = animate(0, target, {
            duration: 1.6,
            delay,
            ease: [0.16, 1, 0.3, 1],
            onUpdate: (v) => setValue(v),
        });

        return () => controls.stop();
    }, [isInView, target, delay, prefersReducedMotion]);

    return { ref, value };
}