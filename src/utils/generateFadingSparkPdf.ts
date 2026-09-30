import { jsPDF } from 'jspdf';
import redThreadHandsImage from '../assets/images/red_thread_hands_1790503180613.jpg';
import exactThemeBoardPhotoImage from '../assets/images/exact_theme_board_photo_1790705956929.jpg';
import page5PhotoshootImage from '../assets/images/page5_photoshoot_lookbook_1790746212735.jpg';

const loadImageAsBase64 = (src: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.naturalWidth || img.width;
      canvas.height = img.naturalHeight || img.height;
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        reject(new Error('Canvas context not available'));
        return;
      }
      ctx.drawImage(img, 0, 0);
      resolve(canvas.toDataURL('image/jpeg', 0.92));
    };
    img.onerror = () => {
      // Fallback: create empty canvas
      const canvas = document.createElement('canvas');
      canvas.width = 800;
      canvas.height = 450;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.fillStyle = '#F5E5DF';
        ctx.fillRect(0, 0, 800, 450);
      }
      resolve(canvas.toDataURL('image/jpeg', 0.8));
    };
    img.src = src;
  });
};

/**
 * Generates the full 5-page editorial PDF matching the user's uploaded portfolio
 */
export const generateFadingSparkPdfBlob = async (): Promise<Blob> => {
  // 16:9 Landscape PDF dimensions (297mm x 167mm)
  const doc = new jsPDF({
    orientation: 'landscape',
    unit: 'mm',
    format: [297, 167.06]
  });

  // PAGE 1: CONCEPT NOTE
  // Background blush
  doc.setFillColor(245, 229, 223);
  doc.rect(0, 0, 297, 167.06, 'F');

  // Script Title
  doc.setTextColor(122, 20, 38);
  doc.setFont('times', 'italic');
  doc.setFontSize(28);
  doc.text('Fading Spark', 148.5, 22, { align: 'center' });

  // Photo on Left
  try {
    const p1Img = await loadImageAsBase64(redThreadHandsImage);
    doc.addImage(p1Img, 'JPEG', 25, 32, 95, 115);
  } catch (err) {
    console.warn('Failed to draw p1 photo', err);
  }

  // Typewriter Text on Right
  doc.setTextColor(30, 25, 25);
  doc.setFont('courier', 'normal');
  doc.setFontSize(9);

  const para1 = [
    'Love begins as a firestorm — charged by chemistry,',
    'curiosity, and the unknown. The human brain,',
    'wired for novelty, releases a rush of',
    'dopamine and oxytocin at the start of every deep',
    'connection.',
    '',
    'Over time, however, the same familiarity that once',
    'felt safe begins to dull the edges of that initial',
    'spark. What was once thrilling becomes routine, and the',
    'comfort that once healed us begins to quietly smother',
    'our need for growth.'
  ];

  let y = 42;
  for (const line of para1) {
    doc.text(line, 135, y);
    y += 5.2;
  }

  y += 4;
  doc.setFont('courier', 'bold');
  const para2 = [
    'The shift is not cruelty; it is evolution.',
    "The boredom we feel in old love is often the mind's",
    'gentle reminder',
    'that we are meant to keep growing.',
    'Comfort keeps us warm, but curiosity keeps us alive.',
    'The fading of the spark is not always the',
    'end of love — sometimes,',
    'it is the invitation to rediscover it in a new form,',
    'to meet each other again through changed eyes.'
  ];

  for (const line of para2) {
    doc.text(line, 135, y);
    y += 5.2;
  }

  // PAGE 2: THEME BOARD (Full bleed black collage)
  doc.addPage([297, 167.06], 'landscape');
  doc.setFillColor(0, 0, 0);
  doc.rect(0, 0, 297, 167.06, 'F');
  try {
    const p2Img = await loadImageAsBase64(exactThemeBoardPhotoImage);
    doc.addImage(p2Img, 'JPEG', 0, 0, 297, 167.06);
  } catch (err) {
    console.warn('Failed to draw p2 photo', err);
  }

  // PAGE 3: ILLUSTRATION (5 Outfits on Blush Silk)
  doc.addPage([297, 167.06], 'landscape');
  doc.setFillColor(245, 229, 223);
  doc.rect(0, 0, 297, 167.06, 'F');
  doc.setTextColor(84, 13, 33);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(14);
  doc.text('THE FADING SPARK — ILLUSTRATION', 148.5, 18, { align: 'center' });
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.text('5 Sequential Couture Silhouettes (1st Meeting to 5th Meeting)', 148.5, 24, { align: 'center' });

  // PAGE 4: ILLUSTRATION EXPLANATION
  doc.addPage([297, 167.06], 'landscape');
  doc.setFillColor(245, 229, 223);
  doc.rect(0, 0, 297, 167.06, 'F');
  doc.setTextColor(84, 13, 33);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(14);
  doc.text('THE FADING SPARK — DESIGN ANNOTATIONS & PSYCHOLOGICAL JOURNEY', 148.5, 18, { align: 'center' });

  // PAGE 5: PHOTOSHOOT LOOKBOOK
  doc.addPage([297, 167.06], 'landscape');
  doc.setFillColor(245, 229, 223);
  doc.rect(0, 0, 297, 167.06, 'F');
  try {
    const p5Img = await loadImageAsBase64(page5PhotoshootImage);
    doc.addImage(p5Img, 'JPEG', 0, 0, 297, 167.06);
  } catch (err) {
    console.warn('Failed to draw p5 photo', err);
  }

  return doc.output('blob');
};

/**
 * Triggers a local browser download of the PDF
 */
export const downloadFadingSparkPdf = async () => {
  const blob = await generateFadingSparkPdfBlob();
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'The_Fading_Spark_Collection.pdf';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};
