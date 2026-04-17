import { useReveal } from "@/hooks/use-reveal";
import { SectionLabel } from "./About";

const ROLES = [
  {
    role: "Data Analytics Trainee",
    org: "Trainity",
    period: "Jul 2025 – Dec 2025",
    location: "Remote, India",
    bullets: [
      "Analyzed 50,000+ data points using Python & Excel — driving 15% YoY process efficiency.",
      "Engineered SQL automations improving data accuracy by 18% and saving 6 hours/week.",
      "Optimized a Pandas pipeline merging 5+ data sources weekly, cutting wrangling time by 40%.",
    ],
  },
  {
    role: "Marketing Executive",
    org: "Integral World",
    period: "Jul 2024 – Sep 2024",
    location: "Auroville",
    bullets: [
      "Owned campaign analytics and reporting for outreach initiatives.",
      "Connected creative ideation with measurable performance metrics.",
    ],
  },
  {
    role: "Social Media Marketing Intern",
    org: "Thotin",
    period: "Jul 2024 – Sep 2024",
    location: "India",
    bullets: [
      "Tracked engagement KPIs across platforms and iterated on content strategy.",
      "Built dashboards translating social signals into brand decisions.",
    ],
  },
  {
    role: "Content Writer",
    org: "Uniford Foundation",
    period: "Jan 2024 – Mar 2024",
    location: "Remote",
    bullets: [
      "Crafted research-driven editorial content for educational initiatives.",
    ],
  },
  {
    role: "Curriculum Writer",
    org: "Team Everest NGO",
    period: "Jul 2023 – Aug 2023",
    location: "Remote",
    bullets: [
      "Designed structured learning modules used in volunteer-led programs.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionLabel>06 / Experience</SectionLabel>
        <h2 className="mt-3 font-display text-3xl font-bold sm:text-5xl">
          The <span className="text-gradient">trajectory</span>.
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Roles spanning analytics, marketing and writing — every step adding
          context to how data drives decisions.
        </p>

        <div className="relative mt-14">
          <div
            aria-hidden
            className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-teal via-violet/50 to-transparent"
          />
          <ul className="space-y-6">
            {ROLES.map((r) => (
              <Item key={`${r.role}-${r.org}`} {...r} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Item(props: (typeof ROLES)[number]) {
  const ref = useReveal<HTMLLIElement>();
  return (
    <li ref={ref} className="reveal relative pl-12">
      <span
        aria-hidden
        className="absolute left-4 top-6 h-3 w-3 -translate-x-1/2 rounded-full bg-teal shadow-[0_0_16px_var(--teal)]"
      />
      <div className="glass-card rounded-2xl p-5 transition-all hover:border-teal/30 hover:shadow-[0_0_30px_-12px_var(--teal)]">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="font-display text-lg font-semibold">
            {props.role}{" "}
            <span className="text-muted-foreground"> · </span>
            <span className="text-gradient">{props.org}</span>
          </h3>
          <span className="font-mono text-[11px] text-muted-foreground">
            {props.period} · {props.location}
          </span>
        </div>
        <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
          {props.bullets.map((b) => (
            <li key={b} className="flex gap-2">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-teal" />
              {b}
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}
