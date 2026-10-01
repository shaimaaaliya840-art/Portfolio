import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, X, Maximize2, Sparkles, MessageCircle, Phone, Mail, Instagram, Check } from 'lucide-react';
import { PortfolioData, Project, Testimonial } from '../types';
import { servicePackages, videoReels, processSteps, inspirationMetrics } from '../data/portfolioData';

interface EditorialLookbookDeckModalProps {
  isOpen: boolean;
  onClose: () => void;
  portfolioData: PortfolioData;
  projects: Project[];
  testimonials: Testimonial[];
  onOpenInquiry: () => void;
}

export const EditorialLookbookDeckModal: React.FC<EditorialLookbookDeckModalProps> = ({
  isOpen,
  onClose,
  portfolioData,
  projects,
  testimonials,
  onOpenInquiry
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 11;

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        setCurrentSlide((prev) => (prev < totalSlides - 1 ? prev + 1 : 0));
      } else if (e.key === 'ArrowLeft') {
        setCurrentSlide((prev) => (prev > 0 ? prev - 1 : totalSlides - 1));
      } else if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, totalSlides, onClose]);

  if (!isOpen) return null;

  const prev = () => setCurrentSlide((prev) => (prev > 0 ? prev - 1 : totalSlides - 1));
  const next = () => setCurrentSlide((prev) => (prev < totalSlides - 1 ? prev + 1 : 0));

  const whatsappNo = portfolioData.whatsappNumber || '8404916721';
  const cleanWa = whatsappNo.replace(/\D/g, '');
  const waLink = `https://wa.me/91${cleanWa}?text=${encodeURIComponent(
    `Hello ${portfolioData.name || 'Shatma Aaliya'}, I am inquiring regarding bespoke couture commissions.`
  )}`;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-2 sm:p-6 overflow-hidden">
        {/* Modal Outer Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-5xl aspect-[16/10] max-h-[92vh] flex flex-col bg-[#FAF6EE] border-2 border-[#DECFC0] shadow-[0_25px_80px_rgba(0,0,0,0.9)] overflow-hidden rounded-none"
        >
          {/* Deck Top Navigation Bar */}
          <div className="flex items-center justify-between px-6 py-3 bg-[#EFE6D5] border-b border-[#DECFC0] text-xs font-mono text-[#540D21] shrink-0">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#540D21] animate-pulse" />
              <span className="text-[#241217] font-serif uppercase tracking-widest text-sm font-bold">
                LOOKBOOK DECK · SHATMA AALIYA
              </span>
              <span className="text-[#851737] hidden sm:inline">[ INSPIRATION PER-PAGE AESTHETICS ]</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-xs font-mono text-[#540D21] bg-[#EFE6D5] px-3 py-1 border border-[#DECFC0]">
                SLIDE {String(currentSlide + 1).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
              </div>

              <button
                onClick={onClose}
                className="w-8 h-8 flex items-center justify-center border border-[#DECFC0] hover:border-[#540D21] text-[#241217] hover:text-[#540D21] transition-colors"
                aria-label="Close presentation deck"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Active Slide Canvas (16:10 Slide Format matching ispiration.jpg) */}
          <div className="flex-1 overflow-y-auto relative">
            <AnimatePresence mode="wait">
              {/* SLIDE 01: COVER ARCH */}
              {currentSlide === 0 && (
                <motion.div
                  key="slide-1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full min-h-[460px] bg-[#EAE0CD] text-[#FBF7EE] p-8 flex flex-col justify-between items-center text-center relative"
                >
                  <div className="text-xs font-mono tracking-[0.25em] text-[#F5D061] uppercase">
                    INDUS DESIGN SCHOOL '27 · NEELGAR ATELIER
                  </div>

                  <div className="flex flex-col items-center my-auto">
                    {/* Arched SVG Curved Text */}
                    <div className="w-[300px] sm:w-[380px] -mb-10 z-10 pointer-events-none select-none">
                      <svg viewBox="0 0 500 200" className="w-full overflow-visible">
                        <path id="curve-modal" d="M 50,180 A 200,160 0 0,1 450,180" fill="transparent" />
                        <text className="font-serif uppercase tracking-[0.28em] fill-[#FBF7EE] font-bold text-[30px]">
                          <textPath href="#curve-modal" startOffset="50%" textAnchor="middle">
                            COUTURE · PORTFOLIO
                          </textPath>
                        </text>
                      </svg>
                    </div>

                    {/* Arched Model Window */}
                    <div className="w-[200px] sm:w-[240px] aspect-[3/4.4] rounded-t-full border-2 border-[#F5D061] p-1 bg-[#14100A] shadow-2xl overflow-hidden relative">
                      <img
                        src="https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=900&auto=format&fit=crop"
                        alt="Model in Arch"
                        className="w-full h-full object-cover grayscale contrast-125"
                      />
                    </div>

                    <div className="mt-4 px-4 py-1.5 bg-[#14100A] border border-[#3E2F16] rounded-full text-xs font-serif italic text-[#F5D061]">
                      by {portfolioData.name || 'Shatma Aaliya'}
                    </div>
                  </div>

                  <div className="text-xs font-mono text-[#8A631E] uppercase tracking-widest">
                    SLIDE 01 // EDITORIAL COVER
                  </div>
                </motion.div>
              )}

              {/* SLIDE 02: PRODUCT PHOTOGRAPHY (CREAM) */}
              {currentSlide === 1 && (
                <motion.div
                  key="slide-2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full min-h-[460px] bg-[#FBF7EE] text-[#14100A] p-8 flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between text-xs font-mono tracking-widest text-[#8A631E]">
                    <span>PAGE 02 · KINETIC MANIFESTO</span>
                    <span className="font-serif italic text-sm text-[#14100A]">✦ Shatma Aaliya</span>
                  </div>

                  {/* Manifesto Quote Banner matching Guillaume Zhu style */}
                  <div className="my-3 p-4 bg-[#EDE4D0] border-l-4 border-[#540D21] shadow-sm">
                    <p className="text-xl sm:text-2xl font-serif italic text-[#14100A] leading-tight">
                      &ldquo;I tell stories through design, where garments meet imagination.&rdquo;
                    </p>
                    <div className="text-[10px] font-mono tracking-widest uppercase text-[#851737] pt-1">
                      // KINETIC ATELIER STATEMENT · SILHOUETTE &amp; POETRY
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center my-auto">
                    <div className="sm:col-span-5 flex flex-col items-center sm:items-start">
                      <div className="w-[180px] aspect-[3/4.2] rounded-t-full border-2 border-[#14100A] p-1 bg-[#EDE4D0] overflow-hidden shadow-lg">
                        <img
                          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop"
                          alt="Beauty Portrait"
                          className="w-full h-full object-cover grayscale contrast-125"
                        />
                      </div>
                      <h3 className="text-2xl font-serif font-black uppercase text-[#14100A] pt-4">
                        PRODUCT PHOTOGRAPHY
                      </h3>
                    </div>

                    <div className="sm:col-span-7 grid grid-cols-2 gap-3">
                      <div className="aspect-[4/3] bg-[#EDE4D0] p-2 border border-[#D5C7B0] overflow-hidden">
                        <img
                          src="https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&w=600&auto=format&fit=crop"
                          alt="Crimson Accents"
                          className="w-full h-full object-cover grayscale contrast-125"
                        />
                      </div>
                      <div className="aspect-[4/3] bg-[#EDE4D0] p-2 border border-[#D5C7B0] overflow-hidden">
                        <img
                          src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=600&auto=format&fit=crop"
                          alt="Handloom Weft"
                          className="w-full h-full object-cover grayscale contrast-125"
                        />
                      </div>
                      <div className="col-span-2 aspect-[21/9] bg-[#EDE4D0] p-2 border border-[#D5C7B0] overflow-hidden relative">
                        <img
                          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop"
                          alt="Runway"
                          className="w-full h-full object-cover grayscale contrast-125"
                        />
                        <div className="absolute top-2 left-4 font-serif italic text-4xl text-[#FBF7EE]">
                          Shatma
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-[10px] font-mono text-[#8A631E] text-right">
                    ATELIER NOIR & GOLDEN MOODBOARD
                  </div>
                </motion.div>
              )}

              {/* SLIDE 03: WHO AM I? & O QUE É O ATELIER */}
              {currentSlide === 2 && (
                <motion.div
                  key="slide-3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full min-h-[460px] bg-[#EAE0CD] text-[#FBF7EE] p-8 flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between text-xs font-mono tracking-widest text-[#F5D061]">
                    <span>PAGE 03 · IDENTITY</span>
                    <span>WHO AM I? / WHAT IS THE ATELIER?</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center my-auto">
                    <div className="sm:col-span-4 space-y-3 text-left">
                      <h3 className="text-xl font-serif font-bold uppercase text-[#FBF7EE]">
                        WHO AM I?
                      </h3>
                      <p className="text-xs text-[#F5D061]/90 leading-relaxed font-serif italic">
                        "Shatma Aaliya, designer from Indus Design School '27 and haute couture apprentice at Atelier Neelgar."
                      </p>
                      <p className="text-[11px] text-[#FBF7EE]/70 font-light leading-relaxed">
                        Femme fatale silhouettes, boned structured corsetry and subversive menswear tailoring.
                      </p>
                    </div>

                    <div className="sm:col-span-4 flex justify-center">
                      <div className="w-[160px] aspect-[3/4.6] rounded-t-full border-2 border-[#F5D061] p-1 bg-[#14100A] overflow-hidden shadow-2xl">
                        <img
                          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=700&auto=format&fit=crop"
                          alt="Shatma Portrait"
                          className="w-full h-full object-cover grayscale contrast-125"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-4 space-y-3 text-left">
                      <h3 className="text-xl font-serif font-bold uppercase text-[#FBF7EE]">
                        WHAT IS THE ATELIER?
                      </h3>
                      <p className="text-[11px] text-[#FBF7EE]/80 font-light leading-relaxed">
                        A made-to-order lab for runway shows, editorial campaigns and private clients seeking silhouettes of authority.
                      </p>
                      <button
                        onClick={onOpenInquiry}
                        className="px-5 py-2 rounded-full bg-[#2E2213] border border-[#F5D061] text-[10px] font-mono uppercase tracking-widest text-[#F5D061] hover:bg-[#F5D061] hover:text-[#261925] transition-colors"
                      >
                        Work With Me
                      </button>
                    </div>
                  </div>

                  <div className="text-[10px] font-mono text-[#8A631E]">
                    INDUS DESIGN SCHOOL · CLASS OF 2023–2027
                  </div>
                </motion.div>
              )}

              {/* SLIDE 04: FEEDBACKS (CREAM) */}
              {currentSlide === 3 && (
                <motion.div
                  key="slide-4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full min-h-[460px] bg-[#FBF7EE] text-[#14100A] p-8 flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between text-xs font-mono tracking-widest text-[#8A631E]">
                    <span>PAGE 04 · FEEDBACKS</span>
                    <span>CREATIVE DIRECTION & JURY</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center my-auto">
                    <div className="sm:col-span-4 space-y-2">
                      <h3 className="text-3xl font-serif font-black uppercase text-[#14100A]">
                        FEED
                        <br />
                        BACKS ✦
                      </h3>
                      <p className="text-xs font-mono text-[#8A631E]">
                        Words from mentors at Atelier Neelgar and Indus Design School.
                      </p>
                    </div>

                    <div className="sm:col-span-3 flex justify-center">
                      <div className="w-[140px] aspect-[3/4] rounded-t-full border-2 border-[#14100A] p-1 bg-[#EDE4D0] overflow-hidden">
                        <img
                          src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop"
                          alt="Mentor"
                          className="w-full h-full object-cover grayscale contrast-125"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-5 space-y-3">
                      {testimonials.slice(0, 2).map((t) => (
                        <div key={t.id} className="p-3 bg-[#EDE4D0] border border-[#D5C7B0] text-left">
                          <div className="text-[10px] font-mono font-bold text-[#14100A] uppercase">
                            {t.author} // {t.organization}
                          </div>
                          <p className="font-serif italic text-xs text-[#14100A] pt-1 leading-relaxed">
                            "{t.quote}"
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="text-[10px] font-mono text-[#8A631E] text-right">
                    100% ACADEMIC & EDITORIAL RECOMMENDATION
                  </div>
                </motion.div>
              )}

              {/* SLIDE 05: 93% STAT & BENEFÍCIOS */}
              {currentSlide === 4 && (
                <motion.div
                  key="slide-5"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full min-h-[460px] bg-[#EAE0CD] text-[#FBF7EE] p-8 flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between text-xs font-mono tracking-widest text-[#F5D061]">
                    <span>PAGE 05 · IMPACT</span>
                    <span>ATELIER BENEFITS</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 items-center my-auto">
                    <div className="sm:col-span-5 text-left space-y-3">
                      <div className="text-7xl font-serif font-bold text-[#FBF7EE]">
                        93% ✦
                      </div>
                      <p className="font-serif italic text-sm text-[#F5D061] leading-relaxed">
                        "of clients and jury members believe Shatma’s silhouettes decisively raise a brand’s runway value."
                      </p>
                    </div>

                    <div className="sm:col-span-7 bg-[#14100A] border border-[#3E2F16] p-5 space-y-3 text-left">
                      <div className="text-xs font-mono uppercase text-[#F5D061] font-bold">
                        BENEFITS FOR YOUR BRAND:
                      </div>
                      <div className="space-y-2 text-xs text-[#FBF7EE]/90 font-light">
                        <div className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-[#F5D061]" />
                          <span>Made-to-measure 3D pattern-making</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-[#F5D061]" />
                          <span>Archive silks and Varanasi handloom weaving</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-[#F5D061]" />
                          <span>Structured bodices with steel boning</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-[#F5D061]" />
                          <span>Styling and runway direction</span>
                        </div>
                      </div>
                      <button
                        onClick={onOpenInquiry}
                        className="mt-2 px-6 py-2 rounded-full bg-[#2E2213] border border-[#F5D061] text-[10px] font-mono uppercase tracking-widest text-[#F5D061] hover:bg-[#F5D061] hover:text-[#261925] transition-colors"
                      >
                        Work With Me
                      </button>
                    </div>
                  </div>

                  <div className="text-[10px] font-mono text-[#8A631E]">
                    SOURCE: INDUS '27 JURY ASSESSMENT
                  </div>
                </motion.div>
              )}

              {/* SLIDE 06: SERVICE PACKAGES */}
              {currentSlide === 5 && (
                <motion.div
                  key="slide-6"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full min-h-[460px] bg-[#EAE0CD] text-[#FBF7EE] p-6 sm:p-8 flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between text-xs font-mono tracking-widest text-[#F5D061]">
                    <span>PAGE 06 · PRICING</span>
                    <span>SERVICE PACKAGES // ATELIER COMMISSIONS</span>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 items-stretch my-auto">
                    <div className="w-full sm:w-20 bg-[#14100A] border border-[#3E2F16] p-3 flex sm:flex-col items-center justify-center text-center">
                      <div className="sm:-rotate-90 text-sm font-serif font-bold uppercase tracking-widest text-[#FBF7EE]">
                        SERVICE PACKAGES
                      </div>
                    </div>

                    <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
                      {servicePackages.map((p) => (
                        <div key={p.id} className="p-3 bg-[#14100A] border border-[#3E2F16] flex flex-col justify-between">
                          <div>
                            <div className="text-[10px] font-mono text-[#F5D061]">{p.code}</div>
                            <div className="text-lg font-serif font-bold text-[#FBF7EE] pt-1">{p.price}</div>
                            <div className="text-xs font-serif italic text-[#F5D061]">{p.name}</div>
                          </div>
                          <div className="text-[9px] font-mono text-[#8A631E] pt-3">
                            {p.timeline}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[10px] font-mono text-[#8A631E]">
                    <span>MADE-TO-ORDER COMMISSIONS</span>
                    <button onClick={onOpenInquiry} className="text-[#F5D061] underline">
                      REQUEST A PROPOSAL
                    </button>
                  </div>
                </motion.div>
              )}

              {/* SLIDE 07: MY WORK / VÍDEO REELS */}
              {currentSlide === 6 && (
                <motion.div
                  key="slide-7"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full min-h-[460px] bg-[#EAE0CD] text-[#FBF7EE] p-6 sm:p-8 flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between text-xs font-mono tracking-widest text-[#F5D061]">
                    <span>PAGE 07 · REELS</span>
                    <span>MY WORK // VIDEO CONTENT & RUNWAY</span>
                  </div>

                  <div className="my-auto space-y-4">
                    <div className="text-left">
                      <h3 className="text-3xl font-serif font-black uppercase text-[#FBF7EE]">
                        MY WORK
                      </h3>
                      <div className="text-[10px] font-mono text-[#F5D061] uppercase tracking-widest">
                        Video Content & Silhouettes in 9:16
                      </div>
                    </div>

                    <div className="grid grid-cols-4 gap-3">
                      {videoReels.map((reel) => (
                        <div key={reel.id} className="aspect-[9/16] rounded-xl border border-[#3E2F16] overflow-hidden relative bg-[#14100A] group">
                          <img
                            src={reel.posterImage}
                            alt={reel.title}
                            className="w-full h-full object-cover grayscale contrast-125"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0C0A07] via-transparent to-transparent opacity-80" />
                          <div className="absolute bottom-2 left-2 right-2 text-left">
                            <div className="text-[8px] font-mono uppercase text-[#F5D061] truncate">
                              {reel.brandTag}
                            </div>
                            <div className="text-[10px] font-serif font-bold text-white truncate">
                              {reel.title}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="text-[10px] font-mono text-[#8A631E]">
                    91% OF CONSUMERS PREFER VIDEOS IN MOTION
                  </div>
                </motion.div>
              )}

              {/* SLIDE 08: COMO FUNCIONA */}
              {currentSlide === 7 && (
                <motion.div
                  key="slide-8"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full min-h-[460px] bg-[#EAE0CD] text-[#FBF7EE] p-6 sm:p-8 flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between text-xs font-mono tracking-widest text-[#F5D061]">
                    <span>PAGE 08 · PROCESS</span>
                    <span>HOW IT WORKS ✦ // 3 STEPS</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center my-auto">
                    <div className="sm:col-span-8 grid grid-cols-3 gap-3 text-left">
                      {processSteps.map((step) => (
                        <div key={step.step} className="p-3 bg-[#14100A] border border-[#3E2F16] space-y-2">
                          <div className="text-xl font-serif font-bold text-[#F5D061]">{step.step}</div>
                          <div className="text-xs font-serif font-bold text-[#FBF7EE] leading-tight">{step.title}</div>
                          <p className="text-[10px] text-[#F5D061]/75 leading-normal">{step.description}</p>
                        </div>
                      ))}
                    </div>

                    <div className="sm:col-span-4 flex justify-center">
                      <div className="w-[140px] aspect-[3/4.4] rounded-t-full border-2 border-[#F5D061] p-1 bg-[#14100A] overflow-hidden">
                        <img
                          src="https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?q=80&w=600&auto=format&fit=crop"
                          alt="Fitting"
                          className="w-full h-full object-cover grayscale contrast-125"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="text-[10px] font-mono text-[#8A631E]">
                    COMPLETE HAUTE COUTURE METHODOLOGY
                  </div>
                </motion.div>
              )}

              {/* SLIDE 09: ESTATÍSTICAS DE IMPACTO (70%, 73%, 84%) */}
              {currentSlide === 8 && (
                <motion.div
                  key="slide-9"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full min-h-[460px] bg-[#EAE0CD] text-[#FBF7EE] p-8 flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between text-xs font-mono tracking-widest text-[#F5D061]">
                    <span>PAGE 09 · PRECISION</span>
                    <span>STILL NOT SURE?</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 items-center my-auto">
                    <div className="sm:col-span-5 text-left space-y-4">
                      <h3 className="text-2xl sm:text-3xl font-serif text-[#FBF7EE] leading-snug">
                        Still not sure what you need?
                      </h3>
                      <p className="text-xs text-[#F5D061]/80 font-serif italic">
                        "Every commission begins with a silhouette consultation and a selection of historic textiles."
                      </p>
                      <button
                        onClick={onOpenInquiry}
                        className="px-6 py-2.5 rounded-full bg-[#2E2213] border border-[#F5D061] text-xs font-mono uppercase tracking-widest text-[#F5D061] hover:bg-[#F5D061] hover:text-[#261925] transition-colors"
                      >
                        Work With Me
                      </button>
                    </div>

                    <div className="sm:col-span-7 space-y-4 text-left">
                      {inspirationMetrics.secondaryStats.map((st, i) => (
                        <div key={i} className="border-b border-[#3E2F16] pb-2 flex items-baseline justify-between">
                          <div>
                            <div className="text-xs font-mono uppercase text-[#F5D061]">{st.label}</div>
                            <div className="text-[10px] text-[#FBF7EE]/70">{st.description}</div>
                          </div>
                          <div className="text-3xl font-serif font-bold text-[#FBF7EE] pl-4">{st.stat}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="text-[10px] font-mono text-[#8A631E]">
                    INDUS DESIGN SCHOOL · TECHNICAL EXCELLENCE
                  </div>
                </motion.div>
              )}

              {/* SLIDE 10: ARCHIVAL DOSSIERS */}
              {currentSlide === 9 && (
                <motion.div
                  key="slide-10"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full min-h-[460px] bg-[#14100A] text-[#FBF7EE] p-8 flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between text-xs font-mono tracking-widest text-[#F5D061]">
                    <span>PAGE 10 · ARCHIVE</span>
                    <span>COUTURE & NEELGAR DOSSIERS</span>
                  </div>

                  <div className="grid grid-cols-3 gap-4 my-auto">
                    {projects.slice(0, 3).map((p) => (
                      <div key={p.id} className="bg-[#EAE0CD] border border-[#3E2F16] p-3 text-left space-y-2">
                        <div className="aspect-[4/3] overflow-hidden bg-black">
                          <img src={p.heroImage} alt={p.title} className="w-full h-full object-cover grayscale contrast-125" />
                        </div>
                        <div className="text-[9px] font-mono text-[#F5D061] uppercase">{p.number} · {p.category}</div>
                        <div className="text-sm font-serif font-bold text-[#FBF7EE] line-clamp-1">{p.title}</div>
                      </div>
                    ))}
                  </div>

                  <div className="text-[10px] font-mono text-[#8A631E]">
                    EXPLORE THE 06+ PROJECTS ON THE MAIN PAGE
                  </div>
                </motion.div>
              )}

              {/* SLIDE 11: LET’S WORK TOGETHER (CREAM) */}
              {currentSlide === 10 && (
                <motion.div
                  key="slide-11"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full min-h-[460px] bg-[#FBF7EE] text-[#14100A] p-8 flex flex-col justify-between text-center"
                >
                  <div className="flex items-center justify-between text-xs font-mono tracking-widest text-[#8A631E]">
                    <span>PAGE 11 · CONTACT</span>
                    <span>LET'S WORK TOGETHER // LET'S CREATE</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center my-auto">
                    <div className="hidden sm:flex sm:col-span-3 justify-center">
                      <div className="w-[130px] aspect-[3/4.2] rounded-t-full border-2 border-[#14100A] p-1 bg-[#EDE4D0] overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop" alt="Portrait" className="w-full h-full object-cover grayscale contrast-125" />
                      </div>
                    </div>

                    <div className="sm:col-span-6 space-y-3">
                      <h3 className="text-3xl font-serif font-black uppercase text-[#14100A]">
                        LET’S WORK
                        <br />
                        TOGETHER
                      </h3>
                      <div className="text-lg font-serif font-bold uppercase text-[#14100A]">
                        {portfolioData.name || 'SHATMA AALIYA'}
                      </div>

                      <div className="flex flex-col gap-2 max-w-xs mx-auto text-xs font-mono text-[#14100A]">
                        <a href={waLink} target="_blank" rel="noreferrer" className="p-2 bg-[#EDE4D0] border border-[#D5C7B0] font-bold hover:underline flex items-center justify-center gap-2">
                          <MessageCircle className="w-3.5 h-3.5 text-[#10B981]" />
                          <span>WhatsApp: {whatsappNo}</span>
                        </a>
                        <a href={`tel:+91${portfolioData.callingNumber || '6351283152'}`} className="p-2 bg-[#EDE4D0] border border-[#D5C7B0] font-bold hover:underline flex items-center justify-center gap-2">
                          <Phone className="w-3.5 h-3.5" />
                          <span>Linha: {portfolioData.callingNumber || '6351283152'}</span>
                        </a>
                      </div>

                      <button
                        onClick={onOpenInquiry}
                        className="px-6 py-2 bg-[#14100A] text-[#F5D061] text-xs font-mono uppercase tracking-widest hover:bg-[#2E2213] transition-colors"
                      >
                        Commission Form
                      </button>
                    </div>

                    <div className="hidden sm:flex sm:col-span-3 justify-center">
                      <div className="w-[130px] aspect-[3/4.2] rounded-t-full border-2 border-[#14100A] p-1 bg-[#EDE4D0] overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=600&auto=format&fit=crop" alt="Model" className="w-full h-full object-cover grayscale contrast-125" />
                      </div>
                    </div>
                  </div>

                  <div className="text-[10px] font-mono text-[#8A631E]">
                    AHMEDABAD & MUMBAI · CLASS OF 2023–2027
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Deck Bottom Slide Selector & Prev/Next Controls */}
          <div className="flex items-center justify-between px-6 py-3 bg-[#EFE6D5] border-t border-[#DECFC0] text-xs font-mono shrink-0">
            <button
              onClick={prev}
              className="flex items-center gap-2 px-3 py-1.5 border border-[#DECFC0] hover:border-[#540D21] text-[#241217] hover:text-[#540D21] transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4 text-[#540D21]" />
              <span className="hidden sm:inline">Previous Slide</span>
            </button>

            {/* Quick Slide Dots */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              {Array.from({ length: totalSlides }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`w-2 h-2 rounded-none transition-all cursor-pointer ${
                    currentSlide === i
                      ? 'bg-[#540D21] scale-125 shadow-[0_0_8px_#540D21]'
                      : 'bg-[#DECFC0] hover:bg-[#540D21]'
                  }`}
                  title={`Slide ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="flex items-center gap-2 px-3 py-1.5 border border-[#DECFC0] hover:border-[#540D21] text-[#241217] hover:text-[#540D21] transition-colors cursor-pointer"
            >
              <span className="hidden sm:inline">Next Slide</span>
              <ChevronRight className="w-4 h-4 text-[#540D21]" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
