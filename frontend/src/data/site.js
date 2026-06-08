// Central data store for PharmaFoil Industries - placeholder content

export const COMPANY = {
  name: "PharmaFoil Industries",
  short: "PharmaFoil",
  tagline: "Precision Packaging for Global Pharma",
  established: 1998,
  phone: "+91 22 4501 8800",
  email: "exports@pharmafoil.in",
  address: "Plot 14-B, GIDC Industrial Estate, Vapi, Gujarat 396195, India",
  hq: "Vapi, Gujarat, India",
};

export const NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Products", to: "/products" },
  { label: "Industries", to: "/industries" },
  { label: "Manufacturing", to: "/manufacturing" },
  { label: "Quality", to: "/quality" },
  { label: "Certifications", to: "/certifications" },
  { label: "Exports", to: "/exports" },
  { label: "Sustainability", to: "/sustainability" },
  { label: "Insights", to: "/blog" },
  { label: "Careers", to: "/careers" },
  { label: "Contact", to: "/contact" },
];

export const IMG = {
  heroCleanroom: "https://images.unsplash.com/photo-1748002388689-c62b45d5c28b?crop=entropy&cs=srgb&fm=jpg&w=1800&q=85",
  machinery: "https://images.unsplash.com/photo-1741900587348-72fb67190bee?crop=entropy&cs=srgb&fm=jpg&w=1600&q=85",
  cleanroomOp: "https://images.unsplash.com/photo-1745420052704-f70b1d30c8b7?crop=entropy&cs=srgb&fm=jpg&w=1600&q=85",
  productionLine: "https://images.unsplash.com/photo-1745420052527-a75fcc6aba58?crop=entropy&cs=srgb&fm=jpg&w=1600&q=85",
  facility: "https://images.unsplash.com/photo-1771531072574-af6ed6b954c0?crop=entropy&cs=srgb&fm=jpg&w=1600&q=85",
  foilClose: "https://images.unsplash.com/photo-1617565085177-76528740191d?crop=entropy&cs=srgb&fm=jpg&w=1400&q=85",
  foilRoll: "https://images.unsplash.com/photo-1617565084935-4e63d2a1b241?crop=entropy&cs=srgb&fm=jpg&w=1400&q=85",
  lab: "https://images.unsplash.com/photo-1732690233982-1d4567384ea1?crop=entropy&cs=srgb&fm=jpg&w=1400&q=85",
  qa: "https://images.unsplash.com/photo-1669707041081-dd4d51943041?crop=entropy&cs=srgb&fm=jpg&w=1400&q=85",
  containers: "https://images.unsplash.com/photo-1606964212858-c215029db704?crop=entropy&cs=srgb&fm=jpg&w=1600&q=85",
  shipping: "https://images.unsplash.com/photo-1606185540834-d6e7483ee1a4?crop=entropy&cs=srgb&fm=jpg&w=1600&q=85",
};

export const TRUST_METRICS = [
  { value: "27+", label: "Years of Manufacturing Excellence", caption: "Established 1998" },
  { value: "42", label: "Export Markets", caption: "Across 5 continents" },
  { value: "12.4B", label: "Foil Units Produced Annually", caption: "Across 6 production lines" },
  { value: "320+", label: "Pharmaceutical Clients", caption: "Including top-50 global pharma" },
];

