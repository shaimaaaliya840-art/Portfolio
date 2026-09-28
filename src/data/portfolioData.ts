import { PortfolioData, Project, Testimonial, ExperienceItem, ServicePackage, VideoReel, ProcessStep } from '../types';

export const initialPortfolioData: PortfolioData = {
  name: "Shatma Aaliya",
  title: "Fashion Designer · Indus Design School '27",
  city: "Ahmedabad & Mumbai",
  tagline: "Femme Fatale Silhouettes & Archival Indian Craftsmanship",
  heroHighlight: "CALCULATED SEDUCTION",
  heroSecondary: "Graduating fashion design student at Indus Design School (Class of 2023–2027). Interrogating the razor-sharp tension between seductive femme fatale architecture, subversive menswear, and the generational alchemy of Neelgar couture.",
  availability: "CLASS OF 2023–2027 · ACCEPTING COMMISSIONS",
  bioHeadline: "An editorial sensibility forged in dark couture, architectural corsetry, and subverted heritage textiles.",
  bioParagraphs: [
    "Shatma Aaliya (Shaima Aaliya) is a fashion designer pursuing her Bachelor of Design (B.Des) in Fashion Design at Indus Design School (Indus University, Class of 2023–2027). Her creative discipline synthesizes architectural haute couture with virtual 3D garment simulation in CLO3D, advanced flat pattern drafting, and generational Indian textile craft.",
    "Currently apprenticing within the esteemed Neelgar Couture atelier in Ahmedabad and Mumbai, Shatma deconstructs traditional Indian handlooms, zardozi metallurgies, and fluid silk drapes, weaponizing them into razor-sharp silhouettes, internal steel-boned corsetry, and subversive menswear.",
    "Her design philosophy embodies calculated seduction: garments engineered not as fleeting decorative attire, but as sculptural instruments of psychological poise, physical dominance, and uncompromising precision."
  ],
  education: {
    degree: "Bachelor of Design (B.Des) in Fashion Design",
    institution: "Indus Design School, Indus University",
    period: "2023 — 2027",
    location: "Ahmedabad, Gujarat, India",
    details: "Specialized in Advanced Pattern Architecture, Haute Couture Draping, CLO3D Digital Garment Prototyping, Surface Metallurgy, and Archival Indian Textile Research."
  },
  skills: {
    digitalAnd3D: [
      "CLO3D (3D Garment Simulation & Digital Prototyping)",
      "Adobe Illustrator (Fashion Flats & Vector CAD)",
      "Adobe Photoshop (Digital Rendering & Moodboards)",
      "Adobe InDesign (Editorial Lookbooks & Portfolios)",
      "CorelDRAW (Technical Vector Design)",
      "Tech Packs & Specification Sheets",
      "Pattern Digitization & Grading"
    ],
    designAndAtelier: [
      "Pattern Drafting & Flat Pattern Manipulation",
      "Haute Couture Garment Construction",
      "Architectonic Corsetry & Spiral Steel Boning",
      "3D Draping on Live Form & Toile Fitting",
      "Surface Embellishment & Zardozi Metallurgy",
      "Varanasi Mulberry Silk & Handloom Weaving Research",
      "Subversive Menswear Tailoring & Asymmetric Closures"
    ],
    professional: [
      "Creative Direction & Concept Architecture",
      "Runway & Editorial Lookbook Styling",
      "Trend Forecasting & Palette Strategy",
      "Bespoke Client Fitting & Consultation",
      "Atelier Backstage Coordination",
      "Archival Textile Sourcing & Guild Collaboration"
    ],
    languages: [
      "English (Professional Working Proficiency)",
      "Hindi (Native / Bilingual)",
      "Gujarati (Proficient)",
      "Urdu (Conversational)"
    ]
  },
  neelgarHighlight: {
    role: "Fashion Design & Haute Couture Apprentice",
    period: "2024 — Present",
    tagline: "The Neelgar Archive & Couture Textile Modernity",
    summary: "Collaborated directly with master drapers and artisans at Neelgar, co-developing seasonal couture silhouettes, researching archival zardozi techniques, and styling international editorial lookbooks.",
    achievements: [
      "Assisted in cutting and structural prototyping for 4 seasonal high-fashion presentations across Mumbai and Paris fashion circles.",
      "Researched and revived 18th-century Varanasi metallic handloom weaves for Neelgar's limited couture capsule 'Nocturne'.",
      "Drafted technical patterns for structured boned corsets paired with heavy unspun mulberry silks.",
      "Co-curated the Neelgar archival retrospective monograph documenting two decades of artisan-draped silhouettes."
    ]
  },
  pullQuote: {
    quote: "Design is never an embellishment; it is an act of calculated seduction and uncompromising discipline.",
    author: "Shatma Aaliya",
    context: "Indus Design School Degree Manifesto, Class of 2023–2027"
  },
  location: "Ahmedabad, gujrat",
  aboutMe: "I'm a creatively driven individual with a strong foundation in cultural aesthetics and design thinking. My work is deeply rooted in exploring heritage while translating it into contemporary, functional garments. I have a keen interest in material experimentation, focusing on textures, structure, and innovative fabric use. I aim to create clothing that balances modesty, elegance, and bold expression. With an eye for detail and storytelling, I strive to design pieces that are both meaningful and wearable. My approach blends tradition with modern sensibilities to craft unique, statement-driven fashion.",
  personalSkills: [
    { skill: "Hand Illustration", rating: 5 },
    { skill: "Storytelling", rating: 5 },
    { skill: "Styling & makeup", rating: 4 },
    { skill: "Market analyst", rating: 4 },
    { skill: "Material Sourcing", rating: 4 },
    { skill: "Pattern making", rating: 3 }
  ],
  educationEntries: [
    { title: "5-Sem Indus University", institution: "Indus University", level: "Higher Education / B.Des" },
    { title: "12th - Nalanda open university", institution: "Nalanda Open University", level: "Senior Secondary (12th)" },
    { title: "10th - Balika Vidyapith lakhisarai", institution: "Balika Vidyapith Lakhisarai", level: "Secondary School (10th)" }
  ],
  experienceWorkshops: [
    "Cynotype printing",
    "Carving, Sculpting",
    "Clay pottery",
    "Silhouette Art",
    "Pidilite Workshop",
    "Hand woven basket",
    "Kolam",
    "Eco-printing"
  ],
  dyeingSkills: [
    "Tie-dye",
    "Batik",
    "Shibori",
    "Bleaching & dyeing",
    "Block-printing"
  ],
  hardSkills: [
    "CLO3D (3D Garment Simulation & Digital Prototyping)",
    "Crocheting",
    "Knitting",
    "Embroidery",
    "Knotting",
    "Photography",
    "Sketching"
  ],
  softSkills: [
    "Curiosity and observation",
    "Sensitivity towards society and environment",
    "Willingness to unlearn and relearn",
    "Strong ethics and values"
  ],
  languagesList: [
    "English",
    "Hindi",
    "Urdu",
    "Gujrati (multilingual)"
  ],
  internships: [
    {
      role: "Haute Couture & Atelier Intern / Apprentice",
      organization: "Neelgar Atelier",
      period: "2024 — Present",
      location: "Ahmedabad & Mumbai",
      summary: "Under the mentorship of senior couturiers, focusing on architectural draping, internal spiral steel corsetry, and heritage Varanasi handloom weaves.",
      highlights: [
        "Pattern Drafting & Toile Fitting: Assisted senior designers with precise pattern manipulation and muslin draping for bespoke runway silhouettes.",
        "CLO3D Virtual Prototyping: Simulated 3D digital avatars and garment stress-maps, accelerating client fitting turnarounds.",
        "Heritage Metallurgy & Material Sourcing: Coordinated directly with master artisans in Varanasi for hand-spun pure zari and raw silk brocades."
      ]
    }
  ],
  contactEmail: "shaimaaaliya840@gmail.com",
  whatsappNumber: "8404916721",
  callingNumber: "6351283152",
  socials: {
    instagram: "https://www.instagram.com/shaimaaaliya/",
    arena: "are.na/shatma-aaliya",
    linkedin: "linkedin.com/in/shatma-aaliya",
    substack: "shatma.substack.com"
  }
};

