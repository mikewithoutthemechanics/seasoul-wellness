"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import LiveAvailability from "./LiveAvailability";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Pricing", href: "#pricing" },
  { name: "Locations", href: "#location-finder" },
  { name: "Crisis Support", href: "#crisis" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-stone-950/90 backdrop-blur-xl border-b border-stone-800/40"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="#home" className="group">
            <span className="font-serif text-xl font-light tracking-wide text-stone-100">
              SeaSoul<span className="text-stone-500 italic">Wellness</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <LiveAvailability />
            <div className="w-px h-6 bg-stone-800" />
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                data-cursor-hover
                className="text-[10px] uppercase tracking-[0.2em] text-stone-500 hover:text-stone-200 transition-colors duration-500"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#crisis"
              data-cursor-hover
              className="px-5 py-2 border border-stone-700 text-stone-400 text-[10px] uppercase tracking-[0.2em] hover:border-stone-500 hover:text-stone-200 transition-colors duration-500"
            >
              Get Help
            </Link>
          </div>

          <button
            data-cursor-hover
            className="md:hidden text-stone-300 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span className="text-[10px] uppercase tracking-[0.2em]">
              {mobileOpen ? "Close" : "Menu"}
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-stone-950/95 backdrop-blur-xl border-b border-stone-800/40"
          >
            <div className="px-6 py-10 flex flex-col gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-[10px] uppercase tracking-[0.2em] text-stone-500 hover:text-stone-200 transition-colors py-2"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
