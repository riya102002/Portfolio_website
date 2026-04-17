import { useState } from "react";
import { Award, ExternalLink } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { SectionLabel } from "./About";

type Cert = {
  name: string;
  issuer: string;
  year: string;
  skills: string[];
  url: string;
};

const CERTS: Cert[] = [
  {
    name: "SQL: A Practical Introduction for Querying Databases",
    issuer: "Coursera",
    year: "2024",
    skills: ["SQL", "Querying", "Joins"],
    url: "https://www.coursera.org/account/accomplishments/records/MIUW3467Y4L2",
  },
  {
    name: "NoSQL, Big Data & Spark Foundations Specialization",
    issuer: "IBM · Coursera",
    year: "2024",
    skills: ["NoSQL", "Spark", "Big Data"],
    url: "https://www.coursera.org/account/accomplishments/specialization/POGTUGNMCBNZ",
  },
  {
    name: "Java Full Stack Developer",
    issuer: "Coursera",
    year: "2024",
    skills: ["Java", "Spring", "REST"],
    url: "https://www.coursera.org/account/accomplishments/specialization/TIOI10AUQ8A4",
  },
  {
    name: "Deloitte Data Analytics Job Simulation",
    issuer: "Deloitte · Forage",
    year: "2024",
    skills: ["Tableau", "Forensics", "Insights"],
    url: "https://drive.google.com/file/d/1T06k0-1XeQMIrz3arReuYWbawhp91j-Y/view?usp=sharing",
  },
  {
    name: "Business Analysis: Project & Stakeholder Management",
    issuer: "Coursera",
    year: "2024",
    skills: ["BA", "Stakeholders", "Process"],
    url: "https://www.coursera.org/account/accomplishments/records/4RJXUPFRGROD",
  },
  {
    name: "Programming for Everybody – Python",
    issuer: "University of Michigan · Coursera",
    year: "2023",
    skills: ["Python", "Scripting"],
    url: "https://www.coursera.org/account/accomplishments/records/53KBDK8BLB6W",
  },
  {
    name: "AWS Cloud Solution Architect",
    issuer: "AWS · Coursera",
    year: "2024",
    skills: ["AWS", "Cloud", "Architecture"],
    url: "https://coursera.org/verify/professional-cert/3L0AQS5MHDJH",
  },
];

function CertCard({ c }: { c: Cert }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className="reveal glass-card group rounded-2xl p-5">
      <div className="flex items-start gap-3">
        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-teal/30 to-violet/30">
          <Award className="h-5 w-5 text-teal" />
        </div>
        <div className="min-w-0">
          <h3 className="font-display text-sm font-semibold leading-snug">
            {c.name}
          </h3>
          <p className="mt-0.5 text-xs text-muted-foreground">
            {c.issuer} · {c.year}
          </p>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {c.skills.map((s) => (
          <span
            key={s}
            className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
          >
            {s}
          </span>
        ))}
      </div>
      <a
        href={c.url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-teal hover:underline"
      >
        View Certificate <ExternalLink className="h-3 w-3" />
      </a>
    </div>
  );
}

export function Certifications() {
  const [open, setOpen] = useState(false);
  const visible = open ? CERTS : CERTS.slice(0, 4);

  return (
    <section id="certifications" className="relative py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionLabel>05 / Certifications</SectionLabel>
        <h2 className="mt-3 font-display text-3xl font-bold sm:text-5xl">
          The <span className="text-gradient">credential vault</span>.
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Continuously stacking skills across data, cloud, and business analysis.
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {visible.map((c) => (
            <CertCard key={c.name} c={c} />
          ))}
        </div>

        {!open && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => setOpen(true)}
              className="inline-flex items-center gap-2 rounded-full border border-violet/40 bg-violet/10 px-6 py-3 text-sm font-semibold text-violet transition-all hover:bg-violet/20 hover:shadow-[0_0_24px_-4px_var(--violet)]"
            >
              Open Full Credential Vault
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
