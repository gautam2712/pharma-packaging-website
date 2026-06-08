import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { IMG, SUSTAINABILITY_INIT } from "@/data/site";
import SectionHeading from "@/components/SectionHeading";
import CTABanner from "@/components/CTABanner";
import Reveal from "@/components/animations/Reveal";
import CountUp from "@/components/animations/CountUp";

export default function Sustainability() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <div data-testid="sustainability-page" className="bg-white">
      {/* HERO */}
      <section ref={heroRef} className="relative bg-[#002840] text-white overflow-hidden min-h-[80vh] flex items-center">
        <motion.div style={{ y: imgY }} className="absolute inset-0">
          <img src={IMG.facility} alt="" className="w-full h-full object-cover opacity-25" />
        </motion.div>
        <div className="absolute inset-0 pf-dark-gradient" />
        <div className="absolute inset-0 blueprint-grid opacity-25" />

        <div className="relative max-w-[1400px] mx-auto px-6 pt-20 pb-24 w-full">
          <nav className="text-xs font-mono-tech uppercase tracking-[0.25em] text-white/50 mb-10">
            <Link to="/" className="hover:text-[#00A36C]">Home</Link>
            <span className="mx-3 text-white/20">/</span>
            <span className="text-white">Sustainability</span>
          </nav>
          <div className="grid grid-cols-12 gap-10 items-end">
            <div className="col-span-12 lg:col-span-8">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7 }}
                className="text-xs font-mono-tech uppercase tracking-[0.35em] text-[#00A36C] mb-6 flex items-center gap-4"
              >
                <span className="w-10 h-px bg-[#00A36C]" />
                Sustainability · 2030 commitment
              </motion.div>
              <h1 className="text-[clamp(2.5rem,5.5vw,5.25rem)] font-semibold tracking-tight leading-[0.98] max-w-5xl">
                {["Engineered", "for", "performance.", "Built", "for", "the", "future."].map((w, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 + i * 0.07 }}
                    className="inline-block mr-[0.25em]"
                  >
                    {w === "future." ? <span className="text-[#00A36C]">{w}</span> : w}
                  </motion.span>
                ))}
              </h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 1.0 }}
                className="mt-8 text-lg lg:text-xl text-white/70 max-w-2xl leading-relaxed"
              >
                Pharmaceutical packaging must protect. It must also – increasingly – participate in a circular economy. We&apos;re investing in both.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="col-span-12 lg:col-span-4"
            >
              <div className="border border-white/15 bg-[#003B5C]/40 backdrop-blur p-6">
                <div className="text-[10px] font-mono-tech uppercase tracking-[0.3em] text-[#00A36C]">Net zero target</div>
                <div className="mt-3 text-6xl font-semibold tabular">
                  20<span className="text-[#00A36C]">30</span>
                </div>
                <div className="mt-4 text-sm text-white/70 leading-relaxed">
                  Scope 1 + 2 carbon neutrality by 2030. SBTi-aligned. KPMG-verified.
                </div>
                <div className="mt-6 h-1.5 bg-white/10 overflow-hidden">
                  <div className="h-full bg-[#00A36C] w-[34%] pf-line-grow" />
                </div>
                <div className="mt-2 text-[10px] font-mono-tech text-white/50 uppercase tracking-wider">34% achieved · 2025</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* METRICS */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-6 py-20 grid grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200">
          {[
            { v: 34, suf: "%", l: "Plant energy from solar", c: "1.2 MW rooftop solar" },
            { v: 0, suf: "", l: "Liquid effluent discharge", c: "Closed-loop since 2021" },
            { v: 70, suf: "%", l: "Solventless laminates", c: "Zero VOC emissions" },
            { v: 100, suf: "%", l: "Aluminium scrap recycled", c: "Back to smelters" },
          ].map((m, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <div className="bg-white p-10 h-full border-l-2 border-[#00A36C]">
                <div className="text-[10px] font-mono-tech uppercase tracking-[0.25em] text-[#4B5563] mb-3">E / {String(i + 1).padStart(2, "0")}</div>
                <div className="text-5xl lg:text-6xl font-semibold text-[#003B5C] tracking-tight tabular">
                  <CountUp to={m.v} suffix={m.suf} />
                </div>
                <div className="mt-4 text-sm font-semibold text-[#111827]">{m.l}</div>
                <div className="mt-1 text-xs font-mono-tech text-[#4B5563]">{m.c}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* INITIATIVES */}
      <section className="bg-[#F3F4F6] py-24 lg:py-32 pf-grain">
        <div className="max-w-[1400px] mx-auto px-6">
          <Reveal>
            <SectionHeading
              eyebrow="01 · Active Initiatives"
              title="What we&apos;re doing, today."
            />
          </Reveal>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200">
            {SUSTAINABILITY_INIT.map((s, i) => (
              <Reveal key={s.t} delay={i * 0.06}>
                <div className="bg-white p-8 h-full group hover:bg-[#003B5C] transition-colors duration-500" data-testid={`initiative-${s.t.replace(/\s+/g, '-').toLowerCase()}`}>
                  <div className="flex items-start justify-between mb-5">
                    <i className={`${s.i} text-3xl text-[#00A36C]`}></i>
                    <span className="text-[10px] font-mono-tech text-[#4B5563] group-hover:text-white/40 tracking-wider transition-colors">I / {String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-[#003B5C] group-hover:text-white tracking-tight transition-colors">{s.t}</h3>
                  <p className="mt-3 text-sm text-[#4B5563] group-hover:text-white/70 leading-relaxed transition-colors">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 2030 COMMITMENT — DARK */}
      <section className="bg-[#002840] text-white py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 pf-dark-gradient" />
        <div className="absolute inset-0 blueprint-grid opacity-25" />
        <div className="relative max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <Reveal className="lg:col-span-7">
            <SectionHeading
              eyebrow="02 · 2030 Commitment"
              title="Carbon-neutral pharmaceutical packaging by 2030."
              dark
            />
            <p className="mt-6 text-white/70 leading-relaxed text-lg">
              We have committed to net-zero Scope 1 and Scope 2 emissions by 2030, with Scope 3 alignment by 2035. Our roadmap is verified by KPMG and aligned with the Science Based Targets initiative (SBTi).
            </p>
            <div className="mt-10 grid grid-cols-3 gap-px bg-white/10">
              {[
                { y: "2025", v: "−34%" },
                { y: "2027", v: "−65%" },
                { y: "2030", v: "Net-zero" },
              ].map((g, i) => (
                <div key={i} className="bg-[#002840] p-6">
                  <div className="text-[10px] font-mono-tech uppercase tracking-[0.25em] text-[#00A36C]">Milestone {i + 1}</div>
                  <div className="mt-2 font-mono-tech text-sm">{g.y}</div>
                  <div className="mt-1 text-xl font-semibold">{g.v}</div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal className="lg:col-span-5" delay={0.2}>
            <div className="border border-white/15 bg-[#003B5C]/40 backdrop-blur p-8">
              <div className="text-xs font-mono-tech uppercase tracking-[0.25em] text-[#00A36C] mb-3">Annual Report</div>
              <div className="font-semibold text-2xl mb-3">Sustainability Report 2025</div>
              <p className="text-sm text-white/70 mb-6 leading-relaxed">Full annual disclosure under CDP and GRI frameworks. Independently verified by KPMG.</p>
              <a href="#" className="inline-flex items-center gap-2 bg-[#00A36C] hover:bg-[#008759] text-white px-6 py-3.5 font-semibold transition-colors">
                Download PDF · 8.4 MB
              </a>
              <div className="mt-8 pt-6 border-t border-white/15 grid grid-cols-2 gap-4 text-xs">
                <div>
                  <div className="font-mono-tech text-white/50 uppercase tracking-wider">CDP rating</div>
                  <div className="mt-1 text-2xl font-semibold tabular text-white">A-</div>
                </div>
                <div>
                  <div className="font-mono-tech text-white/50 uppercase tracking-wider">EcoVadis</div>
                  <div className="mt-1 text-2xl font-semibold text-white">Gold</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
