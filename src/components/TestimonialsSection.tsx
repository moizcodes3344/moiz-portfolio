"use client";

import { useId, useRef, useState, type KeyboardEvent } from "react";
import { Artwork } from "@/components/Artwork";
import { ArrowIcon, SectionLabel } from "@/components/Primitives";
import type { TestimonialsData } from "@/data/testimonials";
import styles from "./TestimonialsSection.module.css";

export function TestimonialsSection({ data }: { data: TestimonialsData }) {
  const [selected, setSelected] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const id = useId();
  const principle = data.principles[selected];
  const total = data.principles.length;

  function change(index: number, focus = false) {
    const next = (index + total) % total;
    setSelected(next);
    if (focus) tabRefs.current[next]?.focus();
  }

  function handleTabKey(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let target: number | undefined;
    if (event.key === "ArrowRight" || event.key === "ArrowDown") target = index + 1;
    if (event.key === "ArrowLeft" || event.key === "ArrowUp") target = index - 1;
    if (event.key === "Home") target = 0;
    if (event.key === "End") target = total - 1;
    if (target !== undefined) {
      event.preventDefault();
      change(target, true);
    }
  }

  return <section id="principles" className={`framer-1oe3tsb ${styles.section}`} aria-labelledby={`${id}-heading`}>
    <div className={styles.container}>
      <div className={styles.heading}>
        <SectionLabel>{data.label}</SectionLabel>
        <h2 id={`${id}-heading`} className="display-heading">{data.heading}</h2>
      </div>
      <div className={styles.panel}>
        <div className={styles.content}>
          <svg className={styles.quoteMark} width="106" height="88" viewBox="0 0 106 88" fill="none" aria-hidden="true"><path d="M12 .5H40L28 36h15v51.5H.5V39L12 .5ZM75 .5h28L91 36h14v51.5H63V39L75 .5Z" stroke="currentColor" /></svg>
          <div className={styles.arrows}>
            <button type="button" aria-label={data.previousLabel} onClick={() => change(selected - 1)}><ArrowIcon className={styles.previousArrow} /></button>
            <button type="button" aria-label={data.nextLabel} onClick={() => change(selected + 1)}><ArrowIcon className={styles.nextArrow} /></button>
          </div>
          <div role="tabpanel" id={`${id}-panel`} aria-labelledby={`${id}-tab-${selected}`} className={styles.tabPanel} tabIndex={0}>
            <div className={styles.principle} key={selected}>
              <p className={styles.quote}>{principle.quote}</p>
              <div className={styles.identity}>
                <Artwork className={styles.artwork} variant={principle.artwork} tone={principle.tone} label={principle.artworkLabel} />
                <div className={styles.identityCopy}><h3>{principle.name}</h3><p>{principle.detail}</p></div>
              </div>
            </div>
          </div>
        </div>
        <div role="tablist" aria-label={data.tabsLabel} className={styles.tabs}>
          {data.principles.map((item, index) => <button type="button" role="tab" key={item.name} id={`${id}-tab-${index}`} aria-controls={`${id}-panel`} aria-selected={selected === index} tabIndex={selected === index ? 0 : -1} ref={element => { tabRefs.current[index] = element; }} onClick={() => change(index)} onKeyDown={event => handleTabKey(event, index)}>{item.name}</button>)}
        </div>
      </div>
    </div>
  </section>;
}
