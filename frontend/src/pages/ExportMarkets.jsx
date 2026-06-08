import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { REGIONS, IMG } from "@/data/site";
import SectionHeading from "@/components/SectionHeading";
import CTABanner from "@/components/CTABanner";
import Reveal from "@/components/animations/Reveal";
import CountUp from "@/components/animations/CountUp";

export default function ExportMarkets() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const totalCountries = REGIONS.reduce((s, r) => s + r.count, 0);

  return (
    <div data-testid="exports-page" className="bg-white">
      {/* HERO */}
      <section ref={heroRef} className="relative bg-[#002840] text-white overflow-hidden min-h-[80vh] flex items-center">
        <motion.div style={{ y: imgY }} className="absolute inset-0">
          <img src={IMG.containers} alt="" className="w-full h-full object-cover opacity-30" />
        </motion.div>
        <div className="absolute inset-0 pf-dark-gradient" />
        <div className="absolute inset-0 blueprint-grid opacity-25" />

        <div className="relative max-w-[1400px] mx-auto px-6 pt-20 pb-24 w-full">
          <nav className="text-xs font-mono-tech uppercase tracking-[0.25em] text-white/50 mb-10">
            <Link to="/" className="hover:text-[#00A36C]">Home</Link>
            <span className="mx-3 text-white/20">/</span>
            <span className="text-white">Export Markets</span>
          </nav>
          <div className="grid grid-cols-12 gap-10 items-end">
            <div className="col-span-12 lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-xs font-mono-tech uppercase tracking-[0.35em] text-[#00A36C] mb-6 flex items-center gap-4"
              >
                <span className="w-10 h-px bg-[#00A36C]" />
                Global Footprint · 5 Continents
              </motion.div>
              <h1 className="text-[clamp(2.5rem,5.5vw,5.25rem)] font-semibold tracking-tight leading-[0.98] max-w-5xl">
                {["42", "countries.", "One", "single", "point", "of", "accountability."].map((w, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 + i * 0.07 }}
                    className="inline-block mr-[0.25em]"
                  >
                    {w === "42" ? <span className="text-[#00A36C]">{w}</span> : w}
                  </motion.span>
                ))}
              </h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 1.0 }}
                className="mt-8 text-lg lg:text-xl text-white/70 max-w-2xl leading-relaxed"
              >
                From dossier preparation to bonded despatch, our export desk handles regulatory filings, customs documentation and ocean freight – so your packaging arrives ready for the blister line.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="col-span-12 lg:col-span-4"
            >
              <div className="border border-white/15 bg-[#003B5C]/40 backdrop-blur p-8">
                <div className="text-[10px] font-mono-tech uppercase tracking-[0.3em] text-[#00A36C]">Active markets</div>
                <div className="mt-4 text-7xl font-semibold tabular leading-none">
                  <CountUp to={totalCountries} />
                </div>
                <div className="mt-4 text-sm text-white/60">across 5 continents</div>
                <div className="mt-8 pt-6 border-t border-white/15 space-y-2">
                  {REGIONS.slice(0, 3).map((r) => (
                    <div key={r.region} className="flex justify-between text-xs">
                      <span className="text-white/60 font-mono-tech uppercase tracking-wider">{r.region}</span>
                      <span className="text-white tabular">{r.count}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* REGION GRID */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6">
          <Reveal>
            <SectionHeading eyebrow="01 · Regional Presence" title="Where our packaging ships." />
          </Reveal>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200">
            {REGIONS.map((r, i) => (
              <Reveal key={r.region} delay={i * 0.06}>
                <div className="bg-white p-10 h-full group hover:bg-[#003B5C] transition-colors duration-500" data-testid={`region-${r.region.toLowerCase()}`}>
                  <div className="flex items-start justify-between mb-6">
                    <div className="text-[10px] font-mono-tech uppercase tracking-[0.25em] text-[#00A36C]">REGION / {String(i + 1).padStart(2, "0")}</div>
                    <i className="fa-solid fa-globe text-2xl text-[#003B5C]/15 group-hover:text-white/15 transition-colors"></i>
                  </div>
                  <div className="text-6xl font-semibold text-[#003B5C] group-hover:text-white tabular tracking-tight transition-colors">
                    <CountUp to={r.count} />
                  </div>
                  <div className="mt-2 text-xs font-mono-tech text-[#4B5563] group-hover:text-white/50 uppercase tracking-wider transition-colors">Active markets</div>
                  <h3 className="mt-6 text-2xl font-semibold text-[#003B5C] group-hover:text-white tracking-tight transition-colors">{r.region}</h3>
                  <p className="mt-3 text-sm text-[#4B5563] group-hover:text-white/70 leading-relaxed transition-colors">{r.examples}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* LOGISTICS — DARK */}
      <section className="bg-[#002840] text-white py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMG.shipping} alt="" className="w-full h-full object-cover opacity-15" />
        </div>
        <div className="absolute inset-0 pf-dark-gradient" />
        <div className="absolute inset-0 blueprint-grid opacity-25" />
        <div className="relative max-w-[1400px] mx-auto px-6">
          <Reveal>
            <SectionHeading
              eyebrow="02 · Logistics"
              title="End-to-end despatch, under one accountability."
              subtitle="From bonded warehouse to your blister line – managed by our in-house export desk."
              dark
            />
          </Reveal>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
            {[
              { i: "fa-solid fa-file-shield", t: "Regulatory dossiers", d: "DMF, CEP, ANVISA and PMDA-ready documentation packs." },
              { i: "fa-solid fa-truck-fast", t: "Bonded warehousing", d: "Climate-controlled despatch from Mumbai and Nhava Sheva." },
              { i: "fa-solid fa-ship", t: "Ocean & air freight", d: "Direct shipping contracts with Maersk, MSC and CMA CGM." },
              { i: "fa-solid fa-handshake", t: "Incoterms 2020", d: "FOB, CIF, DDP – your preferred commercial term." },
            ].map((s, i) => (
              <Reveal key={s.t} delay={i * 0.08}>
                <div className="bg-[#002840] p-8 h-full group hover:bg-[#003B5C] transition-colors duration-500">
                  <div className="flex items-baseline justify-between mb-5">
                    <i className={`${s.i} text-3xl text-[#00A36C]`}></i>
                    <span className="text-[10px] font-mono-tech text-white/40 tracking-wider">L / {String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <div className="font-semibold text-lg tracking-tight">{s.t}</div>
                  <p className="mt-2 text-sm text-white/70 leading-relaxed">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TECH DESKS */}
      <section className="bg-[#F3F4F6] py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-5">
            <SectionHeading
              eyebrow="03 · Technical Desks"
              title="Regional support across three time zones."
              subtitle="Our regional technical desks ensure sample evaluation, qualification trials and audit prep happen in your timezone – not ours."
            />
          </Reveal>
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-px bg-gray-200">
            {[
              { city: "Lisbon", region: "EU & Africa Desk", hours: "08:00 – 18:00 WET", code: "PT" },
              { city: "Mumbai", region: "ASEAN & MENA Desk", hours: "09:00 – 19:00 IST", code: "IN" },
              { city: "Mexico City", region: "LATAM & NA Desk", hours: "08:00 – 18:00 CST", code: "MX" },
            ].map((d, i) => (
              <Reveal key={d.city} delay={i * 0.08}>
                <div className="bg-white p-8 h-full group hover:bg-[#003B5C] transition-colors duration-500">
                  <div className="flex items-start justify-between mb-5">
                    <i className="fa-solid fa-location-dot text-2xl text-[#00A36C]"></i>
                    <span className="font-mono-tech text-xs text-[#4B5563] group-hover:text-white/40 transition-colors">{d.code}</span>
                  </div>
                  <div className="font-semibold text-[#003B5C] group-hover:text-white text-xl tracking-tight transition-colors">{d.city}</div>
                  <div className="text-[10px] font-mono-tech uppercase tracking-[0.2em] text-[#4B5563] group-hover:text-[#00A36C] mt-2 transition-colors">{d.region}</div>
                  <div className="text-sm text-[#4B5563] group-hover:text-white/70 mt-5 transition-colors">{d.hours}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
