import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Pause, Volume2, VolumeX, Sparkles, Smartphone, X } from 'lucide-react';
import { videoReels } from '../data/portfolioData';
import { VideoReel } from '../types';
import fadingSparkPoster from '../assets/images/exact_theme_board_photo_1790705956929.jpg';

interface MyWorkReelsPageProps {
  onOpenInquiry: () => void;
  onOpenAbhisarika?: () => void;
  onOpenFadingSpark?: () => void;
}

export const MyWorkReelsPage: React.FC<MyWorkReelsPageProps> = ({
  onOpenInquiry,
  onOpenAbhisarika,
  onOpenFadingSpark
}) => {
  const [activeReel, setActiveReel] = useState<VideoReel | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <section
      id="my-work-reels"
      className="relative min-h-screen py-20 px-6 sm:px-12 border-b border-[#DECFC0] overflow-hidden selection:bg-[#540D21] selection:text-[#FAF6EE]"
    >
      {/* Background Volumetric Golden Aura Center Bloom */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[650px] bg-gradient-radial from-[#540D21]/10 via-[#851737]/5 to-transparent blur-[90px] pointer-events-none -z-10" />

      {/* Top Slide Page Meta (PAGE 04 // NEELGAR ATELIER) */}
      <div className="max-w-7xl mx-auto flex items-center justify-between border-b border-[#DECFC0] pb-4 mb-14 text-xs font-mono tracking-[0.25em] text-[#540D21]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#540D21]" />
          <span className="text-[#241217] font-semibold">PAGE 04 · NEELGAR ATELIER // ABHISARIKA</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="hidden sm:inline text-[#851737]">9:16 VERTICAL FORMAT</span>
          <span className="text-[#540D21]">4 REELS AVAILABLE</span>
        </div>
      </div>

      {/* Slide Header matching Slide 7 */}
      <div className="max-w-7xl mx-auto mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h2 className="text-5xl sm:text-6xl font-avonia font-normal tracking-normal text-[#241217] leading-none">
            Neelgar Atelier ‘Abhisarika’
          </h2>
          <div className="text-xs font-mono uppercase tracking-[0.25em] text-[#540D21] pt-1">
            VIDEO CONTENT &amp; SILHOUETTES IN MOTION
          </div>
        </div>

        <p className="text-xs sm:text-sm text-[#540D21]/90 font-serif italic max-w-md">
          "91% of haute couture consumers and buyers want to see silhouettes in dynamic motion before commissioning a piece."
        </p>
      </div>

      {/* 4 Smartphone Reel Frames */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {videoReels.map((reel, idx) => (
          (() => {
            const isAbhisarika = idx === 0;
            const isFadingSpark = idx === 1;
            const title = isAbhisarika ? 'ABHISARIKA' : isFadingSpark ? 'Fading Spark' : reel.title;
            const posterImage = isFadingSpark ? fadingSparkPoster : reel.posterImage;
            const openReel = () => {
              if (isAbhisarika && onOpenAbhisarika) {
                onOpenAbhisarika();
                return;
              }
              if (isFadingSpark && onOpenFadingSpark) {
                onOpenFadingSpark();
                return;
              }
              setActiveReel(reel);
            };

            return (
          <div
            key={reel.id || idx}
            id={isAbhisarika ? 'abhisarika-work-card' : isFadingSpark ? 'fading-spark-work-card' : undefined}
            role="button"
            tabIndex={0}
            aria-label={`Open project ${title}`}
            onClick={openReel}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                openReel();
              }
            }}
            className="group cursor-pointer bg-[#EFE6D5] border border-[#DECFC0] hover:border-[#540D21] p-4 flex flex-col justify-between transition-all duration-300 relative shadow-xl"
            data-cursor="pointer"
            data-cursor-text="WATCH"
          >
            {/* Phone Screen Mockup */}
            <div className="w-full aspect-[9/15] rounded-xl bg-black border-2 border-[#DECFC0] group-hover:border-[#540D21] overflow-hidden relative shadow-inner transition-colors">
              <img
                src={posterImage}
                alt={title}
                className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#FAF6EE]/80 via-transparent to-transparent opacity-80" />

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-[#FAF6EE]/80 border border-[#540D21] flex items-center justify-center text-[#540D21] group-hover:scale-110 group-hover:bg-[#540D21] group-hover:text-[#FAF6EE] transition-all shadow-[0_0_20px_rgba(84,13,33,0.4)]">
                  <Play className="w-5 h-5 ml-0.5" />
                </div>
              </div>

              {/* Top & Bottom Badges */}
              <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-[#FAF6EE]/80 border border-[#DECFC0] text-[9px] font-mono text-[#540D21] uppercase">
                {reel.brandTag}
              </div>

              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] font-mono text-[#241217]">
                <span>{reel.duration}</span>
                <span className="text-[#540D21]">{reel.stats}</span>
              </div>
            </div>

            <div className="pt-3">
              <h4 className="text-sm font-serif font-bold text-[#241217] group-hover:text-[#540D21] transition-colors">
                {title}
              </h4>
              <p className="text-xs text-[#851737] font-mono pt-1 line-clamp-1">
                {reel.caption}
              </p>
            </div>
          </div>
            );
          })()
        ))}
      </div>

      {/* Reel Modal Player */}
      <AnimatePresence>
        {activeReel && (
          <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#EFE6D5] border-2 border-[#540D21] max-w-sm w-full p-5 relative shadow-2xl"
            >
              <button
                onClick={() => setActiveReel(null)}
                className="absolute top-4 right-4 p-1 text-[#540D21] hover:text-[#241217] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-xs font-mono uppercase tracking-widest text-[#540D21] mb-1">
                {activeReel.brandTag}
              </div>
              <h3 className="text-lg font-serif font-bold text-[#241217] mb-4">
                {activeReel.title}
              </h3>

              <div className="aspect-[9/14] bg-black rounded-lg border border-[#DECFC0] overflow-hidden relative flex flex-col items-center justify-center">
                <img
                  src={activeReel.posterImage}
                  alt={activeReel.title}
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  <Play className="w-12 h-12 text-[#540D21] mb-3 animate-pulse" />
                  <p className="text-xs font-mono text-[#241217]">Video Playing on Loop</p>
                  <p className="text-xs font-serif italic text-[#540D21] mt-2">{activeReel.caption}</p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
