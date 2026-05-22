"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "Sarah M.",
    role: "Chief Stewardess",
    location: "Mediterranean",
    text: "After a difficult season, the therapy sessions here gave me tools I actually use onboard. The maritime-specific approach makes all the difference.",
  },
  {
    name: "James K.",
    role: "First Officer",
    location: "Caribbean",
    text: "The night shift meditation has been a game changer. I finally sleep well between watches. Highly recommend for anyone on rotation.",
  },
  {
    name: "Elena R.",
    role: "Chef",
    location: "South Pacific",
    text: "Being away from family for months is hard. The relationship counseling helped me and my partner stay connected across oceans.",
  },
];

const stats = [
  { value: "2,400+", label: "Crew Members Helped" },
  { value: "98%", label: "Satisfaction Rate" },
  { value: "24/7", label: "Crisis Support" },
  { value: "15+", label: "Licensed Therapists" },
];

export default function Community() {
  const statsRef = useRef<HTMLDivElement>(null);
  const quotesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".stat-number",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 85%",
          },
        }
      );

      const quotes = quotesRef.current?.children;
      if (quotes) {
        gsap.fromTo(
          quotes,
          { opacity: 0, y: 40, skewY: 1 },
          {
            opacity: 1,
            y: 0,
            skewY: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: quotesRef.current,
              start: "top 80%",
            },
          }
        );
      }
    });
    return () => ctx.revert();
  }, []);

  return (
    <section id="community" className="relative py-32 md:py-40 bg-stone-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Asymmetric header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-32">
          <div className="lg:col-span-6">
            <p className="text-[10px] uppercase tracking-[0.4em] text-stone-600 mb-6 font-mono">
              Community
            </p>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-stone-100 leading-[0.95]">
              Voices from
              <span className="italic text-stone-400 block mt-2">the Fleet</span>
            </h2>
          </div>
        </div>

        {/* Stats - asymmetric, not centered */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-40 border-t border-stone-800/50 pt-12"
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="stat-number font-serif text-4xl md:text-5xl lg:text-6xl font-light text-stone-200 mb-3">
                {stat.value}
              </div>
              <div className="text-stone-600 text-[10px] uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials - magazine pull-quote style, staggered */}
        <div ref={quotesRef} className="space-y-24">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-end ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
            >
              <div className={`lg:col-span-7 ${i % 2 === 1 ? "lg:col-start-6" : ""}`}>
                <p className="font-serif text-2xl md:text-3xl lg:text-4xl font-light text-stone-300 leading-[1.3] pull-quote mb-10">
                  &ldquo;{t.text}&rdquo;
                </p>

                <div className="flex items-center gap-6">
                  <div className="w-12 h-px bg-stone-700" />
                  <div>
                    <div className="text-stone-300 text-sm font-medium">{t.name}</div>
                    <div className="text-stone-600 text-xs">{t.role}</div>
                  </div>
                  <div className="ml-auto text-stone-700 text-[10px] uppercase tracking-widest font-mono">
                    {t.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
