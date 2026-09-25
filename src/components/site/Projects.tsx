import { useState } from "react";
import { ChevronDown, Github, ExternalLink } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { SectionLabel } from "./About";
import jobMarketImage from "@/assets/project-job-market.jpg";
import operationalAnalyticsImage from "@/assets/project-operational-analytics.jpg";
import instagramAnalyticsImage from "@/assets/project-instagram-analytics.jpg";
import winLossImage from "@/assets/project-win-loss.jpg";
import solarForecastingImage from "@/assets/project-solar-forecasting.jpg";
import philanthroLinkImage from "@/assets/project-philanthrolink.jpg";

type Project = {
  title: string;
  period: string;
  blurb: string;
  details: string[];
  stack: string[];
  github?: string;
  image: string;
  imageAlt: string;
  accent: "teal" | "violet";
};

const PROJECTS: Project[] = [
  {
    title: "Global Data Job Market Analysis",
    period: "Jan 2026 – Mar 2026",
    blurb:
      "Aggregated job market data from 50+ countries to power Fortune-500 hiring decisions.",
    details: [
      "Built a scalable pipeline processing 5M+ global job postings per month.",
      "Power BI dashboards accelerated market intelligence reporting by 35%.",
      "Helped a Fortune 500 client cut time-to-hire by 17%.",
    ],
    stack: ["Python", "SQL", "Power BI", "ETL"],
    github: "https://github.com/riya102002/Global-job-market-intelligence-project",
    image: jobMarketImage,
    imageAlt: "Global job-market data network mapped across continents",
    accent: "violet",
  },
  {
    title: "Operational Analytics & Metric Spikes",
    period: "Jul 2025 – Nov 2025",
    blurb:
      "SQL-driven framework for tracking throughput, engagement and retention KPIs at scale.",
    details: [
      "Analyzed 50+ business processes across SQL, Power BI and Python.",
      "Surfaced patterns driving a 25% improvement in workflow efficiency.",
      "Delivered insights to 20 stakeholders for data-informed decisions.",
    ],
    stack: ["SQL", "Power BI", "Python"],
    github: "https://github.com/riya102002/Operation-Analytics-and-Investigating-Metric-Spike",
    image: operationalAnalyticsImage,
    imageAlt: "Operational analytics display highlighting anomalous metric spikes",
    accent: "teal",
  },
  {
    title: "Instagram User Analytics",
    period: "Jul 2025 – Nov 2025",
    blurb:
      "Advanced SQL surfacing actionable marketing insights and investor-ready metrics.",
    details: [
      "JOINs, aggregations, subqueries and date functions on user behavior data.",
      "Identified loyal users, engagement hot-spots and inactive cohorts.",
      "Output: marketing recommendations + an investor metrics deck.",
    ],
    stack: ["MySQL", "EDA", "Reporting"],
    github: "https://github.com/riya102002/Instagram-User-Analytics",
    image: instagramAnalyticsImage,
    imageAlt: "Social audience clusters and engagement paths visualized as a network",
    accent: "violet",
  },
  {
    title: "Win/Loss Pattern Miner",
    period: "2026",
    blurb:
      "AI-assisted sales intelligence pipeline turning unstructured CRM notes into statistically validated win/loss patterns.",
    details: [
      "Integrated HubSpot APIs with Gemini to classify deal notes and write structured reason tags back to the CRM.",
      "Validated competitor, industry and deal-size patterns using lift-based cross-tabulation across 100 synthetic deals.",
      "Produced a five-report HubSpot dashboard and leadership-ready intelligence report connecting loss reasons to revenue impact.",
    ],
    stack: ["Python", "HubSpot API", "Gemini", "Pandas"],
    github: "https://github.com/riya102002/winloss-pattern-miner",
    image: winLossImage,
    imageAlt: "Sales intelligence decision tree branching into win and loss patterns",
    accent: "teal",
  },
  {
    title: "Solar Panel Forecasting — Hybrid Model",
    period: "2025",
    blurb:
      "Hybrid time-series + ML model forecasting solar panel output under varying weather.",
    details: [
      "Fused historical generation records with real-time weather variables for grid-aware forecasting.",
      "Stacked XGBoost, LightGBM, CatBoost and SVR under a Gradient Boosting meta-learner.",
      "Achieved 95.17% R² with 0.59 ms/sample inference latency for real-time use.",
    ],
    stack: ["Python", "XGBoost", "LightGBM", "CatBoost"],
    github: "https://github.com/riya102002/Solar-Power-Output-Forecasting-Using-Ensemble-Learning",
    image: solarForecastingImage,
    imageAlt: "Solar panels beneath weather and energy forecasting visualizations",
    accent: "teal",
  },
  {
    title: "PhilanthroLink",
    period: "2024",
    blurb:
      "Platform connecting NGOs, donors and volunteers through a transparent data layer.",
    details: [
      "Designed schema and queries for donations, campaigns and impact metrics.",
      "Frontend dashboards visualize giving trends and reach.",
      "Built around accessibility and trust as first-class principles.",
    ],
    stack: ["Java", "MySQL", "Web"],
    github: "https://github.com/riya102002/PhilanthroLink",
    image: philanthroLinkImage,
    imageAlt: "Global philanthropy network connecting communities and impact initiatives",
    accent: "violet",
  },
];