export const PRODUCTS = [
  {
    slug: "aluminium-blister-foil",
    name: "Aluminium Blister Foil",
    category: "Primary Packaging",
    tagline: "Hard-temper PTP foils for high-speed blister lines.",
    description:
      "Pharmaceutical-grade hard-temper aluminium foil engineered for press-through-pack (PTP) blister applications. Manufactured from 99.3% pure aluminium, primer-coated and heat-seal lacquered for compatibility with PVC, PVDC and Aclar blister forming films.",
    image: "https://images.unsplash.com/photo-1617565085177-76528740191d?crop=entropy&cs=srgb&fm=jpg&w=1400&q=85",
    applications: ["Tablets & capsules", "Effervescent units", "Lozenges", "Veterinary dosage forms"],
    benefits: [
      "Excellent moisture & oxygen barrier",
      "Print-ready primer coating",
      "Compatible with 350+ ppm seal temperatures",
      "BIS, USP <661>, EU 10/2011 compliant",
    ],
    specs: [
      { k: "Thickness", v: "20 – 30 µm" },
      { k: "Width range", v: "80 – 1000 mm" },
      { k: "Core ID", v: "76 mm / 152 mm" },
      { k: "Hard temper", v: "H18 / H19" },
      { k: "Heat seal lacquer", v: "5 – 8 gsm" },
      { k: "Primer", v: "PVC / PVDC compatible" },
    ],
  },
  {
    slug: "strip-pack-foil",
    name: "Strip Pack Foil",
    category: "Primary Packaging",
    tagline: "4-side seal strip packaging with superior barrier.",
    description:
      "Soft-temper aluminium strip foil with both-side heat-seal lacquer, engineered for 4-side seal strip packaging machines. Ideal for moisture-sensitive tablets and capsules requiring extended shelf life.",
    image: "https://images.unsplash.com/photo-1617565084935-4e63d2a1b241?crop=entropy&cs=srgb&fm=jpg&w=1400&q=85",
    applications: ["Hygroscopic tablets", "Sachets", "Single-dose units"],
    benefits: ["Both-side heat seal", "High puncture resistance", "Excellent dead-fold", "Reverse printable"],
    specs: [
      { k: "Thickness", v: "20 – 40 µm" },
      { k: "Temper", v: "Soft (O)" },
      { k: "Both-side lacquer", v: "4 – 6 gsm each" },
      { k: "Width", v: "80 – 800 mm" },
    ],
  },
  {
    slug: "tropical-foil",
    name: "Tropical Blister Foil (Cold-Form)",
    category: "Barrier Packaging",
    tagline: "Triple-laminate cold-formable foil for tropical climates.",
    description:
      "OPA/Aluminium/PVC cold-form laminate providing near-absolute barrier against moisture, oxygen and light. Engineered for tropical and high-humidity markets including ASEAN, MENA, LATAM and Sub-Saharan Africa.",
    image: "https://images.unsplash.com/photo-1745420052527-a75fcc6aba58?crop=entropy&cs=srgb&fm=jpg&w=1400&q=85",
    applications: ["Hygroscopic APIs", "Tropical export markets", "Long shelf-life formulations"],
    benefits: ["Near-zero WVTR", "Light-proof barrier", "Deep-draw cold formable", "OPA/Alu/PVC structure"],
    specs: [
      { k: "Structure", v: "OPA 25 / Alu 45 / PVC 60" },
      { k: "WVTR", v: "<0.01 g/m²/24h" },
      { k: "OTR", v: "<0.001 cc/m²/24h" },
      { k: "Width", v: "150 – 850 mm" },
    ],
  },
  {
    slug: "alu-alu-foil",
    name: "Alu-Alu Cold-Form Foil",
    category: "Barrier Packaging",
    tagline: "Premium cold-form Alu-Alu for the highest barrier requirement.",
    description:
      "Multi-layer cold-form laminate combining biaxially oriented polyamide, soft aluminium foil and PVC. Used where API stability demands the highest barrier performance.",
    image: "https://images.unsplash.com/photo-1741900587348-72fb67190bee?crop=entropy&cs=srgb&fm=jpg&w=1400&q=85",
    applications: ["High-value APIs", "Biologics", "Hormonal formulations"],
    benefits: ["Highest moisture barrier", "Tamper evident", "Print-receptive OPA", "Sharp deep-draw"],
    specs: [
      { k: "Structure", v: "OPA / Alu / PVC" },
      { k: "Total thickness", v: "130 – 160 µm" },
      { k: "Forming depth", v: "Up to 11 mm" },
    ],
  },
  {
    slug: "child-resistant-foil",
    name: "Child Resistant Foil (CR / F1)",
    category: "Specialty Packaging",
    tagline: "Senior-friendly, child-resistant peel-push laminates.",
    description:
      "Compliant with US 16 CFR § 1700.20 and ISO 8317 standards. Peel-push and peel-only constructions available with paper-foil-polyester laminate for senior-friendly access.",
    image: "https://images.unsplash.com/photo-1606964212858-c215029db704?crop=entropy&cs=srgb&fm=jpg&w=1400&q=85",
    applications: ["Controlled substances", "Pediatric formulations", "OTC export to US/EU"],
    benefits: ["ISO 8317 / 16 CFR compliant", "Peel-push or peel-only", "Senior-friendly", "Tamper evident"],
    specs: [
      { k: "Structure", v: "Paper / PET / Alu / HSL" },
      { k: "Compliance", v: "US 16 CFR § 1700.20" },
    ],
  },
  {
    slug: "pvc-films",
    name: "Pharmaceutical PVC Films",
    category: "Forming Films",
    tagline: "Rigid PVC films calendered for blister forming.",
    description:
      "Transparent rigid PVC films optimised for thermoforming on rotary and platen blister machines. Calendered from suspension-grade resin for clarity and consistent draw.",
    image: "https://images.unsplash.com/photo-1745420052704-f70b1d30c8b7?crop=entropy&cs=srgb&fm=jpg&w=1400&q=85",
    applications: ["Standard blister forming", "Solid oral dosage"],
    benefits: ["Excellent clarity", "Uniform thickness", "Compatible with all blister machines"],
    specs: [
      { k: "Thickness", v: "200 – 350 µm" },
      { k: "Width", v: "120 – 1000 mm" },
      { k: "Colours", v: "Clear, amber, opaque white" },
    ],
  },
  {
    slug: "pvdc-films",
    name: "PVC / PVDC Coated Films",
    category: "Forming Films",
    tagline: "Barrier-coated PVC films for moisture-sensitive APIs.",
    description:
      "PVC base film coated with PVDC for enhanced barrier performance. Available in 40, 60, 90 and 120 gsm PVDC coat-weights.",
    image: "https://images.unsplash.com/photo-1748002388689-c62b45d5c28b?crop=entropy&cs=srgb&fm=jpg&w=1400&q=85",
    applications: ["Moisture-sensitive APIs", "Extended shelf life"],
    benefits: ["Tunable barrier (40-120 gsm)", "PVC clarity retained", "Heat-seal compatible"],
    specs: [
      { k: "PVC base", v: "250 µm" },
      { k: "PVDC coat", v: "40 / 60 / 90 / 120 gsm" },
    ],
  },
  {
    slug: "laminated-packaging",
    name: "Laminated Pouches & Sachets",
    category: "Secondary Packaging",
    tagline: "Multi-layer laminates for powders, granules and liquids.",
    description:
      "PET / Alu / PE and PET / MetPET / PE laminates for sachets, stickpacks and pouches. Custom structures engineered for product-contact compliance and shelf-life targets.",
    image: "https://images.unsplash.com/photo-1732690233982-1d4567384ea1?crop=entropy&cs=srgb&fm=jpg&w=1400&q=85",
    applications: ["ORS sachets", "Effervescent powders", "Liquid stickpacks"],
    benefits: ["Custom structures", "Up to 10-colour rotogravure", "FDA & EU food-contact compliant"],
    specs: [
      { k: "Structure", v: "PET / Alu / PE custom" },
      { k: "Print", v: "Up to 10-colour rotogravure" },
    ],
  },
  {
    slug: "custom-solutions",
    name: "Custom Pharmaceutical Packaging",
    category: "Engineering Services",
    tagline: "Bespoke barrier engineering for new molecules.",
    description:
      "Our R&D team partners with pharmaceutical formulators to design custom barrier structures, stability-test packaging prototypes, and qualify primary packaging under ICH Q1A stability protocols.",
    image: "https://images.unsplash.com/photo-1669707041081-dd4d51943041?crop=entropy&cs=srgb&fm=jpg&w=1400&q=85",
    applications: ["New molecule launches", "Stability studies", "Line extensions"],
    benefits: ["ICH Q1A support", "On-site formulation labs", "Rapid prototyping (10-day turnaround)"],
    specs: [
      { k: "Engagement", v: "NDA-protected R&D partnership" },
      { k: "Turnaround", v: "10 days for prototype" },
    ],
  },
];

