import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Instagram, Copy, Check, ArrowUpRight, Sparkles, Globe, MessageCircle } from 'lucide-react';
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
  const whatsappNo = portfolioData.whatsappNumber || '8404916721';
  const cleanDigits = whatsappNo.replace(/\D/g, '');
  const waTarget = cleanDigits.length === 10 ? `91${cleanDigits}` : cleanDigits;
  const waChatUrl = `https://wa.me/${waTarget}?text=${encodeURIComponent("Hello Shatma, I came across your couture portfolio and would love to connect!")}`;

  return (
    <section
      id="contact-ivory"
      className="relative min-h-screen py-20 px-6 sm:px-12 border-b border-[#DECFC0] overflow-hidden selection:bg-[#540D21] selection:text-[#FAF6EE]"
    >
      {/* Volumetric Center Bloom */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[650px] bg-gradient-radial from-[#540D21]/10 via-[#851737]/5 to-transparent blur-[90px] pointer-events-none -z-10" />

      {/* Top Slide Page Meta */}
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-x-4 gap-y-1 border-b border-[#DECFC0] pb-4 mb-14 text-xs font-mono tracking-[0.25em] text-[#540D21]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#540D21]" />
          <span className="text-[#241217] font-bold">PAGE 05 · LET’S WORK TOGETHER // ATELIER COMMISSIONS</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[#851737]">AHMEDABAD &amp; MUMBAI</span>
          <span className="text-[#540D21]">✦ 2026/2027</span>
        </div>
      </div>

      {/* Main Container Flanked by Dual Arches */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Arched Portrait */}
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
          <span className="text-[0.625rem] font-mono text-[#540D21] uppercase tracking-widest mt-3 font-bold">
            INDUS DESIGN '27
          </span>
        </div>

        {/* Center: Main Contact Plaque */}
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
          <div className="flex items-center justify-center gap-3.5 pt-1">
            <a
              href={`mailto:${email}?subject=${encodeURIComponent('Couture Commission Inquiry')}`}
              className="w-12 h-12 rounded-full border-2 border-[#FAF6EE] bg-[#FAF6EE] text-[#540D21] hover:bg-[#EFE6D5] transition-all flex items-center justify-center shadow-md group cursor-pointer"
              title={`Send Email: ${email}`}
              data-cursor="pointer"
            >
              <Mail className="w-5 h-5" />
            </a>

            <a
              href={waChatUrl}
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 rounded-full border-2 border-[#FAF6EE] bg-[#FAF6EE] text-[#25D366] hover:bg-[#EFE6D5] transition-all flex items-center justify-center shadow-md group cursor-pointer"
              title="Chat on WhatsApp"
              data-cursor="pointer"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
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

          {/* Direct Atelier Actions (Number is not printed on page; opens pre-filled chat) */}
          <div className="w-full pt-4 border-t border-[#FAF6EE]/20 space-y-3 text-xs font-mono">
            {/* WhatsApp Pre-filled Chat Button */}
            <a
              href={waChatUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full py-3.5 px-4 bg-[#25D366] hover:bg-[#20ba59] text-white font-mono text-xs uppercase tracking-[0.2em] font-bold transition-all shadow-lg flex items-center justify-center gap-2.5 rounded-sm cursor-pointer group"
              data-cursor="pointer"
            >
              <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
              <span>Chat on WhatsApp</span>
              <ArrowUpRight className="w-4 h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* Email Direct Line */}
            <div className="flex items-center justify-between bg-[#FAF6EE]/10 p-2.5 rounded">
              <div className="flex items-center gap-2 truncate">
                <Mail className="w-3.5 h-3.5 text-[#FAF6EE]/80 shrink-0" />
                <span className="font-bold text-[#FAF6EE] truncate">{email}</span>
              </div>
              <button
                onClick={() => copyToClipboard(email, 'email')}
                className="text-[#FAF6EE] hover:opacity-70 cursor-pointer shrink-0 ml-2"
                title="Copy Email"
              >
                {copiedKey === 'email' ? <Check className="w-3.5 h-3.5 text-[#10B981]" /> : <Copy className="w-3.5 h-3.5" />}
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
          <span className="text-[0.625rem] font-mono text-[#540D21] uppercase tracking-widest mt-3 font-bold">
            NEELGAR ATELIER '26
          </span>
        </div>
      </div>
    </section>
  );
};
