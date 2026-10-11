/**
 * PORTFOLIO DATA STORE (Local Headless CMS)
 * Candidate: Evin Strand
 * Role: Product Information Analyst | AI & Systems Orchestration | Hybrid Operations Specialist
 * Location: Hutchinson Island, FL
 *
 * This data file powers both the Cover Page Grid and the Tactical Detail Dashboard Modals.
 * Modifying values here dynamically updates the entire application without altering markup.
 */

const PORTFOLIO_DATA = {
  profile: {
    name: "Evin Strand",
    tagline: "Product Information Analyst | Systems & AI Orchestration | Hybrid Operations",
    location: "Hutchinson Island, FL",
    email: "strandevin@gmail.com",
    phone: "(262) 325-2112",
    education: {
      degree: "B.A. Corporate & Health Communication (Minor: General Business)",
      school: "University of Wisconsin-Whitewater",
      certifications: ["SHRM-CP | Certified Professional", "US Army Field Artillery School (Lawton, OK)"]
    },
    bio: "Product Information Analyst at Grainger stewarding enterprise catalog operations valued at $148M+. Former Wisconsin Army National Guard Fire Direction Specialist and Chaplain's Assistant. Bridges high-stakes data integrity, generative AI workflow acceleration, and high-empathy team stewardship with an artisan's commitment to precision engineering.",
    coreCompetencies: [
      "Enterprise PIM Architecture",
      "Generative AI Workflow Integration",
      "Smartsheet Automation",
      "Tactical Data Accuracy (100%)",
      "Attrition Modeling & Retention",
      "Cross-Functional Stakeholder Alignment",
      "Hybrid Team Leadership",
      "Prompt Systems Architecture"
    ],
    downloads: {
      resumePdf: "./assets/Evin_Strand_Resume.pdf",
      snapshotPdf: "./assets/Evin_Strand_Portfolio_Dossier.pdf"
    },
    socialLinks: [
      { label: "Email", icon: "fas fa-envelope", url: "mailto:strandevin@gmail.com" },
      { label: "Phone", icon: "fas fa-phone", url: "tel:2623252112" },
      { label: "Location", icon: "fas fa-location-dot", url: "#" },
      { label: "LinkedIn", icon: "fab fa-linkedin-in", url: "https://linkedin.com/in/evin-strand" }
    ]
  },

  cards: [
    {
      id: "grainger-ai-research",
      image: "./assets/card-grainger-ai.svg",
      category: "Enterprise Analytics",
      categoryBadge: "Enterprise Data",
      title: "AI-Augmented Supplier Research & PIM Transformation",
      role: "Product Information Analyst",
      organization: "Grainger Industrial Supply",
      timeline: "2023 – Present",
      teaser: "Spearheading AI-powered taxonomy and supplier ingestion workflows across high-velocity product lines, slashing task cycle times by 40% across a $148M project portfolio.",
      telemetry: [
        { label: "Portfolio Value", value: 148, prefix: "$", suffix: "M", precision: 0 },
        { label: "Task Time Cut", value: 40, prefix: "", suffix: "%", precision: 0 },
        { label: "Concurrent Streams", value: 3, prefix: "", suffix: " Projects", precision: 0 }
      ],
      tags: ["AI Integration", "Product Information Management", "Supplier Research", "Catalog Optimization", "Stakeholder Alignment"],
      story: {
        inception: "Grainger's massive enterprise catalog demands absolute data fidelity across millions of SKUs. Product information ingestion from hundreds of external suppliers was traditionally labor-intensive, creating friction in catalog updates and time-to-market.",
        challenge: "Supplier spec sheets arrived in chaotic, non-standardized formats—ranging from disparate PDFs to unstructured spreadsheets. Analysts had to manually interpret specifications, cross-reference internal taxonomies, and adjudicate discrepancies under tight release schedules.",
        strategy: "Pioneered the integration of generative AI parsing frameworks into the supplier research pipeline. Formulated domain-specific prompt models to extract technical attributes, validate SKU dimensions, and flag catalog anomalies before committing to the enterprise PIM system.",
        outcome: "Achieved a verified 40% reduction in research task completion time. Freed analyst bandwidth to pivot from manual data entry to strategic supplier quality consultations, accelerating catalog velocity while safeguarding multi-million-dollar inventory investments."
      },
      mindmap: {
        nodes: [
          { id: 1, label: "Inception: Multi-Supplier Ingestion Bottleneck", group: "inception", title: "Unstructured supplier data slowing catalog releases" },
          { id: 2, label: "Challenge: Heterogeneous Spec Formats", group: "challenge", title: "PDFs, spreadsheets, and conflicting attribute schemas" },
          { id: 3, label: "Audit: $148M Portfolio Risk Analysis", group: "challenge", title: "High-value catalog lines vulnerable to delayed updates" },
          { id: 4, label: "Decision: AI Workflow Integration", group: "decision", title: "Deploy structured prompts for automated attribute extraction" },
          { id: 5, label: "Architecture: PIM Pipeline Validation", group: "decision", title: "Real-time anomaly checks against master taxonomy" },
          { id: 6, label: "Outcome: 40% Cycle Time Reduction", group: "outcome", title: "Near half-time reduction in analyst processing hours" },
          { id: 7, label: "Value: Data-Driven Action Plans", group: "outcome", title: "Elevated supplier relations and on-time catalog deployment" }
        ],
        edges: [
          { from: 1, to: 2, label: "Identified" },
          { from: 1, to: 3, label: "Scope" },
          { from: 2, to: 4, label: "Solution" },
          { from: 3, to: 4, label: "Governance" },
          { from: 4, to: 5, label: "Execution" },
          { from: 5, to: 6, label: "Impact" },
          { from: 6, to: 7, label: "Strategic Lift" }
        ]
      },
      accentColor: "#d97736"
    },

    {
      id: "grainger-talent-bench",
      image: "./assets/card-grainger-bench.svg",
      category: "Operations & Leadership",
      categoryBadge: "People Systems",
      title: "Candidate Bench Strategy & Onboarding Acceleration",
      role: "Hiring Manager (Stretch) & CX Supervisor",
      organization: "Grainger Industrial Supply",
      timeline: "2021 – 2023",
      teaser: "Engineered automated recruitment tracking in Smartsheet and restructured hybrid onboarding, cutting time-to-proficiency by 60 days while conducting 40 weekly interviews during a major site merger.",
      telemetry: [
        { label: "Onboarding Gain", value: 60, prefix: "", suffix: " Days Faster", precision: 0 },
        { label: "Weekly Interviews", value: 40, prefix: "", suffix: " / Wk", precision: 0 },
        { label: "Stakeholders Aligned", value: 25, prefix: "", suffix: "+ Partners", precision: 0 },
        { label: "Hybrid Team Size", value: 16, prefix: "", suffix: " Reps", precision: 0 }
      ],
      tags: ["Smartsheet Automation", "Attrition Analysis", "Onboarding Redesign", "Hybrid Leadership", "Talent Bench"],
      story: {
        inception: "A complex corporate site merger demanded the consolidation of two high-volume recruiting operations while simultaneously addressing operational friction in new hire time-to-proficiency.",
        challenge: "Managing 40 candidate interviews weekly across 25+ cross-functional stakeholders risked interview fatigue, inconsistent candidate evaluations, and lengthy ramp-up times that exacerbated early-tenure attrition.",
        strategy: "Designed and rolled out an automated 'Candidate Bench' tracking infrastructure using Smartsheet dashboards with automated status notifications. Re-engineered the new hire curriculum around modular experiential learning and instituted peer-led 'Lunch-&-Learn' leadership workshops.",
        outcome: "Compressed new-hire time-to-confidence and autonomy by an average of 60 days. Delivered real-time attrition telemetry to senior executives, establishing a predictable talent pipeline that supported the corporate merger smoothly."
      },
      mindmap: {
        nodes: [
          { id: 10, label: "Context: Corporate Site Merger", group: "inception", title: "Dual recruiting streams merging under tight deadlines" },
          { id: 11, label: "Challenge: 40 Interviews/Week Bottleneck", group: "challenge", title: "Disparate evaluation criteria across 25+ stakeholders" },
          { id: 12, label: "Challenge: 90-Day Ramp Friction", group: "challenge", title: "Extended latency before new hires reached operational confidence" },
          { id: 13, label: "Decision: Smartsheet Automated Pipeline", group: "decision", title: "Live candidate telemetry and milestone trigger alerts" },
          { id: 14, label: "Decision: Modular Onboarding Curriculum", group: "decision", title: "Peer-led coaching and structured behavioral milestones" },
          { id: 15, label: "Outcome: 60-Day Proficiency Acceleration", group: "outcome", title: "Two full months shaved off new hire ramp cycles" },
          { id: 16, label: "Outcome: Stabilized Attrition Rates", group: "outcome", title: "Measurable retention improvement reported to executive VP" }
        ],
        edges: [
          { from: 10, to: 11, label: "Demands" },
          { from: 10, to: 12, label: "Exposed" },
          { from: 11, to: 13, label: "Centralized" },
          { from: 12, to: 14, label: "Restructured" },
          { from: 13, to: 15, label: "Velocity" },
          { from: 14, to: 15, label: "Mastery" },
          { from: 15, to: 16, label: "Retention" }
        ]
      },
      accentColor: "#f59e0b"
    },

    {
      id: "military-fire-direction",
      image: "./assets/card-military.svg",
      category: "Defense & Logistics",
      categoryBadge: "High-Stakes Systems",
      title: "Tactical Automated Data Systems & Pastoral Care Liaison",
      role: "Fire Direction Specialist & Chaplain's Assistant",
      organization: "Army National Guard – Wisconsin",
      timeline: "2016 – 2022",
      teaser: "Maintained 100% tactical data accuracy on automated artillery compute networks under extreme conditions, while serving as a confidential liaison between command and enlisted personnel.",
      telemetry: [
        { label: "Data Accuracy", value: 100, prefix: "", suffix: "%", precision: 0 },
        { label: "Service Tenure", value: 6, prefix: "", suffix: " Years", precision: 0 },
        { label: "Discretion Level", value: 100, prefix: "", suffix: "% Strict", precision: 0 }
      ],
      tags: ["Tactical Compute", "High-Stress Comms", "Confidential Liaison", "System Redundancy", "Ethical Stewardship"],
      story: {
        inception: "Field Artillery operations permit zero margin for error. A single digit transposition in ballistic data, meteorological offsets, or grid coordinates can lead to catastrophic mission failure.",
        challenge: "Computing real-time ballistic firing solutions across distributed, secure radio and digital data networks while operating in dynamic field environments with degraded communications.",
        strategy: "Executed strict dual-operator verification protocols on automated tactical data computing systems. Simultaneously, in the role of Chaplain's Assistant, established a trusted confidential communication conduit between soldiers and commanding officers, defusing personnel crises before operational impact.",
        outcome: "Maintained a 100% data fidelity record throughout 6 years of field artillery service. Built a reputation for unflappable calm under pressure, combining clinical mathematical accuracy with human-centered empathy."
      },
      mindmap: {
        nodes: [
          { id: 20, label: "Doctrine: Zero-Tolerance Data Error", group: "inception", title: "Live-fire artillery calculations require absolute fidelity" },
          { id: 21, label: "Challenge: Degraded Comms & High Stress", group: "challenge", title: "Adverse field weather, electromagnetic noise, rapid tactical shifts" },
          { id: 22, label: "Challenge: Personnel Morale & Isolation", group: "challenge", title: "Soldiers facing acute stress without direct confidential outlets" },
          { id: 23, label: "Decision: Automated Redundant Telemetry", group: "decision", title: "Dual-system cross-checks on tactical ballistic terminals" },
          { id: 24, label: "Decision: Confidential Pastoral Conduit", group: "decision", title: "Strict ethical bridge between leadership and frontline personnel" },
          { id: 25, label: "Outcome: 100% Computational Accuracy", group: "outcome", title: "Flawless ballistic transmission record across military exercises" },
          { id: 26, label: "Outcome: Resilient Unit Trust", group: "outcome", title: "Early de-escalation of acute stress events preserving unit readiness" }
        ],
        edges: [
          { from: 20, to: 21, label: "Operational Context" },
          { from: 20, to: 22, label: "Human Dimension" },
          { from: 21, to: 23, label: "Hardened" },
          { from: 22, to: 24, label: "Protected" },
          { from: 23, to: 25, label: "Verification" },
          { from: 24, to: 26, label: "Integrity" }
        ]
      },
      accentColor: "#38bdf8"
    },

    {
      id: "agentic-prompt-architecture",
      image: "./assets/card-agentic.svg",
      category: "AI & Systems Architecture",
      categoryBadge: "The 'Meta' Build",
      title: "Agentic Orchestration & Closed-Loop Prompt Engineering",
      role: "Lead Systems Architect & Prompt Engineer",
      organization: "Antigravity Autonomous Build",
      timeline: "2026",
      teaser: "Engineered a closed-loop, system-level prompt architecture that orchestrated Google Antigravity to autonomously synthesize unstructured notes, design a Two-View SPA, and render kinetic mind maps.",
      telemetry: [
        { label: "Build Tools", value: 0, prefix: "", suffix: " (Pure Vanilla)", precision: 0 },
        { label: "Kinetic Micro-Interactions", value: 5, prefix: "", suffix: " Custom FX", precision: 0 },
        { label: "Data Architecture", value: 100, prefix: "", suffix: "% Decoupled", precision: 0 }
      ],
      tags: ["Agentic AI", "Prompt Architecture", "Kinetic UI", "Vanilla JS", "Vis-Network", "System Constraints"],
      story: {
        inception: "Recognized that modern portfolio sites are often bloated with megabytes of JavaScript frameworks. Set out to demonstrate that advanced AI prompt engineering can generate a bespoke, zero-dependency architectural masterpiece directly from unstructured notes.",
        challenge: "AI agents easily drift into boilerplate React scaffolds, hallucinate broken APIs, or drop crucial visual polish unless constrained by strict architectural and kinetic specifications.",
        strategy: "Crafted a multi-layered master prompt enforcing a Two-View SPA architecture, decoupled JSON headless data layer, dynamic bas-relief shadow mathematics, and post-visibility vis-network graph rendering with flowing edge pulses.",
        outcome: "This live application is the direct proof of execution. The prompt successfully directed the AI agent to compile documents, compute SVG geometry, generate topographical contours, and deliver production-ready code in a single seamless iteration."
      },
      mindmap: {
        nodes: [
          { id: 30, label: "Vision: Closed-Loop AI Orchestration", group: "inception", title: "Prove advanced AI capability through self-referential execution" },
          { id: 31, label: "Challenge: Framework Bloat & AI Drift", group: "challenge", title: "Avoid heavy node_modules; enforce strict vanilla constraints" },
          { id: 32, label: "Challenge: Dynamic Graph Canvas Sizing", group: "challenge", title: "Overcome modal display:none zero-dimension canvas bug" },
          { id: 33, label: "Decision: Decoupled Headless JSON Store", group: "decision", title: "Clean data.js architecture mirroring enterprise PIM principles" },
          { id: 34, label: "Decision: Kinetic Energy Animation Engine", group: "decision", title: "Custom vis-network edge pulse and cryptographic decode FX" },
          { id: 35, label: "Outcome: Zero-Dependency Architecture", group: "outcome", title: "Instant-load SPA running natively on any browser or print sheet" },
          { id: 36, label: "Outcome: Living Proof of AI Mastery", group: "outcome", title: "An interview artifact that demonstrates prompt leadership directly" }
        ],
        edges: [
          { from: 30, to: 31, label: "Architectural Boundary" },
          { from: 30, to: 32, label: "UI Trap" },
          { from: 31, to: 33, label: "Decoupled" },
          { from: 32, to: 34, label: "Engineered" },
          { from: 33, to: 35, label: "Simplicity" },
          { from: 34, to: 36, label: "Validation" },
          { from: 35, to: 36, label: "Synthesis" }
        ]
      },
      accentColor: "#fbbf24"
    },

    {
      id: "custom-electric-skateboards",
      image: "./assets/card-skateboards.svg",
      category: "Artisanal Engineering",
      categoryBadge: "Hardware & Firmware",
      title: "High-Discharge Custom Electric Skateboards & VESC Telemetry",
      role: "Builder & Firmware Tuner",
      organization: "Independent Garage Lab",
      timeline: "Ongoing",
      teaser: "Engineered bespoke personal electric vehicles from scratch: spot-welded 12S4P 21700 lithium battery packs, programmed VESC field-oriented motor control, and machined CNC drivetrains.",
      telemetry: [
        { label: "Battery Pack", value: 12, prefix: "", suffix: "S4P Molicel", precision: 0 },
        { label: "Max Velocity", value: 42, prefix: "", suffix: " MPH", precision: 0 },
        { label: "Continuous Current", value: 80, prefix: "", suffix: " Amps", precision: 0 }
      ],
      tags: ["VESC Tuning", "Lithium Battery Spot-Welding", "BMS Telemetry", "Mechanical Drivetrains", "Thermal Modeling"],
      story: {
        inception: "Commercial electric skateboards are often constrained by off-the-shelf plastic enclosures, generic speed controllers, and thermal throttling under heavy incline loads. Demanded an uncompromising personal vehicle built for high torque and custom road geometry.",
        challenge: "Balancing high amp-draw thermal dissipation with battery pack structural rigidity, vibration dampening, and fail-safe regenerative braking that never cuts out on steep descents.",
        strategy: "Spot-welded pure nickel busbars onto Molicel 21700 cells with individual cell balancing. Programmed open-source VESC (Variable Electronic Speed Controller) firmware with customized Field-Oriented Control (FOC) curves and live Bluetooth telemetry.",
        outcome: "Constructed dual-motor belt-drive boards capable of sustained 40+ mph with smooth, predictable throttle response. Direct hands-on mastery of electrical thermodynamics, mechanical tolerances, and firmware tuning."
      },
      mindmap: {
        nodes: [
          { id: 40, label: "Inception: Limitations of Off-The-Shelf Boards", group: "inception", title: "Thermal throttling and rigid commercial constraints" },
          { id: 41, label: "Challenge: 80A Thermal Dissipation & Vibration", group: "challenge", title: "Road shock stresses on solder joints and high-draw thermal creep" },
          { id: 42, label: "Decision: 12S4P Molicel Custom Battery Rig", group: "decision", title: "Precision spot-welded nickel sheets with smart Bluetooth BMS" },
          { id: 43, label: "Decision: VESC Field-Oriented Control Tuning", group: "decision", title: "Fine-grained throttle curves and linear regenerative braking" },
          { id: 44, label: "Outcome: High-Reliability 40+ MPH Drivetrain", group: "outcome", title: "Zero cutout failures across hundreds of miles of road testing" }
        ],
        edges: [
          { from: 40, to: 41, label: "Identified" },
          { from: 41, to: 42, label: "Hardware Solution" },
          { from: 42, to: 43, label: "Firmware Pairing" },
          { from: 43, to: 44, label: "Empirical Result" }
        ]
      },
      accentColor: "#ef4444"
    },

    {
      id: "craft-bas-relief-tolkien",
      image: "./assets/card-bas-relief.svg",
      category: "Tactile Craft & Philosophy",
      categoryBadge: "Craft & Thought",
      title: "3D Bas-Relief Art, Saltwater Hydrology & Tolkien Lore",
      role: "Sculptural Designer & Lore Scholar",
      organization: "Personal Studio | Hutchinson Island, FL",
      timeline: "Ongoing",
      teaser: "Exploring physical surface depth through sub-millimeter bas-relief modeling, reading Atlantic tidal currents, and analyzing the linguistic frameworks of Middle-earth.",
      telemetry: [
        { label: "Relief Depth", value: 3, prefix: "±", suffix: " mm", precision: 1 },
        { label: "Tidal Cycles", value: 24, prefix: "", suffix: " Hr Observation", precision: 0 },
        { label: "Lore Architecture", value: 70, prefix: "", suffix: "+ Years", precision: 0 }
      ],
      tags: ["3D Bas-Relief", "Specular Lighting", "Coastal Hydrology", "Tolkien Legendarium", "Patience & Stewardship"],
      story: {
        inception: "The human mind thrives when rigorous analytical data work is grounded by tactile craftsmanship and deep narrative philosophy. Bas-relief art, coastal saltwater fishing, and Tolkien's mythopoeia form a cohesive philosophy of patient observation.",
        challenge: "In bas-relief, three-dimensional form must be compressed into mere millimeters of depth using shadow angles and specular highlights—a discipline directly mirrored in this website's carved UI cards. In saltwater fishing, success depends entirely on reading subtle hydrological changes in coastal tides.",
        strategy: "Apply the same methodical patience required in enterprise data analysis to physical crafts: calculating light falloff across carved contours, studying Atlantic lunar tides along Hutchinson Island, and examining how Tolkien's philology created enduring mythological consistency.",
        outcome: "A balanced, deeply grounded perspective. The discipline of the craft reinforces professional integrity: respecting the materials, honoring the history, and understanding that lasting structures are built with patient, meticulous care."
      },
      mindmap: null, // Gracefully demonstrates the single-column editorial modal layout!
      accentColor: "#10b981"
    }
  ]
};
