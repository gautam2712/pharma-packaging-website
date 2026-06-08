import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { IMG, MANUFACTURING_STATS, MACHINES, ENGINEER_STEPS } from "@/data/site";
import SectionHeading from "@/components/SectionHeading";
import CTABanner from "@/components/CTABanner";
import Reveal from "@/components/animations/Reveal";
import CountUp from "@/components/animations/CountUp";

export default function Manufacturing() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <div data-testid="manufacturing-page" className="bg-white">
      {/* HERO */}
      <section ref={heroRef} className="relative bg-[#002840] text-white overflow-hidden min-h-[80vh] flex items-center">
        <motion.div style={{ y: imgY }} className="absolute inset-0">
          <img src={IMG.machinery} alt="" className="w-full h-full object-cover opacity-25" />
        </motion.div>
        <div className="absolute inset-0 pf-dark-gradient" />
        <div className="absolute inset-0 blueprint-grid opacity-25" />

        <div className="relative max-w-[1400px] mx-auto px-6 pt-20 pb-24 w-full">
          <nav className="text-xs font-mono-tech uppercase tracking-[0.25em] text-white/50 mb-10">
            <Link to="/" className="hover:text-[#00A36C]">Home</Link>
            <span className="mx-3 text-white/20">/</span>
            <span className="text-white">Manufacturing</span>
          </nav>

          <div className="grid grid-cols-12 gap-10 items-end">
            <div className="col-span-12 lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-xs font-mono-tech uppercase tracking-[0.35em] text-[#00A36C] mb-6 flex items-center gap-4"
              >
                <span className="w-10 h-px bg-[#00A36C]" />
                Manufacturing · Vapi, Gujarat
              </motion.div>
              <h1 className="text-[clamp(2.5rem,5.5vw,5.25rem)] font-semibold tracking-tight leading-[0.98] max-w-5xl">
                {["180,000", "sq.ft.", "engineered", "to", "pharmaceutical-grade", "GMP."].map((w, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 + i * 0.07 }}
                    className="inline-block mr-[0.25em]"
                  >
                    {w === "pharmaceutical-grade" ? <span className="text-[#00A36C]">{w}</span> : w}
                  </motion.span>
                ))}
              </h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.8 }}
                className="mt-8 text-lg lg:text-xl text-white/70 max-w-2xl leading-relaxed"
              >
                Six production lines, two cold-form lamination lines, and 32,000 sq.ft. of ISO Class 8 cleanroom – purpose-built for pharmaceutical primary packaging.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.9 }}
              className="col-span-12 lg:col-span-4"
            >
              <div className="border border-white/15 bg-[#003B5C]/40 backdrop-blur p-6">
                <div className="text-[10px] font-mono-tech uppercase tracking-[0.3em] text-[#00A36C]">Live shop floor</div>
                <div className="mt-3 flex items-baseline gap-3">
                  <div className="text-5xl font-semibold tabular">
                    <CountUp to={6} />
                  </div>
                  <div className="text-sm text-white/70">production lines · operating</div>
                </div>
                <div className="mt-5 grid grid-cols-3 gap-2">
                  {[1, 2, 3, 4, 5, 6].map((n) => (
                    <div key={n} className="h-1 bg-[#00A36C]" />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-6 py-14 grid grid-cols-2 lg:grid-cols-6 gap-8">
          {MANUFACTURING_STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.05}>
              <div className="border-l-2 border-[#00A36C] pl-5">
                <div className="text-2xl lg:text-3xl font-semibold text-[#003B5C] tabular">{s.value}</div>
                <div className="mt-2 text-[10px] font-mono-tech text-[#4B5563] uppercase tracking-wider leading-snug">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* MACHINES — EDITORIAL GRID */}
      <section className="bg-[#F3F4F6] py-24 lg:py-32 pf-grain">
        <div className="max-w-[1400px] mx-auto px-6">
          <Reveal>
            <div className="grid grid-cols-12 gap-8 items-end mb-16">
              <div className="col-span-12 lg:col-span-7">
                <SectionHeading
                  eyebrow="01 · Machinery"
                  title="European-make lines, end-to-end."
                />
              </div>
              <div className="col-span-12 lg:col-span-5">
                <p className="text-[#4B5563] leading-relaxed">
                  From Bobst rotogravure to Nordmeccanica laminators, every line in our plant is selected for repeatability under pharmaceutical-grade tolerances.
                </p>
              </div>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200">
            {MACHINES.map((m, i) => (
              <Reveal key={m.name} delay={i * 0.06}>
                <div className="bg-white p-8 h-full group hover:bg-[#003B5C] transition-colors duration-500" data-testid={`machine-${i}`}>
                  <div className="flex items-baseline justify-between mb-6">
                    <div className="font-mono-tech text-[10px] uppercase tracking-[0.25em] text-[#00A36C]">M / {String(i + 1).padStart(2, "0")}</div>
                    <i className="fa-solid fa-gear text-2xl text-[#003B5C]/15 group-hover:text-white/15 group-hover:rotate-90 transition-all duration-700"></i>
                  </div>
                  <h3 className="text-xl font-semibold text-[#003B5C] group-hover:text-white tracking-tight transition-colors">{m.name}</h3>
                  <div className="mt-3 text-sm text-[#4B5563] group-hover:text-white/70 transition-colors">{m.spec}</div>
                  <div className="mt-6 pt-6 border-t border-gray-100 group-hover:border-white/15 text-xs font-mono-tech uppercase tracking-wider text-[#4B5563] group-hover:text-white/50 transition-colors">{m.make}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WORKFLOW — DARK STAIRCASE */}
      <section className="bg-[#002840] text-white py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 pf-dark-gradient" />
        <div className="absolute inset-0 blueprint-grid opacity-25" />
        <div className="relative max-w-[1400px] mx-auto px-6">
          <Reveal>
            <SectionHeading
              eyebrow="02 · Production Workflow"
              title="Spec freeze to first commercial reel — in fourteen weeks."
              dark
            />
          </Reveal>
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-4 gap-px bg-white/10">
            {ENGINEER_STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.1}>
                <div className={`bg-[#002840] p-8 lg:p-10 h-full ${i % 2 === 1 ? "lg:translate-y-8" : ""}`}>
                  <div className="text-[10px] font-mono-tech uppercase tracking-[0.3em] text-[#00A36C]">STAGE / {s.n}</div>
                  <div className="text-7xl font-semibold tabular text-white/10 mt-4">{s.n}</div>
                  <h3 className="mt-6 text-2xl font-semibold tracking-tight">{s.title}</h3>
                  <p className="mt-3 text-sm text-white/70 leading-relaxed">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PLANT GALLERY */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6">
          <Reveal>
            <SectionHeading eyebrow="03 · Plant Gallery" title="Inside the facility." />
          </Reveal>
          <div className="mt-16 grid grid-cols-12 gap-3">
            <Reveal className="col-span-12 lg:col-span-8">
              <div className="aspect-[16/10] overflow-hidden relative group">
                <img src={IMG.facility} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                <div className="absolute top-4 left-4 text-[10px] font-mono-tech uppercase tracking-[0.25em] text-white bg-black/40 backdrop-blur px-3 py-1.5">PLT / 01 · MAIN FLOOR</div>
              </div>
            </Reveal>
            <div className="col-span-12 lg:col-span-4 grid grid-rows-2 gap-3">
              <Reveal delay={0.1}>
                <div className="aspect-[4/3] overflow-hidden h-full relative group">
                  <img src={IMG.cleanroomOp} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute top-3 left-3 text-[10px] font-mono-tech text-white bg-black/40 backdrop-blur px-2 py-1">PLT / 02</div>
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="aspect-[4/3] overflow-hidden h-full relative group">
                  <img src={IMG.machinery} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute top-3 left-3 text-[10px] font-mono-tech text-white bg-black/40 backdrop-blur px-2 py-1">PLT / 03</div>
                </div>
              </Reveal>
            </div>
            <Reveal className="col-span-6 lg:col-span-4" delay={0.1}>
              <div className="aspect-square overflow-hidden relative group">
                <img src={IMG.productionLine} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute top-3 left-3 text-[10px] font-mono-tech text-white bg-black/40 backdrop-blur px-2 py-1">PLT / 04</div>
              </div>
            </Reveal>
            <Reveal className="col-span-6 lg:col-span-4" delay={0.2}>
              <div className="aspect-square overflow-hidden relative group">
                <img src={IMG.lab} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute top-3 left-3 text-[10px] font-mono-tech text-white bg-black/40 backdrop-blur px-2 py-1">PLT / 05</div>
              </div>
            </Reveal>
            <Reveal className="col-span-12 lg:col-span-4" delay={0.3}>
              <div className="aspect-square overflow-hidden relative group">
                <img src={IMG.qa} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute top-3 left-3 text-[10px] font-mono-tech text-white bg-black/40 backdrop-blur px-2 py-1">PLT / 06</div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
