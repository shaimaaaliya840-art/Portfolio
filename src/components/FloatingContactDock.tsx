import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Mail, 
  Instagram, 
  MessageCircle, 
  Copy, 
  Check, 
  ChevronUp, 
  ChevronDown, 
  Sparkles,
  ExternalLink,
  ArrowUpRight,
  X,
  ArrowUp
} from 'lucide-react';
import { PortfolioData } from '../types';

interface FloatingContactDockProps {
  portfolioData: PortfolioData;
  onOpenInquiry?: () => void;
  onOpenColorModal?: () => void;
}

export const FloatingContactDock: React.FC<FloatingContactDockProps> = ({
  portfolioData,
  onOpenInquiry
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const name = portfolioData.name || 'Shatma Aaliya';
  const whatsappNo = portfolioData.whatsappNumber || '8404916721';
  const email = portfolioData.contactEmail || 'shaimaaaliya840@gmail.com';
  const instagramUrl = portfolioData.socials?.instagram || 'https://www.instagram.com/shaimaaaliya/';

  // Track scroll depth and hero visibility
  useEffect(() => {
    const handleScroll = () => {
      // 1. Detect if visitor has scrolled past the hero section
      const hero = document.getElementById('hero-section');
      if (hero) {
        const rect = hero.getBoundingClientRect();
        const pastHero = rect.bottom <= 60;
        setIsVisible(pastHero);
        if (!pastHero) {
          setIsExpanded(false);
        }
      } else {
        const pastHero = window.scrollY > 450;
        setIsVisible(pastHero);
        if (!pastHero) {
          setIsExpanded(false);
        }
      }

      // 2. Track total scroll progress
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const cleanDigits = whatsappNo.replace(/\D/g, '');
  const waTarget = cleanDigits.length === 10 ? `91${cleanDigits}` : cleanDigits;
  const waChatUrl = `https://wa.me/${waTarget}?text=${encodeURIComponent("Hello Shatma, I came across your portfolio and would love to connect!")}`;

  return (
    <>
      {/* 1. Persistent Sleek Bottom Bar (Height: 44px, visible only after scrolling past hero) */}
      <div 
        className={`fixed bottom-0 left-0 w-full z-40 bg-[#540D21] border-t border-[#FAF6EE]/15 text-[#FAF6EE] select-none shadow-[0_-10px_30px_rgba(0,0,0,0.8)] h-[44px] transition-all duration-300 ease-out ${
          isVisible ? 'translate-y-0 opacity-100 pointer-events-auto' : 'translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 h-full flex items-center justify-between text-xs">
          {/* Quick Identity & Indicator */}
          <div className="flex min-w-0 flex-1 items-center gap-3 sm:gap-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FAF6EE] animate-pulse shadow-[0_0_8px_#FAF6EE]" />
              <span className="font-serif tracking-widest text-[#FAF6EE] uppercase text-xs font-bold hidden xs:inline">
                {name}
              </span>
            </div>

            <span className="text-[#FAF6EE]/35 hidden sm:inline">|</span>

            {/* Keep only Email & Instagram handle */}
            <div className="flex min-w-0 items-center gap-2.5 sm:gap-4 text-[0.6875rem] font-mono">
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-1.5 hover:text-white transition-colors group cursor-pointer"
                title={`Email: ${email}`}
                data-cursor="pointer"
              >
                <Mail className="w-3.5 h-3.5 text-[#F0C9D6]" />
                <span className="font-mono text-[#FAF6EE] group-hover:text-white truncate max-w-[160px] sm:max-w-none">
                  {email}
                </span>
              </a>

              <span className="hidden text-[#FAF6EE]/35 sm:inline">/</span>

              <a
                href={instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="hidden sm:flex items-center gap-1.5 hover:text-white transition-colors group cursor-pointer"
                title="Instagram Profile"
                data-cursor="pointer"
              >
                <Instagram className="w-3.5 h-3.5 text-[#F0C9D6]" />
                <span className="font-mono text-[#FAF6EE] group-hover:text-white">
                  @shaimaaaliya
                </span>
              </a>
            </div>
          </div>

          {/* Action Triggers: Back to Top + Contact Toggle */}
          <div className="flex items-center gap-2 pl-3 shrink-0">
            {scrollProgress > 5 && (
              <button
                onClick={scrollToTop}
                className="flex items-center justify-center w-6 h-6 bg-[#EFE6D5] border border-[#DECFC0] hover:border-white text-[#540D21] hover:bg-white transition-all cursor-pointer rounded-sm"
                title="Back to Top"
              >
                <ArrowUp className="w-3 h-3" />
              </button>
            )}

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              id="expand-contact-dock-btn"
              className="flex items-center gap-1.5 px-3 py-1 text-[0.6875rem] font-mono uppercase tracking-wider bg-[#EFE6D5] border border-[#DECFC0] hover:border-white text-[#540D21] hover:bg-white transition-all cursor-pointer font-bold rounded-sm h-6"
              data-cursor="pointer"
            >
              <span>{isExpanded ? 'Close' : 'Contact'}</span>
              {isExpanded ? <ChevronDown className="w-3 h-3" /> : <ChevronUp className="w-3 h-3" />}
            </button>
          </div>
        </div>

        {/* Scroll Progress Line under the bottom bar */}
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#FAF6EE]/15">
          <div 
            className="h-full bg-gradient-to-r from-[#E9D5E6] via-[#FAF6EE] to-[#E9D5E6] transition-all duration-150"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </div>

      {/* 2. Floating Contact Card (Opens on toggle from bottom right) */}
      <AnimatePresence>
        {isExpanded && isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-[52px] right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[400px] bg-[#FAF6EE] border-2 border-[#DECFC0] shadow-[0_20px_60px_rgba(0,0,0,0.9)] p-5 sm:p-6"
          >
            {/* Header */}
            <div className="flex items-start justify-between border-b border-[#DECFC0]/70 pb-4 mb-4">
              <div>
                <div className="flex items-center gap-2 text-[0.625rem] font-mono uppercase tracking-[0.25em] text-[#851737]">
                  <span className="w-2 h-2 bg-[#EFE6D5] border border-[#540D21]/60" />
                  <span>DIRECT CONTACT</span>
                </div>
                <h4 className="text-xl font-serif font-black uppercase text-[#241217] tracking-tight mt-1">
                  {name}
                </h4>
                <div className="text-[0.6875rem] font-mono text-[#851737]">
                  Haute Couture Apprentice &amp; Designer
                </div>
              </div>
              <button
                onClick={() => setIsExpanded(false)}
                className="p-1 text-[#851737] hover:text-[#540D21] transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Quick Actions List */}
            <div className="space-y-2.5 mb-6">
              {/* Pre-filled WhatsApp button (no raw number printed) */}
              <a
                href={waChatUrl}
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/40 flex items-center justify-between transition-colors group cursor-pointer"
              >
                <div className="flex items-center gap-2.5 font-mono text-xs text-[#0D381E] font-bold">
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>Chat on WhatsApp</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#25D366] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

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

              {/* Instagram */}
              <div className="p-3 bg-[#EFE6D5] border border-[#DECFC0] flex items-center justify-between">
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 font-mono text-xs text-[#241217] hover:text-[#540D21]"
                >
                  <Instagram className="w-4 h-4 text-[#851737] shrink-0" />
                  <span>Instagram: @shaimaaaliya</span>
                </a>
                <ExternalLink className="w-3.5 h-3.5 text-[#851737]" />
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="flex gap-2">
              <button
                onClick={() => {
                  setIsExpanded(false);
                  onOpenInquiry?.();
                }}
                className="flex-1 py-3 bg-gradient-to-r from-[#540D21] to-[#851737] hover:from-[#75122F] hover:to-[#540D21] text-[#FAF6EE] font-mono text-xs uppercase tracking-widest font-black transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Request a Proposal</span>
                <Sparkles className="w-3.5 h-3.5 text-[#FAF6EE]" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
