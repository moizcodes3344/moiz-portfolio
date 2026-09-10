"use client";

import { useState } from "react";
import Link from "next/link";
import { Artwork } from "@/components/Artwork";
import { ActionLink, SectionLabel } from "@/components/Primitives";
import type { Article } from "@/data/articles";
import { getArticle } from "@/data/articles";
import styles from "./ArticleDetailPage.module.css";

function RelatedArticle({ article }: { article: Article }) { return <Link className={styles.relatedCard} href={`/blog/${article.slug}`}><div className={styles.relatedMedia}><Artwork variant={article.artwork} tone={article.tone} label={article.artworkLabel} /></div><p>{article.category} · {article.readTime}</p><h3>{article.title}</h3></Link>; }

export function ArticleDetailPage({ article }: { article: Article }) {
  const [shared, setShared] = useState(false);
  const related = article.related.map(getArticle).filter((item): item is Article => Boolean(item));
  return <main id="main-content" className={styles.main} data-article={article.slug}>
    <section className={styles.article}><div className={styles.articleInner}><aside><div className={styles.leadMedia}><Artwork variant={article.artwork} tone={article.tone} label={article.artworkLabel} /></div><dl><div><dt>Filed under</dt><dd>{article.category}</dd></div><div><dt>Reading time</dt><dd>{article.readTime}</dd></div></dl><button type="button" onClick={() => setShared(true)} aria-live="polite">{shared ? "Link ready locally" : "Share this note"}<span aria-hidden="true">↗</span></button></aside><article className={styles.body}><SectionLabel>{article.category}</SectionLabel><h1 className="display-heading">{article.title}</h1><div className={styles.byline}><time>{article.date}</time><span>{article.readTime} read</span></div><p className={styles.excerpt}>{article.excerpt}</p>{article.blocks.map((block, index) => <section key={`${block.heading}-${index}`}>{block.heading && <h2>{block.heading}</h2>}{block.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</section>)}</article></div></section>
    <section className={styles.related}><div className={styles.relatedInner}><header><h2 className="display-heading">More notes</h2><ActionLink href="/blog">View all notes</ActionLink></header><div className={styles.relatedGrid}>{related.map(item => <RelatedArticle key={item.slug} article={item} />)}</div></div></section>
  </main>;
}
