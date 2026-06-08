import { IMG, MANUFACTURING_STATS } from "@/data/site";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CTABanner from "@/components/CTABanner";

export default function Manufacturing() {
  const machines = [
    { name: "Rotogravure Printing", spec: "Up to 10 colours · 350 mpm", make: "Bobst NovaRS 4002" },
    { name: "Solvent-less Lamination", spec: "1400 mm web · 400 mpm", make: "Nordmeccanica Super Combi" },
    { name: "Cold-Form Lamination", spec: "OPA / Alu / PVC dry-bond", make: "Comexi Nexus L20000" },
    { name: "Slitting & Rewinding", spec: "Tension-controlled · 600 mpm", make: "Atlas Titan SR1100" },
    { name: "Dry Lamination", spec: "Solvent-based · 350 mpm", make: "Uflex Vega Plus" },
    { name: "Doctoring / Inspection", spec: "100% camera inspection", make: "BST eltromat ProInspector" },
  ];

  const workflow = [
    { step: "01", title: "Specification & Design", text: "Customer specs frozen in joint review. Barrier requirements modelled against ICH Q1A protocols." },
    { step: "02", title: "Substrate Sourcing", text: "Aluminium foil and polymer films sourced only from qualified Tier-1 vendors with full COA traceability." },
    { step: "03", title: "Lamination & Printing", text: "Cleanroom-adjacent printing, dry-bond and solventless lamination on European-make production lines." },
    { step: "04", title: "Curing & Conditioning", text: "Climate-controlled curing tunnels and 72-hour conditioning before slitting." },
    { step: "05", title: "Slitting & Inspection", text: "Tension-controlled slitting with 100% camera-based defect inspection at 600 m/min." },
    { step: "06", title: "Release & Despatch", text: "QC lab release, batch documentation pack, and bonded warehouse despatch under GMP." },
  ];

  return (
    <div data-testid="manufacturing-page">
      <PageHero
        eyebrow="Manufacturing"
        title="180,000 sq.ft. engineered to GMP."
        subtitle="A purpose-built pharmaceutical packaging plant in Vapi, Gujarat – India's premier industrial cluster for regulated chemical and pharma manufacturing."
        image={IMG.machinery}
        breadcrumb={[{ label: "Manufacturing" }]}
      />

      {/* STATS */}
      <section className="bg-white py-20 border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-2 lg:grid-cols-6 gap-8">
          {MANUFACTURING_STATS.map((s) => (
            <div key={s.label} className="border-l-2 border-[#00A36C] pl-5">
              <div className="text-2xl lg:text-3xl font-semibold text-[#003B5C] tabular">{s.value}</div>
              <div className="mt-2 text-xs font-mono-tech text-[#4B5563] uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* MACHINE SHOWCASE */}
      <section className="bg-[#F3F4F6] py-24">
        <div className="max-w-[1400px] mx-auto px-6">
          <SectionHeading eyebrow="Machinery" title="European-make production lines, end-to-end." subtitle="From Bobst rotogravure to Nordmeccanica laminators, every line in our plant is selected for repeatability under pharmaceutical-grade tolerances." />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200">
            {machines.map((m, i) => (
              <div key={m.name} className="bg-white p-8" data-testid={`machine-${i}`}>
                <div className="font-mono-tech text-xs text-[#00A36C] mb-3">M{String(i + 1).padStart(2, "0")}</div>
                <h3 className="text-lg font-semibold text-[#003B5C]">{m.name}</h3>
                <div className="mt-3 text-sm text-[#4B5563]">{m.spec}</div>
                <div className="mt-4 pt-4 border-t border-gray-100 text-xs font-mono-tech uppercase tracking-wider text-[#4B5563]">{m.make}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section className="bg-[#003B5C] text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-20" />
        <div className="relative max-w-[1400px] mx-auto px-6">
          <SectionHeading eyebrow="Production Workflow" title="A six-stage GMP workflow." dark />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
            {workflow.map((w) => (
              <div key={w.step} className="bg-[#003B5C] p-10">
                <div className="text-5xl font-semibold text-[#00A36C]/40 font-mono-tech tabular">{w.step}</div>
                <h3 className="mt-4 text-xl font-semibold">{w.title}</h3>
                <p className="mt-3 text-sm text-white/70 leading-relaxed">{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLANT GALLERY */}
      <section className="bg-white py-24">
        <div className="max-w-[1400px] mx-auto px-6">
          <SectionHeading eyebrow="Plant Gallery" title="Inside the facility." />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-3">
            <div className="md:col-span-8 aspect-[16/10] overflow-hidden"><img src={IMG.facility} alt="" className="w-full h-full object-cover" /></div>
            <div className="md:col-span-4 grid grid-rows-2 gap-3">
              <div className="overflow-hidden"><img src={IMG.cleanroomOp} alt="" className="w-full h-full object-cover" /></div>
              <div className="overflow-hidden"><img src={IMG.machinery} alt="" className="w-full h-full object-cover" /></div>
            </div>
            <div className="md:col-span-4 aspect-square overflow-hidden"><img src={IMG.productionLine} alt="" className="w-full h-full object-cover" /></div>
            <div className="md:col-span-4 aspect-square overflow-hidden"><img src={IMG.lab} alt="" className="w-full h-full object-cover" /></div>
            <div className="md:col-span-4 aspect-square overflow-hidden"><img src={IMG.qa} alt="" className="w-full h-full object-cover" /></div>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
