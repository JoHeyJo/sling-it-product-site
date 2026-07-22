import { useRef, useEffect, useState } from "react";

/**
 * VideoSnippet — a reusable component for short (5–10s) looping clips.
 *
 * Defaults are tuned for silent, auto-looping snippets (product highlights,
 * ambient loops, mini-demos): it plays only when scrolled into view and
 * pauses when it leaves, so a page full of clips stays light on CPU/battery.
 *
 * Props:
 *   src            (string, required)  MP4 URL — put files in /public and pass "/clips/foo.mp4"
 *   webmSrc        (string)            Optional WebM for better compression (served first if present)
 *   poster         (string)            Image shown before the video paints
 *   loop           (bool, default true)
 *   autoPlayInView (bool, default true) Play when visible, pause when not
 *   controls       (bool, default false) Show native controls (use with autoPlayInView={false} for click-to-play + sound)
 *   aspectRatio    (string, default "16 / 9")
 *   className, style                    Passed through to the <video>
 */
export default function VideoSnippet({
  src,
  // webmSrc,
  poster,
  loop = true,
  autoPlayInView = true,
  controls = true,
  aspectRatio = "16 / 9",
  className = "",
  style = {},
}) {
  const videoRef = useRef(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const el = videoRef.current;
    if (!el || !autoPlayInView) return;

    // Set muted via the DOM, not just the JSX prop — React doesn't reliably
    // apply the `muted` attribute, and muted is required for autoplay.
    el.muted = true;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.play().catch(() => {}); // ignore autoplay rejections
        } else {
          el.pause();
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [autoPlayInView]);
  
  useEffect(() => {
    setFailed(false);
  }, [src]);

  if (failed) {
    return (
      <div
        className={className}
        style={{
          width: "100%",
          aspectRatio,
          display: "grid",
          placeItems: "center",
          background: poster
            ? `center / cover no-repeat url(${poster})`
            : "linear-gradient(135deg, #2a2d34, #3a3f4a)",
          color: "#aeb4be",
          font: "500 13px system-ui, sans-serif",
          borderRadius: 10,
          ...style,
        }}
      >
        Video unavailable
      </div>
    );
  }

  return (
    <video
      ref={videoRef}
      src={src}
      poster={poster}
      loop={loop}
      muted
      playsInline
      controls={controls}
      preload="metadata"
      onError={(e) => {
        console.log("video error", e.currentTarget.error);
        setFailed(true);
      }}
      className={className}
      style={{
        width: "100%",
        aspectRatio,
        objectFit: "cover",
        display: "block",
        borderRadius: 10,
        background: "#1a1c20",
        ...style,
      }}
    >
      {/* {webmSrc && <source src={webmSrc} type="video/webm" />} */}
      {/* <source src={src} type="video/mp4" /> */}
    </video>
  );
}


