"use client";

import { useRef, useEffect, useState } from "react";

export default function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedData = () => setIsLoaded(true);
    const handleError = () => {
      console.error("Video failed to load");
      setHasError(true);
    };

    video.addEventListener("loadeddata", handleLoadedData);
    video.addEventListener("error", handleError);

    // Force play
    video.play().catch((err) => {
      console.error("Video autoplay failed:", err);
      setHasError(true);
    });

    return () => {
      video.removeEventListener("loadeddata", handleLoadedData);
      video.removeEventListener("error", handleError);
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0">
      {/* Image fallback - always visible */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&w=1920&q=80')",
        }}
      />

      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-stone-900/80 via-stone-800/70 to-stone-950/90 animate-gradient" />

      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          isLoaded && !hasError ? "opacity-100" : "opacity-0"
        }`}
        style={{ willChange: "opacity" }}
      >
        <source
          src="https://cdn.coverr.co/videos/coverr-calm-ocean-water-2568/1080p.mp4"
          type="video/mp4"
        />
        <source
          src="https://assets.mixkit.co/videos/preview/mixkit-waves-in-the-water-1164-large.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-stone-950/30 mix-blend-multiply" />
    </div>
  );
}
