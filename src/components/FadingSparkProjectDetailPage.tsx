import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  ArrowLeft,
  Sparkles,
  ExternalLink,
  Layers,
  Palette,
  Scissors,
  PenTool,
  Check,
  Copy,
  Calendar,
  Award,
  ChevronRight,
  BookOpen,
  Mail,
  Eye
} from 'lucide-react';
import { AtelierPalette } from '../data/colorPalettes';
import pinterestThumbnailImage from '../assets/images/pinterest_thumbnail_180144053839629127.jpg';
import coutureConceptSketchImage from '../assets/images/couture_concept_sketch_1790592803430.jpg';
import redThreadHandsImage from '../assets/images/red_thread_hands_1790503180613.jpg';
import antiqueBrassAtelierImage from '../assets/images/antique_brass_atelier_palette_1790242759642.jpg';
import { ConceptItem } from './ConceptInspirationStudioModal';

interface FadingSparkProjectDetailPageProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenInquiry?: () => void;
  activePalette?: AtelierPalette;
  additionalConceptItems?: ConceptItem[];
}

export const FadingSparkProjectDetailPage: React.FC<FadingSparkProjectDetailPageProps> = ({
  isOpen,
  onClose,
  onOpenInquiry,
  activePalette,
  additionalConceptItems = []
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  if (!isOpen) return null;

  const galleryImages = [
    {
      url: pinterestThumbnailImage,
      caption: 'Draperia Carmesim & Seda Zari',
      tag: 'PEÇA PRINCIPAL',
      type: 'Fotografia de Alta Costura'
    },
    {
      url: coutureConceptSketchImage,
      caption: 'Croquis de Alta Costura: Silhueta & Cauda Fading Spark',
      tag: 'ILUSTRAÇÃO TÉCNICA',
      type: 'Nanquim & Aquarela'
    },
    {
      url: redThreadHandsImage,
      caption: 'O Fio Escarlate do Destino (Akai Ito)',
      tag: 'CONCEITO VISUAL',
      type: 'Ensaio Fotográfico'
    },
    {
      url: antiqueBrassAtelierImage,
      caption: 'Pátina de Bronze Antigo & Meadas DMC',
      tag: 'MATERIALIDADE',
      type: 'Estudo Têxtil'
    }
  ];

  const paletteColors = [
    { name: 'Carmine Noir', hex: '#540D21', role: 'Vinho Tinto Principal' },
    { name: 'Velvet Wine', hex: '#851737', role: 'Sombra de Veludo' },
    { name: 'Crimson Glow', hex: '#A63856', role: 'Reflexo de Seda' },
    { name: 'Parchment Silk', hex: '#EFE6D5', role: 'Base Pergaminho' },
    { name: 'Raw Ivory', hex: '#FAF6EE', role: 'Fundo Puro' }
  ];

  const handleCopyColor = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 1800);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-[#FAF6EE] text-[#241217] selection:bg-[#540D21] selection:text-[#FAF6EE]">
        {/* Fixed Header Bar */}
        <header className="sticky top-0 z-30 bg-[#FAF6EE]/95 backdrop-blur-md border-b border-[#DECFC0] px-4 sm:px-8 py-3.5 flex items-center justify-between shadow-xs">
          <button
            onClick={onClose}
            className="flex items-center gap-2 text-xs sm:text-sm font-mono uppercase tracking-wider text-[#540D21] hover:text-[#851737] font-bold group cursor-pointer transition-colors"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Voltar ao Ateliê</span>
          </button>

          <div className="flex items-center gap-3">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-500 hidden sm:inline">
              PROJETO N°05 · ALTA COSTURA
            </span>

            {onOpenInquiry && (
              <button
                onClick={() => {
                  onClose();
                  onOpenInquiry();
                }}
                className="px-3 sm:px-4 py-1.5 bg-[#540D21] hover:bg-[#6E112B] text-[#FAF6EE] text-[10px] sm:text-xs font-mono uppercase tracking-widest font-bold rounded-xs shadow-sm transition-all cursor-pointer flex items-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5 text-amber-200" />
                <span>Solicitar Informações</span>
              </button>
            )}

            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-[#EFE6D5] text-[#241217] transition-colors cursor-pointer"
              title="Fechar página do projeto"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </header>

        {/* Project Content Container */}
        <main className="max-w-6xl mx-auto px-4 sm:px-8 py-8 sm:py-12 space-y-12">
          {/* Editorial Top Plaque */}
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#540D21]/10 border border-[#540D21]/20 text-[#540D21] text-[10px] font-mono uppercase tracking-[0.25em] font-black rounded-xs">
              <Sparkles className="w-3 h-3" />
              <span>EDITORIAL HAUTE COUTURE · COLEÇÃO FADING SPARK</span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-black tracking-tight text-[#241217] leading-none">
              Fading Spark: Alquimia Carmesim
            </h1>

            <p className="text-sm sm:text-base md:text-lg font-mono text-[#540D21] uppercase tracking-wider font-semibold">
              Draperia Escultórica em Seda Zari, Corpete em Espiral de Aço & Pátina Carmesim
            </p>
          </div>

          {/* Hero Media Showcase & Thumbnail Gallery */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Main Stage Image */}
            <div className="lg:col-span-8 bg-black border-2 border-[#540D21] rounded-xs overflow-hidden shadow-2xl relative aspect-[4/5] sm:aspect-[16/11]">
              <img
                src={galleryImages[activeImageIndex].url}
                alt={galleryImages[activeImageIndex].caption}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-4 sm:p-6 text-white flex items-end justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-amber-300 font-bold block mb-1">
                    {galleryImages[activeImageIndex].tag} · {galleryImages[activeImageIndex].type}
                  </span>
                  <h3 className="font-avonia text-xl sm:text-2xl text-white">
                    {galleryImages[activeImageIndex].caption}
                  </h3>
                </div>
                <span className="text-xs font-mono text-white/70">
                  {activeImageIndex + 1} / {galleryImages.length}
                </span>
              </div>
            </div>

            {/* Thumbnail Selectors & Quick Project Specs */}
            <div className="lg:col-span-4 space-y-4">
              <div className="grid grid-cols-2 gap-2.5">
                {galleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative aspect-[3/4] rounded-xs overflow-hidden border-2 transition-all cursor-pointer ${
                      activeImageIndex === idx
                        ? 'border-[#540D21] shadow-md scale-102 ring-2 ring-[#540D21]/30'
                        : 'border-[#DECFC0] opacity-75 hover:opacity-100 hover:border-[#851737]'
                    }`}
                  >
                    <img src={img.url} alt={img.caption} className="w-full h-full object-cover" />
                    <span className="absolute bottom-1 right-1 px-1.5 py-0.5 bg-black/80 text-[8px] font-mono text-white rounded-xs">
                      0{idx + 1}
                    </span>
                  </button>
                ))}
              </div>

              {/* Quick Specification Metadata Card */}
              <div className="p-4 sm:p-5 bg-[#EFE6D5] border border-[#DECFC0] space-y-3 rounded-xs text-xs font-mono">
                <div className="border-b border-[#DECFC0] pb-2 text-[11px] font-bold text-[#540D21] uppercase tracking-wider flex items-center justify-between">
                  <span>Ficha Técnica do Projeto</span>
                  <Award className="w-3.5 h-3.5 text-[#540D21]" />
                </div>

                <div className="space-y-2 text-[#241217]">
                  <div className="flex justify-between">
                    <span className="text-neutral-500 uppercase">Estilista / Criadora:</span>
                    <span className="font-bold">Shatma Aaliya</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500 uppercase">Ateliê de Criação:</span>
                    <span className="font-bold">Indus Atelier & Neelgar</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500 uppercase">Ano / Edição:</span>
                    <span className="font-bold">2026 · Class of '27</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500 uppercase">Disciplinas:</span>
                    <span className="font-bold text-right">Alta Costura, Draping, Zardozi</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500 uppercase">Tempo de Ateliê:</span>
                    <span className="font-bold text-[#540D21]">240+ Horas Artesanais</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 1: Detailed Narrative & Aesthetic Conception */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pt-6 border-t border-[#DECFC0]">
            <div className="md:col-span-4">
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#540D21] font-bold block mb-1">
                MEMORIAL DESCRITIVO
              </span>
              <h2 className="font-avonia text-2xl sm:text-3xl text-[#241217]">
                A Poética do Vestido Carmesim
              </h2>
            </div>

            <div className="md:col-span-8 space-y-4 text-neutral-800 font-editorial text-sm sm:text-base leading-relaxed">
              <p>
                A coleção <strong>Fading Spark</strong> nasce da colisão entre a geometria arquitetônica do ateliê ocidental e a herança milenar da tecelagem metálica indiana. Inspirado na metáfora do <em>fio escarlate do destino (Akai Ito)</em>, o vestido articula uma presença magnética e calculada.
              </p>
              <p>
                O corpete é construído a partir de barbatanas em espiral de aço de alta resistência, esculpindo a silhueta feminina com postura ereta e austera. Contrastando com o rigor anatômico da armadura interna, cascatas de seda carmesim e fio zari deslizam em dobras assimétricas até tocarem o chão em uma cauda dramática.
              </p>
              <p>
                Cada prega foi moldada à mão no manequim vivo através da técnica tradicional de <em>moulage</em>, respeitando a queda natural do peso do tecido sem o auxílio de cortes industrializados.
              </p>
            </div>
          </div>

          {/* Section 2: Materiality & Palette Breakdown */}
          <div className="p-6 sm:p-8 bg-[#EFE6D5] border border-[#DECFC0] rounded-xs space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#DECFC0] pb-4">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#540D21] font-bold block">
                  ALQUIMIA CROMÁTICA & MATERIAL
                </span>
                <h3 className="font-avonia text-2xl text-[#241217]">
                  Pigmentação Mineral & Texturas Nobres
                </h3>
              </div>
              <span className="text-xs font-mono text-[#540D21]">
                Clique nas amostras para copiar o código HEX
              </span>
            </div>

            {/* Color Swatches Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              {paletteColors.map((color) => {
                const isCopied = copiedHex === color.hex;
                return (
                  <button
                    key={color.hex}
                    onClick={() => handleCopyColor(color.hex)}
                    className="p-3 bg-white border border-[#DECFC0] hover:border-[#540D21] transition-all rounded-xs text-left group cursor-pointer shadow-xs"
                  >
                    <div
                      className="w-full h-12 rounded-xs mb-2 border border-black/10 transition-transform group-hover:scale-102 flex items-center justify-center text-white"
                      style={{ backgroundColor: color.hex }}
                    >
                      {isCopied && <Check className="w-4 h-4 drop-shadow-md text-emerald-300" />}
                    </div>
                    <div className="text-[11px] font-mono font-bold text-[#241217] uppercase">
                      {color.name}
                    </div>
                    <div className="text-[10px] font-mono text-[#540D21] flex items-center justify-between">
                      <span>{color.hex}</span>
                      <Copy className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="text-[9px] font-mono text-neutral-500 mt-0.5 truncate">
                      {color.role}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Material Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 bg-white/70 border border-[#DECFC0] rounded-xs space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#540D21] font-bold block">
                  01 · SEDA PURA ZARI
                </span>
                <p className="text-xs text-neutral-700 leading-normal">
                  Tecelagem tradicional de Varanasi contendo filamentos de fio dourado metalizado torcidos com seda amoreira.
                </p>
              </div>

              <div className="p-4 bg-white/70 border border-[#DECFC0] rounded-xs space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#540D21] font-bold block">
                  02 · CORSETARIA ANATÔMICA
                </span>
                <p className="text-xs text-neutral-700 leading-normal">
                  Estrutura interna em coutil de algodão com barbatanas de aço espiralado e ilhós prensados artesanalmente.
                </p>
              </div>

              <div className="p-4 bg-white/70 border border-[#DECFC0] rounded-xs space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#540D21] font-bold block">
                  03 · BORDADO EM RELEVO
                </span>
                <p className="text-xs text-neutral-700 leading-normal">
                  Fios DMC franceses tingidos à mão combinados com canutilhos e miçangas de vidro soprado em pátina bronze.
                </p>
              </div>
            </div>
          </div>

          {/* Section 3: Sketches & Atelier Concept Notes */}
          <div className="space-y-6 pt-4 border-t border-[#DECFC0]">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#540D21] font-bold block">
                  CADERNO DE CAMPO & CROQUIS
                </span>
                <h3 className="font-avonia text-2xl sm:text-3xl text-[#241217]">
                  Estudos de Silhueta e Notas Criativas
                </h3>
              </div>
              <span className="text-xs font-mono text-neutral-500">
                Atelier Indus Design School
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Concept 1 */}
              <div className="bg-white border border-[#DECFC0] p-4 rounded-xs space-y-3">
                <div className="aspect-[4/5] bg-black rounded-xs overflow-hidden">
                  <img
                    src={coutureConceptSketchImage}
                    alt="Croquis de Alta Costura"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div>
                  <span className="text-[9px] font-mono uppercase tracking-widest text-[#540D21] font-bold">
                    CROQUIS N°01
                  </span>
                  <h4 className="font-avonia text-lg text-[#241217]">
                    Estudo de Corte & Cauda Esvoaçante
                  </h4>
                  <p className="text-xs text-neutral-600 font-editorial mt-1 leading-relaxed">
                    Linhas de caimento desenhadas em nanquim e pincel japonês, explorando o dinamismo e o rastro do vestido ao caminhar na passarela.
                  </p>
                </div>
              </div>

              {/* Concept 2 */}
              <div className="bg-white border border-[#DECFC0] p-4 rounded-xs space-y-3">
                <div className="aspect-[4/5] bg-black rounded-xs overflow-hidden">
                  <img
                    src={redThreadHandsImage}
                    alt="O Fio Vermelho"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div>
                  <span className="text-[9px] font-mono uppercase tracking-widest text-[#540D21] font-bold">
                    METÁFORA VISUAL
                  </span>
                  <h4 className="font-avonia text-lg text-[#241217]">
                    Conexão Manual: Mãos & Agulha
                  </h4>
                  <p className="text-xs text-neutral-600 font-editorial mt-1 leading-relaxed">
                    A relação física entre o tato da estilista e a resistência do tecido, onde cada ponto preserva a memória do gesto humano.
                  </p>
                </div>
              </div>

              {/* Concept 3 */}
              <div className="bg-white border border-[#DECFC0] p-4 rounded-xs space-y-3">
                <div className="aspect-[4/5] bg-black rounded-xs overflow-hidden">
                  <img
                    src={antiqueBrassAtelierImage}
                    alt="Materiais & Pátina"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div>
                  <span className="text-[9px] font-mono uppercase tracking-widest text-[#540D21] font-bold">
                    PÁTINA & TEXTURA
                  </span>
                  <h4 className="font-avonia text-lg text-[#241217]">
                    Metais Antigos & Fio Francês
                  </h4>
                  <p className="text-xs text-neutral-600 font-editorial mt-1 leading-relaxed">
                    Pesquisa sobre a oxidação controlada do latão e do cobre, mimetizada nos bordados dourados da coleção.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Action Footer */}
          <div className="pt-8 pb-12 border-t border-[#DECFC0] flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              onClick={onClose}
              className="text-xs font-mono uppercase tracking-widest text-[#540D21] hover:underline flex items-center gap-1.5 font-bold cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Voltar para a Página Principal do Portfólio</span>
            </button>

            {onOpenInquiry && (
              <button
                onClick={() => {
                  onClose();
                  onOpenInquiry();
                }}
                className="px-6 py-3 bg-gradient-to-r from-[#540D21] to-[#851737] hover:from-[#6E112B] hover:to-[#A63856] text-white text-xs font-mono uppercase tracking-widest font-bold rounded-xs shadow-md transition-all flex items-center gap-2 cursor-pointer hover:scale-102"
              >
                <Mail className="w-4 h-4 text-amber-200" />
                <span>Solicitar Consulta sobre Esta Criação</span>
              </button>
            )}
          </div>
        </main>
      </div>
    </AnimatePresence>
  );
};
