"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { MagneticButton } from "@/components/magnetic-button";
import { GradientMesh } from "@/components/gradient-mesh";
import { EASE_CINEMATIC } from "@/lib/motion";
import Link from "next/link";

const FOOTER_COLUMNS = [
  { heading: "Product", links: ["Overview", "Pricing", "Changelog", "Roadmap"] },
  { heading: "Company", links: ["About", "Careers", "Press", "Contact"] },
  { heading: "Resources", links: ["Docs", "API Reference", "Community", "Status"] },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-obsidian px-8 pt-32 pb-10 md:px-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-24">
        {/* CTA panel */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.1, ease: EASE_CINEMATIC }}
          className="relative flex flex-col items-start gap-10 overflow-hidden rounded-4xl border border-ethereal/10 p-10 md:flex-row md:items-center md:justify-between md:p-16"
        >
          <GradientMesh />
          <h2 className="relative z-10 max-w-xl font-serif text-4xl italic md:text-5xl">
            Ready to dissolve the interface?
          </h2>
          <div className="relative z-10">
            <MagneticButton
              strength={0.3}
              className="group flex items-center gap-2 bg-ethereal px-8 py-4 text-obsidian"
            >
              <span>Request early access</span>
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </MagneticButton>
          </div>
        </motion.div>

        {/* Link columns */}
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
                <Link
                  key={link}
                  href="#"
                  className="group flex w-fit items-center gap-1.5 text-sm text-ethereal/60 transition-colors duration-300 hover:text-ethereal"
                >
                  <span className="relative">
                    {link}
                    <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-ethereal transition-all duration-300 group-hover:w-full" />
                  </span>
                </Link>
              ))}
            </div>
          ))}
        </div>

        {/* Legal row */}
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

      {/* Ghost wordmark, bleeding off the bottom edge */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-6vw] left-1/2 w-full -translate-x-1/2 text-center font-serif text-[16vw] leading-none whitespace-nowrap text-transparent italic select-none"
        style={{ WebkitTextStroke: "1px rgba(248,248,248,0.06)" }}
      >
        AetherOS
      </div>
    </footer>
  );
}