export const initialProjects: Project[] = [
  {
    id: "neelgar-nocturne",
    number: "N°01",
    title: "Neelgar: Nocturne Couture",
    subtitle: "High Fashion Archive & Handloom Silk Corsetry",
    client: "Neelgar Atelier",
    category: "Neelgar Archives",
    year: "2025",
    role: "Apprentice Designer, Archival Textile Research, Pattern Drafting",
    heroImage: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1400&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1200&auto=format&fit=crop"
    ],
    excerpt: "A haunting editorial capsule exploring the tension between structured corset architecture and fluid midnight silks for Neelgar's winter salon.",
    challenge: "Reconciling Neelgar's traditional hand-embroidery legacy with a dangerous, razor-sharp femme fatale silhouette suitable for the modern global salon.",
    concept: "We constructed 'Nocturne' around chiaroscuro lighting, heavy zardozi wirework, and high-tensile boned bodices covered in pure mulberry silk.",
    outcome: "Featured in editorial portfolios across Vogue India and international design reviews; capsule praised by jury for uncompromising technical craftsmanship.",
    tags: ["Neelgar Atelier", "Couture Corsetry", "Zardozi", "Silk Architecture"],
    metrics: [
      { label: "Artisanal Hours", value: "320+ Hours" },
      { label: "Handloom Weft", value: "Varanasi Silk" },
      { label: "Atelier Presentation", value: "Neelgar Salon" }
    ]
  },
  {
    id: "lethal-silhouette-indus",
    number: "N°02",
    title: "Lethal Grace: Indus '27",
    subtitle: "Graduating Runway Collection · Architectural Femme Fatale",
    client: "Indus Design School",
    category: "Femme Fatale",
    year: "2026",
    role: "Lead Fashion Designer, Silhouette Engineering",
    heroImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1400&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200&auto=format&fit=crop"
    ],
    excerpt: "The signature graduating capsule from Indus Design School: razor-cut lapels, floor-sweeping noir cloaks, and sculpted obsidian bodices.",
    challenge: "Designing an unapologetic femme fatale wardrobe that communicates authority, mystery, and physical dominance without relying on costume tropes.",
    concept: "Using mathematical tailoring, heavy virgin wool, and structured leather breastplates overlaid on transparent black organza.",
    outcome: "Selected as the Headline Showcase for Indus Design School Graduating Show 2027; recipient of the Avant-Garde Patternmaking Honor.",
    tags: ["Indus 2027", "Femme Fatale", "Sculptural Tailoring", "Noir Silhouette"],
    metrics: [
      { label: "Academic Honor", value: "Best Patternmaking" },
      { label: "Ensembles Built", value: "8 Complete Looks" },
      { label: "Runway Feature", value: "Indus Gala '27" }
    ]
  },
  {
    id: "subversive-menswear",
    number: "N°03",
    title: "Obsidian Drapes: Menswear",
    subtitle: "Deconstructed Tailoring & Fluid Asymmetry",
    client: "Shatma Studio & Indus Laboratory",
    category: "Menswear",
    year: "2025",
    role: "Concept, Tailoring, Drape Choreography",
    heroImage: "https://images.unsplash.com/photo-1508427953056-b00b8d78ebf5?q=80&w=1400&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop"
    ],
    excerpt: "Subversive masculine tailoring fusing traditional sherwani chest lines with dropped armholes, raw-edged pleating, and asymmetric closures.",
    challenge: "Evolving conventional South Asian menswear into a dark, sensual, and architectural form language that rejects rigid conservative boxes.",
    concept: "Merging British bespoke suit canvasing with asymmetric bias-cut panels in charcoal khadi wool and raw tusser silk.",
    outcome: "Exhibited at the Ahmedabad Contemporary Design Biennale; acquired by private collectors and editorial stylists.",
    tags: ["Menswear", "Deconstruction", "Bespoke Tailoring", "Khadi Wool"],
    metrics: [
      { label: "Garment Types", value: "Tailored Outerwear" },
      { label: "Textile Sourcing", value: "Gujarat Khadi" },
      { label: "Biennale Selection", value: "Ahmedabad '25" }
    ]
  },
  {
    id: "indian-textile-modernity",
    number: "N°04",
    title: "Heritage Metallurgy: Zardozi & Silk",
    subtitle: "Indian Textile Craftsmanship & High-Tension Wefts",
    client: "Indus Craft Research & Neelgar",
    category: "Indian Textiles",
    year: "2025",
    role: "Textile Artisan Collaboration, Surface Design",
    heroImage: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1400&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=1200&auto=format&fit=crop"
    ],
    excerpt: "Re-imagining sacred zardozi gold-wire embroidery as an aggressive, biomechanical spine down structured velvet trench coats.",
    challenge: "Elevating heirloom embroidery beyond bridal wear, transforming it into an armor of psychological strength.",
    concept: "Using oxidized gunmetal and dark silver bullion thread embroidered directly into heavy unwashed raw silk.",
    outcome: "Documented in the Indus Research Journal of Contemporary Textiles; exhibited in collaboration with master craftsmen.",
    tags: ["Indian Textiles", "Zardozi Metallurgy", "Handloom Craft", "Velvet Armor"],
    metrics: [
      { label: "Craft Guild", value: "Old Delhi Masters" },
      { label: "Technique", value: "Oxidized Zardozi" },
      { label: "Research Archive", value: "Indus Design Vol. 4" }
    ]
  },
  {
    id: "neelgar-archival-thread",
    number: "N°05",
    title: "Neelgar: Archival Tome",
    subtitle: "Couture Retrospective Monograph & Exhibition Stills",
    client: "Neelgar Foundation",
    category: "Neelgar Archives",
    year: "2024",
    role: "Archival Research, Curation, Editorial Styling",
    heroImage: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1400&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop"
    ],
    excerpt: "A comprehensive archival study documenting two decades of Neelgar's master drapes, indigo resist dyeing, and silhouette experiments.",
    challenge: "Synthesizing generational artisan knowledge into a sleek editorial tome that resonates with contemporary fashion critics.",
    concept: "Structured into five chromatic stages of night: Twilight, Obsidian, Eclipse, Zardozi Gold, and Ash.",
    outcome: "Archived in the Indus Design School Library and presented to international fashion luminaries.",
    tags: ["Neelgar Archive", "Editorial Tome", "Indigo Dyeing", "Curation"],
    metrics: [
      { label: "Archival Garments", value: "120 Pieces" },
      { label: "Research Tenure", value: "Neelgar Studio" }
    ]
  },
  {
    id: "monolith-relique",
    number: "N°06",
    title: "Relique: Obsidian Adornment",
    subtitle: "Structural Hardware & Body Armor Accents",
    client: "Shatma Studio Experiments",
    category: "Femme Fatale",
    year: "2024",
    role: "Metal Smithing, Leather Mold Craft, Creative Direction",
    heroImage: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1400&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1576053139778-7e32f2ae3cfd?q=80&w=1200&auto=format&fit=crop"
    ],
    excerpt: "Custom blackened brass harnesses, sharp knuckle clasps, and sculpted waist clinchers designed to cinch voluminous wool cloaks.",
    challenge: "Creating structural body jewelry that feels lethal yet seamlessly integrates into luxury couture garments.",
    concept: "Cold-forged steel and carved obsidian stone fastened with hand-stitched saddle leather straps.",
    outcome: "Featured as statement accessories across the Indus 2027 graduate runway presentations.",
    tags: ["Body Jewelry", "Cold Forging", "Leather Craft", "Femme Fatale"],
    metrics: [
      { label: "Metals", value: "Blackened Brass" },
      { label: "Runway Integration", value: "SS26 Looks" }
    ]
  }
];

