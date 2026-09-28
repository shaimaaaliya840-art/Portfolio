import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  Mail, 
  Instagram, 
  MessageCircle, 
  Copy, 
  Check, 
  ChevronUp, 
  ChevronDown, 
  Sparkles,
  ExternalLink,
  Palette,
  X
} from 'lucide-react';
import { PortfolioData } from '../types';

interface FloatingContactDockProps {
  portfolioData: PortfolioData;
  onOpenInquiry?: () => void;
  onOpenColorModal?: () => void;
}

export const FloatingContactDock: React.FC<FloatingContactDockProps> = ({
  portfolioData,
  onOpenInquiry,
  onOpenColorModal
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const name = portfolioData.name || 'Shatma Aaliya';
  const whatsappNo = portfolioData.whatsappNumber || '8404916721';
  const callingNo = portfolioData.callingNumber || '6351283152';
  const email = portfolioData.contactEmail || 'shaimaaaliya840@gmail.com';
  const instagramUrl = portfolioData.socials?.instagram || 'https://www.instagram.com/shaimaaaliya/';

  // Track scroll depth
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopy = (text: string, label: string, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    setTimeout(() => {
      setCopiedField(null);
    }, 2000);
  };

  const cleanWa = whatsappNo.replace(/\D/g, '');
  const cleanCall = callingNo.replace(/\D/g, '');

  return (
    <>
      {/* 1. Persistent Sleek Bottom Bar */}
      <div className="fixed bottom-0 left-0 w-full z-40 bg-[#FAF6EE]/95 backdrop-blur-md border-t border-[#DECFC0] text-[#241217] select-none shadow-[0_-10px_30px_rgba(0,0,0,0.8)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-2.5 flex items-center justify-between text-xs">
          {/* Quick Identity & Indicator */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#540D21] animate-pulse shadow-[0_0_8px_#540D21]" />
              <span className="font-serif tracking-widest text-[#241217] uppercase text-xs hidden sm:inline font-bold">
                {name}
              </span>
              <span className="font-mono text-[10px] text-[#540D21] uppercase tracking-widest hidden md:inline">
                · ATELIER DOSSIER
              </span>
            </div>

            {/* Quick Contact Inline Links */}
            <div className="flex items-center gap-2 sm:gap-4 text-[11px] font-mono">
              <a
                href={`https://wa.me/91${cleanWa}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-[#540D21] transition-colors group cursor-pointer"
                title="Chat on WhatsApp: 8404916721"
                data-cursor="pointer"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                <span className="text-[#851737] hidden md:inline font-mono">WA:</span>
                <span className="font-mono text-[#241217] group-hover:text-[#540D21]">{whatsappNo}</span>
              </a>

              <span className="text-[#DECFC0]">/</span>

              <a
                href={`tel:+91${cleanCall}`}
                className="flex items-center gap-1.5 hover:text-[#540D21] transition-colors group cursor-pointer"
                title="Call Shatma Aaliya: 6351283152"
                data-cursor="pointer"
              >
                <Phone className="w-3.5 h-3.5 text-[#540D21]" />
                <span className="text-[#851737] hidden md:inline font-mono">CALL:</span>
                <span className="font-mono text-[#241217] group-hover:text-[#540D21]">{callingNo}</span>
              </a>

              <span className="text-[#DECFC0]">/</span>

              <a
                href={`mailto:${email}`}
                className="flex items-center gap-1.5 hover:text-[#540D21] transition-colors group cursor-pointer"
                title={`Email: ${email}`}
                data-cursor="pointer"
              >
                <Mail className="w-3.5 h-3.5 text-[#851737]" />
                <span className="font-mono text-[#241217] group-hover:text-[#540D21] truncate max-w-[170px] sm:max-w-none">
                  {email}
                </span>
              </a>

              <span className="text-[#DECFC0] hidden lg:inline">/</span>

              <a
                href={instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="hidden lg:flex items-center gap-1.5 hover:text-[#540D21] transition-colors group cursor-pointer"
                title="Instagram Profile"
                data-cursor="pointer"
              >
                <Instagram className="w-3.5 h-3.5 text-[#540D21]" />
                <span className="font-mono text-[#241217] group-hover:text-[#540D21]">@shaimaaaliya</span>
              </a>
            </div>
          </div>

          {/* Expand / Detailed Card Trigger + Palette Trigger */}
          <div className="flex items-center gap-2 pl-3 shrink-0">
            {onOpenColorModal && (
              <button
                onClick={onOpenColorModal}
                className="flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider bg-[#EFE6D5] border border-[#540D21] text-[#540D21] hover:bg-[#540D21] hover:text-[#FAF6EE] transition-all cursor-pointer shadow-sm"
                data-cursor="pointer"
                title="Abrir Inspiração de Cores & Paletas de Atelier"
              >
                <Palette className="w-3 h-3" />
                <span className="hidden sm:inline">Cores</span>
              </button>
            )}

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              id="expand-contact-dock-btn"
              className="flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider bg-[#EFE6D5] border border-[#DECFC0] hover:border-[#540D21] text-[#540D21] hover:text-[#241217] transition-all cursor-pointer"
              data-cursor="pointer"
            >
              <span>{isExpanded ? 'Minimize' : 'Full Card'}</span>
              {isExpanded ? <ChevronDown className="w-3 h-3" /> : <ChevronUp className="w-3 h-3" />}
            </button>
          </div>
        </div>

        {/* Scroll Progress Line under the persistent bottom bar */}
        <div className="w-full h-[2px] bg-[#DECFC0]/50">
          <div 
            className="h-full bg-gradient-to-r from-[#A63856] via-[#540D21] to-[#A63856] transition-all duration-150"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </div>

      {/* 2. Floating Contact Card (Opens on toggle from bottom right) */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-14 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[420px] bg-[#FAF6EE] border-2 border-[#DECFC0] shadow-[0_20px_60px_rgba(0,0,0,0.9)] p-5 sm:p-6 backdrop-blur-xl"
          >
            {/* Header */}
            <div className="flex items-start justify-between border-b border-[#DECFC0]/70 pb-4 mb-4">
              <div>
                <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.25em] text-[#851737]">
                  <span className="w-2 h-2 bg-[#EFE6D5] border border-[#540D21]/60" />
                  <span>DIRECT ATELIER DOSSIER</span>
                </div>
                <h4 className="text-xl font-serif font-black uppercase text-[#241217] tracking-tight mt-1">
                  {name}
                </h4>
                <div className="text-[11px] font-mono text-[#851737]">
                  Haute Couture Apprentice &amp; Designer
                </div>
              </div>
              <button
                onClick={() => setIsExpanded(false)}
                className="p-1 text-[#851737] hover:text-[#540D21] transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Quick Actions List */}
            <div className="space-y-2 mb-6">
              {/* WhatsApp */}
              <div className="p-3 bg-[#EFE6D5] border border-[#DECFC0] flex items-center justify-between">
                <a
                  href={`https://wa.me/91${cleanWa}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 font-mono text-xs text-[#241217] hover:text-[#540D21]"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>WhatsApp: +91 {whatsappNo}</span>
                </a>
                <button
                  onClick={(e) => handleCopy(whatsappNo, 'wa', e)}
                  className="p-1 text-[#851737] hover:text-[#540D21] cursor-pointer"
                  title="Copy Number"
                >
                  {copiedField === 'wa' ? <Check className="w-3.5 h-3.5 text-[#10B981]" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Call */}
              <div className="p-3 bg-[#EFE6D5] border border-[#DECFC0] flex items-center justify-between">
                <a
                  href={`tel:+91${cleanCall}`}
                  className="flex items-center gap-2.5 font-mono text-xs text-[#241217] hover:text-[#540D21]"
                >
                  <Phone className="w-4 h-4 text-[#540D21]" />
                  <span>Call: +91 {callingNo}</span>
                </a>
                <button
                  onClick={(e) => handleCopy(callingNo, 'call', e)}
                  className="p-1 text-[#851737] hover:text-[#540D21] cursor-pointer"
                  title="Copy Phone"
                >
                  {copiedField === 'call' ? <Check className="w-3.5 h-3.5 text-[#10B981]" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Email */}
              <div className="p-3 bg-[#EFE6D5] border border-[#DECFC0] flex items-center justify-between">
                <a
                  href={`mailto:${email}`}
                  className="flex items-center gap-2.5 font-mono text-xs text-[#241217] hover:text-[#540D21] truncate mr-2"
                >
                  <Mail className="w-4 h-4 text-[#851737] shrink-0" />
                  <span className="truncate">{email}</span>
                </a>
                <button
                  onClick={(e) => handleCopy(email, 'email', e)}
                  className="p-1 text-[#851737] hover:text-[#540D21] cursor-pointer shrink-0"
                  title="Copy Email"
                >
                  {copiedField === 'email' ? <Check className="w-3.5 h-3.5 text-[#10B981]" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="flex gap-2">
              <button
                onClick={() => {
                  setIsExpanded(false);
                  onOpenInquiry?.();
                }}
                className="flex-1 py-3 bg-gradient-to-r from-[#540D21] to-[#851737] hover:from-[#F3E2F0] hover:to-[#540D21] text-[#FAF6EE] font-mono text-xs uppercase tracking-widest font-black transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Solicitar Proposta</span>
                <Sparkles className="w-3.5 h-3.5 text-[#FAF6EE]" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
