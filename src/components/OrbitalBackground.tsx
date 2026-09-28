import React, { useEffect, useRef } from 'react';
import goldenGlowAtmosphere from '../assets/images/golden_glow_volumetric_atmosphere_1790239266631.jpg';

/**
 * Volumetric Golden Light & Amber Smoke Atmosphere
 * Directly recreates the glowing ambiance of the vintage haute couture presentation:
 * - Radiant incandescent golden light core (#FFF4B8 -> #F5D061 -> #E9D5E6 -> #C28514)
 * - Beaming volumetric light rays (god rays) cutting through warm amber haze
 * - Swirling golden smoke plumes in soft continuous motion
 * - Floating backlit golden ember motes rising through the light beams
 * - Integrated atmospheric texture layer for photo-authentic smoke & bloom
 */
export const OrbitalBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Glowing golden volumetric light plumes (bright, radiant amber blooms)
    interface Blob {
      baseAngle: number;
      speed: number;
      orbitRadiusX: number;
      orbitRadiusY: number;
      centerXFactor: number;
      centerYFactor: number;
      radius: number;
      breathSpeed: number;
      color: string; // RGB string
      opacity: number;
    }

    const blobs: Blob[] = [
      {
        // Central Porcelain Rose Luster Core (DMC 3865 Delicate Rose)
        baseAngle: 0,
        speed: 0.00015,
        orbitRadiusX: 0.08,
        orbitRadiusY: 0.06,
        centerXFactor: 0.5,
        centerYFactor: 0.38,
        radius: 0.52,
        breathSpeed: 0.0006,
        color: '250, 246, 238', // Cream Vanilla Silk (#FAF6EE)
        opacity: 0.56
      },
      {
        // Volumetric Twilight Plum Plume (DMC 3041 Twilight Plum)
        baseAngle: Math.PI * 0.45,
        speed: -0.0002,
        orbitRadiusX: 0.18,
        orbitRadiusY: 0.14,
        centerXFactor: 0.42,
        centerYFactor: 0.48,
        radius: 0.65,
        breathSpeed: 0.00045,
        color: '84, 13, 33', // Black Cherry Noir (#540D21)
        opacity: 0.52
      },
      {
        // Volumetric Smoked Mauve Patina (DMC 3804 Mauve Bloom)
        baseAngle: Math.PI * 1.15,
        speed: 0.00018,
        orbitRadiusX: 0.2,
        orbitRadiusY: 0.16,
        centerXFactor: 0.6,
        centerYFactor: 0.42,
        radius: 0.68,
        breathSpeed: 0.0005,
        color: '133, 23, 55', // Rich Cherry Wine (#851737)
        opacity: 0.46
      },
      {
        // Diffuse Plum Amethyst Atmosphere (DMC 3835)
        baseAngle: Math.PI * 1.7,
        speed: -0.00016,
        orbitRadiusX: 0.15,
        orbitRadiusY: 0.12,
        centerXFactor: 0.52,
        centerYFactor: 0.65,
        radius: 0.72,
        breathSpeed: 0.0004,
        color: '239, 230, 213', // Warm Vanilla Alabaster (#EFE6D5)
        opacity: 0.42
      },
      {
        // Top Luminous Porcelain Rose Aperture
        baseAngle: Math.PI * 0.85,
        speed: 0.00022,
        orbitRadiusX: 0.12,
        orbitRadiusY: 0.1,
        centerXFactor: 0.48,
        centerYFactor: 0.2,
        radius: 0.58,
        breathSpeed: 0.00055,
        color: '255, 252, 245', // Luminous Cream Vanilla Highlight
        opacity: 0.58
      }
    ];

    let currentBaseHex = '#FAF6EE';

    const handleThemeChange = (e: Event) => {
      const customEvent = e as CustomEvent;
      const palette = customEvent.detail;
      if (!palette || !palette.swatches) return;

      currentBaseHex = palette.base;
      if (blobs[0] && palette.swatches[0]) blobs[0].color = palette.swatches[0].rgb;
      if (blobs[1] && palette.swatches[1]) blobs[1].color = palette.swatches[1].rgb;
      if (blobs[2] && palette.swatches[2]) blobs[2].color = palette.swatches[2].rgb;
      if (blobs[3] && palette.swatches[3]) blobs[3].color = palette.swatches[3].rgb;
      if (blobs[4] && palette.swatches[0]) blobs[4].color = palette.swatches[0].rgb;
    };

    window.addEventListener('atelier-theme-changed', handleThemeChange);

    // Initial check from localStorage
    try {
      const activeThemeId = localStorage.getItem('shatma_atelier_active_theme');
      // If needed, custom theme is picked up
    } catch (e) {}

    // Volumetric God Rays (light shafts piercing the amber mist)
    const raysCount = 7;
    const rayAngles = Array.from({ length: raysCount }, (_, i) => ({
      baseAngle: (Math.PI * 2 * i) / raysCount - Math.PI / 2,
      angularWidth: 0.22 + Math.random() * 0.15,
      speed: (Math.random() - 0.5) * 0.00008,
      intensity: 0.25 + Math.random() * 0.2
    }));

    // Backlit golden dust motes / glowing embers rising through the light beams
    interface Mote {
      x: number;
      y: number;
      size: number;
      speedY: number;
      speedX: number;
      opacity: number;
      baseOpacity: number;
      pulseSpeed: number;
      pulseOffset: number;
      color: string;
    }

    const motes: Mote[] = Array.from({ length: 48 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2.8 + 1.2,
      speedY: -(Math.random() * 0.45 + 0.18),
      speedX: (Math.random() - 0.5) * 0.25,
      opacity: Math.random() * 0.6 + 0.3,
      baseOpacity: Math.random() * 0.6 + 0.3,
      pulseSpeed: Math.random() * 0.003 + 0.0015,
      pulseOffset: Math.random() * Math.PI * 2,
      color: Math.random() > 0.4 ? '84, 13, 33' : '133, 23, 55'
    }));

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize, { passive: true });

    const render = (time: number) => {
      const elapsed = time;

      // Base: Twilight Plum atelier canvas
      ctx.fillStyle = currentBaseHex;
      ctx.fillRect(0, 0, width, height);

      const maxDim = Math.max(width, height);
      const centerX = width * 0.5;
      const centerY = height * 0.4;

      // Blending mode for volumetric glow diffusion
      ctx.globalCompositeOperation = 'screen';

      // 1. Draw Volumetric Light Rays (God Rays from Central Aperture)
      rayAngles.forEach((ray) => {
        const currentAngle = ray.baseAngle + elapsed * ray.speed;
        const pulse = 0.8 + Math.sin(elapsed * 0.0008 + ray.baseAngle) * 0.2;
        const rayAlpha = ray.intensity * pulse;

        const rayLength = maxDim * 1.1;
        const x1 = centerX + Math.cos(currentAngle - ray.angularWidth / 2) * rayLength;
        const y1 = centerY + Math.sin(currentAngle - ray.angularWidth / 2) * rayLength;
        const x2 = centerX + Math.cos(currentAngle + ray.angularWidth / 2) * rayLength;
        const y2 = centerY + Math.sin(currentAngle + ray.angularWidth / 2) * rayLength;

        const rayGrad = ctx.createRadialGradient(centerX, centerY, 10, centerX, centerY, rayLength);
        rayGrad.addColorStop(0, `rgba(246, 234, 244, ${rayAlpha * 0.9})`);
        rayGrad.addColorStop(0.3, `rgba(84, 13, 33, ${rayAlpha * 0.6})`);
        rayGrad.addColorStop(0.7, `rgba(138, 92, 128, ${rayAlpha * 0.25})`);
        rayGrad.addColorStop(1, `${currentBaseHex}00`);

        ctx.fillStyle = rayGrad;
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.closePath();
        ctx.fill();
      });

      // 2. Draw Billowing Golden Smoke Plumes
      blobs.forEach((blob) => {
        const angle = blob.baseAngle + elapsed * blob.speed;
        const breath = Math.sin(elapsed * blob.breathSpeed) * 0.12;
        const currentRadius = (blob.radius + breath) * maxDim;

        const cx = (blob.centerXFactor + Math.cos(angle) * blob.orbitRadiusX) * width;
        const cy = (blob.centerYFactor + Math.sin(angle) * blob.orbitRadiusY) * height;

        const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, Math.max(currentRadius, 30));
        grad.addColorStop(0, `rgba(${blob.color}, ${blob.opacity})`);
        grad.addColorStop(0.25, `rgba(${blob.color}, ${blob.opacity * 0.8})`);
        grad.addColorStop(0.55, `rgba(${blob.color}, ${blob.opacity * 0.45})`);
        grad.addColorStop(0.85, `rgba(${blob.color}, ${blob.opacity * 0.15})`);
        grad.addColorStop(1, `rgba(${blob.color}, 0)`);

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(cx, cy, currentRadius, 0, Math.PI * 2);
        ctx.fill();
      });

      // 3. Render Floating Backlit Golden Dust Motes & Embers
      motes.forEach((mote) => {
        mote.y += mote.speedY;
        mote.x += mote.speedX;

        if (mote.y < -15) {
          mote.y = height + 15;
          mote.x = Math.random() * width;
        }
        if (mote.x < -15) mote.x = width + 15;
        if (mote.x > width + 15) mote.x = -15;

        const pulse = Math.sin(elapsed * mote.pulseSpeed + mote.pulseOffset);
        const currentAlpha = Math.max(0.15, mote.baseOpacity + pulse * 0.3);

        ctx.fillStyle = `rgba(${mote.color}, ${currentAlpha})`;
        ctx.beginPath();
        ctx.arc(mote.x, mote.y, mote.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Reset composite operation
      ctx.globalCompositeOperation = 'source-over';

      // Soft vignette on outermost edges only, preserving the glowing golden center
      const edgeVignette = ctx.createRadialGradient(
        width * 0.5,
        height * 0.45,
        maxDim * 0.25,
        width * 0.5,
        height * 0.45,
        maxDim * 0.85
      );
      edgeVignette.addColorStop(0, `${currentBaseHex}00`);
      edgeVignette.addColorStop(0.65, `${currentBaseHex}38`);
      edgeVignette.addColorStop(1, `${currentBaseHex}c0`);

      ctx.fillStyle = edgeVignette;
      ctx.fillRect(0, 0, width, height);

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('atelier-theme-changed', handleThemeChange);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
      {/* 1. Underlying Cinematic Golden Smoke Texture Layer */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center opacity-10 mix-blend-multiply scale-110 filter blur-[3px]"
        style={{ backgroundImage: `url(${goldenGlowAtmosphere})` }}
      />

      {/* 2. Dynamic Volumetric Canvas (God Rays + Billowing Golden Smoke Plumes + Embers) */}
      <canvas
        ref={canvasRef}
        id="schemeengine-orbital-canvas"
        aria-hidden="true"
        className="absolute inset-0 w-full h-full filter blur-[24px] md:blur-[36px] opacity-90 transition-opacity duration-1000"
      />

      {/* 3. Porcelain Rose Radial Light Bloom Core */}
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-gradient-radial from-[var(--color-accent,#540D21)]/10 via-[var(--color-gold,#851737)]/5 to-transparent blur-[60px] pointer-events-none" />
      <div className="absolute top-[45%] left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full bg-gradient-radial from-[var(--color-gold,#851737)]/8 via-[var(--color-bronze,#A63856)]/5 to-transparent blur-[80px] pointer-events-none" />
    </div>
  );
};
