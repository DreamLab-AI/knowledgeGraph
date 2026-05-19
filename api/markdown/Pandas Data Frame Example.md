public:: true

# Pandas Data Frame Example
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:5af11e107b6fc77602cbd539efa1bd96d914d2cb2bc104598d878ab21e1f8532",
  "@type": "Page",
  "vc:slug": "pandas-data-frame-example",
  "title": "Pandas Data Frame Example",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Pandas Data Frame Example"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```



```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:pandas-data-frame-example:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:5af11e107b6fc77602cbd539efa1bd96d914d2cb2bc104598d878ab21e1f8532"
  },
  "vc:resolutions": [],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


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
