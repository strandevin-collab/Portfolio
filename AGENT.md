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
- **Interactive Mind Maps:** `@xyflow/react` (React Flow 12) with custom nodes, radial dual-wing layout, `ResizeObserver` auto-centering, and viewport zoom controls
- **Icons:** `lucide-react`
- **CI/CD Pipeline:** GitHub Actions (`.github/workflows/deploy.yml`) compiling on `push: main` and publishing to GitHub Pages
- **Base Path:** `base: './'` in `vite.config.js` (ensures zero broken asset paths across subpaths and custom domains)

---

## 3. Three-Tier Navigation Architecture

The portfolio follows a strict 3-tier SPA information hierarchy managed via `src/context/PortfolioContext.jsx`:

```
Level 1: CategoryHub (Kinetic 3-Scene Presentation Deck, Zero Free Scrolling on Desktop)
   ├── Scene 1: CinematicCover (100vh Full-Bleed Architectural Intro)
   ├── Scene 2: Executive Profile & Dossier (Ticker + HeroSection + Patton Quote)
   └── Scene 3: Core Domains Gallery (Resume, Stories, AI Projects, Hobbies + Integrated Footer Bar)
          │
          ├── (Click Resume / Cover Letter on Level 1) ──> Opens DetailModal directly over Level 1
          │     └── Closing modal returns directly to the exact active Scene (01/02/03)
          │
          └── (Click Domain Card)
                 │
Level 2: SubItemsView (Category Sub-Grid, Fluid Scrolling Restored)
   ├── Category Status Banners (e.g. AI Projects Under Construction)
   ├── Item Cards with Bas-Relief Sheen & Telemetry Badges
   └── Integrated Breadcrumb Navigation & Site Footer
          │
          └── (Click Item Card)
                 │
Level 3: DetailModal (Floating Crystal Glass Dossier Screen)
   ├── Top & Bottom Prev / Next Dossier Cycling (Plus Left/Right Arrow Key Shortcuts)
   ├── StoryDetailView (Executive Narrative, Mind Map Flowchart, Mobile QR Launcher)
   └── DocumentDetailView (Curriculum Vitae, Executive Cover Letter, Military Compute Record)
```

---

## 4. Page 1 Kinetic Presentation Engine

Page 1 (`CategoryHub.jsx`) is engineered as a **zero free scroll presentation stage on desktop with boundary-aware responsive overflow on mobile/tablet**:

1. **Scroll-Locking & Boundary-Aware Scene Stepping:**
   - Native document scrolling is locked on Level 1 (`overflow: hidden` on `html, body`).
   - On desktop screens where each scene fits within `100vh`, wheel/touch/keyboard input snaps immediately to the next or previous scene with zero free scrolling, keeping every scene 100% centered.
   - On mobile, tablet, or compact laptop screens where a scene's cards exceed `100vh`, `canStepScene()` allows smooth internal scrolling inside that scene first and triggers the kinetic scene transition once the user reaches the top or bottom boundary.
2. **Modal Input Isolation:**
   - Wheel, touch, and keyboard listeners in `CategoryHub.jsx` check `if (contactModalOpen || selectedItemId) return;`, and modals enforce `overscroll-contain` so scrolling inside an open modal never shifts the 3-scene stage behind it.
3. **Global Scene Memory (`activeSceneIndex`):**
   - Stored in `PortfolioContext.jsx` so opening a modal or visiting a category and returning to the hub preserves the visitor's active scene (`01 // COVER`, `02 // PROFILE`, or `03 // DOMAINS`).
4. **Kinetic Slider (`motion.div`):**
   - Moves with a hardware-accelerated transform: `animate={{ y: -${activeSceneIndex * 100}vh }}`.
   - Organic easing curve: `transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}`.
5. **Floating Vertical Scene Indicator:**
   - Positioned on the right margin with a minimalist hairline vertical track (`01 // COVER`, `02 // PROFILE`, `03 // DOMAINS`).
   - Active node illuminates with a radiant sapphire beacon and ping aura; clicking any node glides to that scene.

---

## 5. Visual Language & Component Design Standards

### Color Palette & Clear Floating Crystal Glass:
- **Base Background:** Deep Midnight Navy (`#050a14`, `#070f20`, `#0a1426`)
- **Foreground / Text:** Crisp Ivory (`#fbf9f5`, `#f3f0e6`, `#e2e8f0`)
- **Primary Accent:** Radiant Sapphire & Sky Blue (`#38bdf8`, `#2563eb`, `#60a5fa`)
- **Clear Floating Crystal Glass:** Unified across `HeroSection.jsx`, `CategoryCard.jsx`, `DetailModal.jsx`, `DocumentDetailView.jsx`, `StoryDetailView.jsx`, and `ContactModal.jsx` using `bg-white/[0.03] border border-white/10 shadow-[0_15px_35px_rgba(2,6,17,0.45),inset_0_1px_1px_rgba(255,255,255,0.18)]` so the misty forest background bleeds subtly through every glass surface.

