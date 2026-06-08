import { useState } from "react";
import { ChevronDown, ChevronUp, MapPin, Briefcase, Clock } from "lucide-react";
import { JOBS, IMG } from "@/data/site";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CTABanner from "@/components/CTABanner";

export default function Careers() {
  const [open, setOpen] = useState(null);

  return (
    <div data-testid="careers-page">
      <PageHero
        eyebrow="Careers"
        title="Build a career where precision matters."
        subtitle="Join 840 colleagues across R&D, manufacturing, quality and global sales – building one of India's most respected pharmaceutical packaging companies."
        image={IMG.cleanroomOp}
        breadcrumb={[{ label: "Careers" }]}
      />

      <section className="bg-white py-24">
        <div className="max-w-[1400px] mx-auto px-6">
          <SectionHeading eyebrow="Why PharmaFoil" title="A workplace built on craft, compliance and care." />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200">
            {[
              { i: "fa-solid fa-flask-vial", t: "Real R&D investment", d: "₹38 Cr R&D spend in FY25. 11 patents granted." },
              { i: "fa-solid fa-globe", t: "Global exposure", d: "Work across 42 export markets and 320 customer accounts." },
              { i: "fa-solid fa-graduation-cap", t: "Continuous learning", d: "Tuition support for B.Tech, M.Tech and MBA programmes." },
              { i: "fa-solid fa-people-group", t: "Stable workforce", d: "Average tenure: 9.4 years. Zero LTI in 2025." },
            ].map((b) => (
              <div key={b.t} className="bg-white p-8">
                <i className={`${b.i} text-3xl text-[#00A36C] mb-5`}></i>
                <h3 className="text-lg font-semibold text-[#003B5C]">{b.t}</h3>
                <p className="mt-3 text-sm text-[#4B5563] leading-relaxed">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F3F4F6] py-24">
        <div className="max-w-[1400px] mx-auto px-6">
          <SectionHeading eyebrow="Open Positions" title="Current openings." />
          <div className="mt-16 space-y-2" data-testid="job-list">
            {JOBS.map((j, i) => {
              const isOpen = open === i;
              return (
                <div key={i} className="bg-white border border-gray-200">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    data-testid={`job-toggle-${i}`}
                    className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-[#F3F4F6] transition-colors"
                  >
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-[#003B5C]">{j.title}</h3>
                      <div className="mt-2 flex flex-wrap gap-4 text-xs font-mono-tech uppercase tracking-wider text-[#4B5563]">
                        <span className="flex items-center gap-1.5"><Briefcase className="w-3.5 h-3.5 text-[#00A36C]" />{j.department}</span>
                        <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-[#00A36C]" />{j.location}</span>
                        <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-[#00A36C]" />{j.type}</span>
                      </div>
                    </div>
                    {isOpen ? <ChevronUp className="w-5 h-5 text-[#003B5C]" /> : <ChevronDown className="w-5 h-5 text-[#003B5C]" />}
                  </button>
                  {isOpen && (
                    <div className="px-8 pb-8 pt-2 border-t border-gray-100">
                      <p className="text-[#4B5563] leading-relaxed">{j.summary}</p>
                      <a href="mailto:careers@pharmafoil.in" className="mt-6 inline-flex items-center gap-2 bg-[#003B5C] hover:bg-[#002840] text-white px-6 py-3 text-sm font-semibold transition-colors" data-testid={`job-apply-${i}`}>
                        Apply Now
                      </a>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
