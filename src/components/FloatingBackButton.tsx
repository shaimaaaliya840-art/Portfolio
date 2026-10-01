import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface FloatingBackButtonProps {
  onBack?: () => void;
}

export const FloatingBackButton: React.FC<FloatingBackButtonProps> = ({ onBack }) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (onBack) {
      onBack();
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-20 left-4 sm:left-8 z-[90]">
      <button
        type="button"
        data-cursor="pointer"
        onClick={handleClick}
        className="flex items-center gap-2 px-4 py-2.5 bg-[#540D21] text-[#FAF6EE] border-2 border-[#FAF6EE] hover:bg-[#851737] transition-all shadow-[0_8px_30px_rgba(84,13,33,0.5)] rounded-full cursor-pointer font-mono text-xs uppercase tracking-widest font-bold hover:scale-105 active:scale-95 select-none"
        title="Back"
        aria-label="Back"
      >
        <ArrowLeft className="w-4 h-4 text-[#FAF6EE]" />
        <span>Back</span>
      </button>
    </div>
  );
};
