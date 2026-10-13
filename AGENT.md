# AGENT.md — Executive Portfolio System Architecture & Operating Protocol

> **System Blueprint & Autonomous Agent Guidelines for Evin Strand's Executive Portfolio**  
> **Repository:** `https://github.com/strandevin-collab/Portfolio`  
> **Live Production:** `https://strandevin-collab.github.io/Portfolio/`  
> **Version:** 2.0 (Executive Kinetic Edition)  
> **Author & Subject:** Evin Strand — Product Information Analyst • Resilient Team Leader

---

## 1. Executive Identity & Core Narrative

Evin Strand is a Product Information Analyst stewarding enterprise catalog portfolios averaging **$148M+**, with a background as a Wisconsin Army National Guard Fire Direction Specialist (13D) and Chaplain’s Assistant (56M).

### Core Executive Pillars:
1. **Resilient Team Leadership:** Cultivating high-trust, autonomous operational units grounded in psychological safety, structured mentorship, and cross-functional alignment.
2. **People Development & Coaching:** Accelerating talent onboarding (compressing 90-day analyst ramp-up to under 30 days) and championing recognition frameworks.
3. **Continuous Process Improvement:** Eliminating operational drag through standardized playbooks, standard operating procedures, and root-cause workflow analysis (*"Traditions are solutions to forgotten problems"*).
4. **Modern AI & Automation Tooling:** Discovering and deploying high-leverage LLM prompt engineering, Smartsheet automation, and multi-agent workflows to reclaim team capacity.

### Verified Operational Telemetry:
- **$148M+** Enterprise Catalog Scope (W.W. Grainger)
- **60-Day Gain** Onboarding Velocity Acceleration (90 days → 30 days)
- **40% Efficiency** AI Research & Taxonomy Data Reconciliation Gain
- **100% Precision** Ballistic Compute Accuracy (Fort Sill Tactical Compute Academic Honor Graduate)
- **Credentials:** SHRM-CP (Society for Human Resource Management Certified Professional) • B.A. Corporate & Health Communication (Minor: General Business), UW-Whitewater

### Core Philosophy:
> *"Never tell people how to do things. Tell them what to do and they will surprise you with their ingenuity."*  
> — **General George S. Patton**

---

## 2. Technical Stack & Deployment Pipeline

- **Frontend Core:** React 18.3 (`react`, `react-dom`)
- **Build Tool:** Vite 5.4 with `@vitejs/plugin-react`
- **Styling:** Tailwind CSS 3.4 with custom `@layer base` deep blue/ivory tokens, custom scrollbars, and print stylesheets
- **Animation & Physics:** Framer Motion 11 (`motion`, `useSpring`, `useTransform`, `useScroll`, `AnimatePresence`)
- **Interactive Mind Maps:** `@xyflow/react` (React Flow 12) with custom nodes, dagre layouts, and viewport zoom controls
- **Icons:** `lucide-react`
- **3D Foundations:** Three.js / `@react-three/fiber` / `@react-three/drei` (modularized vendor chunks)
- **CI/CD Pipeline:** GitHub Actions (`.github/workflows/deploy.yml`) compiling on `push: main` and publishing to GitHub Pages
- **Base Path:** `base: './'` in `vite.config.js` (ensures zero broken asset paths across subpaths and custom domains)

---

## 3. Three-Tier Navigation Architecture

The portfolio follows a strict 3-tier SPA information hierarchy:

```
Level 1: CategoryHub (Kinetic 3-Scene Presentation Deck, Zero Free Scrolling)
   ├── Scene 1: CinematicCover (100vh Full-Bleed Architectural Intro)
   ├── Scene 2: Executive Profile & Dossier (Ticker + HeroSection + Patton Quote)
   └── Scene 3: Core Domains Gallery (Resume, Stories, AI Projects, Hobbies)
          │
          └── (Click Domain Card)
                 │
Level 2: SubItemsView (Category Sub-Grid, Fluid Scrolling Restored)
   ├── Category Status Banners (e.g. AI Projects Under Construction)
   ├── Item Cards with Bas-Relief Sheen & Telemetry Badges
   └── Integrated Breadcrumb Navigation
          │
          └── (Click Item Card)
                 │
Level 3: DetailModal (Floating Glass Dossier Screen)
   ├── StoryDetailView (Executive Narrative, Mind Map Flowchart, Mobile QR Launcher)
   ├── DocumentDetailView (Curriculum Vitae, Executive Cover Letter, Official Records)
   └── NarrativeView (Physical Specs, Artisan Craftsmanship, Literary Profiles)
```

---

## 4. Page 1 Kinetic Presentation Engine

Page 1 (`CategoryHub.jsx`) is engineered as a **zero free scroll presentation stage**:

1. **Scroll-Locking:**
   - Native free scrolling is completely disabled on Level 1 (`overflow: hidden` on `html, body`).
   - Every scene is guaranteed to land **100% centered** in the viewport without halfway cutoffs or portrait clipping.
2. **Kinetic Slider (`motion.div`):**
   - Moves with a hardware-accelerated transform: `animate={{ y: -${activeSceneIndex * 100}vh }}`.
   - Organic easing curve: `transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}`.
3. **Discrete Gestures:**
   - Mouse wheel and trackpad gestures are intercepted with an 800ms debounce cooldown—flicking the wheel advances strictly 1 scene at a time.
   - Touch drag / swipe up & down advance or return by 1 scene.
   - Keyboard support: `ArrowDown` / `PageDown` (next scene), `ArrowUp` / `PageUp` (previous scene).
