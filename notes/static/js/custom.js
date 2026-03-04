/* ================================================================
   Logseq Presentation Mode — lightweight slide engine
   Trigger: Ctrl+Shift+P  or  toolbar ▶ button
   Nav:     ← → ↑ ↓  Space/n  p  Home  End
   Exit:    Esc / q
   Blackout: b
   ================================================================ */
(function () {
  'use strict';

  var state = { active: false, idx: 0, slides: [] };

  /* ── find top-level blocks ─────────────────────────────── */
  function getSlides() {
    /* try multiple selectors — Logseq OG DOM varies by version */
    var blocks = [];
    var selectors = [
      '.page-blocks-inner > .ls-block',
      '.page > .relative > .ls-block',
      '.blocks-container > .ls-block',
    ];
    for (var i = 0; i < selectors.length; i++) {
      blocks = Array.from(document.querySelectorAll(selectors[i]));
      if (blocks.length) break;
    }
    /* fallback: all ls-blocks whose parent is NOT .block-children */
    if (!blocks.length) {
      blocks = Array.from(document.querySelectorAll('.ls-block')).filter(function (b) {
        return !b.parentElement.classList.contains('block-children');
      });
    }
    /* filter out empty / hr-only blocks */
    return blocks.filter(function (block) {
      var c = block.querySelector('.block-content');
      if (!c) return false;
      var t = c.textContent.trim();
      if (!t || t === '---' || t === '***' || t === '___') return false;
      /* single <hr> child */
      if (c.children.length === 1 && c.children[0] && c.children[0].tagName === 'HR') return false;
      return true;
    });
  }

  /* ── controls overlay ──────────────────────────────────── */
  function createControls() {
    var el = document.createElement('div');
    el.id = 'ls-pres-controls';
    el.innerHTML =
      '<span id="ls-pres-counter">1 / 1</span>' +
      '<button id="ls-pres-prev" title="Previous  ←">&#8249;</button>' +
      '<button id="ls-pres-next" title="Next  →">&#8250;</button>' +
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

  /* ── navigation ────────────────────────────────────────── */
  function showSlide(n) {
    n = Math.max(0, Math.min(n, state.slides.length - 1));
    state.slides.forEach(function (s) { s.classList.remove('ls-pres-active'); });
    state.slides[n].classList.add('ls-pres-active');
    state.idx = n;
    updateCounter();
    state.slides[n].scrollTop = 0;
  }

  function next() { showSlide(state.idx + 1); }
  function prev() { showSlide(state.idx - 1); }

  /* ── enter / exit ──────────────────────────────────────── */
  function enter() {
    state.slides = getSlides();
    if (!state.slides.length) return;
    state.active = true;
    state.idx = 0;
    document.documentElement.classList.add('ls-pres-mode');
    createControls();
    showSlide(0);
  }

  function exit() {
    state.active = false;
    document.documentElement.classList.remove('ls-pres-mode');
    document.documentElement.classList.remove('ls-pres-blackout');
    state.slides.forEach(function (s) { s.classList.remove('ls-pres-active'); });
    var c = document.getElementById('ls-pres-controls');
    if (c) c.remove();
  }

  function toggle() { state.active ? exit() : enter(); }

  /* ── keyboard ──────────────────────────────────────────── */
  document.addEventListener('keydown', function (e) {
    if (!state.active) {
      if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'p') { e.preventDefault(); enter(); }
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
    /* allow controls and interactive elements */
    if (e.target.closest('#ls-pres-controls, a, iframe, video, audio, button, input, select')) return;
    e.preventDefault();
    e.stopPropagation();
  }, true);

  /* ── click anywhere on slide to advance (except controls) */
  document.addEventListener('click', function (e) {
    if (!state.active) return;
    if (e.target.closest('#ls-pres-controls, a, iframe, video, audio, button, input, select')) return;
    e.preventDefault();
    e.stopPropagation();
  }, true);

  /* ── toolbar button ────────────────────────────────────── */
  function injectButton() {
    if (document.getElementById('ls-pres-btn')) return;
    /* try common header locations */
    var target =
      document.querySelector('.cp__header > .r') ||
      document.querySelector('.cp__header .r') ||
      document.querySelector('.cp__header');
    if (!target) return;
    var btn = document.createElement('button');
    btn.id = 'ls-pres-btn';
    btn.title = 'Present (Ctrl+Shift+P)';
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
