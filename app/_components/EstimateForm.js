"use client";
import React, { useState } from "react";

const brandRing = "focus:ring-[#3B6FB6]";
const brandBtn =
  "bg-gradient-to-r from-[#3B6FB6] to-[#1F3D7A] hover:from-[#3F79C8] hover:to-[#214489]";

export default function EstimateForm() {
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
      if (res.ok && json.ok) { setStatus("success"); e.target.reset(); setTimeout(()=>setStatus("idle"), 5000); }
      else setStatus("error");
    } catch { setStatus("error"); }
  };

  return (
    <div className="grid lg:grid-cols-2 gap-12">
      <div>
        <h1 className="font-head text-3xl font-extrabold tracking-tight">Get a free estimate</h1>
        <p className="mt-3 text-neutral-300">
          Tell us about your project. We’ll review scope, schedule, and access, then get you a straight number.
        </p>
        <ul className="mt-6 space-y-2 text-sm text-neutral-200">
          <li><strong>Call:</strong> <a className="underline decoration-neutral-700 hover:decoration-neutral-400" href="tel:+12536175505">(253) 617-5505</a></li>
          <li><strong>Email:</strong> <a className="underline decoration-neutral-700 hover:decoration-neutral-400" href="mailto:nik@carezconcrete.com">nik@carezconcrete.com</a></li>
          <li><strong>Service area:</strong> Washington State</li>
        </ul>
        <div className="mt-6 space-y-2">
          {status === "success" && (
            <div className="rounded-xl border border-green-300/40 bg-green-500/10 p-3 text-sm text-green-200">
              Thanks! We received your request and will reach out shortly.
            </div>
          )}
          {status === "error" && (
            <div className="rounded-xl border border-red-300/40 bg-red-500/10 p-3 text-sm text-red-200">
              Sorry, something went wrong sending your request. Please try again.
            </div>
          )}
        </div>
      </div>

      <form className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6 shadow-sm space-y-4" onSubmit={handleSubmit}>
        <div className="sr-only" aria-hidden="true">
          <label htmlFor="company">Company</label>
          <input id="company" name="company" type="text" tabIndex="-1" autoComplete="off" />
        </div>
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-neutral-200">Name</label>
          <input id="name" name="name" className={`mt-1 w-full rounded-xl border border-neutral-700 bg-neutral-800 px-3 py-2 text-neutral-100 placeholder-neutral-500 focus:outline-none focus:ring-2 ${brandRing}`} placeholder="Your name" />
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-neutral-200">Email</label>
            <input id="email" type="email" name="email" className={`mt-1 w-full rounded-xl border border-neutral-700 bg-neutral-800 px-3 py-2 text-neutral-100 placeholder-neutral-500 focus:outline-none focus:ring-2 ${brandRing}`} placeholder="you@email.com" />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-neutral-200">Phone</label>
            <input id="phone" name="phone" className={`mt-1 w-full rounded-xl border border-neutral-700 bg-neutral-800 px-3 py-2 text-neutral-100 placeholder-neutral-500 focus:outline-none focus:ring-2 ${brandRing}`} placeholder="(555) 123-4567" />
          </div>
        </div>
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-neutral-200">Service needed</label>
          <select id="service" name="service" className={`mt-1 w-full rounded-xl border border-neutral-700 bg-neutral-800 px-3 py-2 text-neutral-100 focus:outline-none focus:ring-2 ${brandRing}`}>
            <option>ADA ramp / walkway</option>
            <option>Curb & gutter</option>
            <option>Flatwork / slab</option>
            <option>Retaining wall</option>
            <option>Structural concrete</option>
            <option>Repair / replacement</option>
            <option>Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-neutral-200">Project details</label>
          <textarea id="message" name="message" rows={5} className={`mt-1 w-full rounded-xl border border-neutral-700 bg-neutral-800 px-3 py-2 text-neutral-100 placeholder-neutral-500 focus:outline-none focus:ring-2 ${brandRing}`} placeholder="Scope, location, timing, access notes…" />
        </div>
        <div className="flex items-center gap-2">
          <input id="agree" type="checkbox" className="h-4 w-4 rounded border-neutral-700 text-white bg-neutral-800 focus:ring-[#3B6FB6]" />
          <label htmlFor="agree" className="text-sm text-neutral-300">I consent to be contacted about this request.</label>
        </div>
        <button disabled={status === "submitting"} className={`w-full rounded-xl px-4 py-3 text-white font-semibold shadow ${brandBtn} focus:outline-none focus:ring-2 ${brandRing}`}>
          {status === "submitting" ? "Sending..." : "Send request"}
        </button>
        <p className="text-xs text-neutral-500">Delivers to nik@carezconcrete.com via Resend.</p>
      </form>
    </div>
  );
}
