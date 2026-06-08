import { INDUSTRIES, IMG } from "@/data/site";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CTABanner from "@/components/CTABanner";

export default function Industries() {
  const detailed = [
    { ...INDUSTRIES[0], image: IMG.lab, specs: ["Blister & strip foils", "Cold-form Alu-Alu", "Tropical barrier laminates", "CR / SF compliant packs"] },
    { ...INDUSTRIES[1], image: IMG.qa, specs: ["Probiotic-grade moisture barrier", "Vitamin oxidation control", "Stick-pack & sachet laminates", "Retail-ready printing"] },
    { ...INDUSTRIES[2], image: IMG.productionLine, specs: ["Large-format bolus blister", "Field-durable secondary packs", "Veterinary-specific compliance", "Bulk-pack solutions"] },
    { ...INDUSTRIES[3], image: IMG.heroCleanroom, specs: ["Child-resistant peel-push", "Senior-friendly access", "Tamper-evident systems", "Retail shelf-ready"] },
  ];

  return (
    <div data-testid="industries-page">
      <PageHero
        eyebrow="Industries"
        title="Engineered for highly regulated industries."
        subtitle="Packaging is the silent partner in pharmaceutical formulation. We engineer it to disappear into the background, doing its job perfectly, every time."
        image={IMG.qa}
        breadcrumb={[{ label: "Industries" }]}
      />

      <section className="bg-white">
        {detailed.map((ind, i) => (
          <div key={ind.name} className={`border-b border-gray-200 ${i % 2 === 1 ? "bg-[#F3F4F6]" : ""}`} data-testid={`industry-${ind.name.toLowerCase()}`}>
            <div className="max-w-[1400px] mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              <div className={`lg:col-span-6 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                  <img src={ind.image} alt={ind.name} className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="lg:col-span-6">
                <div className="text-xs font-mono-tech uppercase tracking-[0.3em] text-[#00A36C] mb-4 accent-bar">
                  Industry {String(i + 1).padStart(2, "0")}
                </div>
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#003B5C] mb-5">{ind.name}</h2>
                <p className="text-[#4B5563] leading-relaxed text-lg mb-8">{ind.blurb}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {ind.specs.map((s) => (
                    <div key={s} className="border-l-2 border-[#00A36C] pl-4 py-1">
                      <span className="text-sm font-medium text-[#111827]">{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      <CTABanner />
    </div>
  );
}
