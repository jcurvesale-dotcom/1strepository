import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-4">
      {/* Cosmic background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{ background: "var(--gradient-cosmic)" }}
        aria-hidden
      />
      {/* Twinkling stars */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        {[...Array(30)].map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-[color:var(--color-gold-soft)] animate-twinkle"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-lg text-center">
        {/* Rotating zodiac ring around 404 */}
        <div className="relative mx-auto mb-8 flex h-48 w-48 items-center justify-center sm:h-56 sm:w-56">
          <div className="absolute inset-0 rounded-full border border-[color:var(--color-gold)]/30 animate-spin-slow" />
          <div className="absolute inset-3 rounded-full border border-dashed border-[color:var(--color-gold)]/20 animate-spin-reverse-slow" />
          <div
            className="absolute inset-6 rounded-full opacity-20 blur-2xl"
            style={{ background: "var(--gradient-gold)" }}
          />
          {/* Zodiac glyphs on ring */}
          {["♈", "♉", "♊", "♋", "♌", "♍", "♎", "♏", "♐", "♑", "♒", "♓"].map((g, i) => {
            const angle = (i / 12) * 360;
            return (
              <span
                key={i}
                className="absolute text-sm text-[color:var(--color-gold-soft)]/70"
                style={{
                  transform: `rotate(${angle}deg) translateY(-5.75rem) rotate(-${angle}deg)`,
                }}
              >
                {g}
              </span>
            );
          })}
          <h1 className="relative font-display text-6xl font-semibold gold-text sm:text-7xl">
            404
          </h1>
        </div>

        <span className="eyebrow">The stars have wandered</span>
        <h2 className="section-title mt-3">This path isn't written in the cosmos</h2>
        <p className="mt-4 font-serif text-base italic text-muted-foreground sm:text-lg">
          The page you seek has drifted beyond the celestial map. Let the guidance of Ajay Shastri Ji bring you back on course.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/" className="btn-gold">
            Back to Home
          </Link>
          <Link to="/blog" className="btn-ghost-gold">
            Read the Blog
          </Link>
        </div>
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
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

// Analytics & Search Console: set these via Vite env vars (.env)
//   VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
//   VITE_GSC_VERIFICATION=abc123... (content value of google-site-verification meta tag)
const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined;
const GSC_VERIFICATION = import.meta.env.VITE_GSC_VERIFICATION as string | undefined;

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Astrologer Ajay Shastri Ji — Vedic Astrology & Love Problem Solutions" },
      {
        name: "description",
        content:
          "Vedic astrologer Ajay Shastri Ji offers guaranteed remedies for love, marriage, family, health, business and career problems.",
      },
      { name: "author", content: "Ajay Shastri Ji" },
      {
        property: "og:title",
        content: "Astrologer Ajay Shastri Ji — Vedic Astrology & Love Problem Solutions",
      },
      {
        property: "og:description",
        content:
          "Premium Vedic astrology consultations, kundli analysis, and time-tested remedies for love, marriage, career and family.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "Astrologer Ajay Shastri Ji — Vedic Astrology & Love Problem Solutions" },
      { name: "twitter:title", content: "Astrologer Ajay Shastri Ji — Vedic Astrology & Love Problem Solutions" },
      { name: "description", content: "Vedic astrologer Ajay Shastri Ji offers guaranteed remedies for love, marriage, family, health, business and career problems." },
      { property: "og:description", content: "Vedic astrologer Ajay Shastri Ji offers guaranteed remedies for love, marriage, family, health, business and career problems." },
      { name: "twitter:description", content: "Vedic astrologer Ajay Shastri Ji offers guaranteed remedies for love, marriage, family, health, business and career problems." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/4c79de99-2db5-4dce-be30-65974660f0b1/id-preview-216bb013--ded65b17-c89d-4846-a5c5-0b7e0a35741c.lovable.app-1783159839505.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/4c79de99-2db5-4dce-be30-65974660f0b1/id-preview-216bb013--ded65b17-c89d-4846-a5c5-0b7e0a35741c.lovable.app-1783159839505.png" },
      ...(GSC_VERIFICATION
        ? [{ name: "google-site-verification", content: GSC_VERIFICATION }]
        : []),
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Cormorant+Garamond:ital,wght@0,400;0,500;1,400;1,500&family=Poppins:wght@300;400;500;600&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Astrologer Ajay Shastri Ji",
          url: "https://celestial-whisper-art.lovable.app",
          potentialAction: {
            "@type": "SearchAction",
            target: "https://celestial-whisper-art.lovable.app/blog?q={search_term_string}",
            "query-input": "required name=search_term_string",
          },
        }),
      },
      ...(GA_ID
        ? [
            {
              src: `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`,
              async: true,
            },
            {
              children: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`,
            },
          ]
        : []),
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

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
