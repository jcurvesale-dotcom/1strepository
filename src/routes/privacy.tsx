import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Astrologer Ajay Shastri Ji" },
      {
        name: "description",
        content:
          "How Astrologer Ajay Shastri Ji collects, uses, and protects your personal information during consultations and website use.",
      },
      { property: "og:title", content: "Privacy Policy — Astrologer Ajay Shastri Ji" },
      {
        property: "og:description",
        content:
          "Read our privacy policy to understand how your data is handled during astrology consultations.",
      },
      { property: "og:url", content: "https://celestial-whisper-art.lovable.app/privacy" },
    ],
    links: [{ rel: "canonical", href: "https://celestial-whisper-art.lovable.app/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return <LegalLayout title="Privacy Policy" updated="Updated: July 2026">
    <p>
      Astrologer Ajay Shastri Ji ("we", "our", "us") respects your privacy. This Privacy
      Policy explains what information we collect when you visit our website or book a
      consultation, and how we use and protect it.
    </p>

    <h2>1. Information We Collect</h2>
    <ul>
      <li><strong>Personal details</strong> you provide voluntarily: name, date, time and place of birth, phone number, email, and details of your problem.</li>
      <li><strong>Payment information</strong> processed by secure third‑party payment gateways; we do not store card details on our servers.</li>
      <li><strong>Website usage data</strong> such as pages viewed, browser type, and approximate location, collected via cookies and analytics tools.</li>
    </ul>

    <h2>2. How We Use Your Information</h2>
    <ul>
      <li>To prepare your kundli (birth chart) and provide accurate astrological guidance.</li>
      <li>To contact you regarding your consultation, remedies, puja updates, or replies to your queries.</li>
      <li>To improve our website, services, and customer support.</li>
      <li>To comply with legal obligations where applicable.</li>
    </ul>

    <h2>3. Confidentiality</h2>
    <p>
      All consultation details shared with Ajay Shastri Ji are treated as strictly confidential.
      Your personal problems, birth details, and conversations are never shared, sold, or
      disclosed to any third party without your written consent.
    </p>

    <h2>4. Cookies</h2>
    <p>
      We use cookies to remember your preferences and understand website traffic. You can
      disable cookies from your browser settings; some features may not work as expected.
    </p>

    <h2>5. Third‑Party Services</h2>
    <p>
      We may use trusted third‑party services (payment gateways, hosting, analytics, WhatsApp,
      email). These providers have their own privacy policies and process data only as needed
      to deliver the service.
    </p>

    <h2>6. Data Security</h2>
    <p>
      Reasonable technical and organisational measures are used to protect your data from
      unauthorised access. However, no online transmission is 100% secure, and you share
      information at your own discretion.
    </p>

    <h2>7. Your Rights</h2>
    <p>
      You may request access, correction, or deletion of your personal information at any
      time by contacting us at the details below.
    </p>

    <h2>8. Contact Us</h2>
    <p>
      For any privacy‑related question, WhatsApp or call <strong>+91‑9310901707</strong> or
      email <strong>info@ajayshastriastrologer.com</strong>.
    </p>
  </LegalLayout>;
}

function LegalLayout({ title, updated, children }: { title: string; updated: string; children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0b1026] text-[#e8e8f0]">
      <div className="mx-auto max-w-3xl px-5 py-16">
        <Link to="/" className="text-sm text-[#e8ce8e] hover:underline">← Back to home</Link>
        <h1 className="mt-6 font-serif text-4xl md:text-5xl text-[#e8ce8e]">{title}</h1>
        <p className="mt-2 text-sm text-[#cfcfcf]/70">{updated}</p>
        <article className="prose prose-invert mt-8 max-w-none prose-headings:font-serif prose-headings:text-[#e8ce8e] prose-a:text-[#e8ce8e] prose-strong:text-white">
          {children}
        </article>
      </div>
    </div>
  );
}
