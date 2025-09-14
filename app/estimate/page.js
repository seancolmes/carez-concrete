import EstimateForm from "../_components/EstimateForm";

export const metadata = {
  title: "Free Estimate | Carez Concrete",
  description:
    "Tell us about scope, location, schedule, and access. We’ll give you a straight number and timeline.",
  alternates: { canonical: "https://carezconcrete.com/estimate" },
  openGraph: {
    title: "Get a Free Concrete Estimate | Carez Concrete",
    description:
      "ADA ramps, walkways, flatwork, slabs, retaining walls, and structural concrete. Fast estimates across Washington.",
    url: "https://carezconcrete.com/estimate",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    type: "website",
  },
};

export default function EstimatePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <EstimateForm />
    </div>
  );
}
