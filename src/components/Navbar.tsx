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
    { label: 'Introduction', href: '#kinetic-manifesto' },
    { label: 'About Me', href: '#manifesto-arch' },
    { label: 'Works', href: '#works' },
    { label: 'Contact', href: '#contact-ivory' }
  ];

  return (
    <header
      id="main-navigation"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        // Wine #540D21 — the colour of the hero's script initials
        scrolled
          ? 'bg-[#540D21] border-b border-[#FAF6EE]/15 py-2.5 shadow-2xl'
          : 'bg-[#540D21] border-b border-[#FAF6EE]/10 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <a
            href="#hero-section"
            className="flex items-center gap-2.5 group"
            data-cursor="pointer"
          >
            <span className="text-sm font-serif font-black tracking-[0.2em] uppercase text-[#FAF6EE] group-hover:text-[#E9D5E6] transition-colors">
              {portfolioData.name || 'SHATMA AALIYA'}
            </span>
          </a>
        </div>

        {/* Links */}
        <nav className="hidden lg:flex items-center gap-5 text-[0.6875rem] font-mono uppercase tracking-[0.2em] text-[#FAF6EE]/80">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[#FAF6EE] transition-colors relative py-1"
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
