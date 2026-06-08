import { IMG } from "@/data/site";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CTABanner from "@/components/CTABanner";

export default function Sustainability() {
  const initiatives = [
    { t: "Mono-Material R&D", d: "Developing recyclable PE-based mono-material laminates for EU and Japanese markets.", i: "fa-solid fa-recycle" },
    { t: "Solar Power", d: "1.2 MW rooftop solar array generates 34% of plant energy needs.", i: "fa-solid fa-solar-panel" },
    { t: "Zero Liquid Discharge", d: "Closed-loop water recycling. Zero industrial effluent discharge since 2021.", i: "fa-solid fa-droplet-slash" },
    { t: "Solventless Lamination", d: "70% of our laminates are now produced via solventless processes, eliminating VOC emissions.", i: "fa-solid fa-wind" },
    { t: "Aluminium Recycling", d: "100% of post-industrial aluminium scrap returned to upstream smelters.", i: "fa-solid fa-rotate" },
    { t: "Carbon Disclosure", d: "Annual reporting under CDP framework since 2022. Scope 1 + 2 verified by KPMG.", i: "fa-solid fa-chart-line" },
  ];

  return (
    <div data-testid="sustainability-page">
      <PageHero
        eyebrow="Sustainability"
        title="Engineered for performance. Built for the future."
        subtitle="Pharmaceutical packaging must protect. It must also – increasingly – participate in a circular economy. We're investing in both."
        image={IMG.facility}
        breadcrumb={[{ label: "Sustainability" }]}
      />

      <section className="bg-white py-24">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-10">
          {[["34%", "Plant energy from solar"], ["0", "Liquid effluent discharge"], ["70%", "Solventless laminates"], ["1.2 MW", "Renewable capacity"]].map(([v, l], i) => (
            <div key={i} className="border-l-2 border-[#00A36C] pl-6">
              <div className="text-4xl lg:text-5xl font-semibold text-[#003B5C] tabular">{v}</div>
              <div className="mt-3 text-sm font-medium text-[#111827]">{l}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#F3F4F6] py-24">
        <div className="max-w-[1400px] mx-auto px-6">
          <SectionHeading eyebrow="Active Initiatives" title="What we're doing, today." />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200">
            {initiatives.map((s) => (
              <div key={s.t} className="bg-white p-8" data-testid={`initiative-${s.t.replace(/\s+/g, '-').toLowerCase()}`}>
                <i className={`${s.i} text-3xl text-[#00A36C] mb-5`}></i>
                <h3 className="text-lg font-semibold text-[#003B5C]">{s.t}</h3>
                <p className="mt-3 text-sm text-[#4B5563] leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#003B5C] text-white py-24">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <SectionHeading eyebrow="2030 Commitment" title="Carbon-neutral pharmaceutical packaging by 2030." dark />
            <p className="mt-6 text-white/80 leading-relaxed text-lg">
              We have committed to net-zero Scope 1 and Scope 2 emissions by 2030, with Scope 3 alignment by 2035. Our roadmap is verified by KPMG and aligned with the Science Based Targets initiative (SBTi).
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="border border-white/20 p-8">
              <div className="text-xs font-mono-tech uppercase tracking-[0.2em] text-[#00A36C] mb-3">Annual Report</div>
              <div className="font-semibold text-xl mb-4">Sustainability Report 2025</div>
              <p className="text-sm text-white/70 mb-6">Full annual disclosure under CDP and GRI frameworks.</p>
              <a href="#" className="inline-flex items-center gap-2 bg-white text-[#003B5C] px-6 py-3 font-semibold transition-colors hover:bg-[#00A36C] hover:text-white">
                Download PDF · 8.4 MB
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
