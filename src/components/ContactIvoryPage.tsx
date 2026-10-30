import React, { useState } from 'react';
import { Mail, Instagram, Copy, Check, ArrowUpRight, Phone, MapPin } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { PortfolioData } from '../types';

interface ContactIvoryPageProps {
  portfolioData: PortfolioData;
  onOpenInquiry?: () => void;
}

export const ContactIvoryPage: React.FC<ContactIvoryPageProps> = ({
  portfolioData
}) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const name = portfolioData.name || 'Shatma Aaliya';
  const email = portfolioData.contactEmail || 'shaimaaaliya840@gmail.com';
  const igUrl = portfolioData.socials?.instagram || 'https://www.instagram.com/shaimaaaliya/';
  const whatsappNo = portfolioData.whatsappNumber || '8404916721';
  const callingNo = portfolioData.callingNumber || '6351283152';

  const rawWa = whatsappNo.replace(/\D/g, '');
  const waTarget = rawWa.length === 10 ? `91${rawWa}` : (rawWa.startsWith('91') ? rawWa : `91${rawWa}`);
  const waChatUrl = `https://api.whatsapp.com/send?phone=${waTarget}&text=${encodeURIComponent("Hello Shatma, I came across your portfolio and would love to connect!")}`;

  const cleanCall = callingNo.replace(/\D/g, '');
  const telTarget = cleanCall.length === 10 ? `+91${cleanCall}` : `+${cleanCall}`;

  return (
    <section
      id="lets-work-together"
      className="relative min-h-screen py-20 px-6 sm:px-12 border-b border-[#DECFC0] overflow-hidden selection:bg-[#540D21] selection:text-[#FAF6EE]"
    >
      {/* Anchor alias for backward compatibility */}
      <div id="contact" className="absolute -top-24 pointer-events-none" />
      <div id="contact-ivory" className="absolute -top-24 pointer-events-none" />

      {/* Volumetric Center Bloom */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[650px] bg-gradient-radial from-[#540D21]/10 via-[#851737]/5 to-transparent blur-[90px] pointer-events-none -z-10" />

      {/* Top Slide Page Meta */}
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-x-4 gap-y-1 border-b border-[#DECFC0] pb-4 mb-14 text-xs font-mono tracking-[0.25em] text-[#540D21]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#540D21]" />
          <span className="text-[#241217] font-bold">PAGE 05</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[#851737]">AHMEDABAD, GUJARAT</span>
        </div>
      </div>

      {/* Center: Main Contact Plaque */}
      <div className="max-w-xl mx-auto flex flex-col items-center text-center space-y-6 p-8 sm:p-12 bg-gradient-to-br from-[#540D21] via-[#75122F] to-[#380612] border-2 border-[#851737] shadow-[0_20px_40px_rgba(84,13,33,0.18)] relative overflow-hidden text-[#FAF6EE]">
        <div className="absolute inset-1.5 border border-[#FAF6EE]/20 pointer-events-none" />

        <div className="space-y-2">
          <h2 className="text-4xl sm:text-6xl font-avonia font-normal capitalize tracking-normal text-[#FAF6EE] leading-tight">
            Contact
          </h2>
        </div>

        <div className="w-16 h-0.5 bg-[#FAF6EE]" />

        {/* Designer Branding */}
        <div className="space-y-1">
          <div className="text-3xl sm:text-4xl font-avonia tracking-normal font-normal text-[#FAF6EE]">
            {name}
          </div>
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#FAF6EE]/85 font-bold">
            Fashion Designer
          </div>
          <div className="flex items-center justify-center gap-1.5 text-[0.6875rem] font-mono text-[#FAF6EE]/75 pt-1">
            <MapPin className="w-3.5 h-3.5 text-[#FAF6EE]/80" />
            <span>Ahmedabad, Gujarat</span>
          </div>
        </div>

        {/* Circular Action Icons Row */}
        <div className="flex items-center justify-center gap-4 pt-1">
          <a
            href={`mailto:${email}?subject=${encodeURIComponent('Portfolio Inquiry')}`}
            className="w-12 h-12 rounded-full border-2 border-[#FAF6EE] bg-[#FAF6EE] text-[#540D21] hover:bg-[#EFE6D5] transition-all flex items-center justify-center shadow-md group cursor-pointer"
            title={`Send Email: ${email}`}
            data-cursor="pointer"
          >
            <Mail className="w-5 h-5" />
          </a>

          <a
            href={waChatUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full border-2 border-[#FAF6EE] bg-[#FAF6EE] text-[#25D366] hover:bg-[#EFE6D5] transition-all flex items-center justify-center shadow-md group cursor-pointer"
            title="Chat on WhatsApp"
            data-cursor="pointer"
          >
            <WhatsAppIcon className="w-6 h-6 fill-[#25D366]" />
          </a>

          <a
            href={`tel:${telTarget}`}
            className="w-12 h-12 rounded-full border-2 border-[#FAF6EE] bg-[#FAF6EE] text-[#540D21] hover:bg-[#EFE6D5] transition-all flex items-center justify-center shadow-md group cursor-pointer"
            title={`Call: +91 ${callingNo}`}
            data-cursor="pointer"
          >
            <Phone className="w-5 h-5" />
          </a>

          <a
            href={igUrl}
            target="_blank"
            rel="noreferrer"
            className="w-12 h-12 rounded-full border-2 border-[#FAF6EE] bg-[#FAF6EE] text-[#540D21] hover:bg-[#EFE6D5] transition-all flex items-center justify-center shadow-md group cursor-pointer"
            title="Instagram: @shaimaaaliya"
            data-cursor="pointer"
          >
            <Instagram className="w-5 h-5" />
          </a>
        </div>

        {/* Direct Contact Channels */}
        <div className="w-full pt-4 border-t border-[#FAF6EE]/20 space-y-3 text-xs font-mono">
          {/* WhatsApp Action Button */}
          <a
            href={waChatUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 px-4 bg-[#25D366] hover:bg-[#20ba59] text-white font-mono text-xs uppercase tracking-[0.2em] font-bold transition-all shadow-lg flex items-center justify-center gap-2.5 rounded-sm cursor-pointer group"
            data-cursor="pointer"
          >
            <WhatsAppIcon className="w-5 h-5 fill-white" />
            <span>Chat on WhatsApp (+91 {whatsappNo})</span>
            <ArrowUpRight className="w-4 h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          {/* Email Direct Line */}
          <div className="flex items-center justify-between bg-[#FAF6EE]/10 p-2.5 rounded">
            <div className="flex items-center gap-2 truncate">
              <Mail className="w-3.5 h-3.5 text-[#FAF6EE]/80 shrink-0" />
              <a
                href={`mailto:${email}?subject=${encodeURIComponent('Portfolio Inquiry')}`}
                className="font-bold text-[#FAF6EE] truncate hover:underline"
              >
                {email}
              </a>
            </div>
            <button
              onClick={() => copyToClipboard(email, 'email')}
              className="text-[#FAF6EE] hover:opacity-70 cursor-pointer shrink-0 ml-2"
              title="Copy Email"
            >
              {copiedKey === 'email' ? <Check className="w-3.5 h-3.5 text-[#10B981]" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>

          {/* Calling Direct Line */}
          <div className="flex items-center justify-between bg-[#FAF6EE]/10 p-2.5 rounded">
            <div className="flex items-center gap-2 truncate">
              <Phone className="w-3.5 h-3.5 text-[#FAF6EE]/80 shrink-0" />
              <a
                href={`tel:${telTarget}`}
                className="font-bold text-[#FAF6EE] truncate hover:underline"
              >
                +91 {callingNo}
              </a>
            </div>
            <button
              onClick={() => copyToClipboard(callingNo, 'phone')}
              className="text-[#FAF6EE] hover:opacity-70 cursor-pointer shrink-0 ml-2"
              title="Copy Phone Number"
            >
              {copiedKey === 'phone' ? <Check className="w-3.5 h-3.5 text-[#10B981]" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>

          {/* Instagram Direct Line */}
          <div className="flex items-center justify-between bg-[#FAF6EE]/10 p-2.5 rounded">
            <div className="flex items-center gap-2 truncate">
              <Instagram className="w-3.5 h-3.5 text-[#FAF6EE]/80 shrink-0" />
              <a
                href={igUrl}
                target="_blank"
                rel="noreferrer"
                className="font-bold text-[#FAF6EE] truncate hover:underline"
              >
                @shaimaaaliya
              </a>
            </div>
            <a
              href={igUrl}
              target="_blank"
              rel="noreferrer"
              className="text-[#FAF6EE] hover:opacity-70 shrink-0 ml-2"
              title="Open Instagram Profile"
            >
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
