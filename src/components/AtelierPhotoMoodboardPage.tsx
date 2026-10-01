import React, { useState, useRef } from 'react';
import { Sparkles, ChevronLeft, ChevronRight, Plus, PenTool, Eye, ArrowDown } from 'lucide-react';
import { AtelierPalette } from '../data/colorPalettes';
import antiqueBrassAtelierImage from '../assets/images/antique_brass_atelier_palette_1790242759642.jpg';
import redThreadHandsImage from '../assets/images/red_thread_hands_1790503180613.jpg';
import pinterestThumbnailImage from '../assets/images/pinterest_thumbnail_180144053839629127.jpg';
import coutureConceptSketchImage from '../assets/images/couture_concept_sketch_1790592803430.jpg';
import { ConceptInspirationStudioModal, ConceptItem } from './ConceptInspirationStudioModal';
import { FadingSparkProjectDetailPage } from './FadingSparkProjectDetailPage';

const DEFAULT_LOOKBOOK_PAGES: ConceptItem[] = [
  {
    id: 'inspiration-1',
    category: 'INSPIRATION',
    badge: 'TEXTILE INSPIRATION',
    title: 'Crimson Drapery & Zari Silk',
    subtitle: 'Noble velvet textures, reflections and classic drapery',
    description: 'A sensory study of the deep folds of crimson silk and the subtle gleam of golden zari thread, the sculptural starting point for the Fading Spark collection.',
    image: pinterestThumbnailImage
  },
  {
    id: 'concept-1',
    category: 'CONCEPT',
    badge: 'CONCEPT & NARRATIVE',
    title: 'The Thread of Fate (Akai Ito)',
    subtitle: 'A poetic connection between the atelier’s vision and the hand cut',
    description: 'A metaphor of the scarlet thread that guides every needle and hand stitch, symbolizing the enduring bond between the woman, the raw material and timeless creation.',
    image: redThreadHandsImage
  },
  {
    id: 'illustration-1',
    category: 'ILLUSTRATION',
    badge: 'HAUTE COUTURE ILLUSTRATION',
    title: 'Haute Couture Croquis: Fading Spark Gown',
    subtitle: 'A study of silhouette, drape and cut on parchment paper',
    description: 'A hand-drawn editorial illustration in India ink and crimson watercolor, detailing the flowing train, the bodice structure and the raised embroidery.',
    image: coutureConceptSketchImage
  },
  {
    id: 'materiality-1',
    category: 'MATERIALITY',
    badge: 'MATERIALITY & PATINA',
    title: 'Antique Bronze Patina & DMC Threads',
    subtitle: 'An alchemy of mineral pigments and botanical embroidery skeins',
    description: 'A composition of fine trims, historic atelier hardware and French silk skeins dyed in red wine, ochre and aged gold.',
    image: antiqueBrassAtelierImage
  }
];

interface AtelierPhotoMoodboardPageProps {
  activePalette: AtelierPalette;
  isProjectDetailOpen: boolean;
  onProjectDetailOpenChange: (isOpen: boolean) => void;
  onOpenAbhisarika?: () => void;
  onOpenColorModal?: () => void;
  onOpenInquiry?: () => void;
}

