"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { MessageCircle, Star, MapPin, Anchor, Sparkles, Trophy, Heart } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "Sarah M.",
    role: "Chief Stewardess",
    location: "Mediterranean",
    text: "After a difficult season, the therapy sessions here gave me tools I actually use onboard every day. The maritime-specific approach makes all the difference — I finally feel understood.",
    rating: 5,
    avatar: "SM",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    name: "James K.",
    role: "First Officer",
    location: "Caribbean",
    text: "The night shift meditation has been a game changer. I finally sleep well between watches. Highly recommend for anyone on rotation — it's like having a therapist in your pocket.",
    rating: 5,
    avatar: "JK",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    name: "Elena R.",
    role: "Chef",
    location: "South Pacific",
    text: "Being away from family for months is hard. The relationship counseling helped me and my partner stay connected across oceans. I don't know how I'd cope without this support.",
    rating: 5,
    avatar: "ER",
    gradient: "from-amber-500 to-orange-600",
  },
];

const stats = [
  { value: "2,400+", label: "Crew Members", suffix: "" },
  { value: "98%", label: "Satisfaction", suffix: "" },
  { value: "24/7", label: "Crisis Support", suffix: "" },
  { value: "15+", label: "Licensed Therapists", suffix: "" },
];

export default function Community() {
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".stat-item",
        { opacity: 0, y: 20, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "back.out(1.4)",
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
    <section
      id="community"
      className="relative py-32 overflow-hidden"
      style={{ background: "var(--bg-surface)" }}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] rounded-full bg-cyan-400/[0.02] blur-[100px]" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] rounded-full bg-violet-400/[0.02] blur-[80px]" />
      </div>

      {/* Section divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-24">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] text-slate-300 text-sm font-medium border border-white/[0.08] backdrop-blur-sm">
            <Heart className="w-3.5 h-3.5 text-rose-400" />
            Trusted Worldwide
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-extralight text-white mt-6 mb-8 leading-[1.15]">
            Voices from the
            <br />
            <span className="text-gradient-cyan font-semibold">Fleet</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Hear directly from crew members whose lives have been transformed through specialized maritime mental health care.
          </p>
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-28"
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="stat-item text-center p-6 rounded-2xl glass-card"
            >
              <div className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-blue-500 mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-slate-500 tracking-wide uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="relative p-8 rounded-2xl glass-card group"
            >
              {/* Quote icon decoration */}
              <div className="absolute top-6 right-6 w-10 h-10 rounded-xl bg-white/[0.03] flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-slate-700" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-slate-300 leading-relaxed mb-8 text-lg relative z-10">
                <span className="text-4xl text-cyan-400/20 font-serif leading-none align-top mr-1">"</span>
                {t.text}
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 border-t border-white/[0.06] pt-6">
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${t.gradient} flex items-center justify-center text-white font-bold text-sm shrink-0 shadow-lg`}>
                  {t.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-white font-semibold text-sm">{t.name}</div>
                  <div className="text-slate-500 text-xs">{t.role}</div>
                </div>
                <div className="flex items-center gap-1.5 text-slate-600 text-xs shrink-0">
                  <MapPin className="w-3.5 h-3.5" />
                  {t.location}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm group cursor-pointer hover:bg-white/[0.06] transition-all duration-300">
            <div className="relative">
              <Anchor className="w-5 h-5 text-cyan-400" />
              <div className="absolute -inset-1 rounded-full bg-cyan-400/20 animate-ping" />
            </div>
            <span className="text-slate-300 text-sm">
              You are not alone — <span className="text-white font-semibold">2,400+ crew members</span> are part of this community
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}