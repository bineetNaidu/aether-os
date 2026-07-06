"use client";

import { useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  AnimatePresence,
} from "framer-motion";
import { Menu, X } from "lucide-react";
import { MagneticButton } from "@/components/magnetic-button";
import { EASE_CINEMATIC } from "@/lib/motion";

const NAV_LINKS = [
  { label: "Product", href: "#" },
  { label: "Pricing", href: "#pricing" },
  { label: "Docs", href: "#" },
];

export function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    const diff = latest - previous;

    // Only react to meaningful scroll deltas, ignore rubber-band jitter
    if (Math.abs(diff) > 4) {
      setHidden(diff > 0 && latest > 120);
    }

    setScrolled(latest > 40);
  });

  return (
    <motion.header
      animate={{ y: hidden ? "-100%" : "0%" }}
      transition={{ duration: 0.6, ease: EASE_CINEMATIC }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-500 md:px-10 ${
          scrolled
            ? "mt-4 rounded-full border border-ethereal/10 bg-obsidian/50 py-3 backdrop-blur-xl md:mx-6"
            : "mt-0 border-transparent bg-transparent py-6"
        }`}
      >
        <a href="#" className="font-serif text-xl italic text-ethereal">
          Aether<span className="gradient-mesh-text">OS</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-ethereal/70 transition-colors duration-300 hover:text-ethereal"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <MagneticButton
            strength={0.3}
            className="border border-ethereal/20 bg-ethereal/5 px-6 py-2.5 text-sm text-ethereal backdrop-blur-md"
          >
            Request Access
          </MagneticButton>
        </div>

        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="text-ethereal md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: EASE_CINEMATIC }}
            className="mx-4 mt-2 flex flex-col gap-4 rounded-3xl border border-ethereal/10 bg-obsidian/80 p-8 backdrop-blur-xl md:hidden"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-lg text-ethereal/80"
              >
                {link.label}
              </a>
            ))}
            <MagneticButton
              strength={0.3}
              className="mt-2 w-full border border-ethereal/20 bg-ethereal/5 py-3 text-sm text-ethereal backdrop-blur-md"
            >
              Request Access
            </MagneticButton>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}