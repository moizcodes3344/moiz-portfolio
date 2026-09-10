"use client";
import { useEffect } from "react";
export function MotionController() {
  useEffect(() => {
    const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return;
    const sections = Array.from(document.querySelectorAll<HTMLElement>("main > section:not(#top)"));
    const items = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal-item]"));
    sections.forEach((section) => section.setAttribute("data-motion-section", ""));
    const reveal = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) {
        (entry.target as HTMLElement).setAttribute("data-motion-visible", "");
        reveal.unobserve(entry.target);
      }
    }), { threshold: 0.08, rootMargin: "0px 0px -8%" });
    sections.forEach((section) => reveal.observe(section));
    items.forEach((item) => { item.setAttribute("data-motion-item", ""); reveal.observe(item); });
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-scroll-motion]"));
    let frame = 0;
    const update = () => { frame = 0; elements.forEach((element) => { const rect = element.getBoundingClientRect(); const progress = Math.max(0, Math.min(1, (innerHeight - rect.top) / (innerHeight + rect.height))); element.style.setProperty("--scroll-shift", `${(progress - 0.5) * -80}px`); }); };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    update(); addEventListener("scroll", schedule, { passive: true }); addEventListener("resize", schedule);
    return () => { reveal.disconnect(); removeEventListener("scroll", schedule); removeEventListener("resize", schedule); cancelAnimationFrame(frame); };
  }, []);
  return null;
}