export const AtelierPhotoMoodboardPage: React.FC<AtelierPhotoMoodboardPageProps> = ({
  activePalette,
  isProjectDetailOpen,
  onProjectDetailOpenChange,
  onOpenAbhisarika,
  onOpenColorModal,
  onOpenInquiry
}) => {
  const [currentPageIndex, setCurrentPageIndex] = useState<number>(0);
  const [imageLoaded, setImageLoaded] = useState<boolean>(true);
  const [isStudioOpen, setIsStudioOpen] = useState(false);
  const [lookbookItems, setLookbookItems] = useState<ConceptItem[]>(() => {
    try {
      const cached = localStorage.getItem('shatma_lookbook_items');
      if (cached) {
        const parsed = JSON.parse(cached);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (e) {
      console.error('Failed to load cached lookbook items', e);
    }
    return DEFAULT_LOOKBOOK_PAGES;
  });

  const archContainerRef = useRef<HTMLDivElement>(null);

  const safeIndex = currentPageIndex >= lookbookItems.length ? 0 : currentPageIndex;
  const currentPage = lookbookItems[safeIndex] || DEFAULT_LOOKBOOK_PAGES[0];

  const handleNextPage = () => {
    setImageLoaded(false);
    setTimeout(() => {
      setCurrentPageIndex((prev) => (prev + 1) % lookbookItems.length);
      setImageLoaded(true);
    }, 120);
  };

  const handlePrevPage = () => {
    setImageLoaded(false);
    setTimeout(() => {
      setCurrentPageIndex((prev) => (prev - 1 + lookbookItems.length) % lookbookItems.length);
      setImageLoaded(true);
    }, 120);
  };

  const handleAddLookbookItem = (newItem: ConceptItem) => {
    setLookbookItems((prev) => {
      const updated = [newItem, ...prev];
      try {
        localStorage.setItem('shatma_lookbook_items', JSON.stringify(updated));
      } catch (e) {
        console.error('Failed to save lookbook items', e);
      }
      return updated;
    });
    setCurrentPageIndex(0);
  };

  const handleDeleteLookbookItem = (id: string) => {
    setLookbookItems((prev) => {
      const updated = prev.filter((item) => item.id !== id);
      try {
        localStorage.setItem('shatma_lookbook_items', JSON.stringify(updated));
      } catch (e) {
        console.error('Failed to save lookbook items', e);
      }
      return updated;
    });
    setCurrentPageIndex(0);
  };

  return (
    <section
      id="color-inspiration-page"
      className="relative min-h-screen py-20 px-4 sm:px-8 md:px-12 border-b border-[var(--color-mocha,#DECFC0)]/60 overflow-hidden selection:bg-[var(--color-accent,#540D21)] selection:text-[var(--color-base,#FAF6EE)]"
    >
      {/* Background Volumetric Radiant Aura Bloom */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[650px] bg-gradient-radial from-[var(--color-accent,#540D21)]/22 via-[var(--color-gold,#851737)]/12 to-transparent blur-[90px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Centered Editorial Header Plaque */}
        <div className="text-center mb-8 space-y-3 max-w-xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-4 py-1 bg-gradient-to-r from-[var(--color-accent,#540D21)] via-[var(--color-gold,#851737)] to-[var(--color-bronze,#A63856)] border border-[var(--color-accent,#540D21)] shadow-md text-[var(--color-base,#FAF6EE)] text-[10px] font-mono uppercase tracking-[0.25em] font-black">
            <Sparkles className="w-3 h-3" />
            <span>CHROMATIC ALCHEMY</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl tracking-wide text-[#540D21] leading-none py-2 select-none flex items-center justify-center flex-wrap gap-x-4">
            <span className="inline-flex items-baseline">
              <span className="font-['Monsieur_La_Doulaise','Mea_Culpa','Pinyon_Script',cursive] text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-normal leading-none text-[#540D21] inline-block pr-1 transform -translate-y-1 select-none">
                F
              </span>
              <span className="font-['Great_Vibes','Pinyon_Script','Alex_Brush',cursive] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-wide">
                ading
              </span>
            </span>
            <span className="inline-flex items-baseline">
              <span className="font-['Monsieur_La_Doulaise','Mea_Culpa','Pinyon_Script',cursive] text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-normal leading-none text-[#540D21] inline-block pr-0.5 transform -translate-y-1 select-none">
                S
              </span>
              <span className="font-['Great_Vibes','Pinyon_Script','Alex_Brush',cursive] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-wide">
                park
              </span>
            </span>
          </h2>
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-[var(--color-accent,#540D21)] font-bold">
            {activePalette.tagline}
          </div>
          {onOpenAbhisarika && (
            <button
              type="button"
              id="abhisarai-ka-trigger"
              onClick={onOpenAbhisarika}
              aria-label="Open ABHISARAIKA details below"
              className="inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-[0.2em] font-bold text-[#540D21] transition-colors hover:text-[#851737] cursor-pointer"
            >
              <span>ABHISARAIKA</span>
              <ArrowDown className="h-3 w-3" />
            </button>
          )}
        </div>

        {/* Center Arched Window - Clickable Interactive Lookbook Showcase */}
        <div className="w-full flex flex-col items-center mb-14">
          <div ref={archContainerRef} className="relative group/arch w-full max-w-md mx-auto">
            {/* Action Bar Above Arch: Dossier Counter + Add Concept / Illustration Button */}
            <div className="flex items-center justify-between gap-2 mb-2.5 px-1">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#540D21] font-bold">
                  {String(safeIndex + 1).padStart(2, '0')} / {String(lookbookItems.length).padStart(2, '0')}
                </span>
                <span className="text-[9px] font-mono px-2 py-0.5 bg-[#540D21]/10 text-[#540D21] rounded-xs border border-[#540D21]/20 font-bold uppercase">
                  {currentPage.category}
                </span>
              </div>

              {/* Clickable Icon Button to Open New Page for Concept Note, Inspiration, Illustration */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsStudioOpen(true);
                }}
                className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#540D21] hover:bg-[#6E112B] text-white text-[10px] sm:text-xs font-mono uppercase tracking-wider font-bold rounded-xs shadow-md transition-all cursor-pointer hover:scale-105 active:scale-95"
                title="Open the page to add a new concept, inspiration or illustration"
              >
                <Plus className="w-3.5 h-3.5 text-amber-200" />
                <span>+ New Concept / Illustration</span>
              </button>
            </div>

            {/* Clickable Arch Frame - Opens Project Details Page */}
            <div
              role="button"
              tabIndex={0}
              onClick={() => onProjectDetailOpenChange(true)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onProjectDetailOpenChange(true);
                } else if (e.key === 'ArrowRight') {
                  e.preventDefault();
                  handleNextPage();
                } else if (e.key === 'ArrowLeft') {
                  e.preventDefault();
                  handlePrevPage();
                }
              }}
              title="Click to open this project’s detail page (Fading Spark)"
              aria-label={`View project details: ${currentPage.title}. Click to open the full page.`}
              className="aspect-[3/4.2] w-full rounded-t-full border-2 border-[var(--color-accent,#540D21)] p-2 bg-[var(--color-panel,#EFE6D5)] shadow-[0_25px_60px_rgba(84,13,33,0.25)] overflow-hidden relative cursor-pointer select-none transition-transform duration-300 hover:shadow-[0_30px_70px_rgba(84,13,33,0.35)] hover:scale-[1.01]"
            >
              <div className="w-full h-full rounded-t-full overflow-hidden relative bg-black flex items-center justify-center">
                {/* Pure unobstructed photograph / illustration without text overlays on image */}
                <img
                  src={currentPage.image}
                  alt={`${currentPage.title} - ${currentPage.category}`}
                  className={`w-full h-full object-cover transition-all duration-500 select-none group-hover/arch:scale-105 cursor-pointer ${
                    imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                  }`}
                  referrerPolicy="no-referrer"
                />

                {/* Elegant Hover Overlay: Prompt to View Full Project Details */}
                <div className="absolute inset-0 bg-black/35 opacity-0 group-hover/arch:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none z-10">
                  <div className="px-4 py-2 bg-[#540D21]/95 text-[#FAF6EE] border border-amber-200/50 rounded-xs shadow-2xl flex items-center gap-2 transform translate-y-2 group-hover/arch:translate-y-0 transition-transform duration-300">
                    <Eye className="w-4 h-4 text-amber-300" />
                    <span className="text-[11px] font-mono uppercase tracking-widest font-bold">
                      View Project Details
                    </span>
                  </div>
                </div>

                {/* Subtle side navigation arrows that reveal smoothly on hover */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrevPage();
                  }}
                  aria-label="Previous page"
                  title="Previous page"
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 hover:bg-[#540D21] text-white border border-white/30 backdrop-blur-md flex items-center justify-center opacity-0 group-hover/arch:opacity-100 transition-all duration-200 cursor-pointer shadow-lg hover:scale-110"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNextPage();
                  }}
                  aria-label="Next page"
                  title="Next page"
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 hover:bg-[#540D21] text-white border border-white/30 backdrop-blur-md flex items-center justify-center opacity-0 group-hover/arch:opacity-100 transition-all duration-200 cursor-pointer shadow-lg hover:scale-110"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Floating Creative Studio Action Icon directly on the Arch */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsStudioOpen(true);
                  }}
                  className="absolute bottom-3 right-3 p-2 rounded-full bg-black/75 hover:bg-[#540D21] text-amber-200 hover:text-white border border-white/30 backdrop-blur-md shadow-xl transition-all duration-200 cursor-pointer hover:scale-110 flex items-center gap-1.5 z-20"
                  title="Open the page to add a new concept, inspiration or illustration"
                  aria-label="Open the studio to add a concept"
                >
                  <PenTool className="w-3.5 h-3.5" />
                  <span className="text-[9px] font-mono uppercase tracking-wider text-white pr-1">
                    + New
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Atelier Concept, Inspiration & Illustration Studio Modal */}
      <ConceptInspirationStudioModal
        isOpen={isStudioOpen}
        onClose={() => setIsStudioOpen(false)}
        items={lookbookItems}
        onAddItem={handleAddLookbookItem}
        onDeleteItem={handleDeleteLookbookItem}
        onSelectActiveItem={(item, index) => setCurrentPageIndex(index)}
        activePalette={activePalette}
      />

      {/* Dedicated Project Details Page for Fading Spark */}
      <FadingSparkProjectDetailPage
        isOpen={isProjectDetailOpen}
        onClose={() => onProjectDetailOpenChange(false)}
        onOpenInquiry={onOpenInquiry}
        activePalette={activePalette}
        additionalConceptItems={lookbookItems}
      />
    </section>
  );
};
