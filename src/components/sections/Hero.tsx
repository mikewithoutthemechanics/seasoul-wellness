"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import VideoBackground from "@/components/effects/VideoBackground";

export default function Hero() {
  const labelRef = useRef<HTMLParagraphElement>(null);
  const titleLine1Ref = useRef<HTMLSpanElement>(null);
  const titleLine2Ref = useRef<HTMLSpanElement>(null);
  const bodyRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const metaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    tl.fromTo(labelRef.current, { opacity: 0, x: -30 }, { opacity: 1, x: 0, duration: 1 })
      .fromTo(titleLine1Ref.current, { opacity: 0, clipPath: "inset(0 100% 0 0)" }, { opacity: 1, clipPath: "inset(0 0% 0 0)", duration: 1.4 }, "-=0.6")
      .fromTo(titleLine2Ref.current, { opacity: 0, clipPath: "inset(0 100% 0 0)" }, { opacity: 1, clipPath: "inset(0 0% 0 0)", duration: 1.4 }, "-=1")
      .fromTo(bodyRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1 }, "-=0.8")
      .fromTo(ctaRef.current, { opacity: 0 }, { opacity: 1, duration: 0.8 }, "-=0.5")
      .fromTo(metaRef.current, { opacity: 0 }, { opacity: 1, duration: 0.8 }, "-=0.4");

    return () => { tl.kill(); };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-end overflow-hidden bg-stone-950 pb-24 md:pb-32"
    >
      <VideoBackground />

      <div className="absolute inset-0 bg-gradient-to-b from-stone-950/20 via-transparent to-stone-950 z-10 pointer-events-none" />

      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          {/* Left column - massive serif headline */}
          <div className="lg:col-span-7">
            <p
              ref={labelRef}
              className="text-[10px] uppercase tracking-[0.4em] text-stone-500 mb-8 font-mono"
            >
              Professional Mental Health for Yacht Crew
            </p>

            <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light text-stone-100 leading-[0.9] tracking-tight">
              <span ref={titleLine1Ref} className="block" style={{ willChange: "clip-path" }}>
                Find Your
              </span>
              <span ref={titleLine2Ref} className="block italic text-stone-300 mt-2" style={{ willChange: "clip-path" }}>
                Inner Harbor
              </span>
            </h1>
          </div>

          {/* Right column - tiny body copy + CTA */}
          <div className="lg:col-span-5 lg:pl-12">
            <p
              ref={bodyRef}
              className="text-sm text-stone-400 leading-relaxed max-w-sm mb-10"
            >
              Specialized psychology and therapy services designed for the unique
              challenges of life at sea. Your mental wellbeing is our compass.
            </p>

            <div ref={ctaRef} className="flex flex-col sm:flex-row items-start gap-4">
              <a
                href="#services"
                data-cursor-hover
                className="px-8 py-3 bg-stone-100 text-stone-950 text-xs uppercase tracking-widest hover:bg-stone-200 transition-colors"
              >
                Explore Services
              </a>
              <a
                href="#crisis"
                data-cursor-hover
                className="px-8 py-3 border border-stone-700 text-stone-300 text-xs uppercase tracking-widest hover:border-stone-500 hover:text-stone-100 transition-colors"
              >
                Crisis Support
              </a>
            </div>
          </div>
        </div>

        {/* Bottom metadata */}
        <div
          ref={metaRef}
          className="mt-20 flex items-end justify-between border-t border-stone-800/50 pt-6"
        >
          <div className="flex items-center gap-8">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-stone-600 mb-1">Based</p>
              <p className="text-xs text-stone-400">Mediterranean</p>
            </div>
            <div className="w-px h-8 bg-stone-800" />
            <div>
              <p className="text-[10px] uppercase tracking-widest text-stone-600 mb-1">Coverage</p>
              <p className="text-xs text-stone-400">Global</p>
            </div>
          </div>
          <div className="hidden md:block text-right">
            <p className="text-[10px] uppercase tracking-widest text-stone-600 mb-1">Scroll</p>
            <div className="w-px h-8 bg-stone-700 mx-auto mt-2" />
          </div>
        </div>
      </div>
    </section>
  );
}
