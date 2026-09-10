import { Artwork } from "@/components/Artwork";
import { SectionLabel } from "@/components/Primitives";
import type { WorksIndexData, WorksIndexProject } from "@/data/works-index";
import styles from "./WorksIndexSection.module.css";

function WorksIndexCard({ project }: { project: WorksIndexProject }) {
  return (
    <a className={styles.card} href={project.href} aria-label={`${project.name}: ${project.title}`}>
      <div className={styles.cardTop}>
        <p className={styles.projectName}>{project.name}</p>
        <h2>{project.title}</h2>
      </div>
      <div className={styles.media}>
        <Artwork variant={project.artwork} tone={project.tone} label={project.artworkLabel} />
      </div>
    </a>
  );
}

export function WorksIndexSection({ data }: { data: WorksIndexData }) {
  return (
    <section id="works-index" className={`framer-1u1ekk1 ${styles.section}`} aria-labelledby="works-index-title">
      <div className={styles.container}>
        <header className={styles.heading}>
          <div className={styles.titleGroup}>
            <SectionLabel>{data.label}</SectionLabel>
            <h1 id="works-index-title" className="display-heading">{data.title}</h1>
          </div>
          <p className={styles.introduction}>{data.introduction}</p>
        </header>
        <div className={styles.grid}>
          {data.projects.map(project => <WorksIndexCard key={project.name} project={project} />)}
        </div>
      </div>
    </section>
  );
}
