import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { NAV, COMPANY } from "@/data/site";
import { Menu, X, ChevronRight } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  // Primary nav (visible) vs overflow (in More menu)
  const primary = NAV.slice(0, 7);
  const overflow = NAV.slice(7);

  return (
    <header
      data-testid="site-header"
      className={`sticky top-0 z-50 bg-white border-b ${scrolled ? "border-gray-200 shadow-sm" : "border-transparent"} transition-all`}
    >
      {/* Top utility strip */}
      <div className="hidden lg:block bg-[#003B5C] text-white">
        <div className="max-w-[1400px] mx-auto px-6 py-2 flex items-center justify-between text-xs">
          <div className="flex items-center gap-6 font-mono-tech tracking-wide">
            <span><i className="fa-solid fa-location-dot mr-2 text-[#00A36C]"></i>{COMPANY.hq}</span>
            <span><i className="fa-solid fa-certificate mr-2 text-[#00A36C]"></i>ISO 15378 · WHO GMP · US DMF Type III</span>
          </div>
          <div className="flex items-center gap-6">
            <a href={`tel:${COMPANY.phone}`} className="hover:text-[#00A36C] transition-colors" data-testid="header-phone">
              <i className="fa-solid fa-phone mr-2"></i>{COMPANY.phone}
            </a>
            <a href={`mailto:${COMPANY.email}`} className="hover:text-[#00A36C] transition-colors" data-testid="header-email">
              <i className="fa-solid fa-envelope mr-2"></i>{COMPANY.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className="max-w-[1400px] mx-auto px-6 py-4 flex items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-3 group" data-testid="nav-logo">
          <div className="w-10 h-10 bg-[#003B5C] flex items-center justify-center text-white font-bold tracking-tight">
            <span className="text-lg">PF</span>
          </div>
          <div className="leading-tight">
            <div className="text-[#003B5C] font-semibold text-base tracking-tight">{COMPANY.name}</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-[#4B5563] font-mono-tech">Pharmaceutical Packaging</div>
          </div>
        </Link>

        <nav className="hidden xl:flex items-center gap-1 text-sm">
          {primary.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              data-testid={`nav-${n.label.toLowerCase()}`}
              className={({ isActive }) =>
                `px-3 py-2 transition-colors ${isActive ? "text-[#003B5C] font-semibold" : "text-[#4B5563] hover:text-[#003B5C]"}`
              }
            >
              {n.label}
            </NavLink>
          ))}
          <div className="relative group">
            <button className="px-3 py-2 text-[#4B5563] hover:text-[#003B5C] transition-colors flex items-center gap-1" data-testid="nav-more">
              More <i className="fa-solid fa-chevron-down text-[10px] ml-1"></i>
            </button>
            <div className="absolute right-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              <div className="bg-white border border-gray-200 shadow-lg min-w-[200px] py-2">
                {overflow.map((n) => (
                  <NavLink
                    key={n.to}
                    to={n.to}
                    data-testid={`nav-${n.label.toLowerCase()}`}
                    className={({ isActive }) =>
                      `block px-4 py-2 text-sm ${isActive ? "text-[#003B5C] font-semibold bg-gray-50" : "text-[#4B5563] hover:bg-gray-50 hover:text-[#003B5C]"}`
                    }
                  >
                    {n.label}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/rfq"
            data-testid="nav-rfq-cta"
            className="hidden md:inline-flex items-center gap-2 bg-[#003B5C] hover:bg-[#002840] text-white px-5 py-2.5 text-sm font-semibold tracking-wide transition-colors"
          >
            Request Quote <ChevronRight className="w-4 h-4" />
          </Link>
          <button
            data-testid="mobile-menu-toggle"
            className="xl:hidden p-2 text-[#003B5C]"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="xl:hidden bg-white border-t border-gray-200" data-testid="mobile-menu">
          <div className="px-6 py-4 grid gap-1">
            {NAV.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                data-testid={`mobile-nav-${n.label.toLowerCase()}`}
                className={({ isActive }) =>
                  `block px-3 py-3 border-b border-gray-100 text-sm ${isActive ? "text-[#003B5C] font-semibold" : "text-[#4B5563]"}`
                }
              >
                {n.label}
              </NavLink>
            ))}
            <Link
              to="/rfq"
              data-testid="mobile-nav-rfq"
              className="mt-3 inline-flex items-center justify-center gap-2 bg-[#003B5C] text-white px-5 py-3 text-sm font-semibold tracking-wide"
            >
              Request Quote <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
