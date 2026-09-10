import { Artwork } from "@/components/Artwork";
import { ActionLink, SectionLabel, Wordmark } from "@/components/Primitives";
import type { heroData, identity } from "@/data/home";
import styles from "./HeroSection.module.css";

export function HeroSection({ data, brand }: { data: typeof heroData; brand: typeof identity }) {
  return <section id="top" className={`framer-1c07q0z ${styles.hero}`} aria-labelledby="hero-title">
    <div className={styles.container}>
      <div className={styles.copy}>
        <div className={styles.top}>
          <Wordmark words={brand.wordmark} className={styles.wordmark} />
          <div className={styles.meta}>
            <div><p className={styles.available}>{brand.statusPrimary}</p><p className={styles.muted}>{brand.statusSecondary}</p></div>
            <div><p>{brand.focusPrimary}</p><p className={styles.muted}>{brand.focusSecondary}</p></div>
          </div>
        </div>
        <div className={styles.bottom}>
          <div><SectionLabel>{data.eyebrow}</SectionLabel><h1 id="hero-title">{data.title}</h1></div>
          <p className={styles.description}>{data.description}</p>
          <ActionLink href={data.href} className="accent">{data.cta}</ActionLink>
        </div>
      </div>
      <div className={styles.media}>
        <Artwork label={data.artworkLabel} variant="sculpture" className={styles.art} />
        <span className={styles.edition}>{data.edition}</span>
      </div>
    </div>
  </section>;
}
