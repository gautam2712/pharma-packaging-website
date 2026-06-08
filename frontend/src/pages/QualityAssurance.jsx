import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { IMG, QA_TESTS } from "@/data/site";
import SectionHeading from "@/components/SectionHeading";
import CTABanner from "@/components/CTABanner";
import Reveal from "@/components/animations/Reveal";
import CountUp from "@/components/animations/CountUp";

export default function QualityAssurance() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <div data-testid="quality-page" className="bg-white">
      {/* HERO */}
      <section ref={heroRef} className="relative bg-[#002840] text-white overflow-hidden min-h-[80vh] flex items-center">
        <motion.div style={{ y: imgY }} className="absolute inset-0">
          <img src={IMG.qa} alt="" className="w-full h-full object-cover opacity-30" />
        </motion.div>
        <div className="absolute inset-0 pf-dark-gradient" />
        <div className="absolute inset-0 blueprint-grid opacity-25" />

        <div className="relative max-w-[1400px] mx-auto px-6 pt-20 pb-24 w-full">
          <nav className="text-xs font-mono-tech uppercase tracking-[0.25em] text-white/50 mb-10">
            <Link to="/" className="hover:text-[#00A36C]">Home</Link>
            <span className="mx-3 text-white/20">/</span>
            <span className="text-white">Quality Assurance</span>
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
                Quality Assurance · ISO 15378 : 2017
              </motion.div>
              <h1 className="text-[clamp(2.5rem,5.5vw,5.25rem)] font-semibold tracking-tight leading-[0.98] max-w-5xl">
                {["A", "lab.", "A", "protocol.", "A", "paper", "trail."].map((w, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 + i * 0.07 }}
                    className="inline-block mr-[0.25em]"
                  >
                    {w === "protocol." ? <span className="text-[#00A36C]">{w}</span> : w}
                  </motion.span>
                ))}
              </h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.9 }}
                className="mt-8 text-lg lg:text-xl text-white/70 max-w-2xl leading-relaxed"
              >
                Every roll that ships from PharmaFoil carries 47 measured parameters, sampled at six in-process checkpoints, signed off against an ISO 15378 batch record.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="col-span-12 lg:col-span-4 grid grid-cols-2 gap-px bg-white/10"
            >
              {[
                { v: 47, l: "Parameters / roll" },
                { v: 6, l: "Inspection checkpoints" },
                { v: 14, l: "Customer audits / yr" },
                { v: 0, l: "Critical observations" },
              ].map((s, i) => (
                <div key={i} className="bg-[#003B5C] p-5">
                  <div className="text-3xl font-semibold tabular">
                    <CountUp to={s.v} />
                  </div>
                  <div className="mt-2 text-[10px] font-mono-tech uppercase tracking-[0.2em] text-white/50 leading-snug">{s.l}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* LAB SPLIT */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <Reveal className="lg:col-span-6">
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={IMG.lab} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#003B5C] text-white p-6 max-w-[220px] hidden lg:block">
                <div className="text-[10px] font-mono-tech uppercase tracking-[0.25em] text-[#00A36C]">Calibrated to</div>
                <div className="mt-2 text-lg font-semibold">NABL-traceable standards</div>
              </div>
            </div>
          </Reveal>
          <Reveal className="lg:col-span-6" delay={0.15}>
            <SectionHeading
              eyebrow="01 · In-House Laboratory"
              title="3,200 sq.ft. of analytical capacity."
              subtitle="Our independent quality laboratory is segregated from production and equipped with chromatography, spectroscopy and barrier-measurement instrumentation calibrated against NABL-traceable standards."
            />
            <div className="mt-10 grid grid-cols-2 gap-6">
              {[
                ["GC-MS · HPLC", "Migration & residual solvents"],
                ["FTIR · Raman", "Polymer identification"],
                ["Mocon Permatran", "WVTR & OTR"],
                ["Instron 5944", "Tensile & seal strength"],
              ].map(([k, v]) => (
                <div key={k} className="border-l-2 border-[#00A36C] pl-4">
                  <div className="font-mono-tech text-sm font-semibold text-[#003B5C]">{k}</div>
                  <div className="text-xs text-[#4B5563] mt-1">{v}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* TESTING PROTOCOLS — DARK GRID */}
      <section className="bg-[#002840] text-white py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 pf-dark-gradient" />
        <div className="absolute inset-0 blueprint-grid opacity-25" />
        <div className="relative max-w-[1400px] mx-auto px-6">
          <Reveal>
            <SectionHeading
              eyebrow="02 · Testing Protocols"
              title="What we measure, and how."
              subtitle="Six analytical disciplines. One audit trail."
              dark
            />
          </Reveal>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
            {QA_TESTS.map((t, i) => (
              <Reveal key={t.t} delay={i * 0.06}>
                <div className="bg-[#002840] p-8 h-full group hover:bg-[#003B5C] transition-colors duration-500" data-testid={`test-${t.t.replace(/\s+/g, '-').toLowerCase()}`}>
                  <div className="flex items-start justify-between mb-5">
                    <i className={`${t.i} text-3xl text-[#00A36C]`}></i>
                    <span className="text-[10px] font-mono-tech text-white/40 uppercase tracking-wider">P / {String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight">{t.t}</h3>
                  <p className="mt-3 text-sm text-white/70 leading-relaxed">{t.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* COMPLIANCE + AUDIT */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">
          <Reveal className="lg:col-span-5">
            <SectionHeading
              eyebrow="03 · Continuous Audit"
              title="Re-certified continually. Audited annually."
            />
          </Reveal>
          <Reveal className="lg:col-span-7" delay={0.15}>
            <div className="space-y-6 text-[#4B5563] leading-relaxed text-lg">
              <p>
                Our quality systems are externally audited every 12 months by TÜV SÜD, BSI and DNV. We host an average of 14 customer audits per year and have never recorded a critical observation in five consecutive audit cycles.
              </p>
              <p>
                Every batch ships with a Certificate of Analysis, Material Safety Datasheet, batch genealogy and regulatory declaration pack. For US-bound shipments, our DMF Type III (#34218) is referenced under master files for 28 finished-dosage manufacturers.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-3">
              {["TÜV SÜD", "BSI", "DNV", "Bureau Veritas", "SGS", "Intertek"].map((a) => (
                <div key={a} className="border border-gray-200 px-4 py-3 text-center">
                  <span className="font-semibold text-[#003B5C] text-sm">{a}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
