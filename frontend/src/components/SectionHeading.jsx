export default function SectionHeading({ eyebrow, title, subtitle, align = "left", dark = false, className = "" }) {
  const alignCls = align === "center" ? "text-center mx-auto" : "";
  return (
    <div className={`max-w-3xl ${alignCls} ${className}`}>
      {eyebrow && (
        <div className={`text-xs font-mono-tech uppercase tracking-[0.3em] mb-4 ${dark ? "text-[#00A36C]" : "text-[#00A36C]"} ${align === "left" ? "accent-bar" : ""}`}>
          {eyebrow}
        </div>
      )}
      <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight ${dark ? "text-white" : "text-[#003B5C]"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-5 text-base lg:text-lg leading-relaxed ${dark ? "text-white/70" : "text-[#4B5563]"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
