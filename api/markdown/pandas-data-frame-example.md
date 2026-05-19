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