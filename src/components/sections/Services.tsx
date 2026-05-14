"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Brain,
  HeartHandshake,
  Compass,
  Sun,
  Shield,
  Sparkles,
  Target,
  Zap,
  ArrowDown,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Brain,
    title: "Individual Therapy",
    description:
      "One-on-one sessions with licensed maritime psychologists who deeply understand the isolation, shift patterns, and unique pressures of yacht crew life.",
    gradient: "from-cyan-500 to-blue-600",
    glow: "shadow-cyan-500/20",
    tag: "Personalized",
  },
  {
    icon: HeartHandshake,
    title: "Crew Counseling",
    description:
      "Group sessions building team cohesion, resolving onboard conflicts, and fostering a culture of mutual support among crew members.",
    gradient: "from-emerald-500 to-teal-600",
    glow: "shadow-emerald-500/20",
    tag: "Team-Based",
  },
  {
    icon: Compass,
    title: "Career Navigation",
    description:
      "Guidance for career transitions, burnout recovery, and building sustainable rhythms between demanding rotations and shore life.",
    gradient: "from-violet-500 to-purple-600",
    glow: "shadow-violet-500/20",
    tag: "Career Focus",
  },
  {
    icon: Sun,
    title: "Wellness Programs",
    description:
      "Holistic plans including sleep optimization for shift workers, nutrition designed for confined galleys, and movement routines for small spaces.",
    gradient: "from-amber-500 to-orange-600",
    glow: "shadow-amber-500/20",
    tag: "Holistic",
  },
  {
    icon: Shield,
    title: "Trauma Support",
    description:
      "Specialized care for PTSD, maritime accidents, and critical incident stress — available 24 hours a day, anywhere in the world.",
    gradient: "from-rose-500 to-pink-600",
    glow: "shadow-rose-500/20",
    tag: "24/7 Available",
  },
  {
    icon: Sparkles,
    title: "Performance Coaching",
    description:
      "Mental conditioning and focus techniques used by elite athletes, adapted for high-stakes maritime operations and leadership roles.",
    gradient: "from-sky-500 to-cyan-600",
    glow: "shadow-sky-500/20",
    tag: "Elite",
  },
];

const floatingIcons = [
  { icon: Target, x: "10%", y: "20%", size: 20, delay: 0 },
  { icon: Zap, x: "85%", y: "15%", size: 16, delay: 1 },
  { icon: Brain, x: "5%", y: "70%", size: 14, delay: 2 },
  { icon: Sparkles, x: "90%", y: "75%", size: 18, delay: 0.5 },
];

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".services-header",
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

      const cards = cardsRef.current?.children;
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 50, rotateY: 10 },
          {
            opacity: 1,
            y: 0,
            rotateY: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 80%",
            },
          }
        );
      }
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
      style={{ background: "var(--bg-surface)" }}
    >
      {/* Decorative floating icons */}
      {floatingIcons.map((f, i) => (
        <div
          key={i}
          className="absolute pointer-events-none animate-float"
          style={{
            left: f.x,
            top: f.y,
            animationDelay: `${f.delay}s`,
            animationDuration: `${6 + i * 2}s`,
          }}
        >
          <f.icon
            className="text-cyan-400/5"
            size={f.size}
          />
        </div>
      ))}

      {/* Section divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="services-header text-center mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/[0.06] text-cyan-400 text-sm font-medium border border-cyan-500/15 backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5" />
            Our Services
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-extralight text-white mt-6 mb-8 leading-[1.15]">
            What We
            <br />
            <span className="text-gradient-cyan font-semibold">Offer</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Every service is architected with deep understanding of yachting —
            from seasonal contracts to the social dynamics of shared living at sea.
          </p>
        </div>

        {/* Service cards */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          style={{ perspective: "1200px" }}
        >
          {services.map((service, idx) => (
            <div
              key={service.title}
              className="group relative p-8 rounded-2xl glass-card overflow-hidden"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              {/* Gradient background overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              />

              {/* Top accent bar */}
              <div
                className={`absolute top-0 left-1/2 -translate-x-1/2 w-12 h-[2px] rounded-full bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              {/* Floating tag */}
              <div
                className={`absolute top-4 right-4 px-2.5 py-1 rounded-full text-[10px] font-semibold bg-gradient-to-r ${service.gradient} text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-[-4px] group-hover:translate-y-0`}
              >
                {service.tag}
              </div>

              {/* Icon */}
              <div
                className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-7 group-hover:scale-110 transition-transform duration-500 ${service.glow}`}
              >
                <service.icon className="w-6 h-6 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-gradient-cyan transition-all duration-300">
                {service.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
                {service.description}
              </p>

              {/* CTA link */}
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm font-medium group/link"
              >
                <span className="text-gradient-cyan transition-colors">
                  Learn more
                </span>
                <ArrowDown className="w-3.5 h-3.5 text-cyan-400 -rotate-45 group-hover/link:translate-x-1 group-hover/link:-translate-y-0.5 transition-transform" />
              </a>

              {/* Subtle border glow on hover */}
              <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-cyan-400/10 transition-colors duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}