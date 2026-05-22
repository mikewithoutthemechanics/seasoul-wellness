"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { useState } from "react";

gsap.registerPlugin(ScrollTrigger);

const meditations = [
  {
    title: "Ocean Breathing",
    duration: "5 minutes",
    description: "Sync your breath with the rhythm of the waves for deep relaxation.",
  },
  {
    title: "Night Watch Calm",
    duration: "10 minutes",
    description: "Find peace during irregular hours and night shifts at sea.",
  },
  {
    title: "Morning Deck Reset",
    duration: "7 minutes",
    description: "Start your day with clarity and positive intention.",
  },
  {
    title: "Inner Compass",
    duration: "15 minutes",
    description: "Guided visualization to reconnect with your purpose and direction.",
  },
];

function MeditationCard({
  item,
  index,
}: {
  item: (typeof meditations)[0];
  index: number;
}) {
  const [playing, setPlaying] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative p-8 border border-slate-800 hover:border-slate-600 transition-colors duration-500"
    >
      <div className="flex items-start justify-between mb-6">
        <div>
          <h3 className="text-lg font-light text-white mb-1">{item.title}</h3>
          <p className="text-xs text-slate-500 uppercase tracking-wider">{item.duration}</p>
        </div>
      </div>

      <p className="text-slate-400 text-sm leading-relaxed mb-6">
        {item.description}
      </p>

      <button
        onClick={() => setPlaying(!playing)}
        className="w-full py-3 border border-slate-700 text-slate-300 text-xs tracking-widest uppercase hover:border-slate-500 hover:text-white transition-colors"
      >
        {playing ? "Playing" : "Begin Session"}
      </button>
    </motion.div>
  );
}

export default function Meditation() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".meditation-header",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="meditation"
      ref={sectionRef}
      className="relative py-32 bg-slate-950"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="meditation-header mb-24">
          <p className="text-xs tracking-[0.3em] uppercase text-slate-500 mb-6">
            Guided Practice
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            Meditations for Maritime Life
          </h2>
          <p className="text-slate-400 max-w-2xl text-base leading-relaxed font-light">
            Audio-guided sessions designed specifically for the unique rhythms of yacht life.
            From night watch anxiety to morning clarity, find your calm.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {meditations.map((item, index) => (
            <MeditationCard key={item.title} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
