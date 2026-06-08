import { useState } from "react";
import { Link } from "react-router-dom";
import { Check, Upload, ArrowRight, ArrowLeft, ChevronRight } from "lucide-react";
import { toast } from "sonner";
import { PRODUCTS } from "@/data/site";
import PageHero from "@/components/PageHero";

const STEPS = [
  { n: 1, label: "Contact", caption: "About you" },
  { n: 2, label: "Product", caption: "Specifications" },
  { n: 3, label: "Quantity", caption: "Volume & files" },
  { n: 4, label: "Review", caption: "Confirm & submit" },
];

export default function RFQ() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", role: "", company: "", country: "", email: "", phone: "",
    product: "", category: "", thickness: "", width: "", structure: "",
    annualVolume: "", deliverySchedule: "", incoterms: "FOB", market: "",
    notes: "", files: [],
  });

  const update = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const validateStep = () => {
    if (step === 1) {
      if (!form.name || !form.email || !form.company) {
        toast.error("Please complete required fields");
        return false;
      }
    }
    if (step === 2) {
      if (!form.product) {
        toast.error("Please select a product");
        return false;
      }
    }
    if (step === 3) {
      if (!form.annualVolume || !form.market) {
        toast.error("Please complete required fields");
        return false;
      }
    }
    return true;
  };

  const next = () => { if (validateStep()) setStep((s) => Math.min(4, s + 1)); };
  const back = () => setStep((s) => Math.max(1, s - 1));

  const submit = () => {
    setSubmitted(true);
    toast.success("RFQ received. A reference number has been issued.");
  };

  if (submitted) {
    return (
      <div data-testid="rfq-success">
        <PageHero eyebrow="RFQ Submitted" title="Your enquiry is with our export desk." subtitle="A technical sales representative will respond within one business day." breadcrumb={[{ label: "RFQ" }]} />
        <section className="bg-white py-24">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <div className="w-20 h-20 bg-[#00A36C] mx-auto flex items-center justify-center text-white mb-8">
              <Check className="w-10 h-10" />
            </div>
            <div className="text-xs font-mono-tech uppercase tracking-[0.3em] text-[#4B5563] mb-3">Reference</div>
            <div className="text-3xl font-semibold font-mono-tech text-[#003B5C] tabular tracking-wide">
              PF-RFQ-{Math.floor(100000 + Math.random() * 900000)}
            </div>
            <p className="mt-8 text-[#4B5563] leading-relaxed">
              You&apos;ll receive an acknowledgement email shortly. Your assigned account manager will be in touch within one business day with sample reels, technical datasheets and a formal commercial quotation.
            </p>
            <div className="mt-10 flex flex-wrap gap-3 justify-center">
              <Link to="/" data-testid="rfq-home" className="inline-flex items-center gap-2 bg-[#003B5C] text-white px-7 py-3.5 font-semibold">Back to Home</Link>
              <Link to="/products" className="inline-flex items-center gap-2 border border-gray-300 text-[#003B5C] px-7 py-3.5 font-semibold hover:bg-[#F3F4F6]">Explore Products</Link>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div data-testid="rfq-page">
      <PageHero
        eyebrow="Request for Quotation"
        title="Submit your packaging specifications."
        subtitle="A four-step technical RFQ. Average response time: 16 business hours."
        breadcrumb={[{ label: "RFQ Portal" }]}
      />

      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          {/* Stepper */}
          <ol className="grid grid-cols-4 gap-2 mb-12" data-testid="rfq-stepper">
            {STEPS.map((s, i) => (
              <li key={s.n} className={`relative pb-6 border-b-2 ${step >= s.n ? "border-[#00A36C]" : "border-gray-200"}`}>
                <div className={`text-xs font-mono-tech uppercase tracking-[0.2em] ${step >= s.n ? "text-[#00A36C]" : "text-[#4B5563]"}`}>Step {String(s.n).padStart(2, "0")}</div>
                <div className={`mt-1 font-semibold ${step >= s.n ? "text-[#003B5C]" : "text-[#4B5563]"}`}>{s.label}</div>
                <div className="text-xs text-[#4B5563] mt-1">{s.caption}</div>
              </li>
            ))}
          </ol>

          <div className="bg-[#F3F4F6] p-8 lg:p-12">
            {step === 1 && (
              <div data-testid="rfq-step-1">
                <h3 className="text-2xl font-semibold text-[#003B5C] mb-2">Tell us about you</h3>
                <p className="text-sm text-[#4B5563] mb-8">Information shared here is held under NDA.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field label="Full Name *" v={form.name} onChange={(v) => update("name", v)} testid="rfq-name" />
                  <Field label="Designation" v={form.role} onChange={(v) => update("role", v)} testid="rfq-role" />
                  <Field label="Company *" v={form.company} onChange={(v) => update("company", v)} testid="rfq-company" />
                  <Field label="Country *" v={form.country} onChange={(v) => update("country", v)} testid="rfq-country" />
                  <Field label="Business Email *" type="email" v={form.email} onChange={(v) => update("email", v)} testid="rfq-email" />
                  <Field label="Phone (with code)" v={form.phone} onChange={(v) => update("phone", v)} testid="rfq-phone" />
                </div>
              </div>
            )}

            {step === 2 && (
              <div data-testid="rfq-step-2">
                <h3 className="text-2xl font-semibold text-[#003B5C] mb-2">Product specifications</h3>
                <p className="text-sm text-[#4B5563] mb-8">Select the closest match. Custom requirements can be detailed below.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="text-xs font-mono-tech uppercase tracking-wider text-[#4B5563] block mb-2">Product *</label>
                    <select data-testid="rfq-product" value={form.product} onChange={(e) => update("product", e.target.value)} className="w-full px-4 py-3 bg-white border border-gray-200 focus:outline-none focus:border-[#003B5C]">
                      <option value="">Select product</option>
                      {PRODUCTS.map((p) => <option key={p.slug} value={p.slug}>{p.name}</option>)}
                    </select>
                  </div>
                  <Field label="Application / End-use" v={form.category} onChange={(v) => update("category", v)} testid="rfq-application" />
                  <Field label="Thickness / Structure" v={form.thickness} onChange={(v) => update("thickness", v)} testid="rfq-thickness" />
                  <Field label="Width (mm)" v={form.width} onChange={(v) => update("width", v)} testid="rfq-width" />
                </div>
                <div>
                  <label className="text-xs font-mono-tech uppercase tracking-wider text-[#4B5563] block mb-2">Specific Requirements</label>
                  <textarea rows={4} data-testid="rfq-structure" value={form.structure} onChange={(e) => update("structure", e.target.value)} placeholder="e.g. OPA 25 / Alu 45 / PVC 60 cold-form laminate, ICH Q1A stability data required..." className="w-full px-4 py-3 bg-white border border-gray-200 focus:outline-none focus:border-[#003B5C] resize-none" />
                </div>
              </div>
            )}

            {step === 3 && (
              <div data-testid="rfq-step-3">
                <h3 className="text-2xl font-semibold text-[#003B5C] mb-2">Volume, schedule & documents</h3>
                <p className="text-sm text-[#4B5563] mb-8">Annual volumes help us provide a meaningful commercial quotation.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field label="Annual Volume (kg or MT) *" v={form.annualVolume} onChange={(v) => update("annualVolume", v)} testid="rfq-volume" />
                  <Field label="Delivery Schedule" v={form.deliverySchedule} onChange={(v) => update("deliverySchedule", v)} placeholder="e.g. monthly / quarterly" testid="rfq-schedule" />
                  <div>
                    <label className="text-xs font-mono-tech uppercase tracking-wider text-[#4B5563] block mb-2">Incoterms</label>
                    <select data-testid="rfq-incoterms" value={form.incoterms} onChange={(e) => update("incoterms", e.target.value)} className="w-full px-4 py-3 bg-white border border-gray-200 focus:outline-none focus:border-[#003B5C]">
                      <option>FOB</option><option>CIF</option><option>DDP</option><option>EXW</option><option>CFR</option>
                    </select>
                  </div>
                  <Field label="Target Market *" v={form.market} onChange={(v) => update("market", v)} placeholder="e.g. Germany, Brazil, Japan" testid="rfq-market" />
                </div>
                <div className="mt-6">
                  <label className="text-xs font-mono-tech uppercase tracking-wider text-[#4B5563] block mb-2">Attach Documents</label>
                  <div className="border-2 border-dashed border-gray-300 bg-white p-8 text-center">
                    <Upload className="w-8 h-8 mx-auto text-[#003B5C] mb-3" />
                    <input type="file" multiple data-testid="rfq-files" onChange={(e) => update("files", Array.from(e.target.files || []))} className="hidden" id="rfq-file-input" />
                    <label htmlFor="rfq-file-input" className="cursor-pointer text-sm">
                      <span className="font-semibold text-[#003B5C]">Click to upload</span>
                      <span className="text-[#4B5563]"> or drag and drop</span>
                    </label>
                    <p className="text-xs text-[#4B5563] mt-2">PDF, DOCX, XLSX up to 25 MB each</p>
                    {form.files.length > 0 && (
                      <div className="mt-4 text-xs font-mono-tech text-[#003B5C]">{form.files.length} file(s) attached</div>
                    )}
                  </div>
                </div>
                <div className="mt-6">
                  <label className="text-xs font-mono-tech uppercase tracking-wider text-[#4B5563] block mb-2">Additional Notes</label>
                  <textarea rows={3} data-testid="rfq-notes" value={form.notes} onChange={(e) => update("notes", e.target.value)} className="w-full px-4 py-3 bg-white border border-gray-200 focus:outline-none focus:border-[#003B5C] resize-none" />
                </div>
              </div>
            )}

            {step === 4 && (
              <div data-testid="rfq-step-4">
                <h3 className="text-2xl font-semibold text-[#003B5C] mb-2">Review your enquiry</h3>
                <p className="text-sm text-[#4B5563] mb-8">Confirm the details below before submission.</p>
                <div className="bg-white border border-gray-200">
                  {[
                    ["Contact", `${form.name} · ${form.role || "—"}`],
                    ["Company", `${form.company} · ${form.country || "—"}`],
                    ["Email / Phone", `${form.email} · ${form.phone || "—"}`],
                    ["Product", PRODUCTS.find((p) => p.slug === form.product)?.name || "—"],
                    ["Specs", `${form.thickness || "—"} · ${form.width || "—"} mm`],
                    ["Requirements", form.structure || "—"],
                    ["Annual volume", form.annualVolume],
                    ["Schedule · Incoterms", `${form.deliverySchedule || "—"} · ${form.incoterms}`],
                    ["Target market", form.market],
                    ["Files attached", `${form.files.length}`],
                  ].map(([k, v]) => (
                    <div key={k} className="grid grid-cols-3 gap-4 px-6 py-3 border-b border-gray-100 last:border-0 text-sm">
                      <span className="font-mono-tech uppercase tracking-wider text-xs text-[#4B5563]">{k}</span>
                      <span className="col-span-2 text-[#111827]">{v || "—"}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-white border-l-2 border-[#00A36C] text-xs text-[#4B5563]">
                  <strong className="text-[#003B5C]">NDA notice:</strong> Your specifications are treated as confidential. Our standard mutual NDA template is available upon request.
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="mt-10 flex items-center justify-between">
              <button onClick={back} disabled={step === 1} data-testid="rfq-back" className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-[#003B5C] disabled:opacity-30 hover:bg-white transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back
              </button>
              {step < 4 ? (
                <button onClick={next} data-testid="rfq-next" className="inline-flex items-center gap-2 bg-[#003B5C] hover:bg-[#002840] text-white px-7 py-3.5 font-semibold transition-colors">
                  Continue <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button onClick={submit} data-testid="rfq-submit" className="inline-flex items-center gap-2 bg-[#00A36C] hover:bg-[#008759] text-white px-7 py-3.5 font-semibold transition-colors">
                  Submit RFQ <ChevronRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Field({ label, v, onChange, type = "text", testid, placeholder }) {
  return (
    <div>
      <label className="text-xs font-mono-tech uppercase tracking-wider text-[#4B5563] block mb-2">{label}</label>
      <input type={type} value={v} onChange={(e) => onChange(e.target.value)} data-testid={testid} placeholder={placeholder} className="w-full px-4 py-3 bg-white border border-gray-200 focus:outline-none focus:border-[#003B5C]" />
    </div>
  );
}
