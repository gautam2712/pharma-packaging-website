import { useState } from "react";
import { toast } from "sonner";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { COMPANY } from "@/data/site";
import PageHero from "@/components/PageHero";

export default function Contact() {
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const offices = [
    { city: "Vapi (HQ)", addr: "Plot 14-B, GIDC Industrial Estate, Vapi, Gujarat 396195, India", phone: "+91 22 4501 8800" },
    { city: "Mumbai", addr: "8th Floor, Trade Tower, BKC, Mumbai 400051, India", phone: "+91 22 6601 8800" },
    { city: "Lisbon (EU Desk)", addr: "Avenida da Liberdade 144, 1250-146 Lisboa, Portugal", phone: "+351 21 590 4400" },
    { city: "Mexico City (LATAM)", addr: "Reforma 222, Cuauhtémoc, 06600 CDMX, Mexico", phone: "+52 55 4170 9800" },
  ];

  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please complete the required fields");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Message sent. Our team will respond within one business day.");
      setForm({ name: "", company: "", email: "", phone: "", message: "" });
    }, 700);
  };

  return (
    <div data-testid="contact-page">
      <PageHero
        eyebrow="Contact"
        title="Talk to a packaging engineer."
        subtitle="Not a sales rep – an actual engineer. Our technical desk responds within one business day."
        breadcrumb={[{ label: "Contact" }]}
      />

      <section className="bg-white py-24">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <div className="text-xs font-mono-tech uppercase tracking-[0.3em] text-[#00A36C] mb-4 accent-bar">Direct lines</div>
            <h2 className="text-3xl lg:text-4xl font-semibold text-[#003B5C] mb-10">Reach the right desk.</h2>

            <div className="space-y-6 mb-10">
              <a href={`mailto:${COMPANY.email}`} className="flex items-start gap-4 group" data-testid="contact-email">
                <div className="w-11 h-11 bg-[#003B5C] flex items-center justify-center text-white"><Mail className="w-5 h-5" /></div>
                <div>
                  <div className="text-xs font-mono-tech uppercase tracking-[0.2em] text-[#4B5563]">Export Desk</div>
                  <div className="font-semibold text-[#003B5C] group-hover:text-[#00A36C] transition-colors">{COMPANY.email}</div>
                </div>
              </a>
              <a href={`tel:${COMPANY.phone}`} className="flex items-start gap-4 group" data-testid="contact-phone">
                <div className="w-11 h-11 bg-[#003B5C] flex items-center justify-center text-white"><Phone className="w-5 h-5" /></div>
                <div>
                  <div className="text-xs font-mono-tech uppercase tracking-[0.2em] text-[#4B5563]">Sales</div>
                  <div className="font-semibold text-[#003B5C] group-hover:text-[#00A36C] transition-colors">{COMPANY.phone}</div>
                </div>
              </a>
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-[#003B5C] flex items-center justify-center text-white"><MapPin className="w-5 h-5" /></div>
                <div>
                  <div className="text-xs font-mono-tech uppercase tracking-[0.2em] text-[#4B5563]">Headquarters</div>
                  <div className="font-semibold text-[#003B5C]">{COMPANY.address}</div>
                </div>
              </div>
            </div>

            <div className="aspect-[16/9] bg-gray-100 overflow-hidden border border-gray-200">
              <iframe
                title="HQ location"
                src="https://www.google.com/maps?q=Vapi+GIDC+Gujarat+India&output=embed"
                className="w-full h-full"
                loading="lazy"
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            <form onSubmit={submit} className="bg-[#F3F4F6] p-8 lg:p-12" data-testid="contact-form">
              <div className="text-xs font-mono-tech uppercase tracking-[0.3em] text-[#003B5C] mb-3">General Enquiry</div>
              <h3 className="text-2xl lg:text-3xl font-semibold text-[#003B5C] mb-8">Send us a message</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-mono-tech uppercase tracking-wider text-[#4B5563] block mb-2">Name *</label>
                  <input data-testid="contact-name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-3 bg-white border border-gray-200 focus:outline-none focus:border-[#003B5C]" />
                </div>
                <div>
                  <label className="text-xs font-mono-tech uppercase tracking-wider text-[#4B5563] block mb-2">Company</label>
                  <input data-testid="contact-company" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} className="w-full px-4 py-3 bg-white border border-gray-200 focus:outline-none focus:border-[#003B5C]" />
                </div>
                <div>
                  <label className="text-xs font-mono-tech uppercase tracking-wider text-[#4B5563] block mb-2">Email *</label>
                  <input data-testid="contact-email-input" required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-3 bg-white border border-gray-200 focus:outline-none focus:border-[#003B5C]" />
                </div>
                <div>
                  <label className="text-xs font-mono-tech uppercase tracking-wider text-[#4B5563] block mb-2">Phone</label>
                  <input data-testid="contact-phone-input" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full px-4 py-3 bg-white border border-gray-200 focus:outline-none focus:border-[#003B5C]" />
                </div>
              </div>
              <div className="mt-4">
                <label className="text-xs font-mono-tech uppercase tracking-wider text-[#4B5563] block mb-2">Message *</label>
                <textarea data-testid="contact-message" required rows={6} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full px-4 py-3 bg-white border border-gray-200 focus:outline-none focus:border-[#003B5C] resize-none" />
              </div>
              <button type="submit" disabled={submitting} data-testid="contact-submit" className="mt-6 inline-flex items-center gap-2 bg-[#003B5C] hover:bg-[#002840] disabled:opacity-60 text-white px-7 py-4 font-semibold tracking-wide transition-colors">
                {submitting ? "Sending..." : "Send Message"} <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="bg-[#F3F4F6] py-24">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-xs font-mono-tech uppercase tracking-[0.3em] text-[#00A36C] mb-4 accent-bar">Global Offices</div>
          <h2 className="text-3xl lg:text-4xl font-semibold text-[#003B5C] mb-12">Four offices. One organisation.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200">
            {offices.map((o) => (
              <div key={o.city} className="bg-white p-8">
                <div className="font-semibold text-[#003B5C] text-xl">{o.city}</div>
                <p className="mt-3 text-sm text-[#4B5563] leading-relaxed">{o.addr}</p>
                <a href={`tel:${o.phone}`} className="mt-4 inline-flex items-center gap-2 text-sm font-mono-tech text-[#00A36C] hover:text-[#003B5C]">
                  <Phone className="w-3.5 h-3.5" /> {o.phone}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
