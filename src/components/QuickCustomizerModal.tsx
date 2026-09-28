import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sliders, Check, RotateCcw, Sparkles } from 'lucide-react';
import { PortfolioData } from '../types';
import { initialPortfolioData } from '../data/portfolioData';

interface QuickCustomizerModalProps {
  isOpen: boolean;
  onClose: () => void;
  portfolioData: PortfolioData;
  onSave: (newData: PortfolioData) => void;
}

export const QuickCustomizerModal: React.FC<QuickCustomizerModalProps> = ({
  isOpen,
  onClose,
  portfolioData,
  onSave
}) => {
  const [formData, setFormData] = useState<PortfolioData>(portfolioData);
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleInputChange = (field: keyof PortfolioData, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value
    }));
  };

  const handleNestedSocialChange = (network: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      socials: {
        ...prev.socials,
        [network]: value
      }
    }));
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1200);
  };

  const handleReset = () => {
    setFormData(initialPortfolioData);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex justify-end">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#FAF6EE]/90 backdrop-blur-md"
        />

        {/* Slide-in Drawer from Right */}
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 30, stiffness: 300 }}
          className="relative w-full max-w-xl bg-[#FAF6EE] border-l-2 border-[#DECFC0] h-full z-10 shadow-2xl flex flex-col text-[#241217]"
        >
          {/* Drawer Header */}
          <div className="p-6 border-b border-[#DECFC0] flex items-center justify-between bg-[#F3EBDD]">
            <div className="flex items-center gap-3">
              <Sliders className="w-4 h-4 text-[#540D21]" />
              <div>
                <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#851737] font-bold">
                  PORTFOLIO CUSTOMIZER
                </div>
                <h3 className="text-lg font-serif font-bold uppercase text-[#241217]">
                  Personalize Atelier Data
                </h3>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 text-[#241217] hover:text-[#540D21] border border-[#DECFC0] hover:border-[#540D21] bg-[#EFE6D5] transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Palette Notice */}
          <div className="px-6 py-3 bg-[#EFE6D5] border-b border-[#DECFC0] flex items-center gap-3 text-xs text-[#540D21]">
            <span className="w-2 h-2 rounded-full bg-[#540D21] shadow-[0_0_8px_#540D21] shrink-0" />
            <span>
              <strong className="text-[#241217]">Haute Couture Theme:</strong> Rich dark espresso (#FAF6EE) with radiant antique brass &amp; gold (#540D21).
            </span>
          </div>

          {/* Scrollable Form Body */}
          <form onSubmit={handleSave} className="flex-1 overflow-y-auto p-6 space-y-6">
            {/* Core Identity */}
            <div className="space-y-4">
              <div className="text-xs font-mono uppercase tracking-widest text-[#540D21] border-b border-[#DECFC0] pb-2 font-bold">
                1. Identity &amp; Locations
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-mono uppercase text-[#851737] font-bold">Designer Name</label>
                  <input
                    type="text"
                    value={formData.name || ''}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="w-full bg-[#F3EBDD] border border-[#DECFC0] focus:border-[#540D21] px-3 py-2 text-sm text-[#241217] outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-mono uppercase text-[#851737] font-bold">Title / Role</label>
                  <input
                    type="text"
                    value={formData.title || ''}
                    onChange={(e) => handleInputChange('title', e.target.value)}
                    className="w-full bg-[#F3EBDD] border border-[#DECFC0] focus:border-[#540D21] px-3 py-2 text-sm text-[#241217] outline-none"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-mono uppercase text-[#851737] font-bold">Atelier Location</label>
                <input
                  type="text"
                  value={formData.location || ''}
                  onChange={(e) => handleInputChange('location', e.target.value)}
                  className="w-full bg-[#F3EBDD] border border-[#DECFC0] focus:border-[#540D21] px-3 py-2 text-sm text-[#241217] outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-mono uppercase text-[#851737] font-bold">Bio / About Me</label>
                <textarea
                  rows={4}
                  value={formData.aboutMe || ''}
                  onChange={(e) => handleInputChange('aboutMe', e.target.value)}
                  className="w-full bg-[#F3EBDD] border border-[#DECFC0] focus:border-[#540D21] px-3 py-2 text-sm text-[#241217] outline-none font-editorial leading-relaxed"
                />
              </div>
            </div>

            {/* Direct Contact Numbers */}
            <div className="space-y-4">
              <div className="text-xs font-mono uppercase tracking-widest text-[#540D21] border-b border-[#DECFC0] pb-2 font-bold">
                2. Direct Atelier Communication
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-mono uppercase text-[#851737] font-bold">Calling Number</label>
                  <input
                    type="text"
                    value={formData.callingNumber || ''}
                    onChange={(e) => handleInputChange('callingNumber', e.target.value)}
                    className="w-full bg-[#F3EBDD] border border-[#DECFC0] focus:border-[#540D21] px-3 py-2 text-sm text-[#241217] outline-none font-mono"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-mono uppercase text-[#851737] font-bold">WhatsApp Number</label>
                  <input
                    type="text"
                    value={formData.whatsappNumber || ''}
                    onChange={(e) => handleInputChange('whatsappNumber', e.target.value)}
                    className="w-full bg-[#F3EBDD] border border-[#DECFC0] focus:border-[#540D21] px-3 py-2 text-sm text-[#241217] outline-none font-mono"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-mono uppercase text-[#851737] font-bold">Contact Email</label>
                <input
                  type="email"
                  value={formData.contactEmail || ''}
                  onChange={(e) => handleInputChange('contactEmail', e.target.value)}
                  className="w-full bg-[#F3EBDD] border border-[#DECFC0] focus:border-[#540D21] px-3 py-2 text-sm text-[#241217] outline-none font-mono"
                />
              </div>
            </div>

            {/* Socials */}
            <div className="space-y-4">
              <div className="text-xs font-mono uppercase tracking-widest text-[#540D21] border-b border-[#DECFC0] pb-2 font-bold">
                3. Social Channels
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-mono uppercase text-[#851737] font-bold">Instagram URL</label>
                <input
                  type="text"
                  value={formData.socials?.instagram || ''}
                  onChange={(e) => handleNestedSocialChange('instagram', e.target.value)}
                  className="w-full bg-[#F3EBDD] border border-[#DECFC0] focus:border-[#540D21] px-3 py-2 text-sm text-[#241217] outline-none font-mono"
                />
              </div>
            </div>
          </form>

          {/* Drawer Footer Actions */}
          <div className="p-6 border-t border-[#DECFC0] bg-[#F3EBDD] flex items-center justify-between">
            <button
              type="button"
              onClick={handleReset}
              className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#851737] hover:text-[#540D21] transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Defaults</span>
            </button>

            <button
              onClick={handleSave}
              className="flex items-center gap-2 px-6 py-2.5 bg-[#540D21] hover:bg-[#851737] text-xs font-mono uppercase tracking-widest text-[#FAF6EE] transition-colors cursor-pointer font-bold shadow-[0_0_15px_rgba(84,13,33,0.3)]"
              data-cursor="pointer"
            >
              {savedSuccess ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#FAF6EE]" />
                  <span>Dossier Updated</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-3.5 h-3.5 text-[#FAF6EE]" />
                  <span>Apply Changes</span>
                </>
              )}
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
