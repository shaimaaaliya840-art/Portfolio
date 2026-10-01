import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

/**
 * Custom Haute Couture Cursor in Decadent Black Cherry (#540D21) and Cream Vanilla (#FAF6EE).
 * Strictly scoped to cursor, hover states, logo, and highlight moments.
 * Automatically disabled on touch devices.
 *
 * Performance: pointer position lives in motion values written straight from the
 * event handler, so moving the mouse never triggers a React re-render. The dot
 * tracks the pointer 1:1; only the ring trails, on a tight spring.
 */
export const CustomCursor: React.FC = () => {
  const [enabled, setEnabled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const visibleRef = useRef(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringSpring = { stiffness: 1200, damping: 40, mass: 0.3 };
  const ringX = useSpring(x, ringSpring);
  const ringY = useSpring(y, ringSpring);

  useEffect(() => {
    // Match the CSS rule that hides the native cursor, so we never end up with no cursor at all
    if (!window.matchMedia('(pointer: fine)').matches) return;
    setEnabled(true);

    const show = (visible: boolean) => {
      if (visibleRef.current === visible) return;
      visibleRef.current = visible;
      setIsVisible(visible);
    };

    const updateMousePosition = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      if (!visibleRef.current) {
        // Re-entering the window: snap the ring instead of flying it across the screen
        ringX.jump(e.clientX);
        ringY.jump(e.clientY);
        show(true);
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest('a, button, [role="button"], input, textarea, select, [data-cursor]');
      setIsHovered(!!interactive);
      setCursorText(interactive?.getAttribute('data-cursor-text') || '');
    };

    const handleMouseLeave = () => show(false);

    const root = document.documentElement;
    window.addEventListener('mousemove', updateMousePosition, { passive: true });
    document.addEventListener('mouseover', handleMouseOver, { passive: true });
    root.addEventListener('mouseleave', handleMouseLeave);

    root.classList.add('custom-cursor-active');

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseover', handleMouseOver);
      root.removeEventListener('mouseleave', handleMouseLeave);
      root.classList.remove('custom-cursor-active');
    };
  }, [x, y, ringX, ringY]);

  if (!enabled) return null;

  return (
    <div
      className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden transition-opacity duration-200"
      style={{ opacity: isVisible ? 1 : 0 }}
      aria-hidden="true"
    >
      {/* Center Precision Minimalist Porcelain Rose Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_var(--color-accent,#540D21)]"
        style={{ x, y, backgroundColor: 'var(--color-accent, #540D21)', willChange: 'transform' }}
        animate={{ scale: isHovered ? 0 : 1 }}
        transition={{ type: 'spring', stiffness: 1300, damping: 50, mass: 0.1 }}
      />

      {/* Trailing Porcelain Rose Ring with dynamic text */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none flex items-center justify-center -translate-x-1/2 -translate-y-1/2 shadow-[0_0_20px_rgba(84,13,33,0.25)]"
        style={{
          x: ringX,
          y: ringY,
          border: '1.5px solid var(--color-accent, #540D21)',
          willChange: 'transform',
        }}
        initial={false}
        animate={{
          width: isHovered ? (cursorText ? 88 : 52) : 32,
          height: isHovered ? (cursorText ? 88 : 52) : 32,
          backgroundColor: isHovered ? 'rgba(84, 13, 33, 0.95)' : 'rgba(84, 13, 33, 0.12)',
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 30, mass: 0.35 }}
      >
        {cursorText && (
          <span className="text-[0.625rem] tracking-[0.2em] uppercase font-mono font-bold text-[#FAF6EE] select-none text-center px-1">
            {cursorText}
          </span>
        )}
      </motion.div>
    </div>
  );
};
