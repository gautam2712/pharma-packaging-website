/* Marquee strip — used for certs / global clients in dark sections. */
export default function Marquee({ items, className = "" }) {
  const doubled = [...items, ...items];
  return (
    <div className={`overflow-hidden ${className}`}>
      <div className="flex pf-marquee whitespace-nowrap">
        {doubled.map((it, i) => (
          <div key={i} className="flex items-center gap-3 px-8 py-4 shrink-0">
            <span className="w-1.5 h-1.5 bg-[#00A36C]" />
            <span className="text-xs font-mono-tech uppercase tracking-[0.25em] text-white/70">
              {it}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
