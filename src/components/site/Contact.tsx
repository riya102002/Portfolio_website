import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { SectionLabel } from "./About";

const EMAIL = "riya10.work@gmail.com";
const PHONE = "+91-7985554502";
const LINKEDIN = "https://www.linkedin.com/in/riyakesharwani/";
const GITHUB = "https://github.com/riya102002";

export function Contact() {
  const ref = useReveal<HTMLDivElement>();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") || "");
    const email = String(form.get("email") || "");
    const message = String(form.get("message") || "");
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(
      `${message}\n\n— ${name}\nReply-to: ${email}`,
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="relative py-28">
      <div ref={ref} className="reveal mx-auto max-w-6xl px-4">
        <SectionLabel>07 / Contact</SectionLabel>
        <h2 className="mt-3 font-display text-3xl font-bold sm:text-5xl">
          Let's turn data into <span className="text-gradient">decisions</span>.
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Open to Data Analyst roles, internships and meaningful collaborations.
          Drop a message — I reply within 24 hours.
        </p>

        <div className="mt-12 grid gap-6 lg:grid-cols-5">
          <div className="glass-card rounded-2xl p-6 lg:col-span-2">
            <div className="font-mono text-[10px] uppercase tracking-widest text-teal">
              ◉ command center
            </div>
            <ul className="mt-5 space-y-4 text-sm">
              <ChannelRow icon={<Mail className="h-4 w-4" />} label="Email" value={EMAIL} href={`mailto:${EMAIL}`} />
              <ChannelRow icon={<Phone className="h-4 w-4" />} label="Phone" value={PHONE} href={`tel:${PHONE.replace(/[^+\d]/g, "")}`} />
              <ChannelRow icon={<Linkedin className="h-4 w-4" />} label="LinkedIn" value="in/riyakesharwani" href={LINKEDIN} />
              <ChannelRow icon={<Github className="h-4 w-4" />} label="GitHub" value="riya102002" href={GITHUB} />
            </ul>

            <div className="mt-8 rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="font-mono text-[10px] uppercase tracking-widest text-violet">
                location
              </div>
              <div className="mt-1 text-sm">Prayagraj, Uttar Pradesh, India</div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-6 lg:col-span-3">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name" name="name" required />
              <Field label="Email" name="email" type="email" required />
            </div>
            <div className="mt-4">
              <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                Message
              </label>
              <textarea
                name="message"
                required
                rows={6}
                className="mt-1.5 w-full resize-none rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-teal/50 focus:outline-none focus:ring-2 focus:ring-teal/20"
                placeholder="Tell me about the role, project, or idea…"
              />
            </div>
            <button
              type="submit"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal to-violet px-5 py-3 text-sm font-semibold text-background shadow-[0_0_30px_-6px_var(--teal)] transition-transform hover:scale-[1.02]"
            >
              <Send className="h-4 w-4" /> Send Message
            </button>
          </form>
        </div>
      </div>

      <footer className="mt-24 border-t border-white/5 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 text-xs text-muted-foreground sm:flex-row">
          <span>© {new Date().getFullYear()} Riya Kesharwani · Crafted with data and care.</span>
          <span className="font-mono">v1.0 · dark intelligence build</span>
        </div>
      </footer>
    </section>
  );
}

function ChannelRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <li>
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel="noopener noreferrer"
        className="group flex items-center gap-3 rounded-xl border border-transparent p-3 -mx-3 transition-all hover:border-white/10 hover:bg-white/5"
      >
        <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-teal/20 to-violet/20 text-teal">
          {icon}
        </span>
        <div className="min-w-0">
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            {label}
          </div>
          <div className="truncate text-sm text-foreground group-hover:text-teal">
            {value}
          </div>
        </div>
      </a>
    </li>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-teal/50 focus:outline-none focus:ring-2 focus:ring-teal/20"
      />
    </div>
  );
}
