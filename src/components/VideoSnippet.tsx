import { useRef, useEffect, useState } from "react";

/**
 * VideoSnippet (LCP-aware)
 *
 * Pass priority={true} to the ONE clip that's above the fold. That clip skips
 * lazy loading entirely and its poster is fetched at high priority — it's your
 * LCP element, so anything that delays it delays the metric.
 *
 * Every other clip on the page should leave priority off, so it keeps the
 * deferred fetch and in-view playback.
 *
 * Pair a priority clip with this in index.html <head>:
 *   <link rel="preload" as="image" href="/poster.jpg" fetchpriority="high">
 */
export default function VideoSnippet({
  src,
  poster,
  loop = true,
  autoPlayInView = true,
  controls = true,
  priority = false,
  preloadMargin = "300px",
  aspectRatio = "16 / 9",
  className = "",
  style = {},
}) {
  const videoRef = useRef(null);
  const wrapRef = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(priority); // priority starts loaded
  const [posterHidden, setPosterHidden] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setFailed(false);
  }, [src]);

  // Stage 1: defer the fetch — skipped for priority clips, which must not wait on JS.
  useEffect(() => {
    if (priority) return;
    const el = wrapRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: preloadMargin },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [preloadMargin, priority]);

  // Stage 2: play only while visible.
  useEffect(() => {
    const el = videoRef.current;
    if (!el || !shouldLoad || !autoPlayInView) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    el.muted = true;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.play().catch(() => {});
        else el.pause();
      },
      { threshold: 0.25 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [shouldLoad, autoPlayInView]);

  const frame = {
    // position: "relative",
    width: "100%",
    aspectRatio,
    display: "block",
    borderRadius: 10,
    overflow: "hidden",
    background: "#1a1c20",
    ...style,
  };

  if (failed) {
    return (
      <div
        className={className}
        style={{
          ...frame,
          display: "grid",
          placeItems: "center",
          color: "#aeb4be",
          font: "500 13px system-ui, sans-serif",
        }}
      >
        Video unavailable
      </div>
    );
  }

  return (
    <div ref={wrapRef} style={frame} className={className}>
      {/* A real <img>, not a CSS background: it's visible to the preload scanner
          and it's the only form that accepts fetchPriority. */}
      {poster && (
        <img
          src={poster}
          alt=""
          aria-hidden="true"
          fetchPriority={"high"}
          loading={"eager"}
          decoding={priority ? "sync" : "async"}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            pointerEvents: "none",
            opacity: posterHidden ? 0 : 1,
            transition: "opacity 240ms ease",
          }}
        />
      )}

      <video
        ref={videoRef}
        src={shouldLoad ? src : undefined}
        loop={loop}
        muted
        playsInline
        controls={controls}
        preload={priority ? "auto" : controls ? "metadata" : "none"}
        disableRemotePlayback
        onPlaying={() => setPosterHidden(true)}
        onError={(e) => {
          if (e.currentTarget.error) setFailed(true);
        }}
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
      />
    </div>
  );
}
