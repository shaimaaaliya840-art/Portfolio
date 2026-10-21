import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { ArrowLeft, Droplet, Flame, Gem, Layers, Moon, X, type LucideIcon } from 'lucide-react';

import fadingSparkPg1 from '../assets/images/fading-spark/pg 1.png';
import fadingSparkPg2 from '../assets/images/fading-spark/pg 2.png';
import fadingSparkPg3_1 from '../assets/images/fading-spark/pg 3.1.png';
import fadingSparkPg3_2 from '../assets/images/fading-spark/pg 3.2.png';
import fadingSparkPg3_3 from '../assets/images/fading-spark/pg 3.3.png';
import fadingSparkPg3_4 from '../assets/images/fading-spark/pg 3.4.png';
import fadingSparkPg3_5 from '../assets/images/fading-spark/pg 3.5.png';
import fadingSparkPg5 from '../assets/images/fading-spark/pg 5.png';
import fadingSparkBackground from '../assets/images/fading_spark_pink_fabric_background.jpg';
import abhisarikaBackground from '../assets/images/abhisarika_background.png';
import imgCenter from '../assets/images/abhisarika/img_center.jpg';
import imgTop from '../assets/images/abhisarika/img_top.jpg';
import imgTopRight from '../assets/images/abhisarika/img_top_right.jpg';
import imgBottomLeft from '../assets/images/abhisarika/img_bottom_left.jpg';
import imgBottomRight from '../assets/images/abhisarika/img_bottom_right.jpg';
import garment1_1 from '../assets/images/abhisarika/garment1_1.jpg';
import garment1_2 from '../assets/images/abhisarika/garment1_2.jpg';
import garment1_3 from '../assets/images/abhisarika/garment1_3.jpg';
import garment1_4 from '../assets/images/abhisarika/garment1_4.jpg';
import garment2_1 from '../assets/images/abhisarika/garment2_1.jpg';
import garment2_2 from '../assets/images/abhisarika/garment2_2.jpg';
import garment2_3 from '../assets/images/abhisarika/garment2_3.png';
import garment2_4 from '../assets/images/abhisarika/garment2_4.jpg';
import garment3_1 from '../assets/images/abhisarika/garment3_1.jpg';
import garment3_2 from '../assets/images/abhisarika/garment3_2.png';
import garment3_3 from '../assets/images/abhisarika/garment3_3.jpg';
import garment4_1 from '../assets/images/abhisarika/garment4_1.jpg';
import garment4_2 from '../assets/images/abhisarika/garment4_2.png';
import garment4_3 from '../assets/images/abhisarika/garment4_3.png';
import garment4_4 from '../assets/images/abhisarika/garment4_4.jpg';
import lotusImage from '../assets/images/anatomy-of-ornament/lotus.png';
import aooMbRunway from '../assets/images/anatomy-of-ornament/aoo_mb_runway.png';
import aooMbCorset from '../assets/images/anatomy-of-ornament/aoo_mb_corset.png';
import aooMbKurta from '../assets/images/anatomy-of-ornament/aoo_mb_kurta.png';
import aooMbSpool from '../assets/images/anatomy-of-ornament/aoo_mb_spool.png';
import aooMbKantha from '../assets/images/anatomy-of-ornament/aoo_mb_kantha.jpg';
import aooMbApplique from '../assets/images/anatomy-of-ornament/aoo_mb_applique.png';
import aooGarment1_1 from '../assets/images/anatomy-of-ornament/aoo_garment1_1.png';
import aooGarment1_2 from '../assets/images/anatomy-of-ornament/aoo_garment1_2.png';
import aooGarment1_3 from '../assets/images/anatomy-of-ornament/aoo_garment1_3.png';
import aooGarment1_4 from '../assets/images/anatomy-of-ornament/aoo_garment1_4.png';
import aooGarment1 from '../assets/images/anatomy-of-ornament/garment_1.jpg';
import aooGarment2 from '../assets/images/anatomy-of-ornament/garment_2.jpg';
import aooGarment3 from '../assets/images/anatomy-of-ornament/garment_3.jpg';
import aooGarment4 from '../assets/images/anatomy-of-ornament/garment_4.jpg';
import aooGarment5 from '../assets/images/anatomy-of-ornament/garment_5.jpg';
import aooGarment6 from '../assets/images/anatomy-of-ornament/garment_6.jpg';
import aooGarment7 from '../assets/images/anatomy-of-ornament/garment_7.jpg';
import aooGarment8 from '../assets/images/anatomy-of-ornament/garment_8.jpg';
import aooGarment9 from '../assets/images/anatomy-of-ornament/garment_9.jpg';
import aooGarment10 from '../assets/images/anatomy-of-ornament/garment_10.jpg';
import dabu1 from '../assets/images/dabu/dabu1.png';
import dabu2 from '../assets/images/dabu/dabu2.jpg';
import dabu3 from '../assets/images/dabu/dabu3.png';
import dabu4 from '../assets/images/dabu/dabu4.jpg';
import eco1 from '../assets/images/eco/eco1.jpg';
import eco2 from '../assets/images/eco/eco2.jpg';
import eco3 from '../assets/images/eco/eco3.jpg';
import eco4 from '../assets/images/eco/eco4.jpg';
import eco5 from '../assets/images/eco/eco5.jpg';
import indigoFiltration from '../assets/images/indigo-site-visit/indigo_vat_filtration.png';
import indigoEarthenVats from '../assets/images/indigo-site-visit/indigo_earthen_vats.jpg';
import indigoFermentationBloom from '../assets/images/indigo-site-visit/indigo_fermentation_bloom.jpg';
import indigoOpenAirFacility from '../assets/images/indigo-site-visit/indigo_open_air_facility.jpg';
import coconutCutouts from '../assets/images/coconut-shell/coconut_cutout_pieces.png';
import coconutPendant from '../assets/images/coconut-shell/coconut_intricate_pendant.png';
import coconutSanding from '../assets/images/coconut-shell/coconut_sanding_wheel.png';
import coconutProducts from '../assets/images/coconut-shell/coconut_finished_products.png';
import paperWeavingRadial from '../assets/images/paper-weaving/paper_weaving_radial_base.jpg';
import paperRollingTubes from '../assets/images/paper-weaving/paper_rolling_tubes.png';
import paperTwiningSpokes from '../assets/images/paper-weaving/paper_twining_radial_spokes.png';
import paperArtisanMaterials from '../assets/images/paper-weaving/paper_artisan_materials.png';





