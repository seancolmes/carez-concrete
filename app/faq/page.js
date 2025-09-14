export const metadata = { title: "FAQ | Carez Concrete" };

const faqs = [
  { q: "Do you handle ADA inspections?", a: "Yes. We pre-check slopes and landings during formwork and can provide as-built measurements. We coordinate with inspectors so your ramp passes the first time." },
  { q: "Residential and commercial?", a: "Both. From small trip-hazard repairs to multi-day pours for municipal and commercial sites." },
  { q: "How soon can you start?", a: "Typically 1–2 weeks from approval depending on scope, weather, and permitting." },
  { q: "What finishes do you offer?", a: "Standard broom, hard-trowel, exposed aggregate, and stamping. We also do saw-cut control joints and board-form looks for walls." },
  { q: "Do you pour in winter?", a: "Yes, with cold-weather practices as needed (accelerators, blankets, scheduling around temps). Weather may affect finish options & cure times." },
  { q: "What about drainage?", a: "We set elevations and transitions to promote drainage and avoid ponding. We’ll call out issues before the pour." },
  { q: "Are you licensed, bonded, insured?", a: "Yes. Documentation available upon request." },
  { q: "How do estimates work?", a: "Tell us your scope, location, schedule, and access. We’ll provide a straight number. As-built documentation is available if required." },
];

export default function FAQPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="font-head text-4xl font-extrabold">Frequently Asked Questions</h1>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {faqs.map((f) => (
          <div key={f.q} className="rounded-2xl border border-neutral-800 bg-neutral-800/40 p-6 shadow-sm">
            <div className="font-semibold text-white">{f.q}</div>
            <div className="mt-2 text-sm text-neutral-300">{f.a}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
