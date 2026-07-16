import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Calendar, Clock, User, Phone, MessageCircle, Facebook, Twitter, Link2, Share2 } from "lucide-react";
import { useState } from "react";
import { BLOG_POSTS, getPostBySlug, type BlogPost } from "@/lib/blog-posts";

const WHATSAPP =
  "https://api.whatsapp.com/send/?phone=919310901707&text=I%20Need%20Help&type=phone_number&app_absent=0";
const TEL = "tel:+919310901707";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPostBySlug(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Article not found — Ajay Shastri Ji" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { post } = loaderData;
    const url = `https://celestial-whisper-art.lovable.app/blog/${params.slug}`;
    return {
      meta: [
        { title: `${post.title} — Ajay Shastri Ji` },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { property: "og:image", content: post.cover },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: post.cover },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.excerpt,
            image: post.cover,
            author: { "@type": "Person", name: "Ajay Shastri Ji" },
            publisher: {
              "@type": "Organization",
              name: "Astrologer Ajay Shastri Ji",
              logo: { "@type": "ImageObject", url: "https://celestial-whisper-art.lovable.app/favicon.ico" },
            },
            mainEntityOfPage: url,
            datePublished: post.date,
          }),
        },
      ],
    };
  },
  notFoundComponent: NotFoundPost,
  errorComponent: ({ error }) => (
    <div className="min-h-screen grid place-items-center text-center p-6">
      <div>
        <h1 className="font-display text-2xl gold-text">Something went wrong</h1>
        <p className="text-[#cfcfcf]/70 mt-2 text-sm">{error.message}</p>
        <Link to="/blog" className="btn-gold mt-6 inline-flex">Back to Blog</Link>
      </div>
    </div>
  ),
  component: BlogPostPage,
});

function NotFoundPost() {
  return (
    <div className="min-h-screen grid place-items-center text-center p-6 bg-background text-foreground">
      <div>
        <h1 className="font-display text-3xl gold-text">Article Not Found</h1>
        <p className="text-[#cfcfcf]/70 mt-2">The article you're looking for doesn't exist.</p>
        <Link to="/blog" className="btn-gold mt-6 inline-flex">Back to Blog</Link>
      </div>
    </div>
  );
}

function renderContent(content: string) {
  const blocks = content.split(/\n\s*\n/);
  return blocks.map((block, i) => {
    const trimmed = block.trim();
    if (trimmed.startsWith("## ")) {
      return (
        <h2 key={i} className="font-display text-2xl md:text-3xl gold-text mt-10 mb-4">
          {trimmed.slice(3)}
        </h2>
      );
    }
    if (trimmed.startsWith("- ")) {
      const items = trimmed.split("\n").map((l) => l.replace(/^-\s*/, ""));
      return (
        <ul key={i} className="list-disc list-inside space-y-2 my-4 text-[#e6e6e6] font-serif text-lg">
          {items.map((it, j) => <li key={j}>{it}</li>)}
        </ul>
      );
    }
    return (
      <p key={i} className="my-4 text-[#e6e6e6] font-serif text-lg leading-relaxed">
        {trimmed}
      </p>
    );
  });
}

