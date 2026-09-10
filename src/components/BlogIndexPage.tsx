import Link from "next/link";
import { Artwork } from "@/components/Artwork";
import { SectionLabel } from "@/components/Primitives";
import type { blogData } from "@/data/articles";
import styles from "./BlogIndexPage.module.css";

export function BlogIndexPage({ data }: { data: typeof blogData }) {
  return <main id="main-content" className={styles.main}><section className={styles.section} aria-labelledby="blog-title"><div className={styles.inner}><header><div><SectionLabel>{data.label}</SectionLabel><h1 id="blog-title" className="display-heading">{data.title}</h1></div></header><div className={styles.grid}>{data.articles.map(article => <Link className={styles.card} href={`/blog/${article.slug}`} key={article.slug}><div className={styles.media}><Artwork variant={article.artwork} tone={article.tone} label={article.artworkLabel} /></div><div><p>{article.category} · {article.readTime}</p><h2>{article.title}</h2><time>{article.date}</time></div><span aria-hidden="true">↗</span></Link>)}</div></div></section></main>;
}
