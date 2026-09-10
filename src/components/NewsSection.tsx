"use client";

import { useEffect, useRef, useState } from "react";
import { Artwork } from "@/components/Artwork";
import { ArrowIcon, SectionLabel } from "@/components/Primitives";
import type { newsData } from "@/data/news";
import styles from "./NewsSection.module.css";

export function NewsSection({ data }: { data: typeof newsData }) {
  const [selected, setSelected] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);
  useEffect(() => {
    if (selected === null) return;
    const dialog = dialogRef.current;
    const overflow = document.body.style.overflow;
    previousFocus.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    dialog?.showModal();
    document.body.style.overflow = "hidden";
    return () => { dialog?.close(); document.body.style.overflow = overflow; previousFocus.current?.focus({ preventScroll: true }); };
  }, [selected]);
  const item = selected === null ? null : data.items[selected];
  return <section id="notes" className={`framer-1d3tsme ${styles.section}`} aria-labelledby="notes-title">
    <div className={styles.container}>
      <div className={styles.heading}><div><SectionLabel>{data.label}</SectionLabel><h2 id="notes-title" className="display-heading">{data.title}</h2></div><button className="action-link" onClick={() => setSelected(0)}>{data.cta}<ArrowIcon /></button></div>
      <div className={styles.grid}>{data.items.map((note, i) => <button key={note.title} className={styles.card} onClick={() => setSelected(i)} aria-haspopup="dialog"><div className={`${styles.media} ${styles[`media${i}`]}`}><Artwork variant={note.variant} label={note.imageLabel} /></div><h3>{note.title}</h3><p>{note.date}</p></button>)}</div>
    </div>
    <dialog ref={dialogRef} className={styles.dialog} aria-labelledby="note-title" onCancel={() => setSelected(null)} onClick={event => { if (event.target === event.currentTarget) setSelected(null); }}>
      {item && <article><button className="action-link" onClick={() => setSelected(null)} autoFocus>{data.close}<span aria-hidden="true">×</span></button><p className="section-label">{item.date}</p><h2 id="note-title" className="display-heading">{item.title}</h2><p>{item.body}</p></article>}
    </dialog>
  </section>;
}
