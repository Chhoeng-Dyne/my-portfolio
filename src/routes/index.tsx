import { createFileRoute, Link } from "@tanstack/react-router";
import headshotAsset from "@/assets/headshot.jpg.asset.json";

export const Route = createFileRoute("/")({
  component: About,
});

function About() {
  return (
    <>
      {/* Hero */}
      <section className="container-x pt-12 pb-24 md:pt-20 md:pb-32">
        <div className="grid gap-12 md:grid-cols-[minmax(0,1fr)_auto] md:items-end md:gap-16">
          <div className="min-w-0">
            <p className="eyebrow">Portfolio · 2026</p>
            <h1 className="mt-6 text-[clamp(3rem,9vw,7.5rem)] leading-[0.95] tracking-tighter">
              Chhoeng<br />
              <span className="italic text-accent">Dyne.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground md:text-xl">
              Software engineer building clean Android apps and modern web
              experiences with Kotlin, Jetpack Compose, React, Vue, and Node.js.
            </p>
          </div>
          <div className="relative shrink-0">
            <div className="h-56 w-56 overflow-hidden rounded-full border border-border shadow-soft md:h-72 md:w-72">
              <img
                src={headshotAsset.url}
                alt="Portrait of Chhoeng Dyne"
                width={1024}
                height={1024}
                className="h-full w-full object-cover grayscale"
              />
            </div>
            <div className="absolute -bottom-3 -left-3 rounded-full bg-background px-4 py-2 text-xs font-mono border border-border shadow-soft">
              Available for work
              <span className="ml-2 inline-block h-2 w-2 rounded-full bg-accent animate-pulse" />
            </div>
          </div>
        </div>

        {/* Tagline strip */}
        <div className="mt-24 border-y border-border py-8 md:py-12">
          <p className="font-display text-2xl italic leading-relaxed md:text-4xl">
            &ldquo;Design should feel like a good conversation — clear,
            unhurried, and a little bit surprising.&rdquo;
          </p>
        </div>
      </section>

      {/* About */}
      <section className="container-x pb-24">
        <div className="grid gap-12 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] md:gap-24">
          <div>
            <p className="eyebrow">About</p>
            <h2 className="mt-4 text-3xl md:text-4xl">A short bio.</h2>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-foreground/85">
            <p>
              I&rsquo;m a software engineer focused on Android and web development.
              I build mobile apps with Kotlin, Jetpack Compose, and Material Design,
              and craft responsive web apps with React, Vue.js, Node.js, Tailwind,
              and Bootstrap.
            </p>
            <p>
              My approach is practical: clean architecture, readable code, and
              interfaces that feel fast and intuitive. I care about performance,
              accessibility, and shipping features that actually solve problems.
            </p>
            <p>
              When I&rsquo;m not coding, you&rsquo;ll find me exploring new tools,
              refining UI patterns, or chasing down a tricky bug.
            </p>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap gap-4">
          <Link to="/portfolio" className="btn-primary">
            View selected work
            <span aria-hidden>→</span>
          </Link>
          <Link to="/cv" className="btn-ghost">
            Read my CV
          </Link>
        </div>
      </section>

      {/* Marquee-style highlights */}
      <section className="border-y border-border bg-surface py-10 overflow-hidden">
        <div className="container-x flex flex-wrap items-center justify-between gap-x-12 gap-y-4 font-display text-xl md:text-2xl">
          {["Android / Kotlin", "Jetpack Compose", "React", "Vue.js", "Node.js", "Tailwind / Bootstrap"].map((t) => (
            <span key={t} className="whitespace-nowrap">
              <span className="text-accent mr-3">✦</span>{t}
            </span>
          ))}
        </div>
      </section>
    </>
  );
}
