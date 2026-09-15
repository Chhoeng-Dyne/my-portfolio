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
      { title: "Chhoeng Dyne — Software Engineer" },
      { name: "description", content: "Portfolio of Chhoeng Dyne, a software engineer focused on Android and web development." },
      { name: "author", content: "Chhoeng Dyne" },
      { property: "og:title", content: "Chhoeng Dyne — Software Engineer" },
      { property: "og:description", content: "Portfolio of Chhoeng Dyne, a software engineer focused on Android and web development." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" },
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
  const [open, setOpen] = useState(false);

  const links = [
    { to: "/", label: "About" },
    { to: "/portfolio", label: "Projects" },
    { to: "/cv", label: "CV" },
  ] as const;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200/90 bg-white/95 backdrop-blur-md shadow-2xs">
      <div className="container-x flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 font-display text-base font-semibold tracking-tight text-zinc-900 group">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Chhoeng Dyne</span>
          <span className="hidden sm:inline-block text-xs font-mono font-normal text-zinc-500">
            / Software Engineer
          </span>
        </Link>

        {/* Desktop Nav Pills */}
        <nav className="hidden items-center gap-1 rounded-full border border-zinc-200 bg-zinc-50/90 p-1 md:flex shadow-2xs">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: true }}
            >
              {({ isActive }) => (
                <span
                  className={`block rounded-full px-4 py-1.5 text-xs transition-all cursor-pointer ${
                    isActive
                      ? "bg-zinc-900 text-white font-semibold shadow-xs"
                      : "text-zinc-600 hover:text-zinc-950 hover:bg-zinc-200/70 font-medium"
                  }`}
                >
                  {l.label}
                </span>
              )}
            </Link>
          ))}
        </nav>

        {/* Right CTA / GitHub */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href="https://github.com/Chhoeng-Dyne"
            target="_blank"
            rel="noreferrer"
            className="text-zinc-600 hover:text-zinc-950 transition-colors p-2 text-xs font-mono flex items-center gap-1.5"
          >
            <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            <span>GitHub</span>
          </a>
          <a href="mailto:dynechhoeng@gmail.com" className="btn-primary text-xs py-2 px-3.5">
            Contact
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-zinc-100 transition cursor-pointer"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span className="block w-5 space-y-1.5">
            <span className={`block h-0.5 bg-zinc-900 transition-transform ${open ? "translate-y-[8px] rotate-45" : ""}`} />
            <span className={`block h-0.5 bg-zinc-900 transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 bg-zinc-900 transition-transform ${open ? "-translate-y-[8px] -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="md:hidden border-b border-zinc-200 bg-white shadow-md">
          <div className="container-x flex flex-col py-4 gap-2">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: true }}
              >
                {({ isActive }) => (
                  <span
                    className={`block py-2.5 px-3 rounded-lg text-sm font-medium transition ${
                      isActive
                        ? "bg-zinc-900 text-white font-semibold"
                        : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-950"
                    }`}
                  >
                    {l.label}
                  </span>
                )}
              </Link>
            ))}
            <div className="pt-3 mt-1 border-t border-zinc-200 flex items-center justify-between">
              <a
                href="https://github.com/Chhoeng-Dyne"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-zinc-600 hover:text-zinc-900"
              >
                GitHub ↗
              </a>
              <a href="mailto:dynechhoeng@gmail.com" className="btn-primary text-xs py-1.5 px-3">
                Contact
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer id="contact" className="mt-28 border-t border-border bg-surface">
      <div className="container-x py-16">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <span className="eyebrow">Connect</span>
            <h2 className="mt-2 text-2xl md:text-3xl font-bold tracking-tight text-foreground">
              Let&rsquo;s build something great together.
            </h2>
            <p className="mt-2 text-sm text-muted-foreground max-w-md">
              Available for software engineering internships, collaborative mobile apps, and modern web projects.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="mailto:dynechhoeng@gmail.com"
                className="btn-primary text-xs"
              >
                dynechhoeng@gmail.com
              </a>
              <a
                href="tel:+855886087171"
                className="btn-ghost text-xs"
              >
                +(855) 886087171
              </a>
            </div>
          </div>

          <div className="flex flex-col md:items-end gap-3 text-sm">
            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/Chhoeng-Dyne"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-foreground font-medium transition"
              >
                GitHub ↗
              </a>
              <a
                href="https://www.linkedin.com/in/chhoeng-dyne-60646041"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-foreground font-medium transition"
              >
                LinkedIn ↗
              </a>
            </div>
            <p className="text-xs text-muted-foreground font-mono mt-2">
              Sen Sok, Phnom Penh, Cambodia · GMT+7
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border/80 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between font-mono">
          <p>© {new Date().getFullYear()} Chhoeng Dyne. All rights reserved.</p>
          <p>Built with TanStack Start &amp; Tailwind CSS.</p>
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
