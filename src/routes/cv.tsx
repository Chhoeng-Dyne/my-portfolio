import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/cv")({
  head: () => ({
    meta: [
      { title: "CV — Chhoeng Dyne" },
      {
        name: "description",
        content:
          "Curriculum Vitae of Chhoeng Dyne, Software Engineering student at Limkokwing University specializing in Android, modern web, and software architecture.",
      },
      { property: "og:title", content: "CV — Chhoeng Dyne" },
      {
        property: "og:description",
        content:
          "Education, coursework, technical capabilities, and resume of Chhoeng Dyne.",
      },
    ],
  }),
  component: CV,
});

const education = [
  {
    degree: "Bachelor of Software Engineering",
    institution: "Limkokwing University of Creative Technology",
    location: "Phnom Penh, Cambodia",
    period: "2024 — 2027",
    description:
      "Comprehensive program focused on software systems, full-stack web engineering, native mobile development, discrete mathematics, and object-oriented design.",
  },
  {
    degree: "High School Diploma",
    institution: "Dam Dek High School",
    location: "Cambodia",
    period: "2018 — 2023",
    description: "Achieved Grade B in the national/international examinations.",
  },
];

const coursework = [
  {
    category: "Software Engineering & Architecture",
    courses: [
      "Software System Architecture",
      "Object-Oriented Analysis & Design (OOAD)",
      "Object-Oriented Programming (OOP)",
      "Discrete Structures & Logic",
    ],
  },
  {
    category: "Systems & Web Programming",
    courses: [
      "Front-End Web Programming (HTML, CSS, JavaScript)",
      "Computer Programming 1 & 2 (C++, Data Structures, Algorithms)",
      "Mathematics for Computing",
      "Introduction to Information Technology",
    ],
  },
  {
    category: "Design, Graphics & Business",
    courses: [
      "Computer Graphics 1 & 2 (Adobe Photoshop, Adobe InDesign)",
      "Design Creativity & Visual Layout",
      "Communication Skills & Professional English",
      "Introduction to Business & Management",
    ],
  },
];

const skillCategories = {
  "Languages & Core": ["Dart", "Kotlin", "JavaScript", "TypeScript", "C++", "HTML5 & CSS3", "SQL / SQLite"],
  "Frameworks & Libraries": ["Flutter", "React", "Jetpack Compose", "Vue.js", "Node.js", "Tailwind CSS", "Bootstrap"],
  "Tools & Platforms": ["Android Studio", "Git & GitHub", "VS Code", "Postman", "Figma", "Adobe Photoshop", "Adobe InDesign"],
  "Core Competencies": ["System Architecture", "Object-Oriented Design", "Clean Code & Testing", "Team Collaboration", "Conversational English", "Problem Solving"],
};

