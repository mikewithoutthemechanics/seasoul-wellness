"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import {
  Play,
  Pause,
  Wind,
  Moon,
  Sun,
  Sparkles,
  Brain,
  Eye,
  HeartPulse,
  Stars,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const meditations = [
  {
    title: "Ocean Breathing",
    duration: "5 min",
    icon: Wind,
    description:
      "Sync your breath with the rhythm of the waves. Deep diaphragmatic breathing guided by ocean visuals to activate your parasympathetic nervous system.",
    gradient: "from-cyan-500 to-blue-500",
    border: "border-cyan-500/20 hover:border-cyan-400/40",
    shadow: "shadow-cyan-500/10 hover:shadow-cyan-500/25",
    badge: "Breathwork",
  },
  {
    title: "Night Watch Calm",
    duration: "10 min",
    icon: Moon,
    description:
      "Find peace during irregular hours and night shifts. Melatonin-friendly audio with binaural beats designed for circadian rhythm support.",
    gradient: "from-indigo-500 to-violet-600",
    border: "border-indigo-500/20 hover:border-indigo-400/40",
    shadow: "shadow-indigo-500/10 hover:shadow-indigo-500/25",
    badge: "Sleep Support",
  },
  {
    title: "Morning Deck Reset",
    duration: "7 min",
    icon: Sun,
    description:
      "Start your watch with clarity and positive intention. Energizing visualization combined with movement-based mindfulness for confined spaces.",
    gradient: "from-amber-500 to-orange-500",
    border: "border-amber-500/20 hover:border-amber-400/40",
    shadow: "shadow-amber-500/10 hover:shadow-amber-500/25",
    badge: "Energy Boost",
  },
  {
    title: "Inner Compass",
    duration: "15 min",
    icon: Sparkles,
    description:
      "Deep guided visualization to reconnect with purpose and direction. Journey inward through calm waters toward your personal north star.",
    gradient: "from-emerald-500 to-teal-500",
    border: "border-emerald-500/20 hover:border-emerald-400/40",
    shadow: "shadow-emerald-500/10 hover:shadow-emerald-500/25",
    badge: "Deep Practice",
  },
  {
    title: "Body Scan Release",
    duration: "12 min",
    icon: Brain,
    description:
      "Progressive muscle relaxation adapted for crew in confined quarters. Release tension from helm duty, hauling, and physical labor.",
    gradient: "from-rose-500 to-pink-500",
    border: "border-rose-500/20 hover:border-rose-400/40",
    shadow: "shadow-rose-500/10 hover:shadow-rose-500/25",
    badge: "Tension Relief",
  },
  {
    title: "Port Arrival Ease",
    duration: "8 min",
    icon: Eye,
    description:
      "Grounding techniques for the sensory overload of port arrival. Ease the transition from open water to bustling environments.",
    gradient: "from-violet-500 to-purple-500",
    border: "border-violet-500/20 hover:border-violet-400/40",
    shadow: "shadow-violet-500/10 hover:shadow-violet-500/25",
    badge: "Transition",
  },
];

