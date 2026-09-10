import type { ReactNode } from "react";

export function ArrowIcon({ className = "" }: { className?: string }) {
  return <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 19 19 5M5 5h14v14" stroke="currentColor" strokeWidth="1.5" /></svg>;
}

export function SectionLabel({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`section-label ${className}`}>{children}</p>;
}

export function ActionLink({ children, href, className = "" }: { children: ReactNode; href: string; className?: string }) {
  return <a className={`action-link ${className}`} href={href}><span>{children}</span><ArrowIcon /></a>;
}

export function Wordmark({ words, className = "" }: { words: readonly string[]; className?: string }) {
  return <span className={`wordmark ${className}`} aria-label={words.join(" ")}>{words.map(word => <span key={word}>{word}</span>)}</span>;
}
