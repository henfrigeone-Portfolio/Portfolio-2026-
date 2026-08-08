/**
 * ============================================================================
 * PORTFOLIO PROJECT DATA
 * ============================================================================
 * This is the single source of truth for every project on the site.
 * The index list, the filter bar, and the case-study modal are all generated
 * automatically from this array — nothing else needs to be touched in the
 * HTML to add, remove, or reorder work. There is no cap in script.js: every
 * object below gets its own card on the main page.
 *
 * TO ADD A NEW PROJECT:
 *   1. Drop your image into assets/images/projects/
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
 *  summary       one line, shown on the project card
 *  description   case-study paragraphs — array of strings, one per paragraph
 *                (first is shown as "Overview", second as "Approach" in the
 *                case-study modal)
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
    id: "dream-big",
    title: "Dream Big",
    categories: ["Print"],
    year: "2023",
    role: "Poster Design, Art Direction",
    client: "Personal Project",
    summary: "A bold typographic poster built entirely around scale and contrast.",
    description: [
      "Dream Big began as an exercise in restraint: how much can a single phrase, printed at scale, carry on its own? The composition leans on a dramatic type-to-page ratio and a tightly controlled palette so the message lands before it's even read.",
      "The piece was later adapted into a small print run and a series of size variants for retail display."
    ],
    cover: "assets/images/projects/dreambig-1.jpg",
    gallery: []
  },
  {
    id: "france-travel",
    title: "France — Travel Poster",
    categories: ["Print"],
    year: "2023",
    role: "Illustration, Poster Design",
    client: "Personal Project",
    summary: "A minimal travel poster reducing the Eiffel Tower to a single geometric idea.",
    description: [
      "This piece distills Paris down to a handful of geometric shapes set inside a lightbulb — closer to a memory of the city than a literal postcard, and a study in how much can be cut away before an image stops reading.",
      "Part of an ongoing travel-poster series built on a shared grid and color logic, so new destinations can be added while the set still reads as one cohesive collection."
    ],
    cover: "assets/images/projects/dreambig-2.jpg",
    gallery: []
  },
  {
    id: "vegas-nights",
    title: "Vegas Nights",
    categories: ["Print"],
    year: "2023",
    role: "Poster & Illustration",
    client: "Personal Project",
    summary: "A saturated, neon-lit skyline poster exploring maximalist color.",
    description: [
      "Vegas Nights called for a louder register than most of the print work in this portfolio — saturated color, high contrast, and a skyline silhouette built to hold its own against actual casino signage.",
      "The piece explores how far a composition can be pushed toward maximalism while staying legible and intentional rather than noisy."
    ],
    cover: "assets/images/projects/dreambig-3.jpg",
    gallery: []
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
    id: "taskflow-app",
    title: "TaskFlow — SaaS Dashboard",
    categories: ["UI/UX", "Motion"],
    year: "2024",
    role: "Product Design, UI/UX, Prototyping",
    client: "TaskFlow",
    summary: "A real-time collaboration dashboard interface for a team productivity SaaS.",
    description: [
      "TaskFlow's team needed an interface that felt fast and considered at once — dense enough for power users tracking multiple projects, calm enough for a first-time visitor landing on the marketing page.",
      "Motion was treated as a design material from the start: transitions, live-update states and notification behavior were prototyped alongside the static screens shown here, not bolted on afterward."
    ],
    cover: "assets/images/projects/digitalproduct-1.jpg",
    gallery: []
  },
  {
    id: "parkme-app",
    title: "ParkMe — Mobile App UI",
    categories: ["UI/UX"],
    year: "2024",
    role: "Product Design, UI/UX",
    client: "ParkMe",
    summary: "A clean, high-contrast mobile flow for finding and booking parking.",
    description: [
      "ParkMe strips a parking-booking flow down to its essentials — search, select, pay — using a stark black-and-white system so the interface stays legible in bright outdoor light, glanced at mid-errand.",
      "Every screen in the flow was designed against the same handful of components, keeping the build lightweight and the experience consistent from search to confirmation."
    ],
    cover: "assets/images/projects/digitalproduct-2.jpg",
    gallery: []
  },
  {
    id: "telaviv-booking",
    title: "Tel Aviv Getaways — Travel Booking UI",
    categories: ["UI/UX"],
    year: "2024",
    role: "Product Design, UI/UX",
    client: "Personal Project",
    summary: "A travel-booking landing page concept layered over a Tel Aviv skyline.",
    description: [
      "This concept explores a booking flow — flights, hotels, cars — condensed into a single floating panel over a full-bleed destination photograph, so the decision-making stays close to the inspiration that triggered it.",
      "Form fields were kept large and touch-friendly throughout, since booking flows like this one see as much mobile traffic as desktop."
    ],
    cover: "assets/images/projects/streetsound-2.jpg",
    gallery: []
  },
  {
    id: "burger-badge",
    title: "Burger House — Brand Mark",
    categories: ["Branding"],
    year: "2023",
    role: "Brand Identity, Logo Design",
    client: "Burger House",
    summary: "A circular badge logo for an independent Tel Aviv burger restaurant.",
    description: [
      "Burger House is a neighborhood restaurant brand built to feel hand-made and craveable rather than corporate. The circular badge mark borrows the visual language of vintage diner signage — bold, high-contrast, and legible at signage scale or embossed on a napkin.",
      "The palm trees and skyline in the mark root it specifically in Tel Aviv rather than reading as a generic burger-joint logo."
    ],
    cover: "assets/images/projects/aurora-1.jpg",
    gallery: []
  },
  {
    id: "burger-menu-art",
    title: "Burger House — Menu Line Art",
    categories: ["Branding", "Print"],
    year: "2023",
    role: "Illustration, Menu Design",
    client: "Burger House",
    summary: "A looser, hand-drawn line-art variant used across menus and packaging.",
    description: [
      "Alongside the circular badge, Burger House needed a lighter-weight mark for contexts where the full-color version was too heavy — menu headers, packaging, and single-color print runs.",
      "This line-art variant keeps the same silhouette and proportions as the primary mark so the two always read as one system, even printed at a fraction of the cost."
    ],
    cover: "assets/images/projects/foodstreet-4.jpg",
    gallery: []
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
    id: "shakshuka-promo",
    title: "Shakshuka House — Delivery Promo",
    categories: ["Social Media"],
    year: "2024",
    role: "Social Content Design, Art Direction",
    client: "Shakshuka House",
    summary: "An Instagram promo post for a shakshuka delivery restaurant.",
    description: [
      "Built for a restaurant's delivery-app promo push, this post leans entirely on a single hero shot of the dish, with the offer and delivery-app iconography kept small and out of the way of the food itself.",
      "The layout was built as a reusable template — swap the dish photo and copy, and the same structure works for the next weekly special."
    ],
    cover: "assets/images/projects/foodstreet-1.jpg",
    gallery: []
  },
  {
    id: "fresh-market-sale",
    title: "Fresh Market — Super Sale Campaign",
    categories: ["Social Media"],
    year: "2024",
    role: "Social Content Design, Art Direction",
    client: "Fresh Market",
    summary: "A produce-forward Instagram sale post for a farm-to-table grocery brand.",
    description: [
      "This campaign post needed to sell freshness first and the discount second — a top-down produce shot fills most of the frame, with the offer treated as a supporting badge rather than the headline.",
      "A hand-drawn texture pattern in the background ties the post back to the brand's farm-to-table identity without competing with the product photography."
    ],
    cover: "assets/images/projects/foodstreet-2.jpg",
    gallery: []
  },
  {
    id: "fashion-sale",
    title: "Fashion Sale Campaign",
    categories: ["Social Media"],
    year: "2024",
    role: "Social Content Design, Art Direction",
    client: "Personal Project",
    summary: "A clean, photo-led Instagram sale post for a fashion retail brand.",
    description: [
      "This post keeps the discount message bold and centered while letting the lifestyle photography carry the brand feel — a formula built for a fast-moving retail content calendar where new offers post multiple times a week.",
      "Typography was sized specifically to stop a thumb mid-scroll, tested at actual feed size rather than designed at full resolution and shrunk down after the fact."
    ],
    cover: "assets/images/projects/foodstreet-3.jpg",
    gallery: []
  },
  {
    id: "furniture-sale",
    title: "Home Sale Campaign",
    categories: ["Social Media"],
    year: "2024",
    role: "Social Content Design, Art Direction",
    client: "Personal Project",
    summary: "A warm, lifestyle-photography-led sale promo for a home furniture brand.",
    description: [
      "Furniture campaigns live or die on the room shot, so this post leans on a full-bleed lifestyle photograph with the sale details reduced to a compact, high-contrast panel that doesn't fight the interior styling.",
      "A countdown-timer treatment adds urgency without requiring the graphic itself to change once the campaign is live."
    ],
    cover: "assets/images/projects/packaging-1.jpg",
    gallery: []
  },
  {
    id: "watch-sale",
    title: "Timepiece Sale Campaign",
    categories: ["Social Media"],
    year: "2024",
    role: "Social Content Design, Art Direction",
    client: "Personal Project",
    summary: "A premium product-photography-led sale post for a watch retail brand.",
    description: [
      "For a product this detail-oriented, the photograph does almost all of the work — the layout gets out of the way, using a diagonal color block and a restrained badge treatment to carry the offer instead of heavy graphic elements.",
      "Social icons were built into the corner of the layout so the post can double as a profile-page pin without needing a separate crop."
    ],
    cover: "assets/images/projects/packaging-2.jpg",
    gallery: []
  },
  {
    id: "icecream-campaign",
    title: "Summer Scoop — Ice Cream Campaign",
    categories: ["Social Media"],
    year: "2024",
    role: "Social Content Design, Art Direction",
    client: "Personal Project",
    summary: "A bright, beach-themed seasonal Instagram campaign for an ice cream brand.",
    description: [
      "This seasonal push needed to feel immediate — a beachfront setting, saturated product colors, and a discount tag styled like a physical price tag give the post a sense of a limited-time, in-person offer rather than a generic banner ad.",
      "The palette was pulled directly from the product photography rather than a fixed brand system, letting each seasonal flavor drive its own version of the post."
    ],
    cover: "assets/images/projects/aurora-3.jpg",
    gallery: []
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
