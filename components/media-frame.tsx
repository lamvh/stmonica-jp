"use client";

import { useState, type CSSProperties } from "react";

type MediaFrameProps = {
  /** Path under /public, e.g. "/images/hero.png". */
  src: string;
  alt: string;
  /** Warm gradient shown while loading or if the image is missing. */
  gradient?: string;
  /** Small Japanese caption pinned inside the frame. */
  caption?: string;
  /** Large vertical kanji accent (writing-mode: vertical-rl). */
  verticalAccent?: string;
  className?: string;
  style?: CSSProperties;
};

const DEFAULT_GRADIENT = "linear-gradient(160deg,#d9d3c0,#c4bca4)";

/**
 * Image inside a fixed frame. The design layers photos over warm beige
 * gradients; if a photo is absent the gradient remains, so the layout still
 * reads as intentional. Drop matching files into /public/images to enable them.
 */
export function MediaFrame({
  src,
  alt,
  gradient = DEFAULT_GRADIENT,
  caption,
  verticalAccent,
  className = "",
  style,
}: MediaFrameProps) {
  const [broken, setBroken] = useState(false);

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ background: gradient, ...style }}
    >
      {!broken && (
        <img
          src={src}
          alt={alt}
          onError={() => setBroken(true)}
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}

      {verticalAccent && (
        <span
          className="pointer-events-none absolute top-6 left-6 font-mincho tracking-[0.2em]"
          style={{
            writingMode: "vertical-rl",
            fontSize: "36px",
            color: "rgba(35,38,43,0.30)",
          }}
        >
          {verticalAccent}
        </span>
      )}

      {caption && (
        <span
          className="absolute bottom-5 left-5 bg-cream/80 px-2 py-[3px] text-[11px] tracking-[0.2em] text-body"
        >
          {caption}
        </span>
      )}
    </div>
  );
}
