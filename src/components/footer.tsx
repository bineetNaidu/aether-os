"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { EASE_CINEMATIC } from "@/lib/motion";

const FOOTER_COLUMNS = [
  {
    heading: "Product",
    links: ["Overview", "Pricing", "Changelog", "Roadmap"],
  },
  {
    heading: "Company",
    links: ["About", "Careers", "Press", "Contact"],
  },
  {
    heading: "Resources",
    links: ["Docs", "API Reference", "Community", "Status"],
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-ethereal/10 bg-obsidian px-8 pt-24 pb-10 md:px-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-20">
        {/* Top: big CTA line */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1, ease: EASE_CINEMATIC }}
          className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end"
        >
          <h2 className="max-w-xl font-serif text-4xl italic md:text-5xl">
            Ready to dissolve the interface?
          </h2>
          <a
            href="#"
            className="group flex items-center gap-2 text-lg text-ethereal/80 transition-colors duration-300 hover:text-ethereal"
          >
            <span className="border-b border-ethereal/30 pb-1 group-hover:border-ethereal/80">
              Request early access
            </span>
            <ArrowUpRight
              size={20}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </motion.div>

        {/* Middle: link columns */}
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <span className="font-serif text-2xl italic">
              Aether<span className="gradient-mesh-text">OS</span>
            </span>
            <p className="mt-4 max-w-[220px] text-sm font-light text-ethereal/50">
              The operating system for thought. Ambient, private, everywhere.
            </p>
          </div>

          {FOOTER_COLUMNS.map((col) => (
            <div key={col.heading} className="flex flex-col gap-3">
              <span className="text-xs tracking-[0.2em] text-ethereal/40 uppercase">
                {col.heading}
              </span>
              {col.links.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="w-fit text-sm text-ethereal/60 transition-colors duration-300 hover:text-ethereal"
                >
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom: legal row */}
        <div className="flex flex-col items-start justify-between gap-4 border-t border-ethereal/10 pt-8 text-xs text-ethereal/40 md:flex-row md:items-center">
          <span>&copy; {new Date().getFullYear()} AetherOS. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="transition-colors duration-300 hover:text-ethereal/70">
              Privacy
            </a>
            <a href="#" className="transition-colors duration-300 hover:text-ethereal/70">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}