(function() {
  var KROKI_URL = 'https://kroki.io/mermaid/svg';

  function extractCodeMirrorText(codeWrapper) {
    var cmCode = codeWrapper.querySelector('.CodeMirror-code');
    if (cmCode) {
      var lines = cmCode.querySelectorAll('.CodeMirror-line');
      return Array.prototype.map.call(lines, function(line) {
        return line.textContent;
      }).join('\n');
    }
    var textarea = codeWrapper.querySelector('textarea');
    if (textarea) return textarea.value;
    var code = codeWrapper.querySelector('pre code, code');
    if (code) return code.textContent;
    return codeWrapper.textContent;
  }

  function renderViaKroki(source, targetEl, hideEl) {
    if (!source || !source.trim()) return;
    var container = document.createElement('div');
    container.className = 'kroki-diagram';
    container.style.cssText = 'text-align:center;padding:8px;';
    container.innerHTML = '<span style="color:#888">Rendering diagram...</span>';
    targetEl.parentNode.insertBefore(container, targetEl);
    if (hideEl) hideEl.style.display = 'none';

    fetch(KROKI_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain' },
      body: source.trim()
    })
    .then(function(resp) {
      if (!resp.ok) throw new Error('kroki ' + resp.status);
      return resp.text();
    })
    .then(function(svg) {
      container.innerHTML = svg;
      var svgEl = container.querySelector('svg');
      if (svgEl) {
        svgEl.style.maxWidth = '100%';
        svgEl.style.height = 'auto';
      }
    })
    .catch(function(err) {
      console.warn('Kroki render error:', err);
      container.innerHTML = '<span style="color:#f44">Diagram render failed</span>';
      if (hideEl) hideEl.style.display = '';
    });
  }

  function hideRendererText() {
    // Hide {{renderer code_diagram,mermaid}} text that shows as plain text
    var blocks = document.querySelectorAll('.block-content');
    blocks.forEach(function(block) {
      if (block.dataset.krokiChecked) return;
      block.dataset.krokiChecked = 'true';
      var text = block.textContent || '';
      if (text.indexOf('renderer code_diagram,mermaid') !== -1) {
        // Hide just the text node, keep children (the rendered diagram)
        var spans = block.querySelectorAll('span, .inline');
        spans.forEach(function(span) {
          if ((span.textContent || '').indexOf('renderer code_diagram') !== -1) {
            span.style.display = 'none';
          }
        });
      }
    });
  }

  function renderMermaidBlocks() {
    // Strategy 1: Logseq extensions__code with language label
    var langLabels = document.querySelectorAll('.extensions__code-lang');
    langLabels.forEach(function(label) {
      if (label.textContent.trim().toLowerCase() !== 'mermaid') return;
      var wrapper = label.closest('.extensions__code');
      if (!wrapper || wrapper.dataset.krokiProcessed) return;
      wrapper.dataset.krokiProcessed = 'true';
      var source = extractCodeMirrorText(wrapper);
      renderViaKroki(source, wrapper, wrapper);
    });

    // Strategy 2: pre > code.language-mermaid
    var codeEls = document.querySelectorAll(
      'code.language-mermaid, code[data-lang="mermaid"]'
    );
    codeEls.forEach(function(codeEl) {
      var pre = codeEl.closest('pre');
      if (!pre || pre.dataset.krokiProcessed) return;
      pre.dataset.krokiProcessed = 'true';
      renderViaKroki(codeEl.textContent, pre, pre);
    });

    // Also hide renderer macro text
    hideRendererText();
  }

  // Initial render after DOM settles
  setTimeout(renderMermaidBlocks, 1000);

  // Watch for dynamic content changes (SPA navigation)
  var observer = new MutationObserver(function(mutations) {
    var hasNewNodes = mutations.some(function(m) {
      return m.addedNodes.length > 0;
    });
    if (hasNewNodes) {
      clearTimeout(window._krokiDebounce);
      window._krokiDebounce = setTimeout(renderMermaidBlocks, 500);
    }
  });
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
})();