export const INDUSTRIES = [
  {
    name: "Pharmaceutical",
    blurb: "Primary and secondary packaging for solid oral, semi-solid and liquid formulations.",
    icon: "fa-solid fa-prescription-bottle-medical",
    points: ["Branded & generic pharma", "OSD blister & strip", "Export-grade barrier"],
  },
  {
    name: "Nutraceutical",
    blurb: "Stability-engineered packaging for vitamins, minerals and probiotic formulations.",
    icon: "fa-solid fa-capsules",
    points: ["Probiotic-grade barrier", "Vitamin stability", "Stick-pack sachets"],
  },
  {
    name: "Veterinary",
    blurb: "Robust packaging for veterinary tablets, boluses, and large-animal dosage forms.",
    icon: "fa-solid fa-paw",
    points: ["Large-format blister", "Bolus packaging", "Field-durable laminates"],
  },
  {
    name: "Healthcare & OTC",
    blurb: "Consumer-friendly child-resistant and senior-friendly packs for OTC categories.",
    icon: "fa-solid fa-briefcase-medical",
    points: ["CR / SF compliant", "Retail-ready print", "Tamper-evident"],
  },
];

export const CERTS = [
  { code: "ISO 9001:2015", body: "Quality Management Systems", year: 2003 },
  { code: "ISO 15378:2017", body: "Primary Packaging Materials – GMP", year: 2011 },
  { code: "ISO 14001:2015", body: "Environmental Management", year: 2010 },
  { code: "ISO 45001:2018", body: "Occupational Health & Safety", year: 2019 },
  { code: "WHO GMP", body: "Good Manufacturing Practices", year: 2008 },
  { code: "US DMF Type III", body: "Drug Master File Filing", year: 2014 },
  { code: "FSSC 22000", body: "Food Safety (Nutraceutical)", year: 2017 },
  { code: "BRCGS Packaging", body: "AA-Grade Certification", year: 2020 },
];

