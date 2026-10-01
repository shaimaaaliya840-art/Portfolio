import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles, Copy, Check, Palette, CheckCircle2, ArrowRight } from 'lucide-react';
import { AtelierPalette, atelierPalettes, AtelierSwatch } from '../data/colorPalettes';

interface ColorInspirationModalProps {
  isOpen: boolean;
  onClose: () => void;
  activePalette: AtelierPalette;
  onSelectPalette: (palette: AtelierPalette) => void;
}

export const ColorInspirationModal: React.FC<ColorInspirationModalProps> = ({
  isOpen,
  onClose,
  activePalette,
  onSelectPalette
}) => {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);
  const [selectedSwatch, setSelectedSwatch] = useState<AtelierSwatch>(activePalette.swatches[0]);

  if (!isOpen) return null;

  const handleCopy = (hex: string, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => {
      setCopiedHex(null);
    }, 1800);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-4xl bg-[var(--color-surface,#F3EBDD)] border-2 border-[var(--color-accent,#540D21)] shadow-[0_25px_80px_rgba(0,0,0,0.9)] z-10 overflow-hidden my-auto max-h-[92vh] flex flex-col text-[var(--color-text,#241217)]"
        >
          {/* Top Bar */}
          <div className="p-5 sm:p-6 border-b border-[var(--color-mocha,#DECFC0)] flex items-center justify-between bg-[var(--color-panel,#EFE6D5)] shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-sm bg-gradient-to-br from-[var(--color-accent,#540D21)] to-[var(--color-bronze,#A63856)] flex items-center justify-center text-[var(--color-base,#FAF6EE)] shadow-md">
                <Palette className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[0.625rem] font-mono uppercase tracking-[0.25em] text-[var(--color-accent,#540D21)] font-bold flex items-center gap-2">
                  <span>ATELIER ARCHIVES · COLOR INSPIRATION</span>
                  <Sparkles className="w-3 h-3 text-[var(--color-accent,#540D21)]" />
                </div>
                <h2 className="text-xl sm:text-2xl font-serif font-black uppercase text-[var(--color-text,#241217)] tracking-tight">
                  Color Palette &amp; Materiality
                </h2>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 text-[var(--color-text-muted,#D2BDCF)] hover:text-[var(--color-accent,#540D21)] hover:bg-[var(--color-surface,#F3EBDD)] transition-colors rounded-sm cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Content Scrollable Area */}
          <div className="p-5 sm:p-8 overflow-y-auto space-y-8">
            {/* 1. Theme Selector Chips */}
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-[var(--color-accent,#540D21)] mb-3 font-bold">
                SELECT ATELIER INSPIRATION
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {atelierPalettes.map((palette) => {
                  const isCurrent = palette.id === activePalette.id;
                  return (
                    <button
                      key={palette.id}
                      onClick={() => {
                        onSelectPalette(palette);
                        setSelectedSwatch(palette.swatches[0]);
                      }}
                      className={`text-left p-3.5 border transition-all duration-300 relative group cursor-pointer ${
                        isCurrent
                          ? 'border-[var(--color-accent,#540D21)] bg-[var(--color-panel,#EFE6D5)] shadow-[0_0_15px_rgba(84,13,33,0.25)]'
                          : 'border-[var(--color-mocha,#DECFC0)]/70 bg-[var(--color-base,#FAF6EE)] hover:border-[var(--color-accent,#540D21)]/60'
                      }`}
                    >
                      {isCurrent && (
                        <div className="absolute top-2 right-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-accent,#540D21)]" />
                        </div>
                      )}
                      {/* Swatch dots preview */}
                      <div className="flex items-center gap-1.5 mb-2.5">
                        {palette.swatches.slice(0, 5).map((s, idx) => (
                          <span
                            key={idx}
                            className="w-3.5 h-3.5 rounded-full border border-black/40 shadow-sm"
                            style={{ backgroundColor: s.hex }}
                          />
                        ))}
                      </div>
                      <div className="text-xs font-serif font-black uppercase text-[var(--color-text,#241217)] truncate">
                        {palette.name}
                      </div>
                      <div className="text-[0.625rem] font-mono text-[var(--color-text-muted,#D2BDCF)] tracking-wider truncate">
                        {palette.era}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Active Palette Hero Dossier */}
            <div className="p-6 bg-gradient-to-br from-[var(--color-panel,#EFE6D5)] to-[var(--color-base,#FAF6EE)] border border-[var(--color-mocha,#DECFC0)] relative overflow-hidden">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[var(--color-mocha,#DECFC0)]/60 pb-4 mb-5">
                <div>
                  <div className="text-xs font-mono uppercase tracking-[0.2em] text-[var(--color-accent,#540D21)] font-bold">
                    {activePalette.era}
                  </div>
                  <h3 className="text-2xl font-serif font-black uppercase text-[var(--color-text,#241217)]">
                    {activePalette.name}
                  </h3>
                  <p className="text-xs text-[var(--color-text-muted,#D2BDCF)] mt-1 font-serif italic">
                    {activePalette.tagline}
                  </p>
                </div>
                <div className="px-3 py-1.5 bg-[var(--color-base,#FAF6EE)] border border-[var(--color-accent,#540D21)] text-[0.625rem] font-mono uppercase tracking-widest text-[var(--color-accent,#540D21)] font-bold shrink-0 self-start sm:self-center">
                  ACTIVE PORTFOLIO PALETTE
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[var(--color-text-muted,#D2BDCF)] leading-relaxed mb-6 font-mono">
                {activePalette.description}
              </p>

              {/* Chromatic Proportion Spectrum Bar */}
              <div className="space-y-1.5 mb-6">
                <div className="flex justify-between text-[0.625rem] font-mono uppercase text-[var(--color-accent,#540D21)]">
                  <span>Chromatic Proportion in Haute Couture</span>
                  <span>100% Atelier Harmony</span>
                </div>
                <div className="h-4 w-full flex overflow-hidden border border-[var(--color-mocha,#DECFC0)] rounded-xs">
                  {activePalette.swatches.map((s, idx) => (
                    <div
                      key={idx}
                      style={{
                        width: `${s.percentage}%`,
                        backgroundColor: s.hex
                      }}
                      title={`${s.name} (${s.percentage}%)`}
                      className="h-full relative group cursor-pointer transition-opacity hover:opacity-85"
                      onClick={() => setSelectedSwatch(s)}
                    />
                  ))}
                </div>
              </div>

              {/* Swatches Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                {activePalette.swatches.map((swatch, idx) => {
                  const isSelected = selectedSwatch?.name === swatch.name;
                  return (
                    <div
                      key={idx}
                      onClick={() => setSelectedSwatch(swatch)}
                      className={`p-3 bg-[var(--color-surface,#F3EBDD)] border transition-all duration-200 cursor-pointer relative group flex flex-col justify-between ${
                        isSelected
                          ? 'border-[var(--color-accent,#540D21)] ring-1 ring-[var(--color-accent,#540D21)]'
                          : 'border-[var(--color-mocha,#DECFC0)]/60 hover:border-[var(--color-accent,#540D21)]/50'
                      }`}
                    >
                      <div>
                        {/* Color Patch */}
                        <div
                          className="h-16 w-full rounded-xs mb-2.5 border border-black/40 shadow-inner relative flex items-center justify-center group-hover:scale-[1.02] transition-transform"
                          style={{ backgroundColor: swatch.hex }}
                        >
                          <button
                            onClick={(e) => handleCopy(swatch.hex, e)}
                            className="opacity-0 group-hover:opacity-100 transition-opacity px-2 py-1 bg-black/80 text-[0.625rem] font-mono text-white tracking-widest uppercase flex items-center gap-1 rounded-xs shadow"
                            title="Copy HEX code"
                          >
                            {copiedHex === swatch.hex ? (
                              <>
                                <Check className="w-3 h-3 text-green-400" />
                                <span>Copied</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3 h-3" />
                                <span>Copy</span>
                              </>
                            )}
                          </button>
                        </div>

                        <div className="text-xs font-serif font-black text-[var(--color-text,#241217)] truncate">
                          {swatch.name}
                        </div>
                        <div className="text-[0.625rem] font-mono text-[var(--color-accent,#540D21)] font-bold">
                          {swatch.hex}
                        </div>
                      </div>

                      <div className="pt-2 mt-2 border-t border-[var(--color-mocha,#DECFC0)]/50 text-[0.625rem] font-mono text-[var(--color-text-muted,#D2BDCF)]">
                        {swatch.dmc}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 3. Detailed Inspector of Selected Swatch */}
            {selectedSwatch && (
              <div className="p-5 sm:p-6 bg-[var(--color-panel,#EFE6D5)] border border-[var(--color-accent,#540D21)]/60 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-4 flex items-center gap-4">
                  <div
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-sm border-2 border-[var(--color-accent,#540D21)] shrink-0 shadow-lg"
                    style={{ backgroundColor: selectedSwatch.hex }}
                  />
                  <div className="space-y-1">
                    <span className="text-[0.625rem] font-mono uppercase tracking-widest text-[var(--color-accent,#540D21)] font-bold">
                      {selectedSwatch.role}
                    </span>
                    <h4 className="text-lg font-serif font-black text-[var(--color-text,#241217)]">
                      {selectedSwatch.name}
                    </h4>
                    <div className="flex items-center gap-2 text-xs font-mono">
                      <span className="font-bold text-[var(--color-accent,#540D21)]">{selectedSwatch.hex}</span>
                      <span className="text-[var(--color-text-muted,#D2BDCF)]">· rgb({selectedSwatch.rgb})</span>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                  <div className="p-3 bg-[var(--color-base,#FAF6EE)] border border-[var(--color-mocha,#DECFC0)]">
                    <span className="text-[0.625rem] text-[var(--color-accent,#540D21)] uppercase tracking-wider block mb-1 font-bold">
                      DMC &amp; Textile Equivalent
                    </span>
                    <p className="text-[var(--color-text,#241217)] font-semibold">{selectedSwatch.dmc}</p>
                    <p className="text-[0.625rem] text-[var(--color-text-muted,#D2BDCF)] mt-0.5">{selectedSwatch.fabric}</p>
                  </div>

                  <div className="p-3 bg-[var(--color-base,#FAF6EE)] border border-[var(--color-mocha,#DECFC0)]">
                    <span className="text-[0.625rem] text-[var(--color-accent,#540D21)] uppercase tracking-wider block mb-1 font-bold">
                      Garment Application
                    </span>
                    <p className="text-[var(--color-text,#241217)] font-semibold">{selectedSwatch.garmentUsage}</p>
                    <p className="text-[0.625rem] text-[var(--color-text-muted,#D2BDCF)] mt-0.5">
                      Estimated proportion: {selectedSwatch.percentage}% of the garment
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer Action */}
          <div className="p-4 sm:p-5 border-t border-[var(--color-mocha,#DECFC0)] bg-[var(--color-panel,#EFE6D5)] flex flex-wrap items-center justify-between gap-3 shrink-0">
            <div className="text-[0.6875rem] font-mono text-[var(--color-text-muted,#D2BDCF)]">
              ✦ Colors calibrated for high-fidelity editorial display.
            </div>
            <button
              onClick={onClose}
              className="px-6 py-2.5 bg-[var(--color-accent,#540D21)] hover:bg-[#6E112B] text-[var(--color-base,#FAF6EE)] font-mono text-xs uppercase tracking-widest font-black transition-colors cursor-pointer flex items-center gap-2 shadow-lg"
            >
              <span>Apply &amp; Close</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
