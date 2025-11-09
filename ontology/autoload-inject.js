// Directly load ontology JSON into WebVOWL without localStorage
(function() {
  var loaded = false;

  function attemptLoad() {
    if (typeof webvowl === 'undefined' || !webvowl.app) {
      setTimeout(attemptLoad, 100);
      return;
    }

    if (loaded) return;
    loaded = true;

    var app = webvowl.app();

    setTimeout(function() {
      fetch('data/narrativegoldmine-ontology.json')
        .then(function(res) { return res.json(); })
        .then(function(data) {
          var graph = app.graph ? app.graph() : window.graph;

          if (graph && typeof graph.load === 'function') {
            console.log('Loading ontology with', data.class.length, 'classes');
            graph.load(data);
          } else {
            console.error('Graph not available');
          }
        })
        .catch(function(err) {
          console.error('Failed to load ontology:', err);
        });
    }, 1000);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', attemptLoad);
  } else {
    attemptLoad();
  }
})();