export const TESTIMONIALS = [
  {
    quote:
      "PharmaFoil has been our blister foil partner across three continents. Their consistency on heat-seal performance has been a key reason we qualify them as a Tier-1 supplier.",
    name: "Dr. Anika Verma",
    role: "Head of Global Procurement",
    company: "Nordhaven Pharma, Switzerland",
  },
  {
    quote:
      "Their R&D team co-engineered a tropical foil that helped us extend shelf life from 18 to 36 months in the Nigerian market. That is the difference between a vendor and a partner.",
    name: "Marcus Adebayo",
    role: "Director, Packaging Development",
    company: "Westfield Generics, UK",
  },
  {
    quote:
      "From specification freeze to first commercial roll – 14 weeks. Few suppliers in Asia operate at this cadence with full ISO 15378 compliance.",
    name: "Hiroshi Tanaka",
    role: "Senior Manager, Supply Chain",
    company: "Toritsu Healthcare, Japan",
  },
];

export const REGIONS = [
  { region: "Europe", count: 14, examples: "UK, Germany, France, Switzerland, Italy, Spain, Netherlands" },
  { region: "North America", count: 3, examples: "USA, Canada, Mexico" },
  { region: "Latin America", count: 8, examples: "Brazil, Argentina, Colombia, Chile" },
  { region: "Africa", count: 9, examples: "Nigeria, Kenya, South Africa, Egypt, Morocco" },
  { region: "MENA", count: 6, examples: "UAE, Saudi Arabia, Jordan, Oman" },
  { region: "ASEAN", count: 2, examples: "Vietnam, Indonesia" },
];