4. **Floating Vertical Scene Indicator:**
   - Positioned on the right margin with a minimalist hairline vertical track.
   - Displays `01 // COVER`, `02 // PROFILE`, `03 // DOMAINS`.
   - Active node illuminates with a radiant sapphire beacon and ping aura; clicking any node glides to that scene.
5. **Level 2 Auto-Release:**
   - Navigating to Level 2 (`SubItemsView`) automatically disengages the scroll lock, restoring native fluid scrolling for reading dossiers.

---

## 5. Visual Language & Component Design Standards

### Color Palette:
- **Base Background:** Deep Midnight Navy (`#050a14`, `#070f20`, `#0a1426`)
- **Foreground / Text:** Crisp Ivory (`#fbf9f5`, `#f3f0e6`, `#e2e8f0`)
- **Primary Accent:** Radiant Sapphire & Sky Blue (`#38bdf8`, `#2563eb`, `#60a5fa`)
- **Secondary Accent:** Warm Brass / Amber Gold (`#f59e0b`, `#d97706`)

### Apple-Style 3D Specular Tilt (`BasReliefWrapper.jsx` & `CategoryCard.jsx`):
- Dynamic 3D perspective tilt reacting to cursor coordinates (`perspective: 1000px`, `rotateX: [-7.5°, 7.5°]`, `rotateY: [-7.5°, 7.5°]`, `scale: 1.02`).
- Spring physics: `stiffness: 300, damping: 25, mass: 0.5`.
- Dynamic specular glare overlay reflecting across frosted glass following cursor position.
- Multi-layer spatial Z-axis pop:
  - Cover image thumbnail: `translateZ: 24px`
  - Badge pill: `translateZ: 32px`
  - Typography & headings: `translateZ: 16px`
  - Footer action pill: `translateZ: 20px`

### Editorial Typography (Patton Quote):
- Completely unboxed—no nested card borders or heavy widget rectangles.
- Styled in pure italic serif, backed by a translucent 7xl watermark quotation mark (`“`), accented by a horizontal sapphire hairline, and anchored by location/credentials.

### Color-Harmonized Category Covers (`public/assets/`):
- `editorial_resume_card.jpg`: Slate drafting desk, leather folio, brass pen, desk lamp.
- `editorial_projects_card.jpg`: Executive leadership team at dark table overlooking misty forest with flowcharts.
- `editorial_ai_card.jpg`: Systems war room overlooking dusk pine forest with subtle holographic sapphire node topologies.
- `editorial_hobbies_card.jpg`: Artisan workshop with carbon longboard, leather Tolkien books, brass compass, and Spartan finisher medals.

### Ambient Depth Parallax (`StaticRainForestBackground.jsx`):
- Multi-layer background depth using Framer Motion `useScroll` + `useTransform`.
- Gentle vertical translation of forest trees (`[0, -65px]`) and atmospheric mist vignette (`[0, -25px]`) creating the physical illusion of looking through frosted glass into misty woods.

---

## 6. Executive 1-Pager Print Engine (`PrintDossier.jsx`)

- **Format:** Single-page executive summary layout optimized for print and PDF export.
- **Page Rules:** Defined in `src/styles/index.css` via `@page { size: letter portrait; margin: 8mm 10mm; }`.
- **Content:**
  - Executive header with verified contact coordinates.
  - People-first mission summary and General Patton quote callout.
  - 4-metric Telemetry Summary Box ($148M+, 60-Day Gain, 40% AI Efficiency, 100% Tactical Compute).
  - Executive Career Highlights (W.W. Grainger & Wisconsin Army National Guard).
  - Education & Certifications (UW-Whitewater, SHRM-CP, Tactical Compute Honor Graduate).
- **Trigger:** One-click `Executive 1-Pager (PDF)` buttons in `HeroSection.jsx` and top navigation header invoking `window.print()`.

---

## 7. Rules & Operational Directives for Future AI Agents

When modifying or extending this codebase, **ALL agents must adhere to the following rules**:

1. **Preserve Zero Free Scrolling on Page 1:**
   - Never reintroduce standard unconstrained document scrolling or default scrollbars to `CategoryHub.jsx`. Every scene on Page 1 must remain 100% centered and locked.
2. **Never Add Broken-Button Effects to Cover Telemetry:**
   - The lower-right indicators on `CinematicCover.jsx` (`01 //`, `02 //`, `03 //`, `04 //`) must remain clean, quiet architectural telemetry labels—NEVER make them hover-lift or look like clickable buttons.
3. **Preserve Relative Asset Paths:**
   - Always use `./assets/...` for images, SVGs, and documents. Never use absolute root `/assets/...` because GitHub Pages hosts the repository at subpath `/Portfolio/`.
4. **Mind Map Scroll Isolation:**
   - Any React Flow instance (`TacticalDiagram.jsx`) must keep `zoomOnScroll={false}` and `preventScrolling={true}` so zooming inside the canvas never hijacks page navigation.
5. **No Nested Boxes on Quotes:**
   - Maintain the unboxed, clean editorial typography for executive quotes. Do not wrap quotes in bordered card widgets.
6. **Production Verification Requirement:**
   - Before pushing to `main`, always execute `npm run build` locally to verify that all 2,100+ modules compile with zero syntax or bundle errors.
