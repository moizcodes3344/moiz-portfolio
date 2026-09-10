"use client";

import { useState } from "react";
import { ArrowIcon, SectionLabel } from "@/components/Primitives";
import type { contactData } from "@/data/contact";
import styles from "./ContactPage.module.css";

export function ContactPage({ data }: { data: typeof contactData }) {
  const [sent, setSent] = useState(false);
  return <main id="main-content" className={styles.main}><section className={styles.section} aria-labelledby="contact-title"><div className={styles.inner}>
    <div className={styles.intro}><div><SectionLabel>{data.label}</SectionLabel><h1 id="contact-title" className="display-heading">{data.title}</h1><p>{data.description}</p></div><a className={styles.callCard} href={data.githubUrl} target="_blank" rel="noreferrer"><span><strong>{data.callLabel}</strong><small>{data.callDescription}</small></span><span>{data.callAction}<ArrowIcon /></span></a></div>
    <form id="contact-form" className={styles.form} onSubmit={event => { event.preventDefault(); setSent(true); }} noValidate={false}>
      <div className={styles.nameRow}><label>{data.fields.firstName}<input name="firstName" required autoComplete="given-name" placeholder={data.placeholders.firstName} /></label><label>{data.fields.lastName}<input name="lastName" required autoComplete="family-name" placeholder={data.placeholders.lastName} /></label></div>
      <label>{data.fields.email}<input name="email" type="email" required autoComplete="email" placeholder={data.placeholders.email} /></label>
      <label>{data.fields.message}<textarea name="message" required rows={4} placeholder={data.placeholders.message} /></label>
      <div className={styles.submitRow}><p>{data.legal}</p><button type="submit">{data.submit}</button></div>
      {sent && <p className={styles.status} role="status">{data.success}</p>}
    </form>
  </div></section></main>;
}