export const BLOG_POSTS = [
  {
    slug: "wvtr-tropical-markets",
    title: "Engineering Sub-0.01 WVTR Barrier for Tropical Pharmaceutical Markets",
    excerpt:
      "How OPA/Alu/PVC cold-form laminates have become the de-facto standard for hygroscopic APIs exported to South-East Asia and Sub-Saharan Africa.",
    date: "Jan 18, 2026",
    category: "Technical",
    readTime: "8 min read",
  },
  {
    slug: "iso-15378-readiness",
    title: "ISO 15378:2017 – A Practical Readiness Framework for Packaging Manufacturers",
    excerpt:
      "Lessons from re-certification audits across four GMP packaging facilities. What auditors look for, and where most manufacturers fall short.",
    date: "Dec 22, 2025",
    category: "Compliance",
    readTime: "12 min read",
  },
  {
    slug: "sustainability-mono-material",
    title: "The Mono-Material Push: Pharmaceutical Packaging in a Circular Economy",
    excerpt:
      "Why EU and Japanese regulators are accelerating the shift to recyclable mono-material laminates, and what manufacturers must do today.",
    date: "Nov 14, 2025",
    category: "Sustainability",
    readTime: "10 min read",
  },
  {
    slug: "cold-form-deep-draw",
    title: "Pushing the Limits of Cold-Form Deep Draw – From 8 mm to 11 mm",
    excerpt:
      "A case study from our R&D lab on extending deep-draw forming depth without sacrificing pinhole integrity.",
    date: "Oct 02, 2025",
    category: "R&D",
    readTime: "7 min read",
  },
];

export const JOBS = [
  {
    title: "Senior R&D Engineer – Barrier Films",
    department: "R&D",
    location: "Vapi, Gujarat",
    type: "Full-time",
    summary:
      "Lead barrier-structure development for new cold-form laminates. Min. 8 years in pharmaceutical packaging laminates.",
  },
  {
    title: "Manager – Export Sales (LATAM)",
    department: "Sales",
    location: "Mumbai",
    type: "Full-time",
    summary:
      "Own LATAM key accounts. Pharmaceutical packaging sales experience and Spanish proficiency required.",
  },
  {
    title: "Quality Assurance Lead",
    department: "Quality",
    location: "Vapi, Gujarat",
    type: "Full-time",
    summary:
      "Lead site-level ISO 15378 and WHO GMP compliance. Min. 10 years in regulated packaging environments.",
  },
  {
    title: "Process Engineer – Rotogravure",
    department: "Production",
    location: "Vapi, Gujarat",
    type: "Full-time",
    summary:
      "Optimise rotogravure printing for laminated packaging. Min. 5 years on 8+ colour gravure lines.",
  },
];

export const TIMELINE = [
  { year: "1998", title: "Founded in Vapi", text: "Started as a single-line aluminium foil converter for domestic pharma." },
  { year: "2003", title: "ISO 9001 Certified", text: "First quality management certification, beginning of regulated supply." },
  { year: "2008", title: "WHO GMP Compliance", text: "Plant upgrade to WHO GMP-compliant primary packaging facility." },
  { year: "2011", title: "ISO 15378 Certified", text: "First Indian PTP foil manufacturer in our cluster to achieve ISO 15378." },
  { year: "2014", title: "US DMF Type III Filed", text: "Unlocked US-bound supply for blister foil and cold-form laminates." },
  { year: "2019", title: "Cold-Form Line 2 Commissioned", text: "Capacity doubled with second OPA/Alu/PVC cold-form lamination line." },
  { year: "2023", title: "Sustainability Initiative", text: "Launched mono-material R&D programme and 1.2 MW rooftop solar." },
  { year: "2026", title: "Global Expansion", text: "42 export markets across 5 continents. New EU technical office in Lisbon." },
];

export const MANUFACTURING_STATS = [
  { label: "Production lines", value: "6" },
  { label: "Plant area", value: "180,000 sq.ft." },
  { label: "Cleanroom area", value: "32,000 sq.ft." },
  { label: "Class 100,000 zones", value: "ISO 8" },
  { label: "Annual capacity – PTP foil", value: "8,400 MT" },
  { label: "Annual capacity – Cold form", value: "4,200 MT" },
];

export const PARTNERS = [
  "NORDHAVEN PHARMA",
  "WESTFIELD GENERICS",
  "TORITSU HEALTHCARE",
  "MERIDIAN LABS",
  "ATLANTIC BIOSCIENCES",
  "KAIROS THERAPEUTICS",
  "VERDANT PHARMA",
  "ORION FORMULATIONS",
  "HELIOS BIOLOGICS",
  "AURUM HEALTHCARE",
  "SENTINEL PHARMA",
  "PARAGON GENERICS",
];

