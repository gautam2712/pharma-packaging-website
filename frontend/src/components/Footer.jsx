import { Link } from "react-router-dom";
import { COMPANY, NAV } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-[#003B5C] text-white" data-testid="site-footer">
      <div className="max-w-[1400px] mx-auto px-6 pt-20 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-white text-[#003B5C] flex items-center justify-center font-bold">PF</div>
              <div>
                <div className="font-semibold tracking-tight">{COMPANY.name}</div>
                <div className="text-[10px] uppercase tracking-[0.2em] font-mono-tech text-white/60">Pharmaceutical Packaging</div>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed max-w-xs mb-6">
              Engineered barrier packaging for the world&apos;s most demanding pharmaceutical, nutraceutical and healthcare manufacturers.
            </p>
            <div className="flex items-center gap-3">
              {["linkedin", "twitter", "youtube", "envelope"].map((i) => (
                <a
                  key={i}
                  href="#"
                  data-testid={`footer-social-${i}`}
                  className="w-9 h-9 border border-white/20 hover:bg-white hover:text-[#003B5C] flex items-center justify-center transition-colors"
                  aria-label={i}
                >
                  <i className={`fa-${i === "envelope" ? "solid" : "brands"} fa-${i} text-sm`}></i>
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="text-xs font-mono-tech uppercase tracking-[0.2em] text-white/50 mb-4">Company</div>
            <ul className="space-y-2 text-sm">
              {NAV.slice(0, 6).map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="text-white/80 hover:text-[#00A36C] transition-colors" data-testid={`footer-link-${n.label.toLowerCase()}`}>
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <div className="text-xs font-mono-tech uppercase tracking-[0.2em] text-white/50 mb-4">Resources</div>
            <ul className="space-y-2 text-sm">
              {NAV.slice(6).map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="text-white/80 hover:text-[#00A36C] transition-colors">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <div className="text-xs font-mono-tech uppercase tracking-[0.2em] text-white/50 mb-4">Headquarters</div>
            <address className="not-italic text-sm text-white/80 leading-relaxed mb-6">
              {COMPANY.address}
            </address>
            <div className="space-y-2 text-sm">
              <a href={`tel:${COMPANY.phone}`} className="block text-white/80 hover:text-[#00A36C] transition-colors">
                <i className="fa-solid fa-phone mr-2 text-[#00A36C]"></i>{COMPANY.phone}
              </a>
              <a href={`mailto:${COMPANY.email}`} className="block text-white/80 hover:text-[#00A36C] transition-colors">
                <i className="fa-solid fa-envelope mr-2 text-[#00A36C]"></i>{COMPANY.email}
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 pt-8 text-xs text-white/50 font-mono-tech">
          <div>© {new Date().getFullYear()} {COMPANY.name}. All rights reserved. CIN: U24230GJ1998PTC033421</div>
          <div className="flex flex-wrap gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Use</a>
            <a href="#" className="hover:text-white">Modern Slavery Statement</a>
            <a href="#" className="hover:text-white">Whistle-blower Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
