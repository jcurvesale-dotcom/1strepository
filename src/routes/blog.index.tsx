import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { ArrowRight, Calendar, Clock, ArrowLeft, Search, X } from "lucide-react";
import { BLOG_POSTS, BLOG_CATEGORIES, type BlogCategory } from "@/lib/blog-posts";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Vedic Astrology Blog — Ajay Shastri Ji" },
      {
        name: "description",
        content:
          "Daily articles on Vedic astrology — Love, Career, Marriage, Vastu and Remedies by Astrologer Ajay Shastri Ji.",
      },
      { property: "og:title", content: "Vedic Astrology Blog — Ajay Shastri Ji" },
      {
        property: "og:description",
        content:
          "Daily articles on Vedic astrology — Love, Career, Marriage, Vastu and Remedies.",
      },
      { property: "og:url", content: "https://celestial-whisper-art.lovable.app/blog" },
    ],
    links: [{ rel: "canonical", href: "https://celestial-whisper-art.lovable.app/blog" }],
  }),
  component: BlogIndex,
});

type Filter = "All" | BlogCategory;
const FILTERS: Filter[] = ["All", ...BLOG_CATEGORIES];

function BlogIndex() {
  const [filter, setFilter] = useState<Filter>("All");
  const [query, setQuery] = useState("");

  const q = query.trim().toLowerCase();
  const byCategory = filter === "All" ? BLOG_POSTS : BLOG_POSTS.filter((p) => p.category === filter);
  const filtered = useMemo(
    () =>
      q
        ? byCategory.filter(
            (p) =>
              p.title.toLowerCase().includes(q) ||
              p.excerpt.toLowerCase().includes(q) ||
              p.tag.toLowerCase().includes(q),
          )
        : byCategory,
    [byCategory, q],
  );

  const showFeatured = filter === "All" && !q;
  const featured = showFeatured ? BLOG_POSTS[0] : undefined;
  const grid = showFeatured ? BLOG_POSTS.slice(1) : filtered;

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0 opacity-40" aria-hidden>
        <div className="absolute -top-40 -left-32 h-96 w-96 rounded-full bg-[#6c3cf0]/20 blur-3xl" />
        <div className="absolute top-1/3 -right-32 h-96 w-96 rounded-full bg-[#d4af37]/20 blur-3xl" />
      </div>

      <header className="relative z-10 border-b border-[rgba(212,175,55,0.15)] bg-[rgba(11,16,38,0.6)] backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-5 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-[#e8ce8e] hover:text-[#d4af37] transition-colors">
            <ArrowLeft className="h-4 w-4" />
            <span className="font-display tracking-wide">Ajay Shastri Ji</span>
          </Link>
          <Link
            to="/"
            className="text-[0.75rem] uppercase tracking-[0.15em] text-[#cfcfcf] hover:text-[#e8ce8e]"
          >
            Home
          </Link>
        </div>
      </header>

      <section className="relative z-10 px-6 lg:px-10 pt-20 pb-8 text-center">
        <span className="eyebrow">Insights & Wisdom</span>
        <h1 className="section-title mt-3 max-w-3xl mx-auto">The Vedic Journal</h1>
        <p className="mt-5 max-w-2xl mx-auto text-[#cfcfcf]/80 font-serif italic text-lg">
          Reflections, remedies and guidance from the timeless science of Vedic astrology.
        </p>
      </section>

      {/* Search bar */}
      <section className="relative z-10 px-6 lg:px-10 pb-6">
        <div className="mx-auto max-w-2xl">
          <div className="relative">
            <Search className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[#e8ce8e]" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search articles — love, career, remedies…"
              className="w-full bg-[rgba(11,16,38,0.6)] border border-[rgba(212,175,55,0.3)] rounded-full pl-11 pr-11 py-3 text-sm text-[#e6e6e6] placeholder:text-[#cfcfcf]/50 focus:outline-none focus:border-[#d4af37] backdrop-blur-xl font-serif"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                aria-label="Clear search"
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-[#cfcfcf]/70 hover:text-[#d4af37]"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
          {q && (
            <p className="mt-3 text-center text-xs text-[#cfcfcf]/70">
              {filtered.length} result{filtered.length === 1 ? "" : "s"} for "{query}"
            </p>
          )}
        </div>

      </section>


      {/* Category filters */}
      <section className="relative z-10 px-6 lg:px-10 pb-10">
        <div className="mx-auto max-w-6xl flex flex-wrap justify-center gap-2 md:gap-3">
          {FILTERS.map((f) => {
            const active = f === filter;
            const count =
              f === "All" ? BLOG_POSTS.length : BLOG_POSTS.filter((p) => p.category === f).length;
            return (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`text-[0.72rem] md:text-xs uppercase tracking-[0.15em] px-4 py-2 rounded-full border transition-all ${
                  active
                    ? "bg-[#d4af37] text-[#0b1026] border-[#d4af37]"
                    : "border-[rgba(212,175,55,0.35)] text-[#e8ce8e] hover:bg-[rgba(212,175,55,0.1)]"
                }`}
              >
                {f} <span className="opacity-70">({count})</span>
              </button>
            );
          })}
        </div>
      </section>

      {featured && filter === "All" && (
        <section className="relative z-10 px-6 lg:px-10 pb-16">
          <div className="mx-auto max-w-6xl">
            <Link
              to="/blog/$slug"
              params={{ slug: featured.slug }}
              className="glass-card group grid md:grid-cols-2 gap-0 overflow-hidden !p-0"
            >
              <div className="relative aspect-[16/10] md:aspect-auto overflow-hidden">
                <img
                  src={featured.cover}
                  alt={featured.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                 loading="eager" fetchPriority="high" decoding="async" />
                <span className="absolute top-4 left-4 text-[0.7rem] uppercase tracking-widest px-3 py-1 rounded-full bg-[#0b1026]/80 border border-[rgba(212,175,55,0.4)] text-[#e8ce8e]">
                  Featured · {featured.tag}
                </span>
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-4 text-xs text-[#cfcfcf]/70">
                  <span className="inline-flex items-center gap-1"><Calendar className="h-3 w-3" /> {featured.date}</span>
                  <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" /> {featured.readTime}</span>
                </div>
                <h2 className="mt-3 font-display text-2xl md:text-3xl text-white group-hover:text-[#e8ce8e] transition-colors">
                  {featured.title}
                </h2>
                <p className="mt-4 text-[#cfcfcf]/80 font-serif italic">{featured.excerpt}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#d4af37]">
                  Read Article <ArrowRight className="h-3 w-3" />
                </span>
              </div>
            </Link>
          </div>
        </section>
      )}

      <section className="relative z-10 px-6 lg:px-10 pb-24">
        <div className="mx-auto max-w-6xl">
          {grid.length === 0 ? (
            <p className="text-center text-[#cfcfcf]/70 font-serif italic py-16">
              No articles in this category yet.
            </p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {grid.map((b) => (
                <Link
                  key={b.slug}
                  to="/blog/$slug"
                  params={{ slug: b.slug }}
                  className="glass-card group overflow-hidden !p-0"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={b.cover}
                      alt={b.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                     loading="lazy" decoding="async" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b1026] via-transparent to-transparent" />
                    <span className="absolute top-4 left-4 text-[0.7rem] uppercase tracking-widest px-3 py-1 rounded-full bg-[#0b1026]/80 border border-[rgba(212,175,55,0.4)] text-[#e8ce8e]">
                      {b.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs text-[#cfcfcf]/70">
                      <span className="inline-flex items-center gap-1"><Calendar className="h-3 w-3" /> {b.date}</span>
                      <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" /> {b.readTime}</span>
                    </div>
                    <h3 className="mt-2 font-display text-lg text-white group-hover:text-[#e8ce8e] transition-colors">
                      {b.title}
                    </h3>
                    <p className="mt-2 text-sm text-[#cfcfcf]/70 line-clamp-2">{b.excerpt}</p>
                    <span className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#d4af37]">
                      Read More <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