export const ENGINEER_STEPS = [
  {
    n: "01",
    title: "Specify",
    text: "Submit your stability targets, dosage form and target markets. Our R&D desk responds within 16 hours with a barrier proposal and laminate structure.",
    detail: ["Barrier modelling", "ICH Q1A protocol", "Substrate selection"],
  },
  {
    n: "02",
    title: "Prototype",
    text: "We produce a 100 m sample reel against your spec for stability evaluation. Average prototype turnaround: 10 working days.",
    detail: ["10-day turnaround", "100 m sample reel", "Pilot-scale validation"],
  },
  {
    n: "03",
    title: "Qualify",
    text: "Three-month accelerated stability data (40°C / 75%RH) and 6-month real-time data are returned with COA, MSDS and ICH Q1A reports.",
    detail: ["Accelerated stability", "ICH Q1A reports", "Migration testing"],
  },
  {
    n: "04",
    title: "Commercialise",
    text: "First commercial reel ships within 14 weeks of spec freeze – under full ISO 15378 batch documentation and country-specific regulatory pack.",
    detail: ["14-week launch", "Batch documentation", "Regulatory dossiers"],
  },
];

export const QA_TESTS = [
  { t: "Substrate Inspection", d: "Incoming foil thickness, temper, surface finish and pinhole density per AQL sampling.", i: "fa-solid fa-magnifying-glass-chart" },
  { t: "WVTR / OTR Testing", d: "Mocon Permatran-W and Ox-Tran systems for moisture and oxygen barrier validation.", i: "fa-solid fa-droplet" },
  { t: "Heat Seal Strength", d: "Instron 5944 tensile testing at multiple seal temperatures and dwell times.", i: "fa-solid fa-fire" },
  { t: "Migration Studies", d: "USP <661>, EU 10/2011 and ICH Q3D migration testing in dedicated analytical lab.", i: "fa-solid fa-flask" },
  { t: "Print Adhesion & COF", d: "Tape test, scratch test and coefficient-of-friction measurement on every print run.", i: "fa-solid fa-print" },
  { t: "Stability Testing", d: "ICH Q1A long-term and accelerated stability chambers at 25°C/60%RH and 40°C/75%RH.", i: "fa-solid fa-temperature-half" },
];

export const SUSTAINABILITY_INIT = [
  { t: "Mono-Material R&D", d: "Developing recyclable PE-based mono-material laminates for EU and Japanese markets.", i: "fa-solid fa-recycle" },
  { t: "Solar Power", d: "1.2 MW rooftop solar array generates 34% of plant energy needs.", i: "fa-solid fa-solar-panel" },
  { t: "Zero Liquid Discharge", d: "Closed-loop water recycling. Zero industrial effluent discharge since 2021.", i: "fa-solid fa-droplet-slash" },
  { t: "Solventless Lamination", d: "70% of our laminates are now produced via solventless processes, eliminating VOC emissions.", i: "fa-solid fa-wind" },
  { t: "Aluminium Recycling", d: "100% of post-industrial aluminium scrap returned to upstream smelters.", i: "fa-solid fa-rotate" },
  { t: "Carbon Disclosure", d: "Annual reporting under CDP framework since 2022. Scope 1 + 2 verified by KPMG.", i: "fa-solid fa-chart-line" },
];

export const MACHINES = [
  { name: "Rotogravure Printing", spec: "Up to 10 colours · 350 mpm", make: "Bobst NovaRS 4002" },
  { name: "Solvent-less Lamination", spec: "1400 mm web · 400 mpm", make: "Nordmeccanica Super Combi" },
  { name: "Cold-Form Lamination", spec: "OPA / Alu / PVC dry-bond", make: "Comexi Nexus L20000" },
  { name: "Slitting & Rewinding", spec: "Tension-controlled · 600 mpm", make: "Atlas Titan SR1100" },
  { name: "Dry Lamination", spec: "Solvent-based · 350 mpm", make: "Uflex Vega Plus" },
  { name: "100% Inspection", spec: "Camera-based defect rejection", make: "BST eltromat ProInspector" },
];