interface ProjectPage {
  type?: 'single' | 'grid' | 'text' | 'collage' | 'moodboard-collage';
  src?: string;
  alt?: string;
  images?: { src: string; alt: string; objectPosition?: string }[];
  title?: string;
  titleImage?: string;
  paragraphs?: string[];
  imageAspect?: string;
  imageFit?: 'cover' | 'contain';
  gridCols?: number;
  layout?: 'default' | 'bento-center-stack';
}

interface Project {
  id: string;
  title: string;
  tagline: string;
  icon: LucideIcon;
  /** Backdrop of the project viewer */
  background?: string;
  backgroundColor: string;
  category?: 'work' | 'workshop';
  /** Slides/pages shown in the viewer — add images here as they become available */
  pages: ProjectPage[];
}

const PROJECTS: Project[] = [
  {
    id: 'fading-spark',
    title: 'Fading Spark',
    tagline: 'Collection',
    icon: Flame,
    backgroundColor: 'radial-gradient(circle at 50% 50%, #f0d5df 0%, #c4a1b0 60%, #563947 100%)',
    pages: [
      { type: 'single', src: fadingSparkPg1, alt: 'Fading Spark Page 1' },
      { type: 'single', src: fadingSparkPg2, alt: 'Fading Spark Page 2' },
      {
        type: 'grid',
        images: [
          { src: fadingSparkPg3_1, alt: 'Fading Spark Page 3 Image 1' },
          { src: fadingSparkPg3_2, alt: 'Fading Spark Page 3 Image 2' },
          { src: fadingSparkPg3_5, alt: 'Fading Spark Page 3 Image 5' },
          { src: fadingSparkPg3_4, alt: 'Fading Spark Page 3 Image 4' },
          { src: fadingSparkPg3_3, alt: 'Fading Spark Page 3 Image 3' }
        ]
      },
      // Page 4 is missing, will be added later
      { type: 'single', src: fadingSparkPg5, alt: 'Fading Spark Page 5' }
    ]
  },
  {
    id: 'abhisarika',
    title: 'Abhisarika',
    tagline: 'Neelgar Atelier',
    icon: Moon,
    background: abhisarikaBackground,
    backgroundColor: '#3E5A26',
    pages: [
      {
        type: 'text',
        title: 'Abhisarika',
        paragraphs: [
          "Abhisarika is the nayika who moves. Not the one who waits, but the one who dresses for the dark and walks into it. Her love is not passive longing — it is a journey she chooses, alone, through night, storm, and shadow, toward what she wants.",
          "This collection borrows her courage. Each look marks a stage of her passage — dusk, moonlight, darkness, storm — built in velvet, metallic silk, and sheer organza that catch light the way she moves through it: quietly, then boldly. Crescent motifs recall the moon that guides her; black and wine recall the night she isn't afraid of."
        ]
      },
      {
        type: 'collage',
        images: [
          { src: imgCenter, alt: 'Center' },
          { src: imgTop, alt: 'Top' },
          { src: imgTopRight, alt: 'Top Right' },
          { src: imgBottomLeft, alt: 'Bottom Left' },
          { src: imgBottomRight, alt: 'Bottom Right' }
        ]
      },
      {
        type: 'grid',
        title: 'garment-1',
        layout: 'bento-center-stack',
        imageFit: 'cover',
        images: [
          { src: garment1_1, alt: 'Garment 1 view 1' },
          { src: garment1_2, alt: 'Garment 1 view 2' },
          { src: garment1_3, alt: 'Garment 1 view 3' },
          { src: garment1_4, alt: 'Garment 1 view 4' }
        ]
      },
      {
        type: 'grid',
        title: 'garment-2',
        layout: 'bento-center-stack',
        imageFit: 'cover',
        images: [
          { src: garment2_1, alt: 'Garment 2 view 1' },
          { src: garment2_2, alt: 'Garment 2 view 2' },
          { src: garment2_3, alt: 'Garment 2 view 3' },
          { src: garment2_4, alt: 'Garment 2 view 4' }
        ]
      },
      {
        type: 'grid',
        title: 'garment-3',
        imageFit: 'cover',
        images: [
          { src: garment3_1, alt: 'Garment 3 view 1' },
          { src: garment3_2, alt: 'Garment 3 view 2' },
          { src: garment3_3, alt: 'Garment 3 view 3' }
        ]
      },
      {
        type: 'grid',
        title: 'garment-4',
        layout: 'bento-center-stack',
        imageFit: 'cover',
        images: [
          { src: garment4_1, alt: 'Garment 4 view 1' },
          { src: garment4_2, alt: 'Garment 4 view 2' },
          { src: garment4_3, alt: 'Garment 4 view 3' },
          { src: garment4_4, alt: 'Garment 4 view 4' }
        ],
        paragraphs: [
          "(The embellished bag carried by the model is also handcrafted by me)"
        ]
      }
    ]
  },
  {
    id: 'anatomy-of-ornament',
    title: 'Anatomy of Ornamentation',
    tagline: 'Project',
    icon: Gem,
    background: lotusImage,
    backgroundColor: '#000000',
    pages: [
      {
        type: 'text',
        title: 'Anatomy of Ornamentation',
        paragraphs: [
          "Anatomy of Ornamentation interrogates the sacred botanical architecture of South Asian decorative traditions, taking the eternal lotus as both structural spine and aesthetic philosophy.",
          "Rather than treating ornamentation as extraneous surface embellishment, this collection deconstructs the geometry of bloom and root: the radial symmetry of unfurling petals, the tension between fragile flora and razor-sharp boned corsetry, and the resilience of a blossom that emerges pure and formidable from dark obsidian waters.",
          "Constructed in midnight velvets, unspun mulberry silks, and hand-beaten gold zardozi metallurgies, each silhouette frames the body not as a passive form, but as living, sculpted architecture of calculated seduction and absolute composure."
        ]
      },
      {
        type: 'moodboard-collage',
        title: 'Mood Board',
        paragraphs: [
          "MATERIAL & SENSORY RESEARCH:",
          "Exploration of radiant gold zardozi bullion, sunburst beadwork, and botanical filigree against midnight noir wool and structured velvet corsetry."
        ]
      },
      {
        type: 'grid',
        title: 'Garment 01',
        layout: 'bento-center-stack',
        imageFit: 'cover',
        images: [
          {
            src: aooGarment1_1,
            alt: 'Garment 01 — Architectural column silhouette beside stone steps',
            objectPosition: 'center 20%'
          },
          {
            src: aooGarment1_2,
            alt: 'Garment 01 — Intricate hand-beaded lotus zardozi bullion embroidery in carved alcove',
            objectPosition: 'center 25%'
          },
          {
            src: aooGarment1_4,
            alt: 'Garment 01 — Asymmetrical neckline, dark eyewear & avant-garde editorial poise',
            objectPosition: 'center 20%'
          },
          {
            src: aooGarment1_3,
            alt: 'Garment 01 — Cascading silk sash with handcrafted golden blossom tassel',
            objectPosition: 'center 25%'
          }
        ],
        paragraphs: [
          "LOOK 01 · PADMA RADIANCE & ARCHITECTURAL DRAPE",
          "Sculpted one-shoulder midnight silk column silhouette engineered with radial gold bullion lotus ornamentation emerging from the waistline, paired with an asymmetrical cascading sash anchored by a bespoke floral metallurgy tassel."
        ]
      },
      {
        type: 'grid',
        title: 'Garment 02',
        imageFit: 'cover',
        images: [
          { src: aooGarment4, alt: 'Garment 02 — Sculptural silhouette view' },
          { src: aooGarment6, alt: 'Garment 02 — High-fashion editorial poise' },
          { src: aooGarment7, alt: 'Garment 02 — Back and sleeve architectural lines' }
        ],
        paragraphs: [
          "LOOK 02 · THE GILDED PETAL",
          "Asymmetrical shoulder architecture evoking layered lotus leaves, constructed in handwoven charcoal silk with gold bullion thread."
        ]
      },
      {
        type: 'grid',
        title: 'Garment 03',
        imageFit: 'cover',
        images: [
          { src: aooGarment8, alt: 'Garment 03 — Evening gown editorial look' },
          { src: aooGarment9, alt: 'Garment 03 — Movement and fluid sweep' },
          { src: aooGarment10, alt: 'Garment 03 — Intricate surface ornamentation finish' }
        ],
        paragraphs: [
          "LOOK 03 · THE NOCTURNE BLOOM",
          "Dramatic floor-sweeping evening ensemble in midnight noir velvet with cascading lotus-contour panels."
        ]
      }
    ]
  },
  {
    id: 'dabu-printing',
    title: 'Dabu Printing',
    tagline: 'Workshop',
    category: 'workshop',
    icon: Flame, // fallback
    backgroundColor: '#16233B',
    pages: [
      {
        type: 'grid',
        title: 'Dabu Printing',
        gridCols: 2,
        imageAspect: 'aspect-[4/3]',
        imageFit: 'cover',
        images: [
          { src: dabu1, alt: 'Hand printing on cloth' },
          { src: dabu2, alt: 'Printing dots on fabric' },
          { src: dabu3, alt: 'Wooden printing block' },
          { src: dabu4, alt: 'Indigo dyeing vat' }
        ],
        paragraphs: [
          "AAVARAN in Udaipur is known for reviving and sustaining traditional Dabu mud-resist hand block printing from Rajasthan. Founded by Alka Sharma in 2008, Aavaran works closely with artisan communities, particularly from the Akola region near Chittorgarh.",
          "The process uses hand-carved wooden blocks to apply a resist paste made primarily from mud, lime (calcium hydroxide) and natural gum onto fabric. The fabric is then dyed, often with natural indigo, and the resist is washed away to reveal the printed motifs. Multiple rounds of Dabu printing and dyeing can be used to create layered patterns and colours.",
          "Aavaran combines this traditional craft with contemporary motifs and modern garments, while continuing to use natural dyes and focusing on artisan livelihoods and sustainable production. Its signature aesthetic is strongly associated with indigo, earthy tones and intricate hand-blocked motifs.",
          "PROCESS:",
          "Wooden block → Dabu mud resist → Natural dye/indigo → Drying & oxidation → Washing → Final hand-printed textile."
        ]
      }
    ]
  },
  {
    id: 'eco-printing',
    title: 'Eco Printing',
    tagline: 'Workshop',
    category: 'workshop',
    icon: Flame, // fallback
    backgroundColor: '#FAF6EE',
    pages: [
      {
        type: 'grid',
        title: 'Eco Printing',
        gridCols: 3,
        imageFit: 'cover',
        images: [
          { src: eco1, alt: 'Baskets of dye plants' },
          { src: eco2, alt: 'Pounding leaves portrait' },
          { src: eco3, alt: 'Pounding leaves landscape' },
          { src: eco5, alt: 'Washing dyed fabric' },
          { src: eco4, alt: 'Results of eco-printing' }
        ],
        paragraphs: [
          "Eco-printing is a process of pressing the entire dye plant against the fabric and transferring the color while the plant stays flat.",
          "Tannin-rich leaves, like - rose, guava, eucalyptus, and oaks, are used to etch their distinct mark on textiles, through the color present in the leaves. The same technique is used to dye with flowers or kitchen waste as well.",
          "Every eco-printed piece celebrates the harmonious relationship between human creativity and the environment and serves as a reminder of our communication and collaboration with nature. This elaborate process can take up to 2-3 days to dye one garment, and always results in unique, one-of-kind results, where no two pieces are alike, yet all beautiful in their own right.",
          "TYPES OF ECO-PRINTING:",
          "1. Leaf printing: Using leaves to create prints with intricate vein patterns.",
          "2. Flower pounding: Pounding flowers onto paper or fabric to create delicate, petal-like prints.",
          "3. Branch printing: Using branches to create textured, organic prints.",
          "BENEFITS OF ECO-PRINTING:",
          "1. Sustainable: Eco-printing uses natural, biodegradable materials.",
          "2. Unique: Each print is one-of-a-kind, with subtle variations.",
          "3. Creative: Eco-printing encourages experimentation and creativity.",
          "Eco-printing is a beautiful way to connect with nature and create stunning, unique prints."
        ]
      }
    ]
  },
  {
    id: 'indigo-site-visit',
    title: 'Indigo Site Visit',
    tagline: 'Workshop & Field Study',
    category: 'workshop',
    icon: Droplet,
    backgroundColor: '#0c1626',
    pages: [
      {
        type: 'grid',
        title: 'Indigo Site Visit',
        gridCols: 2,
        imageAspect: 'aspect-[4/3]',
        imageFit: 'cover',
        images: [
          { src: indigoEarthenVats, alt: 'Submerged earthen indigo fermentation vats with woven reed covers' },
          { src: indigoFermentationBloom, alt: 'Living indigo vat bloom with deep iridescent blue froth' },
          { src: indigoFiltration, alt: 'Suspended fabric hammock filter collecting concentrated natural indigo sediment' },
          { src: indigoOpenAirFacility, alt: 'Open-air timber and bamboo sheltered indigo dye pavilion' }
        ]
      },
      {
        type: 'text',
        title: 'Concept & Field Study',
        paragraphs: [
          "Hands-on site exploration and field research into authentic natural indigo extraction, bio-fermentation, and traditional vat dyeing.",
          "Natural indigo (Indigofera tinctoria) is an organic, living dye culture. The extraction begins by harvesting green indigo leaves, which are submerged in water to release soluble indoxyl. Through controlled mechanical aeration and agitation, oxygen converts the yellow liquid into rich blue insoluble indigotin pigment flakes.",
          "The oxidized pigment slurry is carefully drawn through suspended cloth filters, where gravity strains the excess liquid over hours to produce concentrated, pure indigo pigment paste.",
          "In the open-air workshop pavilion, subterranean clay vats are sunk directly into the earthen floor to regulate seasonal temperature. The vats are nurtured with natural alkaline buffers, slaked lime, and botanical reduction agents, fermenting the pigment into a golden-green soluble state. When hand-dipped cloth is lifted from the vat, it oxidizes in seconds upon contact with ambient air, shifting miraculously from green to enduring royal indigo.",
          "PROCESS WORKFLOW: Fresh Indigo Harvest → Water Steeping & Fermentation → Mechanical Aeration → Gravity Cloth Filtration → Earthen Clay Vat Reduction → Hand-Dipping → Aerial Oxidation → Rich Living Indigo."
        ]
      }
    ]
  },
  {
    id: 'coconut-shell-craft',
    title: 'Coconut Shell Craft',
    tagline: 'Workshop · Egai',
    category: 'workshop',
    icon: Gem,
    backgroundColor: '#1E140E',
    pages: [
      {
        type: 'grid',
        title: 'Coconut Shell Craft',
        gridCols: 2,
        imageAspect: 'aspect-[4/3]',
        imageFit: 'cover',
        images: [
          { src: coconutSanding, alt: 'Artisan hand-shaping and sanding coconut shell on rotary disc sander' },
          { src: coconutPendant, alt: 'Handcrafted pierced coconut shell pendant with geometric floral cut' },
          { src: coconutCutouts, alt: 'Batch collection of carved coconut shell silhouette pendants' },
          { src: coconutProducts, alt: 'Finished collection of hand-carved polished coconut shell bowls and vessels' }
        ],
        paragraphs: [
          "Here's a step-by-step guide on making a coconut shell pendant:",
          "MATERIALS NEEDED:\n- Coconut shells\n- Sandpaper\n- Drill press or hand drill\n- Jewelry saw or coping saw\n- Files and rasps\n- Polishing cloths\n- Jewelry findings (e.g., jump ring, chain)\n- Optional: paints, stains, or sealants",
          "STEP-BY-STEP PROCESS:",
          "1. Selecting the shell: Choose a suitable coconut shell with an interesting shape or pattern.",
          "2. Cleaning and drying: Clean the shell thoroughly and let it dry completely.",
          "3. Sanding: Sand the shell to smooth out any rough edges or surfaces.",
          "4. Designing: Sketch a design onto the shell or use a template.",
          "5. Cutting: Use a jewelry saw or coping saw to cut out the pendant shape.",
          "6. Drilling: Drill a hole for the jump ring or chain.",
          "7. Shaping and refining: Use files and rasps to refine the shape and smooth out edges.",
          "8. Polishing: Use polishing cloths to buff the shell and enhance its natural shine.",
          "9. Assembling: Attach the jump ring and chain to complete."
        ]
      }
    ]
  },
  {
    id: 'paper-weaving',
    title: 'Paper Weaving',
    tagline: 'Workshop · Wellpaper',
    category: 'workshop',
    icon: Layers,
    backgroundColor: '#1E1914',
    pages: [
      {
        type: 'grid',
        title: 'Paper Weaving',
        gridCols: 2,
        imageAspect: 'aspect-[4/3]',
        imageFit: 'cover',
        images: [
          { src: paperWeavingRadial, alt: 'Master artisan twining newspaper reeds into a radial basket base' },
          { src: paperRollingTubes, alt: 'Rolling recycled newsprint sheets into tight structural paper tubes' },
          { src: paperTwiningSpokes, alt: 'Interlacing radial warp tubes with weft twining over kolam floor patterns' },
          { src: paperArtisanMaterials, alt: 'Artisan sorting woven paper vessels, molded pulp forms, and workshop materials' }
        ],
        paragraphs: [
          "In collaboration with Wellpaper (Auroville), this workshop explores circular economy design and community-based paper craft.",
          "Wellpaper (Women Entrepreneurs Local Livelihood) transforms discarded daily newspapers into durable, structured home artifacts and sculptural vessels through traditional twining and basketry weaving techniques.",
          "CRAFT & METHODOLOGY:",
          "1. Tube Rolling: Discarded newspaper sheets are cut diagonally and rolled tightly around thin metal spindles to create uniform, high-tensile paper reeds.",
          "2. Radial Warp Setup: Strong structural paper tubes are pinned and crossed in a starburst radial pattern, forming the foundational armature.",
          "3. Twining & Interlacing: Two flexible paper reeds are continuously woven over and under the radial spokes in a paired twining pattern, building density and tensile strength.",
          "4. Architectural Shaping: The spokes are gradually turned upwards around wooden or ceramic formers to sculpt the three-dimensional curves of the vessel.",
          "5. Finishing & Water-Resistant Coating: Natural adhesives, non-toxic sealants, and botanical dyes are applied to harden the woven paper, ensuring structural longevity and moisture resistance."
        ]
      }
    ]
  }
];

