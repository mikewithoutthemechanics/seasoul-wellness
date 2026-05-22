"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

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

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".stat-number",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 80%",
          },
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section id="community" className="relative py-32 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-24">
          <p className="text-xs tracking-[0.3em] uppercase text-slate-500 mb-6">
            Community
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            Voices from the Fleet
          </h2>
        </div>

        <div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-32"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="stat-number text-4xl md:text-5xl font-light text-white mb-2">
                {stat.value}
              </div>
              <div className="text-slate-500 text-xs uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative p-8 border border-slate-800 hover:border-slate-600 transition-colors duration-500"
            >
              <p className="text-slate-300 leading-relaxed mb-8 font-light">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="flex items-center justify-between">
                <div>
                  <div className="text-white font-medium mb-1">{t.name}</div>
                  <div className="text-slate-500 text-sm">{t.role}</div>
                </div>
                <div className="text-slate-600 text-xs uppercase tracking-wider">
                  {t.location}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
