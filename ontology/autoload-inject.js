// Auto-load ontology by simulating file upload
(function() {
  console.log('WebVOWL autoload script started');

  function waitForWebVOWL() {
    // Wait for WebVOWL to be fully initialized
    var fileInput = document.getElementById('file-converter-input');
    var graph = window.graph;

    if (!fileInput || !graph) {
      console.log('Waiting for WebVOWL initialization...');
      setTimeout(waitForWebVOWL, 500);
      return;
    }

    console.log('WebVOWL initialized, loading ontology...');

    // Fetch the ontology JSON
    fetch('data/narrativegoldmine-ontology.json')
      .then(function(response) { return response.blob(); })
      .then(function(blob) {
        // Create a File object from the blob
        var file = new File([blob], 'narrativegoldmine-ontology.json', { type: 'application/json' });

        // Create a DataTransfer to hold our file
        var dataTransfer = new DataTransfer();
        dataTransfer.items.add(file);

        // Assign to the file input
        fileInput.files = dataTransfer.files;

        // Trigger the change event with a slight delay to ensure handlers are attached
        setTimeout(function() {
          var event = new Event('change', { bubbles: true });
          fileInput.dispatchEvent(event);
          console.log('Ontology file loaded via file input');
        }, 100);
      })
      .catch(function(err) {
        console.error('Failed to load ontology:', err);
      });
  }

  // Wait for window load to ensure all scripts are loaded
  if (document.readyState === 'complete') {
    setTimeout(waitForWebVOWL, 1000);
  } else {
    window.addEventListener('load', function() {
      setTimeout(waitForWebVOWL, 1000);
    });
  }
})();
