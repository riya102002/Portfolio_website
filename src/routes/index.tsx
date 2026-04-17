import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Skills } from "@/components/site/Skills";
import { Projects } from "@/components/site/Projects";
import { Publications } from "@/components/site/Publications";
import { Certifications } from "@/components/site/Certifications";
import { Experience } from "@/components/site/Experience";
import { Contact } from "@/components/site/Contact";
import { CursorGlow } from "@/components/site/CursorGlow";
import { ScrollProgress } from "@/components/site/ScrollProgress";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Riya Kesharwani — Data Analyst | Insight Builder" },
      {
        name: "description",
        content:
          "Portfolio of Riya Kesharwani — Data Analyst skilled in Python, SQL, Power BI and Tableau. Published IEEE researcher turning data into business decisions.",
      },
      { property: "og:title", content: "Riya Kesharwani — Data Analyst Portfolio" },
      {
        property: "og:description",
        content:
          "Dark-themed analytics portfolio: projects, research, certifications and experience.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Publications />
        <Certifications />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}
