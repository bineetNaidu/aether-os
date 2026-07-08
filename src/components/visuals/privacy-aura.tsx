"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function PrivacyAura() {
    const prefersReducedMotion = useReducedMotion();

    return (
        <div className="flex h-full w-full flex-col">
            {/* Faux browser-chrome row — small detail borrowed from the reference */}
            <div className="flex items-center gap-1.5 border-b border-ethereal/10 px-3 py-2">
                <span className="h-1.5 w-1.5 rounded-full bg-ethereal/20" />
                <span className="h-1.5 w-1.5 rounded-full bg-ethereal/20" />
                <span className="h-1.5 w-1.5 rounded-full bg-ethereal/20" />
            </div>

            <div className="relative flex flex-1 items-center justify-center">
                <div
                    className="absolute h-24 w-24 rounded-full blur-xl"
                    style={{
                        background: "radial-gradient(circle, rgba(121,40,202,0.45), transparent 70%)",
                    }}
                />
                <div className="absolute h-20 w-20 rounded-full border border-violet/30" />

                <motion.div
                    className="absolute h-20 w-20 rounded-full"
                    style={{
                        background:
                            "conic-gradient(from 0deg, transparent 0deg, var(--color-violet) 70deg, transparent 140deg)",
                        opacity: 0.6,
                    }}
                    animate={prefersReducedMotion ? {} : { rotate: 360 }}
                    transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                />

                <div className="relative flex h-11 w-11 items-center justify-center rounded-full border border-ethereal/20 bg-obsidian/70 backdrop-blur-md">
                    <ShieldCheck size={18} className="text-violet" />
                </div>
            </div>
        </div>
    );
}