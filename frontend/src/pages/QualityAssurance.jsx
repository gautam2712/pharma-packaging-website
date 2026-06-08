import { IMG } from "@/data/site";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CTABanner from "@/components/CTABanner";

export default function QualityAssurance() {
  const tests = [
    { t: "Substrate Inspection", d: "Incoming foil thickness, temper, surface finish and pinhole density per AS9100D sampling.", i: "fa-solid fa-magnifying-glass-chart" },
    { t: "WVTR / OTR Testing", d: "Mocon Permatran-W and Ox-Tran systems for moisture and oxygen barrier validation.", i: "fa-solid fa-droplet" },
    { t: "Heat Seal Strength", d: "Instron 5944 tensile testing at multiple seal temperatures and dwell times.", i: "fa-solid fa-fire" },
    { t: "Migration Studies", d: "USP <661>, EU 10/2011 and ICH Q3D migration testing in dedicated analytical lab.", i: "fa-solid fa-flask" },
    { t: "Print Adhesion & COF", d: "Tape test, scratch test and coefficient-of-friction measurement on every print run.", i: "fa-solid fa-print" },
    { t: "Stability Testing", d: "ICH Q1A long-term and accelerated stability chambers at 25°C/60%RH and 40°C/75%RH.", i: "fa-solid fa-temperature-half" },
  ];

  return (
    <div data-testid="quality-page">
      <PageHero
        eyebrow="Quality Assurance"
        title="A lab. A protocol. A paper trail."
        subtitle="Every roll that ships from PharmaFoil carries 47 measured parameters, sampled at six in-process checkpoints, signed off against an ISO 15378 batch record."
        image={IMG.qa}
        breadcrumb={[{ label: "Quality" }]}
      />

      <section className="bg-white py-24">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6">
            <div className="aspect-[4/3] overflow-hidden"><img src={IMG.lab} alt="" className="w-full h-full object-cover" /></div>
          </div>
          <div className="lg:col-span-6">
            <SectionHeading eyebrow="In-House Laboratory" title="3,200 sq.ft. of analytical capacity." subtitle="Our independent quality laboratory is segregated from production and equipped with chromatography, spectroscopy and barrier-measurement instrumentation calibrated against NABL-traceable standards." />
            <div className="mt-10 grid grid-cols-2 gap-6">
              {[["GC-MS · HPLC", "Migration & residual solvents"], ["FTIR · Raman", "Polymer identification"], ["Mocon Permatran", "WVTR & OTR"], ["Instron 5944", "Tensile & seal strength"]].map(([k, v]) => (
                <div key={k} className="border-l-2 border-[#00A36C] pl-4">
                  <div className="font-mono-tech text-sm font-semibold text-[#003B5C]">{k}</div>
                  <div className="text-xs text-[#4B5563] mt-1">{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F3F4F6] py-24">
        <div className="max-w-[1400px] mx-auto px-6">
          <SectionHeading eyebrow="Testing Protocols" title="What we measure, and how." />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200">
            {tests.map((t) => (
              <div key={t.t} className="bg-white p-8" data-testid={`test-${t.t.replace(/\s+/g, '-').toLowerCase()}`}>
                <i className={`${t.i} text-3xl text-[#00A36C] mb-5`}></i>
                <h3 className="text-lg font-semibold text-[#003B5C]">{t.t}</h3>
                <p className="mt-3 text-sm text-[#4B5563] leading-relaxed">{t.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#003B5C] text-white py-24">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Compliance" title="Audited annually. Re-certified continually." dark />
          </div>
          <div className="lg:col-span-7 space-y-4 text-white/80 text-lg leading-relaxed">
            <p>Our quality systems are externally audited every 12 months by TÜV SÜD, BSI and DNV. We host an average of 14 customer audits per year and have never recorded a critical observation in five consecutive audit cycles.</p>
            <p>Every batch ships with a Certificate of Analysis, Material Safety Datasheet, batch genealogy and regulatory declaration pack. For US-bound shipments, our DMF Type III (#34218) is referenced under master files for 28 finished-dosage manufacturers.</p>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
