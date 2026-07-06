"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export function OrbitVisual() {
    return (
        <div className="relative flex h-48 w-full items-center justify-center">
            <div className="absolute h-40 w-40 rounded-full border border-ethereal/10" />
            <div className="absolute h-28 w-28 rounded-full border border-ethereal/10" />

            <motion.div
                className="absolute h-40 w-40"
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            >
                <div className="absolute top-0 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-sunset shadow-[0_0_20px_4px_rgba(255,77,77,0.6)]" />
            </motion.div>

            <motion.div
                className="absolute h-28 w-28"
                animate={{ rotate: -360 }}
                transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
            >
                <div className="absolute top-0 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-neon-pink shadow-[0_0_16px_4px_rgba(255,0,128,0.6)]" />
            </motion.div>

            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-ethereal/20 bg-ethereal/5 backdrop-blur-md">
                <Sparkles size={20} className="text-ethereal" />
            </div>
        </div>
    );
}