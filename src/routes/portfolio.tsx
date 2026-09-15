import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Projects — Chhoeng Dyne" },
      {
        name: "description",
        content:
          "Engineering projects by Chhoeng Dyne: Android applications, modern web platforms, and software architecture research.",
      },
      { property: "og:title", content: "Projects — Chhoeng Dyne" },
      {
        property: "og:description",
        content:
          "Engineering projects: Android Kotlin apps, modern web platforms, and research reports.",
      },
    ],
  }),
  component: Portfolio,
});

type Category = "All" | "Mobile" | "Web" | "Research";

type Project = {
  id: string;
  title: string;
  year: string;
  category: Exclude<Category, "All">;
  description: string;
  stack: string[];
  link: string; // <-- PASTE YOUR GITHUB OR PDF LINK HERE
  linkType: "github" | "pdf";
};

// =========================================================================
// 📌 CHHOENG DYNE — FEATURED PROJECTS & RESEARCH
// =========================================================================
const projects: Project[] = [
  // --- Mobile Apps ---
  {
    id: "uniwiki-mobile",
    title: "UniWiki — Mobile Campus Knowledge Hub",
    year: "2025",
    category: "Mobile",
    description:
      "Cross-platform mobile application engineered with Flutter and Dart. Serves as an interactive university wiki and knowledge-sharing platform for students to access academic resources, campus information, and community guides.",
    stack: ["Flutter", "Dart", "Android", "Cross-Platform", "Material Design"],
    link: "https://github.com/Chhoeng-Dyne/uniwiki",
    linkType: "github",
  },
  {
    id: "banking-mobile-app",
    title: "Banking Mobile Application",
    year: "2025",
    category: "Mobile",
    description:
      "Comprehensive mobile banking app developed for the university final exam. Implements secure account management, transaction flows, balance tracking, and intuitive Material Design interfaces.",
    stack: ["Android", "Kotlin", "Room Database", "Material Design", "Security"],
    link: "https://github.com/OuThorninvithyea/Banking-Mobile-app-Final-Exam-",
    linkType: "github",
  },

  // --- Web Applications ---
  {
    id: "my-blog-website",
    title: "Personal Developer Blog Platform",
    year: "2025",
    category: "Web",
    description:
      "Modern, responsive web platform designed for publishing software development articles, engineering tutorials, and technical insights with clean typography and fast client navigation.",
    stack: ["React", "TypeScript", "Tailwind CSS", "Markdown", "Responsive UI"],
    link: "https://github.com/Chhoeng-Dyne/My-Blog-Website",
    linkType: "github",
  },
  {
    id: "sunsafe-project",
    title: "SunSafe — UV Health & Weather Advisory",
    year: "2025",
    category: "Web",
    description:
      "Public health awareness web application providing real-time solar UV radiation tracking, sun safety recommendations, and localized environmental data visualization.",
    stack: ["Web Technologies", "JavaScript", "Weather & UV APIs", "CSS3", "UX Design"],
    link: "https://github.com/Chhoeng-Dyne/SunSafe-Project",
    linkType: "github",
  },

  // --- Research Reports & System Architecture Documents ---
  {
    id: "smart-city-traffic-system",
    title: "Smart City Traffic Management System (SCTMS)",
    year: "2026",
    category: "Research",
    description:
      "34-page software requirements engineering and architectural feasibility study under Limkokwing University. Proposes an AI-assisted adaptive traffic signal control system with IoT edge computing and emergency vehicle preemption.",
    stack: ["Software Architecture", "IoT & Edge Computing", "UML Class/Activity Diagrams", "SRED Report", "PDF Document"],
    link: "/projects/smart-city-traffic-management-system.pdf",
    linkType: "pdf",
  },
  {
    id: "hotel-reservation-database-system",
    title: "Hotel Reservation Management System",
    year: "2025",
    category: "Research",
    description:
      "27-page comprehensive relational database engineering project under Limkokwing University. Features complete ERD modeling, 3NF normalization, full SQL DDL schema implementation, and multi-table analytical query evaluation.",
    stack: ["Database Design", "ERD Modeling", "3NF Normalization", "Relational SQL", "Data Dictionary", "PDF Document"],
    link: "/projects/hotel-reservation-database-system.pdf",
    linkType: "pdf",
  },
];

const categories: Category[] = ["All", "Mobile", "Web", "Research"];

function Portfolio() {
  const [filter, setFilter] = useState<Category>("All");

  const shown = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="container-x pt-12 pb-24 md:pt-20">
      {/* Header */}
      <div>
        <span className="eyebrow">Projects</span>
        <h1 className="mt-2 text-4xl sm:text-6xl font-bold tracking-tight text-foreground">
          Selected engineering work.
        </h1>
        <p className="mt-4 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
          A collection of projects covering native mobile development with Kotlin,
          modern full-stack web applications, and software architecture research.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="mt-10 flex flex-wrap items-center gap-2 border-b border-border pb-4">
        {categories.map((c) => {
          const isActive = c === filter;
          const count = c === "All" ? projects.length : projects.filter((p) => p.category === c).length;
          return (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-all cursor-pointer ${
                isActive
                  ? "bg-foreground text-background shadow-xs font-semibold"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              {c}
              <span className="ml-1.5 font-mono text-[11px] opacity-70">
                ({count})
              </span>
            </button>
          );
        })}
      </div>

      {/* Projects Grid or Clean Empty State */}
      <div className="mt-8">
        {shown.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-border bg-surface/60 p-12 text-center my-8">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-muted text-foreground/70 mb-3 text-lg">
              📂
            </div>
            <h3 className="text-base font-semibold text-foreground">No projects found</h3>
            <p className="mt-1 text-sm text-muted-foreground max-w-sm mx-auto">
              There are currently no projects listed in the &ldquo;{filter}&rdquo; category.
            </p>
            {filter !== "All" && (
              <button
                onClick={() => setFilter("All")}
                className="btn-ghost text-xs mt-5 cursor-pointer"
              >
                View all projects
              </button>
            )}
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {shown.map((p) => (
              <article
                key={p.id}
                className="flex flex-col justify-between rounded-xl border border-border bg-surface p-6 transition-all duration-200 hover:border-foreground/40 hover:shadow-card shadow-xs group"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="rounded-md border border-border/80 bg-background px-2.5 py-1 text-[10px] font-mono font-medium uppercase tracking-wider text-accent">
                      {p.category}
                    </span>
                    <span className="font-mono text-xs text-muted-foreground">
                      {p.year}
                    </span>
                  </div>

                  <h2 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                    {p.title}
                  </h2>

                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {p.description}
                  </p>
                </div>

                <div className="mt-6 border-t border-border/70 pt-5">
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-md bg-muted px-2 py-0.5 text-[11px] font-mono text-foreground/80"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  <div>
                    {p.linkType === "github" ? (
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-primary w-full text-xs"
                      >
                        <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                        <span>View Repository ↗</span>
                      </a>
                    ) : (
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-primary w-full text-xs"
                      >
                        <span>Open Document (PDF) ↓</span>
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

