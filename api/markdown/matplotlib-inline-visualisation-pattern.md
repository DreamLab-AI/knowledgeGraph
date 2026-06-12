- ### Definition
  - A Logseq-embedded Python code example demonstrating inline data visualisation using matplotlib within a Pyodide runtime. The snippet generates a sinusoidal plot, encodes it as a base64 PNG, and returns it for display inside the knowledge graph note, illustrating programmatic data visualisation within a personal knowledge management environment.

- ### Semantic Classification
  - owl-class:: infrastructure:PlottingAGraphUsingMatplotlibPythonLibrary
  - owl-role:: Concept

- ### Relationships
  - uses: [[Data Visualisation]], [[Python PyTorch Deep Learning Stack]], [[Software Library]]
  - enables: [[Visualization Layer]]
  - relatedTo: [[Open Source Software]]

- ### Content
  - Thanks to **mentaloid** on the logseq forum for this code example
  - ```python
	  import js
	  pyodide = js.logseq.Language.python.Pyodide
	  await pyodide.loadPackage("matplotlib")
	  import matplotlib.pyplot as plt
	  import numpy as np
	  import io, base64
	  plt.clf()
	  plt.title('title')
	  plt.xlabel('xlabel')
	  plt.ylabel('ylabel')
	  plt.grid(True)
	  t = np.arange(0.0, 2.0, 0.01)
	  s = 1+np.sin(2 * np.pi * t)
	  plt.plot(t, s)
	  buf = io.BytesIO()
	  plt.savefig(buf, format='png')
	  buf.seek(0)
	  png = 'data:image/png;base64,'+base64.b64encode(buf.read()).decode('UTF-8')
	  buf.close()
	  png

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z