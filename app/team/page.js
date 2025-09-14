import Image from "next/image";

export const metadata = { title: "Team | Carez Concrete" };

const TEAM = [
  {
    name: "Nik Carez",
    role: "Owner / Project Lead",
    photo: "/team/nik.png",
    blurb:
      "11+ years in structural carpentry & concrete. Focused on ADA details, architectural walls, schedule certainty, and clean finishes.",
  },

  {
    name: "My Team",
    role: "Carpenters/Finishers",
    photo: "/team/richardmarlon.jpg",
    blurb:
      "I only employ the best of the best. Most of us have been working side by side for nearly a decade, and that chemistry shows in every pour. Our attention to detail, communication on site, and pride in craftsmanship are what set us apart — we don’t settle for “good enough,” and neither should you.",
  },
  
  
  // Add more members by duplicating this object
];

export default function TeamPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="font-head text-4xl font-extrabold">Our Team</h1>
      <p className="mt-3 text-neutral-300 max-w-2xl">
        We’re a small, hands-on crew focused on quality concrete, clean sites, attention to detail so work
        passes inspection the first time.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {TEAM.map((m) => (
          <article
            key={m.name}
            className="rounded-2xl border border-neutral-800 bg-neutral-900/60 backdrop-blur shadow-sm overflow-hidden"
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={m.photo}
                alt={`${m.name} — ${m.role}`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 33vw"
                priority
              />
            </div>
            <div className="p-5">
              <h2 className="text-xl font-semibold text-white">{m.name}</h2>
              <div className="mt-1 text-sm text-[#9AB8FF]">{m.role}</div>
              <p className="mt-3 text-sm text-neutral-300 leading-relaxed">{m.blurb}</p>
            </div>
          </article>
        ))}
      </div>

      {/* Optional: hiring block */}
      <div className="mt-14 rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6">
        <div className="text-lg font-semibold">We’re hiring</div>
        <p className="mt-1 text-neutral-300 text-sm">
          Skilled finishers and form carpenters — send a note to{" "}
          <a className="underline" href="mailto:nik@carezconcrete.com">nik@carezconcrete.com</a>.
        </p>
      </div>
    </div>
  );
}
