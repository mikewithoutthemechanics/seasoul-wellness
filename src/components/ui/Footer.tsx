"use client";

import { Anchor, Heart, Mail, Phone, Globe, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative border-t border-white/[0.04]"
      style={{ background: "var(--bg-deep)" }}
    >
      {/* Top glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-20">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-400/20 to-blue-600/20 border border-cyan-400/20 flex items-center justify-center">
                <Anchor className="w-5 h-5 text-cyan-400" />
                <div className="absolute inset-0 rounded-xl bg-cyan-400/5 animate-pulse" />
              </div>
              <span className="text-xl font-bold text-white">
                SeaSoul<span className="text-gradient-cyan font-extrabold">Wellness</span>
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-md mb-6">
              Dedicated mental health and psychology support for yacht crew members worldwide. Because wellbeing at sea begins with care on shore.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="group flex items-center gap-2 text-sm text-slate-500 hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>support@seasoulwellness.com</span>
              </a>
              <a
                href="#"
                className="group flex items-center gap-2 text-sm text-slate-500 hover:text-cyan-400 transition-colors"
              >
                <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>+1 (800) SEA-HELP</span>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Individual Therapy", href: "#services" },
                { name: "Crew Counseling", href: "#services" },
                { name: "Meditation Sessions", href: "#meditation" },
                { name: "Crisis Support", href: "#crisis" },
                { name: "Career Navigation", href: "#services" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-500 hover:text-cyan-400 transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
              Resources
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Therapy Sessions", href: "#services" },
                { name: "Guided Meditation", href: "#meditation" },
                { name: "Crisis Hotline", href: "#crisis" },
                { name: "Self-Help Library", href: "#community" },
                { name: "Global Network", href: "#crisis" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-500 hover:text-cyan-400 transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.04] py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600">
            © {currentYear} SeaSoul Wellness. All rights reserved.
          </p>
          <p className="text-xs text-slate-600 flex items-center gap-1.5">
            Made with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> for seafarers
          </p>
          <p className="text-xs text-slate-600">
            Licensed & Confidential
          </p>
        </div>
      </div>
    </footer>
  );
}