// Workshops from the "all portfolio work" deck (its WORKSHOP slide)
const WORKSHOPS = [
  { name: 'Dabu Printing', projectId: 'dabu-printing' },
  { name: 'Coconut Shell Craft', note: 'Egai', projectId: 'coconut-shell-craft' },
  { name: 'Paper Weaving', note: 'Wellpaper', projectId: 'paper-weaving' },
  { name: 'Eco Printing', projectId: 'eco-printing' },
  { name: 'Indigo Site Visit', projectId: 'indigo-site-visit' },
  { name: 'Leather Craft' },
  { name: 'Cyanotype Printing' }
];

/** Editorial headline with an uncut Amoresa script initial and Perandory Condensed capitals */
const WorkshopHeadline: React.FC<{ title: string; isLight?: boolean }> = ({ title, isLight }) => {
  if (!title) return null;
  const trimmed = title.trim();
  const firstLetter = trimmed.charAt(0).toUpperCase();
  const rest = trimmed.slice(1).toUpperCase();

  return (
    <div className="flex items-center justify-center w-full pt-4 sm:pt-6 pb-6 sm:pb-8 px-4 overflow-visible select-none">
      <h2
        className={`inline-flex flex-wrap items-baseline justify-center text-center tracking-normal drop-shadow-md overflow-visible ${
          isLight ? 'text-[#540D21]' : 'text-[#FAF6EE]'
        }`}
      >
        <span
          className="font-['Amoresa','Great_Vibes',cursive] text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-normal inline-block pr-1 sm:pr-2 select-none overflow-visible transform -translate-y-1"
          style={{ lineHeight: 1.15 }}
        >
          {firstLetter}
        </span>
        <span className="font-['Perandory_Condensed','Bodoni_Moda',Georgia,serif] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-[0.16em] sm:tracking-[0.2em] uppercase inline-block overflow-visible">
          {rest}
        </span>
      </h2>
    </div>
  );
};

