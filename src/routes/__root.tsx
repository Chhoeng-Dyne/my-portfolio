import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-4 text-5xl">Page not found</h1>
        <p className="mt-4 text-muted-foreground">This page seems to have wandered off.</p>
        <Link to="/" className="btn-primary mt-8">Back home</Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-3xl">Something broke</h1>
        <p className="mt-3 text-muted-foreground">Try refreshing or head back home.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button onClick={() => { router.invalidate(); reset(); }} className="btn-primary">Try again</button>
          <a href="/" className="btn-ghost">Home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Elias Moreau — Designer & Developer" },
      { name: "description", content: "Portfolio of Elias Moreau, a product designer and front-end developer crafting quiet, considered digital work." },
      { name: "author", content: "Elias Moreau" },
      { property: "og:title", content: "Elias Moreau — Designer & Developer" },
      { property: "og:description", content: "Portfolio of Elias Moreau, a product designer and front-end developer crafting quiet, considered digital work." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [
    { to: "/", label: "About" },
    { to: "/cv", label: "CV" },
    { to: "/portfolio", label: "Portfolio" },
  ] as const;
  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "backdrop-blur-md bg-background/80 border-b border-border" : "bg-transparent"}`}
    >
      <div className="container-x flex h-16 items-center justify-between md:h-20">
        <Link to="/" className="flex items-baseline gap-2 font-display text-lg tracking-tight">
          <span>Elias</span>
          <span className="text-accent">Moreau</span>
        </Link>
        <nav className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="link-underline text-sm text-foreground/80 hover:text-foreground"
              activeProps={{ className: "text-foreground font-medium" }}
              activeOptions={{ exact: true }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <a href="mailto:hello@eliasmoreau.com" className="btn-primary hidden md:inline-flex text-xs">
          Get in touch
        </a>
        <button
          className="md:hidden p-2 -mr-2"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span className="block w-6 space-y-1.5">
            <span className={`block h-px bg-foreground transition-transform ${open ? "translate-y-[6px] rotate-45" : ""}`} />
            <span className={`block h-px bg-foreground transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`block h-px bg-foreground transition-transform ${open ? "-translate-y-[6px] -rotate-45" : ""}`} />
          </span>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container-x flex flex-col py-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-3 text-lg"
              >
                {l.label}
              </Link>
            ))}
            <a href="mailto:hello@eliasmoreau.com" className="btn-primary mt-3 self-start text-xs">
              Get in touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer id="contact" className="mt-32 border-t border-border bg-surface">
      <div className="container-x py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:gap-16">
          <div>
            <p className="eyebrow">Get in touch</p>
            <h2 className="mt-4 text-4xl md:text-6xl leading-[1.05]">
              Have an idea worth<br />
              <span className="italic text-accent">making real?</span>
            </h2>
            <a
              href="mailto:hello@eliasmoreau.com"
              className="mt-8 inline-block font-display text-2xl md:text-3xl link-underline"
            >
              hello@eliasmoreau.com
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 text-sm">
            <div>
              <p className="eyebrow mb-4">Elsewhere</p>
              <ul className="space-y-3">
                <li><a href="https://www.linkedin.com/in/chhoeng-dyne-60646041" target="_blank" rel="noreferrer" className="link-underline">LinkedIn</a></li>
                <li><a href="https://github.com/Chhoeng-Dyne" target="_blank" rel="noreferrer" className="link-underline">GitHub</a></li>
              </ul>
            </div>
            <div>
              <p className="eyebrow mb-4">Direct</p>
              <ul className="space-y-3">
                <li><a href="tel:+855886087171" className="link-underline">+(855) 886087171</a></li>
                <li className="text-muted-foreground">Phnom Penh, Cambodia</li>
                <li className="text-muted-foreground">GMT+7</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-col-reverse gap-4 border-t border-border pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Elias Moreau. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground font-mono">
            Designed & built with care.
          </p>
        </div>
      </div>
    </footer>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <Nav />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
