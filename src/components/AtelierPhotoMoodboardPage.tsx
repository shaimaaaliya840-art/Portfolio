import React, { useState, useRef } from 'react';
import { Sparkles, Palette, Check, ChevronLeft, ChevronRight, ExternalLink, Plus, PenTool, Layers, Eye } from 'lucide-react';
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
  const [copiedHex, setCopiedHex] = useState<string | null>(null);
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

  const handleCopy = (hex: string, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => {
      setCopiedHex(null);
    }, 1800);
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

        {/* High-Fashion Moodboard, Swatch Strip & Materiality Grid */}
        <div className="w-full flex flex-col gap-8">
          {/* Active Swatches Live Inspection Ribbon */}
          <div className="p-4 sm:p-5 bg-[var(--color-panel,#EFE6D5)] border border-[var(--color-mocha,#DECFC0)] relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-[var(--color-mocha,#DECFC0)] pb-3 mb-4">
              <div className="flex items-center gap-2">
                <Palette className="w-3.5 h-3.5 text-[var(--color-accent,#540D21)]" />
                <span className="text-xs font-mono uppercase tracking-widest text-[var(--color-text,#241217)] font-bold">
                  Extração Cromática do Atelier ({activePalette.name})
                </span>
              </div>
              <span className="text-[10px] font-mono text-[var(--color-accent,#540D21)]">
                Clique para copiar HEX
              </span>
            </div>

            {/* 5 Distinct Color Cards with Copy Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
              {activePalette.swatches.slice(0, 5).map((swatch, idx) => (
                <button
                  key={idx}
                  onClick={(e) => handleCopy(swatch.hex, e)}
                  className="p-2.5 bg-[var(--color-surface,#F3EBDD)] border border-[var(--color-mocha,#DECFC0)] hover:border-[var(--color-accent,#540D21)] transition-all duration-200 text-left flex flex-col justify-between group cursor-pointer"
                >
                  <div
                    className="h-10 w-full rounded-xs mb-2 border border-black/30 shadow-inner group-hover:scale-105 transition-transform relative flex items-center justify-center"
                    style={{ backgroundColor: swatch.hex }}
                  >
                    {copiedHex === swatch.hex && (
                      <span className="px-1.5 py-0.5 bg-black/90 text-[9px] font-mono text-green-400 font-bold rounded-xs flex items-center gap-1">
                        <Check className="w-2.5 h-2.5" />
                        OK
                      </span>
                    )}
                  </div>
                  <div className="text-[11px] font-serif font-black text-[var(--color-text,#241217)] truncate">
                    {swatch.name}
                  </div>
                  <div className="text-[9px] font-mono text-[var(--color-accent,#540D21)] font-bold">
                    {swatch.hex}
                  </div>
                  <div className="text-[8px] font-mono text-[var(--color-text-muted,#D2BDCF)] truncate mt-1">
                    {swatch.dmc.split(' ')[0]} {swatch.dmc.split(' ')[1]}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Dual Polaroids: Antique Gramophone Still Life & Neelgar Weft Research */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Polaroid 1 (Antique Gramophone Still Life) */}
            <div className="bg-[var(--color-panel,#EFE6D5)] p-3 border-2 border-[var(--color-bronze,#A63856)] hover:border-[var(--color-accent,#540D21)] shadow-md relative group transition-colors">
              <div className="aspect-[4/3] overflow-hidden bg-[var(--color-base,#FAF6EE)] mb-3 relative border border-[var(--color-mocha,#DECFC0)]">
                <img
                  src={antiqueBrassAtelierImage}
                  alt="Antique Embossed Brass & DMC Silk Thread Palettes"
                  className="w-full h-full object-cover contrast-115 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2 right-2 px-2 py-0.5 bg-[var(--color-base,#FAF6EE)] text-[var(--color-accent,#540D21)] text-[9px] font-mono uppercase border border-[var(--color-accent,#540D21)] font-bold">
                  DMC 3821 / 783
                </div>
              </div>
              <div className="flex items-center justify-between text-[11px] font-mono text-[var(--color-accent,#540D21)]">
                <span className="font-bold">PATINA DE GRAMOFONE ANTIGO</span>
                <span className="text-[var(--color-text,#241217)] font-serif italic text-xs">Estudo de Brilho</span>
              </div>
            </div>

            {/* Polaroid 2 (Handloom Weft & Texture Research) */}
            <div className="bg-[var(--color-panel,#EFE6D5)] p-3 border-2 border-[var(--color-bronze,#A63856)] hover:border-[var(--color-accent,#540D21)] shadow-md relative group transition-colors">
              <div className="aspect-[4/3] overflow-hidden bg-[var(--color-base,#FAF6EE)] mb-3 relative border border-[var(--color-mocha,#DECFC0)]">
                <img
                  src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop"
                  alt="Zardozi and Silk Wefts"
                  className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2 right-2 px-2 py-0.5 bg-[var(--color-base,#FAF6EE)] text-[var(--color-accent,#540D21)] text-[9px] font-mono uppercase border border-[var(--color-accent,#540D21)] font-bold">
                  DMC 420 / 3781
                </div>
              </div>
              <div className="flex items-center justify-between text-[11px] font-mono text-[var(--color-accent,#540D21)]">
                <span className="font-bold">URDIDURA DE SEDA NEELGAR</span>
                <span className="text-[var(--color-text,#241217)] font-serif italic text-xs">Varanasi Séc. XVIII</span>
              </div>
            </div>
          </div>

          {/* Large Editorial Panoramic Strip with Script Signature Overlay */}
          <div className="relative bg-gradient-to-br from-[var(--color-accent,#540D21)] via-[var(--color-gold,#851737)] to-[var(--color-bronze,#A63856)] border-2 border-[var(--color-accent,#540D21)] p-4 shadow-[0_20px_40px_rgba(84,13,33,0.18)] group text-[var(--color-base,#FAF6EE)] overflow-hidden">
            <div className="absolute inset-1 border border-black/15 pointer-events-none" />

            <div className="aspect-[21/8] overflow-hidden bg-[var(--color-base,#FAF6EE)] relative border border-[var(--color-base,#FAF6EE)]">
              <img
                src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop"
                alt="High Fashion Editorial Runway"
                className="w-full h-full object-cover grayscale contrast-125 opacity-90 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-base,#FAF6EE)]/85 via-transparent to-[var(--color-base,#FAF6EE)]/70" />

              {/* Cursive Script Overlay */}
              <div className="absolute top-1/2 left-8 -translate-y-1/2 select-none pointer-events-none">
                <span className="font-serif italic text-5xl sm:text-7xl text-[var(--color-text,#241217)] tracking-wide drop-shadow-lg">
                  Shatma
                </span>
                <div className="text-[11px] font-mono uppercase tracking-[0.3em] text-[var(--color-accent,#540D21)] pt-1 font-bold">
                  Atelier Haute Couture · Ahmedabad
                </div>
              </div>

              <div className="absolute bottom-3 right-4 px-3 py-1 bg-[var(--color-base,#FAF6EE)] text-[var(--color-accent,#540D21)] text-[10px] font-mono uppercase tracking-widest border border-[var(--color-accent,#540D21)] font-bold">
                STUDIO SALON ARCHIVE
              </div>
            </div>

            <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <p className="font-serif italic text-[var(--color-base,#FAF6EE)] text-sm max-w-lg font-bold">
                "A cor não é mera pintura; é a própria anatomia da luz incidindo sobre sedas raras, metais batidos e silhuetas de poder absoluto."
              </p>
              <button
                onClick={onOpenColorModal}
                className="px-4 py-2 bg-[var(--color-base,#FAF6EE)] hover:bg-[#EFE6D5] text-[var(--color-accent,#540D21)] border border-[var(--color-base,#FAF6EE)] text-xs font-mono uppercase tracking-widest font-black transition-colors shrink-0 flex items-center gap-2 cursor-pointer shadow-lg"
              >
                <span>Explorar Paletas</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
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
