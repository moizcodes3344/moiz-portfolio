"use client";

import { useState } from "react";
import { SectionLabel } from "@/components/Primitives";
import type { faqData } from "@/data/faq";
import styles from "./FaqSection.module.css";

export function FaqSection({ data }: { data: typeof faqData }) {
  const [open, setOpen] = useState<Set<number>>(new Set());
  return <section className={`framer-1xfc20g ${styles.section}`} id="questions" aria-labelledby="faq-title">
    <div className={styles.container}>
      <div className={styles.heading}><SectionLabel>{data.label}</SectionLabel><h2 id="faq-title" className="display-heading">{data.title}</h2><p>{data.hint} <a href="#contact">{data.cta}</a></p></div>
      <div className={styles.list}>{data.items.map((item, index) => <div className={styles.item} key={item.question}>
        <h3><button aria-expanded={open.has(index)} aria-controls={`faq-answer-${index}`} id={`faq-question-${index}`} onClick={() => setOpen(previous => { const next = new Set(previous); if (next.has(index)) next.delete(index); else next.add(index); return next; })}>{item.question}<span aria-hidden="true">{open.has(index) ? "−" : "+"}</span></button></h3>
        <div className={styles.answer} id={`faq-answer-${index}`} role="region" aria-labelledby={`faq-question-${index}`} hidden={!open.has(index)}><p>{item.answer}</p></div>
      </div>)}</div>
    </div>
  </section>;
}
