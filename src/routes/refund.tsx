import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/refund")({
  head: () => ({
    meta: [
      { title: "Refund Policy — Astrologer Ajay Shastri Ji" },
      {
        name: "description",
        content:
          "Refund and cancellation policy for consultations, remedies, and puja services offered by Ajay Shastri Ji.",
      },
      { property: "og:title", content: "Refund Policy — Astrologer Ajay Shastri Ji" },
      {
        property: "og:description",
        content:
          "Clear guidelines on refunds, cancellations, and rescheduling of astrology sessions and pujas.",
      },
      { property: "og:url", content: "https://celestial-whisper-art.lovable.app/refund" },
    ],
    links: [{ rel: "canonical", href: "https://celestial-whisper-art.lovable.app/refund" }],
  }),
  component: RefundPage,
});

function RefundPage() {
  return (
    <div className="min-h-screen bg-[#0b1026] text-[#e8e8f0]">
      <div className="mx-auto max-w-3xl px-5 py-16">
        <Link to="/" className="text-sm text-[#e8ce8e] hover:underline">← Back to home</Link>
        <h1 className="mt-6 font-serif text-4xl md:text-5xl text-[#e8ce8e]">Refund & Cancellation Policy</h1>
        <p className="mt-2 text-sm text-[#cfcfcf]/70">Updated: July 2026</p>

        <article className="prose prose-invert mt-8 max-w-none prose-headings:font-serif prose-headings:text-[#e8ce8e] prose-a:text-[#e8ce8e] prose-strong:text-white">
          <p>
            We are committed to fair and transparent service. This policy explains when a refund
            or cancellation is possible for consultations, remedies, and puja bookings.
          </p>

          <h2>1. Consultations</h2>
          <ul>
            <li>
              If the consultation has <strong>not yet started</strong> and you cancel at least
              24 hours in advance, you may reschedule at no extra cost.
            </li>
            <li>
              Once a consultation is completed, fees are <strong>non‑refundable</strong>, as
              time and expertise have already been provided.
            </li>
            <li>
              If the consultation could not be conducted due to a fault on our side, the full
              amount will be refunded or rescheduled as per your preference.
            </li>
          </ul>

          <h2>2. Remedies & Pujas</h2>
          <ul>
            <li>
              Once puja samagri is purchased and the ritual is scheduled, cancellations are
              not permitted.
            </li>
            <li>
              <strong>Guarantee:</strong> If the committed work is not done or the puja is not
              performed for any reason on our side, <strong>Ajay Shastri Ji will not take his
              service charge</strong> and the puja fee will be adjusted or returned.
            </li>
            <li>
              Astrological results depend on individual karma, faith, and timing; specific
              worldly outcomes cannot be guaranteed, and this is not grounds for a refund.
            </li>
          </ul>

          <h2>3. Duplicate or Failed Payments</h2>
          <p>
            If you are charged twice or a payment fails while the amount is deducted, contact us
            within 7 days with the transaction details. The duplicate amount will be refunded to
            your original payment method within 7–10 working days.
          </p>

          <h2>4. How to Request a Refund</h2>
          <p>
            To request a refund, WhatsApp or email us with your name, booking date, and reason.
            Every request is reviewed personally and answered within 3 working days.
          </p>

          <h2>5. Contact</h2>
          <p>
            WhatsApp / Call: <strong>+91‑9310901707</strong><br />
            Email: <strong>info@ajayshastriastrologer.com</strong>
          </p>
        </article>
      </div>
    </div>
  );
}
