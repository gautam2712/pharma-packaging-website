import { useParams, Link, Navigate } from "react-router-dom";
import { useState } from "react";
import { ChevronRight, Download, ArrowRight, Check } from "lucide-react";
import { PRODUCTS, CERTS } from "@/data/site";
import PageHero from "@/components/PageHero";

export default function ProductDetail() {
  const { slug } = useParams();
  const product = PRODUCTS.find((p) => p.slug === slug);
  const [activeImg, setActiveImg] = useState(0);

  if (!product) return <Navigate to="/products" replace />;

  const related = PRODUCTS.filter((p) => p.category === product.category && p.slug !== product.slug).slice(0, 3);
  const gallery = [product.image, ...PRODUCTS.filter((p) => p.slug !== product.slug).slice(0, 3).map((p) => p.image)];

  return (
    <div data-testid="product-detail-page">
      <PageHero
        eyebrow={product.category}
        title={product.name}
        subtitle={product.tagline}
        breadcrumb={[{ label: "Products", to: "/products" }, { label: product.name }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link to="/rfq" data-testid="product-rfq-cta" className="inline-flex items-center gap-2 bg-[#00A36C] hover:bg-[#008759] text-white px-7 py-3.5 font-semibold transition-colors">
            Request Quote <ArrowRight className="w-4 h-4" />
          </Link>
          <a href="#downloads" className="inline-flex items-center gap-2 border border-white/30 hover:bg-white hover:text-[#003B5C] px-7 py-3.5 font-semibold transition-colors">
            Datasheet <Download className="w-4 h-4" />
          </a>
        </div>
      </PageHero>

      {/* GALLERY + OVERVIEW */}
      <section className="bg-white py-24">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7">
            <div className="aspect-[4/3] overflow-hidden bg-gray-100 mb-4">
              <img src={gallery[activeImg]} alt={product.name} className="w-full h-full object-cover" />
            </div>
            <div className="grid grid-cols-4 gap-3">
              {gallery.map((g, i) => (
                <button
                  key={i}
                  data-testid={`product-thumb-${i}`}
                  onClick={() => setActiveImg(i)}
                  className={`aspect-square overflow-hidden bg-gray-100 border-2 transition-colors ${activeImg === i ? "border-[#003B5C]" : "border-transparent"}`}
                >
                  <img src={g} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="text-xs font-mono-tech uppercase tracking-[0.3em] text-[#00A36C] mb-4 accent-bar">Overview</div>
            <p className="text-[#4B5563] leading-relaxed text-lg">{product.description}</p>

            <div className="mt-10 border-t border-gray-200 pt-8">
              <div className="text-xs font-mono-tech uppercase tracking-[0.3em] text-[#003B5C] mb-4">Applications</div>
              <div className="flex flex-wrap gap-2">
                {product.applications.map((a) => (
                  <span key={a} className="px-3 py-1.5 bg-[#F3F4F6] text-sm text-[#111827] font-medium">{a}</span>
                ))}
              </div>
            </div>

            <div className="mt-8 border-t border-gray-200 pt-8">
              <div className="text-xs font-mono-tech uppercase tracking-[0.3em] text-[#003B5C] mb-4">Key Benefits</div>
              <ul className="space-y-3">
                {product.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-[#111827]">
                    <Check className="w-4 h-4 text-[#00A36C] mt-1 flex-shrink-0" />
                    <span className="text-sm">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SPECS */}
      <section className="bg-[#F3F4F6] py-24" id="specs">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-xs font-mono-tech uppercase tracking-[0.3em] text-[#00A36C] mb-4 accent-bar">Technical Specifications</div>
          <h2 className="text-3xl lg:text-4xl font-semibold text-[#003B5C] mb-12">Engineered parameters & tolerances</h2>
          <div className="bg-white">
            <table className="w-full text-sm" data-testid="specs-table">
              <tbody>
                {product.specs.map((s, i) => (
                  <tr key={i} className="border-b border-gray-100 last:border-0">
                    <td className="py-4 px-6 font-mono-tech uppercase tracking-wider text-xs text-[#4B5563] w-1/3 bg-[#F3F4F6]/50">{s.k}</td>
                    <td className="py-4 px-6 font-medium text-[#111827]">{s.v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* DOWNLOADS */}
      <section className="bg-white py-24" id="downloads">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <div className="text-xs font-mono-tech uppercase tracking-[0.3em] text-[#00A36C] mb-4 accent-bar">Downloads</div>
            <h2 className="text-3xl lg:text-4xl font-semibold text-[#003B5C] mb-6">Technical documentation</h2>
            <p className="text-[#4B5563] leading-relaxed">
              All product documentation is available under signed NDA. Submit an RFQ or contact our technical team for access.
            </p>
          </div>
          <div className="space-y-2">
            {[
              { f: "Technical Datasheet (PDF)", s: "1.4 MB" },
              { f: "Certificate of Analysis – Sample", s: "320 KB" },
              { f: "ICH Q1A Stability Report", s: "2.1 MB" },
              { f: "Regulatory Compliance Pack", s: "5.8 MB" },
            ].map((d) => (
              <a key={d.f} href="#" data-testid={`download-${d.f}`} className="flex items-center justify-between border border-gray-200 p-5 hover:bg-[#F3F4F6] transition-colors">
                <div>
                  <div className="font-medium text-[#003B5C]">{d.f}</div>
                  <div className="text-xs font-mono-tech text-[#4B5563] mt-1">{d.s} · NDA required</div>
                </div>
                <Download className="w-5 h-5 text-[#003B5C]" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="bg-[#003B5C] text-white py-24">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-xs font-mono-tech uppercase tracking-[0.3em] text-[#00A36C] mb-4 accent-bar">Compliance</div>
          <h2 className="text-3xl lg:text-4xl font-semibold mb-12">Manufactured under audited quality systems</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10">
            {CERTS.slice(0, 4).map((c) => (
              <div key={c.code} className="bg-[#003B5C] p-6">
                <i className="fa-solid fa-certificate text-2xl text-[#00A36C] mb-3"></i>
                <div className="font-semibold">{c.code}</div>
                <div className="text-xs text-white/60 mt-1">{c.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED */}
      {related.length > 0 && (
        <section className="bg-white py-24">
          <div className="max-w-[1400px] mx-auto px-6">
            <h2 className="text-3xl lg:text-4xl font-semibold text-[#003B5C] mb-12">Related products</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-200">
              {related.map((p) => (
                <Link key={p.slug} to={`/products/${p.slug}`} className="group bg-white p-8 hover:bg-[#F3F4F6] transition-colors">
                  <div className="aspect-[4/3] overflow-hidden mb-6"><img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /></div>
                  <div className="text-[10px] font-mono-tech uppercase tracking-[0.2em] text-[#00A36C] mb-2">{p.category}</div>
                  <h3 className="text-xl font-semibold text-[#003B5C]">{p.name}</h3>
                  <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#003B5C]">View <ChevronRight className="w-4 h-4" /></div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
