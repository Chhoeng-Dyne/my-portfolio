import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/cv")({
  head: () => ({
    meta: [
      { title: "CV — Elias Moreau" },
      { name: "description", content: "Education, work experience and skills of Elias Moreau." },
      { property: "og:title", content: "CV — Elias Moreau" },
      { property: "og:description", content: "Education, work experience and skills of Elias Moreau." },
    ],
  }),
  component: CV,
});

const experience = [
  {
    role: "Senior Product Designer",
    org: "Northwind Labs",
    period: "2023 — Present",
    notes: [
      "Lead designer for a B2B analytics platform used by 40k+ operators.",
      "Built and maintained the internal design system across 6 product teams.",
      "Partnered with engineering to ship 12+ major features per year.",
    ],
  },
  {
    role: "Design Engineer",
    org: "Studio Faubourg",
    period: "2020 — 2023",
    notes: [
      "Designed and built editorial websites for cultural institutions.",
      "Prototyped motion systems in code; mentored two junior designers.",
    ],
  },
  {
    role: "Front-end Developer",
    org: "Freelance",
    period: "2017 — 2020",
    notes: [
      "Shipped 20+ marketing sites and micro-products for early-stage founders.",
      "Focused on performance, accessibility, and long-term maintainability.",
    ],
  },
];

const education = [
  { degree: "MFA, Interaction Design", org: "School of Visual Arts", period: "2016 — 2018" },
  { degree: "BA, Visual Communication", org: "Université Paris 8", period: "2012 — 2015" },
];

const skills = {
  Craft: ["Interface Design", "Design Systems", "Prototyping", "Typography", "Brand"],
  Code: ["TypeScript", "React", "Tailwind", "Framer Motion", "Node.js"],
  Tools: ["Figma", "Linear", "Notion", "After Effects", "Blender"],
  Soft: ["Facilitation", "Writing", "Mentorship", "Cross-functional leadership"],
};

function CV() {
  return (
    <div className="container-x pt-12 pb-24 md:pt-20">
      {/* Header */}
      <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
        <div className="min-w-0">
          <p className="eyebrow">Curriculum Vitae</p>
          <h1 className="mt-4 text-6xl md:text-8xl leading-[0.95]">
            The <span className="italic text-accent">long</span><br />form.
          </h1>
        </div>
        <a href="/cv.pdf" download className="btn-primary shrink-0">
          Download CV (PDF)
          <span aria-hidden>↓</span>
        </a>
      </div>

      {/* Experience */}
      <section className="mt-24">
        <div className="grid gap-6 md:grid-cols-[12rem_minmax(0,1fr)] md:gap-16">
          <div>
            <p className="eyebrow">01 · Experience</p>
          </div>
          <ol className="space-y-14">
            {experience.map((e) => (
              <li key={e.role} className="grid gap-3 md:grid-cols-[minmax(0,1fr)_auto] md:items-baseline">
                <div className="min-w-0">
                  <h3 className="text-2xl md:text-3xl">{e.role}</h3>
                  <p className="mt-1 text-muted-foreground">{e.org}</p>
                  <ul className="mt-4 space-y-2 text-foreground/85">
                    {e.notes.map((n) => (
                      <li key={n} className="flex gap-3">
                        <span className="text-accent mt-2 h-px w-4 shrink-0 bg-accent" />
                        <span>{n}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="font-mono text-xs text-muted-foreground shrink-0 md:text-right">{e.period}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Education */}
      <section className="mt-24 border-t border-border pt-16">
        <div className="grid gap-6 md:grid-cols-[12rem_minmax(0,1fr)] md:gap-16">
          <p className="eyebrow">02 · Education</p>
          <ol className="space-y-10">
            {education.map((e) => (
              <li key={e.degree} className="grid gap-2 md:grid-cols-[minmax(0,1fr)_auto] md:items-baseline">
                <div className="min-w-0">
                  <h3 className="text-xl md:text-2xl">{e.degree}</h3>
                  <p className="mt-1 text-muted-foreground">{e.org}</p>
                </div>
                <p className="font-mono text-xs text-muted-foreground md:text-right">{e.period}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Skills */}
      <section className="mt-24 border-t border-border pt-16">
        <div className="grid gap-6 md:grid-cols-[12rem_minmax(0,1fr)] md:gap-16">
          <p className="eyebrow">03 · Skills</p>
          <div className="grid gap-10 sm:grid-cols-2">
            {Object.entries(skills).map(([group, items]) => (
              <div key={group}>
                <h3 className="font-display text-lg mb-4">{group}</h3>
                <ul className="flex flex-wrap gap-2">
                  {items.map((s) => (
                    <li
                      key={s}
                      className="rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-mono hover:border-foreground hover:-translate-y-0.5 transition-all"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
