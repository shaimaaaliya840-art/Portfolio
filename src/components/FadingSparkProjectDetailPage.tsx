import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  ArrowLeft,
  Sparkles,
  Camera,
  Upload,
  BookOpen,
  Image as ImageIcon,
  Check,
  ChevronDown,
  Layers,
  Heart,
  Flame,
  Clock,
  Compass,
  Mail,
  Eye,
  SlidersHorizontal,
  Download,
  ExternalLink,
  FileText,
  CloudUpload,
  CheckCircle2
} from 'lucide-react';
import { AtelierPalette } from '../data/colorPalettes';
import { ConceptItem } from './ConceptInspirationStudioModal';
import {
  ExactPage1ConceptNote,
  ExactPage2ThemeBoard,
  ExactPage3Illustration,
  ExactPage4IllustrationExplanation,
  ExactPage5Photoshoot
} from './FadingSparkExactSlides';
import {
  googleSignIn,
  googleSignOut,
  uploadPdfToGoogleDrive,
  initAuth,
  DriveUploadedFile
} from '../services/googleDriveService';
import {
  downloadFadingSparkPdf,
  generateFadingSparkPdfBlob
} from '../utils/generateFadingSparkPdf';

interface FadingSparkProjectDetailPageProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenInquiry?: () => void;
  activePalette?: AtelierPalette;
  additionalConceptItems?: ConceptItem[];
}

