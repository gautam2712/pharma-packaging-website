import { Link } from "react-router-dom";

export default function PageHero({ eyebrow, title, subtitle, image, breadcrumb = [], children }) {
  return (
    <section className="relative bg-[#003B5C] text-white overflow-hidden" data-testid="page-hero">
      {image && (
        <div className="absolute inset-0">
          <img src={image} alt="" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 hero-overlay" />
        </div>
      )}
      <div className="absolute inset-0 blueprint-grid opacity-30 pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-6 pt-20 pb-24 lg:pt-28 lg:pb-32">
        {breadcrumb.length > 0 && (
          <nav className="text-xs font-mono-tech uppercase tracking-[0.2em] text-white/60 mb-8" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-[#00A36C]">Home</Link>
            {breadcrumb.map((b, i) => (
              <span key={i}>
                <span className="mx-3 text-white/30">/</span>
                {b.to ? <Link to={b.to} className="hover:text-[#00A36C]">{b.label}</Link> : <span className="text-white">{b.label}</span>}
              </span>
            ))}
          </nav>
        )}
        {eyebrow && (
          <div className="text-xs font-mono-tech uppercase tracking-[0.3em] text-[#00A36C] mb-5 accent-bar">
            {eyebrow}
          </div>
        )}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight max-w-4xl leading-[1.05]">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 text-lg lg:text-xl text-white/80 max-w-3xl leading-relaxed">{subtitle}</p>
        )}
        {children && <div className="mt-10">{children}</div>}
      </div>
    </section>
  );
}
