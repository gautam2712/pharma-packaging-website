import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Search } from "lucide-react";
import { PRODUCTS } from "@/data/site";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";

export default function Products() {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");

  const categories = ["All", ...Array.from(new Set(PRODUCTS.map((p) => p.category)))];

  const filtered = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const matchCat = category === "All" || p.category === category;
      const matchQ = !query || p.name.toLowerCase().includes(query.toLowerCase()) || p.tagline.toLowerCase().includes(query.toLowerCase());
      return matchCat && matchQ;
    });
  }, [category, query]);

  return (
    <div data-testid="products-page">
      <PageHero
        eyebrow="Product Portfolio"
        title="A complete primary packaging portfolio for global pharma."
        subtitle="Nine engineered product families. ISO 15378 manufactured. Qualified across 42 export markets."
        breadcrumb={[{ label: "Products" }]}
      />

      {/* FILTER BAR */}
      <section className="bg-white border-b border-gray-200 sticky top-[73px] lg:top-[97px] z-30">
        <div className="max-w-[1400px] mx-auto px-6 py-5 flex flex-col lg:flex-row gap-4 lg:items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                data-testid={`filter-${c.replace(/\s+/g, '-').toLowerCase()}`}
                onClick={() => setCategory(c)}
                className={`px-4 py-2 text-xs font-mono-tech uppercase tracking-wider transition-colors ${category === c ? "bg-[#003B5C] text-white" : "bg-[#F3F4F6] text-[#4B5563] hover:bg-gray-200"}`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="relative max-w-xs w-full">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#4B5563]" />
            <input
              data-testid="product-search"
              type="text"
              placeholder="Search products..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-gray-200 text-sm focus:outline-none focus:border-[#003B5C]"
            />
          </div>
        </div>
      </section>

      {/* GRID */}
      <section className="bg-[#F3F4F6] py-16 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-6">
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-[#4B5563]" data-testid="no-products">
              No products match your search.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200">
              {filtered.map((p) => (
                <Link
                  key={p.slug}
                  to={`/products/${p.slug}`}
                  data-testid={`products-card-${p.slug}`}
                  className="group bg-white p-8 hover:bg-[#003B5C] transition-colors duration-300"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-gray-100 mb-6">
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="text-[10px] font-mono-tech uppercase tracking-[0.2em] text-[#00A36C] mb-2">{p.category}</div>
                  <h3 className="text-xl font-semibold text-[#003B5C] group-hover:text-white tracking-tight">{p.name}</h3>
                  <p className="mt-3 text-sm text-[#4B5563] group-hover:text-white/70 leading-relaxed">{p.tagline}</p>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#003B5C] group-hover:text-[#00A36C]">
                    Technical Datasheet <ChevronRight className="w-4 h-4" />
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
