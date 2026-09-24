import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Skills } from "@/components/site/Skills";
import { Projects } from "@/components/site/Projects";
import { Publications } from "@/components/site/Publications";
import { Awards } from "@/components/site/Awards";
import { Certifications } from "@/components/site/Certifications";
import { Experience } from "@/components/site/Experience";
import { Contact } from "@/components/site/Contact";
import { CursorGlow } from "@/components/site/CursorGlow";
import { ScrollProgress } from "@/components/site/ScrollProgress";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Riya Kesharwani — Strategic Intelligence & Data Visualization" },
      {
        name: "description",
        content:
          "Portfolio of Riya Kesharwani — Strategic Intelligence and Data Visualization Associate specializing in analytics, predictive modeling, Python, SQL, Power BI and Tableau.",
      },
      { property: "og:title", content: "Riya Kesharwani — Strategic Intelligence Portfolio" },
      {
        property: "og:description",
        content:
          "Analytics, predictive modeling, data visualization, research, projects, awards and professional experience.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
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
        <Awards />
        <Certifications />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}
