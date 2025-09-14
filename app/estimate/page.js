import EstimateForm from "../_components/EstimateForm";

export const metadata = { title: "Free Estimate | Carez Concrete" };

export default function EstimatePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <EstimateForm />
    </div>
  );
}
