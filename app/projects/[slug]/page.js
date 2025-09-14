"use client";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useMemo, useState, useEffect } from "react";
import { getProject, PROJECTS } from "../_data";

export default function ProjectAlbumPage() {
  const { slug } = useParams();
  const project = useMemo(() => getProject(slug), [slug]);
  const [openIndex, setOpenIndex] = useState(null);

  // close modal on ESC
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpenIndex(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  if (!project) {
    return (
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="font-head text-3xl font-extrabold">Project not found</h1>
        <p className="mt-3 text-neutral-300">
          That album doesn’t exist. <Link href="/projects" className="underline">Back to Projects</Link>
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex items-baseline justify-between gap-4">
        <div>
          <h1 className="font-head text-4xl font-extrabold">{project.title}</h1>
          {project.location && (
            <div className="mt-1 text-sm text-neutral-400">{project.location}</div>
          )}
          {project.caption && (
            <div className="mt-2 text-neutral-300">{project.caption}</div>
          )}
        </div>
        <Link href="/projects" className="text-sm text-[#2b66b1] hover:underline">
          ← All Projects
        </Link>
      </div>

      {project.details && (
        <p className="mt-6 text-neutral-300 max-w-3xl">{project.details}</p>
      )}

      {/* Gallery */}
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {project.photos.map((src, i) => (
          <figure
            key={src}
            className="group overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-800/40 shadow-sm cursor-zoom-in"
            onClick={() => setOpenIndex(i)}
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={src}
                alt={`${project.title} photo ${i + 1}`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                sizes="(max-width:1024px) 100vw, 33vw"
                priority={i < 1}
              />
            </div>
          </figure>
        ))}
      </div>

      {/* Modal Lightbox */}
      {openIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setOpenIndex(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative max-w-5xl w-full rounded-2xl border border-neutral-800 bg-neutral-900 p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpenIndex(null)}
              className="absolute -top-2 -right-2 rounded-full bg-neutral-800 text-white px-3 py-1 text-sm border border-neutral-700 hover:bg-neutral-700"
            >
              Close
            </button>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src={project.photos[openIndex]}
                alt={`${project.title} large`}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Optional: dynamic metadata per album (Next will run this on the server if converted to a server component)
// Exporting generateMetadata in a client file is not recommended; if you want this, move album page to server component.

