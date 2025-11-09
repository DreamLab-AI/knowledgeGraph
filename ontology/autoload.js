// Auto-load custom ontology if no hash parameter present
(function() {
  if (!window.location.hash || window.location.hash === '#') {
    window.location.hash = '#file=data/narrativegoldmine-ontology';
  }
})();
