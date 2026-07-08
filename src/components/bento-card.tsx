"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { EASE_CINEMATIC } from "@/lib/motion";
import { VisualFrame } from "@/components/visual-frame";

type Accent = "sunset" | "violet" | "pink";

const ACCENT_MAP: Record<
    Accent,
    { icon: string; iconBg: string; iconBorder: string; hoverShadow: string }
> = {
    sunset: {
        icon: "text-sunset",
        iconBg: "bg-sunset/10",
        iconBorder: "border-sunset/20",
        hoverShadow: "group-hover:shadow-[0_0_80px_-20px_var(--color-sunset)]",
    },
    violet: {
        icon: "text-violet",
        iconBg: "bg-violet/10",
        iconBorder: "border-violet/20",
        hoverShadow: "group-hover:shadow-[0_0_80px_-20px_var(--color-violet)]",
    },
    pink: {
        icon: "text-neon-pink",
        iconBg: "bg-neon-pink/10",
        iconBorder: "border-neon-pink/20",
        hoverShadow: "group-hover:shadow-[0_0_80px_-20px_var(--color-neon-pink)]",
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
    visual?: ReactNode;
}

export function BentoCard({
    className,
    icon,
    title,
    description,
    delay = 0,
    accent = "violet",
    dominant = false,
    visual,
}: BentoCardProps) {
    const a = ACCENT_MAP[accent];

    return (
        <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: EASE_CINEMATIC, delay }}
            whileHover={{ y: -4 }}
            className={`group relative flex flex-col overflow-hidden rounded-3xl border border-ethereal/10 bg-linear-to-b from-ethereal/6 to-transparent p-5 shadow-[inset_0_1px_0_0_rgba(248,248,248,0.08)] transition-all duration-500 hover:border-ethereal/20 ${a.hoverShadow} ${className ?? ""}`}
        >
            {visual && (
                <VisualFrame className={dominant ? "min-h-[220px] flex-1" : "h-44 md:h-48"}>
                    {visual}
                </VisualFrame>
            )}

            <div className={`flex flex-col gap-2 ${visual ? "mt-5" : ""}`}>
                <div className="flex items-center gap-3">
                    {icon && (
                        <div
                            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border ${a.iconBg} ${a.iconBorder} ${a.icon}`}
                        >
                            {icon}
                        </div>
                    )}
                    <h3 className="font-serif text-xl italic text-ethereal md:text-2xl">
                        {title}
                    </h3>
                    {dominant && (
                        <span className="ml-auto inline-flex shrink-0 items-center gap-2 rounded-full border border-ethereal/15 bg-ethereal/5 px-3 py-1">
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
                <p className="text-sm leading-relaxed font-light text-ethereal/55">
                    {description}
                </p>
            </div>
        </motion.div>
    );
}