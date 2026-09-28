import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, CheckCircle, Mail, Instagram } from 'lucide-react';
import { PortfolioData } from '../types';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  portfolioData: PortfolioData;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  onClose,
  portfolioData
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    commissionType: 'Haute Couture Silhouette',
    timeline: 'SS26 Runway',
    message: ''
  });

  if (!isOpen) return null;

  const email = portfolioData.contactEmail || 'shaimaaaliya840@gmail.com';
  const instagramUrl = portfolioData.socials?.instagram || 'https://www.instagram.com/shaimaaaliya/';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#1A121A]/90 backdrop-blur-md"
        />

        {/* Dialog */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          className="relative w-full max-w-2xl bg-[#1A121A] border-2 border-[#54394F] p-6 sm:p-10 z-10 shadow-2xl space-y-6"
        >
          <div className="flex items-center justify-between border-b border-[#54394F]/80 pb-4">
            <div>
              <div className="text-xs font-mono uppercase tracking-[0.25em] text-[#E9D5E6]">
                COMMISSION DOSSIER
              </div>
              <h3 className="text-2xl font-serif text-[#FAF0F8] pt-1">
                Initiate Dialogue with {portfolioData.name || 'Shatma Aaliya'}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-1 text-[#E9D5E6] hover:text-[#FAF0F8] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Instant Connect Option Strip */}
          <div className="bg-[#322131] border border-[#54394F] p-3.5 space-y-2">
            <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#E9D5E6] flex items-center justify-between">
              <span>DIRECT ATELIER TRANSMISSION</span>
              <span className="text-[#E9D5E6] flex items-center gap-1 font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E9D5E6] inline-block animate-pulse" /> Available for Commissions
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-mono text-xs">
              <a
                href={`mailto:${email}`}
                className="p-2.5 bg-[#1A121A] hover:bg-[#54394F] border border-[#54394F] hover:border-[#E9D5E6] text-[#E9D5E6] hover:text-[#FAF0F8] flex items-center justify-center gap-2 transition-colors"
                title={`Email: ${email}`}
              >
                <Mail className="w-3.5 h-3.5" />
                <span className="text-xs font-medium truncate">{email}</span>
              </a>

              <a
                href={instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 bg-[#1A121A] hover:bg-[#54394F] border border-[#54394F] hover:border-[#E9D5E6] text-[#E9D5E6] hover:text-[#FAF0F8] flex items-center justify-center gap-2 transition-colors"
                title="Instagram Profile"
              >
                <Instagram className="w-3.5 h-3.5 text-[#E9D5E6]" />
                <span className="text-xs">Instagram @shaimaaaliya</span>
              </a>
            </div>
          </div>

          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <CheckCircle className="w-12 h-12 text-[#E9D5E6] mx-auto animate-bounce" />
              <h4 className="text-xl font-serif text-[#FAF0F8]">Transmission Received</h4>
              <p className="text-sm font-serif italic text-[#FAF0F8]/80 max-w-md mx-auto">
                Thank you for reaching out. Shatma Aaliya will personally review your silhouette brief and respond within 24–48 hours with fitting timelines and material recommendations.
              </p>
              <button
                onClick={onClose}
                className="mt-4 px-6 py-2.5 bg-[#E9D5E6] text-[#1A121A] text-xs font-mono uppercase tracking-widest font-black"
              >
                Close Dossier
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono uppercase tracking-widest text-[#E9D5E6]">
                    Name / Brand
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Lady Eleanor / Vogue India"
                    className="w-full bg-[#322131] border border-[#54394F] focus:border-[#E9D5E6] px-3.5 py-2.5 text-sm text-[#FAF0F8] outline-none transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono uppercase tracking-widest text-[#E9D5E6]">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="contact@couturehouse.com"
                    className="w-full bg-[#322131] border border-[#54394F] focus:border-[#E9D5E6] px-3.5 py-2.5 text-sm text-[#FAF0F8] outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono uppercase tracking-widest text-[#E9D5E6]">
                    Commission Scope
                  </label>
                  <select
                    value={formData.commissionType}
                    onChange={(e) => setFormData({ ...formData, commissionType: e.target.value })}
                    className="w-full bg-[#322131] border border-[#54394F] focus:border-[#E9D5E6] px-3.5 py-2.5 text-sm text-[#FAF0F8] outline-none transition-colors"
                  >
                    <option value="Haute Couture Silhouette">Haute Couture Silhouette</option>
                    <option value="Bespoke Bridal Ensemble">Bespoke Bridal Ensemble</option>
                    <option value="CLO3D Digital Prototype">CLO3D Digital Prototype</option>
                    <option value="Textile Alchemy / Natural Dyeing">Textile Alchemy / Natural Dyeing</option>
                    <option value="Editorial Runway Direction">Editorial Runway Direction</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono uppercase tracking-widest text-[#E9D5E6]">
                    Target Timeline
                  </label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full bg-[#322131] border border-[#54394F] focus:border-[#E9D5E6] px-3.5 py-2.5 text-sm text-[#FAF0F8] outline-none transition-colors"
                  >
                    <option value="Immediate (2-3 Weeks)">Immediate (2-3 Weeks)</option>
                    <option value="SS26 Runway">SS26 Runway</option>
                    <option value="FW26 Collection">FW26 Collection</option>
                    <option value="Flexible Exploration">Flexible Exploration</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] font-mono uppercase tracking-widest text-[#E9D5E6]">
                  Vision / Concept Notes
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your desired silhouette, fabric preferences, cultural motifs, or runway context..."
                  className="w-full bg-[#322131] border border-[#54394F] focus:border-[#E9D5E6] px-3.5 py-2.5 text-sm text-[#FAF0F8] outline-none transition-colors resize-none"
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <span className="text-[11px] font-mono text-[#8A5C80]">
                  CONFIDENTIAL ATELIER RECORD
                </span>
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#54394F] hover:bg-[#8A5C80] border border-[#E9D5E6]/70 hover:border-[#E9D5E6] text-xs font-mono uppercase tracking-widest text-[#FAF0F8] transition-colors flex items-center gap-2 shadow-lg font-bold cursor-pointer"
                >
                  <span>Transmit Brief</span>
                  <Send className="w-3.5 h-3.5 text-[#E9D5E6]" />
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
