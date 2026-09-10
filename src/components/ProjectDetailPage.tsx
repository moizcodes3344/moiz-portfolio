import { Artwork } from "@/components/Artwork";
import { ActionLink, SectionLabel } from "@/components/Primitives";
import type { ProjectDetail } from "@/data/project-details";
import { getProjectDetail } from "@/data/project-details";
import Link from "next/link";
import styles from "./ProjectDetailPage.module.css";

function ProjectMedia({ project, index, className = "" }: { project: ProjectDetail; index: number; className?: string }) {
  const variants = [project.artwork, "sculpture", "fold", "signal", "portal", "orbit"] as const;
  return <Artwork className={`${styles.artwork} ${styles[`artwork${index + 1}`]} ${className}`} variant={variants[index % variants.length]} tone={project.tone} label={project.mediaLabels[index] ?? `${project.name} original artwork study`} />;
}

function MetaRow({ label, children }: { label: string; children: React.ReactNode }) {
  return <div className={styles.metaRow}><span>{label}</span><strong>{children}</strong></div>;
}

function RelatedCard({ project }: { project: ProjectDetail }) {
  return <Link className={styles.relatedCard} href={`/works/${project.slug}`} aria-label={`View ${project.name}: ${project.title}`}>
    <div className={styles.relatedCopy}><span>{project.name}</span><h3>{project.title}</h3></div>
    <div className={styles.relatedMedia}><ProjectMedia project={project} index={0} /></div>
  </Link>;
}

export function ProjectDetailPage({ project }: { project: ProjectDetail }) {
  const related = project.related.map((slug) => getProjectDetail(slug)).filter((item): item is ProjectDetail => Boolean(item));
  return <main id="main-content" className={`framer-fun8p3 ${styles.main}`} data-project={project.slug}>
    <section className={`framer-1fhzgy6 ${styles.hero}`}>
      <div className={styles.heroInner}>
        <div className={styles.heroHeader}>
          <div className={styles.heroCopy}><SectionLabel>{project.status === "concept-demo" ? "Temporary concept/demo" : "Selected project"}</SectionLabel><h1 className="display-heading">{project.name}</h1><p>{project.summary}</p></div>
          <aside className={styles.meta} aria-label="Project details">
            <MetaRow label="Year">{project.year}</MetaRow><MetaRow label="Timeline">{project.timeline}</MetaRow><MetaRow label="Services"><span className={styles.services}>{project.services.map((service) => <span key={service}>{service}</span>)}</span></MetaRow>
            <Link className={styles.backLink} href="/works">All projects <span aria-hidden="true">↗</span></Link>
          </aside>
        </div>
        <div className={styles.heroMedia}><ProjectMedia project={project} index={0} /></div>
      </div>
    </section>
    <section className={`framer-r9py28 ${styles.overview}`}>
      <div className={styles.overviewInner}>
        <div className={styles.narrative}><h2 className="display-heading">Overview</h2><p>{project.overview}</p></div>
        <div className={styles.pair}><ProjectMedia project={project} index={1} /><ProjectMedia project={project} index={2} /></div>
      </div>
    </section>
    <section className={`framer-7la3qd ${styles.challenge}`}><div className={styles.challengeInner}><SectionLabel>Problem</SectionLabel><p>{project.challenge}</p></div></section>
    <section className={`framer-1ft9zkx ${styles.result}`}><div className={styles.resultInner}><div className={styles.resultCopy}><h2 className="display-heading">The<br />solution</h2><p>{project.result}</p></div><div className={styles.resultMedia}><ProjectMedia project={project} index={3} /></div></div></section>
    <section className={`framer-qu37it ${styles.metrics}`}><div className={styles.metricsInner}><div className={styles.metricMedia}><ProjectMedia project={project} index={4} /></div><div className={styles.metricList}>{project.metrics.map((metric) => <div className={styles.metric} key={metric.label}><strong className="display-heading">{metric.value}</strong><span>{metric.label}</span></div>)}</div></div></section>
    {project.statement && <section className={`framer-ou9gow ${styles.statement}`}><div className={styles.statementInner}><div className={styles.statementMedia}><ProjectMedia project={project} index={5} /></div><blockquote><span aria-hidden="true">“</span><p>{project.statement.quote}</p><footer><strong>{project.statement.attribution}</strong><small>{project.statement.role}</small></footer></blockquote></div></section>}
    <section className={`framer-17jj362 ${styles.credits}`}><div className={styles.creditsInner}><SectionLabel>Project notes</SectionLabel><dl>{project.credits.map((credit) => <div key={credit.role}><dt>{credit.role}</dt><dd>{credit.contribution}</dd></div>)}</dl></div></section>
    <section className={`framer-ixbzvg ${styles.more}`}><div className={styles.moreInner}><div className={styles.moreHeader}><h2 className="display-heading">More projects</h2><ActionLink href="/works">View all work</ActionLink></div><div className={styles.relatedGrid}>{related.map((item) => <RelatedCard key={item.slug} project={item} />)}</div></div></section>
  </main>;
}
