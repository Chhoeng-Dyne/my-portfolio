import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: About,
});

function About() {
  return (
    <div className="space-y-24 md:space-y-32">
      {/* Hero Section */}
      <section className="container-x pt-12 md:pt-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_minmax(0,0.8fr)] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-mono text-muted-foreground shadow-xs mb-6">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for Software Engineering Internships</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.08]">
              Hi, I&rsquo;m Chhoeng Dyne.
            </h1>

            <p className="mt-4 text-xl sm:text-2xl font-medium text-foreground/80 leading-relaxed">
              Software engineering student building clean native Android apps and modern web platforms.
            </p>

            <p className="mt-4 max-w-xl text-base text-muted-foreground leading-relaxed">
              Majoring in Software Engineering at Limkokwing University. Focused on clean architecture,
              Kotlin &amp; Jetpack Compose for mobile, and modern component-driven web apps with React,
              TypeScript, and Node.js.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link to="/portfolio" className="btn-primary">
                Explore Projects →
              </Link>
              <Link to="/cv" className="btn-ghost">
                View CV / Profile
              </Link>
              <a
                href="/cv.pdf"
                download="Chhoeng_Dyne_CV.pdf"
                className="btn-ghost text-xs text-muted-foreground hover:text-foreground"
              >
                Download PDF ↓
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative h-72 w-72 sm:h-84 sm:w-84 overflow-hidden rounded-2xl border border-border bg-muted shadow-card transition-all duration-300 hover:shadow-lift">
              <img
                src="/headshot.jpg"
                alt="Chhoeng Dyne portrait"
                width={800}
                height={800}
                className="h-full w-full object-cover object-top transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Engineering Disciplines */}
      <section className="container-x">
        <div className="border-t border-border pt-16">
          <span className="eyebrow">Expertise</span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            What I build &amp; focus on.
          </h2>
          <p className="mt-2 text-sm text-muted-foreground max-w-xl">
            Combining rigorous academic foundations with practical software engineering and clean interface design.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-border bg-surface p-6 shadow-xs transition hover:border-foreground/30">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-foreground text-background font-mono text-xs font-bold mb-4">
                01
              </div>
              <h3 className="text-lg font-semibold text-foreground">Android Mobile Apps</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Native Android applications engineered with Kotlin, Jetpack Compose, and Material 3 design.
                Implementing MVVM architecture, StateFlow, and offline-first Room persistence.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-surface p-6 shadow-xs transition hover:border-foreground/30">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-foreground text-background font-mono text-xs font-bold mb-4">
                02
              </div>
              <h3 className="text-lg font-semibold text-foreground">Modern Web Engineering</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Responsive, accessible web applications built with React, Vue.js, TypeScript, and Tailwind CSS.
                Focusing on component modularity, API integration, and clean user experience.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-surface p-6 shadow-xs transition hover:border-foreground/30 sm:col-span-2 lg:col-span-1">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-foreground text-background font-mono text-xs font-bold mb-4">
                03
              </div>
              <h3 className="text-lg font-semibold text-foreground">System Architecture &amp; C++</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Deep theoretical and practical foundation in Object-Oriented Analysis &amp; Design (OOAD),
                discrete mathematics, data structures, algorithms, and software design patterns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Matrix */}
      <section className="container-x">
        <div className="rounded-2xl border border-border bg-surface p-8 md:p-12 shadow-xs">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-border/80">
            <div>
              <span className="eyebrow">Technologies</span>
              <h3 className="mt-1 text-2xl font-bold tracking-tight text-foreground">
                Core technical toolkit.
              </h3>
            </div>
            <Link to="/cv" className="text-xs font-mono text-muted-foreground hover:text-foreground">
              View full coursework &amp; skills in CV →
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap gap-2.5">
            {[
              "Flutter",
              "Dart",
              "Kotlin",
              "Android SDK",
              "Jetpack Compose",
              "Material Design 3",
              "React",
              "TypeScript",
              "JavaScript",
              "Vue.js",
              "Node.js",
              "C++",
              "Tailwind CSS",
              "HTML5 / CSS3",
              "Git & GitHub",
              "Figma",
              "Adobe Photoshop",
              "Adobe InDesign",
              "REST APIs",
              "Software Architecture",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-border bg-background px-3.5 py-1.5 text-xs font-mono font-medium text-foreground/85 shadow-2xs hover:border-foreground/40 transition"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
