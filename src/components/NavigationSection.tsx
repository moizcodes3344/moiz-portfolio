"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import type { NavigationData } from "@/data/navigation";
import { portfolioProfile } from "@/data/portfolio";
import { Wordmark } from "@/components/Primitives";
import styles from "./NavigationSection.module.css";

export function NavigationSection({ data }: { data: NavigationData }) {
  const pathname = usePathname();
  const innerPage = pathname !== "/";
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!open || !dialog) return;
    const trigger = triggerRef.current;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
      trigger?.focus({ preventScroll: true });
    };
  }, [open]);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 1200px)");
    const closeDesktopMenu = (event: MediaQueryListEvent) => {
      if (event.matches) setOpen(false);
    };
    desktopQuery.addEventListener("change", closeDesktopMenu);
    return () => desktopQuery.removeEventListener("change", closeDesktopMenu);
  }, []);

  const resolveHref = (href: string) => {
    if (!innerPage) return href;
    if (href === "#top") return "/";
    if (href === "#works") return pathname === "/works" ? "#works-index" : "/works";
    if (href === "#about") return "/about";
    if (href === "#notes") return "/blog";
    if (href === "#contact") return "/contact";
    return href;
  };
  const isActive = (href: string) => {
    if (href === "#top") return pathname === "/";
    if (href === "#works") return pathname.startsWith("/works");
    if (href === "#about") return pathname === "/about";
    if (href === "#notes") return pathname.startsWith("/blog");
    if (href === "#contact") return pathname === "/contact";
    return false;
  };

  return (
    <>
      <a className={styles.skipLink} href="#main-content">{data.skipLabel}</a>
      <div role="banner" className={`framer-1bzuqnv-container ${styles.header} ${innerPage ? styles.innerPage : ""}`} data-section="navigation">
        <a href={innerPage ? "/" : "#top"} aria-label={data.homeLabel} className={styles.identity}>
          <span className={styles.avatar} aria-hidden="true">
            <Image src={portfolioProfile.heroImage.src} alt="" fill sizes="48px" loading="eager" />
          </span>
          <Wordmark words={data.wordmark} className={styles.wordmark} />
        </a>
        <nav className={styles.desktopNavigation} aria-label={data.navigationLabel}>
          <ul className={styles.desktopLinks}>
            {data.links.map((link) => <li key={link.href}><a href={resolveHref(link.href)} aria-current={isActive(link.href) ? "page" : undefined} target={"external" in link && link.external ? "_blank" : undefined} rel={"external" in link && link.external ? "noopener noreferrer" : undefined}>{link.label}</a></li>)}
          </ul>
        </nav>
        <button ref={triggerRef} type="button" className={styles.menuButton} aria-label={data.openLabel} aria-haspopup="dialog" aria-expanded={open} aria-controls="site-menu" onClick={() => setOpen(true)}>
          <span className={styles.menuStroke} /><span className={styles.menuStroke} />
        </button>
      </div>
      <dialog ref={dialogRef} id="site-menu" className={styles.dialog} aria-label={data.menuTitle} onCancel={(event) => { event.preventDefault(); setOpen(false); }} onClick={(event) => { if (event.target === event.currentTarget) setOpen(false); }} onKeyDown={(event) => {
        if (event.key !== "Tab") return;
        const elements = dialogRef.current?.querySelectorAll<HTMLElement>("a[href], button:not([disabled])");
        if (!elements?.length) return;
        const first = elements[0];
        const last = elements[elements.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }}>
        <div className={styles.menuPanel}>
          <button type="button" className={`${styles.menuButton} ${styles.closeButton}`} aria-label={data.closeLabel} onClick={() => setOpen(false)} autoFocus>
            <span className={styles.menuStroke} /><span className={styles.menuStroke} />
          </button>
          <nav aria-label={data.navigationLabel}>
            <ul className={styles.links}>
              {data.links.map((link) => <li key={link.href}><a className="display-heading" href={resolveHref(link.href)} aria-current={isActive(link.href) ? "page" : undefined} target={"external" in link && link.external ? "_blank" : undefined} rel={"external" in link && link.external ? "noopener noreferrer" : undefined} onClick={() => setOpen(false)}>{link.label}</a></li>)}
            </ul>
          </nav>
          <div className={styles.details}><p className="section-label">{data.name}</p><p>{data.description}</p></div>
        </div>
      </dialog>
    </>
  );
}
