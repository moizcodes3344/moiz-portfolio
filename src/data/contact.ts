import { portfolioProfile } from "@/data/portfolio";

export const contactData = {
  label: "Contact",
  title: "CONNECT WITH MOIZ AHMAD",
  description: "Use the local form preview to shape a message, or visit Moiz's verified GitHub profile.",
  callLabel: "GitHub",
  callDescription: "View moizcodes3344 on GitHub.",
  callAction: "Open profile",
  githubUrl: portfolioProfile.githubUrl,
  fields: { firstName: "First name", lastName: "Last name", email: "Email", message: "Message" },
  placeholders: { firstName: "Your first name", lastName: "Your last name", email: "Your email", message: "A little about the project" },
  legal: "This local portfolio preview does not send or store your information.",
  submit: "Preview message",
  success: "Your message preview is ready. Nothing was sent or stored.",
};
