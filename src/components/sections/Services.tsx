"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    number: "01",
    title: "Individual Therapy",
    description:
      "One-on-one sessions with licensed maritime psychologists who understand the isolation, stress, and unique pressures of yacht crew life.",
  },
  {
    number: "02",
    title: "Crew Counseling",
    description:
      "Group sessions to build team cohesion, resolve interpersonal conflicts, and create a supportive onboard environment.",
  },
  {
    number: "03",
    title: "Career Navigation",
    description:
      "Guidance for career transitions, burnout recovery, and finding balance between demanding rotations and personal life.",
  },
  {
    number: "04",
    title: "Wellness Programs",
    description:
      "Holistic wellness plans including sleep optimization, nutrition for shift workers, and exercise routines for confined spaces.",
  },
  {
    number: "05",
    title: "Trauma Support",
    description:
      "Specialized care for PTSD, accidents at sea, and critical incident stress management with 24/7 availability.",
  },
  {
    number: "06",
    title: "Relationship Care",
    description:
      "Support for maintaining relationships across distances, family dynamics, and social connection while on rotation.",
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".services-header",
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

      const cards = cardsRef.current?.children;
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out",
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
      className="relative py-32 md:py-40 bg-stone-950"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Asymmetric header - left aligned, not centered */}
        <div className="services-header mb-32 md:mb-40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4">
              <p className="text-[10px] uppercase tracking-[0.4em] text-stone-600 mb-6 font-mono">
                Our Services
              </p>
              <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-stone-100 leading-[0.95]">
                Tailored for
                <span className="italic text-stone-400 block mt-1">Life at Sea</span>
              </h2>
            </div>
            <div className="lg:col-span-4 lg:col-start-9 flex items-end">
              <p className="text-sm text-stone-500 leading-relaxed">
                Every service is designed with an understanding of the yachting industry,
                from seasonal contracts to the unique social dynamics onboard.
              </p>
            </div>
          </div>
        </div>

        {/* Editorial grid - offset columns */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-20"
        >
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`group relative ${i % 2 === 1 ? "md:mt-16" : ""}`}
            >
              <div className="flex items-baseline gap-4 mb-6">
                <span className="text-[10px] tracking-widest text-stone-700 font-mono">
                  {service.number}
                </span>
                <div className="flex-1 h-px bg-stone-800 group-hover:bg-stone-600 transition-colors" />
              </div>

              <h3 className="font-serif text-2xl md:text-3xl font-light text-stone-200 mb-5">
                {service.title}
              </h3>
              <p className="text-stone-500 text-sm leading-[1.8] max-w-md">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
