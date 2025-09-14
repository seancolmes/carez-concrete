import Image from "next/image";
import Link from "next/link";
import { PROJECTS } from "./_data";

export const metadata = { title: "Projects | Carez Concrete" };

export default function ProjectsIndexPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="font-head text-4xl font-extrabold">Projects</h1>
      <p className="mt-3 text-neutral-300">
        Browse our recent work. Click an album to view photos and details.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((p) => (
          <Link
            key={p.slug}
            href={`/projects/${p.slug}`}
            className="group overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-800/40 shadow-sm hover:shadow-md transition cursor-pointer"
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={p.cover}
                alt={`${p.title} cover`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                sizes="(max-width:1024px) 100vw, 33vw"
              />
            </div>
            <div className="p-4">
              <div className="font-semibold text-white">{p.title}</div>
              <div className="mt-1 text-sm text-neutral-400">{p.caption}</div>
              {p.location && <div className="mt-1 text-xs text-neutral-500">{p.location}</div>}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
