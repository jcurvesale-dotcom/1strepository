import { createFileRoute, Link as RouterLink } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { BLOG_POSTS } from "@/lib/blog-posts";
import rakeshGuptaPhoto from "@/assets/rakesh-gupta.jpg.asset.json";
import sonakshiSharmaPhoto from "@/assets/sonakshi-sharma.jpg.asset.json";
import jasonPhoto from "@/assets/jason.jpg.asset.json";
import jasspreetKaurPhoto from "@/assets/jasspreet-kaur.jpg.asset.json";
import sitaBhardwajPhoto from "@/assets/sita-bhardwaj.jpg.asset.json";
import verifiedClientPhoto from "@/assets/verified-client.jpg.asset.json";
import gallery1 from "@/assets/gallery-1.webp.asset.json";
import gallery2 from "@/assets/gallery-2.webp.asset.json";
import gallery3 from "@/assets/gallery-3.webp.asset.json";
import {
  Phone,
  MessageCircle,
  Heart,
  Sparkles,
  Home as HomeIcon,
  Briefcase,
  HandMetal,
  Hash,
  Compass,
  Star,
  Video,
  Users,
  Award,
  Clock,
  ShieldCheck,
  ChevronDown,
  Facebook,
  Instagram,
  Send,
  Mail,
  MapPin,
  Menu,
  X,
  ArrowRight,
  Quote,
  Moon,
  Sun,
} from "lucide-react";
import ajayHeroAsset from "@/assets/astrologer-ajay-shastri-ji.webp.asset.json";
import vashiKaranSpecialist from "@/assets/vashi-karan-specialist.png.asset.json";
import loveProblemImg from "@/assets/love-problem-solution.webp.asset.json";
import marriageProblemImg from "@/assets/marriage-problem-solution.png.asset.json";
import careerBusinessImg from "@/assets/career-business.webp.asset.json";
import negativeEnergyImg from "@/assets/negative-energy-removal.webp.asset.json";
import pujaForWealthImg from "@/assets/puja-for-wealth.webp.asset.json";
import kaalsarpDoshImg from "@/assets/kaalsarp-dosh-puja.webp.asset.json";
import lakshmiPujaImg from "@/assets/lakshmi-puja.webp.asset.json";
import pujaForMarriageImg from "@/assets/puja-for-marriage.webp.asset.json";
import pujaForPeaceImg from "@/assets/puja-for-peace.webp.asset.json";
import shaniPujaImg from "@/assets/shani-puja.webp.asset.json";
import nakshatraShantiImg from "@/assets/nakshatra-shanti-puja.webp.asset.json";
import pitraDoshImg from "@/assets/pitra-dosh-puja.webp.asset.json";

const SITE_URL = "https://celestial-whisper-art.lovable.app";

const FAQ_SCHEMA_ITEMS = [
  { q: "How soon will I see results after a consultation?", a: "Timelines vary based on the case, but most clients notice initial shifts within a few weeks. Complex situations may take longer with sustained remedies." },
  { q: "Do you offer online consultations?", a: "Yes, we offer telephone, video conferencing and in-person consultations. International clients are supported 24×7." },
  { q: "Is the consultation confidential?", a: "Absolutely. All consultations with Ajay Shastri Ji are strictly confidential." },
  { q: "What information do you need for kundli analysis?", a: "Your full date of birth, exact time of birth, and place of birth are required for accurate kundli preparation." },
  { q: "Do you provide a guarantee?", a: "Yes — if the work is not done, I will not take my service charge. Ajay Shastri Ji stands behind every consultation." },
];

export const Route = createFileRoute("/")({
  head: () => ({
    links: [{ rel: "canonical", href: SITE_URL + "/" }],
    meta: [{ property: "og:url", content: SITE_URL + "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": SITE_URL + "/#business",
          name: "Astrologer Ajay Shastri Ji",
          image: SITE_URL + "/og-image.png",
          url: SITE_URL,
          telephone: "+91-9310901707",
          email: "info@ajayshastriastrologer.com",
          priceRange: "₹₹",
          address: { "@type": "PostalAddress", addressLocality: "New Delhi", addressRegion: "DL", addressCountry: "IN" },
          areaServed: "Worldwide",
          sameAs: [],
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "1200",
            bestRating: "5",
            worstRating: "1",
          },
          review: [
            {
              "@type": "Review",
              author: { "@type": "Person", name: "Rakesh Gupta" },
              reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
              reviewBody:
                "Ajay Shastri Ji's remedies transformed my business. Within weeks, obstacles cleared and revenue doubled.",
            },
            {
              "@type": "Review",
              author: { "@type": "Person", name: "Sonakshi Sharma" },
              reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
              reviewBody:
                "Love problem solution worked like magic. My relationship is stronger than ever. Highly recommended.",
            },
            {
              "@type": "Review",
              author: { "@type": "Person", name: "Jasspreet Kaur" },
              reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
              reviewBody:
                "The marriage puja brought peace and harmony to our family. Truly a blessed astrologer.",
            },
          ],
        }),
      },

      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "@id": SITE_URL + "/#person",
          name: "Ajay Shastri Ji",
          jobTitle: "Vedic Astrologer",
          description:
            "Vedic astrologer with 20+ years of experience in kundli analysis, love & marriage problems, career guidance, vashikaran and puja remedies.",
          url: SITE_URL,
          image: SITE_URL + "/og-image.png",
          telephone: "+91-9310901707",
          worksFor: { "@id": SITE_URL + "/#business" },
          knowsAbout: [
            "Vedic Astrology",
            "Kundli Analysis",
            "Love Problem Solution",
            "Marriage Problem Solution",
            "Vashikaran",
            "Kaalsarp Dosh",
            "Pitra Dosh",
            "Numerology",
          ],
          address: { "@type": "PostalAddress", addressLocality: "New Delhi", addressCountry: "IN" },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQ_SCHEMA_ITEMS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),

  component: Index,
});


const PHONE = "+91-9310901707";
const TEL = "tel:+919310901707";
const WHATSAPP =
  "https://api.whatsapp.com/send/?phone=919310901707&text=I%20Need%20Help&type=phone_number&app_absent=0";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "#contact" },
];

function Index() {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden pb-[76px] md:pb-0">
      <StarField />
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Services />
      <PujaSection />
      <WhyChooseUs />
      <Testimonials />
      <Gallery />
      <Shorts />
      <Blog />
      <Faq />
      <Contact />
      <FinalCta />
      <Footer />
      <FloatingWhatsApp />
      <MobileStickyCTA />
    </div>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-[60] hidden h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-5px_rgba(37,211,102,0.7)] ring-2 ring-white/20 transition-transform hover:scale-110 md:flex"
    >
      <MessageCircle className="h-7 w-7" />
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-40" />
    </a>
  );
}

function MobileStickyCTA() {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="fixed bottom-5 right-5 z-[60] flex flex-col items-end gap-3 md:hidden"
      style={{ bottom: "calc(1.25rem + env(safe-area-inset-bottom))" }}
    >
      {open && (
        <div className="flex flex-col items-end gap-3 animate-fade-in">
          <a
            href={TEL}
            aria-label="Call Ajay Shastri Ji"
            className="flex items-center gap-2 rounded-full bg-gradient-to-r from-[#d4af37] to-[#f2d675] py-2.5 pl-4 pr-2.5 text-sm font-bold text-[#1a0f2e] shadow-[0_8px_24px_-6px_rgba(212,175,55,0.7)]"
          >
            <span>Call Now</span>
            <span className="grid h-9 w-9 place-items-center rounded-full bg-[#1a0f2e]/15">
              <Phone className="h-4 w-4" />
            </span>
          </a>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="flex items-center gap-2 rounded-full bg-[#25D366] py-2.5 pl-4 pr-2.5 text-sm font-bold text-white shadow-[0_8px_24px_-6px_rgba(37,211,102,0.7)]"
          >
            <span>WhatsApp</span>
            <span className="grid h-9 w-9 place-items-center rounded-full bg-white/20">
              <MessageCircle className="h-4 w-4" />
            </span>
          </a>
        </div>
      )}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close contact menu" : "Open contact menu"}
        aria-expanded={open}
        className="grid h-14 w-14 place-items-center rounded-full bg-gradient-to-r from-[#d4af37] to-[#f2d675] text-[#1a0f2e] shadow-[0_10px_30px_-6px_rgba(212,175,55,0.7)] ring-2 ring-white/20 transition-transform active:scale-95"
      >
        {open ? (
          <X className="h-6 w-6" strokeWidth={2.5} />
        ) : (
          <MessageCircle className="h-6 w-6" strokeWidth={2.25} />
        )}
      </button>
    </div>
  );
}


