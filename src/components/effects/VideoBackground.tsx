"use client";

import { useRef, useEffect, useState } from "react";

export default function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedData = () => setIsLoaded(true);
    video.addEventListener("loadeddata", handleLoadedData);

    return () => video.removeEventListener("loadeddata", handleLoadedData);
  }, []);

  return (
    <div className="absolute inset-0 z-0">
      {/* Placeholder - replace with actual video URL */}
      {/* Recommended: Use a calm ocean/water video from Pexels, Pixabay, or similar */}
      {/* Example: https://videos.pexels.com/video-files/855564/855564-hd_1920_1080_25fps.mp4 */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <source
          src="https://videos.pexels.com/video-files/855564/855564-hd_1920_1080_25fps.mp4"
          type="video/mp4"
        />
      </video>

      {/* Fallback gradient while video loads */}
      <div
        className={`absolute inset-0 bg-gradient-to-b from-stone-950 via-stone-900 to-stone-950 transition-opacity duration-1000 ${
          isLoaded ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-stone-950/60 mix-blend-multiply" />
    </div>
  );
}
