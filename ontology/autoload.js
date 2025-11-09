// Auto-load custom ontology JSON when WebVOWL initializes
(function() {
  var originalInitialize = null;
  var ontologyLoaded = false;

  // Intercept WebVOWL's initialize function
  function interceptInitialize() {
    if (typeof webvowl !== 'undefined' && webvowl.app && !originalInitialize) {
      var app = webvowl.app();
      originalInitialize = app.initialize;

      app.initialize = function() {
        // Call original initialize
        originalInitialize.call(app);

        // Load our ontology after initialization
        if (!ontologyLoaded && !window.location.hash) {
          ontologyLoaded = true;
          setTimeout(function() {
            fetch('data/narrativegoldmine-ontology.json')
              .then(function(response) { return response.json(); })
              .then(function(data) {
                if (app.getLoadingModule && typeof app.getLoadingModule === 'function') {
                  var loadingModule = app.getLoadingModule();
                  if (loadingModule && loadingModule.loadOntologyFromText) {
                    loadingModule.loadOntologyFromText(
                      JSON.stringify(data),
                      'narrativegoldmine-ontology',
                      'Narrative Goldmine Ontology'
                    );
                  }
                }
              })
              .catch(function(err) {
                console.error('Failed to load ontology:', err);
              });
          }, 500);
        }
      };
    } else {
      setTimeout(interceptInitialize, 50);
    }
  }

  interceptInitialize();
})();
