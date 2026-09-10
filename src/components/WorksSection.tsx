"use client";

import { useEffect, useRef, useState } from "react";
import { Artwork } from "@/components/Artwork";
import { ArrowIcon } from "@/components/Primitives";
import type { WorkConcept, WorksData } from "@/data/works";
import styles from "./WorksSection.module.css";

function ConceptArtwork({ project, className = "" }: { project: WorkConcept; className?: string }) {
  return <Artwork variant={project.artwork} tone={project.tone} label={project.artworkLabel} className={className} />;
}

export function WorksSection({ data }: { data: WorksData }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const openerRef = useRef<HTMLElement | null>(null);
  const [active, setActive] = useState(0);
  const [preview, setPreview] = useState<number | null>(null);
  const desktopProjects = data.projects.slice(0, 3);
  const project = desktopProjects[active] ?? desktopProjects[0];

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      if (!trackRef.current) return;
      const rect = trackRef.current.getBoundingClientRect();
      const step = (rect.height - 720) / 3;
      setActive(Math.max(0, Math.min(2, Math.floor((85 - rect.top) / Math.max(step, 1)))));
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    if (preview !== null && !dialogRef.current?.open) dialogRef.current?.showModal();
  }, [preview]);

  function openPreview(index: number) {
    openerRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    setPreview(index);
  }

  function selectProject(index: number) {
    if (!trackRef.current) return;
    const rect = trackRef.current.getBoundingClientRect();
    const step = (rect.height - 720) / 3;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: window.scrollY + rect.top - 85 + index * step + 1, behavior: reduced ? "instant" : "smooth" });
  }

  return <section id="works" className={`framer-1d8ewmh ${styles.section}`} aria-label={data.heading}>
    <div className={styles.ticker}>
      <h2 className="sr-only">{data.heading}</h2>
      <div className={styles.tickerTrack} aria-hidden="true">
        {Array.from({ length: 6 }, (_, index) => <div className={styles.tickerGroup} key={index}>
          <span className={styles.tickerTitle}><span className="display-heading large">{data.heading}</span><sup>({String(data.projects.length).padStart(2, "0")})</sup></span>
          <span className={styles.tickerLabel}>{data.label}</span>
        </div>)}
      </div>
    </div>

    <div ref={trackRef} className={styles.scrollTrack}>
      <div className={styles.sticky}>
        <div className={styles.panel}>
          <div className={styles.copy}>
            <div className={styles.copyTop}>
              <nav className={styles.projectNav} aria-label={data.selectionLabel}>
                {desktopProjects.map((item, index) => <button key={item.name} type="button" aria-pressed={active === index} onClick={() => selectProject(index)}>{item.name}</button>)}
              </nav>
              <button className={styles.allButton} type="button" onClick={() => openPreview(active)}>{data.allConcepts}<ArrowIcon /></button>
            </div>
            <div className={styles.copyBottom}>
              <div className={styles.projectHeading}><span className={styles.wordmark}>{project.name}</span><h3>{project.title}</h3></div>
              <dl className={styles.metadata}>
                <div><dt>{data.yearLabel}</dt><dd>{project.year}</dd></div>
                <div><dt>{data.disciplineLabel}</dt><dd>{project.discipline}</dd></div>
                <div><dt>{data.focusLabel}</dt><dd>{project.focus}</dd></div>
              </dl>
              <button className={styles.previewButton} type="button" onClick={() => openPreview(active)}><span>{data.viewConcept}</span><ArrowIcon /></button>
            </div>
          </div>
          <div className={styles.media}>
            {desktopProjects.map((item, index) => <div key={item.name} className={`${styles.mediaLayer} ${index === active ? styles.activeMedia : ""}`} aria-hidden={index !== active}><ConceptArtwork project={item} className={styles.desktopArtwork} /></div>)}
          </div>
        </div>
      </div>
    </div>

    <div className={styles.mobileProjects}>
      {data.projects.map((item, index) => <button key={item.name} className={styles.mobileCard} type="button" aria-label={`${data.viewConcept}: ${item.name}`} onClick={() => openPreview(index)}>
        <span className={styles.mobileHeading}><span className={styles.wordmark}>{item.name}</span><span className={styles.mobileTitle}>{item.title}</span></span>
        <ConceptArtwork project={item} className={styles.mobileArtwork} />
      </button>)}
    </div>

    <dialog ref={dialogRef} className={styles.dialog} aria-labelledby="concept-preview-title" onClose={() => { setPreview(null); openerRef.current?.focus(); }} onClick={event => { if (event.target === event.currentTarget) dialogRef.current?.close(); }}>
      {preview !== null && <div className={styles.dialogBody}>
        <button type="button" className={styles.closeButton} onClick={() => dialogRef.current?.close()}>{data.closePreview}<span aria-hidden="true">×</span></button>
        <p className="section-label">{data.previewLabel}</p>
        <h2 id="concept-preview-title" className="display-heading">{data.projects[preview].name}</h2>
        <h3>{data.projects[preview].title}</h3>
        <ConceptArtwork project={data.projects[preview]} className={styles.dialogArtwork} />
        <p>{data.projects[preview].description}</p>
        <nav className={styles.dialogNav} aria-label={data.selectionLabel}>
          {data.projects.map((item, index) => <button type="button" key={item.name} aria-pressed={preview === index} onClick={() => setPreview(index)}>{item.name}</button>)}
        </nav>
      </div>}
    </dialog>
  </section>;
}
