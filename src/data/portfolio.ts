export interface SocialLink {
  label: string;
  url: string;
}
export type PortfolioProject = {
  slug: string;
  number: string;
  name: string;
  type: string;
  status: "Live Project" | "Editable Placeholder";
  summary: string;
  liveUrl: string | null;
  repositoryUrl: string | null;
  media: string | null;
  mediaDescription: string;
};

export const portfolioProfile = {
  name: "Moiz Ahmad",
  primaryTitle: "Software Engineer",
  shortIntroduction:
    "I build modern, reliable software products with thoughtful interfaces, scalable backend systems, and maintainable architecture.",
  biography:
    "I'm Moiz Ahmad, a software engineer focused on building useful digital products from interface to infrastructure. I approach engineering through clear problem boundaries, maintainable architecture, responsive experiences, and dependable production behavior.",
  availability: null as string | null,
  location: null as string | null,
  heroImage: {
    src: "/images/moiz-portrait.webp",
    description: "Portrait of Moiz Ahmad in a dark editorial frame.",
  },
  githubUrl: "https://github.com/moizcodes3344",
  linkedinUrl: "https://www.linkedin.com/in/moiz-k-b02189369/",
  upworkUrl: "https://www.upwork.com/freelancers/~01a1713ed770b331a7",
  email: "moxzkhan3344@gmail.com",
  emailUrl: "mailto:moxzkhan3344@gmail.com",
  phone: "+92 370 6532892",
  phoneUrl: "tel:+923706532892",
  socialLinks: [
    { label: "GitHub", url: "https://github.com/moizcodes3344" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/moiz-k-b02189369/" },
    {
      label: "Upwork",
      url: "https://www.upwork.com/freelancers/~01a1713ed770b331a7",
    },
  ] satisfies readonly SocialLink[],
  capabilities: [
    {
      title: "Full-stack applications",
      detail: "Product experiences shaped as connected, maintainable systems.",
    },
    {
      title: "Frontend engineering",
      detail: "Responsive, accessible interfaces with deliberate interaction.",
    },
    {
      title: "Backend & APIs",
      detail: "Clear service boundaries and predictable application contracts.",
    },
    {
      title: "Database systems",
      detail: "Thoughtful data models designed around real product behavior.",
    },
    {
      title: "Software architecture",
      detail: "Structures that remain understandable as software evolves.",
    },
    {
      title: "Deployment & production",
      detail:
        "Reliable delivery with performance and operational behavior in view.",
    },
  ],
  technologies: [
    { category: "Languages", items: ["TypeScript", "Python"] },
    { category: "Frontend", items: ["React.js"] },
    { category: "Backend", items: ["Node.js"] },
    { category: "Databases", items: ["PostgreSQL", "MongoDB"] },
    { category: "DevOps / Cloud", items: ["Docker", "AWS"] },
    { category: "Workflow", items: ["Git"] },
  ],
  approach: [
    "Reliable software",
    "Maintainable architecture",
    "Responsive interfaces",
    "Secure backend systems",
    "Database design",
    "Production-ready development",
  ],
  projects: [
    {
      slug: "mme-solutions",
      number: "01",
      name: "M.M.E Solutions",
      type: "Agency Website",
      status: "Live Project",
      summary:
        "A complete agency website built to present M.M.E Solutions’ services, work, and digital presence through a modern, responsive web experience.",
      liveUrl: "https://www.marketmesolutions.com/",
      repositoryUrl: null,
      media: null,
      mediaDescription:
        "Reserved project media area for an approved M.M.E Solutions screenshot.",
    },
    {
      slug: "project-two",
      number: "02",
      name: "Project Two",
      type: "Future Case Study",
      status: "Editable Placeholder",
      summary:
        "A reserved project position ready for verified details, media, links, and engineering decisions.",
      liveUrl: null,
      repositoryUrl: null,
      media: null,
      mediaDescription: "Deliberate placeholder media area for Project Two.",
    },
    {
      slug: "project-three",
      number: "03",
      name: "Project Three",
      type: "Future Case Study",
      status: "Editable Placeholder",
      summary:
        "A reserved project position ready for a future piece of real software work.",
      liveUrl: null,
      repositoryUrl: null,
      media: null,
      mediaDescription: "Deliberate placeholder media area for Project Three.",
    },
  ] satisfies readonly PortfolioProject[],
  experience: [] as readonly {
    organization: string;
    role: string;
    period: string | null;
  }[],
  education: [] as readonly {
    institution: string;
    qualification: string;
    period: string | null;
  }[],
} as const;
export type PortfolioProfile = typeof portfolioProfile;
export function getPortfolioProject(slug: string) {
  return portfolioProfile.projects.find((project) => project.slug === slug);
}
