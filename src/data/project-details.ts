import type { ArtworkVariant } from "@/components/Artwork";

export type ProjectSlug = "orbit" | "still" | "fold" | "signal" | "current" | "common";
export interface ProjectMetric { value: string; label: string }
export interface ProjectCredit { role: string; contribution: string }

export interface ProjectDetail {
  slug: ProjectSlug;
  status: "concept-demo" | "published";
  name: string;
  title: string;
  summary: string;
  year: string;
  timeline: string;
  services: readonly string[];
  overview: string;
  challenge: string;
  result: string;
  metrics: readonly ProjectMetric[];
  credits: readonly ProjectCredit[];
  architecture: string | null;
  techStack: readonly string[];
  keyFeatures: readonly string[];
  engineeringDecisions: readonly string[];
  challenges: readonly string[];
  repositoryUrl: string | null;
  liveDemoUrl: string | null;
  artwork: ArtworkVariant;
  tone: "gold" | "blue" | "green" | "rose";
  mediaLabels: readonly string[];
  statement?: { quote: string; attribution: string; role: string };
  related: readonly [ProjectSlug, ProjectSlug];
}

const pendingFields = {
  architecture: null,
  techStack: [],
  keyFeatures: [],
  engineeringDecisions: [],
  challenges: [],
  repositoryUrl: null,
  liveDemoUrl: null,
} as const;

