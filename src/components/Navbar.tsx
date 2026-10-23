import React, { useState, useEffect } from 'react';
import { Menu, Palette, X } from 'lucide-react';
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
  activePalette,
  onOpenColorModal
}) => {

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
            <span className="text-sm font-serif font-black tracking-[0.2em] uppercase whitespace-nowrap text-[#FAF6EE] group-hover:text-[#E9D5E6] transition-colors">
              {portfolioData.name || 'SHATMA AALIYA'}
            </span>
          </a>
        </div>

        {/* Links & Palette Action */}
        <div className="flex items-center gap-6">
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

          {/* Below lg the link row above is hidden, so without this there is no way to
              reach a section but scrolling the whole page. */}
          <button
            onClick={() => setMenuOpen((open) => !open)}
            className="flex items-center gap-1.5 px-3 py-1.5 text-[0.625rem] font-mono uppercase tracking-widest font-bold border border-[#FAF6EE]/40 text-[#FAF6EE] hover:border-[#FAF6EE] transition-all cursor-pointer rounded-xs lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            data-cursor="pointer"
          >
            {menuOpen ? <X className="w-3.5 h-3.5" /> : <Menu className="w-3.5 h-3.5" />}
            <span className="hidden sm:inline">Menu</span>
          </button>

          {onOpenColorModal && (
            <button
              onClick={onOpenColorModal}
              className="flex items-center gap-1.5 px-3 py-1.5 text-[0.625rem] font-mono uppercase tracking-widest font-bold bg-[#FAF6EE] text-[#540D21] hover:bg-white transition-all cursor-pointer shadow-md rounded-xs border border-[#FAF6EE]"
              title="Open Color Palette & Materiality Options"
              data-cursor="pointer"
            >
              <Palette className="w-3 h-3 text-[#540D21]" />
              <span className="hidden sm:inline">Color Palette &amp; Materiality</span>
              <span className="sm:hidden">Colors</span>
            </button>
          )}
        </div>
      </div>

      {menuOpen && (
        <nav
          id="mobile-nav-menu"
          className="lg:hidden border-t border-[#FAF6EE]/15 bg-[#540D21]"
        >
          <ul className="max-w-7xl mx-auto px-4 sm:px-6 py-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-3 text-xs font-mono uppercase tracking-[0.2em] text-[#FAF6EE]/80 hover:text-[#FAF6EE] border-b border-[#FAF6EE]/10 last:border-b-0 transition-colors"
                  data-cursor="pointer"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};
