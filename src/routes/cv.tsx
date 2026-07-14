import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/cv")({
  head: () => ({
    meta: [
      { title: "CV — Chhoeng Dyne" },
      { name: "description", content: "Education, work experience and skills of Chhoeng Dyne, a software engineer focused on Android and web." },
      { property: "og:title", content: "CV — Chhoeng Dyne" },
      { property: "og:description", content: "Education, work experience and skills of a software engineer focused on Android and web." },
    ],
  }),
  component: CV,
});

const educationAndExperience = [
  {
    title: "Bachelor of Software Engineering",
    org: "Limkokwing University of Creative Technology",
    period: "2024 — 2027",
  },
  {
    title: "High School Diploma",
    org: "Dam Dek High School",
    period: "2018 — 2023",
  },
];

const skills = {
  Android: ["Kotlin", "Jetpack Compose", "Material Design", "Android SDK", "Room / SQLite"],
  Web: ["JavaScript", "React", "Vue.js", "Node.js", "Tailwind CSS", "Bootstrap"],
  Tools: ["Android Studio", "Git", "VS Code", "Figma", "Postman"],
  Soft: ["Problem solving", "Code review", "Mentorship", "Cross-functional collaboration"],
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

      {/* Education & Experience */}
      <section className="mt-24">
        <div className="grid gap-6 md:grid-cols-[12rem_minmax(0,1fr)] md:gap-16">
          <div>
            <p className="eyebrow">01 · Education & Experience</p>
          </div>
          <ol className="space-y-10">
            {educationAndExperience.map((e) => (
              <li key={e.title} className="grid gap-2 md:grid-cols-[minmax(0,1fr)_auto] md:items-baseline">
                <div className="min-w-0">
                  <h3 className="text-2xl md:text-3xl">{e.title}</h3>
                  <p className="mt-1 text-muted-foreground">{e.org}</p>
                </div>
                <p className="font-mono text-xs text-muted-foreground shrink-0 md:text-right">{e.period}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Skills */}
      <section className="mt-24 border-t border-border pt-16">
        <div className="grid gap-6 md:grid-cols-[12rem_minmax(0,1fr)] md:gap-16">
          <p className="eyebrow">02 · Skills</p>
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
