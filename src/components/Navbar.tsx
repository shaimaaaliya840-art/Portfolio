import React, { useState, useEffect } from 'react';
import { PortfolioData } from '../types';
import { AtelierPalette } from '../data/colorPalettes';

interface NavbarProps {
  portfolioData: PortfolioData;
  activePalette?: AtelierPalette;
  onOpenColorModal?: () => void;
  onOpenCustomizer?: () => void;
  onOpenInquiry?: () => void;
  onOpenDeck?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  portfolioData,
}) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { label: 'Capa', href: '#hero-section' },
    { label: 'Manifesto', href: '#kinetic-manifesto' },
    { label: 'Cores', href: '#color-inspiration-page' },
    { label: 'Quem Sou Eu', href: '#manifesto-arch' },
    { label: 'Feedbacks', href: '#feedbacks-page' },
    { label: 'Benefícios', href: '#benefits-stats' },
    { label: 'Pacotes', href: '#packages-page' },
    { label: 'Como Funciona', href: '#how-it-works' },
    { label: 'My Work', href: '#my-work-reels' },
    { label: 'Diagnóstico', href: '#objection-stats' },
    { label: 'Contato', href: '#contact-ivory' }
  ];

  return (
    <header
      id="main-navigation"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAF6EE]/95 backdrop-blur-md border-b border-[#DECFC0] py-2.5 shadow-2xl'
          : 'bg-[#FAF6EE]/80 backdrop-blur-sm border-b border-[#DECFC0]/60 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#hero-section"
          className="flex items-center gap-2.5 group"
          data-cursor="pointer"
        >
          <span className="w-7 h-7 rounded-sm bg-[#EFE6D5] border border-[#540D21]/70 text-[#540D21] flex items-center justify-center text-xs font-serif font-black shadow-[0_0_10px_rgba(84,13,33,0.3)]">
            SA
          </span>
          <span className="text-sm font-serif font-black tracking-[0.2em] uppercase text-[#241217] group-hover:text-[#540D21] transition-colors">
            {portfolioData.name || 'SHATMA AALIYA'}
          </span>
        </a>

        {/* Links */}
        <nav className="hidden lg:flex items-center gap-5 text-[11px] font-mono uppercase tracking-[0.2em] text-[#241217]/70">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[#540D21] transition-colors relative py-1"
              data-cursor="pointer"
            >
              <span>{link.label}</span>
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};