function MeditationCard({ item, index, isPlaying, onPlay }: {
  item: (typeof meditations)[0];
  index: number;
  isPlaying: boolean;
  onPlay: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.08 }}
      viewport={{ once: true }}
      className={`group relative p-6 rounded-2xl glass-card overflow-hidden ${item.border} ${item.shadow} transition-all duration-500`}
    >
      {/* Badge */}
      <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-semibold bg-white/[0.04] text-slate-500 border border-white/[0.06] mb-5">
        {item.badge}
      </span>

      {/* Icon */}
      <div
        className={`relative w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-500`}
      >
        <item.icon className="w-5 h-5 text-white" />
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.15), transparent 60%)` }} />
      </div>

      {/* Duration pill */}
      <div className="inline-block px-2.5 py-0.5 rounded-full bg-white/[0.03] text-[11px] text-slate-500 mb-3">
        {item.duration}
      </div>

      {/* Title */}
      <h3 className="text-base font-semibold text-white mb-2 group-hover:text-gradient-cyan transition-all duration-300">
        {item.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-slate-400 leading-relaxed mb-6 line-clamp-3">
        {item.description}
      </p>

      {/* Play button */}
      <button
        onClick={onPlay}
        className={`w-full flex items-center justify-center gap-2.5 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
          isPlaying
            ? "bg-slate-800/50 text-slate-300 border border-slate-700/50"
            : `bg-gradient-to-r ${item.gradient} text-white shadow-lg shadow-black/20 hover:shadow-xl`
        }`}
      >
        {isPlaying ? (
          <>
            <Pause className="w-4 h-4" />
            Playing...
          </>
        ) : (
          <>
            <Play className="w-4 h-4" />
            Start Session
          </>
        )}
      </button>

      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </motion.div>
  );
}

export default function Meditation() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".meditation-header",
        { opacity: 0, y: 50, filter: "blur(8px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );

      gsap.fromTo(
        ".meditation-card-stagger",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
    });
    return () => ctx.revert();
  }, []);

  // Orrery visualization
  const planets = [
    { size: 14, color: "bg-cyan-400/30", orbit: 120, speed: 120, top: "50%", left: "50%" },
    { size: 10, color: "bg-indigo-400/30", orbit: 160, speed: 180, top: "50%", left: "50%" },
    { size: 8, color: "bg-amber-400/20", orbit: 200, speed: 240, top: "50%", left: "50%" },
    { size: 6, color: "bg-rose-400/20", orbit: 250, speed: 320, top: "50%", left: "50%" },
  ];

  return (
    <section
      id="meditation"
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
      style={{ background: "var(--bg-surface)" }}
    >
      {/* Decorative orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-cyan-400/[0.02] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-violet-500/[0.02] blur-[100px] pointer-events-none" />

      {/* Section divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-violet-400/20 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="meditation-header text-center mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/[0.06] text-indigo-400 text-sm font-medium border border-indigo-500/15 backdrop-blur-sm">
            <Stars className="w-3.5 h-3.5" />
            Guided Practice
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-extralight text-white mt-6 mb-8 leading-[1.15]">
            Meditations for
            <br />
            <span className="text-gradient-warm font-semibold">Maritime Life</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Audio-guided sessions designed for the unique rhythms of yacht life.
            From night watch anxiety to morning clarity, find your calm.
          </p>
        </div>

        {/* Orrery visualization */}
        <div
          ref={visualRef}
          className="relative w-64 h-64 mx-auto mb-20 lg:mb-24"
        >
          {/* Center */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 shadow-lg shadow-cyan-500/30 animate-pulse" />

          {/* Orbits */}
          {planets.map((p, i) => (
            <div
              key={i}
              className="absolute"
              style={{
                top: p.top,
                left: p.left,
                width: p.orbit * 2,
                height: p.orbit * 2,
                marginLeft: -p.orbit,
                marginTop: -p.orbit,
              }}
            >
              <div
                className="absolute w-[2px] h-[2px] rounded-full"
                style={{
                  background: p.color,
                  boxShadow: `0 0 6px ${p.color}`,
                  animation: `orbit ${p.speed}s linear infinite`,
                }}
                // Position on orbit
              />
              <style>{`
                @keyframes orbit {
                  from { transform: rotate(0deg) translateX(${p.orbit}px) rotate(0deg); }
                  to { transform: rotate(360deg) translateX(${p.orbit}px) rotate(-360deg); }
                }
              `}</style>
            </div>
          ))}
        </div>

        {/* Card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {meditations.map((item, index) => (
            <div key={item.title} className="meditation-card-stagger">
              <MeditationCard
                item={item}
                index={index}
                isPlaying={activeIndex === index}
                onPlay={() => setActiveIndex(activeIndex === index ? null : index)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}