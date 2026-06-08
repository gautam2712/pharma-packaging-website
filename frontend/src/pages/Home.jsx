import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight, Check } from "lucide-react";
import { COMPANY, IMG, TRUST_METRICS, PRODUCTS, INDUSTRIES, CERTS, TESTIMONIALS, REGIONS } from "@/data/site";
import SectionHeading from "@/components/SectionHeading";
import CTABanner from "@/components/CTABanner";

export default function Home() {
  const featured = PRODUCTS.slice(0, 6);

  return (
    <div data-testid="home-page">
      {/* HERO */}
      <section className="relative bg-[#003B5C] text-white overflow-hidden" data-testid="home-hero">
        <div className="absolute inset-0">
          <img src={IMG.heroCleanroom} alt="" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="absolute inset-0 blueprint-grid opacity-20" />

        <div className="relative max-w-[1400px] mx-auto px-6 pt-24 pb-32 lg:pt-32 lg:pb-40 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8 pf-rise">
            <div className="text-xs font-mono-tech uppercase tracking-[0.3em] text-[#00A36C] mb-6 accent-bar">
              Pharmaceutical Packaging · Est. {COMPANY.established}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-semibold tracking-tight leading-[1.02] max-w-5xl">
              Precision barrier packaging engineered for the world&apos;s most demanding pharma.
            </h1>
            <p className="mt-8 text-lg lg:text-xl text-white/80 max-w-2xl leading-relaxed">
              From blister foils to cold-form Alu-Alu, PharmaFoil supplies primary packaging to <span className="text-white font-semibold">320+ pharmaceutical clients across 42 export markets</span> – under ISO 15378, WHO GMP and US DMF Type III compliance.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/rfq"
                data-testid="hero-rfq-cta"
                className="inline-flex items-center gap-2 bg-[#00A36C] hover:bg-[#008759] text-white px-7 py-4 font-semibold tracking-wide transition-colors"
              >
                Request Quotation <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/products"
                data-testid="hero-products-cta"
                className="inline-flex items-center gap-2 border border-white/30 hover:bg-white hover:text-[#003B5C] px-7 py-4 font-semibold tracking-wide transition-colors"
              >
                Explore Product Range
              </Link>
            </div>
          </div>

          <div className="lg:col-span-4 hidden lg:block">
            <div className="border-l border-white/20 pl-8 space-y-6">
              <div className="text-xs font-mono-tech uppercase tracking-[0.2em] text-white/50">At a glance</div>
              {[
                { k: "Annual capacity", v: "12.4 B units" },
                { k: "Cleanroom area", v: "32,000 sq.ft." },
                { k: "Export markets", v: "42 countries" },
                { k: "Compliance", v: "ISO 15378 · GMP" },
              ].map((s) => (
                <div key={s.k} className="flex justify-between items-baseline border-b border-white/10 pb-3">
                  <span className="text-white/60 text-sm">{s.k}</span>
                  <span className="font-mono-tech text-white font-medium">{s.v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TRUST METRICS */}
      <section className="bg-white border-b border-gray-200" data-testid="home-metrics">
        <div className="max-w-[1400px] mx-auto px-6 py-16 lg:py-20 grid grid-cols-2 lg:grid-cols-4 gap-10">
          {TRUST_METRICS.map((m, i) => (
            <div key={i} className="border-l-2 border-[#00A36C] pl-6">
              <div className="text-4xl lg:text-5xl font-semibold text-[#003B5C] tabular tracking-tight">{m.value}</div>
              <div className="mt-3 text-sm font-medium text-[#111827]">{m.label}</div>
              <div className="mt-1 text-xs font-mono-tech text-[#4B5563]">{m.caption}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCT SHOWCASE */}
      <section className="bg-[#F3F4F6] py-24 lg:py-32" data-testid="home-products">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-16">
            <SectionHeading
              eyebrow="Product Range"
              title="A complete primary packaging portfolio"
              subtitle="From hard-temper PTP blister foils to multi-layer cold-form laminates – engineered, qualified and supplied to global pharma."
            />
            <Link to="/products" className="text-sm font-semibold text-[#003B5C] hover:text-[#00A36C] flex items-center gap-2 whitespace-nowrap" data-testid="home-products-view-all">
              View All Products <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200">
            {featured.map((p) => (
              <Link
                key={p.slug}
                to={`/products/${p.slug}`}
                data-testid={`product-card-${p.slug}`}
                className="group bg-white p-8 hover:bg-[#003B5C] transition-colors duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden bg-gray-100 mb-6">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="text-[10px] font-mono-tech uppercase tracking-[0.2em] text-[#00A36C] mb-2">{p.category}</div>
                <h3 className="text-xl font-semibold text-[#003B5C] group-hover:text-white tracking-tight">{p.name}</h3>
                <p className="mt-3 text-sm text-[#4B5563] group-hover:text-white/70 leading-relaxed">{p.tagline}</p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#003B5C] group-hover:text-[#00A36C]">
                  Specifications <ChevronRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="bg-white py-24 lg:py-32" data-testid="home-industries">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="Industries Served"
              title="Trusted across regulated sectors."
              subtitle="Our packaging is qualified by formulators across four highly-regulated industries."
            />
            <Link to="/industries" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#003B5C] hover:text-[#00A36C]" data-testid="home-industries-link">
              Explore Industry Solutions <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-px bg-gray-200">
            {INDUSTRIES.map((ind) => (
              <div key={ind.name} className="bg-white p-8 hover:bg-[#F3F4F6] transition-colors">
                <i className={`${ind.icon} text-3xl text-[#003B5C] mb-5`}></i>
                <h3 className="text-xl font-semibold text-[#003B5C] mb-3">{ind.name}</h3>
                <p className="text-sm text-[#4B5563] leading-relaxed mb-5">{ind.blurb}</p>
                <ul className="space-y-2">
                  {ind.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2 text-xs text-[#4B5563]">
                      <Check className="w-3.5 h-3.5 text-[#00A36C] mt-0.5 flex-shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MANUFACTURING EXCELLENCE */}
      <section className="bg-[#003B5C] text-white py-24 lg:py-32 relative overflow-hidden" data-testid="home-manufacturing">
        <div className="absolute inset-0 blueprint-grid opacity-20" />
        <div className="relative max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading
              eyebrow="Manufacturing Excellence"
              title="180,000 sq.ft. of pharmaceutical-grade conversion."
              subtitle="Six production lines, two cold-form lamination lines, and 32,000 sq.ft. of ISO Class 8 cleanroom – purpose-built for pharmaceutical primary packaging."
              dark
            />
            <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-6">
              {[
                ["6", "Production lines"],
                ["32K", "Cleanroom sq.ft."],
                ["8,400", "MT/yr PTP foil"],
                ["4,200", "MT/yr cold-form"],
              ].map(([v, l], i) => (
                <div key={i}>
                  <div className="text-3xl font-semibold tabular text-white">{v}</div>
                  <div className="mt-1 text-xs font-mono-tech text-white/60 uppercase tracking-wider">{l}</div>
                </div>
              ))}
            </div>
            <Link to="/manufacturing" className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-[#00A36C] hover:text-white" data-testid="home-manufacturing-link">
              Tour the Facility <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="aspect-[3/4] overflow-hidden">
              <img src={IMG.machinery} alt="Machinery" className="w-full h-full object-cover" />
            </div>
            <div className="grid gap-3">
              <div className="aspect-square overflow-hidden">
                <img src={IMG.cleanroomOp} alt="Cleanroom" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-square overflow-hidden">
                <img src={IMG.productionLine} alt="Production" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUALITY & CERTIFICATIONS */}
      <section className="bg-white py-24 lg:py-32" data-testid="home-quality">
        <div className="max-w-[1400px] mx-auto px-6">
          <SectionHeading
            eyebrow="Quality & Compliance"
            title="Audited. Certified. Documented."
            subtitle="Every roll, every batch, every shipment – traceable to ISO 15378 batch records and qualified against ICH Q1A stability protocols."
          />
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-px bg-gray-200">
            {CERTS.map((c, i) => (
              <div key={i} className="bg-white p-8 hover:bg-[#F3F4F6] transition-colors">
                <div className="font-mono-tech text-[10px] uppercase tracking-[0.2em] text-[#00A36C] mb-3">Since {c.year}</div>
                <div className="font-semibold text-[#003B5C] text-lg leading-tight">{c.code}</div>
                <div className="mt-2 text-xs text-[#4B5563] leading-relaxed">{c.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GLOBAL PRESENCE */}
      <section className="bg-[#F3F4F6] py-24 lg:py-32" data-testid="home-global">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Global Footprint"
              title="42 countries. 5 continents. One supplier."
              subtitle="From Mumbai to Mexico City, our packaging crosses borders under formal export documentation, full COA traceability and regional regulatory dossiers."
            />
            <Link to="/exports" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#003B5C] hover:text-[#00A36C]">
              Explore Export Capabilities <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-px bg-gray-200">
            {REGIONS.map((r) => (
              <div key={r.region} className="bg-white p-6">
                <div className="text-3xl font-semibold text-[#003B5C] tabular">{r.count}</div>
                <div className="mt-2 text-sm font-medium text-[#111827]">{r.region}</div>
                <div className="mt-1 text-xs text-[#4B5563] leading-snug">{r.examples}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-white py-24 lg:py-32" data-testid="home-testimonials">
        <div className="max-w-[1400px] mx-auto px-6">
          <SectionHeading
            eyebrow="Client Voice"
            title="Trusted by procurement leaders worldwide."
          />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-200">
            {TESTIMONIALS.map((t, i) => (
              <figure key={i} className="bg-white p-10">
                <i className="fa-solid fa-quote-left text-2xl text-[#00A36C] mb-6"></i>
                <blockquote className="text-base text-[#111827] leading-relaxed">&ldquo;{t.quote}&rdquo;</blockquote>
                <figcaption className="mt-8 pt-6 border-t border-gray-200">
                  <div className="font-semibold text-[#003B5C]">{t.name}</div>
                  <div className="text-xs text-[#4B5563] mt-1">{t.role}</div>
                  <div className="text-xs font-mono-tech text-[#00A36C] mt-1">{t.company}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