export const projectDetails: readonly ProjectDetail[] = [
  {
    ...pendingFields,
    slug: "orbit", status: "concept-demo", name: "Orbit", title: "A calm workspace interface concept",
    summary: "Temporary concept/demo content reserved for a future Moiz Ahmad software project.",
    year: "Temporary", timeline: "Concept/demo", services: ["Product UI", "Frontend", "System thinking"],
    overview: "Orbit is a temporary interface study used to preserve the portfolio's project-detail architecture and visual system. It is not presented as commissioned work or as a completed Moiz Ahmad project.",
    challenge: "This phase needs realistic project-page structure without inventing clients, repositories, technologies, users, or business outcomes before Moiz's real work is supplied.",
    result: "The demo keeps the reusable overview, problem, solution, role, media, project facts, and related-work patterns ready for real project content in the next phase.",
    metrics: [{ value: "DEMO", label: "Temporary concept entry" }, { value: "NO URL", label: "Repository not provided" }, { value: "NEXT", label: "Replace with real project" }],
    credits: [{ role: "Portfolio status", contribution: "Concept/demo content" }, { role: "Client", contribution: "None — not client work" }, { role: "Repository", contribution: "Not provided" }, { role: "Next phase", contribution: "Replace with a real Moiz project" }],
    artwork: "orbit", tone: "blue", mediaLabels: ["Abstract blue artwork for the Orbit concept demo", "Abstract modular blue forms", "Abstract connected field composition", "Abstract Orbit detail", "Abstract layered orbital landscape"], related: ["still", "fold"],
  },
  {
    ...pendingFields,
    slug: "still", status: "concept-demo", name: "Still", title: "A focused product-system concept",
    summary: "Temporary concept/demo content showing how a future software case study can be organized.",
    year: "Temporary", timeline: "Concept/demo", services: ["Product thinking", "Interface system", "Accessibility"],
    overview: "Still is a placeholder concept study retained only as portfolio demo content. Its page demonstrates how a focused product overview and supporting media can be presented.",
    challenge: "The temporary content must explain the architecture honestly while avoiding unsupported claims about professional history, delivery timelines, or measured outcomes.",
    result: "The page remains ready for verified problem, solution, role, architecture, technology, challenge, and result information when a real project replaces this demo.",
    metrics: [{ value: "DEMO", label: "Temporary concept entry" }, { value: "NO URL", label: "Live demo not provided" }, { value: "OPEN", label: "Ready for real details" }],
    credits: [{ role: "Portfolio status", contribution: "Concept/demo content" }, { role: "Client", contribution: "None — not client work" }, { role: "Project facts", contribution: "Awaiting verified details" }, { role: "Next phase", contribution: "Replace with a real Moiz project" }],
    artwork: "sculpture", tone: "green", mediaLabels: ["Abstract green artwork for the Still concept demo", "Abstract green system study", "Abstract Still composition", "Abstract material detail", "Abstract editorial landscape", "Abstract green portrait"], related: ["signal", "common"],
  },
  {
    ...pendingFields,
    slug: "fold", status: "concept-demo", name: "Fold", title: "A structured publishing-tool concept",
    summary: "Temporary concept/demo content for a future full-stack software case study.",
    year: "Temporary", timeline: "Concept/demo", services: ["Full-stack", "Interaction", "Architecture"],
    overview: "Fold is a non-production concept entry. It keeps a detailed project narrative available without attributing unverified engineering work, organizations, or outcomes to Moiz.",
    challenge: "A portfolio needs depth, but that depth must come from verified work. Until real information is provided, this page clearly distinguishes structure from personal project history.",
    result: "The existing reusable route and media system are preserved, with nullable repository, demo, architecture, stack, feature, and engineering-decision fields ready in the data layer.",
    metrics: [{ value: "DEMO", label: "Temporary concept entry" }, { value: "NO DATA", label: "No performance claims" }, { value: "READY", label: "Reusable case-study model" }],
    credits: [{ role: "Portfolio status", contribution: "Concept/demo content" }, { role: "Client", contribution: "None — not client work" }, { role: "Metrics", contribution: "No claims supplied" }, { role: "Next phase", contribution: "Replace with a real Moiz project" }],
    artwork: "fold", tone: "rose", mediaLabels: ["Abstract rose artwork for the Fold concept demo", "Abstract publishing panels", "Abstract Fold interface composition", "Abstract layered rose surface", "Abstract system study", "Abstract folded portrait"], related: ["orbit", "current"],
  },
  {
    ...pendingFields,
    slug: "signal", status: "concept-demo", name: "Signal", title: "A clear information-system concept",
    summary: "Temporary concept/demo content illustrating a future data or machine-learning project page.",
    year: "Temporary", timeline: "Concept/demo", services: ["Data interface", "Machine learning", "Product UX"],
    overview: "Signal is a temporary concept entry for information-rich software. It does not claim a deployed model, dataset, client, research result, or production outcome.",
    challenge: "Machine-learning portfolio content needs precise evidence about data, evaluation, architecture, and limitations. Those facts have not yet been provided for a real project.",
    result: "The route can later present verified modeling decisions, technology choices, features, challenges, media, repository, and live-demo links without restructuring the page system.",
    metrics: [{ value: "DEMO", label: "Temporary concept entry" }, { value: "NO MODEL", label: "No ML result claimed" }, { value: "NEXT", label: "Add verified project data" }],
    credits: [{ role: "Portfolio status", contribution: "Concept/demo content" }, { role: "Dataset", contribution: "Not provided" }, { role: "Repository", contribution: "Not provided" }, { role: "Next phase", contribution: "Replace with a real Moiz project" }],
    artwork: "signal", tone: "gold", mediaLabels: ["Abstract gold artwork for the Signal concept demo", "Abstract information field", "Abstract dashboard study", "Abstract layered data composition", "Abstract decision-system detail", "Abstract signal portrait"], related: ["common", "orbit"],
  },
  {
    ...pendingFields,
    slug: "current", status: "concept-demo", name: "Current", title: "A flexible automation-workflow concept",
    summary: "Temporary concept/demo content for a future automation or integration project.",
    year: "Temporary", timeline: "Concept/demo", services: ["Automation", "Integrations", "System design"],
    overview: "Current is a clearly labeled demo entry showing how an automation project might be documented. No workflow, customer, or production deployment is being attributed to Moiz.",
    challenge: "Real automation work should document system boundaries, failure handling, dependencies, and measurable effects. Those details will come from an actual supplied project.",
    result: "The case-study structure is ready to receive accurate architecture, integrations, engineering decisions, challenges, and links while preserving the accepted visual design.",
    metrics: [{ value: "DEMO", label: "Temporary concept entry" }, { value: "LOCAL", label: "No external integration" }, { value: "OPEN", label: "Ready for verified work" }],
    credits: [{ role: "Portfolio status", contribution: "Concept/demo content" }, { role: "External systems", contribution: "None connected" }, { role: "Results", contribution: "No claims supplied" }, { role: "Next phase", contribution: "Replace with a real Moiz project" }],
    artwork: "portal", tone: "blue", mediaLabels: ["Abstract blue artwork for the Current concept demo", "Abstract workflow field", "Abstract Current composition", "Abstract integration landscape", "Abstract toolkit detail"], related: ["fold", "still"],
  },
  {
    ...pendingFields,
    slug: "common", status: "concept-demo", name: "Common", title: "A maintainable knowledge-platform concept",
    summary: "Temporary concept/demo content for a future backend or full-stack project.",
    year: "Temporary", timeline: "Concept/demo", services: ["Backend", "Information architecture", "Frontend"],
    overview: "Common is a temporary knowledge-platform concept kept to demonstrate a complete reusable project route. It is not evidence of a client engagement or production platform.",
    challenge: "Until verified project details are supplied, the content must remain useful as structure without implying users, adoption, delivery dates, or business performance.",
    result: "The page now describes its demo status directly and keeps all future case-study fields centralized for straightforward replacement in Personalization Phase 2.",
    metrics: [{ value: "DEMO", label: "Temporary concept entry" }, { value: "NO USERS", label: "No adoption claim" }, { value: "READY", label: "Data-driven route retained" }],
    credits: [{ role: "Portfolio status", contribution: "Concept/demo content" }, { role: "Client", contribution: "None — not client work" }, { role: "Live demo", contribution: "Not provided" }, { role: "Next phase", contribution: "Replace with a real Moiz project" }],
    artwork: "sculpture", tone: "rose", mediaLabels: ["Abstract rose artwork for the Common concept demo", "Abstract knowledge field", "Abstract reading system", "Abstract warm composition", "Abstract relationship study", "Abstract shared-knowledge portrait"], related: ["current", "signal"],
  },
] as const;

export const projectSlugs = projectDetails.map((project) => project.slug);
export function getProjectDetail(slug: string) { return projectDetails.find((project) => project.slug === slug); }