/** Full-screen viewer for one project's pages. */
const ProjectViewer: React.FC<{ project: Project; onClose: () => void }> = ({ project, onClose }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    // Keep the page behind from scrolling while the viewer is open
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  const isLight = project.id === 'fading-spark' || project.id === 'eco-printing';

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
      className="fixed inset-0 z-[100] flex flex-col overflow-hidden"
      style={{ background: project.backgroundColor }}
    >
      {/* Volumetric pinkish gradient bloom */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[800px] bg-gradient-radial from-[#540D21]/15 via-[#851737]/5 to-transparent blur-[90px] pointer-events-none -z-10" />

      {project.background && project.id === 'anatomy-of-ornament' ? (
        <>
          <img
            src={project.background}
            alt=""
            aria-hidden="true"
            className="pointer-events-none fixed -top-8 -left-8 sm:-top-12 sm:-left-12 w-[180px] sm:w-[260px] md:w-[340px] max-w-[50vw] object-contain opacity-25"
          />
          <img
            src={project.background}
            alt=""
            aria-hidden="true"
            className="pointer-events-none fixed -bottom-8 -right-8 sm:-bottom-12 sm:-right-12 w-[180px] sm:w-[260px] md:w-[340px] max-w-[50vw] object-contain opacity-25 rotate-180"
          />
        </>
      ) : project.background && project.id === 'abhisarika' ? (
        <div
          className="pointer-events-none absolute inset-0 h-full w-full"
          style={{
            backgroundImage: `url(${project.background})`,
            backgroundRepeat: 'repeat',
            backgroundSize: 'contain',
            backgroundPosition: 'center'
          }}
        />
      ) : project.background ? (
        <img
          src={project.background}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center"
        />
      ) : null}

      <header className="relative z-20 flex shrink-0 items-center gap-4 px-4 py-3 sm:px-8 sm:py-4">
        <button
          type="button"
          onClick={onClose}
          data-cursor="pointer"
          className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/50 bg-black/35 px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider text-white backdrop-blur-sm transition-colors hover:bg-black/55 cursor-pointer group"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to Works</span>
        </button>
        {project.category !== 'workshop' && project.id !== 'fading-spark' && project.id !== 'abhisarika' && project.id !== 'anatomy-of-ornament' && (
          <h2
            className={`font-avonia font-normal text-3xl sm:text-5xl leading-tight ${
              isLight ? 'text-[#540D21]' : 'text-[#FAF6EE]'
            }`}
          >
            {project.title}
          </h2>
        )}
      </header>

      <main className="relative z-10 min-h-0 flex-1 overflow-y-auto px-4 pb-10 sm:px-8">
        {project.pages.length > 0 ? (
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 sm:gap-6">
            {project.pages.map((page, i) => {
              if (page.type === 'grid') {
                return (
                  <div key={`grid-${i}`} className="relative flex flex-col w-full px-2 sm:px-0 pt-8 sm:pt-16 pb-4 sm:pb-8">
                    {project.id === 'anatomy-of-ornament' && (
                      <div className="pointer-events-none absolute -top-2 right-0 sm:right-2 w-24 sm:w-36 opacity-15 -z-10 select-none">
                        <img src={lotusImage} alt="" aria-hidden="true" className="w-full h-auto object-contain" />
                      </div>
                    )}
                    {page.titleImage && (
                      <div className="flex justify-center w-full max-w-[500px] mx-auto py-2 mb-8">
                        <img src={page.titleImage} alt="Title" className={`w-full h-auto object-contain ${isLight ? 'mix-blend-darken' : ''}`} />
                      </div>
                    )}

                    {page.title && !page.titleImage && (
                      project.category === 'workshop' ? (
                        <WorkshopHeadline title={page.title} isLight={isLight} />
                      ) : (
                        <h2 className={`font-avonia font-normal text-4xl sm:text-6xl text-center uppercase tracking-widest drop-shadow-md mb-8 sm:mb-12 ${
                          isLight ? 'text-[#540D21]' : 'text-[#FAF6EE]'
                        }`}>
                          {page.title}
                        </h2>
                      )
                    )}
                    {page.layout === 'bento-center-stack' ? (
                      <div className="grid grid-cols-1 sm:grid-cols-3 sm:grid-rows-2 gap-3 sm:gap-4 w-full h-auto sm:h-[85vh]">
                        {page.images?.map((img, idx) => {
                          let placementClass = '';
                          if (idx === 0) placementClass = 'sm:col-start-1 sm:row-start-1 sm:row-span-2';
                          else if (idx === 1) placementClass = 'sm:col-start-2 sm:row-start-1 sm:row-span-1';
                          else if (idx === 2) placementClass = 'sm:col-start-2 sm:row-start-2 sm:row-span-1';
                          else if (idx === 3) placementClass = 'sm:col-start-3 sm:row-start-1 sm:row-span-2';
                          
                          return (
                            <div
                              key={img.src}
                              className={`group relative w-full h-[65vh] sm:h-full overflow-hidden rounded-sm ${placementClass} ${
                                isLight ? '' : 'shadow-2xl border border-white/10'
                              }`}
                            >
                              <img
                                src={img.src}
                                alt={img.alt}
                                onClick={() => setSelectedImage(img.src)}
                                loading={i === 0 ? 'eager' : 'lazy'}
                                decoding="async"
                                className="block w-full h-full object-cover cursor-pointer transition-transform duration-700 group-hover:scale-[1.03]"
                                style={{
                                  objectPosition: img.objectPosition || 'center',
                                  ...(isLight ? { filter: 'drop-shadow(0 10px 15px rgba(84,13,33,0.1))' } : {})
                                }}
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-end p-4">
                                <span className="text-[11px] uppercase tracking-widest text-[#FAF6EE] font-mono bg-black/50 px-2 py-1 backdrop-blur-sm rounded-xs border border-white/15">
                                  Click to enlarge
                                </span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      <div className={`w-full ${
                        page.gridCols === 2
                          ? 'grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6'
                          : page.gridCols === 1
                          ? 'flex justify-center max-w-5xl mx-auto'
                          : 'flex flex-col sm:flex-row flex-wrap sm:flex-nowrap justify-center gap-2 sm:gap-4 h-auto sm:h-[85vh]'
                      }`}>
                        {page.images?.map((img, idx) => (
                          <div key={img.src} className={`relative overflow-hidden w-full ${
                            page.gridCols === 2 ? '' : page.gridCols === 1 ? 'max-w-5xl flex justify-center' : 'sm:flex-1 h-full'
                          }`}>
                            <img
                              src={img.src}
                              alt={img.alt}
                              onClick={() => setSelectedImage(img.src)}
                              loading={i === 0 ? 'eager' : 'lazy'}
                              decoding="async"
                              className={`block w-full h-full cursor-pointer transition-transform hover:scale-[1.03] rounded-sm ${page.imageAspect || ''} ${page.imageFit ? `object-${page.imageFit}` : 'object-contain'} ${isLight ? '' : 'shadow-lg'}`}
                              style={{
                                objectPosition: img.objectPosition || 'center',
                                ...(isLight ? { filter: 'drop-shadow(0 10px 15px rgba(84,13,33,0.1))' } : {})
                              }}
                            />
                          </div>
                        ))}
                      </div>
                    )}
                    {page.paragraphs && page.paragraphs.length > 0 && (
                      <div className="mt-12 mx-auto w-full max-w-4xl text-center md:text-left">
                        <div className={`flex flex-col gap-6 text-base sm:text-lg md:text-xl font-serif leading-relaxed drop-shadow-sm ${isLight ? 'text-[#540D21]/90' : 'text-white/90'}`}>
                          {page.paragraphs.map((p, pIdx) => (
                            <p key={pIdx}>{p}</p>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }
              if (page.type === 'text') {
                return (
                  <div key={`text-${i}`} className="relative flex flex-col items-center justify-center min-h-[70vh] text-center max-w-4xl mx-auto px-6 py-12 gap-10">
                    {project.id === 'anatomy-of-ornament' && (
                      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] sm:w-[320px] max-w-[70vw] opacity-20 -z-10 select-none">
                        <img src={lotusImage} alt="" aria-hidden="true" className="w-full h-auto object-contain" />
                      </div>
                    )}
                    {page.titleImage && (
                      <div className="flex justify-center w-full max-w-[600px] py-4">
                        <img src={page.titleImage} alt="Title" className="w-full h-auto object-contain mix-blend-darken" />
                      </div>
                    )}
                    {page.title && !page.titleImage && (
                      project.category === 'workshop' ? (
                        <WorkshopHeadline title={page.title} isLight={isLight} />
                      ) : (
                        <h1 className={`font-avonia ${
                          page.title.length > 15
                            ? 'text-4xl sm:text-5xl md:text-6xl tracking-wider leading-tight'
                            : 'text-6xl sm:text-7xl lg:text-8xl tracking-widest leading-relaxed'
                        } uppercase drop-shadow-lg py-4 ${isLight ? 'text-[#540D21]' : 'text-[#FAF6EE]'}`}>
                          {page.title}
                        </h1>
                      )
                    )}
                    <div className={`flex flex-col gap-6 text-base sm:text-lg md:text-xl md:text-left font-serif leading-relaxed drop-shadow-sm ${isLight ? 'text-[#540D21]' : 'text-[#FAF6EE]'}`}>
                      {page.paragraphs?.map((p, pIdx) => (
                        <p key={pIdx}>{p}</p>
                      ))}
                    </div>
                  </div>
                );
              }
              if (page.type === 'moodboard-collage') {
                return (
                  <div key={`mb-collage-${i}`} className="relative flex flex-col w-full px-2 sm:px-0 pt-8 sm:pt-16 pb-4 sm:pb-8">
                    {project.id === 'anatomy-of-ornament' && (
                      <div className="pointer-events-none absolute -top-2 right-0 sm:right-2 w-24 sm:w-36 opacity-15 -z-10 select-none">
                        <img src={lotusImage} alt="" aria-hidden="true" className="w-full h-auto object-contain" />
                      </div>
                    )}
                    {page.title && (
                      <h2 className="font-avonia font-normal text-4xl sm:text-6xl text-center uppercase tracking-widest drop-shadow-md mb-8 sm:mb-12 text-[#FAF6EE]">
                        {page.title}
                      </h2>
                    )}

                    {/* Exact Reference Proportional Collage (Seamless, Centered & Enlarged) */}
                    <div
                      className="relative w-full max-w-5xl lg:max-w-6xl mx-auto my-6 sm:my-10 select-none"
                      style={{ aspectRatio: '598 / 424' }}
                    >
                      {/* 1. Spool in carved wood tray (Left bottom: X=0%, W=28.4%, H=66.5%) */}
                      <div
                        className="absolute left-0 bottom-0 w-[28.4%] h-[66.5%] z-10 cursor-pointer overflow-hidden transition-all duration-500 hover:z-40 hover:scale-[1.03] group border-t border-r border-white/10 shadow-lg rounded-sm"
                        onClick={() => setSelectedImage(aooMbSpool)}
                      >
                        <img src={aooMbSpool} alt="Gold Zari Spool in Carved Tray" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2 pointer-events-none">
                          <span className="text-[10px] uppercase font-mono text-[#FAF6EE] tracking-widest bg-black/70 px-1.5 py-0.5 border border-white/10">Gold Spool</span>
                        </div>
                      </div>

                      {/* 2. Terracotta Kantha (Bottom Center: X=28.4%, W=25.1%, H=43.6%) */}
                      <div
                        className="absolute left-[28.4%] bottom-0 w-[25.1%] h-[43.6%] z-10 cursor-pointer overflow-hidden transition-all duration-500 hover:z-40 hover:scale-[1.03] group border-t border-white/10 shadow-lg rounded-sm"
                        onClick={() => setSelectedImage(aooMbKantha)}
                      >
                        <img src={aooMbKantha} alt="Terracotta Kantha Embroidery" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2 pointer-events-none">
                          <span className="text-[10px] uppercase font-mono text-[#FAF6EE] tracking-widest bg-black/70 px-1.5 py-0.5 border border-white/10">Kantha Ground</span>
                        </div>
                      </div>

                      {/* 3. Embroidered Kurta with Teal Wall (Top Right: X=53.5%, W=26.4%, H=35.8%) */}
                      <div
                        className="absolute left-[53.5%] top-0 w-[26.4%] h-[35.8%] z-10 cursor-pointer overflow-hidden transition-all duration-500 hover:z-40 hover:scale-[1.03] group border-b border-l border-white/10 shadow-lg rounded-sm"
                        onClick={() => setSelectedImage(aooMbKurta)}
                      >
                        <img src={aooMbKurta} alt="Embroidered Kurta on Teal Wall" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2 pointer-events-none">
                          <span className="text-[10px] uppercase font-mono text-[#FAF6EE] tracking-widest bg-black/70 px-1.5 py-0.5 border border-white/10">Zardozi Kurta</span>
                        </div>
                      </div>

                      {/* 4. Sunburst Corset on Mannequin (Bottom Right: X=53.5%, W=30.8%, H=64.2%) */}
                      <div
                        className="absolute left-[53.5%] bottom-0 w-[30.8%] h-[64.2%] z-10 cursor-pointer overflow-hidden transition-all duration-500 hover:z-40 hover:scale-[1.03] group border-t border-l border-white/10 shadow-lg rounded-sm"
                        onClick={() => setSelectedImage(aooMbCorset)}
                      >
                        <img src={aooMbCorset} alt="Sunburst Beaded Corset" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2 pointer-events-none">
                          <span className="text-[10px] uppercase font-mono text-[#FAF6EE] tracking-widest bg-black/70 px-1.5 py-0.5 border border-white/10">Sunburst Corset</span>
                        </div>
                      </div>

                      {/* 5. Runway Model Christy Turlington (Center Hero: X=22.4%, Y=5.9%, W=30.3%, H=73.8%) */}
                      <div
                        className="absolute left-[22.4%] top-[5.9%] w-[30.3%] h-[73.8%] z-20 cursor-pointer overflow-hidden shadow-2xl transition-all duration-500 hover:z-40 hover:scale-[1.03] group border border-white/20 rounded-sm"
                        onClick={() => setSelectedImage(aooMbRunway)}
                      >
                        <img src={aooMbRunway} alt="Archival Runway Model" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2 pointer-events-none">
                          <span className="text-[10px] uppercase font-mono text-[#FAF6EE] tracking-widest bg-black/70 px-1.5 py-0.5 border border-white/10">Runway Silhouette</span>
                        </div>
                      </div>

                      {/* 6. Applique Left (Floating Top Left, Oriented Rightward: X=2%, Y=2.5%, W=24%, H=56%) */}
                      <div
                        className="absolute left-[2%] top-[2.5%] w-[24%] h-[56%] z-30 cursor-pointer transition-all duration-500 hover:z-40 hover:scale-[1.06] group pointer-events-auto"
                        onClick={() => setSelectedImage(aooMbApplique)}
                      >
                        <img
                          src={aooMbApplique}
                          alt="Gold Botanical Applique"
                          style={{ transform: 'scaleX(-1)' }}
                          className="w-full h-full object-contain filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.9)]"
                        />
                      </div>

                      {/* 7. Applique Right (Floating Lower Right: X=74%, Bottom=0%, W=24%, H=53%) */}
                      <div
                        className="absolute left-[74%] bottom-0 w-[24%] h-[53%] z-30 cursor-pointer transition-all duration-500 hover:z-40 hover:scale-[1.06] group pointer-events-auto"
                        onClick={() => setSelectedImage(aooMbApplique)}
                      >
                        <img
                          src={aooMbApplique}
                          alt="Gold Botanical Applique"
                          className="w-full h-full object-contain filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.9)]"
                        />
                      </div>
                    </div>

                    {page.paragraphs && page.paragraphs.length > 0 && (
                      <div className="mt-12 mx-auto w-full max-w-4xl text-center md:text-left">
                        <div className="flex flex-col gap-6 text-base sm:text-lg md:text-xl font-serif leading-relaxed drop-shadow-sm text-white/90">
                          {page.paragraphs.map((p, pIdx) => (
                            <p key={pIdx}>{p}</p>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }
              if (page.type === 'collage' && page.images) {
                return (
                  <div key={`collage-${i}`} className="relative w-full max-w-5xl mx-auto min-h-[140vh] sm:min-h-[160vh] flex items-center justify-center py-20 mt-12 mb-24 overflow-visible">
                    
                    {/* Top Image (index 1) */}
                    <div className="absolute top-[5%] left-1/2 -translate-x-1/2 w-[55%] sm:w-[35%] z-10 drop-shadow-[0_15px_25px_rgba(0,0,0,0.5)] hover:z-[60] transition-transform duration-700 hover:scale-[1.03]">
                      <img src={page.images[1].src} alt={page.images[1].alt} className="w-full h-auto object-cover rounded-sm" />
                    </div>

                    {/* Left Image (index 2) - Moved from Top Right */}
                    <div className="absolute top-1/2 left-[2%] sm:left-[5%] -translate-y-1/2 w-[50%] sm:w-[32%] z-20 drop-shadow-[0_15px_25px_rgba(0,0,0,0.5)] hover:z-[60] transition-transform duration-700 hover:scale-[1.03]">
                      <img src={page.images[2].src} alt={page.images[2].alt} className="w-full h-auto object-cover rounded-sm" />
                    </div>

                    {/* Bottom Image (index 3) - Moved from Bottom Left */}
                    <div className="absolute bottom-[5%] left-1/2 -translate-x-1/2 w-[55%] sm:w-[35%] z-30 drop-shadow-[0_15px_25px_rgba(0,0,0,0.5)] hover:z-[60] transition-transform duration-700 hover:scale-[1.03]">
                      <img src={page.images[3].src} alt={page.images[3].alt} className="w-full h-auto object-cover rounded-sm" />
                    </div>

                    {/* Right Image (index 4) - Stays on Right */}
                    <div className="absolute top-1/2 right-[2%] sm:right-[5%] -translate-y-1/2 w-[50%] sm:w-[32%] z-20 drop-shadow-[0_15px_25px_rgba(0,0,0,0.5)] hover:z-[60] transition-transform duration-700 hover:scale-[1.03]">
                      <img src={page.images[4].src} alt={page.images[4].alt} className="w-full h-auto object-cover rounded-sm" />
                    </div>

                    {/* Center Oval */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[55%] sm:w-[38%] z-50 drop-shadow-[0_25px_45px_rgba(0,0,0,0.6)] hover:z-[60] transition-transform duration-700 hover:scale-[1.03]">
                      <img 
                        src={page.images[0].src} 
                        alt={page.images[0].alt} 
                        className="w-full h-auto object-cover" 
                        style={{ borderRadius: '50%', border: '10px solid rgba(133,143,186,0.3)' }}
                      />
                    </div>
                  </div>
                );
              }
              return (
                <img
                  key={page.src || i}
                  src={page.src}
                  alt={page.alt}
                  width={2000}
                  height={1125}
                  loading={i === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                  className={`block h-auto w-full object-contain ${isLight ? '' : 'drop-shadow-2xl'}`}
                />
              );
            })}
          </div>
        ) : (
          <div className="flex h-full items-center justify-center">
            <p className="rounded-sm border border-white/30 bg-black/40 px-6 py-4 text-center text-sm font-mono uppercase tracking-[0.2em] text-[#FAF6EE] backdrop-blur-sm">
              Project pages coming soon
            </p>
          </div>
        )}

        {selectedImage && createPortal(
          <div 
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 sm:p-8 backdrop-blur-sm cursor-pointer"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <img 
              src={selectedImage} 
              alt="Enlarged view" 
              className="max-h-full max-w-full object-contain drop-shadow-2xl cursor-default"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
            />
          </div>,
          document.body
        )}
      </main>
    </div>,
    document.body
  );
};

export const WorksPage: React.FC = () => {
  const [openProject, setOpenProject] = useState<Project | null>(null);

  return (
    <section
      id="works"
      className="relative text-[#241217] py-20 px-4 sm:px-8 md:px-12 overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Page meta strip (same treatment as the contact page) */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#DECFC0] pb-4 mb-8 text-xs font-mono tracking-[0.25em] text-[#540D21]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#540D21]" />
            <span className="font-bold text-[#241217]">PAGE 04 · WORKS // PROJECTS &amp; WORKSHOPS</span>
          </div>
          <span className="text-[#851737]">SHATMA AALIYA</span>
        </div>

        <h2 className="font-avonia font-normal text-6xl sm:text-7xl md:text-8xl leading-tight pt-6 sm:pt-8 mb-12 text-[#241217]">
          Works
        </h2>

        {/* Project icons — each opens that project's pages */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-20">
          {PROJECTS.filter(p => p.category !== 'workshop').map((project) => {
            const Icon = project.icon;
            return (
              <button
                key={project.id}
                type="button"
                onClick={() => setOpenProject(project)}
                data-cursor="pointer"
                className="wine-card group flex flex-col items-center gap-5 px-6 py-10 text-center transition-transform duration-300 hover:-translate-y-1 cursor-pointer"
              >
                {/* Cream icon circle, like the contact page's action icons */}
                <span className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-[#FAF6EE] bg-[#FAF6EE] text-[#540D21] shadow-md transition-transform duration-300 group-hover:scale-105">
                  <Icon className="h-10 w-10" strokeWidth={1.5} />
                </span>
                <span className="flex flex-col items-center gap-1">
                  <span className="font-avonia font-normal text-3xl sm:text-4xl leading-tight text-[#FAF6EE]">
                    {project.title}
                  </span>
                  <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#FAF6EE]/85">
                    {project.tagline}
                  </span>
                </span>
                <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#FAF6EE] underline decoration-[#FAF6EE]/50 underline-offset-4">
                  View project →
                </span>
              </button>
            );
          })}
        </div>

        {/* Workshops — one wine card with detail rows, like the contact page's CALL / WHATSAPP rows */}
        <div className="wine-card p-8 sm:p-10">
          <div className="flex flex-col items-center text-center gap-2 mb-6">
            <h3 className="font-avonia font-normal text-4xl sm:text-5xl text-[#FAF6EE]">
              Workshop
            </h3>
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#FAF6EE]/85">
              Hands-on crafts · {WORKSHOPS.length}
            </span>
            <span className="mt-2 w-16 h-0.5 bg-[#FAF6EE]" />
          </div>

          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
            {WORKSHOPS.map((workshop, i) => {
              const Tag = workshop.projectId ? 'button' : 'li';
              return (
                <Tag
                  key={workshop.name}
                  onClick={workshop.projectId ? () => {
                    const p = PROJECTS.find(proj => proj.id === workshop.projectId);
                    if (p) setOpenProject(p);
                  } : undefined}
                  className={`flex items-baseline gap-4 rounded bg-[#FAF6EE]/10 px-4 py-3 text-left ${workshop.projectId ? 'cursor-pointer hover:bg-[#FAF6EE]/20 transition-colors' : ''}`}
                >
                  <span className="font-mono text-sm font-bold text-[#FAF6EE]/75">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="flex flex-col">
                    <span className="text-2xl sm:text-3xl uppercase tracking-[0.04em] text-[#FAF6EE] [font-family:var(--font-readable-display)]">
                      {workshop.name}
                    </span>
                    {workshop.note && (
                      <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#FAF6EE]/75">
                        {workshop.note}
                      </span>
                    )}
                  </span>
                </Tag>
              );
            })}
          </ol>
        </div>
      </div>

      {openProject && <ProjectViewer project={openProject} onClose={() => setOpenProject(null)} />}
    </section>
  );
};
