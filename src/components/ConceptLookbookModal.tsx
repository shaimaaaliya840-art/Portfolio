import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, Sparkles, BookOpen, Layers, Eye, Palette, Scissors } from 'lucide-react';
import { PortfolioData } from '../types';

interface ConceptLookbookModalProps {
  isOpen: boolean;
  onClose: () => void;
  portfolioData: PortfolioData;
  onOpenInquiry?: () => void;
  initialSlideIndex?: number;
}

interface SlideItem {
  id: string;
  tabLabel: string;
  title: string;
  subtitle: string;
  badge: string;
  category: string;
  heroImage: string;
  supportingImages: { url: string; caption: string }[];
  description: string;
  bulletPoints: { title: string; detail: string }[];
  palette: { name: string; hex: string; note: string }[];
  quote?: string;
}

export const ConceptLookbookModal: React.FC<ConceptLookbookModalProps> = ({
  isOpen,
  onClose,
  portfolioData,
  onOpenInquiry,
  initialSlideIndex = 0
}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(initialSlideIndex);

  useEffect(() => {
    if (isOpen && initialSlideIndex !== undefined) {
      setCurrentSlideIndex(initialSlideIndex);
    }
  }, [isOpen, initialSlideIndex]);

  const slides: SlideItem[] = [
    {
      id: 'about-designer',
      tabLabel: '01. ABOUT DESIGNER',
      badge: 'FASHION DESIGNER RESUME',
      category: 'BIOGRAPHY & MULTIDISCIPLINARY ATELIER',
      title: `${portfolioData.name || 'Shatma Aaliya'} — Fashion Designer`,
      subtitle: `${portfolioData.location || 'Ahmedabad, gujrat'} • Tel: ${portfolioData.callingNumber || '6351283152'} • ${portfolioData.contactEmail || 'shaimaaaliya840@gmail.com'}`,
      heroImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=900&auto=format&fit=crop',
      supportingImages: [
        {
          url: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=800&auto=format&fit=crop',
          caption: 'CLO3D Virtual Prototyping & Draping Muslin'
        },
        {
          url: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop',
          caption: 'Tie-Dye, Shibori & Textile Alchemy'
        }
      ],
      description:
        portfolioData.aboutMe ||
        "I'm a creatively driven individual with a strong foundation in cultural aesthetics and design thinking. My work is deeply rooted in exploring heritage while translating it into contemporary, functional garments. I have a keen interest in material experimentation, focusing on textures, structure, and innovative fabric use. I aim to create clothing that balances modesty, elegance, and bold expression. With an eye for detail and storytelling, I strive to design pieces that are both meaningful and wearable. My approach blends tradition with modern sensibilities to craft unique, statement-driven fashion.",
      bulletPoints: [
        {
          title: "Education & Academic Roots",
          detail: '5-Sem Indus University (Fashion Design), 12th Nalanda Open University, and 10th Balika Vidyapith Lakhisarai.'
        },
        {
          title: 'Hard Skills & CLO3D Simulation',
          detail: 'Proficient in CLO3D (3D Garment Prototyping), Crocheting, Knitting, Embroidery, Knotting, Photography, and Sketching.'
        },
        {
          title: 'Dyeing Skills & Hands-On Workshops',
          detail: 'Mastering Tie-dye, Batik, Shibori, Bleaching & Dyeing, and Block-printing. Workshop tenure in Cynotype printing, Carving/Sculpting, Clay pottery, Silhouette Art, Pidilite Workshop, Hand woven basket, Kolam, and Eco-printing.'
        },
        {
          title: 'Personal Proficiencies & Values',
          detail: 'High ratings in Hand Illustration, Storytelling, Styling & Makeup, Market Analysis, and Material Sourcing. Guided by curiosity, social sensitivity, and multilingual fluency in English, Hindi, Urdu, and Gujrati.'
        }
      ],
      palette: [
        { name: 'Smoked Obsidian', hex: '#261925', note: 'Primary virgin wool base' },
        { name: 'Incandescent Gold', hex: '#F5D061', note: 'Hand-beaten bullion wire' },
        { name: 'Smoked Bronze', hex: '#3E2F16', note: 'Silk organza & satin lining' },
        { name: 'Amber Luster', hex: '#D4A02A', note: 'Hand-spun zari weft' }
      ],
      quote:
        '“I aim to create clothing that balances modesty, elegance, and bold expression — blending tradition with modern sensibilities.” — Shatma Aaliya'
    },
    {
      id: 'concept-note',
      tabLabel: '02. CONCEPT NOTE',
      badge: 'ARCHIVAL MANIFESTO',
      category: 'COLLECTION THESIS',
      title: 'The Fading Spark & Calculated Seduction',
      subtitle: 'Exploration of transient luminescence, structured decay, and the psychological armor of haute couture.',
      heroImage: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200&auto=format&fit=crop',
      supportingImages: [
        {
          url: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop',
          caption: 'Heirloom Zardozi & Structural Weft Detail'
        },
        {
          url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop',
          caption: 'Chiaroscuro Silhouette & Corset Bones'
        }
      ],
      description:
        "The collection interrogates that fragile, incandescent split-second before flame turns to ash — 'The Fading Spark'. In an era of disposable digital trends, this body of work uses internal steel-boned architecture, heavy raw silks, and subverted South Asian metallurgies to construct garments that endure like relic armor.",
      bulletPoints: [
        {
          title: 'Architectonic Boning',
          detail: 'Internal spiral steel boning with anatomical waist reduction, engineered for effortless posture and razor-sharp authority.'
        },
        {
          title: 'Neelgar Craft Synergy',
          detail: 'Collaborative development with master drapers at Neelgar atelier, reinterpreting 18th-century Varanasi weaves.'
        },
        {
          title: 'Subversive Menswear & Bridal',
          detail: 'Transcending gender boundaries with raw-edged khadi wool coats, asymmetric closure lapels, and liquid noir drapery.'
        }
      ],
      palette: [
        { name: 'Smoked Obsidian', hex: '#0C0A07', note: 'Primary wool & velvet base' },
        { name: 'Smoked Bronze', hex: '#3E2F16', note: 'Silk organza & lining' },
        { name: 'Incandescent Gold', hex: '#F5D061', note: 'Hand-beaten zardozi metallic wire' },
        { name: 'Bone Ivory', hex: '#FBF7EE', note: 'Unspun raw mulberry silk' }
      ],
      quote:
        '“Design is never an embellishment; it is an act of calculated seduction and uncompromising discipline.” — Shatma Aaliya'
    },
    {
      id: 'theme-board',
      tabLabel: '03. THEME BOARD',
      badge: 'VISUAL INSPIRATION',
      category: 'MATERIAL & SENSORY RESEARCH',
      title: 'Embers, Metallurgy & Architectural Anatomy',
      subtitle: 'Tactile intersections between industrial metallurgy, raw silk looms, and gothic chiaroscuro.',
      heroImage: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop',
      supportingImages: [
        {
          url: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=800&auto=format&fit=crop',
          caption: 'Anatomical Corsetry Understructure'
        },
        {
          url: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=800&auto=format&fit=crop',
          caption: 'Raw Tusser Silk & Biomechanical Drapes'
        }
      ],
      description:
        "The theme revolves around the duality of fragility and aggression. Inspired by molten gold cooling into blackened metal, the research juxtaposes delicate hand-spun muslins with oxidized silver bullion cords, creating high-contrast surface textures that capture natural and stage spotlighting with dramatic depth.",
      bulletPoints: [
        {
          title: 'Tactile Dichotomy',
          detail: 'Rough, hand-loomed Gujarat khadi wool confronted against liquid duchess satin and shimmering Varanasi brocade.'
        },
        {
          title: 'Sculptural Drapery',
          detail: 'Choreographed folds developed directly on living dress forms rather than flat 2D drafting, preserving organic movement.'
        },
        {
          title: 'Shadow Play & Chiaroscuro',
          detail: 'Deep monochromatic gradients engineered to absorb ambient light while reflecting intense sparks along embroidered ridges.'
        }
      ],
      palette: [
        { name: 'Charcoal Ash', hex: '#1F1B16', note: 'Virgin wool twill' },
        { name: 'Golden Amber', hex: '#D4A02A', note: 'Dyed silk satin' },
        { name: 'Incandescent Spark', hex: '#F5D061', note: 'Reflective bullion accents' },
        { name: 'Smoked Bronze', hex: '#3E2F16', note: 'Oxidized metal findings' }
      ]
    },
    {
      id: 'lookbook',
      tabLabel: '04. BOARD LOOKBOOK',
      badge: 'RUNWAY LOOKS',
      category: 'EDITORIAL ARCHIVE',
      title: 'Silhouettes N°01 — N°08 Lookbook',
      subtitle: 'Complete lookbook presentations from the runway debut and atelier bespoke archive.',
      heroImage: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1200&auto=format&fit=crop',
      supportingImages: [
        {
          url: 'https://images.unsplash.com/photo-1508427953056-b00b8d78ebf5?q=80&w=800&auto=format&fit=crop',
          caption: 'Look 03: Asymmetric Obsidian Menswear Coat'
        },
        {
          url: 'https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?q=80&w=800&auto=format&fit=crop',
          caption: 'Look 05: Boned Gala Corset with Floor Veil'
        }
      ],
      description:
        "Each ensemble in the lookbook represents a distinct chapter in the narrative of calculated power. From floor-grazing overcoats cut with surgical precision to corsets requiring over 300 artisan hand-hours of zardozi embroidery, this selection illustrates ready-to-wear runway drama alongside red-carpet bespoke commissions.",
      bulletPoints: [
        {
          title: 'Look 01 — Nocturne Bodice',
          detail: 'Structured cuirass corset in mulberry silk with exposed spine boning and hand-stitched antique bullion wire.'
        },
        {
          title: 'Look 02 — The Obsidian Mantle',
          detail: 'Subversive tailored trench featuring high-collared lapels, architectural shoulder cantilevers, and deep side pleats.'
        },
        {
          title: 'Look 04 — Varanasi Gala Silhouette',
          detail: 'Gala ensemble coupling metallic Varanasi brocade with floor-length sheer noir train and sculpted hip silhouette.'
        }
      ],
      palette: [
        { name: 'Midnight Obsidian', hex: '#0C0A07', note: 'Heavy virgin wool' },
        { name: 'Smoked Amber', hex: '#2A1F10', note: 'Raw silk warp' },
        { name: 'Warm Parchment', hex: '#FBF7EE', note: 'Muslin prototype tone' },
        { name: 'Gilded Zari', hex: '#F5D061', note: 'Authentic bullion thread' }
      ]
    }
  ];

  // Keyboard controls
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') setCurrentSlideIndex((prev) => (prev + 1) % slides.length);
      if (e.key === 'ArrowLeft') setCurrentSlideIndex((prev) => (prev - 1 + slides.length) % slides.length);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, slides.length, onClose]);

  if (!isOpen) return null;

  const currentSlide = slides[currentSlideIndex];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 backdrop-blur-md p-3 sm:p-6 md:p-10 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-6xl max-h-[92vh] flex flex-col bg-[#FAF6EE] border-2 border-[#DECFC0] text-[#241217] shadow-2xl overflow-hidden"
        >
          {/* Top Bar Navigation & Tabs */}
          <div className="flex flex-wrap items-center justify-between border-b border-[#DECFC0] px-5 sm:px-8 py-4 bg-[#F3EBDD] gap-4">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#540D21] shadow-[0_0_8px_#540D21]" />
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#540D21] font-bold">
                  {portfolioData.name || 'SHATMA AALIYA'}
                </span>
                <span className="text-[#DECFC0] mx-2 text-xs">/</span>
                <span className="text-[0.6875rem] font-mono tracking-widest text-[#851737] uppercase">
                  ATELIER LOOKBOOK DOSSIER
                </span>
              </div>
            </div>

            {/* Slide Navigation Tabs */}
            <div className="flex items-center gap-1 sm:gap-2 bg-[#EFE6D5] p-1 border border-[#DECFC0]">
              {slides.map((slide, idx) => (
                <button
                  key={slide.id}
                  onClick={() => setCurrentSlideIndex(idx)}
                  className={`px-3 sm:px-4 py-1.5 text-[0.625rem] sm:text-xs font-mono uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                    currentSlideIndex === idx
                      ? 'bg-[#540D21] text-[#FAF6EE] font-bold shadow-[0_0_10px_rgba(84,13,33,0.3)]'
                      : 'text-[#241217]/70 hover:text-[#540D21] hover:bg-[#540D21]'
                  }`}
                >
                  {slide.tabLabel}
                </button>
              ))}
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-1.5 bg-[#EFE6D5] hover:bg-[#540D21] hover:text-[#FAF6EE] text-[#241217] transition-colors border border-[#DECFC0] cursor-pointer"
              aria-label="Close dossier"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Main Slide Content Area */}
          <div className="flex-1 overflow-y-auto p-5 sm:p-8 md:p-10 space-y-8 custom-scrollbar">
            {/* Slide Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#DECFC0] pb-6">
              <div className="space-y-2 max-w-2xl">
                <div className="flex items-center gap-3">
                  <span className="px-2.5 py-0.5 text-[0.625rem] font-mono tracking-widest uppercase bg-[#540D21] text-[#FAF6EE] font-bold">
                    {currentSlide.badge}
                  </span>
                  <span className="text-[0.6875rem] font-mono tracking-widest uppercase text-[#851737]">
                    {currentSlide.category}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-black tracking-tight uppercase text-[#241217]">
                  {currentSlide.title}
                </h2>
                <p className="text-xs sm:text-sm text-[#6B545C] font-editorial italic">
                  {currentSlide.subtitle}
                </p>
              </div>

              {/* Slide Counter & Arrows */}
              <div className="flex items-center gap-3 shrink-0">
                <button
                  onClick={() => setCurrentSlideIndex((prev) => (prev - 1 + slides.length) % slides.length)}
                  className="p-2 bg-[#EFE6D5] hover:bg-[#540D21] hover:text-[#FAF6EE] text-[#241217] border border-[#DECFC0] transition-colors cursor-pointer"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="font-mono text-xs tracking-widest text-[#540D21] font-bold">
                  0{currentSlideIndex + 1} / 0{slides.length}
                </span>
                <button
                  onClick={() => setCurrentSlideIndex((prev) => (prev + 1) % slides.length)}
                  className="p-2 bg-[#EFE6D5] hover:bg-[#540D21] hover:text-[#FAF6EE] text-[#241217] border border-[#DECFC0] transition-colors cursor-pointer"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Visual Collage Grid: Arched Main Photo + Supporting Details */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* Arched Key Visual */}
              <div className="lg:col-span-5 flex flex-col items-center">
                <div className="relative group w-full max-w-sm border-2 border-[#540D21] p-2 bg-[#F3EBDD] shadow-[0_20px_40px_rgba(84,13,33,0.18)] overflow-hidden">
                  <div className="aspect-[3/4.2] w-full overflow-hidden relative bg-[#FAF6EE]">
                    <img
                      src={currentSlide.heroImage}
                      alt={currentSlide.title}
                      className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#FAF6EE]/75 via-transparent to-transparent opacity-60" />
                    
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[0.625rem] font-mono tracking-widest text-[#540D21] uppercase font-bold">
                      <span>KEY SILHOUETTE</span>
                      <span>FIG. 0{currentSlideIndex + 1}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Supporting Details & Research Column */}
              <div className="lg:col-span-7 flex flex-col gap-6">
                {/* Editorial Description */}
                <div className="bg-[#EFE6D5] p-5 border border-[#DECFC0] space-y-4">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#540D21] font-bold">
                    <BookOpen className="w-4 h-4 text-[#540D21]" />
                    <span>Editorial Synthesis</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#241217]/90 leading-relaxed font-editorial">
                    {currentSlide.description}
                  </p>
                  {currentSlide.quote && (
                    <blockquote className="border-l-2 border-[#540D21] pl-4 py-1 text-xs sm:text-sm font-editorial italic text-[#540D21]">
                      {currentSlide.quote}
                    </blockquote>
                  )}
                </div>

                {/* 2 Supporting Micro Imagery Shots */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {currentSlide.supportingImages.map((img, i) => (
                    <div
                      key={i}
                      className="bg-[#EFE6D5] border border-[#DECFC0] p-2 group overflow-hidden"
                    >
                      <div className="aspect-[4/3] overflow-hidden bg-[#FAF6EE] mb-2 relative">
                        <img
                          src={img.url}
                          alt={img.caption}
                          className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="text-[0.625rem] font-mono tracking-wider text-[#540D21] uppercase font-bold truncate">
                        {img.caption}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Technical Bullet Points */}
                <div className="space-y-3">
                  <div className="text-xs font-mono uppercase tracking-widest text-[#540D21] font-bold flex items-center gap-2">
                    <Scissors className="w-3.5 h-3.5 text-[#540D21]" />
                    <span>Atelier Specifications</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {currentSlide.bulletPoints.map((bp, i) => (
                      <div
                        key={i}
                        className="bg-[#EFE6D5] border border-[#DECFC0] p-3 space-y-1"
                      >
                        <h4 className="text-xs font-serif uppercase tracking-wider text-[#540D21] font-bold">
                          {bp.title}
                        </h4>
                        <p className="text-[0.6875rem] text-[#6B545C] leading-relaxed font-editorial">
                          {bp.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Material & Color Swatches */}
                <div className="space-y-2 pt-2 border-t border-[#DECFC0]">
                  <div className="text-xs font-mono uppercase tracking-widest text-[#540D21] font-bold flex items-center gap-2">
                    <Palette className="w-3.5 h-3.5 text-[#540D21]" />
                    <span>Material &amp; Pigment Formulation</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {currentSlide.palette.map((swatch, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2.5 p-2 bg-[#EFE6D5] border border-[#DECFC0]"
                      >
                        <span
                          className="w-5 h-5 border border-[#DECFC0] shrink-0"
                          style={{ backgroundColor: swatch.hex }}
                        />
                        <div className="overflow-hidden">
                          <div className="text-[0.625rem] font-mono font-bold text-[#241217] truncate">
                            {swatch.name}
                          </div>
                          <div className="text-[0.625rem] font-mono text-[#851737] truncate">
                            {swatch.hex}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Dossier Action Footer */}
          <div className="flex flex-wrap items-center justify-between border-t border-[#DECFC0] px-6 sm:px-8 py-4 bg-[#F3EBDD]">
            <div className="text-xs font-mono text-[#851737] tracking-widest uppercase">
              INDUS DESIGN SCHOOL '27 · NEELGAR COUTURE ARCHIVE
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={() => {
                  onClose();
                  if (onOpenInquiry) onOpenInquiry();
                }}
                className="px-6 py-2.5 bg-[#540D21] hover:bg-[#851737] text-xs font-mono uppercase tracking-[0.2em] text-[#FAF6EE] transition-all shadow-[0_0_15px_rgba(84,13,33,0.3)] flex items-center gap-2 font-bold cursor-pointer"
              >
                <span>Request Lookbook &amp; Commission</span>
                <Sparkles className="w-3.5 h-3.5 text-[#FAF6EE]" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
