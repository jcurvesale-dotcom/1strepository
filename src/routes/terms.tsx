import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Astrologer Ajay Shastri Ji" },
      {
        name: "description",
        content:
          "Terms and conditions for using the website and astrology consultation services of Ajay Shastri Ji.",
      },
      { property: "og:title", content: "Terms & Conditions — Astrologer Ajay Shastri Ji" },
      {
        property: "og:description",
        content:
          "Please read the terms carefully before booking any consultation or puja service.",
      },
      { property: "og:url", content: "https://celestial-whisper-art.lovable.app/terms" },
    ],
    links: [{ rel: "canonical", href: "https://celestial-whisper-art.lovable.app/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <div className="min-h-screen bg-[#0b1026] text-[#e8e8f0]">
      <div className="mx-auto max-w-3xl px-5 py-16">
        <Link to="/" className="text-sm text-[#e8ce8e] hover:underline">← Back to home</Link>
        <h1 className="mt-6 font-serif text-4xl md:text-5xl text-[#e8ce8e]">Terms & Conditions</h1>
        <p className="mt-2 text-sm text-[#cfcfcf]/70">Updated: July 2026</p>

        <article className="prose prose-invert mt-8 max-w-none prose-headings:font-serif prose-headings:text-[#e8ce8e] prose-a:text-[#e8ce8e] prose-strong:text-white">
          <p>
            By accessing this website or booking any service with Astrologer Ajay Shastri Ji, you
            agree to the following terms and conditions. Please read them carefully.
          </p>

          <h2>1. Nature of Services</h2>
          <p>
            All astrological consultations, remedies, pujas, and guidance are offered on the basis
            of Vedic astrology and are meant for personal insight and spiritual guidance. They are
            not a substitute for professional medical, legal, financial, or psychological advice.
          </p>

          <h2>2. Accuracy of Information</h2>
          <p>
            Predictions and remedies depend on the accuracy of the birth details you share
            (date, time, place). We are not responsible for outcomes based on incorrect or
            incomplete information.
          </p>

          <h2>3. Booking & Payments</h2>
          <ul>
            <li>Consultation and puja fees must be paid in advance to confirm the booking.</li>
            <li>Prices, timings, and puja items may change without prior notice.</li>
            <li>All payments are processed via secure payment gateways.</li>
          </ul>

          <h2>4. Age Restriction</h2>
          <p>
            Services are intended for users aged 18 and above. Minors may consult only with the
            consent of a parent or guardian.
          </p>

          <h2>5. User Conduct</h2>
          <p>
            You agree not to misuse the website, share false information, or use our services
            for any unlawful purpose. Abusive behaviour towards the astrologer or staff will
            result in immediate cancellation without refund.
          </p>

          <h2>6. Intellectual Property</h2>
          <p>
            All content on this website — text, images, logos, articles, remedies, and design —
            is the property of Astrologer Ajay Shastri Ji and may not be copied, reproduced, or
            republished without written permission.
          </p>

          <h2>7. Limitation of Liability</h2>
          <p>
            We do not guarantee any specific worldly outcome. All decisions taken after a
            consultation are the sole responsibility of the client. We shall not be liable for
            any direct or indirect loss arising out of the use of our services.
          </p>

          <h2>8. Governing Law</h2>
          <p>
            These terms are governed by the laws of India. Any dispute shall be subject to the
            exclusive jurisdiction of the courts of the astrologer’s home city.
          </p>

          <h2>9. Contact</h2>
          <p>
            For any query about these terms, WhatsApp or call <strong>+91‑9310901707</strong> or
            email <strong>info@ajayshastriastrologer.com</strong>.
          </p>
        </article>
      </div>
    </div>
  );
}
