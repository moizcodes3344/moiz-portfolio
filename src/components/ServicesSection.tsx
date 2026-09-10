"use client";

import { useEffect, useRef, useState } from "react";
import { Artwork } from "@/components/Artwork";
import { SectionLabel } from "@/components/Primitives";
import type { ServicesData } from "@/data/services";
import styles from "./ServicesSection.module.css";

export function ServicesSection({ data }: { data: ServicesData }) {
  const listRef = useRef<HTMLUListElement>(null);
  const [scrollIndex, setScrollIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [visible, setVisible] = useState(false);
  const activeIndex = focusedIndex ?? hoveredIndex ?? selectedIndex ?? scrollIndex;

  useEffect(() => {
    let frame = 0;
    const measure = () => {
      frame = 0;
      const list = listRef.current;
      if (!list) return;
      const rect = list.getBoundingClientRect();
      const anchor = window.innerHeight * .5;
      setVisible(rect.top < window.innerHeight && rect.bottom > 0);
      if (rect.top >= anchor) { setScrollIndex(0); return; }
      let nearest = 0;
      let distance = Infinity;
      Array.from(list.children).forEach((row, index) => {
        const rowRect = row.getBoundingClientRect();
        const currentDistance = Math.abs(rowRect.top + rowRect.height / 2 - anchor);
        if (currentDistance < distance) { nearest = index; distance = currentDistance; }
      });
      setScrollIndex(nearest);
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(measure); };
    measure();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => { window.removeEventListener("scroll", schedule); window.removeEventListener("resize", schedule); cancelAnimationFrame(frame); };
  }, [data.items.length]);

  return (
    <section id="services" data-framer-name="Services" className={`framer-1qsjqd5 ${styles.section}`} aria-label={data.label}>
      <div className={styles.container}>
        <div className={`${styles.artworks} ${visible || activeIndex !== scrollIndex ? styles.visible : ""}`}>
          {data.items.map((item, index) => <div key={item.title} className={`${styles.artworkSlot} ${activeIndex === index ? styles.selectedArtwork : ""}`} aria-hidden={activeIndex !== index}>
            <Artwork variant={item.artwork} tone={item.tone} label={item.artworkLabel} className={styles.artwork} />
          </div>)}
        </div>
        <div className={styles.content}>
          <SectionLabel className={styles.label}>{data.label}</SectionLabel>
          <ul ref={listRef} className={styles.list} onMouseLeave={() => setHoveredIndex(null)}>
            {data.items.map((item, index) => <li key={item.title}>
              <button type="button" className={`${styles.row} ${activeIndex === index ? styles.active : ""}`} aria-pressed={activeIndex === index} aria-describedby={`service-description-${index}`} onMouseEnter={() => setHoveredIndex(index)} onFocus={() => setFocusedIndex(index)} onBlur={() => setFocusedIndex(null)} onClick={() => setSelectedIndex(index)}>
                <span className={styles.number}>{item.number}</span><span className={`display-heading ${styles.title}`}>{item.title}</span>
              </button>
              <p className="sr-only" id={`service-description-${index}`}>{item.description}</p>
            </li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}
