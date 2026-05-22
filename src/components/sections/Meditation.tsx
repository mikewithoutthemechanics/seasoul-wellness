"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const meditations = [
  {
    title: "Ocean Breathing",
    duration: "5 min",
    description: "Sync your breath with the rhythm of the waves for deep relaxation.",
  },
  {
    title: "Night Watch Calm",
    duration: "10 min",
    description: "Find peace during irregular hours and night shifts at sea.",
  },
  {
    title: "Morning Deck Reset",
    duration: "7 min",
    description: "Start your day with clarity and positive intention.",
  },
  {
    title: "Inner Compass",
    duration: "15 min",
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
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 40, rotateX: 8 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.9,
          delay: index * 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 88%",
          },
        }
      );
    });
    return () => ctx.revert();
  }, [index]);

  return (
    <div
      ref={cardRef}
      className="group relative border border-stone-800 hover:border-stone-600 transition-colors duration-700"
      style={{ perspective: "1000px" }}
    >
      <div className="p-8">
        <div className="flex items-start justify-between mb-8">
          <div>
            <h3 className="font-serif text-xl font-light text-stone-200 mb-1">{item.title}</h3>
            <p className="text-[10px] text-stone-600 uppercase tracking-widest font-mono">{item.duration}</p>
          </div>
        </div>

        <p className="text-stone-500 text-sm leading-[1.8] mb-8 min-h-[60px]">
          {item.description}
        </p>

        <button
          data-cursor-hover
          onClick={() => setPlaying(!playing)}
          className="w-full py-3 border border-stone-700 text-stone-400 text-[10px] tracking-[0.2em] uppercase hover:border-stone-500 hover:text-stone-200 transition-colors duration-500"
        >
          {playing ? "Playing" : "Begin Session"}
        </button>
      </div>
    </div>
  );
}

export default function Meditation() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!headerRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
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
      className="relative py-32 md:py-40 bg-stone-950"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Asymmetric header */}
        <div ref={headerRef} className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-28">
          <div className="lg:col-span-5">
            <p className="text-[10px] uppercase tracking-[0.4em] text-stone-600 mb-6 font-mono">
              Guided Practice
            </p>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-stone-100 leading-[0.95]">
              Meditations for
              <span className="italic text-stone-400 block mt-2">Maritime Life</span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 flex items-end">
            <p className="text-sm text-stone-500 leading-relaxed">
              Audio-guided sessions designed specifically for the unique rhythms of yacht life.
              From night watch anxiety to morning clarity.
            </p>
          </div>
        </div>

        {/* Cards with varied heights - offset layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {meditations.map((item, index) => (
            <div key={item.title} className={index % 2 === 1 ? "sm:mt-12" : ""}>
              <MeditationCard item={item} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
