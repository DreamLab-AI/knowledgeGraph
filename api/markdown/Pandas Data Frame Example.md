iri:: http://narrativegoldmine.com/infrastructure#PandasDataFrameExample
uri:: urn:visionclaw:concept:infrastructure:pandas-data-frame-example
rdf-type:: owl:Class
same-as:: urn:visionclaw:concept:infrastructure:pandas-data-frame-example
type:: owl:Class
context:: https://visionclaw.dreamlab-ai.systems/ns/v2
domain:: infrastructure
preferred-term:: Pandas Data Frame Example
content-hash:: sha256-12-87204d348515
status:: stub
maturity:: draft
quality-score:: 0.35
authority-score:: 0.00
version:: 2.0.0
created:: 2026-04-26T00:00:00Z
modified:: 2026-04-26T13:00:00Z
public:: true

- ### Definition
  - Pandas Data Frame Example is a concept within the ngm domain.

- ### Semantic Classification
  - owl-class:: infrastructure:PandasDataFrameExample
  - owl-role:: Concept

- ### Relationships
  - <!-- No relationships defined -->

- ### Content
  - ```python
  import js
  pyodide = js.logseq.Language.python.Pyodide
  await pyodide.loadPackage("matplotlib")
  await pyodide.loadPackage("pandas")
  import matplotlib.pyplot as plt
  import numpy as np
  import io, base64
  import pandas as pd
  df = pd.DataFrame({"Height":[1345, 1309, 1296, 1291, 1258]}, 
                    		index = ['Ben Nevis', 'B Macdui', 'Braeriach', 'Cairn Toul', 'Uaine'])
  df.plot.barh()
  plt.title("Scottish Hills Height")
  buf = io.BytesIO()
  plt.savefig(buf, format='png')
  buf.seek(0)
  png = 'data:image/png;base64,'+base64.b64encode(buf.read()).decode('UTF-8')
  buf.close()
  png

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
