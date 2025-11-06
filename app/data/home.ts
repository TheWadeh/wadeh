export interface CtaLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface HeroContent {
  title: string;
  highlight: string;
  description: string;
  ctas: CtaLink[];
}

export interface ServiceTile {
  title: string;
  description: string;
  highlights: string[];
  isWide?: boolean;
}

export interface BentoSection {
  eyebrow: string;
  title: string;
  highlight: string;
  description: string;
  tiles: ServiceTile[];
}

export interface CaseStudyItem {
  company: string;
  sector: string;
  description: string;
  link: string;
  metrics: {
    label: string;
    value: string;
  }[];
}

export interface CaseStudiesSection {
  title: string;
  description: string;
  studies: CaseStudyItem[];
}

export interface IntegrationsSection {
  title: string;
  description: string;
  icons: string[];
}

export interface ShowcaseSection {
  heading: string;
  icon: string;
  subheading: string;
  body: string;
  cta: CtaLink;
  points: string[];
  reversed?: boolean;
}

export interface MissionSection {
  title: string;
  paragraphs: string[];
}

export interface CallToActionSection {
  title: string;
  ctas: CtaLink[];
}

export interface HomePageContent {
  hero: HeroContent;
  mission: MissionSection;
  services: BentoSection;
  showcase: ShowcaseSection[];
  integrations: IntegrationsSection;
  caseStudies: CaseStudiesSection;
  closingCta: CallToActionSection;
}

export const homePageContent: HomePageContent = {
  hero: {
    title: "Wadeh AI",
    highlight: "Automation Agency",
    description:
      "A next-generation AI automation agency based in Ethiopia. We design intelligent systems that simplify workflows, boost productivity, and unlock growth for emerging markets.",
    ctas: [
      { label: "Book a strategy call", href: "#contact" },
      { label: "Explore our services", href: "#services" },
    ],
  },
  mission: {
    title: "Built for ambitious teams across emerging markets",
    paragraphs: [
      "Our mission is to eliminate manual, repetitive tasks and replace scattered, expensive tools with intelligent, streamlined automations.",
      "We pair global AI expertise with deep regional insight, empowering teams, entrepreneurs, and startups to operate at scale without ballooning overhead.",
    ],
  },
  services: {
    eyebrow: "Wadeh Services",
    title: "Automation",
    highlight: " tailored for scale",
    description:
      "We blend process design, AI agents, and low-code tooling into resilient systems tuned for the realities of high-growth teams across Africa.",
    tiles: [
      {
        title: "Workflow Intelligence",
        description:
          "Audit and redesign your critical workflows with automation-first thinking. We map your processes and deploy AI copilots that keep teams aligned and productive.",
        highlights: [
          "Process discovery workshops tailored to your teams",
          "Automation blueprints translating workflows into AI tasks",
          "Continuous improvement loops with measurable KPIs",
        ],
        isWide: true,
      },
      {
        title: "Sales & Support Automations",
        description:
          "Combine AI agents, CRM automations, and omnichannel chat to engage prospects instantly and resolve support requests in minutes instead of hours.",
        highlights: [
          "AI-enabled lead routing and enrichment",
          "Proactive support bots that escalate intelligently",
          "Unified conversation hub across WhatsApp, email, and web",
        ],
      },
    ],
  },
  showcase: [
    {
      heading: "Our approach blends strategy, design, and automation engineering",
      icon: "sparkle",
      subheading: "Discovery to Deployment",
      body:
        "We collaborate closely to understand your operational bottlenecks, surface the highest ROI opportunities, and ship automations that are easy to adopt and maintain.",
      cta: { label: "See how we work", href: "#case-studies" },
      points: [
        "Immersive inception sprints with Wadeh strategists",
        "Automation playbooks aligned to your KPIs",
        "Enablement programs that embed new habits across teams",
      ],
    },
    {
      heading: "Rollouts powered by Wadeh Launchpads",
      icon: "rocket-launch",
      subheading: "Launch fast, scale responsibly",
      body:
        "Our templated launchpads give you ready-made automations for sales ops, customer support, finance reconciliation, and more. We tailor each to your stack and scale-up plan.",
      cta: { label: "Explore launchpads", href: "#services" },
      points: [
        "Launchpads delivered in 6-week release cycles",
        "Compliance and governance guardrails built-in",
        "Ops dashboards to track value from day one",
      ],
      reversed: true,
    },
  ],
  integrations: {
    title: "Integrations that meet your stack",
    description:
      "From regional payment gateways to enterprise CRMs, Wadeh AI orchestrates the tools you already trust with AI-first automation layers.",
    icons: [
      "simple-icons:whatsapp",
      "simple-icons:hubspot",
      "simple-icons:slack",
      "simple-icons:stripe",
      "simple-icons:notion",
      "simple-icons:airtable",
      "simple-icons:zapier",
    ],
  },
  caseStudies: {
    title: "Case studies",
    description:
      "Snapshots of how Wadeh AI helps teams operate sharper, faster, and with more focus.",
    studies: [
      {
        company: "ShebaPay",
        sector: "Fintech",
        description:
          "Scaled customer onboarding across Ethiopia with automated KYC review, saving 500+ hours monthly and accelerating go-live timelines by 4x.",
        link: "#contact",
        metrics: [
          { label: "Time-to-onboard", value: "-75%" },
          { label: "Agent efficiency", value: "+4.2x" },
          { label: "NPS", value: "+18 pts" },
        ],
      },
      {
        company: "Addis HealthTech",
        sector: "Healthcare",
        description:
          "Deployed AI triage workflows that route patient inquiries, automate follow-up reminders, and keep clinicians focused on care.",
        link: "#contact",
        metrics: [
          { label: "Response time", value: "-63%" },
          { label: "Missed follow-ups", value: "-41%" },
          { label: "Patient satisfaction", value: "+22 pts" },
        ],
      },
      {
        company: "Nile Logistics",
        sector: "Logistics",
        description:
          "Integrated delivery, inventory, and finance data into a single operations dashboard with proactive AI alerts, cutting downtime by 35%.",
        link: "#contact",
        metrics: [
          { label: "Ops downtime", value: "-35%" },
          { label: "Inventory accuracy", value: "+28%" },
          { label: "On-time dispatch", value: "+19%" },
        ],
      },
    ],
  },
  closingCta: {
    title: "Ready to automate your next growth chapter?",
    ctas: [
      { label: "Schedule a discovery call", href: "#contact" },
      { label: "Drop us a message", href: "mailto:hello@wadehai.com", external: true },
    ],
  },
};
