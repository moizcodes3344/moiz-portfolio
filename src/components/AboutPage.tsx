import { Artwork } from "@/components/Artwork";
import { SectionLabel } from "@/components/Primitives";
import type { aboutData } from "@/data/about";
import styles from "./AboutPage.module.css";

export function AboutPage({ data }: { data: typeof aboutData }) {
  return <main id="main-content" className={styles.main}>
    <section className={styles.intro} aria-labelledby="about-title"><div className={styles.introInner}><header><SectionLabel>{data.label}</SectionLabel><h1 id="about-title" className="display-heading">{data.title}</h1></header><div className={styles.heroMedia}><Artwork variant="sculpture" tone="gold" label={data.mediaLabel} /></div></div></section>
    <section className={styles.values} aria-labelledby="values-title"><div className={styles.valuesInner}><div className={styles.valuesHeading}><SectionLabel>{data.valuesLabel}</SectionLabel><h2 id="values-title" className="display-heading">{data.valuesTitle}</h2><p>{data.biography}</p></div><ol>{data.values.map(value => <li key={value.number}><span>{value.number}</span><div><h3>{value.title}</h3><p>{value.description}</p></div></li>)}</ol></div></section>
    <section className={styles.recognition} aria-labelledby="recognition-title"><div className={styles.parallax} aria-hidden="true"><Artwork variant="signal" tone="blue" label="" /></div><article><i /><SectionLabel>{data.recognitionLabel}</SectionLabel><h2 id="recognition-title" className="display-heading">{data.recognitionTitle}</h2><dl>{data.recognitionYears.map(group => <div key={group.year}><dt>{group.year}</dt>{group.items.map(item => <dd key={item}>{item}<span>{data.recognitionItemLabel}</span></dd>)}</div>)}</dl></article></section>
    <section className={styles.team} aria-labelledby="team-title"><div className={styles.teamInner}><div className={styles.teamHeading}><SectionLabel>{data.teamLabel}</SectionLabel><h2 id="team-title" className="display-heading">{data.teamTitle}</h2></div><div className={styles.teamGrid}>{data.people.map(person => <article key={person.name}><Artwork variant={person.artwork} tone={person.tone} label={person.label} /><div><h3>{person.name}</h3><p>{person.role}</p></div></article>)}</div></div></section>
  </main>;
}
