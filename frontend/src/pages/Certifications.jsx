import { Download } from "lucide-react";
import { CERTS, IMG } from "@/data/site";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CTABanner from "@/components/CTABanner";

export default function Certifications() {
  return (
    <div data-testid="certifications-page">
      <PageHero
        eyebrow="Certifications"
        title="Audited quality systems. Documented compliance."
        subtitle="Eight active certifications. Five consecutive audit cycles with zero critical observations."
        image={IMG.heroCleanroom}
        breadcrumb={[{ label: "Certifications" }]}
      />

      <section className="bg-white py-24">
        <div className="max-w-[1400px] mx-auto px-6">
          <SectionHeading eyebrow="Active Certifications" title="The systems behind every shipment." />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200">
            {CERTS.map((c) => (
              <div key={c.code} className="bg-white p-8 group hover:bg-[#F3F4F6] transition-colors" data-testid={`cert-${c.code.replace(/\s+/g, '-').toLowerCase()}`}>
                <div className="flex items-start justify-between mb-6">
                  <i className="fa-solid fa-certificate text-3xl text-[#00A36C]"></i>
                  <span className="text-xs font-mono-tech text-[#4B5563]">SINCE {c.year}</span>
                </div>
                <h3 className="text-xl font-semibold text-[#003B5C]">{c.code}</h3>
                <p className="mt-2 text-sm text-[#4B5563] leading-relaxed">{c.body}</p>
                <a href="#" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#003B5C] hover:text-[#00A36C]">
                  Download Certificate <Download className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F3F4F6] py-24">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <SectionHeading eyebrow="Regulatory Filings" title="On file with global regulators." />
            <div className="mt-10 space-y-4">
              {[
                { t: "US FDA – DMF Type III #34218", d: "Referenced in 28 finished-dosage master files." },
                { t: "EDQM – CEP for blister foils", d: "Compliant with European Pharmacopoeia." },
                { t: "PMDA Japan – Master File registered", d: "Active in Japanese supply chain since 2019." },
                { t: "ANVISA Brazil – Cadastro active", d: "Brazilian regulatory registration current." },
              ].map((f) => (
                <div key={f.t} className="bg-white p-6 border-l-2 border-[#00A36C]">
                  <div className="font-semibold text-[#003B5C]">{f.t}</div>
                  <div className="mt-1 text-sm text-[#4B5563]">{f.d}</div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="Auditor Network" title="Who audits us." />
            <div className="mt-10 grid grid-cols-2 gap-3">
              {["TÜV SÜD", "BSI", "DNV", "Bureau Veritas", "SGS", "Intertek"].map((a) => (
                <div key={a} className="bg-white border border-gray-200 p-8 text-center">
                  <div className="font-semibold text-[#003B5C] text-lg">{a}</div>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-[#4B5563] leading-relaxed">
              Customer second-party audits are welcomed. We host an average of 14 audits annually under standard NDA.
            </p>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
