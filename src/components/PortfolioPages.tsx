import Link from "next/link";
import { ArrowIcon } from "@/components/Primitives";
import { ProjectVisual } from "@/components/PortfolioHome";
import { portfolioProfile as profile, type PortfolioProject } from "@/data/portfolio";
import styles from "./PortfolioPages.module.css";

export function WorksPage() {
  return <main id="main-content" className={styles.main}><section className={styles.hero}><p>Selected projects / 03</p><h1>WORK BUILT<br />WITH PURPOSE.</h1><span>One verified live project and two transparent, editable positions for future case studies.</span></section><section id="works-index" className={styles.works}>{profile.projects.map(project => <article key={project.slug}><div className={styles.number}>{project.number}</div><Link href={`/works/${project.slug}`}><ProjectVisual project={project} /></Link><div className={styles.workCopy}><p>{project.type} / {project.status}</p><h2>{project.name}</h2><span>{project.summary}</span><Link href={`/works/${project.slug}`}>View project <ArrowIcon /></Link></div></article>)}</section></main>;
}

export function ProjectPage({ project }: { project: PortfolioProject }) {
  const isLive = project.status === "Live Project";
  return <main id="main-content" className={styles.main}><section className={styles.projectHero}><div><p>{project.number} / {project.status}</p><h1>{project.name}</h1><span>{project.type}</span></div><ProjectVisual project={project} /></section><section className={styles.projectBody}><aside><Link href="/works">← All projects</Link>{project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">Visit live site <ArrowIcon /></a>}</aside><article><p className={styles.lead}>{project.summary}</p><div><h2>Project overview</h2><p>{isLive ? "M.M.E Solutions is a complete, properly working agency website. This portfolio presents only the verified scope supplied for the project; further role, technology, architecture, and result details remain intentionally omitted until confirmed." : "This is an editable project position, not a claim of completed or client work. Its route and media structure are ready for verified purpose, role, technologies, architecture, features, challenges, results, and links."}</p></div><dl><div><dt>Status</dt><dd>{project.status}</dd></div><div><dt>Type</dt><dd>{project.type}</dd></div><div><dt>Repository</dt><dd>{project.repositoryUrl ? "Available" : "Not provided"}</dd></div><div><dt>Approved media</dt><dd>{project.media ? "Available" : "Not supplied"}</dd></div></dl></article></section></main>;
}

export function AboutPortfolioPage() {
  return <main id="main-content" className={styles.main}><section className={styles.hero}><p>About / Moiz Ahmad</p><h1>SOFTWARE<br />WITH CLARITY.</h1><span>{profile.biography}</span></section><section className={styles.aboutGrid}><div><p>What I build</p><h2>FROM RESPONSIVE INTERFACES TO RELIABLE BACKEND SYSTEMS.</h2></div><ol>{profile.capabilities.map((item,index)=><li key={item.title}><span>0{index+1}</span><div><h3>{item.title}</h3><p>{item.detail}</p></div></li>)}</ol></section><section className={styles.stack}><p>Technologies</p>{profile.technologies.map(group=><div key={group.category}><span>{group.category}</span><strong>{group.items.join(" · ")}</strong></div>)}</section><ContactLinks /></main>;
}

export function ContactLinks() { return <section className={styles.contact}><p>Let’s build something useful.</p><h2>START A<br />CONVERSATION.</h2><div><a href={profile.emailUrl}>{profile.email}<ArrowIcon /></a><a href={profile.phoneUrl}>{profile.phone}<ArrowIcon /></a>{profile.socialLinks.map(link=><a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer">{link.label}<ArrowIcon /></a>)}</div></section>; }

export function ContactPortfolioPage() { return <main id="main-content" className={styles.main}><section className={styles.hero}><p>Contact / Open a conversation</p><h1>BUILD<br />SOMETHING<br />USEFUL.</h1><span>Email is the clearest way to start. You can also connect through GitHub, LinkedIn, Upwork, or phone.</span></section><ContactLinks /></main>; }
