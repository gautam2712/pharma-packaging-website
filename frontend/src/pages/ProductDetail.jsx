import { useParams, Link, Navigate } from "react-router-dom";
import { useState, useRef } from "react";
import { ChevronRight, Download, ArrowRight, Check, ArrowUpRight, FileText, ShieldCheck, Layers } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { PRODUCTS, CERTS } from "@/data/site";
import Reveal from "@/components/animations/Reveal";

export default function ProductDetail() {
  const { slug } = useParams();
  const product = PRODUCTS.find((p) => p.slug === slug);
  const [activeImg, setActiveImg] = useState(0);
  const [activeTab, setActiveTab] = useState("overview");

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  if (!product) return <Navigate to="/products" replace />;

  const productIndex = PRODUCTS.findIndex((p) => p.slug === slug) + 1;
  const related = PRODUCTS.filter((p) => p.slug !== product.slug).slice(0, 3);
  const gallery = [product.image, ...PRODUCTS.filter((p) => p.slug !== product.slug).slice(0, 3).map((p) => p.image)];

  return (
    <div data-testid="product-detail-page" className="bg-white">
      {/* ============== EDITORIAL HERO ============== */}
      <section ref={heroRef} className="relative bg-[#002840] text-white overflow-hidden">
        <motion.div style={{ y: imgY }} className="absolute inset-0">
          <img src={product.image} alt="" className="w-full h-full object-cover opacity-25" />
        </motion.div>
        <div className="absolute inset-0 pf-dark-gradient" />
        <div className="absolute inset-0 blueprint-grid opacity-25" />

        <div className="relative max-w-[1400px] mx-auto px-6 pt-16 pb-24 lg:pt-24 lg:pb-32">
          {/* Breadcrumb */}
          <nav className="text-xs font-mono-tech uppercase tracking-[0.25em] text-white/50 mb-12">
            <Link to="/" className="hover:text-[#00A36C]">Home</Link>
            <span className="mx-3 text-white/20">/</span>
            <Link to="/products" className="hover:text-[#00A36C]">Products</Link>
            <span className="mx-3 text-white/20">/</span>
            <span className="text-white">{product.name}</span>
          </nav>

          <div className="grid grid-cols-12 gap-8 items-end">
            <div className="col-span-12 lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="flex items-center gap-5 mb-6"
              >
                <span className="text-[10px] font-mono-tech uppercase tracking-[0.3em] text-[#00A36C]">
                  Product File · P / {String(productIndex).padStart(2, "0")}
                </span>
                <span className="h-px w-12 bg-white/30" />
                <span className="text-[10px] font-mono-tech uppercase tracking-[0.25em] text-white/50">{product.category}</span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="text-[clamp(2.25rem,5vw,4.75rem)] font-semibold tracking-tight leading-[0.98] max-w-4xl"
              >
                {product.name}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.35 }}
                className="mt-6 text-lg lg:text-xl text-white/70 max-w-2xl leading-relaxed"
              >
                {product.tagline}
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="col-span-12 lg:col-span-4"
            >
              <div className="border-l-2 border-[#00A36C] pl-6 space-y-4">
                {product.specs.slice(0, 3).map((s) => (
                  <div key={s.k} className="flex items-baseline justify-between gap-4">
                    <span className="text-[10px] font-mono-tech uppercase tracking-[0.2em] text-white/50">{s.k}</span>
                    <span className="text-white font-medium text-sm">{s.v}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex gap-2">
                <Link
                  to="/rfq"
                  data-testid="product-rfq-cta"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-[#00A36C] hover:bg-[#008759] text-white px-5 py-3.5 font-semibold transition-colors"
                >
                  Request Quote <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="#downloads"
                  className="inline-flex items-center justify-center gap-2 border border-white/30 hover:bg-white hover:text-[#003B5C] px-5 py-3.5 font-semibold transition-colors"
                  aria-label="Download datasheet"
                >
                  <Download className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============== TAB NAV ============== */}
      <section className="bg-white sticky top-[73px] xl:top-[97px] z-30 border-b border-gray-200 backdrop-blur supports-[backdrop-filter]:bg-white/95">
        <div className="max-w-[1400px] mx-auto px-6 flex items-center gap-1 overflow-x-auto">
          {[
            { id: "overview", l: "Overview", i: <Layers className="w-3.5 h-3.5" /> },
            { id: "specs", l: "Specifications", i: <FileText className="w-3.5 h-3.5" /> },
            { id: "downloads", l: "Downloads", i: <Download className="w-3.5 h-3.5" /> },
            { id: "compliance", l: "Compliance", i: <ShieldCheck className="w-3.5 h-3.5" /> },
          ].map((t) => (
            <a
              key={t.id}
              href={`#${t.id}`}
              onClick={() => setActiveTab(t.id)}
              data-testid={`tab-${t.id}`}
              className={`px-5 py-4 text-xs font-mono-tech uppercase tracking-[0.2em] whitespace-nowrap flex items-center gap-2 border-b-2 transition-colors ${activeTab === t.id ? "border-[#00A36C] text-[#003B5C]" : "border-transparent text-[#4B5563] hover:text-[#003B5C]"}`}
            >
              {t.i}
              {t.l}
            </a>
          ))}
        </div>
      </section>

      {/* ============== OVERVIEW + GALLERY ============== */}
      <section id="overview" className="bg-white py-24 lg:py-32 scroll-mt-32">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* GALLERY */}
          <Reveal className="lg:col-span-7">
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden bg-gray-100 mb-3">
                <motion.img
                  key={activeImg}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7 }}
                  src={gallery[activeImg]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-4 left-4 text-[10px] font-mono-tech uppercase tracking-[0.25em] text-white bg-black/40 backdrop-blur px-3 py-1.5">
                IMG {String(activeImg + 1).padStart(2, "0")} / {String(gallery.length).padStart(2, "0")}
              </div>
            </div>
            <div className="grid grid-cols-4 gap-3">
              {gallery.map((g, i) => (
                <button
                  key={i}
                  data-testid={`product-thumb-${i}`}
                  onClick={() => setActiveImg(i)}
                  className={`aspect-square overflow-hidden bg-gray-100 transition-all ${activeImg === i ? "ring-2 ring-[#003B5C] ring-offset-2" : "opacity-60 hover:opacity-100"}`}
                >
                  <img src={g} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </Reveal>

          {/* OVERVIEW */}
          <Reveal className="lg:col-span-5">
            <div className="text-xs font-mono-tech uppercase tracking-[0.3em] text-[#00A36C] mb-4 accent-bar">
              Overview
            </div>
            <p className="text-[#4B5563] leading-relaxed text-lg">{product.description}</p>

            <div className="mt-10 border-t border-gray-200 pt-8">
              <div className="text-xs font-mono-tech uppercase tracking-[0.3em] text-[#003B5C] mb-4">
                Engineered for
              </div>
              <div className="flex flex-wrap gap-2">
                {product.applications.map((a) => (
                  <span key={a} className="px-3 py-1.5 bg-[#F3F4F6] text-sm text-[#111827] font-medium border border-gray-200">
                    {a}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 border-t border-gray-200 pt-8">
              <div className="text-xs font-mono-tech uppercase tracking-[0.3em] text-[#003B5C] mb-4">
                Key Benefits
              </div>
              <ul className="space-y-3">
                {product.benefits.map((b, i) => (
                  <Reveal key={b} delay={i * 0.08}>
                    <li className="flex items-start gap-3 text-[#111827] group">
                      <span className="w-6 h-6 bg-[#00A36C]/10 flex items-center justify-center mt-0.5 flex-shrink-0 group-hover:bg-[#00A36C] transition-colors">
                        <Check className="w-3.5 h-3.5 text-[#00A36C] group-hover:text-white transition-colors" />
                      </span>
                      <span className="text-sm leading-relaxed">{b}</span>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============== SPECS — ANIMATED TABLE ============== */}
      <section id="specs" className="bg-[#F3F4F6] py-24 lg:py-32 scroll-mt-32 pf-grain">
        <div className="max-w-[1400px] mx-auto px-6">
          <Reveal>
            <div className="grid grid-cols-12 gap-8 items-end mb-12">
              <div className="col-span-12 lg:col-span-7">
                <div className="text-xs font-mono-tech uppercase tracking-[0.3em] text-[#00A36C] mb-4 accent-bar">
                  Technical Specifications
                </div>
                <h2 className="text-3xl lg:text-5xl font-semibold text-[#003B5C] tracking-tight leading-tight">
                  Engineered parameters &amp; tolerances.
                </h2>
              </div>
              <div className="col-span-12 lg:col-span-5">
                <p className="text-[#4B5563] leading-relaxed">
                  Every parameter below is sampled at the slitting stage on every batch, against an ISO 15378 batch record traceable to incoming substrate.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="bg-white">
            <table className="w-full text-sm" data-testid="specs-table">
              <tbody>
                {product.specs.map((s, i) => (
                  <motion.tr
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ delay: i * 0.06, duration: 0.5 }}
                    className="border-b border-gray-100 last:border-0 group hover:bg-[#F3F4F6]/40 transition-colors"
                  >
                    <td className="py-5 px-6 lg:px-10 w-1/3">
                      <div className="font-mono-tech uppercase tracking-wider text-[10px] text-[#4B5563] mb-1">
                        Param / {String(i + 1).padStart(2, "0")}
                      </div>
                      <div className="font-semibold text-[#003B5C]">{s.k}</div>
                    </td>
                    <td className="py-5 px-6 lg:px-10 font-medium text-[#111827] text-base lg:text-lg">{s.v}</td>
                    <td className="py-5 px-6 lg:px-10 w-1/4 hidden md:table-cell">
                      <div className="h-1 bg-gray-100 overflow-hidden">
                        <motion.div
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.06 + 0.2, duration: 0.9, ease: [0.2, 0.7, 0.2, 1] }}
                          style={{ transformOrigin: "left" }}
                          className="h-full bg-[#00A36C]"
                        />
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Substrate diagram (illustrative) */}
          <Reveal>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-200">
              {[
                { l: "Outer print layer", c: "PET / OPA" },
                { l: "Barrier core", c: "Aluminium 25 µm" },
                { l: "Seal layer", c: "Heat-seal lacquer" },
              ].map((b, i) => (
                <div key={i} className="bg-white p-7">
                  <div className="text-[10px] font-mono-tech uppercase tracking-[0.25em] text-[#00A36C] mb-3">Layer {i + 1}</div>
                  <div className="text-lg font-semibold text-[#003B5C]">{b.l}</div>
                  <div className="mt-1 text-sm text-[#4B5563]">{b.c}</div>
                  <div className="mt-5 h-2 bg-[#F3F4F6]">
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15, duration: 0.9 }}
                      style={{ transformOrigin: "left" }}
                      className="h-full bg-[#003B5C]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============== DOWNLOADS ============== */}
      <section id="downloads" className="bg-white py-24 lg:py-32 scroll-mt-32">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">
          <Reveal className="lg:col-span-5">
            <div className="text-xs font-mono-tech uppercase tracking-[0.3em] text-[#00A36C] mb-4 accent-bar">
              Documentation
            </div>
            <h2 className="text-3xl lg:text-5xl font-semibold text-[#003B5C] tracking-tight leading-tight">
              Technical &amp; regulatory documentation.
            </h2>
            <p className="mt-6 text-[#4B5563] leading-relaxed text-lg">
              All documentation is available under signed NDA. Submit an RFQ or contact our technical team for access.
            </p>
          </Reveal>
          <div className="lg:col-span-7 space-y-2">
            {[
              { f: "Technical Datasheet", s: "1.4 MB", t: "PDF" },
              { f: "Certificate of Analysis – Sample", s: "320 KB", t: "PDF" },
              { f: "ICH Q1A Stability Report", s: "2.1 MB", t: "PDF" },
              { f: "Regulatory Compliance Pack", s: "5.8 MB", t: "ZIP" },
            ].map((d, i) => (
              <Reveal key={d.f} delay={i * 0.08}>
                <a href="#" data-testid={`download-${d.f}`} className="group flex items-center gap-6 border border-gray-200 p-6 hover:border-[#003B5C] hover:bg-[#F3F4F6] transition-all">
                  <div className="w-12 h-14 bg-[#003B5C] text-white flex items-center justify-center font-mono-tech text-xs tracking-wider">
                    {d.t}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-[#003B5C] truncate">{d.f}</div>
                    <div className="text-xs font-mono-tech text-[#4B5563] mt-1">{d.s} · NDA required</div>
                  </div>
                  <div className="w-10 h-10 border border-gray-300 group-hover:bg-[#003B5C] group-hover:border-[#003B5C] group-hover:text-white flex items-center justify-center transition-all">
                    <Download className="w-4 h-4 text-[#003B5C] group-hover:text-white transition-colors" />
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============== COMPLIANCE ============== */}
      <section id="compliance" className="bg-[#002840] text-white py-24 lg:py-32 relative overflow-hidden scroll-mt-32">
        <div className="absolute inset-0 pf-dark-gradient" />
        <div className="absolute inset-0 blueprint-grid opacity-25" />
        <div className="relative max-w-[1400px] mx-auto px-6">
          <Reveal>
            <div className="grid grid-cols-12 gap-8 items-end mb-12">
              <div className="col-span-12 lg:col-span-7">
                <div className="text-xs font-mono-tech uppercase tracking-[0.3em] text-[#00A36C] mb-4 accent-bar">
                  Audited Quality Systems
                </div>
                <h2 className="text-3xl lg:text-5xl font-semibold tracking-tight leading-tight">
                  Manufactured under continuous audit.
                </h2>
              </div>
              <div className="col-span-12 lg:col-span-5">
                <p className="text-white/70 leading-relaxed">
                  Every batch of {product.name.toLowerCase()} ships with full ISO 15378 batch documentation and Certificate of Analysis.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10">
            {CERTS.slice(0, 4).map((c, i) => (
              <Reveal key={c.code} delay={i * 0.08}>
                <div className="bg-[#002840] p-7 h-full group hover:bg-[#003B5C] transition-colors">
                  <i className="fa-solid fa-certificate text-2xl text-[#00A36C] mb-4"></i>
                  <div className="font-semibold leading-tight">{c.code}</div>
                  <div className="text-xs text-white/60 mt-1 leading-relaxed">{c.body}</div>
                  <div className="mt-5 pt-5 border-t border-white/10 text-[10px] font-mono-tech text-white/40 uppercase tracking-wider">
                    Since {c.year}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============== RELATED ============== */}
      {related.length > 0 && (
        <section className="bg-white py-24 lg:py-32">
          <div className="max-w-[1400px] mx-auto px-6">
            <Reveal>
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-12">
                <div>
                  <div className="text-xs font-mono-tech uppercase tracking-[0.3em] text-[#00A36C] mb-4 accent-bar">
                    Continue exploring
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-semibold text-[#003B5C] tracking-tight leading-tight">
                    Related products
                  </h2>
                </div>
                <Link to="/products" className="group inline-flex items-center gap-3 text-sm font-semibold text-[#003B5C] hover:text-[#00A36C]">
                  <span className="pf-link-arrow">View all products</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-200">
              {related.map((p, i) => (
                <Reveal key={p.slug} delay={i * 0.08}>
                  <Link
                    to={`/products/${p.slug}`}
                    className="group bg-white p-7 h-full block pf-card-lift relative overflow-hidden"
                  >
                    <div className="absolute top-4 right-4 text-[10px] font-mono-tech uppercase tracking-[0.2em] text-[#4B5563]">
                      P / {String(PRODUCTS.findIndex(x => x.slug === p.slug) + 1).padStart(2, "0")}
                    </div>
                    <div className="aspect-[4/3] overflow-hidden mb-5">
                      <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1000ms]" />
                    </div>
                    <div className="text-[10px] font-mono-tech uppercase tracking-[0.2em] text-[#00A36C] mb-2">{p.category}</div>
                    <h3 className="text-xl font-semibold text-[#003B5C] tracking-tight leading-tight">{p.name}</h3>
                    <p className="mt-2 text-sm text-[#4B5563] leading-relaxed line-clamp-2">{p.tagline}</p>
                    <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#003B5C] group-hover:text-[#00A36C] transition-colors">
                      <span className="pf-link-arrow">View product</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ============== STICKY CTA STRIP ============== */}
      <section className="bg-[#003B5C] text-white relative overflow-hidden">
        <div className="absolute inset-0 pf-dark-gradient" />
        <div className="relative max-w-[1400px] mx-auto px-6 py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <div className="text-xs font-mono-tech uppercase tracking-[0.3em] text-[#00A36C] mb-4 accent-bar">
              Quotation
            </div>
            <h3 className="text-2xl lg:text-4xl font-semibold tracking-tight leading-tight">
              Specify your {product.name.toLowerCase()} requirement.
            </h3>
            <p className="mt-3 text-white/70 max-w-2xl">
              Annual volumes, target markets and barrier requirements. Our export desk will respond within 16 business hours.
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-col sm:flex-row gap-3 lg:justify-end">
            <Link to="/rfq" className="inline-flex items-center justify-center gap-2 bg-[#00A36C] hover:bg-[#008759] text-white px-7 py-4 font-semibold transition-colors">
              Start RFQ <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 border border-white/30 hover:bg-white hover:text-[#003B5C] px-7 py-4 font-semibold transition-colors">
              Talk to engineer
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
