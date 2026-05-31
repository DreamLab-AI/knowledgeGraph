/* ================================================================
   Logseq Presentation Mode — lightweight slide engine
   Trigger: F5  or  toolbar play button
   Nav:     left/right  Space/n  p  Home  End
   Exit:    Esc / q
   Blackout: b
   ================================================================ */
(function () {
  'use strict';

  var state = { active: false, idx: 0, slides: [] };

  /* ── find top-level blocks ─────────────────────────────── */
  function getSlides() {
    var blocks = [];
    var matchedSelector = 'fallback';
    var selectors = [
      '.page-blocks-inner > .ls-block',
      '.page > .relative > .ls-block',
      '.blocks-container > .ls-block',
    ];
    for (var i = 0; i < selectors.length; i++) {
      blocks = Array.from(document.querySelectorAll(selectors[i]));
      if (blocks.length) { matchedSelector = selectors[i]; break; }
    }
    /* fallback: all ls-blocks whose parent is NOT .block-children */
    if (!blocks.length) {
      blocks = Array.from(document.querySelectorAll('.ls-block')).filter(function (b) {
        return !b.parentElement.classList.contains('block-children');
      });
    }

    /* If we found only 1-2 top-level blocks and one is a property wrapper,
       Logseq may have nested all content blocks under the page-property block.
       Unwrap: use the property block's direct children instead. */
    if (blocks.length <= 2) {
      var unwrapped = [];
      blocks.forEach(function (b) {
        var bc = b.querySelector(':scope > .block-content, :scope > div > .block-content');
        var isPropWrap = bc && (bc.querySelector('.page-properties') || bc.querySelector('.block-properties'));
        if (isPropWrap && !bc.querySelector('h1')) {
          var children = b.querySelector('.block-children');
          if (children) {
            unwrapped = unwrapped.concat(Array.from(children.querySelectorAll(':scope > .ls-block')));
          }
        } else {
          unwrapped.push(b);
        }
      });
      if (unwrapped.length > blocks.length) {
        console.log('[Pres] Unwrapped property block — found', unwrapped.length, 'children');
        blocks = unwrapped;
      }
    }

    console.log('[Pres] Selector:', matchedSelector, '| Top-level blocks:', blocks.length);
    blocks.forEach(function (b, idx) {
      var c = b.querySelector('.block-content');
      var txt = c ? c.textContent.trim().substring(0, 80) : '(no .block-content)';
      var hasH1 = c ? !!c.querySelector('h1') : false;
      var parentCls = b.parentElement ? b.parentElement.className.substring(0, 60) : 'none';
      console.log('[Pres]  block[' + idx + ']', hasH1 ? 'H1' : '--', JSON.stringify(txt), '| parent:', parentCls);
    });

    /* filter out non-slide blocks */
    return blocks.filter(function (block) {
      var c = block.querySelector('.block-content');
      if (!c) return false;
      /* skip blocks that are themselves collapsed (top-level collapsed:: true) */
      if (block.hasAttribute('data-collapsed') || block.classList.contains('collapsed')) return false;
      var t = c.textContent.trim();
      if (!t || t === '---' || t === '***' || t === '___') return false;
      /* honor slide:: false property */
      if (/slide:{1,2}\s*false/i.test(t)) return false;
      /* single <hr> child */
      if (c.children.length === 1 && c.children[0] && c.children[0].tagName === 'HR') return false;
      /* skip property-only blocks (SPA renders "public:: true" as "public:true") */
      if (/^[a-z-]+:{1,2}\s*/i.test(t) && t.length < 80 && !c.querySelector('h1')) return false;
      /* skip blocks that are just page properties rendered */
      if (c.querySelector('.page-properties') || c.querySelector('.block-properties')) {
        if (!c.querySelector('h1, h2, h3, img, video, table, iframe')) return false;
      }
      /* KEY: only include blocks whose own content has an H1 heading.
         Each slide starts with # Heading in the markdown. Blocks without
         H1 are property blocks, embedded content, or child expansions. */
      if (!c.querySelector('h1')) return false;
      return true;
    });
  }

  /* ── force lazy blocks to render by scrolling ──────────── */
  function forceRenderAll(callback) {
    /* Collect every scrollable ancestor the SPA might use */
    var containers = [
      document.querySelector('.cp__sidebar-main-content'),
      document.querySelector('#main-content-container'),
      document.querySelector('#app-container'),
      document.querySelector('.page'),
      document.body,
      document.documentElement,
    ].filter(Boolean);

    var primary = containers[0];
    var origScroll = primary.scrollTop;
    var stepSize = Math.floor(window.innerHeight * 0.4); /* small steps */
    var pass = 0;
    var maxPasses = 6;

    function scrollAll(pos) {
      for (var j = 0; j < containers.length; j++) containers[j].scrollTop = pos;
      window.scrollTo(0, pos);
      /* fire scroll event so IntersectionObservers see the change */
      try { window.dispatchEvent(new Event('scroll')); } catch (_) {}
      try { primary.dispatchEvent(new Event('scroll', { bubbles: true })); } catch (_) {}
    }

    function getMaxScroll() {
      return Math.max(
        primary.scrollHeight || 0,
        document.body.scrollHeight || 0,
        document.documentElement.scrollHeight || 0
      );
    }

    function doPass() {
      var maxScroll = getMaxScroll();
      var positions = [];
      for (var p = 0; p <= maxScroll; p += stepSize) positions.push(p);
      positions.push(maxScroll);
      var i = 0;

      function step() {
        if (i < positions.length) {
          scrollAll(positions[i]);
          i++;
          setTimeout(step, 120);
        } else {
          pass++;
          var newMax = getMaxScroll();
          /* keep going while new content loads (or do min 2 passes) */
          if (pass < maxPasses && (newMax > maxScroll + 100 || pass < 2)) {
            setTimeout(doPass, 300);
          } else {
            scrollAll(0);
            setTimeout(callback, 400);
          }
        }
      }
      step();
    }
    doPass();
  }

  /* ── hide collapsed section headers within a slide ─────── */
  function hideCollapsedBlocks(slideEl) {
    slideEl.querySelectorAll('.ls-block').forEach(function (block) {
      /* Method 1: SPA sets data-collapsed to a DB-id string (not "true").
         Any truthy value means the block is collapsed. */
      if (block.hasAttribute('data-collapsed') || block.classList.contains('collapsed')) {
        block.classList.add('ls-pres-hidden');
        return;
      }
      var bc = block.querySelector('.block-content');
      if (!bc) return;
      /* keep blocks with headings or media */
      if (bc.querySelector('h1, h2, h3, h4, h5, h6, img, video, table, iframe')) return;
      var text = bc.textContent.trim();
      if (text.length === 0 || text.length > 120) return;
      /* has "collapsed" in text (fallback for other renderings) */
      if (/collapsed/i.test(text)) {
        block.classList.add('ls-pres-hidden');
        return;
      }
      /* has block-children that are hidden (height ≈ 0 but DOM present) */
      var children = block.querySelector('.block-children');
      if (children && children.children.length > 0 && children.offsetHeight < 5) {
        block.classList.add('ls-pres-hidden');
      }
    });
  }

  /* ── controls overlay ──────────────────────────────────── */
  function createControls() {
    var el = document.createElement('div');
    el.id = 'ls-pres-controls';
    el.innerHTML =
      '<span id="ls-pres-counter">1 / 1</span>' +
      '<button id="ls-pres-prev" title="Previous  left">&#8249;</button>' +
      '<button id="ls-pres-next" title="Next  right">&#8250;</button>' +
      '<button id="ls-pres-exit" title="Exit  Esc">&#10005;</button>';
    document.body.appendChild(el);
    document.getElementById('ls-pres-prev').onclick = prev;
    document.getElementById('ls-pres-next').onclick = next;
    document.getElementById('ls-pres-exit').onclick = exit;
  }

  function updateCounter() {
    var el = document.getElementById('ls-pres-counter');
    if (el) el.textContent = (state.idx + 1) + ' / ' + state.slides.length;
  }

  /* ── detect hero slides (image/video-dominant) ────────── */
  function detectHero(slideEl) {
    var media = slideEl.querySelectorAll('.block-content img, .block-content video');
    if (!media.length) { slideEl.classList.remove('ls-pres-hero'); return; }
    /* count text-heavy blocks (>60 chars, no heading/media) */
    var heavy = 0;
    slideEl.querySelectorAll('.block-content').forEach(function (bc) {
      if (bc.querySelector('h1, h2, h3, img, video, table, iframe')) return;
      if (bc.textContent.trim().length > 60) heavy++;
    });
    if (heavy <= 1) {
      slideEl.classList.add('ls-pres-hero');
    } else {
      slideEl.classList.remove('ls-pres-hero');
    }
  }

  /* ── navigation ────────────────────────────────────────── */
  function showSlide(n) {
    n = Math.max(0, Math.min(n, state.slides.length - 1));
    state.slides.forEach(function (s) { s.classList.remove('ls-pres-active'); });
    state.slides[n].classList.add('ls-pres-active');
    state.idx = n;
    updateCounter();
    state.slides[n].scrollTop = 0;
    hideCollapsedBlocks(state.slides[n]);
    detectHero(state.slides[n]);
    /* scroll indicator for overflowing slides */
    var slide = state.slides[n];
    setTimeout(function() {
      var indicator = slide.querySelector('.ls-pres-scroll-hint');
      if (slide.scrollHeight > slide.clientHeight + 50) {
        if (!indicator) {
          indicator = document.createElement('div');
          indicator.className = 'ls-pres-scroll-hint';
          indicator.textContent = '▼';
          slide.appendChild(indicator);
        }
        indicator.style.display = '';
        slide.onscroll = function() {
          if (slide.scrollTop > 30 && indicator) indicator.style.display = 'none';
        };
      } else if (indicator) {
        indicator.style.display = 'none';
      }
    }, 100);
  }

  function next() { showSlide(state.idx + 1); }
  function prev() { showSlide(state.idx - 1); }

  /* ── enter / exit ──────────────────────────────────────── */
  function enter() {
    /* force all lazy blocks to render first */
    forceRenderAll(function () {
      state.slides = getSlides();
      if (!state.slides.length) return;
      /* scroll to each slide block individually to trigger child lazy-loading */
      var primary = document.querySelector('.cp__sidebar-main-content') || document.body;
      var i = 0;
      function visitSlide() {
        if (i < state.slides.length) {
          state.slides[i].scrollIntoView({ behavior: 'instant', block: 'start' });
          try { window.dispatchEvent(new Event('scroll')); } catch (_) {}
          try { primary.dispatchEvent(new Event('scroll', { bubbles: true })); } catch (_) {}
          i++;
          setTimeout(visitSlide, 200);
        } else {
          /* all slides visited — wait for children to materialise, then start */
          setTimeout(function () {
            primary.scrollTop = 0;
            state.active = true;
            state.idx = 0;
            document.documentElement.classList.add('ls-pres-mode');
            createControls();
            showSlide(0);
          }, 500);
        }
      }
      visitSlide();
    });
  }

  function exit() {
    state.active = false;
    document.documentElement.classList.remove('ls-pres-mode');
    document.documentElement.classList.remove('ls-pres-blackout');
    state.slides.forEach(function (s) {
      s.classList.remove('ls-pres-active');
      s.classList.remove('ls-pres-hero');
      /* clean up hidden markers */
      s.querySelectorAll('.ls-pres-hidden').forEach(function (h) {
        h.classList.remove('ls-pres-hidden');
      });
    });
    var c = document.getElementById('ls-pres-controls');
    if (c) c.remove();
  }

  function toggle() { state.active ? exit() : enter(); }

  /* ── keyboard ──────────────────────────────────────────── */
  document.addEventListener('keydown', function (e) {
    if (!state.active) {
      if (e.key === 'F5') { e.preventDefault(); e.stopPropagation(); enter(); }
      return;
    }
    switch (e.key) {
      case 'ArrowRight': case 'ArrowDown': case ' ': case 'n':
        e.preventDefault(); e.stopPropagation(); next(); break;
      case 'ArrowLeft': case 'ArrowUp': case 'p':
        e.preventDefault(); e.stopPropagation(); prev(); break;
      case 'Escape': case 'q':
        e.preventDefault(); e.stopPropagation(); exit(); break;
      case 'Home':
        e.preventDefault(); showSlide(0); break;
      case 'End':
        e.preventDefault(); showSlide(state.slides.length - 1); break;
      case 'b':
        e.preventDefault();
        document.documentElement.classList.toggle('ls-pres-blackout');
        break;
    }
  }, true);  /* capture phase — intercept before Logseq */

  /* ── prevent editor activation while presenting ────────── */
  document.addEventListener('mousedown', function (e) {
    if (!state.active) return;
    if (e.target.closest('#ls-pres-controls, a, iframe, video, audio, button, input, select')) return;
    e.preventDefault();
    e.stopPropagation();
  }, true);

  document.addEventListener('click', function (e) {
    if (!state.active) return;
    if (e.target.closest('#ls-pres-controls, a, iframe, video, audio, button, input, select')) return;
    e.preventDefault();
    e.stopPropagation();
  }, true);

  /* ── toolbar button ────────────────────────────────────── */
  function injectButton() {
    if (document.getElementById('ls-pres-btn')) return;
    var target =
      document.querySelector('.cp__header > .r') ||
      document.querySelector('.cp__header .r') ||
      document.querySelector('.cp__header');
    if (!target) return;
    var btn = document.createElement('button');
    btn.id = 'ls-pres-btn';
    btn.title = 'Present (F5)';
    btn.textContent = '\u25B6';
    btn.setAttribute('style',
      'margin-right:8px;font-size:14px;cursor:pointer;' +
      'background:transparent;border:none;' +
      'color:var(--ls-primary-text-color);opacity:0.6;');
    btn.onmouseenter = function () { btn.style.opacity = '1'; };
    btn.onmouseleave = function () { btn.style.opacity = '0.6'; };
    btn.onclick = toggle;
    target.prepend(btn);
  }

  var _obs = new MutationObserver(injectButton);
  _obs.observe(document.body, { childList: true, subtree: true });
  setTimeout(injectButton, 2000);
})();
