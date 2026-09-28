export interface AtelierSwatch {
  name: string;
  hex: string;
  rgb: string;
  dmc: string;
  role: string;
  percentage: number;
  fabric: string;
  garmentUsage: string;
}

export interface AtelierPalette {
  id: string;
  name: string;
  tagline: string;
  era: string;
  description: string;
  base: string;
  surface: string;
  panel: string;
  accent: string;
  brass: string;
  gold: string;
  bronze: string;
  mocha: string;
  text: string;
  textMuted: string;
  swatches: AtelierSwatch[];
}

export const atelierPalettes: AtelierPalette[] = [
  {
    id: 'twilight-plum-porcelain-rose',
    name: 'Twilight Plum & Porcelain Rose',
    tagline: 'Twilight Plum (#3F303D), Luminous Porcelain Rose (#E9D5E6) & Amethyst Couture',
    era: 'Atelier Twilight Salon Collection',
    description: 'The moody allure of Twilight Plum (#3F303D) paired with delicate, high-editorial Porcelain Rose (#E9D5E6) and smoked mulberry velvet.',
    base: '#1A121A',
    surface: '#241824',
    panel: '#322131',
    accent: '#E9D5E6',
    brass: '#E9D5E6',
    gold: '#C98CB5',
    bronze: '#8A5C80',
    mocha: '#3F303D',
    text: '#FAF0F8',
    textMuted: '#D2BDCF',
    swatches: [
      {
        name: 'Porcelain Rose Luster',
        hex: '#E9D5E6',
        rgb: '233, 213, 230',
        dmc: 'DMC 3865 Delicate Rose',
        role: 'Primary Radiant Accent & Highlight',
        percentage: 30,
        fabric: 'Glazed Mulberry Silk & Porcelain Brocade',
        garmentUsage: 'Embossed badges, radiant typographical headers, metallic eyelets'
      },
      {
        name: 'Twilight Plum Noir',
        hex: '#3F303D',
        rgb: '63, 48, 61',
        dmc: 'DMC 3041 Twilight Plum',
        role: 'Atmospheric Panels & Contrast Containers',
        percentage: 25,
        fabric: 'Smoked Plum Wool Crepe & Heavy Velvet',
        garmentUsage: 'Editorial cards, structural tailoring, modal backdrops'
      },
      {
        name: 'Smoked Mauve Bloom',
        hex: '#C98CB5',
        rgb: '201, 140, 181',
        dmc: 'DMC 3804 Mauve Petal',
        role: 'Volumetric Luster & Glow',
        percentage: 20,
        fabric: 'Sun-dyed Organza & Tussar Silk',
        garmentUsage: 'Volumetric light plumes, luminous text highlights, gradient washes'
      },
      {
        name: 'Plum Amethyst Patina',
        hex: '#8A5C80',
        rgb: '138, 92, 128',
        dmc: 'DMC 3835 Medium Plum',
        role: 'Hairline Frames & Architecture',
        percentage: 15,
        fabric: 'Archival Weft Silk & Metallic Piping',
        garmentUsage: 'Slide borders, card dividers, architectural arch rims'
      },
      {
        name: 'Petal Silk Ivory',
        hex: '#FAF0F8',
        rgb: '250, 240, 248',
        dmc: 'DMC 712 Pale Cream Rose',
        role: 'Editorial Typographic Clarity',
        percentage: 10,
        fabric: 'Varanasi Katan Mulberry Silk',
        garmentUsage: 'Display headlines, editorial body typography, drop caps'
      }
    ]
  },
  {
    id: 'antique-brass-gold',
    name: "L'Atelier Doré & Mocha",
    tagline: 'Antique Embossed Brass, Radiant Amber & Roasted Mocha',
    era: "Signature Indus '27 / Neelgar Haute Couture",
    description: 'The signature chromatic identity of Shatma Aaliya. Rooted in the patinated brass gramophones of old Indian ateliers, luminous amber smoke, and deep espresso tailoring.',
    base: '#0E0C0A',
    surface: '#14100C',
    panel: '#1A140F',
    accent: '#DEB046',
    brass: '#DEB046',
    gold: '#CE8E23',
    bronze: '#98652A',
    mocha: '#443122',
    text: '#F7EEDB',
    textMuted: '#D1C5B0',
    swatches: [
      {
        name: 'Antique Brass Patina',
        hex: '#DEB046',
        rgb: '222, 176, 70',
        dmc: 'DMC 3821 Straw',
        role: 'Primary Accent & Metallic Eyelets',
        percentage: 30,
        fabric: 'Hand-beaten brass spangles & zardozi bullion',
        garmentUsage: 'Corsetry boning channels, metallic embroidery, glowing plaques'
      },
      {
        name: 'Warm Amber Ochre',
        hex: '#CE8E23',
        rgb: '206, 142, 35',
        dmc: 'DMC 783 Medium Topaz',
        role: 'Volumetric Luster & Glow',
        percentage: 25,
        fabric: 'Sun-dyed organza & raw tussar silk',
        garmentUsage: 'Volumetric light plumes, luminous text highlights, gradient washes'
      },
      {
        name: 'Burnished Patina Bronze',
        hex: '#98652A',
        rgb: '152, 101, 42',
        dmc: 'DMC 420 Dark Hazelnut',
        role: 'Hairline Frames & Structure',
        percentage: 20,
        fabric: 'Archival weft silk & metallic piping cord',
        garmentUsage: 'Slide borders, card dividers, architectural arch rims'
      },
      {
        name: 'Roasted Espresso Mocha',
        hex: '#443122',
        rgb: '68, 49, 34',
        dmc: 'DMC 3781 Dark Mocha',
        role: 'Deep Shadow & Outer Boundaries',
        percentage: 15,
        fabric: 'Heavy structured wool crepe & velvet lining',
        garmentUsage: 'Card containers, dark shadows, subtle separator rules'
      },
      {
        name: 'Raw Mulberry Silk',
        hex: '#F7EEDB',
        rgb: '247, 238, 219',
        dmc: 'DMC 712 Pale Cream',
        role: 'Editorial Typographic Clarity',
        percentage: 10,
        fabric: 'Unbleached Varanasi mulberry katan silk',
        garmentUsage: 'Headlines, body prose, drop capitals, high-contrast labels'
      }
    ]
  },
  {
    id: 'neelgar-indigo-zardozi',
    name: 'Neelgar Indigo & Zardozi',
    tagline: 'Varanasi Royal Indigo, Midnight Velvet & Liquid Gold',
    era: 'Varanasi 18C Weavers Guild Archive',
    description: 'Inspired by Neelgar’s historic indigo dye-vats and 18th-century royal court attire, where deep midnight indigo contrasts with hand-laid metallic gold spangles.',
    base: '#080C14',
    surface: '#0F1624',
    panel: '#151F33',
    accent: '#E5B842',
    brass: '#E5B842',
    gold: '#4E7AB5',
    bronze: '#253B5C',
    mocha: '#1B273B',
    text: '#F0F5FA',
    textMuted: '#B8C7D9',
    swatches: [
      {
        name: 'Liquid Zardozi Gold',
        hex: '#E5B842',
        rgb: '229, 184, 66',
        dmc: 'DMC 676 Light Old Gold',
        role: 'Luminescent Foil & Badges',
        percentage: 25,
        fabric: 'Real silver-gilt wire (Zari) & bullion coils',
        garmentUsage: 'Focal embroidery, button closures, illuminated badges'
      },
      {
        name: 'Neelgar Indigo Blue',
        hex: '#3B5B88',
        rgb: '59, 91, 136',
        dmc: 'DMC 798 Dark Delft Blue',
        role: 'Volumetric Midnight Bloom',
        percentage: 30,
        fabric: 'Fermented plant indigo on mulberry silk',
        garmentUsage: 'Card gradients, secondary buttons, aura highlights'
      },
      {
        name: 'Midnight Prussian Weft',
        hex: '#1E2C42',
        rgb: '30, 44, 66',
        dmc: 'DMC 939 Very Dark Navy',
        role: 'Structural Framing',
        percentage: 25,
        fabric: 'Heavy jacquard brocade & twill lining',
        garmentUsage: 'Outer containers, modal backdrops, subtle dividers'
      },
      {
        name: 'Obsidian Velvet Noir',
        hex: '#080C14',
        rgb: '8, 12, 20',
        dmc: 'DMC 3799 Midnight Noir',
        role: 'Infinite Foundation',
        percentage: 15,
        fabric: 'Midnight silk velvet',
        garmentUsage: 'Deep atmospheric viewport base'
      },
      {
        name: 'Pearl Silk Ecru',
        hex: '#F0F5FA',
        rgb: '240, 245, 250',
        dmc: 'DMC 822 Light Beige Silk',
        role: 'Crisp Headline Contrast',
        percentage: 5,
        fabric: 'Bleached raw silk organza',
        garmentUsage: 'Serif headlines, editorial text'
      }
    ]
  },
  {
    id: 'terre-de-sienne-madder',
    name: 'Terre de Sienne & Madder Dye',
    tagline: 'Burnt Terracotta, Madder Root Crimson & Raw Khadi',
    era: 'Kutch Natural Dye & Gujarat Clay Artisans',
    description: 'A celebration of Indian earth pigments: madder root, oxidized iron mordant, terracotta pots, and sun-baked raw linen from Shatma’s Ahmedabad field workshops.',
    base: '#100907',
    surface: '#180F0C',
    panel: '#221612',
    accent: '#E07A4A',
    brass: '#E07A4A',
    gold: '#C25732',
    bronze: '#853B25',
    mocha: '#4D2216',
    text: '#FAF3EB',
    textMuted: '#D9C4B5',
    swatches: [
      {
        name: 'Terracotta Ochre',
        hex: '#E07A4A',
        rgb: '224, 122, 74',
        dmc: 'DMC 921 Copper Gold',
        role: 'Primary Accent & Solar Glow',
        percentage: 30,
        fabric: 'Natural pomegranate & turmeric dye',
        garmentUsage: 'Interactive highlights, glowing plaques, active chips'
      },
      {
        name: 'Madder Root Crimson',
        hex: '#C25732',
        rgb: '194, 87, 50',
        dmc: 'DMC 356 Terracotta Medium',
        role: 'Secondary Depth & Passion',
        percentage: 25,
        fabric: 'Manjistha (Indian Madder) vat dye on unspun wool',
        garmentUsage: 'Gradient transitions, button hovers, badges'
      },
      {
        name: 'Burnt Clay Umber',
        hex: '#853B25',
        rgb: '133, 59, 37',
        dmc: 'DMC 3777 Dark Terracotta',
        role: 'Border & Hairline Structure',
        percentage: 20,
        fabric: 'Iron rust water & tannin mordant',
        garmentUsage: 'Card borders, table dividers, arch outlines'
      },
      {
        name: 'Smoked Teak Mocha',
        hex: '#4D2216',
        rgb: '77, 34, 22',
        dmc: 'DMC 3371 Black Brown',
        role: 'Panel Shade & Inset Glass',
        percentage: 15,
        fabric: 'Waxed handloom hemp canvas',
        garmentUsage: 'Drawer backgrounds, hover cards'
      },
      {
        name: 'Unbleached Khadi Cream',
        hex: '#FAF3EB',
        rgb: '250, 243, 235',
        dmc: 'DMC 746 Off-White Cotton',
        role: 'Natural Fiber Text Clarity',
        percentage: 10,
        fabric: 'Hand-spun organic khadi cotton',
        garmentUsage: 'Display headlines, editorial body typography'
      }
    ]
  },
  {
    id: 'haute-couture-monolith',
    name: 'Haute Couture Monolith',
    tagline: 'Porcelain Alabaster, Champagne Silk & Obsidian Carbon',
    era: 'Paris & Mumbai Fashion Week Salon',
    description: 'A sharp, sculptural editorial aesthetic. High-contrast monochromatic precision, soft oyster champagne highlights, and razor-sharp silhouette architecture.',
    base: '#0A0A0B',
    surface: '#121214',
    panel: '#1A1A1E',
    accent: '#D4C5A9',
    brass: '#D4C5A9',
    gold: '#A39985',
    bronze: '#6E6759',
    mocha: '#38352F',
    text: '#F8F6F2',
    textMuted: '#C2BEB6',
    swatches: [
      {
        name: 'Champagne Oyster',
        hex: '#D4C5A9',
        rgb: '212, 197, 169',
        dmc: 'DMC 3046 Medium Yellow Beige',
        role: 'Refined Metallic Sheen',
        percentage: 30,
        fabric: 'Woven champagne silk taffeta',
        garmentUsage: 'Corsetry boning, subtle metallic highlights, borders'
      },
      {
        name: 'Smoked Alabaster',
        hex: '#A39985',
        rgb: '163, 153, 133',
        dmc: 'DMC 646 Dark Beaver Gray',
        role: 'Secondary Gradient Tone',
        percentage: 25,
        fabric: 'Fine Italian worsted wool',
        garmentUsage: 'Button borders, atmospheric smoke, secondary meta'
      },
      {
        name: 'Granite Slate',
        hex: '#6E6759',
        rgb: '110, 103, 89',
        dmc: 'DMC 3799 Pewter',
        role: 'Structural Framework',
        percentage: 20,
        fabric: 'Molded neoprene & boning canvas',
        garmentUsage: 'Hairline borders, tab indicators'
      },
      {
        name: 'Obsidian Carbon Noir',
        hex: '#0A0A0B',
        rgb: '10, 10, 11',
        dmc: 'DMC 310 Black',
        role: 'Infinite Monolithic Base',
        percentage: 15,
        fabric: 'Matte tuxedo twill',
        garmentUsage: 'Backdrop, high contrast silhouette framing'
      },
      {
        name: 'Porcelain Alabaster',
        hex: '#F8F6F2',
        rgb: '248, 246, 242',
        dmc: 'DMC B5200 Snow White / Cream',
        role: 'High-Fashion Editorial Typography',
        percentage: 10,
        fabric: 'Pure unweighted silk crepe de chine',
        garmentUsage: 'Display headlines, Bodoni numerals, quotes'
      }
    ]
  }
];