function ProjectCard({ p, index }: { p: Project; index: number }) {
  const [open, setOpen] = useState(false);
  const ref = useReveal<HTMLDivElement>();
  const accentBg = p.accent === "teal" ? "from-teal/20" : "from-violet/20";
  const accentText = p.accent === "teal" ? "text-teal" : "text-violet";

  return (
    <div
      ref={ref}
      className="reveal glass-card group relative overflow-hidden rounded-2xl transition-all hover:-translate-y-1 hover:border-white/20"
    >
      <div
        aria-hidden
        className={`pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-gradient-to-br ${accentBg} to-transparent opacity-60 blur-3xl transition-opacity group-hover:opacity-100`}
      />

      <div className="relative aspect-[3/2] overflow-hidden border-b border-glass-border bg-muted">
        <img
          src={p.image}
          alt={p.imageAlt}
          width={1536}
          height={1024}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-background/65 via-transparent to-transparent"
        />
        <span
          className={`absolute bottom-3 left-3 rounded-full border border-glass-border bg-background/75 px-2.5 py-1 font-mono text-[9px] uppercase backdrop-blur-md ${accentText}`}
        >
          Project {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="relative p-6">
        <div className="flex items-center justify-between">
          <span className={`font-mono text-[10px] uppercase tracking-widest ${accentText}`}>
            {String(index + 1).padStart(2, "0")} · {p.period}
          </span>
          {p.github && (
            <a
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="rounded-full p-1.5 text-muted-foreground transition-colors hover:bg-white/10 hover:text-foreground"
            >
              <Github className="h-4 w-4" />
            </a>
          )}
        </div>

        <h3 className="mt-3 font-display text-xl font-semibold leading-tight">
          {p.title}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">{p.blurb}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {p.stack.map((s) => (
            <span
              key={s}
              className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 font-mono text-[10px] text-muted-foreground"
            >
              {s}
            </span>
          ))}
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium text-foreground hover:text-teal"
        >
          {open ? "Hide details" : "Expand details"}
          <ChevronDown
            className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`}
          />
        </button>

        <div
          className={`grid transition-all duration-500 ${
            open ? "mt-3 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <ul className="overflow-hidden space-y-1.5 text-sm text-muted-foreground">
            {p.details.map((d) => (
              <li key={d} className="flex gap-2">
                <span className={`mt-1.5 h-1 w-1 shrink-0 rounded-full ${p.accent === "teal" ? "bg-teal" : "bg-violet"}`} />
                {d}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? PROJECTS : PROJECTS.slice(0, 3);

  return (
    <section id="projects" className="relative py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionLabel>03 / Projects</SectionLabel>
        <h2 className="mt-3 font-display text-3xl font-bold sm:text-5xl">
          Selected <span className="text-gradient">work</span>.
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          End-to-end analytics work — from raw pipelines to dashboards that move
          the business needle.
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((p, i) => (
            <ProjectCard key={p.title} p={p} index={i} />
          ))}
        </div>

        {!showAll && PROJECTS.length > 3 && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => setShowAll(true)}
              className="group inline-flex items-center gap-2 rounded-full border border-teal/40 bg-teal/10 px-6 py-3 text-sm font-semibold text-teal transition-all hover:bg-teal/20 hover:shadow-[0_0_24px_-4px_var(--teal)]"
            >
              <ExternalLink className="h-4 w-4" />
              Launch Full Project Archive
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
