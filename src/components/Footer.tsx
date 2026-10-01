import React, { useState } from 'react';
import { ArrowUp, ArrowUpRight, Mail, Instagram, Copy, Check } from 'lucide-react';
import { PortfolioData } from '../types';

interface FooterProps {
  portfolioData: PortfolioData;
  onOpenInquiry: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  portfolioData,
  onOpenInquiry
}) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const email = portfolioData.contactEmail || 'shaimaaaliya840@gmail.com';
  const instagram = portfolioData.socials?.instagram || 'https://www.instagram.com/shaimaaaliya/';

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="bg-[#FAF6EE]/95 backdrop-blur-md border-t border-[#DECFC0] text-[#241217]">
      {/* Upper Footer CTA Strip */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 border-b border-[#DECFC0]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8 space-y-6">
            <div className="text-xs font-mono uppercase tracking-[0.25em] text-[#851737] flex items-center gap-2">
              <span>// INITIATE DIALOGUE</span>
              <span className="text-[#540D21]">✦</span>
              <span>GRADUATING COMMISSIONS & ATELIER</span>
            </div>

            <h2 className="text-4xl sm:text-6xl md:text-7xl font-serif font-normal text-[#241217] leading-tight">
              {portfolioData.name || 'Shatma Aaliya'}
            </h2>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                id="footer-inquire-btn"
                onClick={onOpenInquiry}
                className="group px-8 py-4 bg-[#EFE6D5] border border-[#DECFC0] hover:border-[#540D21] hover:text-[#540D21] text-xs font-mono uppercase tracking-[0.2em] transition-all flex items-center gap-3 text-[#241217] shadow-md"
                data-cursor="pointer"
              >
                <span>Work With Me // Request Dossier</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 text-[#540D21]" />
              </button>

              <a
                href={instagram}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-4 border border-[#DECFC0] hover:border-[#540D21] text-xs font-mono uppercase tracking-[0.2em] text-[#540D21] hover:text-[#241217] transition-colors flex items-center gap-2 bg-[#FAF6EE]"
                data-cursor="pointer"
              >
                <Instagram className="w-4 h-4 text-[#540D21]" />
                <span>Instagram: @shaimaaaliya</span>
              </a>
            </div>

            {/* Direct Quick-Contact Box */}
            <div className="pt-4 max-w-xl font-mono text-xs">
              {/* Email Quick Box */}
              <div className="p-4 bg-[#EFE6D5]/60 border border-[#DECFC0] flex items-center justify-between">
                <div className="flex items-center gap-3 min-w-0">
                  <Mail className="w-4 h-4 text-[#851737] shrink-0" />
                  <div className="min-w-0">
                    <span className="text-[0.625rem] text-[#851737] block uppercase tracking-widest">Official Transmission</span>
                    <span className="text-[#241217] font-medium truncate block text-sm">{email}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => handleCopy(email, 'footer-email')}
                    className="px-3 py-1.5 border border-[#DECFC0] text-[#851737] hover:text-[#540D21] hover:border-[#540D21] text-xs flex items-center gap-1.5"
                    title="Copy Email"
                  >
                    {copiedField === 'footer-email' ? <Check className="w-3.5 h-3.5 text-[#10B981]" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedField === 'footer-email' ? 'Copied' : 'Copy'}</span>
                  </button>
                  <a
                    href={`mailto:${email}`}
                    className="px-3 py-1.5 bg-[#DECFC0] hover:bg-[#A63856] border border-[#DECFC0] text-[#540D21] hover:text-[#241217] text-xs uppercase font-bold"
                  >
                    Email
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-between space-y-8">
            <div className="space-y-3">
              <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#851737]">
                LOCATIONS & ATELIER BASES
              </div>
              <div className="space-y-1 text-sm font-serif text-[#540D21]">
                <div>Indus Design School • Ahmedabad</div>
                <div>Neelgar Couture Atelier • Mumbai</div>
                <div>Graduating Class of 2023–2027</div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#851737]">
                CURATED ARCHIVES & CHANNELS
              </div>
              <div className="flex flex-col gap-2 text-xs font-mono uppercase tracking-wider text-[#540D21]">
                <a
                  href={instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#241217] transition-colors flex items-center justify-between py-1 border-b border-[#DECFC0]/50 group"
                  data-cursor="pointer"
                >
                  <span className="flex items-center gap-1.5">
                    <Instagram className="w-3.5 h-3.5 text-[#540D21] group-hover:text-[#241217]" />
                    <span>Instagram Profile</span>
                  </span>
                  <span className="text-[#851737] group-hover:text-[#540D21]">@shaimaaaliya</span>
                </a>
                <a
                  href={`mailto:${email}`}
                  className="hover:text-[#241217] transition-colors flex items-center justify-between py-1 border-b border-[#DECFC0]/50 group"
                  data-cursor="pointer"
                >
                  <span className="flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-[#851737]" />
                    <span>Direct Email</span>
                  </span>
                  <span className="text-[#851737] group-hover:text-[#540D21] truncate max-w-[140px]">{email}</span>
                </a>
                <a
                  href={`https://${portfolioData.socials.arena}`}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#241217] transition-colors flex items-center justify-between py-1 border-b border-[#DECFC0]/50"
                  data-cursor="pointer"
                >
                  <span>Are.na Archive</span>
                  <span className="text-[#851737]">/shatma-aaliya</span>
                </a>
                <a
                  href={`https://${portfolioData.socials.substack}`}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#241217] transition-colors flex items-center justify-between py-1 border-b border-[#DECFC0]/50"
                  data-cursor="pointer"
                >
                  <span>Design Journal</span>
                  <span className="text-[#851737]">Femme Fatale Anatomy</span>
                </a>
                <a
                  href={`https://${portfolioData.socials.linkedin}`}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#241217] transition-colors flex items-center justify-between py-1 border-b border-[#DECFC0]/50"
                  data-cursor="pointer"
                >
                  <span>LinkedIn Dossier</span>
                  <span className="text-[#851737]">Connect</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lower Footer Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-mono uppercase tracking-wider text-[#851737]">
        <div className="flex items-center gap-4">
          <span className="text-[#540D21] font-serif font-bold text-sm bg-[#EFE6D5] px-2 py-0.5 border border-[#DECFC0]">S·A</span>
          <span>© 2026 {portfolioData.name || 'SHATMA AALIYA'}</span>
          <span className="hidden md:inline">• INDUS DESIGN SCHOOL '27</span>
        </div>

        <div className="flex items-center gap-6">
          <span className="text-[#540D21]/80">NEELGAR ARCHIVES & INDIAN TEXTILES</span>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-[#540D21] hover:text-[#241217] transition-colors"
            data-cursor="pointer"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
