"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

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

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".crisis-card",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
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

  return (
    <section
      id="crisis"
      ref={sectionRef}
      className="relative py-32 bg-slate-950"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-rose-400 mb-6">
              Always Available
            </p>

            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
              Crisis Support
            </h2>
            <p className="text-slate-400 text-base leading-relaxed mb-12 font-light">
              Mental health emergencies do not wait for port. Our crisis team understands 
              the isolation of being at sea and is trained for maritime-specific situations.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4 text-slate-400 text-sm">
                <span className="text-xs uppercase tracking-wider text-slate-500 w-24">Response</span>
                <span className="text-white">24/7</span>
              </div>
              <div className="flex items-center gap-4 text-slate-400 text-sm">
                <span className="text-xs uppercase tracking-wider text-slate-500 w-24">Confidential</span>
                <span className="text-white">100%</span>
              </div>
              <div className="flex items-center gap-4 text-slate-400 text-sm">
                <span className="text-xs uppercase tracking-wider text-slate-500 w-24">Training</span>
                <span className="text-white">Maritime</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {channels.map((channel) => (
              <div
                key={channel.title}
                className={`crisis-card relative p-8 border ${
                  channel.urgent ? "border-rose-500/50" : "border-slate-800"
                } hover:border-slate-600 transition-colors duration-500`}
              >
                {channel.urgent && (
                  <span className="absolute top-6 right-6 text-xs uppercase tracking-wider text-rose-400">
                    Urgent
                  </span>
                )}

                <div className="mb-4">
                  <h3 className="text-white font-light text-lg mb-1">{channel.title}</h3>
                  <span className={`text-xs uppercase tracking-wider ${
                    channel.urgent ? "text-rose-400" : "text-slate-500"
                  }`}>
                    {channel.detail}
                  </span>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed">
                  {channel.desc}
                </p>
              </div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="p-8 border border-rose-500/30"
            >
              <p className="text-slate-300 text-sm leading-relaxed">
                <span className="text-rose-400 font-medium">Immediate danger?</span>{" "}
                If you or someone you know is in immediate danger, contact your captain, 
                local emergency services, or the nearest coast guard. We are here to support 
                alongside these services.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
