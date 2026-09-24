import { useReveal } from "@/hooks/use-reveal";

const TIMELINE = [
  {
    year: "2022",
    title: "Started B.E. Computer Science",
    body: "Joined Chandigarh University with a CGPA of 8.1/10 and an early focus on data and problem-solving.",
  },
  {
    year: "2023–24",
    title: "Marketing × Analytics crossover",
    body: "Worked across content, social media, and marketing roles — gaining the business context that shapes good analysis.",
  },
  {
    year: "2025",
    title: "Published IEEE researcher",
    body: "Co-authored research in multimodal trend modeling and solar forecasting, alongside an IGI Global chapter on AI in education.",
  },
  {
    year: "2025",
    title: "Data Analytics Trainee @ Trainity",
    body: "Built SQL and Python pipelines to identify churn drivers, improving retention modeling by 15% and saving 10+ reporting hours each week.",
  },
  {
    year: "2026",
    title: "Strategic Intelligence @ AgnetaSI",
    body: "Building web dashboards, integrating APIs, and translating predictive models into clear, decision-ready visual intelligence.",
  },
];

export function About() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="about" className="relative py-28">
      <div ref={ref} className="reveal mx-auto max-w-6xl px-4">
        <SectionLabel>01 / About</SectionLabel>
        <h2 className="mt-3 font-display text-3xl font-bold sm:text-5xl">
          A storyline written in <span className="text-gradient">data</span>.
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          A Computer Science graduate who turns complex analysis into clear,
          stakeholder-ready decisions. Here's how the journey unfolded.
        </p>

        <div className="relative mt-14">
          <div
            aria-hidden
            className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-teal/60 via-violet/40 to-transparent sm:left-1/2"
          />
          <ul className="space-y-10">
            {TIMELINE.map((item, i) => (
              <li
                key={item.title}
                className={`relative grid gap-4 sm:grid-cols-2 sm:gap-10 ${
                  i % 2 === 0 ? "" : "sm:[&>div:first-child]:order-2"
                }`}
              >
                <span
                  aria-hidden
                  className="absolute left-4 top-2 h-3 w-3 -translate-x-1/2 rounded-full bg-teal shadow-[0_0_16px_var(--teal)] sm:left-1/2"
                />
                <div className={`pl-10 sm:pl-0 ${i % 2 === 0 ? "sm:text-right sm:pr-10" : "sm:pl-10"}`}>
                  <div className="font-mono text-xs text-teal">{item.year}</div>
                  <h3 className="mt-1 font-display text-lg font-semibold">
                    {item.title}
                  </h3>
                </div>
                <div className={`pl-10 sm:pl-0 ${i % 2 === 0 ? "sm:pl-10" : "sm:text-right sm:pr-10"}`}>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-teal">
      <span className="h-px w-8 bg-teal/60" />
      {children}
    </div>
  );
}