export const FadingSparkProjectDetailPage: React.FC<FadingSparkProjectDetailPageProps> = ({
  isOpen,
  onClose,
  onOpenInquiry,
  activePalette
}) => {
  const [activeTabSection, setActiveTabSection] = useState<'p1' | 'p2' | 'p3' | 'p4' | 'p5'>('p1');
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [isDriveLoading, setIsDriveLoading] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [driveFile, setDriveFile] = useState<DriveUploadedFile | null>(() => {
    try {
      const saved = localStorage.getItem('fading_spark_drive_file');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });
  const [driveError, setDriveError] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = initAuth(
      (user) => setCurrentUser(user),
      () => setCurrentUser(null)
    );
    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, []);

  const handleDriveConnectAndUpload = async () => {
    setDriveError(null);
    setIsDriveLoading(true);
    try {
      let user = currentUser;
      if (!user) {
        const result = await googleSignIn();
        if (result) {
          user = result.user;
          setCurrentUser(user);
        }
      }
      // Generate the full 5-page PDF
      const pdfBlob = await generateFadingSparkPdfBlob();
      // Upload directly to the user's Google Drive
      const uploaded = await uploadPdfToGoogleDrive(pdfBlob, 'The_Fading_Spark_Collection.pdf');
      setDriveFile(uploaded);
      try {
        localStorage.setItem('fading_spark_drive_file', JSON.stringify(uploaded));
      } catch (e) {
        console.error(e);
      }
    } catch (err: any) {
      console.error('Google Drive Upload error:', err);
      setDriveError(err?.message || 'Falha ao sincronizar com Google Drive');
    } finally {
      setIsDriveLoading(false);
    }
  };

  const handleDownloadPdf = async () => {
    setIsDownloading(true);
    try {
      await downloadFadingSparkPdf();
    } catch (err) {
      console.error('Failed to download PDF', err);
    } finally {
      setIsDownloading(false);
    }
  };
  const [lookbookImages, setLookbookImages] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('fading_spark_lookbook_photos');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const lookbookFileInputRef = useRef<HTMLInputElement>(null);

  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);
  const section4Ref = useRef<HTMLDivElement>(null);
  const section5Ref = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  const scrollToSection = (section: 'p1' | 'p2' | 'p3' | 'p4' | 'p5') => {
    setActiveTabSection(section);
    const map = {
      p1: section1Ref,
      p2: section2Ref,
      p3: section3Ref,
      p4: section4Ref,
      p5: section5Ref
    };
    map[section]?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleUploadLookbookPhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        setLookbookImages((prev) => {
          const updated = [...prev, result];
          try {
            localStorage.setItem('fading_spark_lookbook_photos', JSON.stringify(updated));
          } catch (err) {
            console.error(err);
          }
          return updated;
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const meetings = [
    {
      step: '1st meeting',
      title: 'O Primeiro Encontro · Curiosidade & Entusiasmo',
      quote: "fresh, crisp, perfect. enthusiasm walks in, questions, curiosity - 'tell me more...' yet professional: the collar & cuffs show it",
      description: 'Estruturado, impecável e cortês. O vestido estilo avental rosa blush sobre camisa branca de gola engomada e punhos volumosos evoca polidez, respeito e a eletricidade inicial do desconhecido.',
      highlight: 'Colarinho rígido, punhos duplos e abotoamento frontal simétrico',
      badgeColor: 'border-rose-300 text-rose-800 bg-rose-50'
    },
    {
      step: '2nd meeting',
      title: 'O Segundo Encontro · O Flerte Velado',
      quote: 'still formal - the pants hold the line, but the red top whispers a little flirting...',
      description: 'A barreira formal começa a ceder suavemente. Enquanto as calças de alfaiataria preta mantêm a sobriedade e o controle, o decote canoa em veludo carmesim expõe as clavículas com magnetismo calculado.',
      highlight: 'Decote ombro a ombro assimétrico em seda carmesim e alfaiataria reta',
      badgeColor: 'border-red-300 text-red-900 bg-red-50'
    },
    {
      step: '3rd meeting',
      title: 'O Terceiro Encontro · Ternura & Vulnerabilidade',
      quote: 'red puffed bows - softness & a bubbly, playful nature coming up',
      description: 'A despretensão toma conta do romance. O vestido tubinho midi com padronagem pontilhada de pequenas estrelas brancas ganha mangas bufantes etéreas em laços de organza transparente, revelando leveza e afeto brincalhão.',
      highlight: 'Mangas em nuvem de laços de organza branca e textura bordada',
      badgeColor: 'border-amber-300 text-amber-900 bg-amber-50'
    },
    {
      step: '4th meeting',
      title: 'O Quarto Encontro · Confissão & Entrega Plena',
      quote: 'red gown - modest yet curvy & bold. no formality, everything confessed, nothing left unsaid',
      description: 'O ápice da paixão desprovida de defesas. Um vestido longo de alta costura em carmesim puro com gola alta e cascata escultórica que molda as curvas do corpo. Nada é omitido, tudo é dito na linguagem da forma.',
      highlight: 'Coluna escultural contínua com drapeados em espiral e cauda fluida',
      badgeColor: 'border-[#540D21] text-[#540D21] bg-rose-100/60'
    },
    {
      step: '5th meeting',
      title: 'O Quinto Encontro · Conforto & A Chama que Desvanece',
      quote: 'comfort. boredom creeps in - no prep, full chill, nothing new to know, nothing left to ask',
      description: 'O calor da novidade dá lugar à rotina despojada. A camiseta drapeada em verde sálvia oversized sobre calças amplas desconstruídas traduz a intimidade sem esforço — onde o tédio suave sinaliza a necessidade de reencontrar o amor em uma nova forma.',
      highlight: 'Caimento relaxado sem estrutura rígida, linho cru e silhueta despretensiosa',
      badgeColor: 'border-emerald-300 text-emerald-900 bg-emerald-50'
    }
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-[#FAF6EE] text-[#241217] selection:bg-[#540D21] selection:text-[#FAF6EE]">
        {/* Sticky Editorial Header */}
        <header className="sticky top-0 z-40 bg-[#FAF6EE]/95 backdrop-blur-md border-b border-[#DECFC0] px-4 sm:px-8 py-3 flex items-center justify-between shadow-xs">
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="flex items-center gap-2 text-xs sm:text-sm font-mono uppercase tracking-wider text-[#540D21] hover:text-[#851737] font-bold group cursor-pointer transition-colors"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span>Voltar ao Ateliê</span>
            </button>
            <span className="hidden md:inline text-neutral-300">|</span>
            <span className="hidden md:inline text-xs font-mono uppercase tracking-widest text-neutral-600 font-semibold">
              The Fading Spark · Coleção Completa de 5 Páginas
            </span>
          </div>

          {/* Quick Page Jump Navigation & Drive Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Page Jump Links */}
            <nav className="hidden lg:flex items-center gap-1 sm:gap-1.5">
              {[
                { id: 'p1', label: '1. Conceito' },
                { id: 'p2', label: '2. Moodboard' },
                { id: 'p3', label: '3. Ilustração' },
                { id: 'p4', label: '4. Explicação' },
                { id: 'p5', label: '5. Lookbook' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => scrollToSection(tab.id as any)}
                  className={`px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider rounded-xs transition-all cursor-pointer ${
                    activeTabSection === tab.id
                      ? 'bg-[#540D21] text-white font-bold shadow-xs'
                      : 'bg-[#EFE6D5]/80 text-[#540D21] hover:bg-[#DECFC0]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>

            {/* Google Drive Upload Action Button */}
            <button
              onClick={handleDriveConnectAndUpload}
              disabled={isDriveLoading}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#540D21] hover:bg-[#6E112B] text-white text-[10px] sm:text-xs font-mono uppercase tracking-wider font-bold rounded-xs shadow-md transition-all cursor-pointer disabled:opacity-50"
              title="Salvar e sincronizar o PDF da coleção diretamente no seu Google Drive"
            >
              <CloudUpload className={`w-3.5 h-3.5 ${isDriveLoading ? 'animate-bounce' : ''}`} />
              <span>{isDriveLoading ? 'Enviando...' : driveFile ? 'Atualizar no Drive' : 'Salvar no Drive'}</span>
            </button>

            {/* Local PDF Download Action Button */}
            <button
              onClick={handleDownloadPdf}
              disabled={isDownloading}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white hover:bg-[#EFE6D5] text-[#540D21] border border-[#DECFC0] hover:border-[#540D21] text-[10px] sm:text-xs font-mono uppercase tracking-wider font-bold rounded-xs shadow-xs transition-all cursor-pointer disabled:opacity-50"
              title="Baixar o arquivo PDF de 5 páginas da coleção"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{isDownloading ? 'Gerando...' : 'Baixar PDF'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 ml-1 rounded-full hover:bg-[#EFE6D5] text-[#241217] transition-colors cursor-pointer"
              title="Fechar dossiê"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </header>

        {/* Continuous Sequential Scroll Container */}
        <div className="max-w-5xl mx-auto px-4 sm:px-8 py-8 sm:py-14 space-y-20">

          {/* Google Drive Status Notification Bar */}
          {driveFile && (
            <div className="p-3 sm:p-4 bg-[#EFE6D5] border-2 border-[#540D21] shadow-md rounded-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0" />
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#540D21] block">
                    PDF da Coleção Sincronizado com o seu Google Drive
                  </span>
                  <span className="text-[11px] font-mono text-neutral-600">
                    Arquivo: The_Fading_Spark_Collection.pdf
                  </span>
                </div>
              </div>
              {driveFile.webViewLink && (
                <a
                  href={driveFile.webViewLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#540D21] text-white text-xs font-mono uppercase tracking-widest font-bold rounded-xs hover:bg-[#6E112B] transition-colors shadow-xs"
                >
                  <span>Abrir no Google Drive</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          )}

          {driveError && (
            <div className="p-3 bg-red-50 border border-red-300 text-red-900 rounded-xs text-xs font-mono flex items-center justify-between">
              <span>Aviso: {driveError}</span>
              <button onClick={() => setDriveError(null)} className="ml-2 font-bold cursor-pointer">✕</button>
            </div>
          )}

          {/* ========================================================= */}
          {/* PAGE 1: CONCEPT NOTE (EXACT UPLOADED SLIDE 1)             */}
          {/* ========================================================= */}
          <section
            ref={section1Ref}
            id="page-1-concept-note"
            className="scroll-mt-20 border-b border-[#DECFC0] pb-20 space-y-6"
          >
            {/* Page Demarcation Header */}
            <div className="flex items-center justify-between border-b border-[#DECFC0] pb-3">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 bg-[#540D21] text-white text-[10px] font-mono uppercase tracking-[0.2em] font-bold rounded-xs">
                  PAGE 01
                </span>
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#540D21] font-bold">
                  CONCEPT NOTE
                </span>
              </div>
              <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
                EXACT UPLOADED PRESENTATION SLIDE 1
              </span>
            </div>

            {/* Exact Rendered Slide 1 */}
            <ExactPage1ConceptNote />
          </section>


          {/* ========================================================= */}
          {/* PAGE 2: THEME BOARD (EXACT UPLOADED SLIDE 2)              */}
          {/* ========================================================= */}
          <section
            ref={section2Ref}
            id="page-2-theme-board"
            className="scroll-mt-20 border-b border-[#DECFC0] pb-20 space-y-6"
          >
            {/* Page Demarcation Header */}
            <div className="flex items-center justify-between border-b border-[#DECFC0] pb-3">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 bg-[#540D21] text-white text-[10px] font-mono uppercase tracking-[0.2em] font-bold rounded-xs">
                  PAGE 02
                </span>
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#540D21] font-bold">
                  THEME BOARD
                </span>
              </div>
              <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
                EXACT UPLOADED MOODBOARD SLIDE 2
              </span>
            </div>

            {/* Exact Rendered Slide 2 */}
            <ExactPage2ThemeBoard />
          </section>


          {/* ========================================================= */}
          {/* PAGE 3: ILLUSTRATION (EXACT UPLOADED SLIDE 3)             */}
          {/* ========================================================= */}
          <section
            ref={section3Ref}
            id="page-3-illustration"
            className="scroll-mt-20 border-b border-[#DECFC0] pb-20 space-y-6"
          >
            {/* Page Demarcation Header */}
            <div className="flex items-center justify-between border-b border-[#DECFC0] pb-3">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 bg-[#540D21] text-white text-[10px] font-mono uppercase tracking-[0.2em] font-bold rounded-xs">
                  PAGE 03
                </span>
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#540D21] font-bold">
                  ILLUSTRATION
                </span>
              </div>
              <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
                EXACT UPLOADED FASHION LINE-UP SLIDE 3
              </span>
            </div>

            {/* Exact Rendered Slide 3 */}
            <ExactPage3Illustration />
          </section>


          {/* ========================================================= */}
          {/* PAGE 4: ILLUSTRATION EXPLANATION (EXACT SLIDE 4)          */}
          {/* ========================================================= */}
          <section
            ref={section4Ref}
            id="page-4-explanation"
            className="scroll-mt-20 border-b border-[#DECFC0] pb-20 space-y-6"
          >
            {/* Page Demarcation Header */}
            <div className="flex items-center justify-between border-b border-[#DECFC0] pb-3">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 bg-[#540D21] text-white text-[10px] font-mono uppercase tracking-[0.2em] font-bold rounded-xs">
                  PAGE 04
                </span>
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#540D21] font-bold">
                  ILLUSTRATION EXPLANATION
                </span>
              </div>
              <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
                EXACT UPLOADED ANNOTATED SKETCH SLIDE 4
              </span>
            </div>

            {/* Exact Rendered Slide 4 with Red Handwriting & Arrows */}
            <ExactPage4IllustrationExplanation />

            {/* Detailed Cards for Accessibility and Mobile Reading */}
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-2 border-b border-[#DECFC0] pb-2">
                <BookOpen className="w-4 h-4 text-[#540D21]" />
                <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-[#540D21] font-bold">
                  Detalhamento Textual dos 5 Encontros
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-3.5">
                {meetings.map((meeting, index) => (
                  <div
                    key={index}
                    className="p-4 bg-white border border-[#DECFC0] hover:border-[#540D21] transition-all rounded-xs shadow-xs flex flex-col justify-between group"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className={`px-2 py-0.5 text-[9px] font-mono uppercase tracking-wider font-bold rounded-xs border ${meeting.badgeColor}`}>
                          {meeting.step}
                        </span>
                        <span className="text-[10px] font-mono text-neutral-400">
                          0{index + 1}
                        </span>
                      </div>

                      <h4 className="font-serif font-bold text-sm text-[#241217] leading-snug">
                        {meeting.title}
                      </h4>

                      <p className="text-[11px] font-mono italic text-[#540D21] bg-[#FAF6EE] p-2 rounded-xs border-l-2 border-[#540D21] leading-relaxed">
                        "{meeting.quote}"
                      </p>

                      <p className="text-xs text-neutral-600 font-editorial leading-relaxed">
                        {meeting.description}
                      </p>
                    </div>

                    <div className="pt-3 mt-3 border-t border-neutral-100 text-[10px] font-mono text-neutral-500">
                      <span className="font-bold text-[#540D21] block mb-0.5">Destaque:</span>
                      <span>{meeting.highlight}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>


          {/* ========================================================= */}
          {/* PAGE 5: PHOTOSHOOT LOOKBOOK (EXACT UPLOADED SLIDE 5)      */}
          {/* ========================================================= */}
          <section
            ref={section5Ref}
            id="page-5-lookbook"
            className="scroll-mt-20 pb-16 space-y-6"
          >
            {/* Page Demarcation Header */}
            <div className="flex items-center justify-between border-b border-[#DECFC0] pb-3">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 bg-[#540D21] text-white text-[10px] font-mono uppercase tracking-[0.2em] font-bold rounded-xs">
                  PAGE 05
                </span>
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#540D21] font-bold">
                  PHOTOSHOOT LOOKBOOK
                </span>
              </div>
              <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
                EXACT UPLOADED EDITORIAL PHOTOSHOOT SPREAD
              </span>
            </div>

            {/* Exact Rendered Slide 5: Full Photoshoot Editorial Collage */}
            <ExactPage5Photoshoot />

            {/* 5 Sequential Outfits Detail Breakdown */}
            <div className="space-y-4 pt-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-widest text-[#540D21] font-bold">
                  Catálogo Editorial de Peças Produzidas no Ateliê (5 Looks):
                </span>
                <span className="text-[10px] font-mono text-neutral-500">
                  Alta Costura · Seda, Veludo & Alfaiataria
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
                {meetings.map((m, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-[#EFE6D5] border border-[#DECFC0] hover:border-[#540D21] transition-all rounded-xs flex flex-col justify-between"
                  >
                    <div className="space-y-1">
                      <span className="text-[9px] font-mono uppercase tracking-widest text-[#540D21] font-bold block">
                        Look 0{idx + 1} // {m.step}
                      </span>
                      <h4 className="text-xs font-serif font-bold text-[#241217] leading-snug">
                        {m.title.split('·')[1]?.trim() || m.title}
                      </h4>
                    </div>
                    <p className="text-[10px] text-neutral-600 font-mono mt-2 pt-2 border-t border-[#DECFC0]/80">
                      {m.highlight}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Bottom Fixed Dossier Closer */}
          <div className="pt-6 border-t border-[#DECFC0] flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              onClick={onClose}
              className="text-xs font-mono uppercase tracking-widest text-[#540D21] hover:underline flex items-center gap-1.5 font-bold cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Concluir Leitura e Voltar ao Portfólio</span>
            </button>

            {onOpenInquiry && (
              <button
                onClick={() => {
                  onClose();
                  onOpenInquiry();
                }}
                className="px-6 py-2.5 bg-gradient-to-r from-[#540D21] to-[#851737] hover:from-[#6E112B] hover:to-[#A63856] text-white text-xs font-mono uppercase tracking-widest font-bold rounded-xs shadow-md transition-all flex items-center gap-2 cursor-pointer"
              >
                <Mail className="w-4 h-4 text-amber-200" />
                <span>Solicitar Dossiê Completo em Alta Resolução</span>
              </button>
            )}
          </div>

        </div>
      </div>
    </AnimatePresence>
  );
};
