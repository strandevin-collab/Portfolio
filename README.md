# Evin Strand - Advanced Executive Portfolio & Interactive Decision Dossier

A modern, highly interactive, production-grade web application serving as an executive portfolio for enterprise data, AI systems orchestration, and operations leadership. Built with a modern component-based React stack featuring React Three Fiber (Three.js), React Flow, Framer Motion, and Tailwind CSS.

---

## Architecture & Tech Stack

* **Framework:** React 18 + Vite (Production-grade, optimized with custom Rollup vendor chunking).
* **Styling & Design System:** Tailwind CSS configured for a unified deep dark-mode theme (`#07090e` base) accented with warm metallic tones (brushed copper `#d97736`, amber `#f59e0b`, bronze `#b45309`, and gold `#fbbf24`).
* **3D & Canvas Rendering (React Three Fiber):** 
  * Real-time 3D topographical elevation contour mesh with procedural noise shaders.
  * Physical dynamic lighting that follows mouse coordinates in 3D world space.
  * Subtle camera parallax and mouse-reactive elevation ripples.
* **Physical 3D Bas-Relief Styling:**
  * Physical carved/sculpted aesthetic on all Category and Item cards.
  * Real-time mathematical light vector tracking relative to card center, casting dynamic specular sheen glints and multi-layer drop/inset shadows.
* **Interactive Architecture Diagrams (React Flow):**
  * Dynamic node-based diagram rendering inside the Tactical Detail Modal.
  * Custom tactical nodes categorizing decision phases (*Inception*, *Challenge*, *Strategy*, *Outcome*).
  * Animated pulsing energy edges in metallic copper and amber.
  * Mobile-safe navigation with `panOnScroll={false}` and `preventScrolling={false}` to preserve normal viewport scrolling on touch devices.
  * Lazy-mounted WebGL & React Flow context mounted only when the modal opens to preserve peak performance.
* **Kinetic Typography & Telemetry (Framer Motion):**
  * **Terminal Reveal / Cryptographic Decode:** Text headers scramble through tactical glyphs before rapidly locking into final characters.
  * **Rolling Telemetry Counters:** Numeric performance metrics smoothly tick up from zero to their target values with spring physics upon opening.
* **Decoupled Headless JSON Store:** Complete content separation in `src/data/portfolioData.json`. Updating project narratives, metrics, competencies, or diagram nodes updates the entire UI without modifying components.
* **Three-Level Nested Navigation Architecture (SPA):**
  * **Level 1 (Category Hub):** Executive Hero/Bio, Call-to-Action button group, Core Competencies, and a responsive grid of carved Category Cards.
  * **Level 2 (Sub-Items Grid):** Fluid transition to a grid of specific Item Cards for the selected category with preview telemetry, tags, and thumbnails.
  * **Level 3 (Detail Modal):** Large overlay modal shifting into a split-screen dashboard (Narrative breakdown on the left, interactive React Flow diagram on the right).
  * **Conditional Layouts:** Automatically shifts to a centered single-column layout for items that do not specify diagram nodes.
* **Print & PDF Optimization (`@media print`):**
  * Ink-saving document transformation hiding 3D canvases, interactive controls, and diagrams.
  * High-contrast typography on clean white background with page-break-inside avoidance for executive review and PDF archiving.

---

## Directory Structure

```
Portfolio/
├── public/
│   └── assets/                     # Vector graphics, SVGs, and downloadable documents
│       ├── card-agentic.svg        # Procedural graphic: Agentic prompt architecture
│       ├── card-bas-relief.svg     # Procedural graphic: Dimensional relief & hydrology
│       ├── card-grainger-ai.svg    # Procedural graphic: Enterprise PIM & AI ingestion
│       ├── card-grainger-bench.svg # Procedural graphic: Candidate bench & onboarding
│       ├── card-military.svg       # Procedural graphic: Ballistic data compute & chaplaincy
│       ├── card-skateboards.svg    # Procedural graphic: 12S4P battery & VESC motor telemetry
│       ├── Evin_Strand_Resume.docx # Downloadable resume file
│       └── Evin_Strand_Cover_Letter.pdf # Downloadable portfolio snapshot / cover letter
├── src/
│   ├── components/
│   │   ├── 3d/
│   │   │   └── TopographicalBackground.jsx  # R3F 3D contour terrain & physical lighting
│   │   ├── cards/
│   │   │   ├── BasReliefWrapper.jsx        # Mouse-tracked 3D carved shadow math
│   │   │   ├── CategoryCard.jsx            # Level 1 domain card (Serif headers)
│   │   │   └── ItemCard.jsx                # Level 2 project card with telemetry preview
│   │   ├── detail/
│   │   │   ├── DetailModal.jsx             # Level 3 split-screen dashboard modal
│   │   │   ├── NarrativeView.jsx           # Left-side structured 4-phase narrative
│   │   │   ├── TacticalDiagram.jsx         # Right-side interactive React Flow canvas
│   │   │   ├── TelemetryCounter.jsx        # Framer Motion spring rolling counter
│   │   │   └── TerminalDecoder.jsx         # Cryptographic text scramble/decode FX
│   │   ├── hero/
│   │   │   ├── ButtonGroup.jsx             # Download resume/snapshot & contact buttons
│   │   │   └── HeroSection.jsx             # Executive bio, stats, and doctrine
│   │   ├── navigation/
│   │   │   ├── Breadcrumbs.jsx             # Level 1 → Level 2 → Level 3 breadcrumb path
│   │   │   ├── CategoryHub.jsx             # Level 1 landing view
│   │   │   ├── ContactModal.jsx            # Direct liaison contact dialog
│   │   │   └── SubItemsView.jsx            # Level 2 sub-items grid view
│   │   └── print/
│   │       └── PrintDossier.jsx            # Dedicated monochrome print stylesheet view
│   ├── context/
│   │   └── PortfolioContext.jsx            # 3-level navigation & selection state management
│   ├── data/
│   │   └── portfolioData.json              # Decoupled headless content store
│   ├── styles/
│   │   └── index.css                       # Tailwind layers, Google Fonts & print styles
│   ├── App.jsx                             # Root view orchestrator
│   └── main.jsx                            # React 18 DOM mount
├── legacy_vanilla/                         # Original vanilla build backup
├── index.html                              # Root HTML template
├── package.json                            # Dependencies & scripts
├── postcss.config.js                       # PostCSS configuration
├── tailwind.config.js                      # Custom dark metallic theme & bas-relief shadows
├── vite.config.js                          # Vite build setup with vendor chunking
└── README.md
```

---

## Getting Started

### 1. Installation

Dependencies have been pre-installed. To reinstall or update at any time:

```bash
npm install
```

### 2. Development Server

Start the local Vite development server with hot module replacement (HMR):

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Production Build & Preview

To create an optimized production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

Open the preview URL (e.g., [http://localhost:4173](http://localhost:4173)).

---

## Content Customization

All website content is cleanly decoupled in [`src/data/portfolioData.json`](file:///c:/Users/stran/OneDrive/Other%20School/Documents/AI%20Project%20Folder/Portfolio/src/data/portfolioData.json):

1. **Profile Data:** Update name, tagline, email, phone, location, bio, executive telemetry counters, and download links.
2. **Categories:** Add, remove, or modify Level 1 domain categories (title, subtitle, badge, accentColor).
3. **Item Dossiers:** Add or modify Level 2 item cards and Level 3 detailed narratives (Inception, Challenge, Strategy, Outcome).
4. **React Flow Diagrams:** Set `diagram: { nodes: [...], edges: [...] }` to render an interactive node graph, or set `diagram: null` to render a single-column editorial layout.