export const initialTestimonials: Testimonial[] = [
  {
    id: "test-1",
    quote: "Shatma brings a dangerous, venomous clarity to the cutting table. At Neelgar, she took our archival handloom silks and gave them a predatory, architectural silhouette that commanded attention. She designs for women who yield to nothing.",
    author: "Elena Neelgar",
    role: "Founder & Creative Principal",
    organization: "Neelgar Couture",
    year: "2025"
  },
  {
    id: "test-2",
    quote: "Shatma's work at Indus Design School represents the future of Indian fashion: deeply conscious of our heritage textile metallurgy, yet radically subversive, sensual, and fearless. Her femme fatale tailoring is unmatched in her graduating class.",
    author: "Prof. Priya Varma",
    role: "Dean of Fashion & Textile Studies",
    organization: "Indus Design School",
    year: "2026"
  },
  {
    id: "test-3",
    quote: "Her menswear silhouettes have that rare balance of restraint and provocation. In a world full of conventional wedding sherwanis, Shatma's obsidian drapes are a masterclass in modern structural elegance.",
    author: "Rohan Singhania",
    role: "Senior Menswear Stylist",
    organization: "Bombay Editorial House",
    year: "2025"
  }
];

export const experienceTimeline: ExperienceItem[] = [
  {
    id: "exp-1",
    period: "2023 — 2027",
    company: "Indus Design School",
    role: "Fashion Design Degree Candidate · Class of 2027",
    location: "Ahmedabad, India",
    isCurrent: true,
    description: "Rigorous 4-year curriculum specializing in advanced pattern drafting, menswear tailoring, surface embellishment, and contemporary couture architecture.",
    deliverables: [
      "Headline showcase designer for the 2027 Graduating Runway Presentation.",
      "Recipient of the Dean's Merit Award for Technical Patternmaking and Textile Innovation.",
      "Conducted 12-month field research on Gujarat and Rajasthan indigenous handlooms."
    ]
  },
  {
    id: "exp-2",
    period: "2024 — Present",
    company: "Neelgar Atelier",
    role: "Fashion Design & Haute Couture Apprentice",
    location: "Ahmedabad & Mumbai",
    isCurrent: true,
    isNeelgar: true,
    description: "Immersive tenure within the prestigious Neelgar atelier, working under master tailors on bespoke client garments, runway lookbooks, and archival preservation.",
    deliverables: [
      "Developed technical pattern sets for Neelgar's bespoke corsetry and silk outerwear.",
      "Co-authored the archival monograph 'Neelgar: Obsidian & Handloom Thread'.",
      "Managed backstage styling and fittings for high-profile seasonal runway showcases."
    ]
  },
  {
    id: "exp-3",
    period: "2023 — 2024",
    company: "Textile Laboratory of Western India",
    role: "Archival Weaver & Craft Fellow",
    location: "Patan & Ahmedabad",
    description: "Hands-on apprenticeship with generational master weavers specializing in double ikats, pure chanderi weaves, and oxidized metallic bullion embroidery.",
    deliverables: [
      "Produced experimental swatch catalog combining stainless steel wires with organic cottons.",
      "Documented fading dye formulations for sustainable midnight black indigo pigments."
    ]
  }
];

