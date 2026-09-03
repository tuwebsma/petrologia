/**
 * LÓGICA PRINCIPAL - PORTAL DE PETROLOGÍA ÍGNEO-METAMÓRFICA (UNRN)
 * Gestión de catálogo de muestras, filtros, visor Lightbox, comparador y glosario.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Estado de la aplicación
  const state = {
    category: 'all',
    search: '',
    location: 'all',
    texture: 'all',
    viewMode: 'grid', // 'grid' | 'flip'
    lightboxSample: null,
    lightboxImgIndex: 0
  };

  // Referencias DOM
  const samplesGrid = document.getElementById('samplesGrid');
  const searchInput = document.getElementById('searchInput');
  const locationSelect = document.getElementById('locationSelect');
  const textureSelect = document.getElementById('textureSelect');
  const resetFiltersBtn = document.getElementById('resetFiltersBtn');
  const categoryTabBtns = document.querySelectorAll('.category-tab-btn');
  const viewModeBtns = document.querySelectorAll('.view-mode-btn');
  const sampleCountBadge = document.getElementById('sampleCountBadge');

  // Lightbox DOM
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxCloseBtn = document.getElementById('lightboxCloseBtn');
  const lightboxMainImg = document.getElementById('lightboxMainImg');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxClassification = document.getElementById('lightboxClassification');
  const lightboxLocation = document.getElementById('lightboxLocation');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxDescription = document.getElementById('lightboxDescription');
  const lightboxPrevBtn = document.getElementById('lightboxPrevBtn');
  const lightboxNextBtn = document.getElementById('lightboxNextBtn');
  const lightboxImgCounter = document.getElementById('lightboxImgCounter');

  // Comparator DOM
  const compSelectA = document.getElementById('compSelectA');
  const compSelectB = document.getElementById('compSelectB');
  const compCardA = document.getElementById('compCardA');
  const compCardB = document.getElementById('compCardB');

  // Glossary DOM
  const glossarySearchInput = document.getElementById('glossarySearchInput');
  const abbreviationsTbody = document.getElementById('abbreviationsTbody');
  const texturesAccordionList = document.getElementById('texturesAccordionList');

  // Theme & Mobile Menu
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const mobileToggleBtn = document.getElementById('mobileToggleBtn');
  const navMenu = document.getElementById('navMenu');

  // =========================================================================
  // 1. INICIALIZACIÓN Y POBLACIÓN DE SELECTORES
  // =========================================================================
  function initApp() {
    initHeroCarousel();
    populateFilterDropdowns();
    populateComparatorDropdowns();
    renderGlossary();
    applyFiltersAndRender();
    setupEventListeners();
    setupTheme();
  }

  let heroCarouselTimer = null;
  let currentHeroSlideIndex = 0;

  function initHeroCarousel() {
    const heroContainer = document.getElementById('heroCarousel');
    if (!heroContainer) return;

    const carouselSamples = SAMPLES_DATA.filter(s => s.images && s.images.length > 0);
    if (carouselSamples.length === 0) return;

    heroContainer.innerHTML = `
      <div class="hero-carousel-slides" id="heroSlidesWrapper" style="position: relative; width: 100%; height: 100%;">
        ${carouselSamples.map((sample, idx) => `
          <div class="hero-carousel-slide ${idx === 0 ? 'active' : ''}" data-index="${idx}" onclick="window.openLightbox('${sample.id}', 0)">
            <img src="${sample.images[0].url}" alt="${sample.name}" />
            <div class="hero-carousel-overlay">
              <span class="hero-carousel-name">${sample.name}</span>
            </div>
          </div>
        `).join('')}
      </div>
      <div class="hero-carousel-nav" id="heroCarouselDots">
        ${carouselSamples.map((_, idx) => `
          <span class="hero-carousel-dot ${idx === 0 ? 'active' : ''}" data-index="${idx}"></span>
        `).join('')}
      </div>
    `;

    const slides = heroContainer.querySelectorAll('.hero-carousel-slide');
    const dots = heroContainer.querySelectorAll('.hero-carousel-dot');

    function goToSlide(index) {
      if (slides.length === 0) return;
      slides[currentHeroSlideIndex].classList.remove('active');
      dots[currentHeroSlideIndex].classList.remove('active');
      currentHeroSlideIndex = (index + slides.length) % slides.length;
      slides[currentHeroSlideIndex].classList.add('active');
      dots[currentHeroSlideIndex].classList.add('active');
    }

    dots.forEach((dot, idx) => {
      dot.addEventListener('click', (e) => {
        e.stopPropagation();
        goToSlide(idx);
        restartTimer();
      });
    });

    function startTimer() {
      heroCarouselTimer = setInterval(() => {
        goToSlide(currentHeroSlideIndex + 1);
      }, 3500);
    }

    function restartTimer() {
      if (heroCarouselTimer) clearInterval(heroCarouselTimer);
      startTimer();
    }

    heroContainer.addEventListener('mouseenter', () => {
      if (heroCarouselTimer) clearInterval(heroCarouselTimer);
    });

    heroContainer.addEventListener('mouseleave', () => {
      startTimer();
    });

    startTimer();
  }

  function populateFilterDropdowns() {
    const locations = new Set();
    const textures = new Set();

    SAMPLES_DATA.forEach(sample => {
      if (sample.location) locations.add(sample.location);
      if (sample.texture) {
        sample.texture.split(',').forEach(t => textures.add(t.trim()));
      }
    });

    locations.forEach(loc => {
      const opt = document.createElement('option');
      opt.value = loc;
      opt.textContent = loc;
      locationSelect.appendChild(opt);
    });

    textures.forEach(tex => {
      const opt = document.createElement('option');
      opt.value = tex;
      opt.textContent = tex;
      textureSelect.appendChild(opt);
    });
  }

  // =========================================================================
  // 2. RENDERIZADO DE MUESTRAS (VISTA GRID Y VISTA FLIP 3D)
  // =========================================================================
  function getFilteredSamples() {
    return SAMPLES_DATA.filter(sample => {
      // Filtro de categoría
      if (state.category !== 'all' && sample.category !== state.category) {
        return false;
      }
      // Filtro de ubicación
      if (state.location !== 'all' && sample.location !== state.location) {
        return false;
      }
      // Filtro de textura
      if (state.texture !== 'all' && (!sample.texture || !sample.texture.toLowerCase().includes(state.texture.toLowerCase()))) {
        return false;
      }
      // Búsqueda por texto (nombre, clasificación, minerales, descripción)
      if (state.search.trim() !== '') {
        const q = state.search.toLowerCase().trim();
        const inName = sample.name.toLowerCase().includes(q);
        const inClass = sample.classification.toLowerCase().includes(q);
        const inLoc = sample.location.toLowerCase().includes(q);
        const inTex = sample.texture ? sample.texture.toLowerCase().includes(q) : false;
        const inDesc = sample.description ? sample.description.toLowerCase().includes(q) : false;
        const inMinerals = sample.mineralComponents ? sample.mineralComponents.some(m => m.toLowerCase().includes(q)) : false;

        if (!inName && !inClass && !inLoc && !inTex && !inDesc && !inMinerals) {
          return false;
        }
      }
      return true;
    });
  }

  function updateCategoryCounts() {
    const total = SAMPLES_DATA.length;
    const maficas = SAMPLES_DATA.filter(s => s.category === 'maficas').length;
    const felsicas = SAMPLES_DATA.filter(s => s.category === 'felsicas').length;
    const piroclasticas = SAMPLES_DATA.filter(s => s.category === 'piroclasticas').length;

    document.querySelector('[data-count="all"]').textContent = total;
    document.querySelector('[data-count="maficas"]').textContent = maficas;
    document.querySelector('[data-count="felsicas"]').textContent = felsicas;
    document.querySelector('[data-count="piroclasticas"]').textContent = piroclasticas;
  }

  function applyFiltersAndRender() {
    updateCategoryCounts();
    const filtered = getFilteredSamples();

    if (sampleCountBadge) {
      sampleCountBadge.textContent = `${filtered.length} ${filtered.length === 1 ? 'muestra' : 'muestras'}`;
    }

    if (filtered.length === 0) {
      samplesGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 64px 20px; background: var(--bg-card); border-radius: var(--radius-lg); border: 1px dashed var(--border-subtle);">
          <div style="font-size: 3rem; margin-bottom: 16px;">🔍</div>
          <h3 style="font-family: var(--font-display); font-size: 1.4rem; color: var(--text-main); margin-bottom: 8px;">No se encontraron muestras coincidentes</h3>
          <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 20px;">Intenta ajustar tus criterios de búsqueda o restablecer los filtros.</p>
          <button class="btn-primary" onclick="window.resetAllFilters()">Restablecer Filtros</button>
        </div>
      `;
      return;
    }

    if (state.viewMode === 'grid') {
      renderStandardGrid(filtered);
    } else {
      renderFlipCardsGrid(filtered);
    }
  }

  function renderStandardGrid(samples) {
    samplesGrid.className = 'samples-grid';
    samplesGrid.innerHTML = samples.map(sample => {
      const rawImg = sample.images && sample.images[0] ? sample.images[0].url : '';
      const primaryImg = encodeURI(rawImg);
      const fallbackImg = sample.images && sample.images[0] && sample.images[0].fallbackUrl ? sample.images[0].fallbackUrl : primaryImg;
      const imgAlt = sample.images && sample.images[0] && sample.images[0].alt ? sample.images[0].alt : `${sample.name} - ${sample.classification}`;
      const imgCount = sample.images ? sample.images.length : 0;
      const mineralsHtml = sample.mineralComponents
        ? sample.mineralComponents.slice(0, 4).map(m => `<span class="mineral-chip">${m}</span>`).join('')
        : '';

      return `
        <article class="sample-card" data-id="${sample.id}">
          <div class="sample-image-container" onclick="window.openLightbox('${sample.id}', 0)">
            <img class="sample-image" src="${primaryImg}" onerror="if (this.src !== '${fallbackImg}') this.src = '${fallbackImg}';" alt="${imgAlt}" loading="lazy" />
            <div class="sample-image-overlay">
              <span class="sample-category-badge ${sample.category}">${sample.categoryLabel}</span>
              <button class="zoom-hint-btn" title="Explorar fotomicrografías">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                ${imgCount > 1 ? `${imgCount} fotos` : 'Ver detalle'}
              </button>
            </div>
          </div>

          <div class="sample-card-body">
            <div class="sample-header-row">
              <h3 class="sample-name">${sample.name}</h3>
            </div>
            <div class="sample-classification">${sample.classification}</div>
            
            <div class="sample-location-row">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              <span>${sample.location}</span>
            </div>

            <div class="sample-meta-grid">
              <div class="meta-field">
                <span class="meta-label">Textura</span>
                <span class="meta-val">${sample.texture || 'N/A'}</span>
              </div>
              <div class="meta-field">

              </div>
            </div>

            <div class="sample-minerals-list">
              ${mineralsHtml}
            </div>

            <div class="sample-accordion" id="acc-${sample.id}">
              <button class="accordion-trigger-btn" onclick="window.toggleAccordion('${sample.id}')">
                <span>Descripción Petrográfica</span>
                <svg class="accordion-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </button>
              <div class="accordion-content">
                <p>${highlightPetroTerms(sample.description)}</p>
                ${sample.images && sample.images[0] && sample.images[0].caption ? `
                  <div class="epigraph-box">
                    <strong>Referencia de imagen:</strong><br>
                    ${highlightPetroTerms(sample.images[0].caption)}
                  </div>
                ` : ''}
              </div>
            </div>
          </div>
        </article>
      `;
    }).join('');
  }

  function renderFlipCardsGrid(samples) {
    samplesGrid.className = 'flip-cards-container';
    samplesGrid.innerHTML = samples.map(sample => {
      const primaryImg = sample.images && sample.images[0] ? sample.images[0].url : '';
      const fallbackImg = sample.images && sample.images[0] && sample.images[0].fallbackUrl ? sample.images[0].fallbackUrl : primaryImg;
      const imgAlt = sample.images && sample.images[0] && sample.images[0].alt ? sample.images[0].alt : `${sample.name} - ${sample.classification}`;
      return `
        <div class="flip-card-wrapper" onclick="this.classList.toggle('flipped')">
          <div class="flip-card-inner">
            <!-- CARA FRONTAL -->
            <div class="flip-card-front">
              <div style="height: 240px; position: relative; overflow: hidden;">
                <img src="${primaryImg}" onerror="if (this.src !== '${fallbackImg}') this.src = '${fallbackImg}';" alt="${imgAlt}" style="width: 100%; height: 100%; object-fit: cover;" />
                <span class="sample-category-badge ${sample.category}" style="position: absolute; top: 14px; left: 14px;">${sample.categoryLabel}</span>
              </div>
              <div style="padding: 20px; flex-grow: 1; display: flex; flex-direction: column;">
                <h3 style="font-family: var(--font-display); font-size: 1.3rem; margin-bottom: 4px;">${sample.name}</h3>
                <div style="font-style: italic; color: var(--accent-emerald); font-size: 0.95rem; margin-bottom: 12px;">${sample.classification}</div>
                <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 8px;"><strong>📍 Origen:</strong> ${sample.location}</p>
                <p style="font-size: 0.85rem; color: var(--text-muted);"><strong>🔬 Textura:</strong> ${sample.texture}</p>
                <div class="flip-instruction-pill">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/></svg>
                  Tocar para dar vuelta
                </div>
              </div>
            </div>

            <!-- CARA TRASERA -->
            <div class="flip-card-back">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
                <span style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--accent-amber); font-weight: 700;">FICHA PETROGRÁFICA</span>
                <span style="font-size: 0.8rem; color: var(--text-faint);">${sample.name}</span>
              </div>
              <h4 style="font-family: var(--font-display); font-size: 1.15rem; color: var(--text-main); margin-bottom: 8px;">${sample.classification}</h4>
              <p style="font-size: 0.85rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 14px;">${sample.description}</p>
              
              <div style="margin-top: auto; padding-top: 12px; border-top: 1px solid var(--border);">
                <button class="btn-primary" style="width: 100%; padding: 10px; font-size: 0.85rem; justify-content: center;" onclick="event.stopPropagation(); window.openLightbox('${sample.id}', 0)">
                  🔍 Ver Fotomicrografías HD
                </button>
              </div>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  // =========================================================================
  // 3. VISOR LIGHTBOX DE ALTA DEFINICIÓN
  // =========================================================================
  window.openLightbox = function (sampleId, imgIndex = 0) {
    const sample = SAMPLES_DATA.find(s => s.id === sampleId);
    if (!sample || !sample.images || sample.images.length === 0) return;

    state.lightboxSample = sample;
    state.lightboxImgIndex = imgIndex;

    updateLightboxView();
    lightboxModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  function updateLightboxView() {
    const sample = state.lightboxSample;
    const imgObj = sample.images[state.lightboxImgIndex];

    lightboxMainImg.src = imgObj.url;
    lightboxMainImg.alt = imgObj.alt || `${sample.name} - ${sample.classification}`;
    lightboxMainImg.onerror = function () {
      if (imgObj.fallbackUrl && this.src !== imgObj.fallbackUrl) {
        this.src = imgObj.fallbackUrl;
      }
    };
    lightboxTitle.textContent = sample.name;
    const lightboxClassElem = document.getElementById('lightboxClassification');
    if (lightboxClassElem) {
      lightboxClassElem.textContent = '';
      lightboxClassElem.style.display = 'none';
    }
    lightboxLocation.textContent = `📍 ${sample.location}`;
    lightboxCaption.innerHTML = highlightPetroTerms(imgObj.caption || '');
    lightboxDescription.innerHTML = highlightPetroTerms(sample.description);

    if (sample.images.length > 1) {
      lightboxImgCounter.textContent = `${state.lightboxImgIndex + 1} / ${sample.images.length}`;
      lightboxPrevBtn.style.display = 'block';
      lightboxNextBtn.style.display = 'block';
    } else {
      lightboxImgCounter.textContent = '1 / 1';
      lightboxPrevBtn.style.display = 'none';
      lightboxNextBtn.style.display = 'none';
    }
  }

  function closeLightbox() {
    lightboxModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  function nextLightboxImg() {
    if (!state.lightboxSample) return;
    state.lightboxImgIndex = (state.lightboxImgIndex + 1) % state.lightboxSample.images.length;
    updateLightboxView();
  }

  function prevLightboxImg() {
    if (!state.lightboxSample) return;
    state.lightboxImgIndex = (state.lightboxImgIndex - 1 + state.lightboxSample.images.length) % state.lightboxSample.images.length;
    updateLightboxView();
  }

  // =========================================================================
  // 4. COMPARADOR PETROGRÁFICO
  // =========================================================================
  function populateComparatorDropdowns() {
    if (!compSelectA || !compSelectB) return;

    compSelectA.innerHTML = '';
    compSelectB.innerHTML = '';

    SAMPLES_DATA.forEach(s => {
      const optA = document.createElement('option');
      optA.value = s.id;
      optA.textContent = `${s.name} (${s.classification})`;
      compSelectA.appendChild(optA);

      const optB = document.createElement('option');
      optB.value = s.id;
      optB.textContent = `${s.name} (${s.classification})`;
      compSelectB.appendChild(optB);
    });

    // Muestras por defecto interesantes (ej. Basalto 94A vs Ignimbrita CAL 21-2a)
    if (SAMPLES_DATA.length > 1) {
      compSelectA.value = SAMPLES_DATA[0].id;
      compSelectB.value = SAMPLES_DATA.find(s => s.category === 'piroclasticas')?.id || SAMPLES_DATA[1].id;
    }

    renderComparator();
  }

  function renderComparator() {
    const idA = compSelectA.value;
    const idB = compSelectB.value;

    const sampleA = SAMPLES_DATA.find(s => s.id === idA);
    const sampleB = SAMPLES_DATA.find(s => s.id === idB);

    if (sampleA && compCardA) {
      compCardA.innerHTML = generateCompCardHtml(sampleA);
    }
    if (sampleB && compCardB) {
      compCardB.innerHTML = generateCompCardHtml(sampleB);
    }
  }

  function generateCompCardHtml(sample) {
    const primaryImg = sample.images && sample.images[0] ? sample.images[0].url : '';
    const fallbackImg = sample.images && sample.images[0] && sample.images[0].fallbackUrl ? sample.images[0].fallbackUrl : primaryImg;
    const imgAlt = sample.images && sample.images[0] && sample.images[0].alt ? sample.images[0].alt : `${sample.name} - ${sample.classification}`;
    return `
      <h3>${sample.name}</h3>
      <div class="comp-class">${sample.classification}</div>
      <img class="comp-thumb" src="${primaryImg}" onerror="if (this.src !== '${fallbackImg}') this.src = '${fallbackImg}';" alt="${imgAlt}" onclick="window.openLightbox('${sample.id}', 0)" />
      
      <div class="comp-spec-row">
        <span class="spec-label">Categoría</span>
        <span class="spec-value">${sample.categoryLabel}</span>
      </div>
      <div class="comp-spec-row">
        <span class="spec-label">Ubicación</span>
        <span class="spec-value">${sample.location}</span>
      </div>
      <div class="comp-spec-row">
        <span class="spec-label">Textura principal</span>
        <span class="spec-value">${sample.texture}</span>
      </div>
      <div class="comp-spec-row">
        <span class="spec-label">Cristalinidad</span>
        <span class="spec-value">${sample.crystallinity || 'N/A'}</span>
      </div>
      <div class="comp-spec-row">
        <span class="spec-label">Fenocristales / Clastos</span>
        <span class="spec-value">${sample.phenocrysts || 'N/A'}</span>
      </div>
      <div class="comp-spec-row">
        <span class="spec-label">Pasta / Matriz</span>
        <span class="spec-value">${sample.groundmass || 'N/A'}</span>
      </div>
      <div style="margin-top: 16px;">
        <span class="spec-label" style="display:block; margin-bottom: 6px;">Minerales principales:</span>
        <div style="display: flex; flex-wrap: wrap; gap: 4px;">
          ${(sample.mineralComponents || []).map(m => `<span class="mineral-chip">${m}</span>`).join('')}
        </div>
      </div>
    `;
  }

  // =========================================================================
  // 5. GLOSARIO Y ABREVIATURAS (WHITNEY & EVANS, 2010)
  // =========================================================================
  function renderGlossary(filterText = '') {
    if (!abbreviationsTbody || !texturesAccordionList) return;

    const q = filterText.toLowerCase().trim();

    // Tabla de Abreviaturas
    const filteredAbbr = GLOSSARY_DATA.abbreviations.filter(item =>
      item.code.toLowerCase().includes(q) ||
      item.name.toLowerCase().includes(q) ||
      item.desc.toLowerCase().includes(q)
    );

    abbreviationsTbody.innerHTML = filteredAbbr.map(item => `
      <tr>
        <td><span class="code-badge">${item.code}</span></td>
        <td><strong>${item.name}</strong><br><small style="color: var(--text-faint);">${item.type}</small></td>
      </tr>
    `).join('');

    // Texturas
    const filteredTex = GLOSSARY_DATA.textures.filter(item =>
      item.name.toLowerCase().includes(q) ||
      item.desc.toLowerCase().includes(q)
    );

    texturesAccordionList.innerHTML = filteredTex.map((t, idx) => `
      <div style="background: rgba(0,0,0,0.2); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 16px; margin-bottom: 12px;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
          <strong style="color: var(--accent-emerald); font-size: 1rem;">${t.name}</strong>
        </div>
        <p style="font-size: 0.85rem; color: var(--text-muted); line-height: 1.5;">${t.desc}</p>
      </div>
    `).join('');
  }

  // =========================================================================
  // 6. UTILIDADES & HIGHLIGHTER DE ABREVIATURAS MINERALES
  // =========================================================================
  function highlightPetroTerms(text) {
    if (!text) return '';
    // Abreviaturas comunes para resaltar con badges en el texto
    const terms = ['Pl', 'Cpx', 'Opx', 'Olv', 'Idg', 'Qz', 'Kfs', 'Fsp', 'Bt', 'Am', 'Anf', 'Op', 'Ves', 'Amig', 'Ef', 'Tz', 'Fm', 'Vit', 'Lit', 'Lm', 'Lv', 'Lt', 'Mc', 'Vd', 'Bn', 'Bnr', 'QAPF', 'QAP'];
    let formatted = text;

    terms.forEach(t => {
      const regex = new RegExp(`\\b(${t})\\b`, 'g');
      formatted = formatted.replace(regex, `<span class="mineral-chip highlight" title="Abreviatura petrográfica: $1">$1</span>`);
    });

    return formatted;
  }

  window.toggleAccordion = function (id) {
    const acc = document.getElementById(`acc-${id}`);
    if (acc) {
      acc.classList.toggle('open');
    }
  };

  window.resetAllFilters = function () {
    state.category = 'all';
    state.search = '';
    state.location = 'all';
    state.texture = 'all';

    searchInput.value = '';
    locationSelect.value = 'all';
    textureSelect.value = 'all';

    categoryTabBtns.forEach(b => b.classList.remove('active'));
    document.querySelector('[data-category="all"]').classList.add('active');

    applyFiltersAndRender();
  };

  // =========================================================================
  // 7. EVENT LISTENERS
  // =========================================================================
  function setupEventListeners() {
    // Tabs de categoría
    categoryTabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        categoryTabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.category = btn.dataset.category;
        applyFiltersAndRender();
      });
    });

    // Búsqueda
    searchInput.addEventListener('input', (e) => {
      state.search = e.target.value;
      applyFiltersAndRender();
    });

    // Selectores de ubicación y textura
    locationSelect.addEventListener('change', (e) => {
      state.location = e.target.value;
      applyFiltersAndRender();
    });

    textureSelect.addEventListener('change', (e) => {
      state.texture = e.target.value;
      applyFiltersAndRender();
    });

    resetFiltersBtn.addEventListener('click', window.resetAllFilters);

    // Conmutador de vista (Grid vs Flip Cards)
    viewModeBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        viewModeBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.viewMode = btn.dataset.mode;
        applyFiltersAndRender();
      });
    });

    // Comparador
    if (compSelectA && compSelectB) {
      compSelectA.addEventListener('change', renderComparator);
      compSelectB.addEventListener('change', renderComparator);
    }

    // Buscador de Glosario
    if (glossarySearchInput) {
      glossarySearchInput.addEventListener('input', (e) => {
        renderGlossary(e.target.value);
      });
    }

    // Lightbox Controls
    lightboxCloseBtn.addEventListener('click', closeLightbox);
    lightboxPrevBtn.addEventListener('click', prevLightboxImg);
    lightboxNextBtn.addEventListener('click', nextLightboxImg);

    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) closeLightbox();
    });

    document.addEventListener('keydown', (e) => {
      if (!lightboxModal.classList.contains('active')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextLightboxImg();
      if (e.key === 'ArrowLeft') prevLightboxImg();
    });

    // Navegación Header Sticky Scroll
    const siteHeader = document.getElementById('siteHeader');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        siteHeader.classList.add('scrolled');
      } else {
        siteHeader.classList.remove('scrolled');
      }
    });

    // Menú móvil
    if (mobileToggleBtn && navMenu) {
      mobileToggleBtn.addEventListener('click', () => {
        navMenu.classList.toggle('open');
      });

      document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
          navMenu.classList.remove('open');
        });
      });
    }
  }

  function setupTheme() {
    const savedTheme = localStorage.getItem('petro_theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);

    if (themeToggleBtn) {
      themeToggleBtn.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme');
        const next = current === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('petro_theme', next);
      });
    }
  }

  // Arrancar
  initApp();
});
