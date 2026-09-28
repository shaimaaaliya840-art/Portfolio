import { AtelierPalette, atelierPalettes } from '../data/colorPalettes';

const THEME_STORAGE_KEY = 'shatma_atelier_active_theme';

export function getInitialTheme(): AtelierPalette {
  try {
    const savedId = localStorage.getItem(THEME_STORAGE_KEY);
    if (savedId && savedId !== 'antique-brass-gold') {
      const found = atelierPalettes.find((p) => p.id === savedId);
      if (found) return found;
    }
  } catch (e) {
    console.error('Failed to load theme from localStorage', e);
  }
  return atelierPalettes[0];
}

export function applyThemeToDocument(palette: AtelierPalette) {
  if (typeof document === 'undefined') return;

  const root = document.documentElement;
  root.style.setProperty('--color-base', palette.base);
  root.style.setProperty('--color-surface', palette.surface);
  root.style.setProperty('--color-panel', palette.panel);
  root.style.setProperty('--color-accent', palette.accent);
  root.style.setProperty('--color-brass', palette.brass);
  root.style.setProperty('--color-gold', palette.gold);
  root.style.setProperty('--color-bronze', palette.bronze);
  root.style.setProperty('--color-mocha', palette.mocha);
  root.style.setProperty('--color-text', palette.text);
  root.style.setProperty('--color-text-muted', palette.textMuted);

  // Dispatch custom event for background canvas and dynamic components
  window.dispatchEvent(
    new CustomEvent('atelier-theme-changed', {
      detail: palette
    })
  );

  try {
    localStorage.setItem(THEME_STORAGE_KEY, palette.id);
  } catch (e) {
    console.error('Failed to persist theme to localStorage', e);
  }
}