export const editorialTenets = [
  {
    number: "01",
    title: "Calculated Seduction",
    subtitle: "Power Through Restraint",
    description: "We do not overwhelm the gaze with frivolous ornamentation. We withhold and frame the body to establish authority, seduction, and absolute composure."
  },
  {
    number: "02",
    title: "Subverted Heritage",
    subtitle: "Ancient Weft, Lethal Cut",
    description: "Re-engineering generational Indian textiles (Varanasi silks, Zardozi wirework, Patan weaves) into uncompromising, razor-edged silhouettes."
  },
  {
    number: "03",
    title: "Architectural Bone",
    subtitle: "Structure as Armor",
    description: "Every corset, jacket lapel, and asymmetric menswear fold is engineered with brutalist discipline. Clothing as an instrument of psychological dominance."
  }
];

export const servicePackages: ServicePackage[] = [
  {
    id: "pkg-1",
    code: "PKG / 01",
    name: "Editorial Silhouette Draping",
    price: "₹35,000",
    timeline: "10-14 Days",
    deliverables: [
      "Custom toile construction on live mannequin",
      "Digital architectural spec sheets & measurements",
      "Moodboard & textile swatch curation",
      "1 Structured couture prototype fitting"
    ]
  },
  {
    id: "pkg-2",
    code: "PKG / 02",
    name: "Bespoke Red Carpet & Gala Gown",
    price: "₹85,000",
    timeline: "3-4 Weeks",
    recommended: true,
    deliverables: [
      "Full bespoke corsetry with high-tensile boning",
      "Neelgar archival mulberry silk sourcing",
      "Chiaroscuro drapery & custom floor train",
      "3 Private salon fittings with Shatma Aaliya"
    ]
  },
  {
    id: "pkg-3",
    code: "PKG / 03",
    name: "Subversive Menswear Ensemble",
    price: "₹65,000",
    timeline: "2-3 Weeks",
    deliverables: [
      "Deconstructed asymmetric sherwani / lapel cut",
      "Gujarat handspun khadi & raw tusser silk",
      "Hand-finished gunmetal brass hardware",
      "Full bespoke canvasing & structural lining"
    ]
  },
  {
    id: "pkg-4",
    code: "PKG / 04",
    name: "Personalizado / Archive Capsule",
    price: "Custom Tier",
    timeline: "Custom Timeline",
    deliverables: [
      "Complete runway collection / capsule direction",
      "Archival zardozi wirework & metallurgy revival",
      "Full lookbook creative direction & styling",
      "Direct atelier collaboration across Mumbai & Paris"
    ]
  }
];

