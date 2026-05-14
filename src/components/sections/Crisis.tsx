"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import {
  Phone,
  MessageSquare,
  Globe,
  AlertTriangle,
  Clock,
  Shield,
  HeartHandshake,
  Radio,
  Mail,
  Video,
  MapPinCheck,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const channels = [
  {
    icon: Phone,
    title: "Emergency Hotline",
    detail: "+1 (800) SEA-HELP",
    desc: "24/7 immediate crisis intervention with maritime-trained counselors who understand life at sea.",
    color: "from-rose-500 to-pink-600",
    bgColor: "from-rose-500/10 to-pink-600/10",
    borderColor: "border-rose-500/20",
    urgent: true,
  },
  {
    icon: MessageSquare,
    title: "Live Crisis Chat",
    detail: "Available Now",
    desc: "Discreet, real-time text-based support for when you cannot make a call. Confidential and secure.",
    color: "from-cyan-500 to-blue-600",
    bgColor: "from-cyan-500/10 to-blue-600/10",
    borderColor: "border-cyan-500/20",
    urgent: false,
  },
  {
    icon: Video,
    title: "Video Counseling",
    detail: "By Appointment",
    desc: "Face-to-face sessions with your dedicated therapist. Available in all time zones for crew schedules.",
    color: "from-violet-500 to-purple-600",
    bgColor: "from-violet-500/10 to-purple-600/10",
    borderColor: "border-violet-500/20",
    urgent: false,
  },
  {
    icon: Globe,
    title: "Global Network",
    detail: "150+ Ports",
    desc: "Local referrals and in-person support at major yachting hubs worldwide. We're everywhere your journey takes you.",
    color: "from-emerald-500 to-teal-600",
    bgColor: "from-emerald-500/10 to-teal-600/10",
    borderColor: "border-emerald-500/20",
    urgent: false,
  },
];

const emergencyInfo = [
  { icon: MapPinCheck, text: "Nearest coast guard: 15 min response" },
  { icon: Shield, text: "All communications encrypted & confidential" },
  { icon: Clock, text: "Average response time: under 3 minutes" },
];

export default function Crisis() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".crisis-header",
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
        ".crisis-card",
        { opacity: 0, x: -40, filter: "blur(4px)" },
        {
          opacity: 1,
          x: 0,
          filter: "blur(0px)",
          duration: 0.8,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );

      gsap.fromTo(
        ".crisis-emergency",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: 0.8,
          ease: "power2.out",
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
      id="crisis"
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
      style={{ background: "var(--bg-deep)" }}
    >
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-rose-500/[0.02] blur-[120px] pointer-events-none" />

      {/* Section divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-rose-400/20 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="crisis-header text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/[0.08] border border-rose-500/20 text-sm font-semibold text-rose-400 backdrop-blur-sm"
          >
            <Radio className="w-4 h-4 animate-pulse" />
            <span>Always Available</span>
            <span className="w-1.5 h-1.5 rounded-full bg-rose-400/60 animate-pulse" />
          </motion.div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-extralight text-white mt-6 mb-8 leading-[1.15]">
            Crisis{" "}
            <span className="text-gradient-warm font-semibold">Support</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Mental health emergencies don&apos;t wait for port. Our crisis team understands the isolation of being at sea and is trained for maritime-specific situations.
          </p>
        </div>

        {/* Support channels */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {channels.map((channel) => (
            <div
              key={channel.title}
              className="crisis-card group relative p-8 rounded-2xl glass-card overflow-hidden"
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${channel.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              {/* Urgent badge */}
              {channel.urgent && (
                <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-rose-500 to-orange-500 text-white text-[10px] font-bold uppercase tracking-wider shadow-lg">
                  <AlertTriangle className="w-3 h-3" />
                  Urgent
                </div>
              )}

              <div className="relative flex items-start gap-5">
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${channel.color} flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <channel.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 pt-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-lg font-semibold text-white group-hover:text-gradient-cyan transition-colors">
                      {channel.title}
                    </h3>
                    <span
                      className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                        channel.urgent
                          ? "bg-rose-500/10 text-rose-400"
                          : "bg-white/[0.04] text-slate-500"
                      }`}
                    >
                      {channel.detail}
                    </span>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed pr-4">
                    {channel.desc}
                  </p>
                </div>
              </div>

              {/* Hover border glow */}
              <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-cyan-400/10 transition-colors duration-500 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Emergency info bar */}
        <motion.div
          className="crisis-emergency grid grid-cols-1 md:grid-cols-3 gap-4 mb-20"
        >
          {emergencyInfo.map((item) => (
            <div
              key={item.text}
              className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]"
            >
              <item.icon className="w-5 h-5 text-cyan-400/60 shrink-0" />
              <span className="text-sm text-slate-400">{item.text}</span>
            </div>
          ))}
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative p-10 rounded-3xl overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(251,113,133,0.06) 0%, rgba(251,191,36,0.06) 100%)",
            border: "1px solid rgba(251,113,133,0.1)",
          }}
        >
          <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-rose-500/[0.03] blur-[80px]" />
          <div className="relative text-center">
            <h3 className="text-2xl md:text-3xl font-light text-white mb-4">
              Immediate danger?
            </h3>
            <p className="text-slate-400 max-w-xl mx-auto mb-8 leading-relaxed">
              If you or someone you know is in immediate danger, contact your captain, local emergency services, or the nearest coast guard. We are here to support alongside these services.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#"
                className="group relative px-8 py-3.5 rounded-full bg-gradient-to-r from-rose-500 to-orange-500 text-white font-semibold text-sm shadow-lg shadow-rose-500/25 hover:shadow-rose-500/40 transition-all duration-300 hover:scale-[1.02]"
              >
                <span className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Call Emergency
                </span>
              </a>
              <a
                href="#"
                className="group px-8 py-3.5 rounded-full border border-slate-700 text-slate-300 font-semibold text-sm hover:border-rose-500/50 hover:text-rose-400 transition-all duration-300"
              >
                <span className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Email Support
                </span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}