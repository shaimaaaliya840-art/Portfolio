import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Instagram, Copy, Check, ArrowUpRight, Sparkles, Globe, Phone, MessageCircle } from 'lucide-react';
import { PortfolioData } from '../types';

interface ContactIvoryPageProps {
  portfolioData: PortfolioData;
  onOpenInquiry: () => void;
}

export const ContactIvoryPage: React.FC<ContactIvoryPageProps> = ({
  portfolioData,
  onOpenInquiry
}) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const email = portfolioData.contactEmail || 'shaimaaaliya840@gmail.com';
  const igUrl = portfolioData.socials?.instagram || 'https://www.instagram.com/shaimaaaliya/';
  const callingNo = portfolioData.callingNumber || '6351283152';
  const whatsappNo = portfolioData.whatsappNumber || '8404916721';

  return (
    <section
      id="contact-ivory"
      className="relative min-h-screen py-20 px-6 sm:px-12 border-b border-[#DECFC0] overflow-hidden selection:bg-[#540D21] selection:text-[#FAF6EE]"
    >
      {/* Volumetric Center Bloom */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[650px] bg-gradient-radial from-[#540D21]/10 via-[#851737]/5 to-transparent blur-[90px] pointer-events-none -z-10" />

      {/* Top Slide Page Meta (PAGE 12 // VAMOS TRABALHAR JUNTOS) */}
      <div className="max-w-7xl mx-auto flex items-center justify-between border-b border-[#DECFC0] pb-4 mb-14 text-xs font-mono tracking-[0.25em] text-[#540D21]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#540D21]" />
          <span className="text-[#241217] font-bold">PAGE 12 · LET’S WORK TOGETHER // ATELIER COMMISSIONS</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[#851737]">AHMEDABAD &amp; MUMBAI</span>
          <span className="text-[#540D21]">✦ 2026/2027</span>
        </div>
      </div>

      {/* Main Container Flanked by Dual Arches */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Arched Portrait (Arched oval frame) */}
        <div className="hidden lg:flex lg:col-span-3 flex-col items-center justify-center">
          <div className="w-[180px] aspect-[3/4.2] rounded-t-full border-2 border-[#540D21] p-1.5 bg-[#EFE6D5] shadow-[0_20px_40px_rgba(84,13,33,0.18)] overflow-hidden relative group">
            <div className="w-full h-full rounded-t-full overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop"
                alt="Shatma Portrait Atelier"
                className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
          <span className="text-[10px] font-mono text-[#540D21] uppercase tracking-widest mt-3 font-bold">
            INDUS DESIGN '27
          </span>
        </div>

        {/* Center: Main Contact Dossier Glowing Golden Plaque with Dark Silhouette Writeup */}
        <div className="lg:col-span-6 flex flex-col items-center text-center space-y-6 p-8 sm:p-10 bg-gradient-to-br from-[#540D21] via-[#75122F] to-[#380612] border-2 border-[#851737] shadow-[0_20px_40px_rgba(84,13,33,0.18)] relative overflow-hidden text-[#FAF6EE]">
          <div className="absolute inset-1.5 border border-[#FAF6EE]/20 pointer-events-none" />

          <div className="space-y-2">
            <h2 className="text-4xl sm:text-6xl font-avonia font-normal capitalize tracking-normal text-[#FAF6EE] leading-tight">
              Let’s Work Together
            </h2>
            <div className="text-xs font-mono uppercase tracking-[0.25em] text-[#FAF6EE]/85 font-bold">
              Let's Create Architectural Couture Together
            </div>
          </div>

          <div className="w-16 h-0.5 bg-[#FAF6EE]" />

          {/* Designer Branding */}
          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-avonia tracking-normal font-normal text-[#FAF6EE]">
              {portfolioData.name || 'Shatma Aaliya'}
            </div>
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#FAF6EE]/85 font-bold">
              Haute Couture Apprentice &amp; Designer
            </div>
          </div>

          {/* Circular Action Icons Row */}
          <div className="flex items-center justify-center gap-4 pt-1">
            <a
              href={`mailto:${email}?subject=${encodeURIComponent('Couture Commission Inquiry')}`}
              className="w-12 h-12 rounded-full border-2 border-[#FAF6EE] bg-[#FAF6EE] text-[#540D21] hover:bg-[#EFE6D5] transition-all flex items-center justify-center shadow-md group cursor-pointer"
              title={`Send Email: ${email}`}
              data-cursor="pointer"
            >
              <Mail className="w-5 h-5" />
            </a>

            <button
              onClick={onOpenInquiry}
              className="w-12 h-12 rounded-full border-2 border-[#FAF6EE] bg-[#FAF6EE] text-[#540D21] hover:bg-[#EFE6D5] transition-all flex items-center justify-center shadow-md group cursor-pointer"
              title="Request a Formal Proposal"
              data-cursor="pointer"
            >
              <Globe className="w-5 h-5" />
            </button>

            <a
              href={igUrl}
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 rounded-full border-2 border-[#FAF6EE] bg-[#FAF6EE] text-[#540D21] hover:bg-[#EFE6D5] transition-all flex items-center justify-center shadow-md group cursor-pointer"
              title="Official Instagram"
              data-cursor="pointer"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>

          {/* Direct Atelier Details */}
          <div className="w-full pt-4 border-t border-[#FAF6EE]/20 space-y-2 text-xs font-mono">
            <div className="flex items-center justify-between bg-[#FAF6EE]/10 p-2.5 rounded">
              <span className="font-bold text-[#FAF6EE]">CALL:</span>
              <span className="font-bold text-[#FAF6EE]">{callingNo}</span>
              <button
                onClick={() => copyToClipboard(callingNo, 'call')}
                className="text-[#FAF6EE] hover:opacity-70 cursor-pointer"
              >
                {copiedKey === 'call' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

            <div className="flex items-center justify-between bg-[#FAF6EE]/10 p-2.5 rounded">
              <span className="font-bold text-[#FAF6EE]">WHATSAPP:</span>
              <span className="font-bold text-[#FAF6EE]">{whatsappNo}</span>
              <button
                onClick={() => copyToClipboard(whatsappNo, 'wa')}
                className="text-[#FAF6EE] hover:opacity-70 cursor-pointer"
              >
                {copiedKey === 'wa' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Right Arched Lookbook Vignette */}
        <div className="hidden lg:flex lg:col-span-3 flex-col items-center justify-center">
          <div className="w-[180px] aspect-[3/4.2] rounded-t-full border-2 border-[#540D21] p-1.5 bg-[#EFE6D5] shadow-[0_20px_40px_rgba(84,13,33,0.18)] overflow-hidden relative group">
            <div className="w-full h-full rounded-t-full overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop"
                alt="Haute Couture Runway"
                className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
          <span className="text-[10px] font-mono text-[#540D21] uppercase tracking-widest mt-3 font-bold">
            NEELGAR ATELIER '26
          </span>
        </div>
      </div>
    </section>
  );
};
