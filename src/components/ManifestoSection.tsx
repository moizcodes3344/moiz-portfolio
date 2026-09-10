import { Artwork } from "@/components/Artwork";
import { SectionLabel } from "@/components/Primitives";
import type { manifestoData } from "@/data/home";
import styles from "./ManifestoSection.module.css";

export function ManifestoSection({ data }: { data: typeof manifestoData }) {
  return <section className={`framer-1s6lokl ${styles.section}`} aria-labelledby="manifesto-title">
    <div className={styles.background}><Artwork label={data.artworkLabel} variant="sculpture" /></div>
    <div className={styles.overlay} />
    <div className={styles.text}>
      <SectionLabel>{data.eyebrow}</SectionLabel>
      <h2 id="manifesto-title" className="display-heading large">{data.lines.map(line => <span key={line}>{line}</span>)}</h2>
      <p>{data.description}</p>
    </div>
  </section>;
}
