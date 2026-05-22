"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const channels = [
  {
    title: "Emergency Hotline",
    detail: "+1 (800) SEA-HELP",
    desc: "24/7 immediate crisis intervention with maritime-trained counselors.",
    urgent: true,
  },
  {
    title: "Live Chat",
    detail: "Available Now",
    desc: "Discreet text-based support for when you cannot make a call.",
    urgent: false,
  },
  {
    title: "Global Network",
    detail: "150+ Ports",
    desc: "Local referrals and in-person support at major yachting hubs worldwide.",
    urgent: false,
  },
];

export default function Crisis() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        leftRef.current,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );

      gsap.fromTo(
        ".crisis-card",
        { opacity: 0, clipPath: "inset(0 0 100% 0)" },
        {
          opacity: 1,
          clipPath: "inset(0 0 0% 0)",
          duration: 0.8,
          stagger: 0.12,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: rightRef.current,
            start: "top 80%",
          },
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="crisis"
      ref={sectionRef}
      className="relative py-32 md:py-40 bg-stone-950"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div ref={leftRef} className="lg:col-span-5">
            <p className="text-[10px] uppercase tracking-[0.4em] text-amber-700 mb-6 font-mono">
              Always Available
            </p>

            <h2 className="font-serif text-5xl md:text-6xl font-light text-stone-100 mb-8 leading-[0.95]">
              Crisis
              <span className="italic text-stone-400 block mt-2">Support</span>
            </h2>
            <p className="text-stone-500 text-sm leading-[1.8] mb-14 max-w-sm">
              Mental health emergencies do not wait for port. Our crisis team understands
              the isolation of being at sea and is trained for maritime-specific situations.
            </p>

            <div className="space-y-5">
              {[
                { label: "Response", value: "24/7" },
                { label: "Confidential", value: "100%" },
                { label: "Training", value: "Maritime" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-6">
                  <span className="text-[10px] uppercase tracking-widest text-stone-700 w-24 font-mono">
                    {item.label}
                  </span>
                  <span className="text-stone-300 text-sm">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div ref={rightRef} className="lg:col-span-6 lg:col-start-7 space-y-5">
            {channels.map((channel) => (
              <div
                key={channel.title}
                className={`crisis-card relative p-8 border ${
                  channel.urgent ? "border-amber-800/60" : "border-stone-800"
                } hover:border-stone-600 transition-colors duration-700`}
              >
                {channel.urgent && (
                  <span className="absolute top-6 right-6 text-[10px] uppercase tracking-widest text-amber-700 font-mono">
                    Urgent
                  </span>
                )}

                <div className="mb-5">
                  <h3 className="font-serif text-xl font-light text-stone-200 mb-1">{channel.title}</h3>
                  <span className={`text-[10px] uppercase tracking-widest font-mono ${
                    channel.urgent ? "text-amber-700" : "text-stone-600"
                  }`}>
                    {channel.detail}
                  </span>
                </div>

                <p className="text-stone-500 text-sm leading-[1.8]">
                  {channel.desc}
                </p>
              </div>
            ))}

            <div className="p-8 border border-amber-900/40 bg-stone-900/20">
              <p className="text-stone-400 text-sm leading-[1.8]">
                <span className="text-amber-700 font-medium">Immediate danger?</span>{" "}
                If you or someone you know is in immediate danger, contact your captain,
                local emergency services, or the nearest coast guard. We are here to support
                alongside these services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
