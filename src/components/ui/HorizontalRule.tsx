"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface HorizontalRuleProps {
  className?: string;
  delay?: number;
}

export default function HorizontalRule({ className = "", delay = 0 }: HorizontalRuleProps) {
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!lineRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.4,
          ease: "power3.inOut",
          delay,
          scrollTrigger: {
            trigger: lineRef.current,
            start: "top 90%",
          },
        }
      );
    });

    return () => ctx.revert();
  }, [delay]);

  return (
    <div
      ref={lineRef}
      className={`h-px bg-gradient-to-r from-transparent via-stone-700 to-transparent origin-left ${className}`}
    />
  );
}
