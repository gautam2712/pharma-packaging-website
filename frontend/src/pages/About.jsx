import { COMPANY, IMG, TIMELINE } from "@/data/site";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CTABanner from "@/components/CTABanner";

export default function About() {
  const leaders = [
    { name: "Rajiv Mehta", role: "Managing Director", bio: "27 years in pharmaceutical packaging. Founding partner of PharmaFoil." },
    { name: "Dr. Shalini Iyer", role: "Director, R&D", bio: "Polymer scientist (IIT-B, PhD). Holds 11 patents in barrier laminates." },
    { name: "Aditya Khanna", role: "VP, Global Sales", bio: "Former GSK supply chain leader. Drives our 42-country export programme." },
    { name: "Priya Nair", role: "Head of Quality", bio: "ISO 15378 lead auditor. 18 years across regulated packaging facilities." },
  ];

  return (
    <div data-testid="about-page">
      <PageHero
        eyebrow="About PharmaFoil"
        title="A quarter-century engineering pharmaceutical packaging."
        subtitle={`Founded in ${COMPANY.established} in Vapi, Gujarat, PharmaFoil Industries has grown into one of India's most trusted primary packaging manufacturers for regulated pharmaceutical exports.`}
        image={IMG.facility}
        breadcrumb={[{ label: "About" }]}
      />

      <section className="bg-white py-24">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Mission" title="Make pharmaceutical packaging boring – in the best possible way." subtitle="" />
          </div>
          <div className="lg:col-span-7 space-y-6 text-[#4B5563] leading-relaxed text-lg">
            <p>
              In pharmaceutical packaging, &ldquo;boring&rdquo; means predictable. It means a procurement manager sleeps at night knowing the foil reels landing at the blister line will perform exactly as the last hundred shipments did.
            </p>
            <p>
              For 27 years, that is the standard PharmaFoil has been built to deliver. Six production lines. Six-sigma rejection rates. ISO 15378 batch traceability on every roll. Twenty-six layers of in-process quality checks before a single reel ships.
            </p>
            <p>
              We don&apos;t make packaging that wins design awards. We make packaging that wins regulatory audits, stability studies and supply chain reviews – on three continents, year after year.
            </p>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="bg-[#F3F4F6] py-24">
        <div className="max-w-[1400px] mx-auto px-6">
          <SectionHeading eyebrow="Our Journey" title="From single-line converter to global supplier." />
          <div className="mt-16 relative">
            <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-gray-300" />
            <div className="space-y-12">
              {TIMELINE.map((t, i) => (
                <div key={i} className={`relative grid grid-cols-1 lg:grid-cols-2 gap-8 ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                  <div className="lg:text-right pl-12 lg:pl-0 lg:pr-12">
                    <div className="absolute left-4 lg:left-1/2 -translate-x-1/2 w-3 h-3 bg-[#00A36C] mt-2"></div>
                    <div className="font-mono-tech text-sm tracking-[0.2em] text-[#00A36C]">{t.year}</div>
                    <h3 className="mt-2 text-2xl font-semibold text-[#003B5C]">{t.title}</h3>
                  </div>
                  <div className="pl-12 lg:pl-12">
                    <p className="text-[#4B5563] leading-relaxed">{t.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="bg-white py-24">
        <div className="max-w-[1400px] mx-auto px-6">
          <SectionHeading eyebrow="Leadership" title="The people who run the plant." />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200">
            {leaders.map((p) => (
              <div key={p.name} className="bg-white p-8">
                <div className="aspect-square bg-gradient-to-br from-[#003B5C] to-[#002840] mb-6 flex items-center justify-center">
                  <div className="text-5xl font-semibold text-white/30 font-mono-tech">{p.name.split(" ").map(n => n[0]).join("")}</div>
                </div>
                <div className="font-semibold text-[#003B5C] text-lg">{p.name}</div>
                <div className="text-xs font-mono-tech uppercase tracking-[0.2em] text-[#00A36C] mt-1">{p.role}</div>
                <p className="mt-4 text-sm text-[#4B5563] leading-relaxed">{p.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CSR */}
      <section className="bg-[#003B5C] text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-20" />
        <div className="relative max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Corporate Responsibility" title="Built on people, accountable to communities." dark />
          </div>
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10">
            {[
              { i: "fa-solid fa-graduation-cap", t: "Education", d: "Operates 2 primary schools for 480+ children of plant workers." },
              { i: "fa-solid fa-leaf", t: "Environment", d: "1.2 MW rooftop solar offsets 34% of plant energy." },
              { i: "fa-solid fa-people-roof", t: "Community", d: "Annual ₹4.8 Cr CSR spend across 12 villages around Vapi." },
              { i: "fa-solid fa-handshake-angle", t: "Workforce", d: "47% women in shop-floor roles. Zero LTI in 2025." },
            ].map((c) => (
              <div key={c.t} className="bg-[#003B5C] p-8">
                <i className={`${c.i} text-3xl text-[#00A36C] mb-5`}></i>
                <div className="font-semibold text-lg">{c.t}</div>
                <p className="mt-2 text-sm text-white/70 leading-relaxed">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
