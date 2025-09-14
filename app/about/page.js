export const metadata = { title: "About | Carez Concrete" };

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="font-head text-4xl font-extrabold">About Carez Concrete</h1>

      {/* About section with spread-out paragraphs */}
      <div className="mt-4 space-y-4 text-neutral-300 leading-relaxed">
        <p>
          At Carez Concrete, we bring over a decade of hands-on experience in structural carpentry and concrete craftsmanship. With 11+ years working alongside some of the best builders in Washington, we’ve built a reputation for precision, durability, and pride in every pour.
        </p>
        <p>
          Concrete isn’t just a trade for us — it’s a passion. We don’t cut corners, and we don’t settle for “good enough.” Our commitment is to deliver solid, lasting results while working closely with you to achieve your vision and stay within budget.
        </p>
        <p>
          When you choose Carez Concrete, you’re not just hiring a contractor — you’re partnering with someone who treats your project as if it were their own. The difference is in the details, and we’re here to show you what true craftsmanship looks like.
        </p>
      </div>

      <h2 className="font-head text-2xl font-bold mt-10">Our approach</h2>
      <p className="mt-2 text-neutral-300 leading-relaxed">
        Layout • Formwork • Rebar • Finish. Coordination with customers, inspectors, engineers, and GCs.
      </p>

      <h2 className="font-head text-2xl font-bold mt-10">Service area</h2>
      <p className="mt-2 text-neutral-300 leading-relaxed">
        Washington State (Pierce & King County) — residential and commercial projects.
      </p>
    </div>
  );
}
