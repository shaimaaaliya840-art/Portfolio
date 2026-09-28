import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Palette, Copy, Check, Eye, ExternalLink, Sliders, X, Maximize2, Play, Upload, Film, Link as LinkIcon } from 'lucide-react';
import { AtelierPalette } from '../data/colorPalettes';
import antiqueBrassAtelierImage from '../assets/images/antique_brass_atelier_palette_1790242759642.jpg';
import redThreadHandsImage from '../assets/images/red_thread_hands_1790503180613.jpg';
import peoniesTwineImage from '../assets/images/hands_peonies_twine_1790503422624.jpg';

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
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [activeModalImage, setActiveModalImage] = useState<'peonies' | 'gramophone' | 'portrait'>('peonies');
  const [videoUrl, setVideoUrl] = useState<string>(() => {
    try {
      return localStorage.getItem('atelier_arch_video_url') || '/videos/peonies_hands_cinematic.mp4';
    } catch {
      return '/videos/peonies_hands_cinematic.mp4';
    }
  });
  const [isDriveInputOpen, setIsDriveInputOpen] = useState(false);
  const [driveUrlInput, setDriveUrlInput] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const archContainerRef = useRef<HTMLDivElement>(null);
  const archVideoRef = useRef<HTMLVideoElement>(null);
  const [isPlayingOnScroll, setIsPlayingOnScroll] = useState(false);

  // Play video automatically when scrolled to section and pause when scrolled away
  useEffect(() => {
    const container = archContainerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (archVideoRef.current) {
              archVideoRef.current
                .play()
                .then(() => setIsPlayingOnScroll(true))
                .catch(() => {
                  // Autoplay policy fallback: muted video is permitted in all modern browsers
                });
            }
          } else {
            if (archVideoRef.current) {
              archVideoRef.current.pause();
              setIsPlayingOnScroll(false);
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(container);
    return () => {
      observer.disconnect();
    };
  }, [videoUrl]);

  // Helper to parse Google Drive URLs into embeddable preview links or identify direct video
  const parsedVideo = React.useMemo(() => {
    if (!videoUrl) return null;
    const driveMatch = videoUrl.match(/\/file\/d\/([a-zA-Z0-9_-]+)/) || videoUrl.match(/id=([a-zA-Z0-9_-]+)/);
    if (driveMatch && driveMatch[1]) {
      return {
        type: 'gdrive' as const,
        embedUrl: `https://drive.google.com/file/d/${driveMatch[1]}/preview`,
        rawId: driveMatch[1]
      };
    }
    return {
      type: 'direct' as const,
      embedUrl: videoUrl
    };
  }, [videoUrl]);

  const handleSaveDriveUrl = (e: React.FormEvent) => {
    e.preventDefault();
    if (driveUrlInput.trim()) {
      const trimmed = driveUrlInput.trim();
      setVideoUrl(trimmed);
      try {
        localStorage.setItem('atelier_arch_video_url', trimmed);
      } catch (err) {
        console.error(err);
      }
      setIsDriveInputOpen(false);
      setDriveUrlInput('');
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const objUrl = URL.createObjectURL(file);
      setVideoUrl(objUrl);
      try {
        localStorage.setItem('atelier_arch_video_url', objUrl);
      } catch (err) {
        console.error(err);
      }
      setIsDriveInputOpen(false);
    }
  };

  // Close modal with Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsImageModalOpen(false);
      }
    };
    if (isImageModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isImageModalOpen]);

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

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Column: Architectural Arch Portrait Window & Golden Title Plaque */}
        <div className="lg:col-span-5 flex flex-col items-center sm:items-start">
          <div ref={archContainerRef} className="relative group w-full max-w-sm">
            {/* Hidden Video File Input */}
            <input
              type="file"
              ref={fileInputRef}
              accept="video/*"
              className="hidden"
              onChange={handleFileUpload}
            />

            {/* Arched Window with Antique Brass Rim - Peonies Video Reel Presentation */}
            <div
              role="button"
              tabIndex={0}
              onClick={() => {
                setActiveModalImage('peonies');
                setIsImageModalOpen(true);
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActiveModalImage('peonies');
                  setIsImageModalOpen(true);
                }
              }}
              aria-label="Reproduzir vídeo editorial de peônias magentas e mãos atadas"
              data-cursor="pointer"
              data-cursor-text={isPlayingOnScroll ? "EXPANDIR" : "PLAY"}
              className="aspect-[3/4.2] w-full rounded-t-full border-2 border-[var(--color-accent,#540D21)] p-2 bg-[var(--color-panel,#EFE6D5)] shadow-[0_20px_40px_rgba(84,13,33,0.18)] overflow-hidden relative cursor-pointer group/arch"
            >
              <div className="w-full h-full rounded-t-full overflow-hidden relative bg-black">
                {parsedVideo?.type === 'gdrive' ? (
                  <iframe
                    src={`${parsedVideo.embedUrl}?autoplay=1`}
                    title="Peônias & Mãos Atadas - Google Drive Reel"
                    className="w-full h-full rounded-t-full border-0 object-cover pointer-events-auto"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                  />
                ) : parsedVideo?.type === 'direct' ? (
                  <video
                    ref={archVideoRef}
                    src={parsedVideo.embedUrl}
                    loop
                    muted
                    playsInline
                    poster={peoniesTwineImage}
                    className="w-full h-full object-cover group-hover/arch:scale-105 transition-transform duration-700 select-none"
                  />
                ) : (
                  <>
                    {/* Base monochrome layer: hands, twine & background in high-contrast B&W */}
                    <img
                      src={peoniesTwineImage}
                      alt="Peônias & Mãos Atadas - Base P&B"
                      className="w-full h-full object-cover group-hover/arch:scale-108 transition-transform duration-700 select-none grayscale contrast-110"
                      referrerPolicy="no-referrer"
                    />

                    {/* Selective vibrant pink flower layer */}
                    <img
                      src={peoniesTwineImage}
                      alt="Peônias com Flores Rosa Vibrante"
                      className="absolute inset-0 w-full h-full object-cover group-hover/arch:scale-108 transition-transform duration-700 select-none pointer-events-none"
                      style={{
                        maskImage: 'radial-gradient(ellipse 60% 50% at 50% 48%, black 45%, transparent 72%)',
                        WebkitMaskImage: 'radial-gradient(ellipse 60% 50% at 50% 48%, black 45%, transparent 72%)'
                      }}
                      referrerPolicy="no-referrer"
                    />
                  </>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/30 pointer-events-none" />

                {/* Top Live Reel Tag */}
                <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1 bg-black/65 backdrop-blur-md rounded-full border border-white/20 text-[9px] font-mono tracking-widest uppercase text-white/95 shadow-md pointer-events-none">
                  <span className={`w-2 h-2 rounded-full ${isPlayingOnScroll ? 'bg-emerald-400' : 'bg-rose-500'} animate-pulse`} />
                  <span>{isPlayingOnScroll ? 'VÍDEO EM REPRODUÇÃO' : 'VÍDEO · REEL'}</span>
                </div>

                {/* Center Cinematic Play / Expand Button */}
                <div className={`absolute inset-0 flex flex-col items-center justify-center p-4 pointer-events-none transition-opacity duration-300 ${isPlayingOnScroll ? 'opacity-0 group-hover/arch:opacity-100' : 'opacity-100'}`}>
                  <div className="w-14 h-14 rounded-full bg-white/25 backdrop-blur-md border border-white/60 flex items-center justify-center shadow-2xl group-hover/arch:scale-110 group-hover/arch:bg-white/40 transition-all duration-300">
                    <Play className="w-6 h-6 text-white fill-white ml-1 drop-shadow" />
                  </div>
                  <span className="mt-3 px-3 py-1 bg-black/80 backdrop-blur-sm border border-white/20 rounded-xs text-[10px] font-mono uppercase tracking-widest text-[#FAF6EE] shadow-xl">
                    Expandir Vídeo · 9:16
                  </span>
                </div>

                {/* Bottom Title Plaque on Video */}
                <div className="absolute bottom-3 inset-x-3 text-center pointer-events-none">
                  <div className="text-[11px] font-serif tracking-wider text-white/95 drop-shadow font-medium">
                    Peônias Magentas & Mãos Atadas
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Video Configuration Bar (Google Drive / Upload) */}
            <div className="mt-2.5 flex items-center justify-between gap-2 px-1">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsDriveInputOpen(!isDriveInputOpen);
                }}
                className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-[#540D21] hover:text-[#851737] bg-[#EFE6D5]/80 hover:bg-[#EFE6D5] px-2.5 py-1 border border-[#DECFC0] transition-colors cursor-pointer rounded-xs"
                title="Configurar Link do Google Drive ou URL de vídeo"
              >
                <LinkIcon className="w-3 h-3" />
                <span>{parsedVideo ? 'Trocar Link Drive' : 'Link Google Drive'}</span>
              </button>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  fileInputRef.current?.click();
                }}
                className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-[#540D21] hover:text-[#851737] bg-[#EFE6D5]/80 hover:bg-[#EFE6D5] px-2.5 py-1 border border-[#DECFC0] transition-colors cursor-pointer rounded-xs"
                title="Selecionar arquivo de vídeo do computador"
              >
                <Upload className="w-3 h-3" />
                <span>Subir Vídeo</span>
              </button>
            </div>

            {/* Inline Google Drive Link Form */}
            {isDriveInputOpen && (
              <form onSubmit={handleSaveDriveUrl} className="mt-2 p-3 bg-[#FAF6EE] border border-[#540D21]/40 rounded-xs shadow-lg space-y-2 text-left">
                <label className="block text-[10px] font-mono uppercase tracking-wider text-[#540D21] font-bold">
                  URL do Google Drive ou Vídeo (.mp4):
                </label>
                <div className="flex gap-2">
                  <input
                    type="url"
                    placeholder="https://drive.google.com/file/d/.../view"
                    value={driveUrlInput}
                    onChange={(e) => setDriveUrlInput(e.target.value)}
                    className="flex-1 text-xs px-2.5 py-1.5 bg-white border border-[#DECFC0] text-[#241217] rounded-xs font-mono focus:outline-none focus:border-[#540D21]"
                  />
                  <button
                    type="submit"
                    className="px-3 py-1.5 text-xs font-mono uppercase font-bold bg-[#540D21] text-white rounded-xs hover:bg-[#6E112B] transition-colors cursor-pointer"
                  >
                    Salvar
                  </button>
                </div>
                <div className="flex items-center justify-between text-[9px] text-[#241217]/70 font-mono">
                  <span>Dica: no Google Drive, configure o arquivo como &ldquo;Qualquer pessoa com o link&rdquo;.</span>
                  {videoUrl && (
                    <button
                      type="button"
                      onClick={() => {
                        setVideoUrl('');
                        localStorage.removeItem('atelier_arch_video_url');
                      }}
                      className="text-red-700 hover:underline cursor-pointer"
                    >
                      Remover
                    </button>
                  )}
                </div>
              </form>
            )}
          </div>

          {/* Golden Plaque Heading under Arch */}
          <div className="mt-8 space-y-2 p-5 bg-gradient-to-br from-[var(--color-accent,#540D21)] via-[var(--color-gold,#851737)] to-[var(--color-bronze,#A63856)] border-2 border-[var(--color-accent,#540D21)] shadow-xl text-[var(--color-base,#FAF6EE)] relative overflow-hidden w-full max-w-sm">
            <div className="absolute inset-1 border border-black/15 pointer-events-none" />
            <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-[var(--color-base,#FAF6EE)] font-black flex items-center gap-1.5">
              <Sparkles className="w-3 h-3" />
              <span>ALQUIMIA CROMÁTICA</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-avonia tracking-normal font-normal text-[var(--color-base,#FAF6EE)] leading-tight">
              Fading Spark
            </h2>
            <div className="text-xs font-mono uppercase tracking-[0.15em] text-[var(--color-base,#FAF6EE)]/90 font-bold pt-1">
              {activePalette.tagline}
            </div>
          </div>
        </div>

        {/* Right Column: High-Fashion Moodboard, Swatch Strip & Materiality Grid */}
        <div className="lg:col-span-7 flex flex-col gap-6">
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

      {/* Lightbox / High-Resolution Editorial Image Modal */}
      <AnimatePresence>
        {isImageModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
            {/* Dark Haute-Couture Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsImageModalOpen(false)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md"
            />

            {/* Modal Dialog Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 15 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-5xl bg-[#FAF6EE] border-2 border-[var(--color-accent,#540D21)] shadow-[0_25px_80px_rgba(0,0,0,0.8)] z-10 max-h-[92vh] flex flex-col overflow-hidden text-[#241217]"
            >
              {/* Header Bar */}
              <div className="px-5 py-3.5 bg-[#EFE6D5] border-b border-[#DECFC0] flex items-center justify-between">
                <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-[#540D21]">
                  <span className="w-2 h-2 rounded-full bg-[#540D21] animate-pulse" />
                  <span className="font-bold">PAGE 03 · ARQUIVO FOTOGRÁFICO DE ALTA COSTURA</span>
                  <span className="text-[#851737] hidden sm:inline">/</span>
                  <span className="hidden sm:inline text-neutral-600 font-semibold">{activePalette.name}</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsImageModalOpen(false)}
                    className="p-1.5 bg-[#FAF6EE] hover:bg-[#540D21] hover:text-[#FAF6EE] text-[#241217] border border-[#DECFC0] hover:border-[#540D21] transition-colors cursor-pointer"
                    title="Fechar (Esc)"
                    aria-label="Fechar modal"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Main Content Area */}
              <div className="flex-1 overflow-y-auto p-4 sm:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  {/* Left Column: Enlarged Display */}
                  <div className="lg:col-span-7 flex flex-col items-center justify-center">
                    <div className="relative w-full max-w-md bg-[#EFE6D5] p-3 border-2 border-[#540D21] shadow-2xl">
                      {activeModalImage === 'portrait' ? (
                        <div className="aspect-[3/4.2] w-full rounded-t-full border border-[#540D21] overflow-hidden bg-black relative">
                          <img
                            src={redThreadHandsImage}
                            alt="Red Thread of Fate Editorial - Two hands connected by crimson string"
                            className="w-full h-full object-cover contrast-110 select-none"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                        </div>
                      ) : activeModalImage === 'peonies' ? (
                        <div className="aspect-[9/16] max-h-[62vh] mx-auto border-2 border-[#540D21] overflow-hidden bg-black relative shadow-2xl rounded-xs">
                          {parsedVideo?.type === 'gdrive' ? (
                            <iframe
                              src={`${parsedVideo.embedUrl}?autoplay=1`}
                              title="Peônias Magentas & Mãos Atadas - Google Drive Player"
                              className="w-full h-full border-0 object-cover"
                              allow="autoplay; fullscreen; picture-in-picture"
                              allowFullScreen
                            />
                          ) : parsedVideo?.type === 'direct' ? (
                            <video
                              src={parsedVideo.embedUrl}
                              controls
                              autoPlay
                              loop
                              playsInline
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <>
                              {/* Monochrome background layer */}
                              <img
                                src={peoniesTwineImage}
                                alt="Peônias Magentas & Mãos Atadas com Corda Rústica - Video Reel"
                                className="w-full h-full object-cover select-none grayscale contrast-110"
                                referrerPolicy="no-referrer"
                              />
                              {/* Selective vibrant pink peony layer */}
                              <img
                                src={peoniesTwineImage}
                                alt="Peônias Magentas em Rosa Vibrante"
                                className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
                                style={{
                                  maskImage: 'radial-gradient(ellipse 60% 50% at 50% 48%, black 45%, transparent 72%)',
                                  WebkitMaskImage: 'radial-gradient(ellipse 60% 50% at 50% 48%, black 45%, transparent 72%)'
                                }}
                                referrerPolicy="no-referrer"
                              />
                            </>
                          )}
                          <div className="absolute top-3 left-3 px-2.5 py-1 bg-black/75 backdrop-blur-sm border border-white/20 rounded-full text-[9px] font-mono text-white flex items-center gap-1.5 shadow-md pointer-events-none">
                            <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                            <span>{parsedVideo ? 'VÍDEO REEL ATIVO' : 'VÍDEO REEL · 9:16'}</span>
                          </div>
                        </div>
                      ) : (
                        <div className="aspect-[4/3] w-full border border-[#540D21] overflow-hidden bg-black relative">
                          <img
                            src={antiqueBrassAtelierImage}
                            alt="Antique Brass Gramophone & Silk Embroidery Threads"
                            className="w-full h-full object-cover contrast-115 select-none"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      )}

                      {/* Photo Caption Plaque */}
                      <div className="mt-3 flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-[#540D21]">
                        <span className="font-bold">
                          {activeModalImage === 'portrait'
                            ? "FIO DO DESTINO · RED THREAD EDITORIAL"
                            : activeModalImage === 'peonies'
                            ? "PEÔNIAS & MÃOS ATADAS · CINEMATIC REEL"
                            : 'PATINA DE GRAMOFONE ANTIGO & FIOS DMC'}
                        </span>
                        <span className="text-[10px] text-neutral-500 font-mono">
                          {activeModalImage === 'peonies' ? '9:16 VÍDEO EDITORIAL' : '1600 × 2240px'}
                        </span>
                      </div>
                    </div>

                    {/* Switcher tabs beneath image */}
                    <div className="flex items-center gap-2 mt-4 flex-wrap justify-center">
                      <button
                        onClick={() => setActiveModalImage('peonies')}
                        className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider border transition-all cursor-pointer flex items-center gap-1.5 ${
                          activeModalImage === 'peonies'
                            ? 'bg-[#540D21] text-[#FAF6EE] border-[#540D21] font-bold shadow'
                            : 'bg-[#FAF6EE] text-[#540D21] border-[#DECFC0] hover:border-[#540D21]'
                        }`}
                      >
                        <Play className="w-3 h-3 fill-current" />
                        1. Vídeo Peônias (Reel)
                      </button>
                      <button
                        onClick={() => setActiveModalImage('gramophone')}
                        className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider border transition-all cursor-pointer ${
                          activeModalImage === 'gramophone'
                            ? 'bg-[#540D21] text-[#FAF6EE] border-[#540D21] font-bold shadow'
                            : 'bg-[#FAF6EE] text-[#540D21] border-[#DECFC0] hover:border-[#540D21]'
                        }`}
                      >
                        2. Gramofone &amp; Fios
                      </button>
                      <button
                        onClick={() => setActiveModalImage('portrait')}
                        className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider border transition-all cursor-pointer ${
                          activeModalImage === 'portrait'
                            ? 'bg-[#540D21] text-[#FAF6EE] border-[#540D21] font-bold shadow'
                            : 'bg-[#FAF6EE] text-[#540D21] border-[#DECFC0] hover:border-[#540D21]'
                        }`}
                      >
                        3. Fio do Destino
                      </button>
                    </div>
                  </div>

                  {/* Right Column: Editorial Dossier & Controls */}
                  <div className="lg:col-span-5 space-y-6">
                    <div className="space-y-2">
                      <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#851737] font-bold flex items-center gap-1.5">
                        <Sparkles className="w-3 h-3 text-[#540D21]" />
                        <span>ESTUDO DE ILUMINAÇÃO &amp; FORMA</span>
                      </div>
                      <h3 className="font-avonia text-3xl sm:text-4xl text-[#241217] leading-tight">
                        {activeModalImage === 'portrait'
                          ? 'Silhueta de Alta Costura & Expressão'
                          : activeModalImage === 'peonies'
                          ? 'Laços Botânicos & Peônias Magentas'
                          : 'Pátina de Bronze Antigo & Seda Zardozi'}
                      </h3>
                      <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-editorial">
                        {activeModalImage === 'portrait'
                          ? 'Fotografia editorial explorando a harmonia entre o corte estruturado, a modéstia escultural e a postura marcante. Inspirado nas proporções clássicas dos ateliês parisienses cruzadas com a dramaticidade têxtil indiana.'
                          : activeModalImage === 'peonies'
                          ? 'Enquadramento cinemático em vídeo destacando o simbolismo tátil da corda rústica de cânhamo entrelaçada a peônias vivas em tons magenta vibrante, unindo a crueza têxtil à delicadeza orgânica.'
                          : 'Estudo microscópico de reflexos metálicos em latão envelhecido e o contraste com meadas de seda crua tingidas artesanalmente com extratos botânicos.'}
                      </p>
                    </div>

                    {/* Active Palette Swatches Preview */}
                    <div className="p-3 bg-[#EFE6D5] border border-[#DECFC0] space-y-2">
                      <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-[#540D21] font-bold">
                        <span>PALETA DO ATELIER: {activePalette.name}</span>
                        <span>5 TONALIDADES</span>
                      </div>
                      <div className="grid grid-cols-5 gap-1.5">
                        {activePalette.swatches.slice(0, 5).map((sw, i) => (
                          <div key={i} className="space-y-1">
                            <div
                              className="h-8 w-full border border-black/20 shadow-xs"
                              style={{ backgroundColor: sw.hex }}
                              title={`${sw.name} (${sw.hex})`}
                            />
                            <div className="text-[8px] font-mono text-[#241217] truncate font-semibold">
                              {sw.hex}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                      {onOpenInquiry && (
                        <button
                          onClick={() => {
                            setIsImageModalOpen(false);
                            onOpenInquiry();
                          }}
                          className="px-5 py-2.5 bg-[#540D21] hover:bg-[#851737] text-[#FAF6EE] text-xs font-mono uppercase tracking-widest font-bold transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                        >
                          <span>Solicitar Peça sob Medida</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </button>
                      )}
                      {onOpenColorModal && (
                        <button
                          onClick={() => {
                            setIsImageModalOpen(false);
                            onOpenColorModal();
                          }}
                          className="px-4 py-2.5 bg-[#FAF6EE] hover:bg-[#EFE6D5] text-[#540D21] border border-[#540D21] text-xs font-mono uppercase tracking-widest font-bold transition-all flex items-center justify-center gap-2 cursor-pointer"
                        >
                          <Palette className="w-3.5 h-3.5" />
                          <span>Mudar Paleta</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