function BlogPostPage() {
  const { post } = Route.useLoaderData();
  const sameCategory = BLOG_POSTS.filter(
    (p) => p.slug !== post.slug && p.category === post.category,
  );
  const others = BLOG_POSTS.filter(
    (p) => p.slug !== post.slug && p.category !== post.category,
  );
  const related = [...sameCategory, ...others].slice(0, 3);

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0 opacity-30" aria-hidden>
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-96 w-[60rem] rounded-full bg-[#6c3cf0]/20 blur-3xl" />
      </div>

      <header className="relative z-10 border-b border-[rgba(212,175,55,0.15)] bg-[rgba(11,16,38,0.6)] backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-5 flex items-center justify-between">
          <Link to="/blog" className="flex items-center gap-2 text-[#e8ce8e] hover:text-[#d4af37] transition-colors">
            <ArrowLeft className="h-4 w-4" />
            <span className="font-display tracking-wide">All Articles</span>
          </Link>
          <Link to="/" className="text-[0.75rem] uppercase tracking-[0.15em] text-[#cfcfcf] hover:text-[#e8ce8e]">
            Home
          </Link>
        </div>
      </header>

      <article className="relative z-10 mx-auto max-w-3xl px-6 lg:px-0 pt-16 pb-20">
        <div className="text-center">
          <span className="text-[0.7rem] uppercase tracking-widest px-3 py-1 rounded-full bg-[#0b1026]/80 border border-[rgba(212,175,55,0.4)] text-[#e8ce8e]">
            {post.tag}
          </span>
          <h1 className="section-title mt-5 !text-3xl md:!text-5xl">{post.title}</h1>
          <div className="mt-6 flex items-center justify-center gap-5 text-xs text-[#cfcfcf]/70">
            <span className="inline-flex items-center gap-1"><User className="h-3 w-3" /> {post.author}</span>
            <span className="inline-flex items-center gap-1"><Calendar className="h-3 w-3" /> {post.date}</span>
            <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" /> {post.readTime}</span>
          </div>
        </div>

        <div className="mt-10 aspect-[16/9] overflow-hidden rounded-2xl border border-[rgba(212,175,55,0.2)]">
          <img src={post.cover} alt={post.title} className="w-full h-full object-cover" loading="eager" fetchPriority="high" decoding="async" />
        </div>

        <div className="mt-10 prose prose-invert max-w-none">
          {renderContent(post.content)}
        </div>

        <ShareBar title={post.title} />


        <div className="mt-12 glass-card p-8 text-center">
          <h3 className="font-display text-2xl gold-text">Need Personal Guidance?</h3>
          <p className="text-[#cfcfcf]/80 font-serif italic mt-2">
            Get a private kundli analysis and personalised remedies from Ajay Shastri Ji.
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-gold">
              <MessageCircle className="h-4 w-4" /> WhatsApp Now
            </a>
            <a href={TEL} className="btn-ghost-gold">
              <Phone className="h-4 w-4" /> Call
            </a>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="relative z-10 border-t border-[rgba(212,175,55,0.12)] px-6 lg:px-10 py-16">
          <div className="mx-auto max-w-6xl">
            <h2 className="font-display text-2xl gold-text mb-8 text-center">Continue Reading</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {related.map((p: BlogPost) => (
                <Link
                  key={p.slug}
                  to="/blog/$slug"
                  params={{ slug: p.slug }}
                  className="glass-card group overflow-hidden !p-0"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img src={p.cover} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"  loading="lazy" decoding="async" />
                  </div>
                  <div className="p-5">
                    <div className="text-[0.7rem] uppercase tracking-widest text-[#e8ce8e]">{p.tag}</div>
                    <h3 className="mt-2 font-display text-base text-white group-hover:text-[#e8ce8e]">{p.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

function ShareBar({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);
  const url = typeof window !== "undefined" ? window.location.href : "";
  const encUrl = encodeURIComponent(url);
  const encText = encodeURIComponent(title);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* ignore */
    }
  };

  const nativeShare = async () => {
    if (typeof navigator !== "undefined" && "share" in navigator) {
      try {
        await navigator.share({ title, url });
      } catch {
        /* dismissed */
      }
    } else {
      copy();
    }
  };

  const btn =
    "inline-flex items-center gap-2 h-10 px-4 rounded-full border border-[rgba(212,175,55,0.35)] text-xs uppercase tracking-widest text-[#e8ce8e] hover:bg-[rgba(212,175,55,0.1)] transition-colors";

  return (
    <div className="mt-12 flex flex-col items-center gap-4">
      <span className="text-[0.7rem] uppercase tracking-[0.2em] text-[#cfcfcf]/70">Share this article</span>
      <div className="flex flex-wrap justify-center gap-2">
        <a
          href={`https://api.whatsapp.com/send?text=${encText}%20${encUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className={btn}
          aria-label="Share on WhatsApp"
        >
          <MessageCircle className="h-4 w-4" /> WhatsApp
        </a>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className={btn}
          aria-label="Share on Facebook"
        >
          <Facebook className="h-4 w-4" /> Facebook
        </a>
        <a
          href={`https://twitter.com/intent/tweet?text=${encText}&url=${encUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className={btn}
          aria-label="Share on X"
        >
          <Twitter className="h-4 w-4" /> X
        </a>
        <button onClick={copy} className={btn} aria-label="Copy link">
          <Link2 className="h-4 w-4" /> {copied ? "Copied!" : "Copy Link"}
        </button>
        <button onClick={nativeShare} className={`${btn} md:hidden`} aria-label="More share options">
          <Share2 className="h-4 w-4" /> More
        </button>
      </div>
    </div>
  );
}

