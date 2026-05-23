"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const plans = [
  {
    name: "Individual",
    price: "€120",
    period: "per session",
    features: [
      "50-minute session",
      "Maritime-trained therapist",
      "Flexible scheduling",
      "Secure video or in-person",
      "24/7 crisis access",
    ],
    popular: false,
  },
  {
    name: "Crew Package",
    price: "€350",
    period: "per month",
    features: [
      "Up to 4 sessions",
      "Group counseling option",
      "Onboard wellness plan",
      "Priority scheduling",
      "24/7 crisis access",
      "Captain dashboard",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "for fleets",
    features: [
      "Unlimited sessions",
      "Full crew coverage",
      "Onboard therapist option",
      "Wellness analytics",
      "Training programs",
      "24/7 crisis access",
      "Dedicated account manager",
    ],
    popular: false,
  },
];

export default function Pricing() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".pricing-card",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="pricing"
      ref={sectionRef}
      className="relative py-32 md:py-40 bg-stone-950"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          <div className="lg:col-span-6">
            <p className="text-[10px] uppercase tracking-[0.4em] text-stone-600 mb-6 font-mono">
              Transparent Pricing
            </p>
            <h2 className="font-serif text-5xl md:text-6xl font-light text-stone-100 leading-[0.95]">
              Investment in
              <span className="italic text-stone-400 block mt-2">Your Crew</span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 flex items-end">
            <p className="text-stone-500 text-sm leading-[1.8]">
              No hidden fees. No contracts. Flexible plans designed for the yachting
              industry's unique schedule.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`pricing-card relative p-8 border ${
                plan.popular ? "border-stone-600 bg-stone-900/40" : "border-stone-800"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-8 px-3 py-1 bg-stone-200 text-stone-950 text-[10px] uppercase tracking-widest font-mono">
                  Most Popular
                </div>
              )}

              <h3 className="font-serif text-2xl text-stone-200 mb-2">{plan.name}</h3>
              <div className="mb-8">
                <span className="font-serif text-4xl text-stone-100">{plan.price}</span>
                <span className="text-stone-600 text-sm ml-2">{plan.period}</span>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="w-1 h-1 rounded-full bg-stone-600 mt-2" />
                    <span className="text-stone-400 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                data-cursor-hover
                className="w-full py-3 border border-stone-700 text-stone-300 text-[10px] uppercase tracking-widest hover:border-stone-500 hover:text-stone-100 transition-colors duration-500"
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
