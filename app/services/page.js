export const metadata = { title: "Services | Carez Concrete" };

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="font-head text-4xl font-extrabold">Services</h1>
      <p className="mt-3 text-neutral-300">We offer residential and commercial concrete work.</p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <section className="rounded-2xl border border-neutral-800 bg-neutral-800/40 p-6">
          <h2 className="text-2xl font-bold mb-2">Flatwork</h2>
          <p className="text-neutral-300">
            Driveways, slabs, patios, broom or hard-trowel finish. Options for exposed aggregate and stamping. Curb & gutter.
          </p>
          <ul className="mt-3 list-disc pl-5 text-neutral-300 text-sm space-y-1">
            <li>Driveways & garages</li>
            <li>Patios & walkways</li>
            <li>Exposed aggregate, stamping, saw-cut control joints</li>
            <li>Curb & gutter</li>
          </ul>
        </section>

        <section className="rounded-2xl border border-neutral-800 bg-neutral-800/40 p-6">
          <h2 className="text-2xl font-bold mb-2">Structural</h2>
          <p className="text-neutral-300">Retaining walls, footings, grade beams, and structural slabs—coordinated with rebar schedules.</p>
          <ul className="mt-3 list-disc pl-5 text-neutral-300 text-sm space-y-1">
            <li>Retaining walls (drain & backfill)</li>
            <li>Footings, beams, columns, piers</li>
            <li>ADA-compliant ramps & walkways</li>
            <li>As-builts & inspection support available</li>
          </ul>
        </section>

        <section className="rounded-2xl border border-neutral-800 bg-neutral-800/40 p-6 md:col-span-2">
          <h2 className="text-2xl font-bold mb-2">Repairs & Replacements</h2>
          <p className="text-neutral-300">Trip hazards, spalls, cracked panels—demo, subgrade correction, rebar, re-pour, clean broom finish.</p>
        </section>
      </div>
    </div>
  );
}
