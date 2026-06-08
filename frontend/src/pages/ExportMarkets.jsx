import { REGIONS, IMG } from "@/data/site";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CTABanner from "@/components/CTABanner";

export default function ExportMarkets() {
  return (
    <div data-testid="exports-page">
      <PageHero
        eyebrow="Export Markets"
        title="42 countries. One single point of accountability."
        subtitle="From dossier preparation to bonded despatch, our export desk handles regulatory filings, customs documentation and ocean freight – so your packaging arrives ready for the blister line."
        image={IMG.containers}
        breadcrumb={[{ label: "Export Markets" }]}
      />

      <section className="bg-white py-24">
        <div className="max-w-[1400px] mx-auto px-6">
          <SectionHeading eyebrow="Regional Presence" title="Where our packaging ships." />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200">
            {REGIONS.map((r) => (
              <div key={r.region} className="bg-white p-10" data-testid={`region-${r.region.toLowerCase()}`}>
                <div className="text-5xl font-semibold text-[#003B5C] tabular tracking-tight">{r.count}</div>
                <div className="mt-3 text-xs font-mono-tech uppercase tracking-[0.2em] text-[#00A36C]">Active markets</div>
                <h3 className="mt-6 text-2xl font-semibold text-[#003B5C]">{r.region}</h3>
                <p className="mt-3 text-sm text-[#4B5563] leading-relaxed">{r.examples}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#003B5C] text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMG.shipping} alt="" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="relative max-w-[1400px] mx-auto px-6">
          <SectionHeading eyebrow="Logistics" title="End-to-end despatch." dark />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
            {[
              { i: "fa-solid fa-file-shield", t: "Regulatory dossiers", d: "DMF, CEP, ANVISA and PMDA-ready documentation packs." },
              { i: "fa-solid fa-truck-fast", t: "Bonded warehousing", d: "Climate-controlled despatch from Mumbai and Nhava Sheva." },
              { i: "fa-solid fa-ship", t: "Ocean & air freight", d: "Direct shipping contracts with Maersk, MSC and CMA CGM." },
              { i: "fa-solid fa-handshake", t: "Incoterms 2020", d: "FOB, CIF, DDP – your preferred commercial term." },
            ].map((s) => (
              <div key={s.t} className="bg-[#003B5C] p-8">
                <i className={`${s.i} text-3xl text-[#00A36C] mb-5`}></i>
                <div className="font-semibold text-lg">{s.t}</div>
                <p className="mt-2 text-sm text-white/70 leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F3F4F6] py-24">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Technical Desks" title="Regional technical support." subtitle="Our regional technical desks operate across three time zones, ensuring sample evaluation, qualification trials and audit prep happen in your timezone." />
          </div>
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-px bg-gray-200">
            {[
              { city: "Lisbon", region: "EU & Africa Desk", hours: "08:00 – 18:00 WET" },
              { city: "Mumbai", region: "ASEAN & MENA Desk", hours: "09:00 – 19:00 IST" },
              { city: "Mexico City", region: "LATAM & NA Desk", hours: "08:00 – 18:00 CST" },
            ].map((d) => (
              <div key={d.city} className="bg-white p-8">
                <i className="fa-solid fa-location-dot text-2xl text-[#00A36C] mb-4"></i>
                <div className="font-semibold text-[#003B5C] text-xl">{d.city}</div>
                <div className="text-xs font-mono-tech uppercase tracking-[0.2em] text-[#4B5563] mt-2">{d.region}</div>
                <div className="text-sm text-[#4B5563] mt-4">{d.hours}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
