// app/layout.js
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import { Anton, Inter } from "next/font/google";

export const metadata = {
  title: "Carez Concrete — ADA Ramps, Walkways, Slabs, Retaining Walls | Washington",
  description:
    "Carez Concrete builds ADA-compliant ramps & walkways, curb & gutter, flatwork, slabs, retaining walls, and structural concrete. Licensed, bonded, insured. Serving Washington State.",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "Carez Concrete — Concrete that passes inspection the first time.",
    description:
      "ADA ramps & walkways, curb & gutter, slabs, retaining walls, structural pours. Washington State.",
    url: "https://carezconcrete.com",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    type: "website",
  },
};

const head = Anton({ subsets: ["latin"], weight: "400", variable: "--font-head" });
const body = Inter({ subsets: ["latin"], variable: "--font-body" });

const brandBtn =
  "bg-gradient-to-r from-[#3B6FB6] to-[#1F3D7A] hover:from-[#3F79C8] hover:to-[#214489]";
const brandRing = "focus:ring-[#3B6FB6]";

function Header() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-neutral-900/70 bg-neutral-900/90 border-b border-neutral-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-end gap-3 pb-1">
          {/* LOGO ONLY (no black box) */}
          <div className="relative h-20 w-25">
            <Image src="/logo.png" alt="Carez Concrete logo" fill className="object-contain" priority />
          </div>
        </div>

        {/* NAV: turns Carez blue on hover */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/" className="hover:text-[#2b66b1] transition-colors">Home</Link>
          <Link href="/services" className="hover:text-[#2b66b1] transition-colors">Services</Link>
          <Link href="/faq" className="hover:text-[#2b66b1] transition-colors">FAQ</Link>
          <Link href="/about" className="hover:text-[#2b66b1] transition-colors">About</Link>
          <Link href="/estimate" className="hover:text-[#2b66b1] transition-colors">Estimate</Link>
          <Link href="/projects" className="hover:text-[#2b66b1] transition-colors">Projects</Link>
          </nav>

        <Link
          href="/estimate"
          className={`hidden sm:inline-flex items-center rounded-xl px-4 py-2 text-white font-semibold shadow ${brandBtn} focus:outline-none focus:ring-2 ${brandRing} focus:ring-offset-2 focus:ring-offset-neutral-900`}
        >
          Free Estimate
        </Link>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-neutral-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-3 gap-8 text-sm">
        <div>
          <div className="text-lg font-extrabold">Carez Concrete</div>
          <div className="text-neutral-400">Precision ramps, walkways, and structural concrete.</div>
        </div>
        <div className="text-neutral-300">
          <div className="font-semibold text-white">Contact</div>
          <div className="mt-2"><a className="underline decoration-neutral-700 hover:decoration-neutral-400" href="mailto:nik@carezconcrete.com">nik@carezconcrete.com</a></div>
          <div><a className="underline decoration-neutral-700 hover:decoration-neutral-400" href="tel:+12536175505">(253) 617-5505</a></div>
        </div>
        <div className="text-neutral-300">
          <div className="font-semibold text-white">Quick links</div>
          <ul className="mt-2 space-y-1">
            <li><Link href="/services" className="hover:text-white">Services</Link></li>
            <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
            <li><Link href="/estimate" className="hover:text-white">Free estimate</Link></li>
          </ul>
        </div>
      </div>
      <div className="py-6 text-center text-xs text-neutral-500">© {new Date().getFullYear()} Carez Concrete LLC. All rights reserved.</div>

      {/* Floating global Text button */}
      <a
        href="sms:+12536175505"
        className={`fixed bottom-5 right-5 z-50 rounded-full px-5 py-3 text-white font-semibold shadow-lg ${brandBtn} focus:outline-none focus:ring-2 ${brandRing}`}
        aria-label="Text us for a quick estimate"
      >
        Text us: (253) 617-5505
      </a>
    </footer>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${head.variable} ${body.variable}`}>
      <body
        className="font-[var(--font-body)] text-neutral-100"
        style={{
          backgroundImage: "url('/background.png')", // put Background.png into /public/background.png
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
