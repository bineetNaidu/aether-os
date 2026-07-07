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
import Link from "next/link";

const NAV_LINKS = [
  { label: "Product", href: "#" },
  { label: "Pricing", href: "#pricing" },
  { label: "Docs", href: "#" },
];

const mobileMenuVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.08 } },
};

const mobileLinkVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: EASE_CINEMATIC } },
};

export function Navbar() {
  const { scrollY, scrollYProgress } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    const diff = latest - previous;

    if (Math.abs(diff) > 4) {
      setHidden(diff > 0 && latest > 120);
    }
    setScrolled(latest > 40);
  });

  return (
    <>
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed inset-x-0 top-0 z-60 h-[2px] origin-left bg-linear-to-r from-sunset via-neon-pink to-violet"
      />

      <motion.header
        animate={{ y: hidden ? "-120%" : "0%" }}
        transition={{ duration: 0.6, ease: EASE_CINEMATIC }}
        className="fixed inset-x-0 top-0 z-50 px-4 pt-4"
      >
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border px-6 backdrop-blur-2xl transition-all duration-500 md:px-8 ${
            scrolled
              ? "border-ethereal/15 bg-obsidian/80 py-3 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.5)]"
              : "border-ethereal/10 bg-obsidian/50 py-4"
          }`}
        >
          <Link
            href="#"
            className="group font-serif text-xl italic text-ethereal transition-transform duration-300 hover:scale-[1.03]"
          >
            Aether
            <span className="gradient-mesh-text transition-opacity duration-300 group-hover:opacity-80">
              OS
            </span>
          </Link>

          <nav
            onMouseLeave={() => setHoveredLink(null)}
            className="hidden items-center gap-1 md:flex"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onMouseEnter={() => setHoveredLink(link.label)}
                className="relative rounded-full px-4 py-2 text-sm text-ethereal/70 transition-colors duration-300 hover:text-ethereal"
              >
                {hoveredLink === link.label && (
                  <motion.span
                    layoutId="nav-hover-pill"
                    className="absolute inset-0 rounded-full bg-ethereal/10"
                    transition={{ duration: 0.3, ease: EASE_CINEMATIC }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <MagneticButton
              strength={0.3}
              className="group flex items-center gap-2.5 border border-ethereal/15 bg-obsidian px-6 py-2.5 text-sm text-ethereal"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neon-pink opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-neon-pink" />
              </span>
              <span>Request Access</span>
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
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="mx-4 mt-2 flex flex-col gap-1 rounded-3xl border border-ethereal/15 bg-obsidian/90 p-8 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.5)] backdrop-blur-2xl md:hidden"
            >
              {NAV_LINKS.map((link) => (
                <motion.a
                  key={link.label}
                  variants={mobileLinkVariants}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="border-b border-ethereal/5 py-3 text-lg text-ethereal/80 transition-colors duration-300 last:border-none hover:text-ethereal"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.div variants={mobileLinkVariants} className="mt-4">
                <MagneticButton
                  strength={0.3}
                  className="flex w-full items-center justify-center gap-2 border border-ethereal/15 bg-obsidian py-3 text-sm text-ethereal"
                >
                  Request Access
                </MagneticButton>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}