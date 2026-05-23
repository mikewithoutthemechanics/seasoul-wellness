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

  if (hasError) {
    return (
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-stone-900 via-stone-950 to-stone-950" />
    );
  }

  return (
    <div className="absolute inset-0 z-0">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          isLoaded ? "opacity-100" : "opacity-0"
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

      {/* Fallback gradient while video loads */}
      <div
        className={`absolute inset-0 bg-gradient-to-b from-stone-950 via-stone-900 to-stone-950 transition-opacity duration-1000 ${
          isLoaded ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* Overlay for text readability - lighter to show video */}
      <div className="absolute inset-0 bg-stone-950/30 mix-blend-multiply" />
    </div>
  );
}