/* ============ STARFIELD BACKGROUND ============ */
function StarField() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
      <div
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage: `
            radial-gradient(1.5px 1.5px at 12% 22%, rgba(232,206,142,0.9), transparent 60%),
            radial-gradient(1px 1px at 78% 34%, rgba(109,169,255,0.7), transparent 60%),
            radial-gradient(1.2px 1.2px at 44% 68%, rgba(232,206,142,0.6), transparent 60%),
            radial-gradient(2px 2px at 88% 12%, rgba(232,206,142,0.85), transparent 60%),
            radial-gradient(1px 1px at 58% 88%, rgba(108,60,240,0.6), transparent 60%),
            radial-gradient(1.5px 1.5px at 8% 78%, rgba(109,169,255,0.65), transparent 60%),
            radial-gradient(1px 1px at 32% 44%, rgba(255,255,255,0.7), transparent 60%),
            radial-gradient(1px 1px at 92% 62%, rgba(232,206,142,0.6), transparent 60%)
          `,
          animation: "var(--animate-twinkle)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 20% 10%, rgba(108,60,240,0.25), transparent 50%), radial-gradient(ellipse at 80% 80%, rgba(109,169,255,0.15), transparent 50%), radial-gradient(ellipse at 50% 40%, rgba(212,175,55,0.08), transparent 60%)",
        }}
      />
    </div>
  );
}

