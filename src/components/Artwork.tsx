import type { CSSProperties } from "react";

export type ArtworkVariant = "sculpture" | "orbit" | "portal" | "fold" | "signal";

/** Original geometric artwork, authored in CSS. No external images or source assets. */
export function Artwork({ variant = "sculpture", label, className = "", tone = "gold" }: {
  variant?: ArtworkVariant;
  label: string;
  className?: string;
  tone?: "gold" | "blue" | "green" | "rose";
}) {
  return <div className={`artwork art-${variant} tone-${tone} ${className}`} role="img" aria-label={label}>
    <div className="art-halo" />
    <div className="art-object">
      {Array.from({ length: 7 }, (_, i) => <i key={i} style={{ "--i": i } as CSSProperties} />)}
    </div>
    <span className="art-satellite satellite-one" /><span className="art-satellite satellite-two" />
    <div className="art-floor" /><div className="art-grain" />
  </div>;
}
