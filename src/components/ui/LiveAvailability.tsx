"use client";

import { useState, useEffect } from "react";

export default function LiveAvailability() {
  const [therapists, setTherapists] = useState(3);
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    // Simulate real-time availability changes
    const interval = setInterval(() => {
      const change = Math.random() > 0.7 ? (Math.random() > 0.5 ? 1 : -1) : 0;
      setTherapists((prev) => Math.max(1, Math.min(8, prev + change)));
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-3 px-4 py-2 border border-stone-800 bg-stone-950/50 backdrop-blur-sm">
      <div className="relative">
        <div className={`w-2 h-2 rounded-full ${isOnline ? "bg-emerald-500" : "bg-stone-600"}`} />
        {isOnline && (
          <div className="absolute inset-0 w-2 h-2 rounded-full bg-emerald-500 animate-ping opacity-75" />
        )}
      </div>
      <div className="flex items-baseline gap-1">
        <span className="text-stone-200 text-sm font-medium">{therapists}</span>
        <span className="text-stone-500 text-xs">therapists available</span>
      </div>
    </div>
  );
}
