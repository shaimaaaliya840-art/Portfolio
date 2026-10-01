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
    { label: 'Cover', href: '#hero-section' },
    { label: 'Manifesto', href: '#kinetic-manifesto' },
    { label: 'Fading Spark', href: '#fading-spark-page' },
    { label: 'My Work', href: '#my-work-reels' },
    { label: 'Colors', href: '#color-inspiration-page' },
    { label: 'About Me', href: '#manifesto-arch' },
    { label: 'Benefits', href: '#benefits-stats' },
    { label: 'Packages', href: '#packages-page' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Consultation', href: '#objection-stats' },
    { label: 'Curriculum Vitae', href: '#curriculum-vitae' },
    { label: 'Contact', href: '#contact-ivory' }
  ];

  return (
    <header
      id="main-navigation"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAF6EE]/95 border-b border-[#DECFC0] py-2.5 shadow-2xl'
          : 'bg-[#FAF6EE]/80 border-b border-[#DECFC0]/60 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between">
        {/* Brand (going back is handled by the floating Back button, bottom-left) */}
        <div className="flex items-center gap-3">
          <a
            href="#hero-section"
            className="flex items-center gap-2.5 group"
            data-cursor="pointer"
          >
            <span className="text-sm font-serif font-black tracking-[0.2em] uppercase text-[#241217] group-hover:text-[#540D21] transition-colors">
              {portfolioData.name || 'SHATMA AALIYA'}
            </span>
          </a>
        </div>

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
