import { Award, Sparkles } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { SectionLabel } from "./About";

export function Awards() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="awards" className="relative py-28">
      <div ref={ref} className="reveal mx-auto max-w-6xl px-4">
        <SectionLabel>05 / Awards</SectionLabel>
        <h2 className="mt-3 font-display text-3xl font-bold sm:text-5xl">
          Research <span className="text-gradient">recognized</span>.
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Recognition for rigorous inquiry, applied innovation, and scholarly impact.
        </p>

        <article className="glass-card relative mt-12 overflow-hidden rounded-2xl border-teal/20 p-6 sm:p-8">
          <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-teal via-violet to-teal" />
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
            <div className="grid h-16 w-16 shrink-0 place-items-center rounded-xl border border-teal/30 bg-teal/10 text-teal shadow-[0_0_30px_-10px_var(--teal)]">
              <Award className="h-8 w-8" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-teal">
                <Sparkles className="h-3.5 w-3.5" /> IEEE recognition
              </div>
              <h3 className="mt-2 font-display text-xl font-semibold sm:text-2xl">
                IEEE Research Excellence Award
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Awarded in recognition of outstanding research and scholarly contribution
                across applied artificial intelligence, predictive modeling, and data-driven innovation.
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}