import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Quote } from "lucide-react";
import { COMPANY, IMG, TIMELINE } from "@/data/site";
import SectionHeading from "@/components/SectionHeading";
import CTABanner from "@/components/CTABanner";
import Reveal from "@/components/animations/Reveal";
import CountUp from "@/components/animations/CountUp";

export default function About() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  const leaders = [
    { name: "Rajiv Mehta", role: "Managing Director", bio: "27 years in pharmaceutical packaging. Founding partner of PharmaFoil.", img: IMG.lab },
    { name: "Dr. Shalini Iyer", role: "Director, R&D", bio: "Polymer scientist (IIT-B, PhD). Holds 11 patents in barrier laminates.", img: IMG.qa },
    { name: "Aditya Khanna", role: "VP, Global Sales", bio: "Former GSK supply chain leader. Drives our 42-country export programme.", img: IMG.cleanroomOp },
    { name: "Priya Nair", role: "Head of Quality", bio: "ISO 15378 lead auditor. 18 years across regulated packaging facilities.", img: IMG.machinery },
  ];

  const csr = [
    { i: "fa-solid fa-graduation-cap", t: "Education", d: "Two primary schools educating 480+ children of plant workers." },
    { i: "fa-solid fa-leaf", t: "Environment", d: "1.2 MW rooftop solar offsets 34 % of plant energy demand." },
    { i: "fa-solid fa-people-roof", t: "Community", d: "₹4.8 Cr annual CSR spend across 12 villages around Vapi." },
    { i: "fa-solid fa-handshake-angle", t: "Workforce", d: "47 % women on the shop floor. Zero LTI in 2025." },
  ];

  return (
    <div data-testid="about-page" className="bg-white">
      {/* HERO */}
      <section ref={heroRef} className="relative bg-[#002840] text-white overflow-hidden min-h-[78vh] flex items-center" data-testid="about-hero">
        <motion.div style={{ y: imgY }} className="absolute inset-0">
          <img src={IMG.facility} alt="" className="w-full h-full object-cover opacity-30" />
        </motion.div>
        <div className="absolute inset-0 pf-dark-gradient" />
        <div className="absolute inset-0 blueprint-grid opacity-25" />

        <div className="relative max-w-[1400px] mx-auto px-6 pt-20 pb-24 w-full">
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-xs font-mono-tech uppercase tracking-[0.25em] text-white/50 mb-10"
          >
            <Link to="/" className="hover:text-[#00A36C]">Home</Link>
            <span className="mx-3 text-white/20">/</span>
            <span className="text-white">About</span>
          </motion.nav>

          <div className="grid grid-cols-12 gap-10 items-end">
            <div className="col-span-12 lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-xs font-mono-tech uppercase tracking-[0.35em] text-[#00A36C] mb-6 flex items-center gap-4"
              >
                <span className="w-10 h-px bg-[#00A36C]" />
                About PharmaFoil · Est. {COMPANY.established}
              </motion.div>
              <h1 className="text-[clamp(2.5rem,5.5vw,5.25rem)] font-semibold tracking-tight leading-[0.98] max-w-5xl">
                {["A", "quarter-century", "engineering", "pharmaceutical", "packaging."].map((w, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 + i * 0.08 }}
                    className="inline-block mr-[0.25em]"
                  >
                    {w === "pharmaceutical" ? <span className="text-[#00A36C]">{w}</span> : w}
                  </motion.span>
                ))}
              </h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.9 }}
                className="mt-8 text-lg lg:text-xl text-white/70 max-w-2xl leading-relaxed"
              >
                Founded in {COMPANY.established} in Vapi, Gujarat. Today: one of India's most trusted primary packaging manufacturers for regulated pharmaceutical exports.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 1.0 }}
              className="col-span-12 lg:col-span-4"
            >
              <div className="border-l-2 border-[#00A36C] pl-6 grid grid-cols-2 gap-y-6 gap-x-4">
                {[
                  { v: 27, suf: "+", l: "Years" },
                  { v: 840, suf: "", l: "Employees" },
                  { v: 42, suf: "", l: "Markets" },
                  { v: 180, suf: "K", l: "Sq.ft. plant" },
                ].map((s, i) => (
                  <div key={i}>
                    <div className="text-3xl font-semibold tabular text-white">
                      <CountUp to={s.v} suffix={s.suf} />
                    </div>
                    <div className="text-[10px] font-mono-tech uppercase tracking-[0.2em] text-white/50">{s.l}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">
          <Reveal className="lg:col-span-5">
            <SectionHeading
              eyebrow="01 · Mission"
              title="Make pharmaceutical packaging boring – in the best possible way."
            />
          </Reveal>
          <Reveal className="lg:col-span-7" delay={0.15}>
            <div className="space-y-6 text-[#4B5563] leading-relaxed text-lg">
              <p>
                In pharmaceutical packaging, &ldquo;boring&rdquo; means predictable. It means a procurement manager sleeps at night knowing the foil reels landing at the blister line will perform exactly as the last hundred shipments did.
              </p>
              <p>
                For 27 years, that is the standard PharmaFoil has been built to deliver. Six production lines. Six-sigma rejection rates. ISO 15378 batch traceability on every roll. Twenty-six layers of in-process quality checks before a single reel ships.
              </p>
              <p>
                We don&apos;t make packaging that wins design awards. We make packaging that wins regulatory audits, stability studies and supply-chain reviews – on three continents, year after year.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TIMELINE - DARK NAVY */}
      <section className="bg-[#002840] text-white py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 pf-dark-gradient" />
        <div className="absolute inset-0 blueprint-grid opacity-25" />
        <div className="relative max-w-[1400px] mx-auto px-6">
          <Reveal>
            <SectionHeading
              eyebrow="02 · Our Journey"
              title="From a single line in Vapi to 42 export markets."
              subtitle="A non-linear, decade-by-decade build."
              dark
            />
          </Reveal>
          <div className="mt-20 relative">
            <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-white/15" />
            <div className="space-y-16 lg:space-y-20">
              {TIMELINE.map((t, i) => (
                <Reveal key={i} delay={i * 0.06}>
                  <div className={`relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                    <div className={`lg:${i % 2 === 0 ? "text-right pr-16" : "pl-16"} pl-12 lg:pl-0 relative`}>
                      <div className="absolute left-4 lg:left-1/2 -translate-x-1/2 top-2 w-4 h-4 bg-[#00A36C] rotate-45" />
                      <div className="font-mono-tech text-xs tracking-[0.3em] text-[#00A36C]">CHAPTER · {String(i + 1).padStart(2, "0")}</div>
                      <div className="mt-3 text-5xl lg:text-7xl font-semibold tabular leading-none">{t.year}</div>
                      <h3 className="mt-4 text-xl lg:text-2xl font-semibold">{t.title}</h3>
                    </div>
                    <div className={`pl-12 lg:pl-0 lg:${i % 2 === 0 ? "pl-16" : "pr-16 text-right"}`}>
                      <p className="text-white/70 leading-relaxed text-base lg:text-lg max-w-md">{t.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6">
          <Reveal>
            <SectionHeading eyebrow="03 · Leadership" title="The people who run the plant." />
          </Reveal>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200">
            {leaders.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.08}>
                <div className="bg-white p-7 h-full group hover:bg-[#F3F4F6] transition-colors">
                  <div className="aspect-[3/4] overflow-hidden bg-[#003B5C] relative mb-6">
                    <img src={p.img} alt={p.name} className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#002840] via-[#002840]/30 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="text-[10px] font-mono-tech uppercase tracking-[0.25em] text-[#00A36C]">L / {String(i + 1).padStart(2, "0")}</div>
                      <div className="mt-1 font-semibold text-white text-lg">{p.name}</div>
                    </div>
                  </div>
                  <div className="text-xs font-mono-tech uppercase tracking-[0.2em] text-[#00A36C]">{p.role}</div>
                  <p className="mt-3 text-sm text-[#4B5563] leading-relaxed">{p.bio}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDER QUOTE */}
      <section className="bg-[#003B5C] text-white py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 pf-dark-gradient" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <Reveal>
            <Quote className="w-12 h-12 text-[#00A36C] mx-auto mb-8" />
            <blockquote className="text-2xl lg:text-4xl font-semibold leading-tight tracking-tight">
              &ldquo;The packaging is the silent partner in pharmaceutical formulation. Our job is to make sure it never breaks the silence.&rdquo;
            </blockquote>
            <div className="mt-10 inline-flex items-center gap-4 pt-8 border-t border-white/15">
              <div>
                <div className="font-semibold">Rajiv Mehta</div>
                <div className="text-xs font-mono-tech uppercase tracking-[0.2em] text-[#00A36C] mt-1">Managing Director · Founding Partner</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CSR */}
      <section className="bg-[#F3F4F6] py-24 lg:py-32 pf-grain">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-5">
            <SectionHeading
              eyebrow="04 · Corporate Responsibility"
              title="Built on people. Accountable to communities."
              subtitle="A 27-year-old plant is also a 27-year-old social contract with the families who built it."
            />
          </Reveal>
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-px bg-gray-200">
            {csr.map((c, i) => (
              <Reveal key={c.t} delay={i * 0.08}>
                <div className="bg-white p-8 h-full group hover:bg-[#003B5C] transition-colors duration-500">
                  <i className={`${c.i} text-3xl text-[#00A36C] mb-5 block`}></i>
                  <div className="font-semibold text-[#003B5C] group-hover:text-white text-lg transition-colors">{c.t}</div>
                  <p className="mt-2 text-sm text-[#4B5563] group-hover:text-white/70 leading-relaxed transition-colors">{c.d}</p>
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
