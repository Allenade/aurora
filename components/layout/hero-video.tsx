"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type HeroVideoProps = {
  src: string;
  className?: string;
  startOffset?: number;
};

export function HeroVideo({ src, className, startOffset = 0 }: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || startOffset <= 0) return;

    const seekToStart = () => {
      if (Number.isFinite(video.duration) && video.duration > startOffset) {
        video.currentTime = startOffset;
      }
    };

    const handleTimeUpdate = () => {
      if (!Number.isFinite(video.duration)) return;

      if (video.currentTime < startOffset) {
        video.currentTime = startOffset;
      }
    };

    video.addEventListener("loadedmetadata", seekToStart);
    video.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      video.removeEventListener("loadedmetadata", seekToStart);
      video.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, [startOffset]);

  return (
    <video
      ref={videoRef}
      src={src}
      autoPlay
      loop
      muted
      playsInline
      className={cn(className)}
      aria-hidden
    />
  );
}
