schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/infrastructure#PlottingAGraphUsingMatplotlibPythonLibrary
legacy_uri:: urn:visionclaw:concept:infrastructure:plotting-a-graph-using-matplotlib-python-library
public:: true

# Plotting a graph using matplotlib python library
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:98fb07ce2a77a45a1afc2aa80f3cd8390391d4a86cdf602a29789de209e4b29b",
  "@type": "Page",
  "vc:slug": "plotting-a-graph-using-matplotlib-python-library",
  "title": "Plotting a graph using matplotlib python library",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 1,
  "vc:legacyProperties": [
    {
      "vc:key": "authority-score",
      "vc:value": "0.00"
    },
    {
      "vc:key": "content-hash",
      "vc:value": "sha256-12-3c04aa8df279"
    },
    {
      "vc:key": "context",
      "vc:value": "https://visionclaw.dreamlab-ai.systems/ns/v2"
    },
    {
      "vc:key": "created",
      "vc:value": "2026-04-26T00:00:00Z"
    },
    {
      "vc:key": "domain",
      "vc:value": "infrastructure"
    },
    {
      "vc:key": "iri",
      "vc:value": "http://narrativegoldmine.com/infrastructure#PlottingAGraphUsingMatplotlibPythonLibrary"
    },
    {
      "vc:key": "maturity",
      "vc:value": "draft"
    },
    {
      "vc:key": "modified",
      "vc:value": "2026-04-26T13:00:00Z"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Plotting a graph using matplotlib python library"
    },
    {
      "vc:key": "public",
      "vc:value": "true"
    },
    {
      "vc:key": "quality-score",
      "vc:value": "0.35"
    },
    {
      "vc:key": "rdf-type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "same-as",
      "vc:value": "urn:visionclaw:concept:infrastructure:plotting-a-graph-using-matplotlib-python-library"
    },
    {
      "vc:key": "status",
      "vc:value": "stub"
    },
    {
      "vc:key": "type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "uri",
      "vc:value": "urn:visionclaw:concept:infrastructure:plotting-a-graph-using-matplotlib-python-library"
    },
    {
      "vc:key": "version",
      "vc:value": "2.0.0"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:98fb07ce2a77a45a1afc2aa80f3cd8390391d4a86cdf602a29789de209e4b29b@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:plotting-a-graph-using-matplotlib-python-library",
  "@type": "Class",
  "label": "Plotting a graph using matplotlib python library",
  "definition": "Plotting a graph using matplotlib python library is a technology infrastructure concept and a type of infrastructure.",
  "domain": "infrastructure",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infrastructure",
      "label": "infrastructure"
    }
  ],
  "quality": 0.35,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:plotting-a-graph-using-matplotlib-python-library:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:98fb07ce2a77a45a1afc2aa80f3cd8390391d4a86cdf602a29789de209e4b29b"
  },
  "vc:resolutions": [],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:98fb07ce2a77a45a1afc2aa80f3cd8390391d4a86cdf602a29789de209e4b29b@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Plotting a graph using matplotlib python library is a concept within the ngm domain.

- ### Semantic Classification
  - owl-class:: infrastructure:PlottingAGraphUsingMatplotlibPythonLibrary
  - owl-role:: Concept

- ### Relationships
  - <!-- No relationships defined -->

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
