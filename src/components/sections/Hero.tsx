"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronDown, Heart, Brain, Waves, Sparkles, ArrowDown } from "lucide-react";
import OceanScene from "@/components/3d/OceanScene";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      badgeRef.current,
      { opacity: 0, y: 30, scale: 0.8 },
      { opacity: 1, y: 0, scale: 1, duration: 0.8, delay: 0.3 }
    )
      .fromTo(
        titleRef.current,
        { opacity: 0, y: 60, rotateX: 30 },
        { opacity: 1, y: 0, rotateX: 0, duration: 1.2 },
        "-=0.4"
      )
      .fromTo(
        titleRef.current!.querySelectorAll(".gradient-text span"),
        { backgroundSize: "0% 100%" },
        { backgroundSize: "100% 100%", duration: 1.8, stagger: 0.1, ease: "power2.out" },
        "-=0.6"
      )
      .fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1 },
        "-=0.5"
      )
      .fromTo(
        ctaRef.current!.children,
        { opacity: 0, y: 25, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8, stagger: 0.15, ease: "power2.out" },
        "-=0.4"
      );

    return () => { tl.kill(); };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: "var(--gradient-hero)",
      }}
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-[2px] h-[2px] rounded-full bg-cyan-400/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${4 + Math.random() * 6}s ease-in-out ${Math.random() * 3}s infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Ocean 3D scene */}
      <div className="absolute inset-0 z-0">
        <OceanScene />
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#060a1f]/40 via-[#060a1f]/20 to-[#060a1f]" />
      <div className="absolute inset-0 z-10" style={{ background: "radial-gradient(ellipse at 50% 30%, rgba(34,211,238,0.06) 0%, transparent 60%)" }} />

      {/* Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          ref={badgeRef}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-sm font-medium text-slate-300 mb-10 backdrop-blur-sm"
        >
          <Brain className="w-4 h-4 text-cyan-400" />
          <span className="text-gradient-cyan font-semibold">Trusted by 2,400+ Crew Members</span>
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/60 animate-pulse" />
          <span className="sr-only">Active</span>
        </motion.div>

        {/* Main heading */}
        <h1
          ref={titleRef}
          className="text-5xl md:text-7xl lg:text-8xl font-extralight text-white leading-[1.1] tracking-tight mb-8"
          style={{ perspective: "1200px" }}
        >
          <span className="gradient-text inline-block bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent bg-[length:200%_100%] bg-left">
            Find Your
          </span>
          <br />
          <span className="gradient-text inline-block bg-gradient-to-r from-cyan-300 via-blue-300 to-cyan-200 bg-clip-text text-transparent bg-[length:200%_100%] bg-right">
            Inner Harbor
          </span>
        </h1>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-12 font-light"
        >
          Specialized psychology & therapy crafted for the unique rhythms of life at sea.
          Your mental wellbeing is our compass.
        </p>

        {/* CTA buttons */}
        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#services"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="shine-button group relative px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-sm shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 overflow-hidden"
          >
            <span className="relative flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Explore Services
            </span>
          </motion.a>

          <motion.a
            href="#crisis"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="group relative px-8 py-4 rounded-2xl border border-slate-700 text-slate-300 font-semibold text-sm hover:border-rose-500/50 hover:text-rose-400 transition-all duration-300 bg-white/[0.02]"
          >
            <span className="relative flex items-center gap-2">
              <Heart className="w-4 h-4 group-hover:animate-pulse" />
              Crisis Support
            </span>
          </motion.a>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ArrowDown className="w-5 h-5 text-slate-600" />
          </motion.div>
        </motion.div>
      </div>

      {/* Ambient corner decorations */}
      <div className="absolute top-20 left-20 w-[300px] h-[300px] rounded-full bg-cyan-400/[0.015] blur-[80px] pointer-events-none z-0" />
      <div className="absolute bottom-20 right-20 w-[400px] h-[400px] rounded-full bg-violet-500/[0.015] blur-[100px] pointer-events-none z-0" />
    </section>
  );
}