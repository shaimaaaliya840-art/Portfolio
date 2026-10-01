import React from 'react';
import { createPortal } from 'react-dom';
import { ArrowLeft } from 'lucide-react';
import type { PortfolioData } from '../types';
import abhisarikaBackground from '../assets/images/abhisarika_background.png';

interface AbhisarikaProjectDetailPageProps {
  isOpen: boolean;
  onClose: () => void;
  highlight: PortfolioData['neelgarHighlight'];
  returnLabel?: string;
}

export const AbhisarikaProjectDetailPage: React.FC<AbhisarikaProjectDetailPageProps> = ({
  isOpen,
  onClose,
  returnLabel = 'Back to Atelier'
}) => {
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-[100] flex flex-col overflow-hidden text-[#241217]">
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
        <img
          src={abhisarikaBackground}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
      </div>

      <header className="relative z-20 shrink-0 p-4 sm:p-8">
        <button
          type="button"
          onClick={onClose}
          aria-label={returnLabel}
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-white/40 bg-black/25 text-white shadow-sm backdrop-blur-sm transition-colors hover:bg-black/45 group cursor-pointer"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
        </button>
      </header>

      <main className="relative z-10 min-h-0 flex-1" />
    </div>,
    document.body
  );
};
