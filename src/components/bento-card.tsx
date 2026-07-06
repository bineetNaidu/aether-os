"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { EASE_CINEMATIC } from "@/lib/motion";

interface BentoCardProps {
    className?: string;
    icon?: ReactNode;
    title: string;
    description: string;
    delay?: number;
    glow?: boolean;
    children?: ReactNode;
}

export function BentoCard({
    className,
    icon,
    title,
    description,
    delay = 0,
    glow = false,
    children,
}: BentoCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: EASE_CINEMATIC, delay }}
            whileHover={{ y: -4 }}
      className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-ethereal/10 bg-ethereal/[0.03] p-8 backdrop-blur-sm transition-colors duration-500 hover:bg-ethereal/[0.06]${className ? ` ${className}` : ""}`}
        >
            {glow && (
                <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-violet/30 opacity-0 blur-[100px] transition-opacity duration-700 group-hover:opacity-100" />
            )}

            <div className="relative z-10 flex flex-col gap-4">
                {icon && (
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-ethereal/10 bg-ethereal/5 text-ethereal/80">
                        {icon}
                    </div>
                )}
                <h3 className="font-serif text-2xl italic text-ethereal">{title}</h3>
                <p className="max-w-sm text-sm leading-relaxed font-light text-ethereal/60">
                    {description}
                </p>
            </div>

            {children && <div className="relative z-10 mt-6">{children}</div>}
        </motion.div>
    );
}