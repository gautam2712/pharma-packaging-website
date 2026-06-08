import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Search, ArrowRight, ArrowUpRight, Grid3x3, List, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { PRODUCTS } from "@/data/site";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import Reveal from "@/components/animations/Reveal";

export default function Products() {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [view, setView] = useState("grid");

  const categoryCounts = useMemo(() => {
    const counts = { All: PRODUCTS.length };
    PRODUCTS.forEach((p) => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return counts;
  }, []);

  const categories = ["All", ...Array.from(new Set(PRODUCTS.map((p) => p.category)))];

  const filtered = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const matchCat = category === "All" || p.category === category;
      const matchQ = !query || p.name.toLowerCase().includes(query.toLowerCase()) || p.tagline.toLowerCase().includes(query.toLowerCase());
      return matchCat && matchQ;
    });
  }, [category, query]);

  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <div data-testid="products-page">
      <PageHero
        eyebrow="Product Portfolio · 09 Families"
        title="Engineered packaging, end-to-end."
        subtitle="Nine product families. Manufactured under ISO 15378. Qualified across 42 export markets."
        breadcrumb={[{ label: "Products" }]}
      />

      {/* ============== TOOLBAR ============== */}
      <section className="bg-white border-b border-gray-200 sticky top-[73px] xl:top-[97px] z-30 backdrop-blur supports-[backdrop-filter]:bg-white/95">
        <div className="max-w-[1400px] mx-auto px-6 py-4 flex flex-col lg:flex-row gap-4 lg:items-center justify-between">
          <div className="flex items-center gap-3 overflow-x-auto scrollbar-hide">
            <span className="text-[10px] font-mono-tech uppercase tracking-[0.25em] text-[#4B5563] hidden lg:block whitespace-nowrap">
              Filter ·
            </span>
            {categories.map((c) => (
              <button
                key={c}
                data-testid={`filter-${c.replace(/\s+/g, '-').toLowerCase()}`}
                onClick={() => setCategory(c)}
                className={`px-3.5 py-2 text-xs font-mono-tech uppercase tracking-wider whitespace-nowrap transition-colors flex items-center gap-2 ${category === c ? "bg-[#003B5C] text-white" : "bg-[#F3F4F6] text-[#4B5563] hover:bg-gray-200"}`}
              >
                {c}
                <span className={`text-[10px] tabular ${category === c ? "text-white/70" : "text-[#4B5563]/70"}`}>
                  {String(categoryCounts[c] || 0).padStart(2, "0")}
                </span>
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#4B5563]" />
              <input
                data-testid="product-search"
                type="text"
                placeholder="Search portfolio..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="pl-10 pr-9 py-2.5 border border-gray-200 text-sm focus:outline-none focus:border-[#003B5C] w-64"
              />
              {query && (
                <button onClick={() => setQuery("")} className="absolute right-2 top-1/2 -translate-y-1/2 text-[#4B5563] hover:text-[#003B5C]">
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
            <div className="flex border border-gray-200">
              <button onClick={() => setView("grid")} className={`p-2.5 ${view === "grid" ? "bg-[#003B5C] text-white" : "text-[#4B5563]"}`} data-testid="view-grid">
                <Grid3x3 className="w-4 h-4" />
              </button>
              <button onClick={() => setView("list")} className={`p-2.5 ${view === "list" ? "bg-[#003B5C] text-white" : "text-[#4B5563]"}`} data-testid="view-list">
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ============== RESULT META ============== */}
      <section className="bg-white border-b border-gray-100 py-6">
        <div className="max-w-[1400px] mx-auto px-6 flex items-baseline justify-between gap-4">
          <div className="text-xs font-mono-tech uppercase tracking-[0.25em] text-[#4B5563]">
            Showing <span className="text-[#003B5C] tabular font-semibold">{String(filtered.length).padStart(2, "0")}</span> of {PRODUCTS.length} results
            {category !== "All" && <span> · {category}</span>}
          </div>
          <div className="text-xs font-mono-tech text-[#4B5563] hidden sm:block">
            All datasheets · NDA required
          </div>
        </div>
      </section>

      {/* ============== GRID / LIST ============== */}
      <section className="bg-[#F3F4F6] py-16 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-6">
          {filtered.length === 0 ? (
            <div className="text-center py-32" data-testid="no-products">
              <div className="text-6xl font-semibold text-[#003B5C]/15 font-mono-tech mb-4">00</div>
              <div className="text-[#4B5563]">No products match your search.</div>
            </div>
          ) : view === "grid" ? (
            <div className="grid grid-cols-12 gap-px bg-gray-200">
              {/* Featured banner card */}
              {featured && (
                <Reveal className="col-span-12 lg:col-span-8 row-span-2">
                  <Link
                    to={`/products/${featured.slug}`}
                    data-testid={`products-card-${featured.slug}`}
                    className="group bg-white block p-8 lg:p-12 h-full relative overflow-hidden pf-card-lift"
                  >
                    <div className="absolute top-6 right-6 text-[10px] font-mono-tech uppercase tracking-[0.25em] text-[#4B5563] bg-white/80 backdrop-blur px-2 py-1">
                      Featured · P / 01
                    </div>
                    <div className="grid grid-cols-12 gap-8 items-center">
                      <div className="col-span-12 md:col-span-7">
                        <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                          <img src={featured.image} alt={featured.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1200ms]" />
                        </div>
                      </div>
                      <div className="col-span-12 md:col-span-5">
                        <div className="text-[10px] font-mono-tech uppercase tracking-[0.25em] text-[#00A36C] mb-3">{featured.category}</div>
                        <h3 className="text-2xl lg:text-3xl font-semibold text-[#003B5C] tracking-tight leading-tight">{featured.name}</h3>
                        <p className="mt-4 text-sm text-[#4B5563] leading-relaxed">{featured.tagline}</p>
                        <div className="mt-6 space-y-2">
                          {featured.specs.slice(0, 3).map((s) => (
                            <div key={s.k} className="flex items-baseline justify-between text-xs border-b border-gray-100 pb-2">
                              <span className="font-mono-tech uppercase tracking-wider text-[#4B5563]">{s.k}</span>
                              <span className="text-[#003B5C] font-medium">{s.v}</span>
                            </div>
                          ))}
                        </div>
                        <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#003B5C] group-hover:text-[#00A36C] transition-colors">
                          <span className="pf-link-arrow">Technical datasheet</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              )}

              {/* Vertical accent block — only shows when featured is present */}
              {featured && (
                <Reveal className="col-span-12 lg:col-span-4 hidden lg:block">
                  <div className="bg-[#003B5C] text-white p-10 h-full relative overflow-hidden">
                    <div className="absolute inset-0 blueprint-grid opacity-30" />
                    <div className="relative">
                      <div className="text-[10px] font-mono-tech uppercase tracking-[0.3em] text-[#00A36C] mb-4">Need a custom barrier?</div>
                      <h3 className="text-2xl font-semibold leading-tight">Our R&amp;D team will engineer a laminate to your stability protocol.</h3>
                      <Link to="/rfq" className="mt-8 inline-flex items-center gap-3 bg-[#00A36C] hover:bg-[#008759] text-white px-5 py-3 text-sm font-semibold transition-colors">
                        Initiate Custom Build <ArrowRight className="w-4 h-4" />
                      </Link>
                      <div className="mt-10 pt-6 border-t border-white/10">
                        <div className="text-xs font-mono-tech text-white/50 uppercase tracking-wider">Avg. turnaround</div>
                        <div className="mt-1 text-3xl font-semibold tabular">10 days</div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              )}

              {/* Remaining grid */}
              {rest.map((p, i) => (
                <Reveal key={p.slug} delay={i * 0.05} className="col-span-12 sm:col-span-6 lg:col-span-4">
                  <Link
                    to={`/products/${p.slug}`}
                    data-testid={`products-card-${p.slug}`}
                    className="group bg-white block p-7 h-full relative overflow-hidden pf-card-lift"
                  >
                    <div className="absolute top-4 right-4 text-[10px] font-mono-tech uppercase tracking-[0.2em] text-[#4B5563]">
                      P / {String(i + 2).padStart(2, "0")}
                    </div>
                    <div className="aspect-[4/3] overflow-hidden bg-gray-100 mb-5">
                      <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1000ms]" />
                    </div>
                    <div className="text-[10px] font-mono-tech uppercase tracking-[0.2em] text-[#00A36C] mb-2">{p.category}</div>
                    <h3 className="text-lg font-semibold text-[#003B5C] tracking-tight leading-tight">{p.name}</h3>
                    <p className="mt-2 text-sm text-[#4B5563] leading-relaxed line-clamp-2">{p.tagline}</p>

                    {/* Hover-revealed specs */}
                    <div className="mt-4 grid grid-cols-2 gap-2 max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-500 overflow-hidden">
                      {p.specs.slice(0, 2).map((s) => (
                        <div key={s.k} className="text-[10px]">
                          <div className="font-mono-tech uppercase tracking-wider text-[#4B5563]">{s.k}</div>
                          <div className="text-[#003B5C] font-medium">{s.v}</div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-5 pt-5 border-t border-gray-100 flex items-center justify-between">
                      <span className="text-xs font-semibold text-[#003B5C] group-hover:text-[#00A36C] flex items-center gap-1.5 transition-colors">
                        Datasheet
                        <ChevronRight className="w-3.5 h-3.5" />
                      </span>
                      <span className="text-[10px] font-mono-tech text-[#4B5563]">{p.specs.length} parameters</span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          ) : (
            // LIST view
            <div className="bg-white">
              <AnimatePresence>
                {filtered.map((p, i) => (
                  <motion.div
                    key={p.slug}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.4 }}
                  >
                    <Link
                      to={`/products/${p.slug}`}
                      data-testid={`products-card-${p.slug}`}
                      className="group flex items-center gap-6 lg:gap-10 p-5 lg:p-7 border-b border-gray-100 hover:bg-[#F3F4F6] transition-colors"
                    >
                      <div className="text-2xl font-semibold text-[#003B5C]/15 tabular font-mono-tech min-w-[60px]">
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      <div className="w-24 h-24 lg:w-32 lg:h-24 overflow-hidden bg-gray-100 shrink-0">
                        <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[10px] font-mono-tech uppercase tracking-[0.2em] text-[#00A36C] mb-1">{p.category}</div>
                        <h3 className="text-lg lg:text-xl font-semibold text-[#003B5C] tracking-tight truncate">{p.name}</h3>
                        <p className="mt-1 text-sm text-[#4B5563] line-clamp-1">{p.tagline}</p>
                      </div>
                      <div className="hidden md:flex flex-wrap gap-2 max-w-xs">
                        {p.applications.slice(0, 2).map((a) => (
                          <span key={a} className="text-[10px] font-mono-tech uppercase tracking-wider text-[#4B5563] bg-[#F3F4F6] px-2 py-1">{a}</span>
                        ))}
                      </div>
                      <ArrowUpRight className="w-5 h-5 text-[#4B5563] group-hover:text-[#00A36C] group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" />
                    </Link>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