function CV() {
  return (
    <div className="container-x pt-12 pb-24 md:pt-20">
      {/* Header */}
      <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
        <div className="min-w-0">
          <span className="eyebrow">Curriculum Vitae</span>
          <h1 className="mt-2 text-4xl sm:text-6xl font-bold tracking-tight text-foreground">
            Academic &amp; professional profile.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Software engineering student at Limkokwing University, driven by clean code,
            intuitive interface design, and scalable systems. Ready to contribute, learn,
            and build meaningful software.
          </p>
        </div>

        <div className="flex flex-col gap-3 shrink-0 sm:flex-row md:flex-col">
          <a
            href="/cv.pdf"
            download="Chhoeng_Dyne_CV.pdf"
            className="btn-primary inline-flex items-center justify-center gap-3 text-sm px-6 py-3.5 shadow-soft"
          >
            <span>Download Official CV (PDF)</span>
            <span aria-hidden className="text-base font-bold">↓</span>
          </a>
          <p className="text-[11px] font-mono text-muted-foreground text-center md:text-right">
            Sen Sok, Phnom Penh · GMT+7
          </p>
        </div>
      </div>

      {/* Quick Summary Strip */}
      <div className="mt-16 grid grid-cols-2 gap-4 rounded-xl border border-border bg-surface p-6 sm:grid-cols-4 md:mt-20">
        <div>
          <span className="eyebrow block">Status</span>
          <span className="mt-1 block font-medium text-foreground">Available for Internship</span>
        </div>
        <div>
          <span className="eyebrow block">Degree</span>
          <span className="mt-1 block font-medium text-foreground">B.S. Software Engineering</span>
        </div>
        <div>
          <span className="eyebrow block">Specialization</span>
          <span className="mt-1 block font-medium text-foreground">Android &amp; Modern Web</span>
        </div>
        <div>
          <span className="eyebrow block">Location</span>
          <span className="mt-1 block font-medium text-foreground">Phnom Penh, Cambodia</span>
        </div>
      </div>

      {/* 01 · Education */}
      <section className="mt-24">
        <div className="grid gap-6 md:grid-cols-[14rem_minmax(0,1fr)] md:gap-16">
          <div>
            <p className="eyebrow">01 · Education</p>
          </div>
          <ol className="space-y-12">
            {education.map((item) => (
              <li key={item.degree} className="border-b border-border/60 pb-10 last:border-none last:pb-0">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="text-2xl font-display md:text-3xl text-foreground">{item.degree}</h3>
                  <span className="font-mono text-xs text-muted-foreground shrink-0">{item.period}</span>
                </div>
                <p className="mt-1.5 text-base font-medium text-accent">{item.institution}</p>
                <p className="mt-1 text-xs text-muted-foreground font-mono">{item.location}</p>
                <p className="mt-4 text-muted-foreground leading-relaxed max-w-2xl">{item.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 02 · Academic Coursework */}
      <section className="mt-24 border-t border-border pt-16">
        <div className="grid gap-6 md:grid-cols-[14rem_minmax(0,1fr)] md:gap-16">
          <div>
            <p className="eyebrow">02 · Coursework</p>
            <p className="mt-2 text-xs text-muted-foreground font-mono">
              Key modules completed and underway at Limkokwing University
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {coursework.map((group) => (
              <div key={group.category} className="rounded-lg border border-border bg-surface p-5">
                <h4 className="font-display text-base font-medium text-foreground mb-4 border-b border-border/60 pb-2">
                  {group.category}
                </h4>
                <ul className="space-y-2.5 text-sm text-foreground/85">
                  {group.courses.map((course) => (
                    <li key={course} className="flex items-start gap-2">
                      <span className="text-accent text-xs mt-1">✦</span>
                      <span>{course}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 03 · Skills & Capabilities */}
      <section className="mt-24 border-t border-border pt-16">
        <div className="grid gap-6 md:grid-cols-[14rem_minmax(0,1fr)] md:gap-16">
          <div>
            <p className="eyebrow">03 · Skills</p>
            <p className="mt-2 text-xs text-muted-foreground font-mono">
              Technologies, libraries, design tools, and practices
            </p>
          </div>
          <div className="grid gap-10 sm:grid-cols-2">
            {Object.entries(skillCategories).map(([group, items]) => (
              <div key={group}>
                <h3 className="font-display text-lg mb-4 text-foreground">{group}</h3>
                <ul className="flex flex-wrap gap-2">
                  {items.map((s) => (
                    <li
                      key={s}
                      className="rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs font-mono hover:border-foreground hover:-translate-y-0.5 transition-all cursor-default shadow-xs"
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

      {/* 04 · Career Objective */}
      <section className="mt-24 border-t border-border pt-16">
        <div className="grid gap-6 md:grid-cols-[14rem_minmax(0,1fr)] md:gap-16">
          <div>
            <p className="eyebrow">04 · Objective</p>
          </div>
          <div className="rounded-xl border border-border bg-surface p-8 max-w-3xl">
            <h3 className="font-display text-2xl mb-3 text-foreground">
              Internship &amp; Engineering Goals
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              Seeking an internship in software engineering, mobile (Android/Kotlin), or full-stack web
              development. Passionate about learning cutting-edge architectures, shipping reliable features,
              and contributing enthusiastically to high-impact engineering teams.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 items-center">
              <a href="mailto:dynechhoeng@gmail.com" className="btn-primary text-xs">
                Reach out directly →
              </a>
              <a
                href="/cv.pdf"
                download="Chhoeng_Dyne_CV.pdf"
                className="btn-ghost text-xs"
              >
                Download PDF
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
