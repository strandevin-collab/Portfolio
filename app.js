/**
 * EVIN STRAND - APPLICATION LOGIC & KINETIC ENGINE (Vanilla JS)
 * Features:
 * - Two-View Architecture (Cover Page Grid <-> Tactical Detail Modal)
 * - Animated Topographical Contour HTML5 Canvas
 * - Bas-Relief Specular Lighting & Elevation Physics
 * - Dynamic vis-network Mind Maps with Flowing Energy Pulses
 * - Fast Cryptographic Text-Decode Effect
 * - Eased Rolling Telemetry Counters
 * - Print-Optimized Executive Dossier Generation
 */

(function () {
  'use strict';

  // State Management
  let activeModalCard = null;
  let currentNetwork = null;
  let networkAnimationId = null;
  let edgePulseOffset = 0;
  let isCanvasRunning = true;

  // DOM Elements
  const topoCanvas = document.getElementById('topoCanvas');
  const cardsGrid = document.getElementById('cardsGrid');
  const categoryFilterBar = document.getElementById('categoryFilterBar');
  const detailModal = document.getElementById('detailModal');
  const modalBackdrop = document.getElementById('modalBackdrop');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalCloseActionBtn = document.getElementById('modalCloseActionBtn');
  const btnPrintSnapshot = document.getElementById('btnPrintSnapshot');
  const quickPrintNavBtn = document.getElementById('quickPrintNavBtn');
  const modalPrintItemBtn = document.getElementById('modalPrintItemBtn');
  const printDossier = document.getElementById('printDossier');

  // ==========================================================================
  // 1. INITIALIZATION & DATA BINDING
  // ==========================================================================
  function initApp() {
    renderCards(PORTFOLIO_DATA.cards);
    setupFilterTabs();
    setupModalListeners();
    setupPrintListeners();
    initTopographicalCanvas();
    animateRollingCounters(document.querySelector('.hero-telemetry-ribbon'));
    generatePrintDossier();
  }

  // ==========================================================================
  // 2. RENDER COVER CARDS GRID (Bas-Relief Effect)
  // ==========================================================================
  function renderCards(cards) {
    cardsGrid.innerHTML = '';

    cards.forEach((card) => {
      const cardEl = document.createElement('article');
      cardEl.className = 'portfolio-card';
      cardEl.dataset.id = card.id;
      cardEl.dataset.category = card.category;
      cardEl.tabIndex = 0;
      cardEl.setAttribute('role', 'button');
      cardEl.setAttribute('aria-label', `View details for ${card.title}`);

      // Build Telemetry Stats markup
      const statsHtml = card.telemetry
        .map(
          (t) => `
          <div class="card-stat">
            <div class="stat-val">${t.prefix || ''}${t.value}${t.suffix || ''}</div>
            <div class="stat-lbl">${t.label}</div>
          </div>
        `
        )
        .join('');

      // Build Tags markup
      const tagsHtml = card.tags
        .slice(0, 3)
        .map((tag) => `<span class="card-tag">${tag}</span>`)
        .join('');

      cardEl.innerHTML = `
        <div class="card-image-box">
          <img src="${card.image}" alt="${card.title}" loading="lazy" />
          <div class="card-badge-overlay">
            <span class="card-badge" style="border-left: 3px solid ${card.accentColor || '#d97736'}">${card.categoryBadge}</span>
          </div>
          <div class="card-timeline-overlay">${card.timeline}</div>
        </div>

        <div class="card-content">
          <div class="card-header-meta">${card.organization} &bull; ${card.role}</div>
          <h3 class="card-title">${card.title}</h3>
          <p class="card-teaser">${card.teaser}</p>

          <div class="card-telemetry-row">
            ${statsHtml}
          </div>

          <div class="card-footer">
            <div class="card-tags">
              ${tagsHtml}
            </div>
            <div class="card-action-cue">
              <span>Inspect</span>
              <i class="fas fa-arrow-right"></i>
            </div>
          </div>
        </div>
      `;

      // Bas-Relief Specular Light Angle tracking on mouse movement
      cardEl.addEventListener('mousemove', (e) => {
        const rect = cardEl.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        cardEl.style.setProperty('--mouse-x', `${x}%`);
        cardEl.style.setProperty('--mouse-y', `${y}%`);
      });

      // Open Modal on click or Enter key
      cardEl.addEventListener('click', () => openDetailModal(card.id));
      cardEl.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openDetailModal(card.id);
        }
      });

      cardsGrid.appendChild(cardEl);
    });
  }

  // Filter Tabs Handler
  function setupFilterTabs() {
    const tabs = categoryFilterBar.querySelectorAll('.filter-tab');
    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        tabs.forEach((t) => t.classList.remove('active'));
        tab.classList.add('active');

        const filter = tab.dataset.filter;
        const allCards = document.querySelectorAll('.portfolio-card');

        allCards.forEach((card) => {
          if (filter === 'all' || card.dataset.category === filter) {
            card.style.display = 'flex';
            card.style.animation = 'fadeIn 0.35s ease forwards';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // ==========================================================================
  // 3. DETAIL MODAL (TACTICAL DASHBOARD & MIND MAP)
  // ==========================================================================
  function openDetailModal(cardId) {
    const card = PORTFOLIO_DATA.cards.find((c) => c.id === cardId);
    if (!card) return;

    activeModalCard = card;

    // Pause background canvas for performance
    isCanvasRunning = false;

    // Populate Headers
    document.getElementById('modalBadge').textContent = card.categoryBadge;
    document.getElementById('modalCategory').textContent = card.category;
    document.getElementById('modalTimeline').textContent = card.timeline;

    const modalTitleEl = document.getElementById('modalTitle');
    modalTitleEl.textContent = card.title;
    scrambleDecodeText(modalTitleEl, card.title);

    document.getElementById('modalSubtitle').textContent = `${card.role} | ${card.organization}`;

    // Populate Telemetry HUD
    const hudContainer = document.getElementById('modalTelemetryHud');
    hudContainer.innerHTML = card.telemetry
      .map(
        (t) => `
        <div class="telemetry-node">
          <div class="telemetry-number" data-counter="${t.value}" data-prefix="${t.prefix || ''}" data-suffix="${t.suffix || ''}">0</div>
          <div class="telemetry-caption">${t.label}</div>
        </div>
      `
      )
      .join('');

    // Trigger rolling counter animation
    animateRollingCounters(hudContainer);

    // Conditional Layout: Split-Screen vs Single Editorial Layout
    const splitLayout = document.getElementById('modalSplitLayout');
    const singleLayout = document.getElementById('modalSingleLayout');

    if (card.mindmap) {
      // Split Screen Layout
      splitLayout.style.display = 'grid';
      singleLayout.style.display = 'none';

      // Populate Story Phases
      document.getElementById('storyInception').textContent = card.story.inception;
      document.getElementById('storyChallenge').textContent = card.story.challenge;
      document.getElementById('storyStrategy').textContent = card.story.strategy;
      document.getElementById('storyOutcome').textContent = card.story.outcome;

      // Populate Tags
      const tagsList = document.getElementById('modalTagsList');
      tagsList.innerHTML = card.tags.map((t) => `<span class="card-tag">${t}</span>`).join('');

      // Show modal window FIRST before initializing vis-network
      detailModal.classList.add('active');
      detailModal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';

      // Render vis-network AFTER layout paint so dimensions calculate correctly
      requestAnimationFrame(() => {
        setTimeout(() => {
          renderDecisionNetwork(card.mindmap, card.accentColor);
        }, 80);
      });
    } else {
      // Single-Column Editorial Layout (for artisan craft/philosophy)
      splitLayout.style.display = 'none';
      singleLayout.style.display = 'block';

      const editorialContainer = document.getElementById('editorialStoryContainer');
      editorialContainer.innerHTML = `
        <div class="editorial-block">
          <h4><i class="fas fa-compass"></i> Inception & Philosophy</h4>
          <p>${card.story.inception}</p>
        </div>
        <div class="editorial-block">
          <h4><i class="fas fa-layer-group"></i> Surface Depth & Dimensional Challenge</h4>
          <p>${card.story.challenge}</p>
        </div>
        <div class="editorial-block">
          <h4><i class="fas fa-water"></i> Hydrology & Mythological Structure</h4>
          <p>${card.story.strategy}</p>
        </div>
        <div class="editorial-block">
          <h4><i class="fas fa-gem"></i> Synthesis & Grounded Leadership</h4>
          <p>${card.story.outcome}</p>
        </div>
        <div class="modal-tags-box" style="margin-top: 1.5rem;">
          <span class="tags-label"><i class="fas fa-tags"></i> Core Disciplines:</span>
          <div class="modal-tags-list">
            ${card.tags.map((t) => `<span class="card-tag">${t}</span>`).join('')}
          </div>
        </div>
      `;

      // Open Modal
      detailModal.classList.add('active');
      detailModal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeDetailModal() {
    detailModal.classList.remove('active');
    detailModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    activeModalCard = null;

    // Resume topographical canvas
    isCanvasRunning = true;

    // Destroy active vis-network to free memory
    if (networkAnimationId) {
      cancelAnimationFrame(networkAnimationId);
      networkAnimationId = null;
    }
    if (currentNetwork) {
      currentNetwork.destroy();
      currentNetwork = null;
    }
  }

  function setupModalListeners() {
    modalCloseBtn.addEventListener('click', closeDetailModal);
    modalCloseActionBtn.addEventListener('click', closeDetailModal);
    modalBackdrop.addEventListener('click', closeDetailModal);

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && detailModal.classList.contains('active')) {
        closeDetailModal();
      }
    });

    // Fit Graph Button
    document.getElementById('btnFitNetwork').addEventListener('click', () => {
      if (currentNetwork) {
        currentNetwork.fit({ animation: { duration: 600, easingFunction: 'easeInOutQuad' } });
      }
    });

    // Freeze / Unfreeze Physics Button
    const btnTogglePhysics = document.getElementById('btnTogglePhysics');
    let physicsEnabled = true;
    btnTogglePhysics.addEventListener('click', () => {
      if (!currentNetwork) return;
      physicsEnabled = !physicsEnabled;
      currentNetwork.setOptions({ physics: { enabled: physicsEnabled } });
      btnTogglePhysics.innerHTML = physicsEnabled
        ? '<i class="fas fa-atom"></i> Freeze'
        : '<i class="fas fa-play"></i> Simulate';
    });
  }

  // ==========================================================================
  // 4. VIS-NETWORK DECISION GRAPH & FLOWING ENERGY ENGINE
  // ==========================================================================
  function renderDecisionNetwork(graphData, accentColor = '#d97736') {
    const container = document.getElementById('networkContainer');
    document.getElementById('networkLoading').style.display = 'none';

    // Map Node Groups to Color Palette
    const groupStyles = {
      inception: { background: '#102a3d', border: '#38bdf8', highlight: '#38bdf8' },
      challenge: { background: '#3b1219', border: '#ef4444', highlight: '#ef4444' },
      decision: { background: '#332308', border: '#f59e0b', highlight: '#fbbf24' },
      outcome: { background: '#0e2e22', border: '#10b981', highlight: '#34d399' }
    };

    // Transform nodes with customized styles
    const nodesArray = graphData.nodes.map((n) => {
      const g = groupStyles[n.group] || groupStyles.decision;
      return {
        id: n.id,
        label: n.label,
        title: n.title,
        shape: 'box',
        margin: 10,
        color: {
          background: g.background,
          border: g.border,
          highlight: { background: g.background, border: g.highlight }
        },
        font: {
          color: '#ffffff',
          face: 'JetBrains Mono',
          size: 12,
          multi: true
        },
        borderWidth: 1.5,
        shadow: {
          enabled: true,
          color: 'rgba(0,0,0,0.5)',
          size: 8,
          x: 2,
          y: 4
        }
      };
    });

    // Configure edges with dashed flow
    const edgesArray = graphData.edges.map((e) => ({
      from: e.from,
      to: e.to,
      label: e.label || '',
      arrows: { to: { enabled: true, scaleFactor: 0.8, type: 'arrow' } },
      color: { color: 'rgba(217, 119, 54, 0.65)', highlight: '#fbbf24' },
      font: { color: '#cbd5e1', size: 10, face: 'JetBrains Mono', strokeWidth: 0, align: 'top' },
      dashes: [6, 4],
      width: 2,
      smooth: { type: 'cubicBezier', forceDirection: 'horizontal', roundness: 0.35 }
    }));

    const data = {
      nodes: new vis.DataSet(nodesArray),
      edges: new vis.DataSet(edgesArray)
    };

    const options = {
      physics: {
        enabled: true,
        solver: 'forceAtlas2Based',
        forceAtlas2Based: {
          gravitationalConstant: -38,
          centralGravity: 0.008,
          springLength: 130,
          springConstant: 0.08,
          damping: 0.85
        },
        stabilization: { iterations: 120 }
      },
      interaction: {
        hover: true,
        tooltipDelay: 150,
        zoomView: true,
        dragView: true
      },
      layout: {
        randomSeed: 42
      }
    };

    if (currentNetwork) {
      currentNetwork.destroy();
    }

    currentNetwork = new vis.Network(container, data, options);

    // After stabilization, fit view smoothly
    currentNetwork.once('stabilizationIterationsDone', () => {
      currentNetwork.fit({ animation: { duration: 500, easingFunction: 'easeOutQuad' } });
    });

    // FLOWING ENERGY ANIMATION: Pulse dashed offset along connecting edges
    currentNetwork.on('afterDrawing', (ctx) => {
      edgePulseOffset = (edgePulseOffset + 0.25) % 20;
    });

    function startPulseLoop() {
      if (currentNetwork && detailModal.classList.contains('active')) {
        currentNetwork.redraw();
        networkAnimationId = requestAnimationFrame(startPulseLoop);
      }
    }

    startPulseLoop();
  }

  // ==========================================================================
  // 5. CRYPTOGRAPHIC TEXT-DECODE SCRAMBLE EFFECT
  // ==========================================================================
  function scrambleDecodeText(element, finalText) {
    const chars = '!<>-_\\/[]{}—=+*^?#________0101';
    let iteration = 0;
    const duration = 24; // ms per step

    const interval = setInterval(() => {
      element.textContent = finalText
        .split('')
        .map((char, index) => {
          if (char === ' ') return ' ';
          if (index < iteration) {
            return finalText[index];
          }
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join('');

      if (iteration >= finalText.length) {
        clearInterval(interval);
        element.textContent = finalText; // Guarantee final string fidelity
      }

      iteration += 1.5;
    }, duration);
  }

  // ==========================================================================
  // 6. ROLLING TELEMETRY COUNTER ANIMATION
  // ==========================================================================
  function animateRollingCounters(container) {
    if (!container) return;
    const counterElements = container.querySelectorAll('[data-counter]');

    counterElements.forEach((el) => {
      const targetVal = parseFloat(el.dataset.counter);
      const prefix = el.dataset.prefix || '';
      const suffix = el.dataset.suffix || '';
      const duration = 1200; // ms
      const startTime = performance.now();

      function updateCounter(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Easing: easeOutExpo
        const easeVal = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        const currentVal = Math.round(easeVal * targetVal);

        el.textContent = `${prefix}${currentVal}${suffix}`;

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        } else {
          el.textContent = `${prefix}${targetVal}${suffix}`;
        }
      }

      requestAnimationFrame(updateCounter);
    });
  }

  // ==========================================================================
  // 7. ANIMATED TOPOGRAPHICAL CONTOUR CANVAS
  // ==========================================================================
  function initTopographicalCanvas() {
    if (!topoCanvas) return;
    const ctx = topoCanvas.getContext('2d');
    let width, height;
    let time = 0;

    function resize() {
      width = topoCanvas.width = window.innerWidth;
      height = topoCanvas.height = window.innerHeight;
    }

    window.addEventListener('resize', resize);
    resize();

    // Subtle dark-on-dark contour elevation lines
    function drawContours() {
      if (!isCanvasRunning || document.hidden) {
        requestAnimationFrame(drawContours);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      time += 0.0018;
      const numLines = 14;
      const stepY = height / numLines;

      for (let i = 0; i < numLines; i++) {
        ctx.beginPath();
        const baseElevation = i * stepY;

        ctx.strokeStyle = i % 3 === 0 ? 'rgba(217, 119, 54, 0.16)' : 'rgba(148, 163, 184, 0.07)';
        ctx.lineWidth = i % 3 === 0 ? 1.5 : 1;

        for (let x = 0; x <= width; x += 30) {
          // Compound wave generation for organic elevation contour look
          const wave1 = Math.sin(x * 0.0022 + time + i * 0.35) * 36;
          const wave2 = Math.cos(x * 0.0041 - time * 0.8 + i * 0.2) * 20;
          const wave3 = Math.sin((x + baseElevation) * 0.0015 + time) * 15;
          const y = baseElevation + wave1 + wave2 + wave3;

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }

      requestAnimationFrame(drawContours);
    }

    drawContours();
  }

  // ==========================================================================
  // 8. PRINT OPTIMIZATION & DOSSIER GENERATION (@media print)
  // ==========================================================================
  function generatePrintDossier() {
    const profile = PORTFOLIO_DATA.profile;

    const cardsHtml = PORTFOLIO_DATA.cards
      .map(
        (c) => `
      <section class="print-card-block">
        <div class="print-card-title">${c.title}</div>
        <div class="print-card-meta">${c.role} &bull; ${c.organization} &bull; ${c.timeline}</div>

        <table class="print-telemetry-table">
          <tr>
            ${c.telemetry.map((t) => `<td><strong>${t.prefix || ''}${t.value}${t.suffix || ''}</strong> &bull; ${t.label}</td>`).join('')}
          </tr>
        </table>

        <div class="print-story-section">
          <p><strong>Inception:</strong> ${c.story.inception}</p>
          <p style="margin-top: 3pt;"><strong>Operational Challenge:</strong> ${c.story.challenge}</p>
          <p style="margin-top: 3pt;"><strong>Strategic Execution:</strong> ${c.story.strategy}</p>
          <p style="margin-top: 3pt;"><strong>Measurable Outcome:</strong> ${c.story.outcome}</p>
        </div>
      </section>
    `
      )
      .join('');

    printDossier.innerHTML = `
      <div class="print-header">
        <div class="print-name">${profile.name}</div>
        <div class="print-contact">
          ${profile.location} &bull; ${profile.phone} &bull; ${profile.email} &bull; linkedin.com/in/evin-strand
        </div>
        <div class="print-summary">
          <strong>Executive Summary:</strong> ${profile.bio}
        </div>
        <div class="print-contact" style="margin-top: 6pt;">
          <strong>Education & Credentials:</strong> ${profile.education.degree} (${profile.education.school}) &bull; ${profile.education.certifications.join(' &bull; ')}
        </div>
      </div>

      <div class="print-section-title">Verified Portfolio Case Studies & Operational Dossier</div>
      ${cardsHtml}
    `;
  }

  function setupPrintListeners() {
    const triggerPrint = (e) => {
      e.preventDefault();
      window.print();
    };

    if (btnPrintSnapshot) btnPrintSnapshot.addEventListener('click', triggerPrint);
    if (quickPrintNavBtn) quickPrintNavBtn.addEventListener('click', triggerPrint);
    if (modalPrintItemBtn) modalPrintItemBtn.addEventListener('click', triggerPrint);
  }

  // ==========================================================================
  // LAUNCH ON DOM CONTENT READY
  // ==========================================================================
  document.addEventListener('DOMContentLoaded', initApp);
})();
