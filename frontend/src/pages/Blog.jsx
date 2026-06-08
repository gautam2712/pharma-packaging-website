import { ArrowRight } from "lucide-react";
import { BLOG_POSTS, IMG } from "@/data/site";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";

export default function Blog() {
  const [hero, ...rest] = BLOG_POSTS;
  const imgs = [IMG.lab, IMG.machinery, IMG.qa, IMG.facility];

  return (
    <div data-testid="blog-page">
      <PageHero
        eyebrow="Insights"
        title="Technical notes, regulatory updates and industry analysis."
        subtitle="From the desks of our R&D, Quality and Regulatory teams."
        breadcrumb={[{ label: "Insights" }]}
      />

      <section className="bg-white py-24">
        <div className="max-w-[1400px] mx-auto px-6">
          {/* Featured */}
          <article className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-20 border-b border-gray-200" data-testid="blog-featured">
            <div className="lg:col-span-7">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={imgs[0]} alt="" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="flex items-center gap-3 text-xs font-mono-tech uppercase tracking-[0.2em] text-[#4B5563] mb-5">
                <span className="text-[#00A36C]">{hero.category}</span>
                <span>·</span>
                <span>{hero.date}</span>
                <span>·</span>
                <span>{hero.readTime}</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#003B5C] tracking-tight leading-tight">{hero.title}</h2>
              <p className="mt-5 text-[#4B5563] text-lg leading-relaxed">{hero.excerpt}</p>
              <a href="#" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#003B5C] hover:text-[#00A36C] w-fit">
                Read Article <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </article>

          {/* Grid */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-200">
            {rest.map((p, i) => (
              <a href="#" key={p.slug} data-testid={`blog-post-${p.slug}`} className="group bg-white p-8 hover:bg-[#F3F4F6] transition-colors">
                <div className="aspect-[4/3] overflow-hidden mb-6">
                  <img src={imgs[i + 1]} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="flex items-center gap-3 text-[10px] font-mono-tech uppercase tracking-[0.2em] text-[#4B5563] mb-3">
                  <span className="text-[#00A36C]">{p.category}</span>
                  <span>·</span>
                  <span>{p.date}</span>
                </div>
                <h3 className="text-xl font-semibold text-[#003B5C] leading-tight">{p.title}</h3>
                <p className="mt-3 text-sm text-[#4B5563] leading-relaxed">{p.excerpt}</p>
                <div className="mt-5 text-xs font-mono-tech text-[#4B5563]">{p.readTime}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
