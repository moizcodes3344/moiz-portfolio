import { Artwork } from "@/components/Artwork";
import { SectionLabel } from "@/components/Primitives";
import type { whyUsData } from "@/data/why-us";
import styles from "./WhyUsSection.module.css";

export function WhyUsSection({ data }: { data: typeof whyUsData }) {
  return <section id="about" className={`framer-1a9sppe ${styles.section}`} aria-labelledby="practice-title">
    <div className={styles.container}>
      <div className={styles.first}>
        <div className={styles.copy}><SectionLabel>{data.label}</SectionLabel><h2 id="practice-title">{data.title}</h2></div>
        <div className={styles.firstImage}><Artwork variant="portal" tone="green" label={data.images[0]} /></div>
      </div>
      <div className={styles.second}>
        <div className={styles.secondImage}><Artwork variant="signal" label={data.images[1]} /></div>
        <dl className={styles.stats}>{data.stats.map(stat => <div key={stat.label}><dt className={styles.value}>{stat.value}<span>{stat.accent}</span></dt><dd>{stat.label}</dd></div>)}</dl>
      </div>
    </div>
  </section>;
}
