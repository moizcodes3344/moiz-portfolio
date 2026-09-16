import Link from "next/link";
import { portfolioProfile as profile } from "@/data/portfolio";
import { ArrowIcon } from "@/components/Primitives";
import styles from "./SiteFooter.module.css";

export function SiteFooter() {
  return <footer id="contact" className={styles.footer}><a className={styles.email} href={profile.emailUrl}><span>Start a conversation</span><strong>{profile.email}</strong><ArrowIcon /></a><div className={styles.bottom}><div className={styles.brand}><Link className={styles.wordmark} href="/">MOIZ<br />AHMAD</Link><p>Software Engineer<br />Building modern software products.</p></div><nav aria-label="Social links">{profile.socialLinks.map(link=><a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer">{link.label}</a>)}<a href={profile.phoneUrl}>Phone</a></nav><small>© 2026 Moiz Ahmad</small></div></footer>;
}
