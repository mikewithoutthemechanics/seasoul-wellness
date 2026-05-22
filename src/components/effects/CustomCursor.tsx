"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const dot = dotRef.current;
    if (!cursor || !dot) return;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX - 2}px, ${mouseY - 2}px)`;
    };

    const onEnterInteractive = () => {
      cursor.classList.add("scale-150");
      cursor.classList.add("opacity-40");
    };

    const onLeaveInteractive = () => {
      cursor.classList.remove("scale-150");
      cursor.classList.remove("opacity-40");
    };

    const loop = () => {
      cursorX += (mouseX - cursorX) * 0.12;
      cursorY += (mouseY - cursorY) * 0.12;
      cursor.style.transform = `translate(${cursorX - 20}px, ${cursorY - 20}px)`;
      requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove);

    const interactives = document.querySelectorAll("a, button, [data-cursor-hover]");
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", onEnterInteractive);
      el.addEventListener("mouseleave", onLeaveInteractive);
    });

    const rafId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId);
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", onEnterInteractive);
        el.removeEventListener("mouseleave", onLeaveInteractive);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-10 h-10 border border-stone-500/30 rounded-full pointer-events-none z-[10000] mix-blend-difference transition-transform duration-100 hidden md:block"
        style={{ willChange: "transform" }}
      />
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1 h-1 bg-stone-300 rounded-full pointer-events-none z-[10000] hidden md:block"
        style={{ willChange: "transform" }}
      />
    </>
  );
}
