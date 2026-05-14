"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Anchor, Heart, Menu, X, Brain, Leaf } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { name: "Services", href: "#services" },
  { name: "Meditate", href: "#meditation" },
  { name: "Community", href: "#community" },
  { name: "Support", href: "#crisis" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    setScrolled(window.scrollY > 40);
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id || "home");
          }
        });
      },
      { threshold: 0.3, rootMargin: "-20% 0px -60% 0px" }
    );

    document.querySelectorAll("section[id]").forEach((section) => {
      observerRef.current?.observe(section);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#060a1f]/90 backdrop-blur-2xl border-b border-white/[0.06] shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-[64px]">
            <Link href="#home" className="flex items-center gap-3 group">
              <div
                className={`relative w-10 h-10 flex items-center justify-center rounded-xl overflow-hidden transition-all duration-500 ${
                  scrolled
                    ? "bg-gradient-to-br from-cyan-400/20 to-blue-600/20 border border-cyan-400/30"
                    : "bg-gradient-to-br from-cyan-400/30 to-blue-600/30"
                }`}
              >
                <Anchor className="w-5 h-5 text-white" />
                <div
                  className={`absolute inset-0 rounded-xl transition-opacity duration-500 ${
                    scrolled ? "opacity-0" : "bg-[radial-gradient(circle_at_30%_30%,rgba(34,211,238,0.2),transparent_60%)]"
                  }`}
                />
              </div>
              <span
                className={`text-lg font-semibold tracking-wide transition-all duration-300 ${
                  scrolled ? "text-white" : "text-white/90"
                }`}
              >
                SeaSoul<span className="text-gradient-cyan font-bold">Wellness</span>
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative text-sm font-medium transition-all duration-300 py-1 ${
                    activeSection === link.href.replace("#", "")
                      ? "text-cyan-400"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  {link.name}
                  {activeSection === link.href.replace("#", "") && (
                    <motion.span
                      layoutId="navIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full bg-gradient-to-r from-cyan-400 to-violet-400"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Link>
              ))}
              <Link
                href="#crisis"
                className="relative group px-5 py-2 rounded-full bg-gradient-to-r from-rose-500 to-orange-500 text-white text-sm font-semibold hover:shadow-lg hover:shadow-rose-500/30 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
              >
                <span className="flex items-center gap-2">
                  <Heart className="w-4 h-4" />
                  Get Help
                </span>
              </Link>
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg text-white hover:bg-white/[0.08] transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden overflow-hidden"
            >
              <div className="px-6 py-6 space-y-2 bg-[#060a1f]/95 backdrop-blur-3xl border-b border-white/[0.04]">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      activeSection === link.href.replace("#", "")
                        ? "bg-white/[0.06] text-cyan-400"
                        : "text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link
                  href="#crisis"
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 rounded-xl text-sm font-semibold text-center bg-gradient-to-r from-rose-500/20 to-orange-500/20 text-rose-400 border border-rose-500/20"
                >
                  <Heart className="w-4 h-4 inline mr-2" />
                  Get Help
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}