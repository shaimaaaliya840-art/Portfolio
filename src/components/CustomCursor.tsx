import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

/**
 * Custom Haute Couture Cursor in Decadent Black Cherry (#540D21) and Cream Vanilla (#FAF6EE).
 * Strictly scoped to cursor, hover states, logo, and highlight moments.
 * Automatically disabled on touch devices.
 */
export const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouch(true);
      return;
    }

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest('a, button, [role="button"], input, textarea, select, [data-cursor]');
      if (interactive) {
        setIsHovered(true);
        const customText = interactive.getAttribute('data-cursor-text');
        setCursorText(customText || '');
      } else {
        setIsHovered(false);
        setCursorText('');
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', updateMousePosition, { passive: true });
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    document.documentElement.classList.add('custom-cursor-active');

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.documentElement.classList.remove('custom-cursor-active');
    };
  }, [isVisible]);

  if (isTouch || !isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      {/* Center Precision Minimalist Porcelain Rose Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_var(--color-accent,#540D21)]"
        style={{ backgroundColor: 'var(--color-accent, #540D21)' }}
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          scale: isHovered ? 0 : 1,
          opacity: isVisible ? 1 : 0
        }}
        transition={{
          type: "spring",
          stiffness: 1300,
          damping: 50,
          mass: 0.1
        }}
      />

      {/* Trailing Porcelain Rose Ring with dynamic text */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none flex items-center justify-center -translate-x-1/2 -translate-y-1/2 shadow-[0_0_20px_rgba(84,13,33,0.25)]"
        style={{
          border: '1.5px solid var(--color-accent, #540D21)',
        }}
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          width: isHovered ? (cursorText ? 88 : 52) : 32,
          height: isHovered ? (cursorText ? 88 : 52) : 32,
          backgroundColor: isHovered ? 'rgba(84, 13, 33, 0.95)' : 'rgba(84, 13, 33, 0.12)',
          borderColor: 'var(--color-accent, #540D21)',
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
          mass: 0.35
        }}
      >
        {cursorText && (
          <span className="text-[9px] tracking-[0.2em] uppercase font-mono font-bold text-[#FAF6EE] select-none text-center px-1">
            {cursorText}
          </span>
        )}
      </motion.div>
    </div>
  );
};
