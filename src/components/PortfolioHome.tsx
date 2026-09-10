import Link from "next/link";
import { ArrowIcon } from "@/components/Primitives";
import { articles } from "@/data/articles";
import { portfolioProfile as profile, type PortfolioProject } from "@/data/portfolio";
import styles from "./PortfolioHome.module.css";

export function ProjectVisual({ project }: { project: PortfolioProject }) {
  return (
    <div className={styles.projectVisual} data-scroll-motion role="img" aria-label={project.mediaDescription}>
      <span className={styles.visualIndex}>{project.number}</span>
      <div className={styles.window}><i /><i /><i /><span>{project.name}</span></div>
      <span className={styles.mediaStatus}>{project.media ? "Project media" : "Media slot ready"}</span>
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.heroCopy}>
        <p className={styles.kicker}>Portfolio / 2026</p>
        <div className={styles.titleMask}><h1 id="hero-title">MOIZ<br />AHMAD</h1></div>
        <p className={styles.role}>Software Engineer</p>
        <p className={styles.intro}>{profile.shortIntroduction}</p>
        <div className={styles.heroActions}>
          <a className={styles.primaryAction} href="#works">View my work <ArrowIcon /></a>
          <a href={profile.githubUrl} target="_blank" rel="noopener noreferrer">GitHub <ArrowIcon /></a>
        </div>
        <div className={styles.socialLine}>{profile.socialLinks.slice(1).map((link) => <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer">{link.label}</a>)}</div>
      </div>
      <div className={styles.heroMedia} data-scroll-motion>
        {profile.heroVideo.src ? (
          <video autoPlay muted playsInline loop preload="metadata" poster={profile.heroVideo.poster ?? undefined} aria-label={profile.heroVideo.description}>
            <source src={profile.heroVideo.src} />Your browser does not support this video.
          </video>
        ) : (
          <div className={styles.videoFallback} role="img" aria-label="Hero video placeholder awaiting Moiz Ahmad’s animated portrait">
            <div className={styles.orbit} /><div className={styles.codePlane}><span>01</span><span>BUILD</span><span>DEPLOY</span></div>
            <p>PERSONAL<br />MOTION<br />PORTRAIT</p><small>VIDEO ARCHITECTURE READY</small>
          </div>
        )}
        <span className={styles.mediaTag}>Animated portrait / 01</span>
      </div>
    </section>
  );
}

export function SelectedProjects() {
  return (
    <section id="works" className={styles.projects} aria-labelledby="projects-title">
      <header className={styles.sectionHeader}><p>01 / Selected work</p><h2 id="projects-title">SELECTED<br />PROJECTS</h2><Link href="/works">All projects <ArrowIcon /></Link></header>
      <div>{profile.projects.map((project, index) => (
        <article className={styles.project} data-reveal-item key={project.slug}>
          <div className={styles.projectMeta}><span>{project.number}</span><p>{project.type}<br /><em>{project.status}</em></p></div>
          <Link className={styles.projectMediaLink} href={`/works/${project.slug}`}><ProjectVisual project={project} /></Link>
          <div className={styles.projectCopy}><h3>{project.name}</h3><p>{project.summary}</p>{project.liveUrl ? <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">Visit live site <ArrowIcon /></a> : <Link href={`/works/${project.slug}`}>View placeholder <ArrowIcon /></Link>}</div>
          <span className={styles.sideNumber}>0{index + 1}</span>
        </article>
      ))}</div>
    </section>
  );
}

export function Capabilities() {
  return <section className={styles.capabilities} aria-labelledby="capabilities-title"><div className={styles.stickyHeading}><p>02 / Capabilities</p><h2 id="capabilities-title">WHAT I<br />BUILD</h2><span>Software products shaped from interface to infrastructure.</span></div><ol>{profile.capabilities.map((item, index) => <li data-reveal-item key={item.title}><span>0{index + 1}</span><div><h3>{item.title}</h3><p>{item.detail}</p></div><ArrowIcon /></li>)}</ol></section>;
}

export function Technologies() {
  return <section className={styles.technology} aria-labelledby="technology-title"><div className={styles.techTrack} data-scroll-motion aria-hidden="true">TOOLS I WORK WITH — TECHNOLOGIES —</div><header><p>03 / Engineering stack</p><h2 id="technology-title">TECHNOLOGIES</h2></header><div className={styles.techRows}>{profile.technologies.map((group) => <div data-reveal-item key={group.category}><span>{group.category}</span><p>{group.items.join(" · ")}</p></div>)}</div></section>;
}

export function Approach() {
  return <section id="about" className={styles.approach} aria-labelledby="approach-title"><div className={styles.approachTop}><p>04 / Engineering approach</p><h2 id="approach-title">CLARITY IN THE<br />SYSTEM. PURPOSE<br />IN THE PRODUCT.</h2></div><div className={styles.approachBody}><p>{profile.biography}</p><ul>{profile.approach.map((item) => <li key={item}>{item}</li>)}</ul><Link href="/about">More about Moiz <ArrowIcon /></Link></div></section>;
}

export function Writing() {
  return <section id="notes" className={styles.writing} aria-labelledby="writing-title"><header><div><p>05 / Writing</p><h2 id="writing-title">ENGINEERING<br />NOTES</h2></div><Link href="/blog">View all notes <ArrowIcon /></Link></header><div>{articles.slice(0, 3).map((article, index) => <Link data-reveal-item href={`/blog/${article.slug}`} key={article.slug}><span>0{index + 1}</span><p>{article.category}</p><h3>{article.title}</h3><ArrowIcon /></Link>)}</div></section>;
}

export function ContactCta() {
  return <section className={styles.contact} aria-labelledby="contact-title"><p>Have a useful product in mind?</p><h2 id="contact-title">LET’S BUILD<br />SOMETHING<br /><em>USEFUL.</em></h2><div><a href={profile.emailUrl}>Email <ArrowIcon /></a>{profile.socialLinks.map((link) => <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer">{link.label} <ArrowIcon /></a>)}<a href={profile.phoneUrl}>Phone <ArrowIcon /></a></div></section>;
}
