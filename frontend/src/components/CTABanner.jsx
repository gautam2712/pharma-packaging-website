import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="bg-[#003B5C] text-white relative overflow-hidden" data-testid="cta-banner">
      <div className="absolute inset-0 blueprint-grid opacity-20" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#00A36C]/20 to-transparent" />
      <div className="relative max-w-[1400px] mx-auto px-6 py-20 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-8">
          <div className="text-xs font-mono-tech uppercase tracking-[0.3em] text-[#00A36C] mb-5 accent-bar">
            Request for Quotation
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight max-w-2xl">
            Ready to qualify a Tier-1 packaging partner?
          </h2>
          <p className="mt-5 text-white/70 max-w-xl text-base lg:text-lg">
            Share your specifications and we&apos;ll respond with a technical quotation, sample reels and a stability protocol in under 72 hours.
          </p>
        </div>
        <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-end">
          <Link
            to="/rfq"
            data-testid="cta-banner-rfq"
            className="inline-flex items-center justify-center gap-2 bg-[#00A36C] hover:bg-[#008759] text-white px-7 py-4 font-semibold tracking-wide transition-colors"
          >
            Start RFQ <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/contact"
            data-testid="cta-banner-contact"
            className="inline-flex items-center justify-center gap-2 border border-white/30 hover:bg-white hover:text-[#003B5C] px-7 py-4 font-semibold tracking-wide transition-colors"
          >
            Talk to Sales
          </Link>
        </div>
      </div>
    </section>
  );
}
