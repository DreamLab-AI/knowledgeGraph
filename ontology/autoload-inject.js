// Auto-load ontology by simulating file upload
(function() {
  console.log('WebVOWL autoload script started');

  function waitForFileInput() {
    var fileInput = document.getElementById('file-converter-input');
    if (!fileInput) {
      console.log('Waiting for file input...');
      setTimeout(waitForFileInput, 200);
      return;
    }

    console.log('File input found, loading ontology...');

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

        // Trigger the change event
        var event = new Event('change', { bubbles: true });
        fileInput.dispatchEvent(event);

        console.log('Ontology file loaded via file input');
      })
      .catch(function(err) {
        console.error('Failed to load ontology:', err);
      });
  }

  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', waitForFileInput);
  } else {
    waitForFileInput();
  }
})();
