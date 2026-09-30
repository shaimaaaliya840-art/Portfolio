import React, { useState, useRef } from 'react';
import { Sparkles, ChevronLeft, ChevronRight, Plus, PenTool, Eye } from 'lucide-react';
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
    category: 'INSPIRAÇÃO',
    badge: 'INSPIRAÇÃO TÊXTIL',
    title: 'Draperia Carmesim & Seda Zari',
    subtitle: 'Texturas nobres de veludo, reflexos e drapeado clássico',
    description: 'Estudo sensorial das dobras profundas da seda carmesim e do brilho sutil do fio dourado zari, servindo de ponto de partida escultórico para a coleção Fading Spark.',
    image: pinterestThumbnailImage
  },
  {
    id: 'concept-1',
    category: 'CONCEITO',
    badge: 'CONCEITO & NARRATIVA',
    title: 'O Fio do Destino (Akai Ito)',
    subtitle: 'Conexão poética entre a visão do ateliê e o corte manual',
    description: 'Metáfora do fio escarlate que guia cada agulha e ponto artesanal, simbolizando a união perene entre a mulher, a matéria-prima e a criação atemporal.',
    image: redThreadHandsImage
  },
  {
    id: 'illustration-1',
    category: 'ILUSTRAÇÃO',
    badge: 'ILUSTRAÇÃO DE ALTA COSTURA',
    title: 'Croquis de Alta Costura: Vestido Fading Spark',
    subtitle: 'Estudo de silhueta, caimento e corte em papel pergaminho',
    description: 'Ilustração editorial desenhada à mão em nanquim e aquarela carmesim, detalhando a cauda esvoaçante, a estrutura do corpete e os bordados em relevo.',
    image: coutureConceptSketchImage
  },
  {
    id: 'materiality-1',
    category: 'MATERIALIDADE',
    badge: 'MATERIALIDADE & PÁTINA',
    title: 'Pátina de Bronze Antigo & Fios DMC',
    subtitle: 'Alquimia de pigmentos minerais e meadas de bordado botânico',
    description: 'Composição de aviamentos nobres, ferragens históricas de ateliê e meadas de seda francesa tingidas em tons de vinho tinto, ocre e dourado envelhecido.',
    image: antiqueBrassAtelierImage
  }
];

interface AtelierPhotoMoodboardPageProps {
  activePalette: AtelierPalette;
  onOpenColorModal?: () => void;
  onOpenInquiry?: () => void;
}

export const AtelierPhotoMoodboardPage: React.FC<AtelierPhotoMoodboardPageProps> = ({
  activePalette,
  onOpenColorModal,
  onOpenInquiry
}) => {
  const [currentPageIndex, setCurrentPageIndex] = useState<number>(0);
  const [imageLoaded, setImageLoaded] = useState<boolean>(true);
  const [isStudioOpen, setIsStudioOpen] = useState(false);
  const [isProjectDetailOpen, setIsProjectDetailOpen] = useState(false);
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
            <span>ALQUIMIA CROMÁTICA</span>
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
                title="Abrir página para adicionar novo conceito, inspiração ou ilustração"
              >
                <Plus className="w-3.5 h-3.5 text-amber-200" />
                <span>+ Novo Conceito / Ilustração</span>
              </button>
            </div>

            {/* Clickable Arch Frame - Opens Project Details Page */}
            <div
              role="button"
              tabIndex={0}
              onClick={() => setIsProjectDetailOpen(true)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setIsProjectDetailOpen(true);
                } else if (e.key === 'ArrowRight') {
                  e.preventDefault();
                  handleNextPage();
                } else if (e.key === 'ArrowLeft') {
                  e.preventDefault();
                  handlePrevPage();
                }
              }}
              title="Clique para abrir a página de detalhes deste projeto (Fading Spark)"
              aria-label={`Ver detalhes do projeto: ${currentPage.title}. Clique para abrir página completa.`}
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
                      Ver Detalhes do Projeto
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
                  aria-label="Página anterior"
                  title="Página anterior"
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
                  aria-label="Próxima página"
                  title="Próxima página"
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
                  title="Abrir página para adicionar novo conceito, inspiração ou ilustração"
                  aria-label="Abrir estúdio para adicionar conceito"
                >
                  <PenTool className="w-3.5 h-3.5" />
                  <span className="text-[9px] font-mono uppercase tracking-wider text-white pr-1">
                    + Novo
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
        onClose={() => setIsProjectDetailOpen(false)}
        onOpenInquiry={onOpenInquiry}
        activePalette={activePalette}
        additionalConceptItems={lookbookItems}
      />
    </section>
  );
};
