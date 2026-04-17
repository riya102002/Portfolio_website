import { useReveal } from "@/hooks/use-reveal";
import { SectionLabel } from "./About";

const STACKS = [
  {
    title: "Analytics Stack",
    color: "teal",
    items: [
      { name: "Python (pandas, NumPy)", level: 92 },
      { name: "SQL (MySQL, PostgreSQL)", level: 90 },
      { name: "Excel (Advanced)", level: 88 },
      { name: "Statistics & EDA", level: 85 },
    ],
  },
  {
    title: "BI & Visualization",
    color: "violet",
    items: [
      { name: "Power BI + DAX", level: 88 },
      { name: "Tableau", level: 82 },
      { name: "Dashboard Design", level: 90 },
      { name: "KPI Reporting", level: 86 },
    ],
  },
  {
    title: "Engineering Tools",
    color: "teal",
    items: [
      { name: "Git", level: 85 },
      { name: "AWS", level: 70 },
      { name: "ETL Pipelines", level: 80 },
      { name: "MySQL · MongoDB", level: 82 },
    ],
  },
  {
    title: "Programming",
    color: "violet",
    items: [
      { name: "Java", level: 80 },
      { name: "C++", level: 75 },
      { name: "Data Structures & Algos", level: 78 },
      { name: "Problem Solving", level: 90 },
    ],
  },
];

function Bar({ name, level, color }: { name: string; level: number; color: string }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className="reveal">
      <div className="mb-1.5 flex items-baseline justify-between">
        <span className="text-sm">{name}</span>
        <span className="font-mono text-[11px] text-muted-foreground">{level}%</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
        <div
          className="h-full rounded-full transition-all duration-1000"
          style={{
            width: `${level}%`,
            background:
              color === "teal"
                ? "linear-gradient(90deg, var(--teal), oklch(0.75 0.18 220))"
                : "linear-gradient(90deg, var(--violet), var(--teal))",
            boxShadow: color === "teal" ? "0 0 12px var(--teal)" : "0 0 12px var(--violet)",
          }}
        />
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionLabel>02 / Skills</SectionLabel>
        <h2 className="mt-3 font-display text-3xl font-bold sm:text-5xl">
          The <span className="text-gradient">analytics console</span>.
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          A live readout of the tools and competencies powering every project.
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {STACKS.map((s) => (
            <div key={s.title} className="glass-card rounded-2xl p-6">
              <div className="mb-5 flex items-center justify-between">
                <h3 className="font-display text-base font-semibold">{s.title}</h3>
                <span
                  className={`font-mono text-[10px] uppercase tracking-widest ${
                    s.color === "teal" ? "text-teal" : "text-violet"
                  }`}
                >
                  ● live
                </span>
              </div>
              <div className="space-y-4">
                {s.items.map((it) => (
                  <Bar key={it.name} {...it} color={s.color} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
