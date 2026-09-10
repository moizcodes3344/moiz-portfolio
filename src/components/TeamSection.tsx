"use client";

import type { CSSProperties } from "react";
import { Artwork } from "@/components/Artwork";
import { SectionLabel } from "@/components/Primitives";
import { useSectionProgress } from "@/components/useSectionProgress";
import type { TeamData } from "@/data/team";
import styles from "./TeamSection.module.css";

export function TeamSection({ data }: { data: TeamData }) {
  const ref = useSectionProgress();
  return (
    <section ref={ref} id="disciplines" className={`framer-sqi3gu ${styles.section}`} aria-labelledby="disciplines-title">
      <div className={styles.wrapper}>
        <div className={styles.stickyTitle}>
          <div className={styles.titleInner}>
            <SectionLabel className={styles.label}>{data.label}</SectionLabel>
            <h2 id="disciplines-title" className={`display-heading ${styles.title}`}>{data.title}</h2>
          </div>
        </div>
        <div className={styles.track}>
          {data.disciplines.map((discipline, index) => <article key={discipline.title} className={styles.card} style={{ "--base-scale": [.72, .68, .62, .5][index] ?? .7, "--drift": ["-140px", "-220px", "-170px", "-250px"][index] ?? "-180px" } as CSSProperties}>
            <Artwork variant={discipline.artwork} tone={discipline.tone} label={discipline.artworkLabel} className={styles.artwork} />
            <div className={styles.caption}>
              <h3 className="display-heading">{discipline.title}</h3>
              <p>{discipline.description}</p>
            </div>
          </article>)}
        </div>
      </div>
    </section>
  );
}
