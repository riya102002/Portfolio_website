import { Lock, BookOpen } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { SectionLabel } from "./About";

const PUBS = [
  {
    title:
      "Multimodal Temporal Modeling of YouTube Trends using Metadata and Natural Language Features",
    type: "IEEE Research Paper · IC2SDT 2025",
    year: "2025",
    summary:
      "A multimodal architecture combining temporal metadata with NLP features to predict trending behavior of YouTube content.",
    href: "https://ieeexplore.ieee.org/document/11383587",
  },
  {
    title: "Artificial Intelligence and the Linguistic Turn in Education",
    type: "Book Chapter · IGI Global",
    year: "2026",
    summary:
      "Explores how AI is reshaping language, cognition and pedagogy — and the implications for next-generation curricula.",
    href: "https://www.igi-global.com/gateway/chapter/403452",
  },
  {
    title:
      "Enhanced Solar Power Output Forecasting using Ensemble Learning with Weather-Integrated Data Fusion",
    type: "IEEE Research Paper · Applied Machine Learning",
    year: "2026",
    summary:
      "A weather-integrated stacking ensemble combining XGBoost, LightGBM, CatBoost and SVR, achieving 95.17% R² with 0.59 ms/sample inference for real-time renewable energy decisions.",
    href: "https://ieeexplore.ieee.org/document/11542165",
  },
];

export function Publications() {
  return (
    <section id="publications" className="relative py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionLabel>04 / Research</SectionLabel>
        <h2 className="mt-3 font-display text-3xl font-bold sm:text-5xl">
          The <span className="text-gradient">research vault</span>.
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Published work spanning multimodal AI, renewable energy forecasting,
          and the future of education.
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {PUBS.map((p) => (
            <PubCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PubCard({
  title,
  type,
  year,
  summary,
  href,
}: {
  title: string;
  type: string;
  year: string;
  summary: string;
  href: string;
}) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <article
      ref={ref}
      className="reveal glass-card group relative overflow-hidden rounded-2xl p-6"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-teal/30 to-violet/30 text-teal">
          <BookOpen className="h-5 w-5" />
        </div>
        <span className="font-mono text-[11px] text-muted-foreground">{year}</span>
      </div>
      <div className="mt-4">
        <div className="font-mono text-[10px] uppercase tracking-widest text-teal">
          {type}
        </div>
        <h3 className="mt-2 font-display text-lg font-semibold leading-snug">
          {title}
        </h3>
        <p className="mt-3 text-sm text-muted-foreground">{summary}</p>
      </div>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex items-center gap-2 rounded-full border border-violet/40 bg-violet/10 px-4 py-2 text-xs font-medium text-violet transition-all hover:bg-violet/20"
      >
        <Lock className="h-3.5 w-3.5" />
        Unlock Publication
      </a>
    </article>
  );
}
