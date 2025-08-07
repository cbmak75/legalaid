import React, { useEffect, useState } from "react";

interface LogoCutoutProps {
  src: string;
  alt: string;
  className?: string;
  loading?: "eager" | "lazy";
  /**
   * Whiteness threshold (0-255). Pixels with R,G,B >= threshold become transparent.
   * Defaults to 245 to remove near-white backgrounds while keeping logo strokes.
   */
  threshold?: number;
}

const LogoCutout: React.FC<LogoCutoutProps> = ({
  src,
  alt,
  className,
  loading,
  threshold = 245,
}) => {
  const [dataUrl, setDataUrl] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      try {
        const canvas = document.createElement("canvas");
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        ctx.drawImage(img, 0, 0);
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const d = imageData.data;
        const t = Math.min(255, Math.max(0, threshold));
        for (let i = 0; i < d.length; i += 4) {
          const r = d[i];
          const g = d[i + 1];
          const b = d[i + 2];
          // Remove near-white pixels
          if (r >= t && g >= t && b >= t) {
            d[i + 3] = 0;
          }
        }
        ctx.putImageData(imageData, 0, 0);
        if (!cancelled) setDataUrl(canvas.toDataURL("image/png"));
      } catch (e) {
        // Fallback to original image on any error
        if (!cancelled) setDataUrl(null);
      }
    };
    img.onerror = () => {
      if (!cancelled) setDataUrl(null);
    };
    img.src = src;
    return () => {
      cancelled = true;
    };
  }, [src, threshold]);

  return (
    <img
      src={dataUrl || src}
      alt={alt}
      className={className}
      loading={loading}
      aria-label={alt}
      decoding="async"
    />
  );
};

export default LogoCutout;
