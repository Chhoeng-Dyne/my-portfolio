import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
import p5 from "@/assets/project-5.jpg";
import p6 from "@/assets/project-6.jpg";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Chhoeng Dyne" },
      { name: "description", content: "Selected projects by Chhoeng Dyne: Android and web engineering work." },
      { property: "og:title", content: "Portfolio — Chhoeng Dyne" },
      { property: "og:description", content: "Selected projects: web, product design, video, and brand work." },
    ],
  }),
  component: Portfolio,
});

type Category = "All" | "Web" | "Design" | "Video";

type Project = {
  title: string;
  year: string;
  category: Exclude<Category, "All">;
  description: string;
  stack: string[];
  link: string;
  image: string;
};

const projects: Project[] = [
  { title: "Meridian", year: "2025", category: "Design", description: "A visual identity and print system for an independent design magazine.", stack: ["Brand", "Print", "Type"], link: "#", image: p1 },
  { title: "Northwind Console", year: "2024", category: "Web", description: "Analytics dashboard rebuilt from the ground up — 40k active operators.", stack: ["React", "TypeScript", "D3"], link: "#", image: p2 },
  { title: "Étoile Studio", year: "2024", category: "Web", description: "Editorial e-commerce site for a Paris-based fashion label.", stack: ["Next.js", "Shopify", "GSAP"], link: "#", image: p3 },
  { title: "Golden Hour", year: "2023", category: "Video", description: "Short-form documentary series on independent filmmakers.", stack: ["Direction", "Edit", "Color"], link: "#", image: p4 },
  { title: "Fern & Field", year: "2023", category: "Design", description: "Brand identity and packaging for a small-batch stationery house.", stack: ["Brand", "Packaging"], link: "#", image: p5 },
  { title: "Bloom OS", year: "2022", category: "Web", description: "A colorful, playful mobile app for daily creative prompts.", stack: ["React Native", "Motion"], link: "#", image: p6 },
];

const cats: Category[] = ["All", "Web", "Design", "Video"];

function Portfolio() {
  const [filter, setFilter] = useState<Category>("All");
  const [active, setActive] = useState<Project | null>(null);

  const shown = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  return (
    <div className="container-x pt-12 pb-24 md:pt-20">
      {/* Header */}
      <div>
        <p className="eyebrow">Selected Work</p>
        <h1 className="mt-4 text-6xl md:text-8xl leading-[0.95]">
          Things I&rsquo;ve<br />
          <span className="italic text-accent">made.</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg text-muted-foreground">
          A rotating cross-section of client work, side projects, and
          collaborations. Tap any card for a closer look.
        </p>
      </div>

      {/* Filters */}
      <div className="mt-12 flex flex-wrap items-center gap-2 border-b border-border pb-4">
        {cats.map((c) => {
          const isActive = c === filter;
          return (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`rounded-full px-4 py-2 text-sm transition-all ${
                isActive
                  ? "bg-ink text-background"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              style={isActive ? { background: "var(--ink)", color: "var(--background)" } : undefined}
            >
              {c}
              <span className="ml-2 font-mono text-[10px] opacity-60">
                {c === "All" ? projects.length : projects.filter((p) => p.category === c).length}
              </span>
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <div className="mt-10 grid gap-x-6 gap-y-16 md:grid-cols-2">
        {shown.map((p, i) => (
          <button
            key={p.title}
            onClick={() => setActive(p)}
            className={`group text-left ${i % 2 === 1 ? "md:mt-16" : ""}`}
          >
            <div className="relative overflow-hidden rounded-md bg-muted aspect-[4/3]">
              <img
                src={p.image}
                alt={p.title}
                loading="lazy"
                width={1200}
                height={900}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/10 transition-colors" />
              <div className="absolute right-4 top-4 rounded-full bg-background/90 backdrop-blur px-3 py-1 text-[10px] font-mono uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                View →
              </div>
            </div>
            <div className="mt-5 flex items-baseline justify-between gap-4">
              <h3 className="font-display text-2xl md:text-3xl">{p.title}</h3>
              <span className="font-mono text-xs text-muted-foreground shrink-0">
                {p.category} · {p.year}
              </span>
            </div>
            <p className="mt-2 text-muted-foreground max-w-lg">{p.description}</p>
            <ul className="mt-3 flex flex-wrap gap-x-2 gap-y-1">
              {p.stack.map((s, idx) => (
                <li key={s} className="text-[11px] font-mono text-muted-foreground flex items-center gap-2">
                  {idx > 0 && <span className="text-muted-foreground/40">·</span>}
                  {s}
                </li>
              ))}
            </ul>
          </button>
        ))}
      </div>

      {/* Modal / Lightbox */}
      {active && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/70 backdrop-blur-sm p-4 md:p-10 animate-in fade-in duration-300"
          onClick={() => setActive(null)}
        >
          <div
            className="relative w-full max-w-5xl overflow-hidden rounded-lg bg-background shadow-lift animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActive(null)}
              aria-label="Close"
              className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-background/90 backdrop-blur border border-border hover:bg-accent hover:text-accent-foreground transition"
            >
              ✕
            </button>
            <img src={active.image} alt={active.title} className="w-full max-h-[65vh] object-cover" />
            <div className="p-6 md:p-10">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h2 className="font-display text-3xl md:text-4xl">{active.title}</h2>
                <span className="font-mono text-xs text-muted-foreground">
                  {active.category} · {active.year}
                </span>
              </div>
              <p className="mt-4 text-lg text-foreground/85 max-w-2xl">{active.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {active.stack.map((s) => (
                  <span key={s} className="rounded-full border border-border px-3 py-1 text-xs font-mono">{s}</span>
                ))}
              </div>
              <a href={active.link} target="_blank" rel="noreferrer" className="btn-primary mt-8">
                Visit project <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