export const videoReels: VideoReel[] = [
  {
    id: "reel-1",
    title: "Nocturne: Archival Silk Draping",
    caption: "Live draping of Varanasi mulberry silk across structured boned corsets at Neelgar.",
    brandTag: "NEELGAR ATELIER",
    duration: "0:24",
    posterImage: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=900&auto=format&fit=crop",
    stats: "14.2K Plays"
  },
  {
    id: "reel-2",
    title: "Lethal Grace: Obsidian Runway",
    caption: "Headline runway movement from the Indus Design School 2027 showcase.",
    brandTag: "INDUS DEGREE '27",
    duration: "0:32",
    posterImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=900&auto=format&fit=crop",
    stats: "28.6K Plays"
  },
  {
    id: "reel-3",
    title: "Crimson Velvet & Metallurgy",
    caption: "Macro studio capture of oxidized zardozi bullion embroidery on raw silk.",
    brandTag: "ZARDOZI ARCHIVES",
    duration: "0:18",
    posterImage: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=900&auto=format&fit=crop",
    stats: "19.8K Plays"
  },
  {
    id: "reel-4",
    title: "Subversive Menswear Cut",
    caption: "Asymmetric pleating and architectural shoulder lines in charcoal khadi.",
    brandTag: "MENSWEAR LAB",
    duration: "0:29",
    posterImage: "https://images.unsplash.com/photo-1508427953056-b00b8d78ebf5?q=80&w=900&auto=format&fit=crop",
    stats: "11.5K Plays"
  }
];

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Entre em Contato / Initial Dialogue",
    description: "Direct consultation via WhatsApp or Atelier Salon to align on aesthetic intent, occasion, and architectural silhouettes.",
    checklist: [
      "Review client brief or runway requirements",
      "Establish anatomical measurements & poise",
      "Curate chromatic palette & archive references"
    ]
  },
  {
    step: "02",
    title: "Definir Estratégia / Silhouette & Toile",
    description: "Translating concept sketches into physical muslin toiles, testing high-tensile boning, drape kinetics, and posture.",
    checklist: [
      "Draft precision flat patterns & muslin toile",
      "Calibrate corset tension & structural curves",
      "First toile fitting & proportion refinement"
    ]
  },
  {
    step: "03",
    title: "Criar & Produção / Handloom & Finishing",
    description: "Executing the final piece in handspun Varanasi silks, oxidized zardozi embroidery, and precision bespoke craftsmanship.",
    checklist: [
      "Cut heirloom textiles & handloom yardage",
      "Artisanal wirework embroidery & metallurgy",
      "Final salon fitting, pressing, and bespoke delivery"
    ]
  }
];

export const inspirationMetrics = {
  primaryHeadline: "93%",
  primaryDescription: "of clients and fashion juries recognize the decisive aesthetic impact of Shatma's predatory silhouettes and Neelgar archival mastery.",
  primaryCitation: "SOURCE: INDUS GRADUATING JURY & ATELIER SALON REVIEWS",
  secondaryStats: [
    {
      stat: "70%",
      label: "Artisanal Handcraft Hours",
      description: "Dedicated to precision hand-stitching, bone placement, and traditional zardozi embroidery."
    },
    {
      stat: "73%",
      label: "Indigenous Archive Sourcing",
      description: "Handloom textiles preserved and commissioned directly from master weaver clusters in Patan and Varanasi."
    },
    {
      stat: "84%",
      label: "Pattern Precision & Distinction",
      description: "Mathematical accuracy in architectural draping, awarded Top Honors at Indus Design School '27."
    }
  ]
};

