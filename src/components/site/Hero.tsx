import { useEffect, useState } from "react";
import { ArrowRight, FileText, Mail, Linkedin } from "lucide-react";
import { Particles } from "./Particles";
import { LiveClock } from "./LiveClock";
import portrait from "@/assets/riya-portrait.jpeg";

const ROLES = [
  "Strategic Intelligence Analyst",
  "Data Visualization Specialist",
  "Predictive Modeling Researcher",
  "Research Author",
  "Business Intelligence Builder",
];

function Typer() {
  const [idx, setIdx] = useState(0);
  const [sub, setSub] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = ROLES[idx];
    const speed = deleting ? 45 : 90;
    const t = setTimeout(() => {
      if (!deleting) {
        const next = word.slice(0, sub.length + 1);
        setSub(next);
        if (next === word) setTimeout(() => setDeleting(true), 1300);
      } else {
        const next = word.slice(0, sub.length - 1);
        setSub(next);
        if (next === "") {
          setDeleting(false);
          setIdx((i) => (i + 1) % ROLES.length);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [sub, deleting, idx]);

  return (
    <span className="text-gradient font-display">
      {sub}
      <span className="ml-0.5 inline-block h-[1em] w-[2px] -translate-y-[2px] bg-teal align-middle animate-blink" />
    </span>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-screen items-center overflow-hidden pt-24"
    >
      <div aria-hidden className="absolute inset-0 grid-bg grid-bg-fade opacity-50" />
      <Particles />
      <div
        aria-hidden
        className="absolute left-1/2 top-0 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full"
        style={{ background: "var(--gradient-glow)" }}
      />

      <div className="relative mx-auto w-full max-w-6xl px-4">
        <div className="mb-6 flex items-center justify-between">
          <div className="glass inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-teal shadow-[0_0_8px_var(--teal)]" />
            <span className="text-muted-foreground">Available to join immediately</span>
          </div>
          <LiveClock />
        </div>

        <div className="flex items-center gap-5 sm:gap-7">
          <div className="relative shrink-0">
            <div
              aria-hidden
              className="absolute -inset-2 rounded-full opacity-80 blur-xl"
              style={{ background: "var(--gradient-primary)" }}
            />
            <div
              aria-hidden
              className="absolute -inset-[2px] rounded-full"
              style={{ background: "var(--gradient-primary)" }}
            />
            <img
              src={portrait}
              alt="Portrait of Riya Kesharwani, Data Analyst"
              loading="eager"
              className="relative h-20 w-20 rounded-full object-cover ring-1 ring-white/10 shadow-[0_0_40px_-8px_var(--teal)] sm:h-28 sm:w-28 md:h-32 md:w-32"
            />
            <span
              aria-hidden
              className="absolute bottom-1 right-1 h-3 w-3 rounded-full bg-teal shadow-[0_0_10px_var(--teal)] ring-2 ring-background"
            />
          </div>
          <h1 className="font-display text-4xl font-bold leading-[1.05] sm:text-6xl md:text-7xl">
            Riya
            <br />
            <span className="text-gradient">Kesharwani.</span>
          </h1>
        </div>

        <p className="mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">
          Strategic Intelligence <span className="text-foreground">·</span> Data Visualization{" "}
          <span className="text-foreground">·</span> Business Intelligence
        </p>

        <div className="mt-2 h-7 text-lg sm:text-xl">
          <Typer />
        </div>

        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          I build pipelines, dashboards, and predictive models that turn messy data
          into decisions teams can act on.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal to-violet px-5 py-3 text-sm font-semibold text-background shadow-[0_0_30px_-6px_var(--teal)] transition-transform hover:scale-[1.03]"
          >
            Explore Projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="https://drive.google.com/file/d/1CK99EqSN-vB2gH8xFUX2wHtfYPrgkCfD/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-foreground transition-all hover:border-teal/40 hover:bg-teal/10"
          >
            <FileText className="h-4 w-4" /> View Resume
          </a>
          <a
            href="https://www.linkedin.com/in/riyakesharwani/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-foreground transition-all hover:border-teal/40 hover:bg-teal/10"
          >
            <Linkedin className="h-4 w-4" /> View LinkedIn
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-foreground transition-all hover:border-violet/40 hover:bg-violet/10"
          >
            <Mail className="h-4 w-4" /> Contact Me
          </a>
        </div>

      </div>
    </section>
  );
}
