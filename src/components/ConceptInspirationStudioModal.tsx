import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Plus,
  PenTool,
  Sparkles,
  Upload,
  Image as ImageIcon,
  BookOpen,
  Trash2,
  Check,
  Palette,
  Lightbulb,
  Scissors,
  Layers,
  ArrowRight
} from 'lucide-react';
import { AtelierPalette } from '../data/colorPalettes';

export interface ConceptItem {
  id: string;
  category: 'INSPIRATION' | 'CONCEPT' | 'ILLUSTRATION' | 'MATERIALITY';
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  pageNumber?: string;
  technique?: string;
  createdAt?: string;
}

interface ConceptInspirationStudioModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: ConceptItem[];
  onAddItem: (item: ConceptItem) => void;
  onDeleteItem?: (id: string) => void;
  onSelectActiveItem?: (item: ConceptItem, index: number) => void;
  activePalette?: AtelierPalette;
}

export const ConceptInspirationStudioModal: React.FC<ConceptInspirationStudioModalProps> = ({
  isOpen,
  onClose,
  items,
  onAddItem,
  onDeleteItem,
  onSelectActiveItem,
  activePalette
}) => {
  const [activeTab, setActiveTab] = useState<'create' | 'gallery'>('create');
  const [category, setCategory] = useState<'INSPIRATION' | 'CONCEPT' | 'ILLUSTRATION' | 'MATERIALITY'>('CONCEPT');
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [description, setDescription] = useState('');
  const [technique, setTechnique] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setUploadError('Please select a valid image file (PNG, JPG, WEBP).');
      return;
    }

    setUploadError(null);
    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      setImagePreview(result);
      setImageUrl(result);
    };
    reader.readAsDataURL(file);
  };

  const handleApplyPresetImage = (url: string) => {
    setImageUrl(url);
    setImagePreview(url);
    setUploadError(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    const finalImage =
      imageUrl.trim() ||
      imagePreview ||
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200&auto=format&fit=crop';

    let badge = 'CONCEPT NOTE';
    if (category === 'INSPIRATION') badge = 'TEXTILE INSPIRATION';
    if (category === 'ILLUSTRATION') badge = 'HAUTE COUTURE ILLUSTRATION';
    if (category === 'MATERIALITY') badge = 'MATERIAL STUDY';

    const newItem: ConceptItem = {
      id: `concept-${Date.now()}`,
      category,
      badge,
      title: title.trim(),
      subtitle: subtitle.trim() || 'Creative atelier study for the Fading Spark collection',
      description: description.trim() || 'Sensory notes on cut, texture and aesthetic philosophy.',
      image: finalImage,
      technique: technique.trim() || undefined,
      createdAt: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    };

    onAddItem(newItem);
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      setActiveTab('gallery');
      // Reset form
      setTitle('');
      setSubtitle('');
      setDescription('');
      setTechnique('');
      setImageUrl('');
      setImagePreview(null);
    }, 900);
  };

  const sampleInspirations = [
    {
      title: 'Crimson Gown Croquis',
      category: 'ILLUSTRATION' as const,
      url: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'Pure Silk & Natural Dye',
      category: 'INSPIRATION' as const,
      url: 'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'Sculptural Drapery',
      category: 'CONCEPT' as const,
      url: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'Zari Texture & Hand Embroidery',
      category: 'MATERIALITY' as const,
      url: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=800&auto=format&fit=crop'
    }
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-4xl bg-[#FAF6EE] text-[#241217] border-2 border-[#540D21] shadow-[0_25px_70px_rgba(84,13,33,0.35)] rounded-xs overflow-hidden max-h-[92vh] flex flex-col my-auto"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-5 sm:px-8 py-4 bg-gradient-to-r from-[#540D21] via-[#6E112B] to-[#851737] text-[#FAF6EE] border-b border-[#540D21]">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/10 rounded-xs border border-white/20">
                <PenTool className="w-5 h-5 text-amber-200" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-amber-200 font-bold">
                    ATELIER CREATIVE DOSSIER
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-300 animate-pulse" />
                </div>
                <h2 className="font-avonia text-xl sm:text-2xl text-[#FAF6EE] leading-tight">
                  New Concept, Inspiration & Illustration
                </h2>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              title="Close studio"
              aria-label="Close studio"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Sub-Tabs */}
          <div className="flex items-center justify-between border-b border-[#DECFC0] bg-[#EFE6D5] px-5 sm:px-8 py-2.5">
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setActiveTab('create')}
                className={`px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider rounded-xs transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeTab === 'create'
                    ? 'bg-[#540D21] text-white font-bold shadow-sm'
                    : 'bg-transparent text-[#540D21] hover:bg-white/60'
                }`}
              >
                <Plus className="w-3.5 h-3.5" />
                <span>+ Add New Entry</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('gallery')}
                className={`px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider rounded-xs transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeTab === 'gallery'
                    ? 'bg-[#540D21] text-white font-bold shadow-sm'
                    : 'bg-transparent text-[#540D21] hover:bg-white/60'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Collection Dossier ({items.length})</span>
              </button>
            </div>

            <div className="hidden sm:flex items-center gap-2 text-[10px] font-mono text-[#540D21]/80">
              <Sparkles className="w-3.5 h-3.5 text-[#540D21]" />
              <span>Fading Spark Collection</span>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-5 sm:p-8 overflow-y-auto flex-1">
            {activeTab === 'create' ? (
              <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
                {/* Category Selection Pills */}
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-widest text-[#540D21] font-bold mb-2">
                    Creative Entry Type:
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[
                      { id: 'CONCEPT', label: 'Concept Note', icon: Lightbulb },
                      { id: 'INSPIRATION', label: 'Textile Inspiration', icon: Sparkles },
                      { id: 'ILLUSTRATION', label: 'Croquis / Illustration', icon: PenTool },
                      { id: 'MATERIALITY', label: 'Materiality', icon: Scissors }
                    ].map((cat) => {
                      const Icon = cat.icon;
                      const isSelected = category === cat.id;
                      return (
                        <button
                          key={cat.id}
                          type="button"
                          onClick={() => setCategory(cat.id as any)}
                          className={`p-2.5 rounded-xs border text-left flex flex-col gap-1 transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-[#540D21] text-white border-[#540D21] shadow-md'
                              : 'bg-white text-[#241217] border-[#DECFC0] hover:border-[#540D21]'
                          }`}
                        >
                          <Icon className={`w-4 h-4 ${isSelected ? 'text-amber-200' : 'text-[#540D21]'}`} />
                          <span className="text-xs font-mono uppercase font-bold tracking-tight">
                            {cat.label}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Title & Subtitle */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-widest text-[#540D21] font-bold mb-1.5">
                      Entry Title *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Crimson Drapery & Zari Silk"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-[#DECFC0] rounded-xs font-sans text-sm focus:outline-none focus:border-[#540D21] text-[#241217]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-widest text-[#540D21] font-bold mb-1.5">
                      Subtitle / Line of Study
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Fluid drape and sculptural textures"
                      value={subtitle}
                      onChange={(e) => setSubtitle(e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-[#DECFC0] rounded-xs font-sans text-sm focus:outline-none focus:border-[#540D21] text-[#241217]"
                    />
                  </div>
                </div>

                {/* Image Upload & URL */}
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-widest text-[#540D21] font-bold mb-1.5">
                    Image, Illustration or Croquis *
                  </label>

                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-start">
                    {/* Preview Box */}
                    <div className="sm:col-span-4 aspect-[3/4] bg-neutral-900 border border-[#DECFC0] rounded-xs overflow-hidden relative flex items-center justify-center text-center p-2 group">
                      {imagePreview || imageUrl ? (
                        <img
                          src={imagePreview || imageUrl}
                          alt="Preview"
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="flex flex-col items-center gap-2 text-white/50 p-4">
                          <ImageIcon className="w-8 h-8 text-amber-200/60" />
                          <span className="text-[10px] font-mono uppercase tracking-wider">
                            No image selected
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Inputs */}
                    <div className="sm:col-span-8 space-y-3">
                      <div className="flex gap-2">
                        <button
                          type="button"
                          onClick={() => fileInputRef.current?.click()}
                          className="px-4 py-2 bg-[#EFE6D5] hover:bg-[#DECFC0] text-[#540D21] border border-[#DECFC0] rounded-xs text-xs font-mono uppercase tracking-wider font-bold flex items-center gap-2 transition-colors cursor-pointer"
                        >
                          <Upload className="w-4 h-4" />
                          <span>Select Image from Computer</span>
                        </button>
                        <input
                          type="file"
                          ref={fileInputRef}
                          accept="image/*"
                          onChange={handleFileUpload}
                          className="hidden"
                        />
                      </div>

                      {uploadError && (
                        <p className="text-xs text-rose-700 font-mono">{uploadError}</p>
                      )}

                      <div>
                        <span className="block text-[10px] font-mono uppercase tracking-wider text-neutral-500 mb-1">
                          Or enter a direct image URL:
                        </span>
                        <input
                          type="url"
                          placeholder="https://..."
                          value={imageUrl}
                          onChange={(e) => {
                            setImageUrl(e.target.value);
                            setImagePreview(e.target.value);
                          }}
                          className="w-full px-3 py-2 bg-white border border-[#DECFC0] rounded-xs font-mono text-xs focus:outline-none focus:border-[#540D21] text-[#241217]"
                        />
                      </div>

                      {/* Quick Presets */}
                      <div>
                        <span className="block text-[10px] font-mono uppercase tracking-wider text-neutral-500 mb-1.5">
                          Or choose Atelier references:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {sampleInspirations.map((sample, idx) => (
                            <button
                              key={idx}
                              type="button"
                              onClick={() => handleApplyPresetImage(sample.url)}
                              className="px-2 py-1 bg-white hover:bg-[#EFE6D5] border border-[#DECFC0] rounded-xs text-[10px] font-mono text-[#540D21] transition-colors cursor-pointer"
                            >
                              {sample.title}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description & Technical notes */}
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-widest text-[#540D21] font-bold mb-1.5">
                    Concept Note & Curatorial Description *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe the poetic inspiration, planned silhouette, fabric drape, sewing threads or metaphors that guide this piece..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-[#DECFC0] rounded-xs font-sans text-xs sm:text-sm focus:outline-none focus:border-[#540D21] text-[#241217] leading-relaxed resize-none"
                  />
                </div>

                {/* Technique / Materials Tag */}
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-widest text-[#540D21] font-bold mb-1.5">
                    Textile Technique / Trims (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Handcrafted zari silk, devoré velvet, French hand-stitching"
                    value={technique}
                    onChange={(e) => setTechnique(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-[#DECFC0] rounded-xs font-sans text-sm focus:outline-none focus:border-[#540D21] text-[#241217]"
                  />
                </div>

                {/* Submit button */}
                <div className="pt-2 flex items-center justify-between border-t border-[#DECFC0]">
                  <span className="text-[11px] font-mono text-neutral-500">
                    The entry will be added to the main arch on the page.
                  </span>

                  <button
                    type="submit"
                    className="px-6 py-2.5 bg-gradient-to-r from-[#540D21] to-[#851737] hover:from-[#6E112B] hover:to-[#A63856] text-white text-xs font-mono uppercase tracking-widest font-bold rounded-xs shadow-md transition-all flex items-center gap-2 cursor-pointer"
                  >
                    {isSuccess ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-300" />
                        <span>Saved Successfully!</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-4 h-4" />
                        <span>Add to Collection Dossier</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            ) : (
              /* Gallery of existing records */
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-avonia text-xl text-[#241217]">
                    Dossier Entries ({items.length})
                  </h3>
                  <button
                    onClick={() => setActiveTab('create')}
                    className="px-3 py-1.5 bg-[#540D21] text-white text-xs font-mono uppercase tracking-wider rounded-xs flex items-center gap-1.5 hover:bg-[#6E112B] cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>New Entry</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {items.map((item, index) => (
                    <div
                      key={item.id}
                      className="p-4 bg-white border border-[#DECFC0] hover:border-[#540D21] transition-all rounded-xs flex gap-4 group shadow-sm"
                    >
                      <div className="w-24 h-32 bg-black rounded-xs overflow-hidden shrink-0 relative">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <span className="absolute top-1 left-1 px-1.5 py-0.5 bg-black/80 text-[8px] font-mono text-white rounded-xs">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>

                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between gap-1 mb-1">
                            <span className="text-[9px] font-mono uppercase tracking-widest text-[#540D21] font-bold">
                              {item.badge}
                            </span>
                            {onDeleteItem && items.length > 1 && (
                              <button
                                onClick={() => onDeleteItem(item.id)}
                                title="Delete this entry"
                                className="text-neutral-400 hover:text-red-700 transition-colors p-1 cursor-pointer"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            )}
                          </div>

                          <h4 className="font-avonia text-lg text-[#241217] leading-tight line-clamp-1">
                            {item.title}
                          </h4>
                          <p className="text-[11px] font-mono text-[#540D21] line-clamp-1 mb-1">
                            {item.subtitle}
                          </p>
                          <p className="text-xs text-neutral-600 line-clamp-2 font-editorial">
                            {item.description}
                          </p>
                        </div>

                        {onSelectActiveItem && (
                          <div className="pt-2 border-t border-neutral-100 flex items-center justify-between">
                            <span className="text-[9px] font-mono text-neutral-400">
                              {item.createdAt || 'Main Collection'}
                            </span>
                            <button
                              onClick={() => {
                                onSelectActiveItem(item, index);
                                onClose();
                              }}
                              className="text-[10px] font-mono uppercase tracking-wider text-[#540D21] hover:underline flex items-center gap-1 font-bold cursor-pointer"
                            >
                              <span>Show in Arch</span>
                              <ArrowRight className="w-3 h-3" />
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
