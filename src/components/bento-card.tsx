"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { EASE_CINEMATIC } from "@/lib/motion";

type Accent = "sunset" | "violet" | "pink";

const ACCENT_MAP: Record<
    Accent,
    { icon: string; iconBg: string; iconBorder: string; glow: string }
> = {
    sunset: {
        icon: "text-sunset",
        iconBg: "bg-sunset/10",
        iconBorder: "border-sunset/20",
        glow: "bg-sunset/40",
    },
    violet: {
        icon: "text-violet",
        iconBg: "bg-violet/10",
        iconBorder: "border-violet/20",
        glow: "bg-violet/40",
    },
    pink: {
        icon: "text-neon-pink",
        iconBg: "bg-neon-pink/10",
        iconBorder: "border-neon-pink/20",
        glow: "bg-neon-pink/40",
    },
};

interface BentoCardProps {
    className?: string;
    icon?: ReactNode;
    title: string;
    description: string;
    delay?: number;
    accent?: Accent;
    dominant?: boolean;
    children?: ReactNode;
}

export function BentoCard({
    className,
    icon,
    title,
    description,
    delay = 0,
    accent = "violet",
    dominant = false,
    children,
}: BentoCardProps) {
    const a = ACCENT_MAP[accent];

    return (
        <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: EASE_CINEMATIC, delay }}
            whileHover={{ y: -4 }}
            className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-ethereal/10 bg-gradient-to-b from-ethereal/[0.05] to-transparent p-8 backdrop-blur-sm transition-colors duration-500 hover:border-ethereal/20 ${className ?? ""}`}
        >
            {/* Corner glow, brightens on hover */}
            <div
                className={`pointer-events-none absolute -top-20 -right-20 h-56 w-56 rounded-full blur-[90px] transition-opacity duration-700 group-hover:opacity-100 ${a.glow} ${dominant ? "opacity-60" : "opacity-0"}`}
            />

            <div className="relative z-10 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                    {icon && (
                        <div
                            className={`flex h-11 w-11 items-center justify-center rounded-xl border ${a.iconBg} ${a.iconBorder} ${a.icon}`}
                        >
                            {icon}
                        </div>
                    )}
                    {dominant && (
                        <span className="inline-flex items-center gap-2 rounded-full border border-ethereal/15 bg-ethereal/5 px-3 py-1">
                            <span className="relative flex h-1.5 w-1.5">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neon-pink opacity-75" />
                                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-neon-pink" />
                            </span>
                            <span className="text-[10px] tracking-[0.2em] text-ethereal/60 uppercase">
                                Live
                            </span>
                        </span>
                    )}
                </div>

                <h3 className="font-serif text-2xl italic text-ethereal md:text-[1.75rem]">
                    {title}
                </h3>
                <p className="max-w-sm text-sm leading-relaxed font-light text-ethereal/55">
                    {description}
                </p>
            </div>

            {children && <div className="relative z-10 mt-6 flex flex-1">{children}</div>}
        </motion.div>
    );
}