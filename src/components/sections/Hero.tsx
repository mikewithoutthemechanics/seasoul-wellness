"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import OceanScene from "@/components/3d/OceanScene";

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1.2 }
    )
      .fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1 },
        "-=0.6"
      )
      .fromTo(
        ctaRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 },
        "-=0.5"
      );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950"
    >
      <OceanScene />

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/30 via-transparent to-slate-950 z-10 pointer-events-none" />

      <div className="relative z-20 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-12"
        >
          <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-slate-400">
            Professional Mental Health for Yacht Crew
          </p>
        </motion.div>

        <h1
          ref={titleRef}
          className="text-5xl md:text-7xl lg:text-8xl font-light text-white leading-[1.1] mb-8 tracking-tight"
        >
          Find Your
          <span className="block font-normal text-slate-200 mt-2">
            Inner Harbor
          </span>
        </h1>

        <p
          ref={subtitleRef}
          className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto mb-16 leading-relaxed font-light"
        >
          Specialized psychology and therapy services designed for the unique challenges 
          of life at sea. Your mental wellbeing is our compass.
        </p>

        <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <motion.a
            href="#services"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
            className="px-10 py-4 bg-white text-slate-950 text-sm tracking-wide hover:bg-slate-100 transition-colors"
          >
            Explore Services
          </motion.a>
          <motion.a
            href="#crisis"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
            className="px-10 py-4 border border-slate-700 text-slate-300 text-sm tracking-wide hover:border-slate-500 hover:text-white transition-colors"
          >
            Crisis Support
          </motion.a>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-slate-600 to-transparent" />
      </motion.div>
    </section>
  );
}
