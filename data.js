/**
 * ============================================================================
 * PORTFOLIO PROJECT DATA
 * ============================================================================
 * This is the single source of truth for every project on the site.
 * The index list, the filter bar, and the case-study modal are all generated
 * automatically from this array — nothing else needs to be touched in the
 * HTML to add, remove, or reorder work.
 *
 * TO ADD A NEW PROJECT:
 *   1. Drop your image(s) into assets/images/projects/
 *   2. Copy one of the objects below and edit every field.
 *   3. Save. The site rebuilds the list, filters and modal on page load.
 *
 * Fields:
 *  id            unique slug, used for the modal URL hash (#/work/id)
 *  title         project title — edit freely, this is a starting point
 *  categories    array drawn from CATEGORIES below (a project can belong
 *                to more than one, e.g. ["Branding", "Print"])
 *  year          production year, shown in the index list
 *  role          your role on the project
 *  client        client / brand name (or "Personal Project")
 *  summary       one line, shown nowhere but kept for future use (e.g. SEO)
 *  description   case-study paragraphs — array of strings, one per paragraph
 *  cover         path to the hero / index image
 *  gallery       array of additional image paths shown in the case study
 * ============================================================================
 */

const PROJECTS = [
  {
    id: "coffee-world",
    title: "Coffee World",
    categories: ["Branding"],
    year: "2024",
    role: "Brand Identity, Packaging, Art Direction",
    client: "Coffee World",
    summary: "A warm, confident cup and packaging identity for a specialty coffee brand.",
    description: [
      "Coffee World needed an identity that could travel from a takeaway cup to a roastery shelf without losing its warmth — premium but unpretentious, the kind of mark that feels equally at home in your hand as it does on packaging.",
      "The design leans into an unexpected celestial motif on the cup itself, giving the brand a distinct, conversation-starting detail on a crowded café street where most competitors default to the same green-and-brown palette."
    ],
    cover: "assets/images/projects/coffeeworld-1.jpg",
    gallery: []
  },
  {
    id: "ambrose-packaging",
    title: "Ambrose Provisions",
    categories: ["Branding", "Print"],
    year: "2024",
    role: "Packaging Design, Art Direction",
    client: "Ambrose Provisions",
    summary: "Kraft-paper packaging and a gold script wordmark for an artisan goods label.",
    description: [
      "Ambrose Provisions makes small-batch goods and wanted packaging that felt hand-finished rather than mass-produced. The identity is built around a fluid script wordmark stamped in gold foil against uncoated kraft stock, letting the material itself carry half the brand's story.",
      "Every element of the packaging system — the box, the wax stamp, the interior card, the outer sleeve — was considered as part of a single unboxing sequence rather than designed in isolation."
    ],
    cover: "assets/images/projects/aurora-4.jpg",
    gallery: []
  },
  {
    id: "vroom-magazine",
    title: "Vroom — Car Culture Magazine",
    categories: ["Print"],
    year: "2023",
    role: "Editorial Layout, Art Direction",
    client: "Vroom Magazine",
    summary: "A full-bleed editorial spread and cover for an automotive culture publication.",
    description: [
      "Vroom covers the culture around cars as much as the machines themselves, so the layout was built to read like a feature-film still — large format, cinematic, and unafraid of negative space on the road-shot spread.",
      "Typography stays minimal and confident throughout, letting the photography carry the emotional weight while a quiet underlying grid does the organizational work."
    ],
    cover: "assets/images/projects/velocity-1.jpg",
    gallery: []
  },
  {
    id: "dream-big-series",
    title: "Dream Big — Poster Series",
    categories: ["Print"],
    year: "2023",
    role: "Poster Design, Illustration, Art Direction",
    client: "Personal Project",
    summary: "A three-piece poster series spanning bold typography, minimal illustration and neon color.",
    description: [
      "This series began as an exercise in range: three posters, three very different registers, held together by a shared confidence in scale. Dream Big pushes oversized type to its limit; the companion Paris piece reduces a landmark to a handful of geometric shapes inside a lightbulb; the Vegas piece leans fully into saturated, neon-lit maximalism.",
      "Rather than force one visual language across all three, the series is unified by restraint elsewhere — consistent margins, a shared type family, and a willingness to let one dominant idea fill the whole page each time."
    ],
    cover: "assets/images/projects/dreambig-1.jpg",
    gallery: [
      "assets/images/projects/dreambig-2.jpg",
      "assets/images/projects/dreambig-3.jpg"
    ]
  },
  {
    id: "streamline-ui",
    title: "Streamline — Music Platform UI",
    categories: ["UI/UX"],
    year: "2024",
    role: "Product Design, UI/UX",
    client: "Personal Project",
    summary: "A dark, editorial interface concept for a vinyl-focused music streaming platform.",
    description: [
      "Streamline reimagines a music platform's now-playing screen around the physical ritual of a record — a large, central turntable view instead of the flat album-art tile most streaming apps default to.",
      "The interface uses a near-black palette and generous type scale so the artwork and interaction controls stay the clear focus, with navigation kept minimal and out of the way until it's needed."
    ],
    cover: "assets/images/projects/vinyl-1.jpg",
    gallery: []
  },
  {
    id: "nova-product",
    title: "Nova — Product Interfaces",
    categories: ["UI/UX", "Motion"],
    year: "2024",
    role: "Product Design, UI/UX, Prototyping & Micro-interactions",
    client: "Multiple",
    summary: "A collection of product interface case studies spanning SaaS, mobile and travel booking.",
    description: [
      "This collection brings together three interface projects designed within the same practice: a real-time collaboration SaaS dashboard, a mobile parking-app flow, and a travel-booking landing experience — each solving a different problem but built with the same underlying attention to hierarchy, state, and density.",
      "Motion and micro-interaction prototyping ran alongside every static screen shown here — transitions, loading states and button feedback were designed as part of the interface, not bolted on afterward, so the product feels considered in motion as well as at rest."
    ],
    cover: "assets/images/projects/digitalproduct-1.jpg",
    gallery: [
      "assets/images/projects/digitalproduct-2.jpg",
      "assets/images/projects/streetsound-2.jpg"
    ]
  },
  {
    id: "burger-house",
    title: "Burger House",
    categories: ["Branding", "Print"],
    year: "2023",
    role: "Brand Identity, Logo Design, Menu Design",
    client: "Burger House",
    summary: "Playful, appetite-driven branding for an independent Tel Aviv burger restaurant.",
    description: [
      "Burger House is a neighborhood restaurant brand built to feel hand-made and craveable rather than corporate. The circular badge mark borrows the visual language of vintage diner signage, paired with a looser hand-drawn line variant used across menus and packaging.",
      "The system was designed to be produced affordably by a small local print shop — bold, high-contrast, and forgiving of the printing methods a restaurant this size actually has access to."
    ],
    cover: "assets/images/projects/aurora-1.jpg",
    gallery: [
      "assets/images/projects/foodstreet-4.jpg"
    ]
  },
  {
    id: "pillow-mark",
    title: "Pillows & Co. — Brand Mark",
    categories: ["Branding"],
    year: "2024",
    role: "Logo Design, Brand Mark",
    client: "Pillows & Co.",
    summary: "A soft, friendly logotype and mark for a decorative-pillows home goods brand.",
    description: [
      "This mark needed to communicate comfort at a glance — a hand-drawn illustrative style and a warm, muted palette do most of that work, paired with a bilingual lockup (English and Hebrew) for a brand selling in both markets.",
      "The illustration style was kept loose and slightly imperfect on purpose, matching the soft, textile subject matter rather than rendering it with the precision of a tech logo."
    ],
    cover: "assets/images/projects/aurora-2.jpg",
    gallery: []
  },
  {
    id: "social-campaign",
    title: "Social Campaign Collection",
    categories: ["Social Media"],
    year: "2024",
    role: "Social Content Design, Art Direction",
    client: "Multiple",
    summary: "A set of Instagram campaign creative spanning food, fashion, home and seasonal retail.",
    description: [
      "This collection gathers six social campaign pieces produced for different clients and verticals — a shakshuka delivery promo, a fresh-produce sale post, a fashion discount campaign, furniture and watch retail promotions, and a summer ice-cream campaign — all built to the fast turnaround a real content calendar demands.",
      "Despite the range of clients, each piece follows the same underlying discipline: a clear offer, a dominant hero image, and typography sized to stop a thumb mid-scroll, adapted to each brand's own color language rather than a single house style."
    ],
    cover: "assets/images/projects/foodstreet-1.jpg",
    gallery: [
      "assets/images/projects/foodstreet-2.jpg",
      "assets/images/projects/foodstreet-3.jpg",
      "assets/images/projects/packaging-1.jpg",
      "assets/images/projects/packaging-2.jpg",
      "assets/images/projects/aurora-3.jpg"
    ]
  },
  {
    id: "sonic-3d",
    title: "Sonic — 3D Visualization",
    categories: ["3D"],
    year: "2024",
    role: "3D Modeling, Texturing, Lighting & Render",
    client: "Personal Project",
    summary: "A photoreal 3D guitar render built around a Tel Aviv skyline concept.",
    description: [
      "Sonic is a material and lighting study — a guitar body modeled and lit from scratch, with a cityscape texture worked into the finish to tie the piece to Tel Aviv's music scene rather than presenting a generic product shot.",
      "Getting the transparency and reflectivity of the lacquered body to read correctly took the most iteration: on a subject this reflective, the studio lighting rig is doing as much design work as the model itself."
    ],
    cover: "assets/images/projects/streetsound-1.jpg",
    gallery: []
  }
];

/**
 * Filter categories shown in the projects filter bar, in display order.
 * "All" is handled separately in script.js.
 * New categories can be added here — projects will show up automatically
 * once they reference the category in their `categories` array above.
 */
const CATEGORIES = ["Branding", "Print", "Social Media", "UI/UX", "Motion", "3D"];
