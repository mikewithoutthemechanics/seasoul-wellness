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
      className="relative py-32 bg-slate-950"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="services-header text-center mb-24">
          <p className="text-xs tracking-[0.3em] uppercase text-slate-500 mb-6">
            Our Services
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            Tailored for Life at Sea
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-base leading-relaxed font-light">
            Every service is designed with an understanding of the yachting industry,
            from seasonal contracts to the unique social dynamics onboard.
          </p>
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12"
        >
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative pl-8 border-l border-slate-800 hover:border-slate-600 transition-colors duration-500"
            >
              <span className="absolute -left-2 top-0 text-xs tracking-widest text-slate-600 font-light">
                {service.number}
              </span>

              <h3 className="text-xl font-light text-white mb-4 mt-1">
                {service.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
