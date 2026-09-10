import { portfolioProfile } from "@/data/portfolio";

export const identity = {
  ...portfolioProfile,
  wordmark: ["MOIZ", "AHMAD"],
  description: portfolioProfile.shortIntroduction,
  copyright: "© 2026 Moiz Ahmad · Personal portfolio",
  statusPrimary: portfolioProfile.primaryTitle,
  statusSecondary: "Building modern software products",
  focusPrimary: "Modern software products",
  focusSecondary: "Interfaces, systems, and architecture",
  menu: "Open navigation",
  closeMenu: "Close navigation",
  skip: "Skip to content",
  nav: [
    { label: "Work", href: "#works" },
    { label: "About", href: "#about" },
    { label: "Notes", href: "#notes" },
    { label: "Contact", href: "#contact" },
  ],
};

export const heroData = {
  eyebrow: portfolioProfile.primaryTitle,
  title: portfolioProfile.primaryTitle,
  description: portfolioProfile.shortIntroduction,
  cta: "Explore selected work",
  href: "#works",
  artworkLabel: "Original study: a dark sculptural loop with floating golden shapes",
  edition: "№01",
};

export const manifestoData = {
  eyebrow: "Engineering focus",
  lines: ["BUILD", "LEARN", "IMPROVE"],
  description: "Clear systems, dependable implementation, and thoughtful product experiences.",
  artworkLabel: "Original abstract study of light passing across sculptural forms",
};

export const footerData = {
  cta: "BUILD SOMETHING",
  description: "Software engineering work shaped with clarity and care.",
  linksTitle: "Explore",
  notesTitle: "KEEP LEARNING",
  newsletterTitle: "Engineering notes",
  newsletterDescription: "A local preview for future writing updates.",
  emailLabel: "Email address",
  emailPlaceholder: "Your email address",
  subscribe: "Keep me posted",
  newsletterSuccess: "Preview saved locally. No email was sent or address stored.",
  contactLabel: "Contact Moiz",
  contactTitle: "Share what you are building.",
  contactHint: "Portfolio preview — this form does not send messages.",
  nameLabel: "Your name",
  messageLabel: "What are you thinking?",
  send: "Preview inquiry",
  sent: "Your inquiry preview is ready. Nothing has been sent.",
  close: "Close inquiry",
  values: ["Build reliably", "Keep it clear", "Design for people", "Keep learning"],
};
