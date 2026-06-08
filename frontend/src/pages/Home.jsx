import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight, ArrowUpRight, Plus } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  COMPANY,
  IMG,
  TRUST_METRICS,
  PRODUCTS,
  INDUSTRIES,
  CERTS,
  TESTIMONIALS,
  REGIONS,
} from "@/data/site";
import SectionHeading from "@/components/SectionHeading";
import CTABanner from "@/components/CTABanner";
import Reveal from "@/components/animations/Reveal";
import CountUp from "@/components/animations/CountUp";
import Marquee from "@/components/Marquee";

export default function Home() {
  const featured = PRODUCTS.slice(0, 5);

  // Hero parallax
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroImgY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const heroTextY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <div data-testid="home-page">
      {/* ============== HERO ============== */}
      <section ref={heroRef} className="relative bg-[#002840] text-white overflow-hidden min-h-[92vh] flex items-center" data-testid="home-hero">
        {/* Layered background */}
        <motion.div style={{ y: heroImgY }} className="absolute inset-0">
          <img src={IMG.heroCleanroom} alt="" className="w-full h-full object-cover opacity-35" />
        </motion.div>
        <div className="absolute inset-0 pf-dark-gradient mix-blend-multiply" />
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0 blueprint-grid opacity-25 pointer-events-none" />

        {/* Side rail */}
        <div className="hidden lg:flex absolute top-1/2 -translate-y-1/2 left-6 flex-col items-center gap-4 z-10">
          <div className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-white/40 -rotate-90 origin-center whitespace-nowrap mt-20">
            01 / 09 · Hero
          </div>
        </div>
        <div className="hidden lg:flex absolute top-1/2 -translate-y-1/2 right-6 flex-col items-center gap-3 z-10">
          <span className="w-1.5 h-1.5 bg-[#00A36C] pf-pulse" />
          <span className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-white/40 [writing-mode:vertical-rl]">
            Live · {new Date().getFullYear()}
          </span>
        </div>

        <motion.div style={{ y: heroTextY }} className="relative max-w-[1400px] w-full mx-auto px-6 py-24 lg:py-32 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* LEFT TEXT */}
          <div className="lg:col-span-7 z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-xs font-mono-tech uppercase tracking-[0.35em] text-[#00A36C] mb-7 flex items-center gap-4"
            >
              <span className="w-10 h-px bg-[#00A36C]" />
              Pharmaceutical Packaging · Est. {COMPANY.established}
            </motion.div>

            <h1 className="text-[clamp(2.5rem,6vw,5.5rem)] font-semibold tracking-tight leading-[0.98] max-w-5xl">
              {["Precision", "barrier", "packaging,", "engineered", "for", "the world's", "most", "demanding", "pharma."].map((w, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.25 + i * 0.06, ease: [0.2, 0.7, 0.2, 1] }}
                  className="inline-block mr-[0.25em]"
                >
                  {w === "world's" ? <span className="text-[#00A36C]">{w}</span> : w}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.1 }}
              className="mt-8 text-lg lg:text-xl text-white/75 max-w-2xl leading-relaxed"
            >
              From hard-temper blister foils to cold-form Alu-Alu and tropical laminates – PharmaFoil supplies primary packaging to <span className="text-white font-medium">320 + pharmaceutical clients across 42 export markets</span>, under ISO 15378, WHO GMP and US DMF Type III compliance.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.3 }}
              className="mt-10 flex flex-wrap gap-3"
            >
              <Link
                to="/rfq"
                data-testid="hero-rfq-cta"
                className="group inline-flex items-center gap-3 bg-[#00A36C] hover:bg-[#008759] text-white pl-7 pr-5 py-4 font-semibold tracking-wide transition-colors"
              >
                Request Quotation
                <span className="w-8 h-8 bg-white/15 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
              <Link
                to="/products"
                data-testid="hero-products-cta"
                className="inline-flex items-center gap-2 border border-white/25 hover:border-white hover:bg-white hover:text-[#003B5C] px-7 py-4 font-semibold tracking-wide transition-all"
              >
                Explore Product Range
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="mt-14 flex items-center gap-8 text-xs font-mono-tech uppercase tracking-[0.2em] text-white/40"
            >
              <span className="flex items-center gap-2">
                <i className="fa-solid fa-shield-halved text-[#00A36C]"></i>ISO 15378
              </span>
              <span className="flex items-center gap-2">
                <i className="fa-solid fa-flask-vial text-[#00A36C]"></i>WHO GMP
              </span>
              <span className="hidden sm:flex items-center gap-2">
                <i className="fa-solid fa-passport text-[#00A36C]"></i>US DMF Type III
              </span>
              <span className="hidden md:flex items-center gap-2">
                <i className="fa-solid fa-leaf text-[#00A36C]"></i>ISO 14001
              </span>
            </motion.div>
          </div>

          {/* RIGHT - LAYERED IMAGE STACK */}
          <div className="lg:col-span-5 hidden lg:block relative h-[560px]">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.5, ease: [0.2, 0.7, 0.2, 1] }}
              className="absolute top-0 right-0 w-[78%] aspect-[3/4] overflow-hidden border border-white/10 pf-float"
            >
              <img src={IMG.cleanroomOp} alt="Cleanroom operations" className="w-full h-full object-cover" />
              <div className="absolute top-3 left-3 text-[10px] font-mono-tech uppercase tracking-[0.25em] text-white/80 bg-black/30 backdrop-blur px-2 py-1">CLEAN ROOM · ISO 8</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.75, ease: [0.2, 0.7, 0.2, 1] }}
              className="absolute bottom-0 left-0 w-[60%] aspect-[4/3] overflow-hidden border border-white/10 pf-float-slow"
            >
              <img src={IMG.foilClose} alt="Aluminium foil" className="w-full h-full object-cover" />
              <div className="absolute top-3 left-3 text-[10px] font-mono-tech uppercase tracking-[0.25em] text-white/80 bg-black/30 backdrop-blur px-2 py-1">FOIL · 25 µm</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 1.0 }}
              className="absolute top-[42%] left-[42%] w-44 bg-[#003B5C]/90 backdrop-blur border border-[#00A36C]/40 p-5"
            >
              <div className="text-[10px] font-mono-tech uppercase tracking-[0.2em] text-[#00A36C]">Live capacity</div>
              <div className="mt-2 text-3xl font-semibold tabular text-white">
                <CountUp to={12.4} decimals={1} />B
              </div>
              <div className="mt-1 text-xs text-white/60">units / year</div>
              <div className="mt-4 h-1 bg-white/10 overflow-hidden">
                <div className="h-full bg-[#00A36C] w-[78%] pf-line-grow" />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-3 text-white/40">
          <div className="font-mono-tech text-[10px] uppercase tracking-[0.3em]">Scroll</div>
          <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </section>

      {/* ============== TICKER STRIP ============== */}
      <section className="bg-[#001f33] text-white border-y border-white/5">
        <Marquee
          items={[
            "ISO 15378 : 2017",
            "WHO GMP",
            "US DMF Type III #34218",
            "EDQM CEP",
            "PMDA Master File",
            "ANVISA Cadastro",
            "ISO 9001 : 2015",
            "ISO 14001 : 2015",
            "BRCGS Packaging AA",
            "FSSC 22000",
            "ISO 45001 : 2018",
          ]}
        />
      </section>

      {/* ============== TRUST METRICS ============== */}
      <section className="bg-white border-b border-gray-200 relative" data-testid="home-metrics">
        <div className="max-w-[1400px] mx-auto px-6 py-20 lg:py-24">
          <div className="grid grid-cols-12 gap-8 items-end mb-14">
            <div className="col-span-12 lg:col-span-5">
              <div className="text-xs font-mono-tech uppercase tracking-[0.3em] text-[#00A36C] mb-4 accent-bar">
                02 · By the numbers
              </div>
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#003B5C] tracking-tight leading-tight">
                Twenty-seven years of compound execution.
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-5 lg:col-start-8">
              <p className="text-[#4B5563] leading-relaxed">
                The numbers below are not marketing claims. They are the audited output of a single pharmaceutical packaging plant in Vapi, Gujarat – measured monthly, audited annually.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200">
            {[
              { v: 27, suf: "+", lbl: "Years of manufacturing excellence", cap: "Established 1998" },
              { v: 42, suf: "", lbl: "Active export markets", cap: "Across 5 continents" },
              { v: 12.4, suf: "B", dec: 1, lbl: "Foil units produced annually", cap: "6 production lines" },
              { v: 320, suf: "+", lbl: "Pharmaceutical clients globally", cap: "Including top-50 pharma" },
            ].map((m, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="bg-white p-8 lg:p-10 h-full border-l-2 border-[#00A36C] hover:bg-[#F3F4F6] transition-colors group">
                  <div className="text-[10px] font-mono-tech uppercase tracking-[0.25em] text-[#4B5563] mb-4">
                    M / {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="text-5xl lg:text-6xl font-semibold text-[#003B5C] tracking-tight">
                    <CountUp to={m.v} decimals={m.dec || 0} suffix={m.suf} />
                  </div>
                  <div className="mt-5 text-sm font-semibold text-[#111827] leading-snug">{m.lbl}</div>
                  <div className="mt-1 text-xs font-mono-tech text-[#4B5563]">{m.cap}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============== EDITORIAL PRODUCT SHOWCASE ============== */}
      <section className="bg-[#F3F4F6] py-24 lg:py-32 relative overflow-hidden" data-testid="home-products">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#003B5C]/20 to-transparent" />
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-16">
            <Reveal>
              <SectionHeading
                eyebrow="03 · Product Range"
                title="A complete primary packaging portfolio."
                subtitle="Nine engineered product families – from hard-temper PTP foils to multi-layer cold-form laminates."
              />
            </Reveal>
            <Link to="/products" className="group flex items-center gap-3 text-sm font-semibold text-[#003B5C] hover:text-[#00A36C] transition-colors" data-testid="home-products-view-all">
              <span className="pf-link-arrow">View All Products</span>
              <span className="w-9 h-9 border border-[#003B5C] group-hover:border-[#00A36C] flex items-center justify-center transition-colors">
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>

          {/* Editorial bento grid: 1 large + 5 standard */}
          <div className="grid grid-cols-12 gap-px bg-gray-200">
            {/* Featured */}
            <Reveal className="col-span-12 lg:col-span-6 row-span-2">
              <Link
                to={`/products/${featured[0].slug}`}
                data-testid={`product-card-${featured[0].slug}`}
                className="group bg-white block h-full p-8 lg:p-10 relative overflow-hidden pf-card-lift"
              >
                <div className="absolute top-6 right-6 text-[10px] font-mono-tech uppercase tracking-[0.25em] text-[#4B5563] bg-white/80 backdrop-blur px-2 py-1">
                  P / 01 · Featured
                </div>
                <div className="aspect-[16/10] overflow-hidden bg-gray-100 mb-8 relative">
                  <img src={featured[0].image} alt={featured[0].name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1200ms] ease-out" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#003B5C]/30 via-transparent to-transparent" />
                </div>
                <div className="text-[10px] font-mono-tech uppercase tracking-[0.25em] text-[#00A36C] mb-3">{featured[0].category}</div>
                <h3 className="text-3xl lg:text-4xl font-semibold text-[#003B5C] tracking-tight leading-tight max-w-md">
                  {featured[0].name}
                </h3>
                <p className="mt-4 text-[#4B5563] leading-relaxed max-w-lg">{featured[0].description.slice(0, 180)}…</p>
                <div className="mt-8 flex flex-wrap gap-2">
                  {featured[0].applications.slice(0, 3).map((a) => (
                    <span key={a} className="px-3 py-1 text-xs font-medium bg-[#F3F4F6] text-[#003B5C] border border-gray-200">{a}</span>
                  ))}
                </div>
                <div className="mt-10 inline-flex items-center gap-3 text-sm font-semibold text-[#003B5C] group-hover:text-[#00A36C] transition-colors">
                  <span className="pf-link-arrow">Technical datasheet</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </Link>
            </Reveal>

            {/* Standard tiles */}
            {featured.slice(1).map((p, i) => (
              <Reveal key={p.slug} className="col-span-12 sm:col-span-6 lg:col-span-3" delay={i * 0.06}>
                <Link
                  to={`/products/${p.slug}`}
                  data-testid={`product-card-${p.slug}`}
                  className="group bg-white block h-full p-6 lg:p-7 relative overflow-hidden pf-card-lift"
                >
                  <div className="absolute top-4 right-4 text-[10px] font-mono-tech uppercase tracking-[0.2em] text-[#4B5563]">
                    P / {String(i + 2).padStart(2, "0")}
                  </div>
                  <div className="aspect-[4/3] overflow-hidden bg-gray-100 mb-5">
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[900ms] ease-out" />
                  </div>
                  <div className="text-[10px] font-mono-tech uppercase tracking-[0.2em] text-[#00A36C] mb-2">{p.category}</div>
                  <h3 className="text-lg font-semibold text-[#003B5C] tracking-tight leading-tight">{p.name}</h3>
                  <p className="mt-2 text-sm text-[#4B5563] leading-relaxed line-clamp-2">{p.tagline}</p>
                  <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-[#003B5C] group-hover:text-[#00A36C]">
                    <span className="pf-link-arrow">Specifications</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============== INDUSTRIES — INTERACTIVE EDITORIAL ============== */}
      <section className="bg-white py-24 lg:py-32" data-testid="home-industries">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 lg:sticky lg:top-32 self-start">
            <Reveal>
              <SectionHeading
                eyebrow="04 · Industries Served"
                title="Qualified across four regulated sectors."
                subtitle="Our packaging is qualified, audited and trusted by formulators in highly regulated industries worldwide."
              />
              <Link to="/industries" className="mt-8 group inline-flex items-center gap-3 text-sm font-semibold text-[#003B5C] hover:text-[#00A36C]" data-testid="home-industries-link">
                <span className="pf-link-arrow">Explore Industry Solutions</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Reveal>
          </div>
          <div className="lg:col-span-8 space-y-px bg-gray-200 grid grid-cols-1">
            {INDUSTRIES.map((ind, i) => (
              <Reveal key={ind.name} delay={i * 0.08}>
                <div className="bg-white p-8 lg:p-10 group hover:bg-[#F3F4F6] transition-colors duration-500 cursor-default">
                  <div className="flex items-start gap-6">
                    <div className="text-5xl font-semibold text-[#003B5C]/15 tabular font-mono-tech min-w-[80px]">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="flex-1 grid grid-cols-12 gap-6 items-start">
                      <div className="col-span-12 md:col-span-5 flex items-start gap-4">
                        <i className={`${ind.icon} text-2xl text-[#00A36C] mt-1`}></i>
                        <div>
                          <h3 className="text-xl lg:text-2xl font-semibold text-[#003B5C] tracking-tight">{ind.name}</h3>
                        </div>
                      </div>
                      <p className="col-span-12 md:col-span-7 text-sm text-[#4B5563] leading-relaxed">{ind.blurb}</p>
                    </div>
                    <Plus className="w-5 h-5 text-[#4B5563] group-hover:text-[#00A36C] group-hover:rotate-90 transition-all duration-500" />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============== MANUFACTURING — SPLIT WITH PARALLAX ============== */}
      <section className="bg-[#002840] text-white py-24 lg:py-32 relative overflow-hidden" data-testid="home-manufacturing">
        <div className="absolute inset-0 pf-dark-gradient" />
        <div className="absolute inset-0 blueprint-grid opacity-25" />
        <div className="relative max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <Reveal>
              <SectionHeading
                eyebrow="05 · Manufacturing"
                title="180,000 sq.ft. engineered to pharmaceutical-grade GMP."
                subtitle="Six production lines, two cold-form lamination lines, 32,000 sq.ft. of ISO Class 8 cleanroom – purpose-built for primary pharmaceutical packaging."
                dark
              />
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-8">
                {[
                  { v: 6, l: "Production lines" },
                  { v: 32, suf: "K", l: "Cleanroom sq.ft." },
                  { v: 8400, l: "MT/yr PTP foil" },
                  { v: 4200, l: "MT/yr cold-form" },
                ].map(({ v, suf = "", l }, i) => (
                  <div key={i}>
                    <div className="text-4xl font-semibold tabular">
                      <CountUp to={v} suffix={suf} />
                    </div>
                    <div className="mt-2 text-xs font-mono-tech text-white/50 uppercase tracking-wider">{l}</div>
                    <div className="mt-3 h-px bg-white/10 overflow-hidden">
                      <div className="h-full bg-[#00A36C] pf-line-grow" />
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/manufacturing" className="mt-12 group inline-flex items-center gap-3 text-sm font-semibold text-[#00A36C] hover:text-white" data-testid="home-manufacturing-link">
                <span className="pf-link-arrow">Tour the Facility</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Reveal>
          </div>
          <div className="lg:col-span-6 order-1 lg:order-2 relative h-[520px]">
            <Reveal>
              <div className="absolute top-0 right-0 w-[78%] aspect-[3/4] overflow-hidden border border-white/10">
                <img src={IMG.machinery} alt="" className="w-full h-full object-cover" />
                <div className="absolute bottom-3 left-3 right-3 text-[10px] font-mono-tech uppercase tracking-[0.25em] text-white/80 bg-black/40 backdrop-blur px-3 py-2 flex justify-between">
                  <span>Bobst NovaRS 4002</span><span>350 mpm</span>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="absolute bottom-0 left-0 w-[55%] aspect-square overflow-hidden border border-white/10">
                <img src={IMG.productionLine} alt="" className="w-full h-full object-cover" />
              </div>
            </Reveal>
            <Reveal delay={0.5}>
              <div className="absolute top-1/2 -translate-y-1/2 left-[50%] w-40 bg-[#003B5C]/95 backdrop-blur border-l-2 border-[#00A36C] p-5">
                <div className="text-[10px] font-mono-tech uppercase tracking-[0.2em] text-[#00A36C]">In-process</div>
                <div className="mt-2 text-2xl font-semibold tabular">100%</div>
                <div className="mt-1 text-xs text-white/60">camera inspection</div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============== CERTIFICATIONS GRID ============== */}
      <section className="bg-white py-24 lg:py-32" data-testid="home-quality">
        <div className="max-w-[1400px] mx-auto px-6">
          <Reveal>
            <SectionHeading
              eyebrow="06 · Compliance"
              title="Audited. Certified. Documented."
              subtitle="Every roll traceable to ISO 15378 batch records. Qualified against ICH Q1A stability protocols."
            />
          </Reveal>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-gray-200">
            {CERTS.map((c, i) => (
              <Reveal key={i} delay={i * 0.04}>
                <div className="bg-white p-8 hover:bg-[#003B5C] transition-colors duration-500 group h-full">
                  <div className="flex items-start justify-between mb-6">
                    <i className="fa-solid fa-certificate text-2xl text-[#00A36C]"></i>
                    <span className="text-[10px] font-mono-tech text-[#4B5563] group-hover:text-white/50 tabular">SINCE {c.year}</span>
                  </div>
                  <div className="font-semibold text-[#003B5C] group-hover:text-white text-lg leading-tight transition-colors">{c.code}</div>
                  <div className="mt-2 text-xs text-[#4B5563] group-hover:text-white/70 leading-relaxed transition-colors">{c.body}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============== GLOBAL PRESENCE — REGION GRID ============== */}
      <section className="bg-[#F3F4F6] py-24 lg:py-32 pf-grain" data-testid="home-global">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionHeading
                eyebrow="07 · Global Footprint"
                title="42 countries. 5 continents. One supplier."
                subtitle="From Mumbai to Mexico City, our packaging crosses borders under formal export documentation, full COA traceability and regional regulatory dossiers."
              />
              <Link to="/exports" className="mt-8 group inline-flex items-center gap-3 text-sm font-semibold text-[#003B5C] hover:text-[#00A36C]">
                <span className="pf-link-arrow">Explore Export Capabilities</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Reveal>
          </div>
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-px bg-gray-200">
            {REGIONS.map((r, i) => (
              <Reveal key={r.region} delay={i * 0.05}>
                <div className="bg-white p-6 h-full hover:bg-[#003B5C] group transition-colors duration-500">
                  <div className="text-4xl font-semibold text-[#003B5C] group-hover:text-white tabular tracking-tight transition-colors">
                    <CountUp to={r.count} />
                  </div>
                  <div className="mt-3 text-sm font-medium text-[#111827] group-hover:text-white transition-colors">{r.region}</div>
                  <div className="mt-1 text-xs text-[#4B5563] group-hover:text-white/60 leading-snug transition-colors">{r.examples}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============== TESTIMONIALS — EDITORIAL QUOTES ============== */}
      <section className="bg-white py-24 lg:py-32" data-testid="home-testimonials">
        <div className="max-w-[1400px] mx-auto px-6">
          <Reveal>
            <SectionHeading
              eyebrow="08 · Client Voice"
              title="Trusted by procurement leaders worldwide."
            />
          </Reveal>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-200">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <figure className="bg-white p-10 h-full flex flex-col">
                  <div className="text-[10px] font-mono-tech uppercase tracking-[0.25em] text-[#4B5563] mb-6">
                    T / {String(i + 1).padStart(2, "0")}
                  </div>
                  <i className="fa-solid fa-quote-left text-2xl text-[#00A36C] mb-6"></i>
                  <blockquote className="text-base lg:text-lg text-[#111827] leading-relaxed flex-1">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-8 pt-6 border-t border-gray-200">
                    <div className="font-semibold text-[#003B5C]">{t.name}</div>
                    <div className="text-xs text-[#4B5563] mt-1">{t.role}</div>
                    <div className="text-xs font-mono-tech text-[#00A36C] mt-1 uppercase tracking-wider">{t.company}</div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