/* ============ NAVBAR ============ */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[rgba(11,16,38,0.75)] backdrop-blur-xl border-b border-[rgba(212,175,55,0.15)] shadow-[0_10px_40px_-20px_rgba(0,0,0,0.8)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-center justify-between py-4">
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative h-12 w-12 rounded-full grid place-items-center bg-gradient-to-br from-[#1a1447] via-[#0b1026] to-[#0b1026] border border-[rgba(212,175,55,0.55)] shadow-[var(--shadow-glow-gold)] overflow-hidden">
              <span
                aria-hidden
                className="absolute inset-[3px] rounded-full border border-[rgba(212,175,55,0.25)]"
              />
              <svg
                viewBox="0 0 48 48"
                className="relative h-6 w-6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden
              >
                <defs>
                  <linearGradient id="asGold" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#f5d980" />
                    <stop offset="55%" stopColor="#d4af37" />
                    <stop offset="100%" stopColor="#8a6b1c" />
                  </linearGradient>
                </defs>
                {/* Sun rays */}
                <g stroke="url(#asGold)" strokeWidth="1" strokeLinecap="round" opacity="0.55">
                  <line x1="24" y1="2" x2="24" y2="6" />
                  <line x1="24" y1="42" x2="24" y2="46" />
                  <line x1="2" y1="24" x2="6" y2="24" />
                  <line x1="42" y1="24" x2="46" y2="24" />
                  <line x1="8" y1="8" x2="11" y2="11" />
                  <line x1="37" y1="37" x2="40" y2="40" />
                  <line x1="8" y1="40" x2="11" y2="37" />
                  <line x1="37" y1="11" x2="40" y2="8" />
                </g>
                {/* Monogram A S */}
                <text
                  x="24"
                  y="31"
                  textAnchor="middle"
                  fontFamily="Cormorant Garamond, Playfair Display, serif"
                  fontWeight="600"
                  fontSize="20"
                  fill="url(#asGold)"
                  letterSpacing="-0.5"
                >
                  AS
                </text>
              </svg>
            </div>
            <div className="leading-tight">
              <div className="font-display text-lg tracking-wide gold-text">
                Ajay Shastri Ji
              </div>
              <div className="font-serif italic text-[0.72rem] text-[#cfcfcf]/80">
                Vedic Astrologer &amp; Spiritual Healer
              </div>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="relative text-[0.8rem] uppercase tracking-[0.15em] text-[#cfcfcf] hover:text-[#e8ce8e] transition-colors group"
              >
                {n.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-[#d4af37] to-[#6da9ff] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a href={TEL} className="btn-ghost-gold !py-2.5 !px-5 !text-[0.72rem]">
              <Phone className="h-3.5 w-3.5" /> {PHONE}
            </a>
          </div>

          <button
            aria-label="Toggle menu"
            className="lg:hidden text-[#e8ce8e] p-2"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden pb-6 animate-[fade-up_0.3s_ease-out]">
            <div className="flex flex-col gap-1 rounded-2xl border border-[rgba(212,175,55,0.2)] bg-[rgba(11,16,38,0.9)] backdrop-blur-xl p-4">
              {NAV.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-3 text-sm uppercase tracking-widest text-[#cfcfcf] hover:text-[#e8ce8e] hover:bg-white/5 rounded-lg transition-colors"
                >
                  {n.label}
                </a>
              ))}
              <a
                href={TEL}
                className="btn-gold mt-3"
                onClick={() => setOpen(false)}
              >
                <Phone className="h-4 w-4" /> {PHONE}
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

/* ============ HERO ============ */
function Hero() {
  return (
    <section
      id="home"
      className="relative z-10 pt-36 pb-24 lg:pt-44 lg:pb-32 px-6 lg:px-10"
    >
      <div className="mx-auto max-w-7xl grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
        <div className="animate-[fade-up_0.9s_ease-out]">
          <span className="eyebrow inline-flex items-center gap-2 rounded-full border border-[rgba(212,175,55,0.35)] px-4 py-1.5 bg-white/[0.03] backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-[#d4af37] animate-pulse" />
            Guaranteed Satisfaction · 6 Hour Response
          </span>
          <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.08]">
            Clarity for your{" "}
            <span className="gold-text italic font-serif">love, marriage</span>{" "}
            &amp; family life —
            <br />
            rooted in{" "}
            <span
              style={{
                background: "var(--gradient-royal)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Vedic astrology
            </span>
          </h1>
          <p className="mt-6 text-[#cfcfcf] max-w-xl text-[1.02rem] leading-relaxed">
            Whatever the difficulty — a love marriage that needs support, a
            partner drifting away, or a divorce you want to prevent — Ajay
            Shastri Ji offers honest guidance and time-tested remedies. No
            exaggeration, just results.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a href={WHATSAPP} className="btn-gold">
              <MessageCircle className="h-4 w-4" />
              Message on WhatsApp
            </a>
            <a href={TEL} className="btn-ghost-gold">
              <Phone className="h-4 w-4" />
              Call Now
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-8 items-center text-sm text-[#cfcfcf]/80">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-[#d4af37]" />
              <span>Certified Astrologer</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-[#d4af37] fill-[#d4af37]" />
              <span>5.0 Rated Consultations</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-[#6da9ff]" />
              <span>Global Client Base</span>
            </div>
          </div>
        </div>

        <div className="relative flex items-center justify-center animate-[fade-in_1.2s_ease-out]">
          {/* Glow */}
          <div
            className="absolute inset-0 blur-3xl opacity-70"
            style={{
              background:
                "radial-gradient(circle at center, rgba(212,175,55,0.35), rgba(108,60,240,0.25) 40%, transparent 70%)",
            }}
          />
          {/* Rotating yantra */}
          <svg
            className="absolute inset-0 m-auto h-[110%] w-[110%] max-w-[520px] max-h-[520px] opacity-15"
            style={{ animation: "var(--animate-spin-slow)" }}
            viewBox="0 0 400 400"
          >
            <circle cx="200" cy="200" r="180" fill="none" stroke="#d4af37" strokeWidth="0.6" />
            <circle cx="200" cy="200" r="140" fill="none" stroke="#e8ce8e" strokeWidth="0.5" />
            <rect x="80" y="80" width="240" height="240" fill="none" stroke="#6c3cf0" strokeWidth="0.6" transform="rotate(45 200 200)" opacity="0.6" />
            <rect x="110" y="110" width="180" height="180" fill="none" stroke="#d4af37" strokeWidth="0.5" opacity="0.7" />
          </svg>

          {/* Zodiac ring with 12 signs (rotating opposite) */}
          <div
            className="pointer-events-none absolute inset-0 m-auto h-[105%] w-[105%] max-w-[500px] max-h-[500px]"
            style={{ animation: "var(--animate-spin-reverse-slow)" }}
          >
            {["♈","♉","♊","♋","♌","♍","♎","♏","♐","♑","♒","♓"].map((sign, i) => {
              const angle = (i * 360) / 12;
              return (
                <span
                  key={sign}
                  className="absolute left-1/2 top-1/2 text-[#d4af37] text-lg md:text-xl opacity-60"
                  style={{
                    transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-230px) rotate(-${angle}deg)`,
                    textShadow: "0 0 12px rgba(212,175,55,0.6)",
                  }}
                >
                  {sign}
                </span>
              );
            })}
          </div>

          {/* Floating planets & symbols */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute top-[8%] left-[10%] animate-[float_7s_ease-in-out_infinite]">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#d4af37] to-[#6c3cf0]/70 shadow-[0_0_25px_rgba(212,175,55,0.6)]" />
            </div>
            <div className="absolute top-[15%] right-[8%] animate-[float_9s_ease-in-out_infinite_1s]">
              <div className="h-6 w-6 rounded-full bg-[#6da9ff] shadow-[0_0_20px_rgba(109,169,255,0.7)]" />
            </div>
            <div className="absolute bottom-[20%] left-[4%] animate-[float_8s_ease-in-out_infinite_0.5s]">
              <Sparkles className="h-7 w-7 text-[#e8ce8e]" style={{ filter: "drop-shadow(0 0 10px rgba(212,175,55,0.7))" }} />
            </div>
            <div className="absolute bottom-[12%] right-[6%] animate-[float_10s_ease-in-out_infinite_1.5s]">
              <Moon className="h-8 w-8 text-[#e8ce8e]" style={{ filter: "drop-shadow(0 0 12px rgba(232,206,142,0.8))" }} />
            </div>
            <div className="absolute top-[45%] left-[2%] animate-[float_6s_ease-in-out_infinite_0.8s]">
              <Star className="h-4 w-4 text-[#d4af37] fill-[#d4af37]" />
            </div>
            <div className="absolute top-[35%] right-[3%] animate-[float_7s_ease-in-out_infinite_1.2s]">
              <Star className="h-3 w-3 text-[#6da9ff] fill-[#6da9ff]" />
            </div>
            <div className="absolute top-[60%] right-[10%] animate-[float_8s_ease-in-out_infinite_0.3s]">
              <Sun className="h-6 w-6 text-[#d4af37]" style={{ filter: "drop-shadow(0 0 10px rgba(212,175,55,0.7))" }} />
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-[float_6s_ease-in-out_infinite]">
            <div className="absolute -inset-3 rounded-[28px] bg-gradient-to-br from-[#d4af37]/30 via-[#6c3cf0]/20 to-[#6da9ff]/20 blur-3xl" />
            <div className="relative">
              <img
                src={ajayHeroAsset.url}
                alt="Astrologer Ajay Shastri Ji"
                className="relative w-full h-auto max-w-[380px] mx-auto drop-shadow-[0_25px_50px_rgba(0,0,0,0.7)]"
                loading="eager"
                fetchPriority="high"
                decoding="async"
                width={380}
                height={475}
              />
              {/* Bottom line so image doesn't look incomplete */}
              <div className="mx-auto mt-[-8px] h-px w-[70%] bg-gradient-to-r from-transparent via-[#d4af37]/70 to-transparent" />
              <div className="mx-auto mt-2 h-8 w-[60%] bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.35),transparent_70%)] blur-md" />
            </div>

            {/* Floating badges */}
            <div className="absolute -top-4 -left-4 glass-card px-4 py-3 flex items-center gap-2 animate-[float_5s_ease-in-out_infinite_0.5s]">
              <Star className="h-4 w-4 text-[#d4af37] fill-[#d4af37]" />
              <div className="text-xs">
                <div className="font-medium">5000+ Clients</div>
                <div className="text-[#cfcfcf]/70">Worldwide</div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 glass-card px-4 py-3 flex items-center gap-2 animate-[float_5s_ease-in-out_infinite_1.5s]">
              <Award className="h-4 w-4 text-[#e8ce8e]" />
              <div className="text-xs">
                <div className="font-medium">15+ Years</div>
                <div className="text-[#cfcfcf]/70">Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============ STATS COUNTERS ============ */
function useCounter(target: number, duration = 1800, start = false) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min((t - t0) / duration, 1);
      setValue(Math.floor(p * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, start]);
  return value;
}

function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && setVisible(true),
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const clients = useCounter(5000, 1800, visible);
  const years = useCounter(15, 1500, visible);
  const accuracy = useCounter(98, 1500, visible);
  const support = useCounter(24, 1200, visible);

  const items = [
    { v: clients, s: "+", l: "Happy Clients", icon: Users },
    { v: years, s: "+", l: "Years Experience", icon: Award },
    { v: accuracy, s: "%", l: "Accuracy Rate", icon: ShieldCheck },
    { v: support, s: "×7", l: "Support", icon: Clock },
  ];

  return (
    <section ref={ref} className="relative z-10 px-6 lg:px-10 pb-8">
      <div className="mx-auto max-w-7xl grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {items.map((it, i) => (
          <div
            key={i}
            className="glass-card p-6 text-center"
            style={{ animation: `var(--animate-fade-up)`, animationDelay: `${i * 0.1}s` }}
          >
            <div className="mx-auto mb-3 h-11 w-11 rounded-full grid place-items-center bg-[rgba(212,175,55,0.1)] border border-[rgba(212,175,55,0.3)]">
              <it.icon className="h-5 w-5 text-[#d4af37]" />
            </div>
            <div className="font-display text-3xl lg:text-4xl gold-text">
              {it.v}
              {it.s}
            </div>
            <div className="mt-1 text-xs uppercase tracking-[0.15em] text-[#cfcfcf]/80">
              {it.l}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ============ SECTION HEADER ============ */
function SectionHead({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-14">
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="section-title mt-3 font-display">{title}</h2>
      <div className="mt-4 mx-auto h-px w-20 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
      {subtitle && (
        <p className="mt-5 text-[#cfcfcf] text-[0.98rem] leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}

/* ============ ABOUT ============ */
function About() {
  return (
    <section id="about" className="relative z-10 py-24 px-6 lg:px-10">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-[0.9fr_1.1fr] gap-14 items-center">
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">

          <div
            className="absolute -inset-4 rounded-[28px] blur-2xl opacity-60"
            style={{ background: "var(--gradient-royal)" }}
          />
          <div className="relative rounded-[24px] overflow-hidden border border-[rgba(212,175,55,0.3)] glass-card !p-2">
            <img
              src={vashiKaranSpecialist.url}
              alt="Vashi Karan Specialist - Ajay Shastri Ji performing hawan"
              className="w-full h-auto rounded-[18px]"
             loading="lazy" decoding="async" />
          </div>
          <div className="absolute -bottom-6 -right-6 glass-card px-5 py-4 hidden sm:block">
            <div className="font-display text-2xl gold-text">11×</div>
            <div className="text-xs uppercase tracking-widest text-[#cfcfcf]/80">
              Gold Medals
            </div>
          </div>
        </div>

        <div>
          <span className="eyebrow">World-renowned Vedic astrologer</span>
          <h2 className="section-title mt-3 font-display">
            About Ajay Shastri Ji
          </h2>
          <div className="mt-4 h-px w-20 bg-gradient-to-r from-[#d4af37] to-transparent" />
          <p className="mt-6 text-[#cfcfcf] leading-relaxed">
            Astrology plays a significant role in shaping how we understand our
            lives and find purpose. Ajay Shastri Ji is a certified astrological
            professional, trusted across the astrological and spiritual healing
            community, offering mantras and remedies for family conflict,
            relationship trouble, and career concerns.
          </p>
          <p className="mt-4 text-[#cfcfcf] leading-relaxed">
            By studying the placement of planets and stars in a person's kundli,
            he offers grounded, practical guidance rather than vague reassurance
            — helping clients move toward resolution with clarity.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-4">
            {[
              { b: "11×", s: "Gold Medals" },
              { b: "24/7", s: "Support" },
              { b: "6 Hrs", s: "Response" },
            ].map((s, i) => (
              <div key={i} className="glass-card p-5 text-center">
                <div className="font-display text-2xl gold-text">{s.b}</div>
                <div className="mt-1 text-[0.7rem] uppercase tracking-widest text-[#cfcfcf]/80">
                  {s.s}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href={WHATSAPP} className="btn-gold">
              <MessageCircle className="h-4 w-4" /> Consult Now
            </a>
            <a href={TEL} className="btn-ghost-gold">
              <Phone className="h-4 w-4" /> {PHONE}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============ SERVICES ============ */
const SERVICES = [
  {
    icon: Heart,
    title: "Love Problem Solution",
    desc: "Resolving love problems with partners or family, guided by kundli and star analysis.",
    img: loveProblemImg.url,
  },
  {
    icon: Users,
    title: "Marriage Problem Solution",
    desc: "Practical remedies for husband-wife conflict and intercaste marriage acceptance.",
    img: marriageProblemImg.url,
  },
  {
    icon: Briefcase,
    title: "Career & Business",
    desc: "Kundli-based analysis for recurring losses, career direction and financial stability.",
    img: careerBusinessImg.url,
  },
  {
    icon: Compass,
    title: "Negative Energy Removal",
    desc: "Years of experience resolving cases affected by negative energy around home or work.",
    img: negativeEnergyImg.url,
  },
];

function Services() {
  return (
    <section id="services" className="relative z-10 py-24 px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHead
          eyebrow="What we help with"
          title="Premium Astrology Services"
          subtitle="Time-tested Vedic solutions across love, marriage, family, career, health and spiritual well-being."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {SERVICES.map((s, i) => (
            <div
              key={i}
              className="glass-card group p-6 flex flex-col"
              style={{ animation: `var(--animate-fade-up)`, animationDelay: `${i * 0.08}s` }}
            >
              <div className="relative mb-5 overflow-hidden rounded-2xl aspect-[4/3] border border-[rgba(212,175,55,0.15)]">
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                 loading="lazy" decoding="async" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1026] via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 h-11 w-11 rounded-full grid place-items-center bg-[rgba(11,16,38,0.85)] border border-[rgba(212,175,55,0.5)] backdrop-blur">
                  <s.icon className="h-5 w-5 text-[#e8ce8e]" />
                </div>
              </div>
              <h3 className="font-display text-lg text-white">{s.title}</h3>
              <p className="mt-2 text-sm text-[#cfcfcf]/85 leading-relaxed flex-1">
                {s.desc}
              </p>
              <a
                href={WHATSAPP}
                className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-[#d4af37] hover:text-[#e8ce8e] transition-colors group/link"
              >
                Enquire Now
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ WHY CHOOSE US ============ */
const WHY = [
  {
    icon: Award,
    title: "Certified Expertise",
    desc: "Specialist in intercaste marriage acceptance and family mediation with formal credentials.",
  },
  {
    icon: Users,
    title: "International Reputation",
    desc: "Recognised love astrology specialist with clients across India, UK, USA & Canada.",
  },
  {
    icon: ShieldCheck,
    title: "Dependable Remedies",
    desc: "Long-standing family disagreements resolved with grounded, time-tested Vedic practice.",
  },
  {
    icon: Sparkles,
    title: "Broad Range of Services",
    desc: "Relationships, career, health, business & spiritual healing under one trusted roof.",
  },
  {
    icon: Heart,
    title: "Lasting Resolution",
    desc: "Guidance aimed at long-term peace and reconciliation, not short-term fixes.",
  },
  {
    icon: Clock,
    title: "6 Hour Response",
    desc: "Honest guidance and a fast response — reach out today, hear back the same day.",
  },
];

function WhyChooseUs() {
  return (
    <section
      id="why"
      className="relative z-10 py-24 px-6 lg:px-10 border-y border-[rgba(212,175,55,0.12)]"
      style={{
        background:
          "linear-gradient(180deg, rgba(16,22,58,0.6), rgba(11,16,38,0.3))",
      }}
    >
      <div className="mx-auto max-w-7xl">
        <SectionHead
          eyebrow="Why people choose us"
          title="A Reputation Built on Results"
          subtitle="Six reasons Ajay Shastri Ji is trusted by thousands worldwide."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {WHY.map((w, i) => (
            <div
              key={i}
              className="glass-card p-7"
              style={{ animation: `var(--animate-fade-up)`, animationDelay: `${i * 0.08}s` }}
            >
              <div
                className="h-12 w-12 rounded-2xl grid place-items-center mb-4"
                style={{ background: "var(--gradient-gold)", boxShadow: "var(--shadow-glow-gold)" }}
              >
                <w.icon className="h-5 w-5 text-[#0b1026]" />
              </div>
              <h3 className="font-display text-lg text-white">{w.title}</h3>
              <p className="mt-2 text-sm text-[#cfcfcf]/85 leading-relaxed">
                {w.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ PUJA ============ */
const PUJAS = [
  { title: "Puja For Wealth", desc: "Draw financial growth and stability into daily life.", img: pujaForWealthImg.url },
  { title: "Kaalsarp Dosh Puja", desc: "For those affected by Kaalsarp Dosh and seeking peace.", img: kaalsarpDoshImg.url },
  { title: "Lakshmi Puja", desc: "Traditional puja to protect and grow household wealth.", img: lakshmiPujaImg.url },
  { title: "Puja For Marriage", desc: "For those seeking the right partner and a supported path.", img: pujaForMarriageImg.url },
  { title: "Puja For Peace", desc: "Restoring inner harmony and spiritual wellbeing.", img: pujaForPeaceImg.url },
  { title: "Shani Puja", desc: "Remedies to ease the effects of Shani dosh.", img: shaniPujaImg.url },
  { title: "Nakshatra Shanti Puja", desc: "Clearing planetary doshas to bring balance.", img: nakshatraShantiImg.url },
  { title: "Pitra Dosh Puja", desc: "For families seeking peace from ancestral doshas.", img: pitraDoshImg.url },
];

function PujaSection() {
  return (
    <section id="puja" className="relative z-10 py-24 px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHead
          eyebrow="Puja & Anusthan"
          title="Rituals for Peace & Prosperity"
          subtitle="Traditional pujas performed with authentic Vedic procedure and personalised intention."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PUJAS.map((p, i) => (
            <div
              key={i}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-[rgba(212,175,55,0.25)] bg-gradient-to-b from-[rgba(20,14,8,0.85)] to-[rgba(10,8,6,0.95)] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.6)] transition-all duration-500 hover:border-[rgba(212,175,55,0.6)] hover:shadow-[0_20px_50px_-15px_rgba(212,175,55,0.25)] hover:-translate-y-1"
              style={{ animation: `var(--animate-fade-up)`, animationDelay: `${i * 0.06}s` }}
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0806] via-[#0a0806]/50 to-transparent" />
                <div className="absolute top-3 right-3 h-9 w-9 rounded-full grid place-items-center border border-[rgba(212,175,55,0.6)] bg-black/40 backdrop-blur-sm text-[#e8ce8e]">
                  <Sparkles className="h-4 w-4" />
                </div>
                <h3 className="absolute bottom-3 left-4 right-4 font-display text-lg text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                  {p.title}
                </h3>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <p className="text-sm text-[#cfcfcf]/85 leading-relaxed flex-1">
                  {p.desc}
                </p>
                <a
                  href={WHATSAPP}
                  className="mt-4 inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#d4af37] hover:text-[#e8ce8e] transition-colors"
                >
                  Book Puja <ArrowRight className="h-3 w-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ GALLERY ============ */
function Gallery() {
  const imgs = [
    gallery1.url,
    gallery2.url,
    gallery3.url,
  ];

  return (
    <section
      className="relative z-10 py-24 px-6 lg:px-10 border-y border-[rgba(212,175,55,0.12)]"
      style={{
        background: "linear-gradient(180deg, rgba(16,22,58,0.5), rgba(11,16,38,0.2))",
      }}
    >
      <div className="mx-auto max-w-7xl">
        <SectionHead
          eyebrow="Moments & rituals"
          title="Gallery"
          subtitle="Glimpses from consultations, pujas and spiritual gatherings."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {imgs.map((src, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl border border-[rgba(212,175,55,0.2)] aspect-[3/4]"
            >
              <img
                src={src}
                alt={`Gallery ${i + 1}`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1026]/80 via-transparent to-transparent opacity-70 group-hover:opacity-40 transition-opacity" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

/* ============ TESTIMONIALS ============ */
const TESTIMONIALS = [
  {
    quote:
      "A business issue and mounting losses turned around after powerful remedies to ward off competition — my business now runs profitably and trouble-free.",
    name: "Rakesh Gupta",
    city: "Delhi, India",
    photo: rakeshGuptaPhoto.url,
  },
  {
    quote:
      "Simple astrological remedies helped resolve a long property conflict within my family, along with guidance for a more peaceful life together.",
    name: "Sonakshi Sharma",
    city: "Manchester, UK",
    photo: sonakshiSharmaPhoto.url,
  },
  {
    quote:
      "After a breakup, practical guidance helped bring my partner back within weeks — we're now planning our wedding.",
    name: "Jason",
    city: "Miami, USA",
    photo: jasonPhoto.url,
  },
  {
    quote:
      "My partner has become far more understanding, with useful ideas for strengthening our relationship going forward.",
    name: "Jasspreet Kaur",
    city: "Ottawa, Canada",
    photo: jasspreetKaurPhoto.url,
  },
  {
    quote:
      "Things improved noticeably within a few months — the healthiest relationship I've been in, with steady support throughout.",
    name: "Sita Bhardwaj",
    city: "Surat, Gujarat",
    photo: sitaBhardwajPhoto.url,
  },
  {
    quote:
      "Honest, grounded advice rather than empty promises — a rare quality in this field.",
    name: "Verified Client",
    city: "International",
    photo: verifiedClientPhoto.url,
  },
];

function Testimonials() {
  return (
    <section id="testimonials" className="relative z-10 py-24 px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHead
          eyebrow="In their words"
          title="What Our Clients Say"
          subtitle="Real experiences from clients across India and abroad."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="glass-card p-7 flex flex-col relative"
              style={{ animation: `var(--animate-fade-up)`, animationDelay: `${i * 0.08}s` }}
            >
              <Quote className="absolute top-5 right-5 h-8 w-8 text-[#d4af37]/20" />
              <div className="flex gap-1 text-[#d4af37]">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-[#d4af37]" />
                ))}
              </div>
              <p className="mt-4 font-serif italic text-[1.05rem] leading-relaxed text-white/90">
                “{t.quote}”
              </p>
              <div className="mt-6 pt-5 border-t border-[rgba(212,175,55,0.15)] flex items-center gap-3">
                <img
                  src={(t as any).photo ?? "https://via.placeholder.com/500"}
                  alt={t.name}
                  className="h-11 w-11 rounded-full object-cover border border-[rgba(212,175,55,0.4)]"
                 loading="lazy" decoding="async" />
                <div>
                  <div className="text-sm font-medium text-[#e8ce8e]">{t.name}</div>
                  <div className="text-xs text-[#cfcfcf]/70">{t.city}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ BLOG ============ */
function Blog() {
  const posts = BLOG_POSTS.slice(0, 3);
  return (
    <section
      id="blog"
      className="relative z-10 py-24 px-6 lg:px-10 border-y border-[rgba(212,175,55,0.12)]"
      style={{
        background: "linear-gradient(180deg, rgba(16,22,58,0.5), rgba(11,16,38,0.2))",
      }}
    >
      <div className="mx-auto max-w-7xl">
        <SectionHead
          eyebrow="Insights & wisdom"
          title="From the Journal"
          subtitle="Vedic astrology reflections, remedies and guidance — updated regularly."
        />
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((b, i) => (
            <RouterLink
              key={b.slug}
              to="/blog/$slug"
              params={{ slug: b.slug }}
              className="glass-card group overflow-hidden !p-0 block"
              style={{ animation: `var(--animate-fade-up)`, animationDelay: `${i * 0.1}s` }}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={b.cover}
                  alt={b.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                 loading="lazy" decoding="async" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1026] via-transparent to-transparent" />
                <span className="absolute top-4 left-4 text-[0.7rem] uppercase tracking-widest px-3 py-1 rounded-full bg-[#0b1026]/80 border border-[rgba(212,175,55,0.4)] text-[#e8ce8e]">
                  {b.tag}
                </span>
              </div>
              <div className="p-6">
                <div className="text-xs text-[#cfcfcf]/70">{b.date} · {b.readTime}</div>
                <h3 className="mt-2 font-display text-lg text-white group-hover:text-[#e8ce8e] transition-colors">
                  {b.title}
                </h3>
                <p className="mt-2 text-sm text-[#cfcfcf]/70 line-clamp-2">{b.excerpt}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#d4af37]">
                  Read More <ArrowRight className="h-3 w-3" />
                </span>
              </div>
            </RouterLink>
          ))}
        </div>
        <div className="mt-12 text-center">
          <RouterLink to="/blog" className="btn-ghost-gold">
            View All Articles <ArrowRight className="h-4 w-4" />
          </RouterLink>
        </div>
      </div>
    </section>
  );
}

/* ============ YOUTUBE SHORTS ============ */
/* 👇 Add / remove / change YouTube links here. Works with:
   - Shorts URL:   https://www.youtube.com/shorts/VIDEO_ID
   - Watch URL:    https://www.youtube.com/watch?v=VIDEO_ID
   - Short URL:    https://youtu.be/VIDEO_ID
   - Or just the raw VIDEO_ID string.
*/
const SHORTS: { url: string; title?: string }[] = [
  { url: "https://youtube.com/shorts/AZqDoJuA2kw", title: "V@shi-karan for Love & Divorce Solutions" },
  { url: "https://youtube.com/shorts/HfUEqj0gzRc", title: "Kamakhya V@shi-karan Mantra for Boyfriend" },
  { url: "https://youtube.com/shorts/m0rFkhJfNiI", title: "Daily Astrology Guidance" },
  { url: "https://youtube.com/shorts/Gdt43mMbOQI", title: "Tantra Mantra Remedies" },
];

function extractYouTubeId(input: string): string {
  const s = input.trim();
  if (/^[a-zA-Z0-9_-]{11}$/.test(s)) return s;
  const patterns = [
    /youtube\.com\/shorts\/([a-zA-Z0-9_-]{11})/,
    /youtube\.com\/watch\?v=([a-zA-Z0-9_-]{11})/,
    /youtu\.be\/([a-zA-Z0-9_-]{11})/,
    /youtube\.com\/embed\/([a-zA-Z0-9_-]{11})/,
  ];
  for (const p of patterns) {
    const m = s.match(p);
    if (m) return m[1];
  }
  return "";
}

function Shorts() {
  return (
    <section id="shorts" className="relative z-10 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHead
          eyebrow="Watch & Learn"
          title="YouTube Shorts"
          subtitle="Bite-sized Vedic wisdom, remedies and daily guidance from Ajay Shastri Ji."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SHORTS.map((s, i) => {
            const id = extractYouTubeId(s.url);
            return (
              <div
                key={i}
                className="glass-card group overflow-hidden rounded-2xl border border-[#d4af37]/20 hover:border-[#d4af37]/60 transition-all duration-500 hover:-translate-y-1"
              >
                <div className="relative w-full" style={{ aspectRatio: "9 / 16" }}>
                  {id ? (
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src={`https://www.youtube.com/embed/${id}?rel=0&modestbranding=1`}
                      title={s.title ?? `YouTube Short ${i + 1}`}
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-sm text-[#cfcfcf] p-4 text-center">
                      Invalid YouTube link
                    </div>
                  )}
                </div>
                {s.title && (
                  <div className="p-4 border-t border-[#d4af37]/10">
                    <p className="font-display text-base gold-text truncate">{s.title}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


/* ============ FAQ ============ */
const FAQS = [
  {
    q: "How soon will I see results after a consultation?",
    a: "Timelines vary based on the case, but most clients notice initial shifts within a few weeks. Complex situations may take longer with sustained remedies.",
  },
  {
    q: "Do you offer online consultations?",
    a: "Yes, we offer telephone, video conferencing and in-person consultations. International clients are supported 24×7.",
  },
  {
    q: "Is the consultation confidential?",
    a: "Absolutely. All consultations with Ajay Shastri Ji are strictly confidential.",
  },
  {
    q: "What information do you need for kundli analysis?",
    a: "Your full date of birth, exact time of birth, and place of birth are required for accurate kundli preparation.",
  },
  {
    q: "Do you provide a guarantee?",
    a: "Yes — if the work is not done, I will not take my service charge. Ajay Shastri Ji stands behind every consultation.",
  },
];

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="relative z-10 py-24 px-6 lg:px-10">
      <div className="mx-auto max-w-4xl">
        <SectionHead
          eyebrow="Answers"
          title="Frequently Asked Questions"
        />
        <div className="space-y-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`glass-card !p-0 overflow-hidden transition-all ${
                  isOpen ? "border-[rgba(212,175,55,0.5)]" : ""
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left"
                >
                  <span className="font-display text-base lg:text-lg text-white">
                    {f.q}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-[#d4af37] shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-[#cfcfcf] leading-relaxed text-[0.95rem]">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ============ CONTACT ============ */
function Contact() {
  return (
    <section
      id="contact"
      className="relative z-10 py-24 px-6 lg:px-10 border-t border-[rgba(212,175,55,0.12)]"
      style={{
        background: "linear-gradient(180deg, rgba(16,22,58,0.6), rgba(11,16,38,0.3))",
      }}
    >
      <div className="mx-auto max-w-7xl">
        <SectionHead
          eyebrow="Appointment"
          title="Consult in the Way That Suits You"
          subtitle="Choose the mode of consultation that fits your schedule."
        />

        <div className="grid md:grid-cols-3 gap-5 mb-16">
          {[
            { icon: Phone, title: "Telephone", l1: "India: 9 AM – 8 PM", l2: "Outside India: 24×7" },
            { icon: HomeIcon, title: "Personal Meeting", l1: "Monday to Saturday", l2: "11 AM–2 PM & 4 PM–8 PM" },
            { icon: Video, title: "Video Conferencing", l1: "India: 9 AM – 8 PM", l2: "Outside India: 24×7" },
          ].map((c, i) => (
            <div key={i} className="glass-card p-8 text-center">
              <div
                className="mx-auto mb-4 h-14 w-14 rounded-full grid place-items-center"
                style={{ background: "var(--gradient-gold)", boxShadow: "var(--shadow-glow-gold)" }}
              >
                <c.icon className="h-6 w-6 text-[#0b1026]" />
              </div>
              <h3 className="font-display text-lg text-white">{c.title}</h3>
              <p className="mt-2 text-sm text-[#cfcfcf]">{c.l1}</p>
              <p className="text-sm text-[#cfcfcf]">{c.l2}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact form */}
          <div className="glass-card p-8">
            <h3 className="font-display text-2xl gold-text">Send Your Kundli Details</h3>
            <p className="mt-2 text-sm text-[#cfcfcf]">
              Share your birth details for accurate kundli analysis — reply within 6 hours.
            </p>
            <form
              className="mt-6 space-y-4"
              onSubmit={async (e) => {
                e.preventDefault();
                const f = e.currentTarget as HTMLFormElement;
                const fd = new FormData(f);
                const get = (k: string) => String(fd.get(k) ?? "").trim();
                const fileInput = f.elements.namedItem("kundli") as HTMLInputElement | null;
                const file = fileInput?.files?.[0] ?? null;
                if (file && file.size > 10 * 1024 * 1024) {
                  alert("File is too large. Please upload a file under 10 MB.");
                  return;
                }
                const lines = [
                  "🙏 *New Kundli Consultation Request*",
                  "",
                  `*Name:* ${get("name")}`,
                  `*Phone:* ${get("phone")}`,
                  `*Email:* ${get("email") || "-"}`,
                  `*Gender:* ${get("gender") || "-"}`,
                  "",
                  "*Birth Details:*",
                  `• Date of Birth: ${get("dob") || "-"}`,
                  `• Time of Birth: ${get("tob") || "-"}`,
                  `• Place of Birth: ${get("pob") || "-"}`,
                  "",
                  `*Concern / Subject:* ${get("subject") || "-"}`,
                  `*Message:* ${get("message") || "-"}`,
                  file ? `\n📎 *Attached:* ${file.name}` : "",
                ];
                const message = lines.filter(Boolean).join("\n");

                // Try native share (mobile) — this can share text + file directly to WhatsApp
                if (file && typeof navigator !== "undefined" && "canShare" in navigator) {
                  try {
                    const shareData: ShareData = { text: message, files: [file] };
                    if (navigator.canShare(shareData)) {
                      await navigator.share(shareData);
                      f.reset();
                      return;
                    }
                  } catch {
                    // fall through to WhatsApp URL
                  }
                }

                const text = encodeURIComponent(message);
                window.open(
                  `https://api.whatsapp.com/send/?phone=919310901707&text=${text}&type=phone_number&app_absent=0`,
                  "_blank",
                );
                if (file) {
                  setTimeout(() => {
                    alert(
                      `WhatsApp chat khul gaya hai.\n\nApni kundli file "${file.name}" ko WhatsApp chat me attach (📎) button se bhej dein.`,
                    );
                  }, 400);
                }
              }}
            >

              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  required
                  name="name"
                  placeholder="Full Name *"
                  className="w-full rounded-xl bg-white/[0.04] border border-[rgba(212,175,55,0.2)] px-4 py-3 text-sm text-white placeholder:text-[#cfcfcf]/50 focus:outline-none focus:border-[#d4af37] focus:bg-white/[0.06] transition"
                />
                <input
                  required
                  name="phone"
                  type="tel"
                  placeholder="Phone Number *"
                  className="w-full rounded-xl bg-white/[0.04] border border-[rgba(212,175,55,0.2)] px-4 py-3 text-sm text-white placeholder:text-[#cfcfcf]/50 focus:outline-none focus:border-[#d4af37] focus:bg-white/[0.06] transition"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  className="w-full rounded-xl bg-white/[0.04] border border-[rgba(212,175,55,0.2)] px-4 py-3 text-sm text-white placeholder:text-[#cfcfcf]/50 focus:outline-none focus:border-[#d4af37] focus:bg-white/[0.06] transition"
                />
                <select
                  name="gender"
                  required
                  defaultValue=""
                  className="w-full rounded-xl bg-white/[0.04] border border-[rgba(212,175,55,0.2)] px-4 py-3 text-sm text-white focus:outline-none focus:border-[#d4af37] focus:bg-white/[0.06] transition"
                >
                  <option value="" disabled className="bg-[#0b1026]">
                    Gender *
                  </option>
                  <option value="Male" className="bg-[#0b1026]">Male</option>
                  <option value="Female" className="bg-[#0b1026]">Female</option>
                  <option value="Other" className="bg-[#0b1026]">Other</option>
                </select>
              </div>

              <div className="rounded-xl border border-[rgba(212,175,55,0.15)] bg-white/[0.02] p-4 space-y-3">
                <p className="text-xs font-medium uppercase tracking-wider text-[#e8ce8e]">
                  Kundli / Birth Details
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-[#cfcfcf]/70 mb-1 block">Date of Birth *</label>
                    <input
                      required
                      name="dob"
                      type="date"
                      className="w-full rounded-xl bg-white/[0.04] border border-[rgba(212,175,55,0.2)] px-4 py-3 text-sm text-white focus:outline-none focus:border-[#d4af37] focus:bg-white/[0.06] transition [color-scheme:dark]"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-[#cfcfcf]/70 mb-1 block">Time of Birth *</label>
                    <input
                      required
                      name="tob"
                      type="time"
                      className="w-full rounded-xl bg-white/[0.04] border border-[rgba(212,175,55,0.2)] px-4 py-3 text-sm text-white focus:outline-none focus:border-[#d4af37] focus:bg-white/[0.06] transition [color-scheme:dark]"
                    />
                  </div>
                </div>
                <input
                  required
                  name="pob"
                  placeholder="Place of Birth (City, State, Country) *"
                  className="w-full rounded-xl bg-white/[0.04] border border-[rgba(212,175,55,0.2)] px-4 py-3 text-sm text-white placeholder:text-[#cfcfcf]/50 focus:outline-none focus:border-[#d4af37] focus:bg-white/[0.06] transition"
                />
                <div>
                  <label className="text-xs text-[#cfcfcf]/70 mb-1 block">
                    Existing Kundli / Photo <span className="text-[#cfcfcf]/50">(optional, max 10 MB)</span>
                  </label>
                  <input
                    name="kundli"
                    type="file"
                    accept="image/*,application/pdf"
                    className="w-full rounded-xl bg-white/[0.04] border border-dashed border-[rgba(212,175,55,0.3)] px-4 py-3 text-sm text-[#cfcfcf] file:mr-3 file:rounded-lg file:border-0 file:bg-[#d4af37]/20 file:px-3 file:py-1.5 file:text-xs file:font-medium file:text-[#e8ce8e] file:cursor-pointer hover:file:bg-[#d4af37]/30 focus:outline-none focus:border-[#d4af37] transition cursor-pointer"
                  />
                  <p className="text-[11px] text-[#cfcfcf]/50 mt-1">
                    JPG, PNG or PDF — apni purani kundli ki photo bhej sakte hain.
                  </p>
                </div>

              </div>

              <input
                name="subject"
                placeholder="Subject / Concern (Love, Marriage, Career...)"
                className="w-full rounded-xl bg-white/[0.04] border border-[rgba(212,175,55,0.2)] px-4 py-3 text-sm text-white placeholder:text-[#cfcfcf]/50 focus:outline-none focus:border-[#d4af37] focus:bg-white/[0.06] transition"
              />
              <textarea
                name="message"
                rows={4}
                placeholder="Tell us briefly about your situation..."
                className="w-full rounded-xl bg-white/[0.04] border border-[rgba(212,175,55,0.2)] px-4 py-3 text-sm text-white placeholder:text-[#cfcfcf]/50 focus:outline-none focus:border-[#d4af37] focus:bg-white/[0.06] transition resize-none"
              />
              <button type="submit" className="btn-gold w-full">
                <MessageCircle className="h-4 w-4" /> Send via WhatsApp
              </button>
              <p className="text-[11px] text-[#cfcfcf]/60 text-center">
                Your details are sent directly to Ajay Shastri Ji on WhatsApp — 100% confidential.
              </p>
            </form>
          </div>

          {/* Map + info */}
          <div className="space-y-6">
            <div className="glass-card !p-2 overflow-hidden aspect-[16/9] sm:aspect-[2/1]">
              <iframe
                title="Location map"
                src="https://www.google.com/maps?q=P455%2B75%20New%20Delhi%2C%20Delhi&output=embed"
                className="w-full h-full rounded-2xl border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <div className="glass-card flex flex-col gap-3 p-6">
              <ContactRow icon={Phone} label="Call" value={PHONE} href={TEL} />
              <ContactRow
                icon={MessageCircle}
                label="WhatsApp"
                value="Chat instantly"
                href={WHATSAPP}
              />
              <ContactRow
                icon={Mail}
                label="Email"
                value="info@ajayshastriastrologer.com"
                href="mailto:info@ajayshastriastrologer.com"
              />
              <ContactRow
                icon={MapPin}
                label="Location"
                value="P455+75, New Delhi, Delhi"
                href="https://www.google.com/maps?q=P455%2B75%20New%20Delhi%2C%20Delhi"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Phone;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="flex items-start gap-4 py-1 group">
      <div className="mt-0.5 h-11 w-11 shrink-0 rounded-xl grid place-items-center bg-[rgba(212,175,55,0.1)] border border-[rgba(212,175,55,0.3)] text-[#e8ce8e] group-hover:bg-[rgba(212,175,55,0.2)] transition">
        <Icon className="h-5 w-5" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="text-[0.7rem] uppercase tracking-widest text-[#cfcfcf]/70">
          {label}
        </div>
        <div className="mt-1 break-words text-sm leading-relaxed text-white group-hover:text-[#e8ce8e] transition">
          {value}
        </div>
      </div>
    </div>
  );
  return href ? <a href={href}>{inner}</a> : inner;
}

/* ============ FINAL CTA ============ */
function FinalCta() {
  return (
    <section className="relative z-10 px-6 lg:px-10 py-24">
      <div className="mx-auto max-w-5xl relative overflow-hidden rounded-[32px] border border-[rgba(212,175,55,0.3)] p-12 lg:p-16 text-center">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(ellipse at top, rgba(108,60,240,0.35), transparent 60%), radial-gradient(ellipse at bottom, rgba(212,175,55,0.2), transparent 60%), linear-gradient(180deg, #10163a, #0b1026)",
          }}
        />
        <span className="eyebrow">If work is not done, money is returned</span>
        <h2 className="section-title mt-4 font-display max-w-3xl mx-auto">
          One honest conversation could change your situation
        </h2>
        <p className="mt-5 text-[#cfcfcf] max-w-xl mx-auto">
          Reach out today for a confidential consultation with Ajay Shastri Ji.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <a href={WHATSAPP} className="btn-gold">
            <MessageCircle className="h-4 w-4" /> Message on WhatsApp
          </a>
          <a href={TEL} className="btn-ghost-gold">
            <Phone className="h-4 w-4" /> {PHONE}
          </a>
        </div>
      </div>
    </section>
  );
}

/* ============ FOOTER ============ */
function Footer() {
  return (
    <footer className="relative z-10 border-t border-[rgba(212,175,55,0.15)] bg-[rgba(11,16,38,0.6)] backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
        <div className="grid lg:grid-cols-[1.5fr_1fr_1fr_1.2fr] gap-10">
          <div>
            <div className="flex items-center gap-3">
              <div className="relative h-11 w-11 rounded-full grid place-items-center bg-gradient-to-br from-[#1a1447] via-[#0b1026] to-[#0b1026] border border-[rgba(212,175,55,0.55)] shadow-[var(--shadow-glow-gold)] overflow-hidden">
                <span
                  aria-hidden
                  className="absolute inset-[3px] rounded-full border border-[rgba(212,175,55,0.25)]"
                />
                <svg
                  viewBox="0 0 48 48"
                  className="relative h-5 w-5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden
                >
                  <defs>
                    <linearGradient id="asGoldFooter" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#f5d980" />
                      <stop offset="55%" stopColor="#d4af37" />
                      <stop offset="100%" stopColor="#8a6b1c" />
                    </linearGradient>
                  </defs>
                  <g stroke="url(#asGoldFooter)" strokeWidth="1" strokeLinecap="round" opacity="0.55">
                    <line x1="24" y1="2" x2="24" y2="6" />
                    <line x1="24" y1="42" x2="24" y2="46" />
                    <line x1="2" y1="24" x2="6" y2="24" />
                    <line x1="42" y1="24" x2="46" y2="24" />
                    <line x1="8" y1="8" x2="11" y2="11" />
                    <line x1="37" y1="37" x2="40" y2="40" />
                    <line x1="8" y1="40" x2="11" y2="37" />
                    <line x1="37" y1="11" x2="40" y2="8" />
                  </g>
                  <text
                    x="24"
                    y="31"
                    textAnchor="middle"
                    fontFamily="Cormorant Garamond, Playfair Display, serif"
                    fontWeight="600"
                    fontSize="20"
                    fill="url(#asGoldFooter)"
                    letterSpacing="-0.5"
                  >
                    AS
                  </text>
                </svg>
              </div>
              <div>
                <div className="font-display text-lg gold-text">Ajay Shastri Ji</div>
                <div className="font-serif italic text-xs text-[#cfcfcf]/80">
                  Vedic Astrologer &amp; Spiritual Healer
                </div>
              </div>
            </div>
            <p className="mt-5 text-sm text-[#cfcfcf] leading-relaxed max-w-sm">
              Astrology has real significance in shaping how we live and find
              purpose. Reach out for guidance toward a calmer, more settled path
              forward.
            </p>
            <div className="mt-5 flex gap-3">
              {[
                { icon: Facebook, href: "https://www.facebook.com/profile.php?id=100088505498906" },
                { icon: Instagram, href: "https://www.instagram.com/kishan_shastri_ji/" },
                { icon: Send, href: "https://t.me/+919310901707" },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  aria-label="social"
                  className="h-10 w-10 rounded-full grid place-items-center border border-[rgba(212,175,55,0.3)] text-[#e8ce8e] hover:bg-[rgba(212,175,55,0.15)] hover:border-[#d4af37] transition"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <FooterCol
            title="Quick Links"
            items={[
              { label: "About", href: "#about" },
              { label: "Services", href: "#services" },
              { label: "Puja", href: "#puja" },
              { label: "Blog", href: "/blog" },
              { label: "Contact", href: "#contact" },
            ]}
          />
          <FooterCol
            title="Services"
            items={[
              { label: "Love Problem Solution", href: "#services" },
              { label: "Marriage Problem Solution", href: "#services" },
              { label: "Husband Wife Dispute", href: "#services" },
              { label: "Career & Business", href: "#services" },
              { label: "Negative Energy Removal", href: "#services" },
            ]}
          />

          <div>
            <h4 className="font-display text-base text-[#e8ce8e] mb-4">
              Newsletter
            </h4>
            <p className="text-sm text-[#cfcfcf]/80 mb-4">
              Monthly Vedic insights, remedies and horoscope highlights.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const email = (form.elements.namedItem("email") as HTMLInputElement)?.value?.trim();
                if (!email) return;
                const msg = `Hello Ajay Shastri Ji,%0A%0AI would like to subscribe to your monthly Vedic newsletter.%0A%0AEmail: ${encodeURIComponent(email)}`;
                window.open(`https://api.whatsapp.com/send/?phone=919310901707&text=${msg}`, "_blank");
                form.reset();
                alert("Thank you! Your subscription request has been sent. We'll add you shortly.");
              }}
              className="flex flex-col sm:flex-row gap-2 w-full"
            >
              <input
                name="email"
                type="email"
                required
                placeholder="Your email"
                className="w-full sm:flex-1 min-w-0 rounded-full bg-white/[0.05] border border-[rgba(212,175,55,0.25)] px-4 py-2.5 text-sm text-white placeholder:text-[#cfcfcf]/50 focus:outline-none focus:border-[#d4af37]"
              />
              <button
                type="submit"
                className="w-full sm:w-auto shrink-0 rounded-full px-5 py-2.5 text-sm font-medium text-[#0b1026] cursor-pointer"
                style={{ background: "var(--gradient-gold)" }}
              >
                Join
              </button>
            </form>
            <div className="mt-6 flex flex-col gap-4 text-sm">
              <a href={TEL} className="flex items-start gap-3 leading-relaxed text-[#cfcfcf] hover:text-[#e8ce8e]">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#d4af37]" /> <span>{PHONE}</span>
              </a>
              <a
                href="mailto:info@ajayshastriastrologer.com"
                className="flex items-start gap-3 leading-relaxed text-[#cfcfcf] hover:text-[#e8ce8e]"
              >
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#d4af37]" /> <span className="min-w-0 break-words">info@ajayshastriastrologer.com</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-[rgba(212,175,55,0.12)] flex flex-wrap justify-between gap-4 text-xs text-[#cfcfcf]/70">
          <div>© {new Date().getFullYear()} Ajay Shastri Ji. All Rights Reserved.</div>
          <div className="flex gap-5">
            <RouterLink to="/terms" className="hover:text-[#e8ce8e]">Terms &amp; Conditions</RouterLink>
            <RouterLink to="/privacy" className="hover:text-[#e8ce8e]">Privacy Policy</RouterLink>
            <RouterLink to="/refund" className="hover:text-[#e8ce8e]">Refund Policy</RouterLink>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  items,
}: {
  title: string;
  items: { label: string; href?: string }[];
}) {
  return (
    <div>
      <h4 className="font-display text-base text-[#e8ce8e] mb-4">{title}</h4>
      <ul className="space-y-2.5 text-sm">
        {items.map((it, i) => (
          <li key={i}>
            <a
              href={it.href || "#"}
              className="text-[#cfcfcf] hover:text-[#e8ce8e] transition-colors inline-flex items-center gap-2 group"
            >
              <span className="h-1 w-1 rounded-full bg-[#d4af37] opacity-60 group-hover:opacity-100" />
              {it.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