### Apple-Style 3D Specular Tilt (`BasReliefWrapper.jsx` & `CategoryCard.jsx`):
- Dynamic 3D perspective tilt reacting to cursor coordinates (`perspective: 1000px`, `rotateX: [-7.5°, 7.5°]`, `rotateY: [-7.5°, 7.5°]`, `scale: 1.02`).
- Spring physics: `stiffness: 300, damping: 25, mass: 0.5`.
- Dynamic specular glare overlay reflecting across frosted glass following cursor position.
- Multi-layer spatial Z-axis pop (`translateZ: 16px` to `32px`).

### Editorial Typography (Patton Quote):
- Completely unboxed—no nested card borders or heavy widget rectangles.
- Styled in pure italic serif, backed by a translucent watermark quotation mark (`“`), accented by a horizontal sapphire hairline, and vertically centered in `HeroSection.jsx`.

### Ambient Depth Parallax (`StaticRainForestBackground.jsx`):
- Synchronized with both `activeSceneIndex` on Level 1 (`0px` → `-32px` → `-64px` with subtle scale progression) and `useScroll` on Level 2 (`SubItemsView`), creating a continuous multi-plane depth shift as the user glides between scenes.

---

## 6. Executive 1-Pager Print Engine (`PrintDossier.jsx`)

- **Format:** Single-page executive summary layout optimized for print and PDF export (`@page { size: letter portrait; margin: 8mm 10mm; }`).
- **Trigger:** One-click `Executive 1-Pager (PDF)` buttons in `HeroSection.jsx` and top navigation header invoking `window.print()`.

---

## 7. Recent Sprint & Architectural Update Log

- **Sprint 13 (Argon Full-System Audit & Polish):**
  - Fixed Direct Modal Return Trap in `PortfolioContext.jsx` and `App.jsx`: opening `Resume Dossier` or `Cover Letter` from Page 1 now keeps `CategoryHub` mounted behind the modal, preserves `Prev / Next` category cycling via `effectiveCategoryId`, and returns directly to the active scene on close.
  - Added boundary-aware responsive scene stepping in `CategoryHub.jsx` so smaller viewports (mobile/tablet/compact laptops) can scroll overflowing scene content before stepping between scenes, while desktop remains 100% locked.
  - Added modal scroll-bleed guards (`contactModalOpen || selectedItemId`) and `overscroll-contain` on `DetailModal.jsx` and `ContactModal.jsx`.
  - Connected `StaticRainForestBackground.jsx` to `activeSceneIndex` so the misty forest canopy and mist layers shift in depth parallax across Scenes 01, 02, and 03.
  - Added an integrated Scene 03 footer bar on Level 1 (`CategoryHub.jsx`) and dual `Previous / Next Dossier` progression bars in `DocumentDetailView.jsx` and `StoryDetailView.jsx`.
  - Added post-animation `fitView` and `ResizeObserver` in `TacticalDiagram.jsx` so React Flow mind maps always center automatically after modal entrance transitions.
  - Removed unused Three.js packages (`three`, `@react-three/fiber`, `@react-three/drei`) and dead files (`TopographicalBackground.jsx`, `NarrativeView.jsx`, root `styles.css`).

---

## 8. Rules & Operational Directives for Future AI Agents

When modifying or extending this codebase, **ALL agents must adhere to the following rules**:

1. **Preserve Zero Free Scrolling on Page 1 Desktop:**
   - Never reintroduce unconstrained document scrolling or default scrollbars to `CategoryHub.jsx`.
2. **Never Add Broken-Button Effects to Cover Telemetry:**
   - The lower-right indicators on `CinematicCover.jsx` (`01 //`, `02 //`, `03 //`, `04 //`) must remain clean, quiet architectural telemetry labels.
3. **Preserve Relative Asset Paths:**
   - Always use `./assets/...` for images, SVGs, and documents so GitHub Pages subpath `/Portfolio/` resolves every asset cleanly.
4. **Mind Map Scroll Isolation:**
   - Any React Flow instance (`TacticalDiagram.jsx`) must keep `zoomOnScroll={false}` and `preventScrolling={true}`.
5. **No Nested Boxes on Quotes:**
   - Maintain unboxed, clean editorial typography for executive quotes.
6. **Production Verification Requirement:**
   - Before pushing to `main`, always execute `npm run build` locally to verify zero build or bundle errors.
