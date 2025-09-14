"use client";
import React, { useState } from "react";
import Image from "next/image";

// ── SEO: page-level metadata ───────────────────────────────────────────────────
export const metadata = {
  title:
    "Carez Concrete — ADA Ramps, Walkways, Slabs & Retaining Walls | Washington",
  description:
    "Concrete that passes inspection the first time. ADA-compliant ramps & walkways, curb & gutter, flatwork, slabs, retaining walls, and structural pours. Licensed, bonded, insured.",
  alternates: { canonical: "https://carezconcrete.com/" },
  openGraph: {
    title: "Carez Concrete — Concrete that passes inspection the first time.",
    description:
      "ADA ramps & walkways, curb & gutter, flatwork, slabs, retaining walls, and structural pours. Serving Washington State.",
    url: "https://carezconcrete.com/",
    siteName: "Carez Concrete",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Carez Concrete — Washington",
    description:
      "Precision concrete: ADA ramps, walkways, slabs, walls, structural pours.",
    images: ["/og-image.jpg"],
  },
};

export default function CarezConcreteLanding() {
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    const body = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      service: e.target.service.value,
      message: e.target.message.value,
      consent: e.target.agree.checked,
      company: e.target.company?.value || "", // honeypot
    };

    try {
      const res = await fetch("/api/estimate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const json = await res.json().catch(() => ({ ok: false }));
      if (res.ok && json.ok) {
        setStatus("success");
        e.target.reset();
        setTimeout(() => setStatus("idle"), 5000);
      } else setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  // LocalBusiness JSON-LD for SEO (page-specific Contractor type)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Contractor",
    name: "Carez Concrete",
    image: "/og-image.jpg",
    url: "https://carezconcrete.com",
    telephone: "+1-253-617-5505",
    email: "nik@carezconcrete.com",
    address: { "@type": "PostalAddress", addressRegion: "WA", addressCountry: "US" },
    areaServed: "Washington",
    priceRange: "$$",
    description:
      "ADA-compliant ramps & walkways, curb & gutter, flatwork, driveways, slabs, retaining walls, and structural concrete.",
  };

  // Brand colors pulled from your card/logo (steel blue + navy gradient)
  const brandBtn =
    "bg-gradient-to-r from-[#3B6FB6] to-[#1F3D7A] hover:from-[#3F79C8] hover:to-[#214489]";
  const brandRing = "focus:ring-[#3B6FB6]";

  return (
    <div className="min-h-screen text-neutral-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-neutral-800">
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-35"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1516910817561-7f29b3f00b61?q=80&w=1920&auto=format&fit=crop)",
            }}
            aria-hidden="true"
          />
          {/* Let the global body background show through */}
          <div className="absolute inset-0 -z-10" aria-hidden="true" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              {/* Logo big, no black box */}
              <div className="relative h-30 w-50">
                <Image
                  src="/og-image.png"
                  alt="Carez Concrete logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="text-xs uppercase tracking-widest text-neutral-300">
                We don’t crack under pressure
              </div>
            </div>

            <h1 className="font-head text-4xl sm:text-6xl font-extrabold leading-tight tracking-tight">
              Concrete that passes inspection{" "}
              <span className="text-[#9AB8FF]">the first time</span>.
            </h1>
            <p className="mt-5 text-lg text-neutral-300">
              ADA-compliant ramps &amp; walkways, curb &amp; gutter, driveways,
              flatwork, slabs, retaining walls, and structural pours — finished
              clean, on spec, and on schedule.
            </p>
            <p className="mt-2 text-sm text-neutral-400">
              Serving Washington State. Same-week estimates available.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="/estimate"
                className={`inline-flex items-center justify-center rounded-xl px-5 py-3 text-base font-semibold shadow ${brandBtn} focus:outline-none focus:ring-2 ${brandRing} focus:ring-offset-2 focus:ring-offset-neutral-900`}
              >
                Get a fast estimate
              </a>
              <a
                href="/services"
                className="inline-flex items-center justify-center rounded-xl border border-neutral-700 px-5 py-3 text-base font-semibold hover:bg-neutral-800"
              >
                See our services
              </a>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-neutral-300">
              <div className="flex items-center gap-2">
                <ShieldIcon /> Licensed • Bonded • Insured
              </div>
              <div className="flex items-center gap-2">
                <ClockIcon /> On-time, on-budget
              </div>
              <div className="flex items-center gap-2">
                <AccessibilityIcon /> ADA Expertise
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* …keep your Services / Before-After / What you get / ADA / Work / Testimonial / Estimate / FAQ blocks below (unchanged)… */}
      {/* [All your existing sections remain here in your file] */}
    </div>
  );
}

/* Icons (unchanged) */
function ShieldIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="text-[#9AB8FF]"
    >
      <path d="M12 2l7 4v6c0 5-3.4 9.3-7 10-3.6-.7-7-5-7-10V6l7-4z" />
    </svg>
  );
}
function ClockIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="text-[#9AB8FF]"
    >
      <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 5h-2v6l5 3 1-1-4-2V7z" />
    </svg>
  );
}
function AccessibilityIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="text-[#9AB8FF]"
    >
      <path d="M12 4a2 2 0 110 4 2 2 0 010-4zm-7 5h14v2l-5 1v8h-2v-6h-2v6H8v-8L5 11V9z" />
    </svg>
  );
}
