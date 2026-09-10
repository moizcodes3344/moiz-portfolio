"use client";

import { useState } from "react";
import type { PricingContent } from "@/data/pricing";
import { Artwork } from "./Artwork";
import { ActionLink, SectionLabel } from "./Primitives";
import styles from "./PricingSection.module.css";

export function PricingSection({ data }: { data: PricingContent }) {
  const [yearly, setYearly] = useState(false);

  return (
    <section className={`framer-1egz04w ${styles.section}`} id="pricing" aria-labelledby="pricing-title">
      <div className={styles.wrapper}>
        <h2 className={`display-heading ${styles.heading}`} id="pricing-title">{data.title}</h2>
        <div className={styles.content}>
          <div className={styles.plans}>
            <div className={styles.switch} role="group" aria-label={data.optionsLabel}>
              <button type="button" aria-pressed={!yearly} onClick={() => setYearly(false)}>{data.monthly}</button>
              <button type="button" aria-pressed={yearly} onClick={() => setYearly(true)}>{data.yearly}<span>{data.savings}</span></button>
            </div>
            <div className={styles.cards}>
              {data.plans.map(plan => (
                <article className={styles.card} key={plan.name}>
                  <div className={styles.artwork}><Artwork variant={plan.artwork} label={plan.artworkLabel} /></div>
                  <div className={styles.cardContent}>
                    <div className={styles.intro}>
                      <div className={styles.planHeading}><h3>{plan.name}</h3>{plan.badge && <SectionLabel className={styles.badge}>{plan.badge}</SectionLabel>}</div>
                      <p>{plan.description}</p>
                    </div>
                    <div className={styles.details}>
                    <div className={styles.priceBlock} key={yearly ? "yearly" : "monthly"} aria-live="polite" aria-atomic="true">
                      <p className={styles.price}><span>{data.currency}</span>{yearly ? plan.yearlyPrice : plan.monthlyPrice}<small>{data.period}</small></p>
                      <p className={styles.billingNote}>{yearly ? data.yearlyNote : data.monthlyNote}</p>
                    </div>
                    <ul className={styles.features}>{plan.features.map(feature => <li key={feature}><svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="m3 10 4 4L17 4" stroke="currentColor" strokeWidth="1.5" /></svg><span>{feature}</span></li>)}</ul>
                    <ActionLink href={data.href} className={styles.planAction}>{plan.action}</ActionLink>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className={styles.bespoke}>
            <div className={styles.bespokeCopy}><SectionLabel>{data.bespokeLabel}</SectionLabel><h3>{data.bespokeTitle}</h3><p>{data.bespokeDescription}</p></div>
            <div className={styles.bespokeAction}><ActionLink href={data.href}>{data.bespokeAction}</ActionLink><small>{data.conceptNote}</small></div>
          </div>
        </div>
      </div>
    </section>
  );
}
